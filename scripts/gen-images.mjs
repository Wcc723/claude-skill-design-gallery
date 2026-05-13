#!/usr/bin/env node
import { readFile, mkdir, readdir, stat, copyFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import sharp from 'sharp';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const CODEX_GEN_DIR = path.join(os.homedir(), '.codex', 'generated_images');

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

const slug = arg('slug');
const parallel = Number(arg('parallel', 3));
const skipExisting = !process.argv.includes('--force');

if (!slug) {
  console.error('Usage: node scripts/gen-images.mjs --slug <design-slug> [--parallel 3] [--force]');
  process.exit(1);
}

const manifestPath = path.join(ROOT, '.claude', 'skills', slug, 'assets-manifest.json');
const outDir = path.join(ROOT, 'public', 'works', slug, 'assets');

async function runCodex(prompt, sizeHint) {
  const fullPrompt = [
    `請使用內建的 image generation 工具，產生一張 ${sizeHint} 解析度的高品質圖片。`,
    '',
    '圖片需求：',
    prompt,
    '',
    '只生成 1 張圖。生成完成後印出一行「DONE: <生成檔案絕對路徑>」即可，不要做任何其他事。',
  ].join('\n');

  return new Promise((resolve, reject) => {
    const child = spawn(
      'codex',
      ['exec', '--skip-git-repo-check', '--sandbox', 'workspace-write', '-C', '/tmp', fullPrompt],
      { stdio: ['ignore', 'pipe', 'pipe'] },
    );
    let out = '';
    let err = '';
    child.stdout.on('data', (d) => (out += d.toString()));
    child.stderr.on('data', (d) => (err += d.toString()));
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`codex exited ${code}: ${err}`));
        return;
      }
      resolve(out);
    });
  });
}

async function newestCodexImage(beforeTs) {
  if (!existsSync(CODEX_GEN_DIR)) return null;
  const sessions = await readdir(CODEX_GEN_DIR);
  let best = null;
  for (const s of sessions) {
    const sDir = path.join(CODEX_GEN_DIR, s);
    const st = await stat(sDir).catch(() => null);
    if (!st || !st.isDirectory()) continue;
    const files = await readdir(sDir);
    for (const f of files) {
      if (!/\.(png|webp|jpg|jpeg)$/i.test(f)) continue;
      const p = path.join(sDir, f);
      const fst = await stat(p);
      if (fst.mtimeMs < beforeTs) continue;
      if (!best || fst.mtimeMs > best.mtime) best = { path: p, mtime: fst.mtimeMs };
    }
  }
  return best?.path ?? null;
}

async function generateOne(item) {
  const targetPath = path.join(outDir, item.filename);
  if (skipExisting && existsSync(targetPath)) {
    return { filename: item.filename, status: 'skipped' };
  }
  const sizeHint = item.size || '1024x1024';
  const startTs = Date.now();

  try {
    await runCodex(item.prompt, sizeHint);
  } catch (e) {
    return { filename: item.filename, status: 'error', error: e.message };
  }

  const src = await newestCodexImage(startTs - 1000);
  if (!src) return { filename: item.filename, status: 'error', error: 'no_codex_output' };

  const [w, h] = (sizeHint.match(/(\d+)x(\d+)/) || [null, '1024', '1024']).slice(1).map(Number);
  await mkdir(outDir, { recursive: true });

  try {
    await sharp(src)
      .resize(w, h, { fit: 'cover', position: 'centre' })
      .webp({ quality: 78 })
      .toFile(targetPath);
  } catch (e) {
    // 若 sharp 處理失敗，至少把原檔複製過去
    await copyFile(src, targetPath.replace(/\.webp$/, '.png'));
    return { filename: item.filename, status: 'warn', error: `sharp_failed:${e.message}` };
  }

  return { filename: item.filename, status: 'ok', target: targetPath };
}

async function main() {
  if (!existsSync(manifestPath)) {
    console.error(`Manifest not found: ${manifestPath}`);
    process.exit(1);
  }
  const manifest = JSON.parse(await readFile(manifestPath, 'utf-8'));
  const images = manifest.images || [];
  if (!images.length) {
    console.log(`[${slug}] no images declared`);
    return;
  }

  await mkdir(outDir, { recursive: true });
  console.log(`[${slug}] generating ${images.length} images (parallel=${parallel})`);

  const results = [];
  for (let i = 0; i < images.length; i += parallel) {
    const batch = images.slice(i, i + parallel);
    const batchResults = await Promise.all(batch.map(generateOne));
    results.push(...batchResults);
    for (const r of batchResults) {
      const tag = r.status === 'ok' ? '✓' : r.status === 'skipped' ? '·' : r.status === 'warn' ? '!' : '✗';
      console.log(`  ${tag} ${r.filename}${r.error ? ' — ' + r.error : ''}`);
    }
  }

  const ok = results.filter((r) => r.status === 'ok').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const errors = results.filter((r) => r.status === 'error');
  console.log(`[${slug}] done: ${ok} new, ${skipped} skipped, ${errors.length} errors`);
  if (errors.length) {
    console.log(`[${slug}] errors:`, JSON.stringify(errors, null, 2));
    process.exit(2);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
