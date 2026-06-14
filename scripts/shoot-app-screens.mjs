#!/usr/bin/env node
// 截取單一 app-* 頁面的 6 個內容畫面（home/search/library/profile/detail/player），
// 透過點擊 tab 與卡片導覽，輸出個別 PNG + 一張橫向拼接 montage（給人/agent review 用）。
// 用法：node scripts/shoot-app-screens.mjs --slug app-ios-hig [--out <dir>]
import { mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
function arg(name, fb) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fb : process.argv[i + 1];
}
const slug = arg('slug');
if (!slug) {
  console.error('Usage: node scripts/shoot-app-screens.mjs --slug <app-slug> [--out <dir>]');
  process.exit(1);
}
const outDir = arg('out', path.join(ROOT, 'public', 'works', slug, '_review'));
const htmlPath = path.join(ROOT, 'public', 'works', slug, 'index.html');
if (!existsSync(htmlPath)) {
  console.error(`index.html missing: ${htmlPath}`);
  process.exit(1);
}

async function clickByText(page, scope, text) {
  try {
    await page.locator(scope).getByText(text, { exact: false }).first().click({ timeout: 3000 });
    await page.waitForTimeout(450);
    return true;
  } catch {
    return false;
  }
}

async function clickSel(page, sel) {
  try {
    const l = page.locator(sel).first();
    if (!(await l.count())) return false;
    await l.click({ timeout: 2500 });
    await page.waitForTimeout(450);
    return true;
  } catch {
    return false;
  }
}

async function screenVisible(page, id) {
  const l = page.locator(`[data-screen="${id}"]`).first();
  return (await l.count()) > 0 && (await l.isVisible());
}

// 依序嘗試各種點擊策略，直到 target 畫面真的可見才停（避免點到不可點文字截錯畫面）
async function navTo(page, target, attempts) {
  if (await screenVisible(page, target)) return true;
  for (const fn of attempts) {
    await fn();
    if (await screenVisible(page, target)) return true;
  }
  return screenVisible(page, target);
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const shots = [];
  const shoot = async (name) => {
    const p = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: p, clip: { x: 0, y: 0, width: 390, height: 844 } });
    shots.push({ name, p });
  };

  const goHome = () => clickByText(page, '[data-screen="tab-bar"]', '首頁');

  await shoot('1-home');
  await clickByText(page, '[data-screen="tab-bar"]', '搜尋');
  await shoot('2-search');
  await clickByText(page, '[data-screen="tab-bar"]', '音樂庫');
  await shoot('3-library');
  await clickByText(page, '[data-screen="tab-bar"]', '我的');
  await shoot('4-profile');
  // detail：回首頁點專輯卡（用結構選擇器優先，並驗證畫面真的切到 detail）
  await goHome();
  const gotDetail = await navTo(page, 'detail', [
    () => clickSel(page, '[data-screen="home"] [data-go="detail"]'),
    () => clickSel(page, '[data-screen="home"] .playlist-card, [data-screen="home"] [class*="card"]'),
    () => clickSel(page, '[data-screen="home"] [data-go]'),
    () => clickByText(page, '[data-screen="home"]', '浪潮回聲'),
    async () => {
      await clickByText(page, '[data-screen="tab-bar"]', '音樂庫');
      await clickSel(page, '[data-screen="library"] [data-go="detail"], [data-screen="library"] [class*="card"], [data-screen="library"] li');
    },
  ]);
  await shoot('5-detail');
  // player：從 detail 點曲目/播放，或經迷你播放列
  await navTo(page, 'player', [
    () => clickSel(page, '[data-screen="detail"] [data-go="player"]'),
    () => clickByText(page, '[data-screen="detail"]', '晚風練習曲'),
    () => clickSel(page, '[data-go="player"], .miniplayer, [class*="mini-player"], [class*="miniplayer"]'),
    () => clickByText(page, '[data-screen="detail"]', '播放'),
  ]);
  await shoot('6-player');
  if (!gotDetail) console.log(`  ⚠️ ${slug}: 無法導覽到 detail（5-detail 可能是其他畫面）`);

  await browser.close();

  // 橫向拼接（每張縮到寬 300）
  const tiles = await Promise.all(
    shots.map(async (s) => ({ name: s.name, buf: await sharp(s.p).resize(300).png().toBuffer() })),
  );
  const TILE_W = 300, TILE_H = Math.round((844 / 390) * 300), GAP = 12;
  const W = tiles.length * TILE_W + (tiles.length - 1) * GAP;
  const composites = tiles.map((t, i) => ({ input: t.buf, left: i * (TILE_W + GAP), top: 0 }));
  const montagePath = path.join(outDir, 'montage.webp');
  await sharp({ create: { width: W, height: TILE_H, channels: 3, background: '#e5e7eb' } })
    .composite(composites)
    .webp({ quality: 82 })
    .toFile(montagePath);

  console.log(`✓ ${slug}: ${shots.map((s) => s.name).join(' ')} → ${path.relative(ROOT, montagePath)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
