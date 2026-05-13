#!/usr/bin/env node
import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:5173/';
const out = process.argv[3] || '/tmp/gallery-main.png';
const full = process.argv.includes('--full');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

if (full) {
  // Scroll to bottom to trigger lazy load, then scroll back up
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);
}

await page.screenshot({ path: out, fullPage: full });
console.log('Saved', out);
await browser.close();
