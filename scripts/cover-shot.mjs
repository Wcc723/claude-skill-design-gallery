#!/usr/bin/env node
// 為 README 拍封面截圖
// 使用：node scripts/cover-shot.mjs [url]
import { chromium } from 'playwright';
import sharp from 'sharp';
import path from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const url = process.argv[2] || 'https://www.casper.tw/claude-skill-design-gallery/';
const outDir = path.join(ROOT, 'docs');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function shot({
  width,
  height,
  fullPage,
  clickRound,
  fileName,
  scrollY = 0,
  quality = 82,
  maxWidth = 1600,
}) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  if (clickRound !== undefined) {
    await page.click(`.round-tab .tab:nth-child(${clickRound})`);
    await page.waitForTimeout(700);
  }

  // 觸發 lazy-load 圖片
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(1200);

  const png = await page.screenshot({ fullPage, type: 'png' });
  await page.close();

  const target = path.join(outDir, fileName);
  const ext = path.extname(fileName).toLowerCase();
  const pipeline = sharp(png).resize({ width: maxWidth, withoutEnlargement: true });
  if (ext === '.webp') await pipeline.webp({ quality }).toFile(target);
  else if (ext === '.jpg' || ext === '.jpeg') await pipeline.jpeg({ quality }).toFile(target);
  else await pipeline.png({ quality, compressionLevel: 9 }).toFile(target);
  console.log(`Saved ${target}`);
}

await shot({
  width: 1440,
  height: 1800,
  fullPage: false,
  fileName: 'cover.webp',
  quality: 82,
});

await shot({
  width: 1440,
  height: 900,
  fullPage: true,
  fileName: 'gallery-all.webp',
  quality: 75,
});

await shot({
  width: 1440,
  height: 1200,
  fullPage: false,
  clickRound: 3,
  fileName: 'gallery-motion.webp',
  quality: 80,
});

await browser.close();
console.log('Done');
