#!/usr/bin/env node
import { existsSync, readdirSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

const slugArg = arg('slug');
const allMode = process.argv.includes('--all');
const WIDTH = Number(arg('width', 1280));
const HEIGHT = Number(arg('height', 800));
const THUMB_WIDTH = Number(arg('thumb-width', 800));
const forceDevice = arg('device'); // 'phone' 強制直式手機；省略時靠 slug 前綴自動判斷

// 直式手機基準（app-*）：390×844 @2x，輸出直式 thumb，不產 thumb-hero
const PHONE_W = 390;
const PHONE_H = 844;
const PHONE_THUMB_WIDTH = 480;

async function shotOne(browser, slug) {
  const htmlPath = path.join(ROOT, 'public', 'works', slug, 'index.html');
  if (!existsSync(htmlPath)) {
    console.log(`✗ ${slug} — index.html missing`);
    return false;
  }
  const isPhone = forceDevice === 'phone' || slug.startsWith('app-');
  const vw = isPhone ? PHONE_W : WIDTH;
  const vh = isPhone ? PHONE_H : HEIGHT;
  const url = 'file://' + htmlPath;
  const page = await browser.newPage({
    viewport: { width: vw, height: vh },
    deviceScaleFactor: isPhone ? 2 : 1,
  });
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(800); // 等 font / 動畫
    const fullPng = await page.screenshot({
      type: 'png',
      clip: { x: 0, y: 0, width: vw, height: vh },
    });
    const fullPath = path.join(ROOT, 'public', 'works', slug, 'thumb.webp');
    const thumbW = isPhone ? PHONE_THUMB_WIDTH : THUMB_WIDTH;
    await sharp(fullPng).resize(thumbW).webp({ quality: 80 }).toFile(fullPath);

    // 桌機橫式才另截 hero；app 直式整頁即 hero，不另存
    if (!isPhone) {
      const heroPng = await page.screenshot({
        type: 'png',
        clip: { x: 0, y: 0, width: vw, height: Math.min(vh, 720) },
      });
      const heroPath = path.join(ROOT, 'public', 'works', slug, 'thumb-hero.webp');
      await sharp(heroPng).resize(THUMB_WIDTH).webp({ quality: 78 }).toFile(heroPath);
    }
    console.log(`✓ ${slug}${isPhone ? ' (phone 390×844)' : ''}`);
    return true;
  } catch (e) {
    console.log(`✗ ${slug} — ${e.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  let slugs = [];
  if (slugArg) {
    slugs = [slugArg];
  } else if (allMode) {
    const dir = path.join(ROOT, 'public', 'works');
    if (existsSync(dir)) slugs = readdirSync(dir).filter((f) => !f.startsWith('.'));
  } else {
    console.error('Usage: node scripts/screenshot-pages.mjs --slug <slug> | --all');
    process.exit(1);
  }

  const browser = await chromium.launch();
  let ok = 0;
  for (const slug of slugs) {
    if (await shotOne(browser, slug)) ok += 1;
  }
  await browser.close();
  console.log(`\n${ok}/${slugs.length} screenshots captured`);
  process.exit(ok === slugs.length ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
