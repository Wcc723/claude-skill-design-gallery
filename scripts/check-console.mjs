#!/usr/bin/env node
import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:4173/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text());
});
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('requestfailed', (req) => {
  errors.push(`REQ FAIL ${req.failure()?.errorText}: ${req.url()}`);
});
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const has = await page.evaluate(() => !!document.querySelector('.page'));
console.log('app rendered:', has);
console.log('errors:');
errors.forEach((e) => console.log('  ' + e));
await browser.close();
