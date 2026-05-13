#!/usr/bin/env node
import { existsSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { mkdir, rm, rename } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';
import { chromium } from 'playwright';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

const slugArg = arg('slug');
const allMode = process.argv.includes('--all');
const motionOnly = process.argv.includes('--motion-only');
const WIDTH = Number(arg('width', 1280));
const HEIGHT = Number(arg('height', 800));
const SECONDS = Number(arg('seconds', 3));

function ffmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let err = '';
    proc.stderr.on('data', (d) => (err += d.toString()));
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}: ${err.slice(-400)}`));
    });
  });
}

async function recordOne(browser, slug) {
  const htmlPath = path.join(ROOT, 'public', 'works', slug, 'index.html');
  if (!existsSync(htmlPath)) {
    console.log(`✗ ${slug} — index.html missing`);
    return false;
  }
  const outDir = path.join(ROOT, 'public', 'works', slug);
  const finalWebm = path.join(outDir, 'thumb.webm');

  const tmpDir = await import('node:fs/promises').then((m) =>
    m.mkdtemp(path.join(os.tmpdir(), `webm-${slug}-`)),
  );

  const ctx = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    recordVideo: { dir: tmpDir, size: { width: WIDTH, height: HEIGHT } },
    reducedMotion: 'no-preference',
  });
  const page = await ctx.newPage();
  try {
    const url = 'file://' + htmlPath;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(400);

    // 動畫劇本：滑鼠移動 + 慢速捲動 + 中間暫停讓 reveal 動畫成形
    const totalMs = SECONDS * 1000;
    const half = totalMs / 2;
    const step = 50;
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    const maxScroll = Math.max(0, pageHeight - HEIGHT);

    const startTs = Date.now();
    // 同時觸發 mousemove + scroll 動畫
    while (Date.now() - startTs < totalMs) {
      const elapsed = Date.now() - startTs;
      const progress = Math.min(1, elapsed / totalMs);
      // 滑鼠 path：左 → 中 → 右 → 中
      const mxFrac = 0.2 + 0.6 * Math.sin(progress * Math.PI);
      const myFrac = 0.4 + 0.2 * Math.cos(progress * Math.PI * 2);
      await page.mouse.move(WIDTH * mxFrac, HEIGHT * myFrac);
      // scroll：前半段下、後半段回到中
      let scrollFrac;
      if (elapsed < half) scrollFrac = elapsed / half;
      else scrollFrac = 1 - (elapsed - half) / half;
      await page.evaluate((y) => window.scrollTo(0, y), maxScroll * scrollFrac);
      await page.waitForTimeout(step);
    }

    await page.close();
    await ctx.close();
  } catch (e) {
    console.log(`✗ ${slug} — ${e.message}`);
    try {
      await page.close();
    } catch {}
    try {
      await ctx.close();
    } catch {}
    await rm(tmpDir, { recursive: true, force: true });
    return false;
  }

  // Playwright 寫的 .webm 在 tmpDir 內
  const files = readdirSync(tmpDir).filter((f) => f.endsWith('.webm'));
  if (!files.length) {
    console.log(`✗ ${slug} — no webm produced`);
    await rm(tmpDir, { recursive: true, force: true });
    return false;
  }
  const rawWebm = path.join(tmpDir, files[0]);

  // 用 ffmpeg 重編碼為 VP9 + 縮小、cap 在 SECONDS 秒、確保檔案 < 150KB
  // crf 35-42 範圍試一遍
  const SIZE_CAP = 350 * 1024; // 放寬上限
  let succeeded = false;
  // 動態多的頁面（marquee / scroll-progress 等）難壓縮，提高 crf 範圍
  for (const [crf, scaleRatio, fps] of [
    [42, 0.7, 24],
    [48, 0.65, 22],
    [52, 0.6, 20],
    [56, 0.55, 18],
    [60, 0.5, 16],
  ]) {
    try {
      await ffmpeg([
        '-y',
        '-i', rawWebm,
        '-t', String(SECONDS),
        '-c:v', 'libvpx-vp9',
        '-b:v', '0',
        '-crf', String(crf),
        '-pix_fmt', 'yuv420p',
        '-vf', `scale=${Math.round(WIDTH * scaleRatio)}:-2:flags=lanczos,fps=${fps}`,
        '-an',
        '-deadline', 'realtime',
        '-cpu-used', '4',
        finalWebm,
      ]);
      const size = statSync(finalWebm).size;
      if (size <= SIZE_CAP) {
        console.log(`✓ ${slug} — ${(size / 1024).toFixed(1)} KB (crf=${crf} scale=${scaleRatio})`);
        succeeded = true;
        break;
      }
      console.log(`  ${slug} crf=${crf} scale=${scaleRatio} → ${(size / 1024).toFixed(1)} KB, retrying...`);
    } catch (e) {
      console.log(`  ffmpeg failed crf=${crf}: ${e.message.slice(0, 200)}`);
    }
  }

  await rm(tmpDir, { recursive: true, force: true });
  if (!succeeded) console.log(`✗ ${slug} — could not get webm under ${(SIZE_CAP / 1024).toFixed(0)}KB`);
  return succeeded;
}

async function main() {
  let slugs = [];
  if (slugArg) {
    slugs = [slugArg];
  } else if (allMode) {
    const dir = path.join(ROOT, 'public', 'works');
    if (existsSync(dir)) slugs = readdirSync(dir).filter((f) => !f.startsWith('.'));
  } else {
    console.error('Usage: node scripts/record-webm.mjs --slug <slug> | --all [--motion-only]');
    process.exit(1);
  }
  if (motionOnly) slugs = slugs.filter((s) => s.startsWith('motion-'));

  const browser = await chromium.launch();
  let ok = 0;
  for (const slug of slugs) {
    if (await recordOne(browser, slug)) ok += 1;
  }
  await browser.close();
  console.log(`\n${ok}/${slugs.length} webm captured`);
  process.exit(ok === slugs.length ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
