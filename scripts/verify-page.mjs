#!/usr/bin/env node
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { load } from 'cheerio';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);

const REQUIRED_BLOCKS = ['hero', 'about', 'lineup', 'schedule', 'venues', 'tickets', 'travel', 'sponsors', 'footer-faq'];

const REQUIRED_BANDS = [
  '鯨向海', '霧色公路', '颱風口',
  '海岬鳥群', '浪打信號', '火車前進',
  '苔蘚紀年', '銀河郵差', '夜鷺夜談',
  '紙鳶失蹤', '鏽色羅盤', '黎明號角',
];

const REQUIRED_TICKETS = ['2,200', '5,400', '12,800'];
const REQUIRED_VENUES = ['共鳴山主舞台', '海風舞台', '部落舞台'];
const REQUIRED_SPONSORS = ['麥森啤酒', '山隈唱片', '潮間帶咖啡', '雲擇科技', '海島襪品', '長浪電池', '青葉旅店', '輕食工坊', '半島郵差'];
const MAX_FILE_SIZE = 200 * 1024;

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return process.argv[i + 1];
}

const slugArg = arg('slug');
const allMode = process.argv.includes('--all');

async function verifyOne(slug) {
  const htmlPath = path.join(ROOT, 'public', 'works', slug, 'index.html');
  const report = { slug, ok: true, issues: [] };

  if (!existsSync(htmlPath)) {
    report.ok = false;
    report.issues.push({ severity: 'error', msg: `index.html missing: ${htmlPath}` });
    return report;
  }

  const html = await readFile(htmlPath, 'utf-8');
  const st = await stat(htmlPath);
  report.file_size = st.size;

  if (st.size > MAX_FILE_SIZE) {
    report.issues.push({ severity: 'error', msg: `file size ${st.size} > ${MAX_FILE_SIZE}` });
    report.ok = false;
  }

  const $ = load(html);

  // 1. blocks
  const blocks = $('[data-block]').map((_, el) => $(el).attr('data-block')).get();
  const missingBlocks = REQUIRED_BLOCKS.filter((b) => !blocks.includes(b));
  if (missingBlocks.length) {
    report.issues.push({ severity: 'error', msg: `missing blocks: ${missingBlocks.join(', ')}` });
    report.ok = false;
  }
  report.blocks_found = blocks;

  // 2. bands
  // 動態頁面可能把文字放在 data-text / aria-label / data-to 等屬性，
  // 因此合併 body text + 所有 aria/data 屬性值一起搜尋。
  const bodyText = $('body').text();
  const attrText = [];
  $('[aria-label], [data-text], [data-to], [data-count], [title]').each((_, el) => {
    const a = $(el);
    ['aria-label', 'data-text', 'data-to', 'data-count', 'title'].forEach((k) => {
      const v = a.attr(k);
      if (v) attrText.push(v);
    });
  });
  const text = bodyText + ' ' + attrText.join(' ');
  const missingBands = REQUIRED_BANDS.filter((b) => !text.includes(b));
  if (missingBands.length) {
    report.issues.push({ severity: 'error', msg: `missing bands: ${missingBands.join(', ')}` });
    report.ok = false;
  }

  // 3. tickets
  const missingTickets = REQUIRED_TICKETS.filter((t) => !text.includes(t));
  if (missingTickets.length) {
    report.issues.push({ severity: 'error', msg: `missing ticket prices: ${missingTickets.join(', ')}` });
    report.ok = false;
  }

  // 4. venues
  const missingVenues = REQUIRED_VENUES.filter((v) => !text.includes(v));
  if (missingVenues.length) {
    report.issues.push({ severity: 'error', msg: `missing venues: ${missingVenues.join(', ')}` });
    report.ok = false;
  }

  // 5. sponsors (允許缺 1 個，但不能缺 title)
  const missingSponsors = REQUIRED_SPONSORS.filter((s) => !text.includes(s));
  if (missingSponsors.length > 1) {
    report.issues.push({ severity: 'error', msg: `missing sponsors: ${missingSponsors.join(', ')}` });
    report.ok = false;
  } else if (missingSponsors.length === 1) {
    report.issues.push({ severity: 'warn', msg: `missing one sponsor: ${missingSponsors[0]}` });
  }
  if (!text.includes('麥森啤酒')) {
    report.issues.push({ severity: 'error', msg: `title sponsor 麥森啤酒 missing` });
    report.ok = false;
  }

  // 6. external CDN
  const externals = [];
  $('link[href], script[src], img[src], source[src]').each((_, el) => {
    const src = $(el).attr('href') || $(el).attr('src');
    if (!src) return;
    if (/^https?:\/\//i.test(src)) externals.push(src);
  });
  if (externals.length) {
    report.issues.push({ severity: 'error', msg: `external resources: ${externals.slice(0, 3).join(', ')}` });
    report.ok = false;
  }

  // 7. images exist
  const missingImgs = [];
  $('img[src]').each((_, el) => {
    const src = $(el).attr('src');
    if (!src || /^data:/.test(src) || /^https?:\/\//i.test(src)) return;
    const abs = path.join(ROOT, 'public', 'works', slug, src);
    if (!existsSync(abs)) missingImgs.push(src);
  });
  if (missingImgs.length) {
    report.issues.push({ severity: 'warn', msg: `image files missing: ${missingImgs.slice(0, 3).join(', ')}` });
  }

  // 8. date
  if (!text.includes('8 月 21') && !text.includes('8/21') && !text.includes('08/21') && !text.includes('08-21')) {
    report.issues.push({ severity: 'warn', msg: 'festival start date 8/21 not found' });
  }

  // 9. doctype + lang
  if (!/^<!doctype html>/i.test(html.trim())) {
    report.issues.push({ severity: 'warn', msg: 'missing <!doctype html>' });
  }
  if (!$('html').attr('lang')) {
    report.issues.push({ severity: 'warn', msg: 'missing <html lang>' });
  }

  // 10. motion-* 額外檢查
  if (slug.startsWith('motion-')) {
    // 必含 prefers-reduced-motion
    if (!/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce/i.test(html)) {
      report.issues.push({ severity: 'error', msg: 'motion: missing prefers-reduced-motion media query' });
      report.ok = false;
    }
    // 必含 data-motion-type
    if (!/data-motion-type\s*=/i.test(html)) {
      report.issues.push({ severity: 'warn', msg: 'motion: missing <body data-motion-type>' });
    }
    // 至少一個動態觸發機制
    const hasMotion =
      /IntersectionObserver\s*\(/.test(html) ||
      /@keyframes\s+/.test(html) ||
      /animation-timeline\s*:/.test(html) ||
      /addEventListener\s*\(\s*['"](scroll|mousemove)['"]/i.test(html);
    if (!hasMotion) {
      report.issues.push({
        severity: 'error',
        msg: 'motion: no animation trigger found (IntersectionObserver / @keyframes / animation-timeline / scroll|mousemove listener)',
      });
      report.ok = false;
    }
    // 禁用外部動畫庫
    const blacklist = /(gsap|lottie|framer-motion|popmotion|anime\.js|tween\.js|tween\.min)/i;
    if (blacklist.test(html)) {
      report.issues.push({ severity: 'error', msg: 'motion: external animation library reference detected' });
      report.ok = false;
    }
    // 提醒 — 不該動 top/left/width/height 等 reflow 屬性（只提醒不擋）
    const reflowProps =
      /(transition\s*:[^;]*?(top|left|right|bottom|width|height|margin|padding))/i.test(html);
    if (reflowProps) {
      report.issues.push({
        severity: 'warn',
        msg: 'motion: transition on layout properties (top/left/width...) may cause reflow; prefer transform/opacity',
      });
    }
  }

  return report;
}

async function main() {
  let slugs = [];
  if (slugArg) {
    slugs = [slugArg];
  } else if (allMode) {
    const { readdirSync } = await import('node:fs');
    const dir = path.join(ROOT, 'public', 'works');
    if (existsSync(dir)) slugs = readdirSync(dir).filter((f) => !f.startsWith('.'));
  } else {
    console.error('Usage: node scripts/verify-page.mjs --slug <slug> | --all');
    process.exit(1);
  }

  const reports = [];
  for (const slug of slugs) reports.push(await verifyOne(slug));

  const okCount = reports.filter((r) => r.ok).length;
  for (const r of reports) {
    const tag = r.ok ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m';
    console.log(`${tag} ${r.slug} (${r.file_size ?? '-'} bytes)`);
    for (const i of r.issues) {
      const sev = i.severity === 'error' ? '\x1b[31m  E\x1b[0m' : '\x1b[33m  W\x1b[0m';
      console.log(`${sev} ${i.msg}`);
    }
  }
  console.log(`\n${okCount}/${reports.length} pass`);
  process.exit(okCount === reports.length ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
