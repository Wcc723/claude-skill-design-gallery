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

// ── App 模式（slug 以 app- 開頭）：迴聲 Resona 音樂串流 App 的權威字串 ──
// 取代 festival 的 BLOCKS / BANDS / TICKETS / VENUES / SPONSORS。來源：.claude/content/app-brief.md 第 7 節。
// 改 app-brief 必同步改這裡（對齊 CLAUDE.md「改 brief 必同步改 verify 常數」）。
const REQUIRED_APP_SCREENS = ['status-bar', 'home', 'search', 'detail', 'player', 'library', 'profile', 'tab-bar'];
const REQUIRED_APP_BRAND = ['迴聲', 'Resona'];
const REQUIRED_APP_PLANS = ['免費', 'Plus', 'Family'];
const REQUIRED_APP_PRICING = [
  { label: 'NT$ 0', re: /NT\$\s*0(?!\d)/ },
  { label: 'NT$ 149', re: /NT\$\s*149/ },
  { label: 'NT$ 249', re: /NT\$\s*249/ },
];
const REQUIRED_APP_TABS = ['首頁', '搜尋', '音樂庫', '我的'];
const REQUIRED_APP_CONTENT = [
  // 6 核心功能
  '個人化每日推薦', '無損音質串流', '離線下載', '歌詞同步', '跨裝置接續播放', '共享音樂庫',
  // 7 歌單 / 專輯
  '浪潮回聲', '深夜公路', '島嶼晨光', '雨後散步', '城市心跳', '山海之間', '失重時刻',
  // 9 歌名（純名）
  '藍色信號', '霓虹巷弄', '候鳥地圖', '靜電', '晚風練習曲', '無人車站', '潮間帶', '第七個夏天', '月台九又四分之三',
  // 5 藝人
  '海平面樂團', '林知夏', '夜行列車', 'Echo Lab', '何遠',
  // 4 分類 chip
  '華語', '獨立', '電子', '放鬆',
];

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
  const isApp = slug.startsWith('app-');

  // 合併「body 可見文字 + 所有 data-* / aria-* / title / alt 屬性值」一起搜尋。
  // 計數類 / 打字機 / 純圖示風格常把文字放在屬性，故掃描全部屬性以避免漏判。
  const bodyText = $('body').text();
  const attrText = [];
  $('*').each((_, el) => {
    const attribs = el.attribs || {};
    for (const [k, v] of Object.entries(attribs)) {
      if (!v) continue;
      if (k.startsWith('data-') || k.startsWith('aria-') || k === 'title' || k === 'alt') attrText.push(v);
    }
  });
  const text = bodyText + ' ' + attrText.join(' ');

  // ──────────────────────────────────────────────────────────
  // festival 專屬檢查（design-* / motion-*）：app-* 一律跳過。
  // ⚠️ 注意邊界：外部 CDN / 圖片 / doctype / 檔案大小 等「共同檢查」
  //    必須留在這個 if 之外，對三類都跑（app 頁的無 CDN 防線靠那段）。
  // ──────────────────────────────────────────────────────────
  if (!isApp) {
    // 1. blocks
    const blocks = $('[data-block]').map((_, el) => $(el).attr('data-block')).get();
    const missingBlocks = REQUIRED_BLOCKS.filter((b) => !blocks.includes(b));
    if (missingBlocks.length) {
      report.issues.push({ severity: 'error', msg: `missing blocks: ${missingBlocks.join(', ')}` });
      report.ok = false;
    }
    report.blocks_found = blocks;

    // 2. bands
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
  }

  // ──────────────────────────────────────────────────────────
  // App 專屬檢查（app-*）：迴聲 Resona 音樂串流 App
  // ──────────────────────────────────────────────────────────
  if (isApp) {
    // A. 8 個 data-screen：唯一、各出現恰一次（全頁單一固定外框）
    const screens = $('[data-screen]').map((_, el) => $(el).attr('data-screen')).get();
    report.screens_found = screens;
    const missingScreens = REQUIRED_APP_SCREENS.filter((s) => !screens.includes(s));
    if (missingScreens.length) {
      report.issues.push({ severity: 'error', msg: `app: missing screens: ${missingScreens.join(', ')}` });
      report.ok = false;
    }
    const dupScreens = REQUIRED_APP_SCREENS.filter((s) => screens.filter((x) => x === s).length > 1);
    if (dupScreens.length) {
      report.issues.push({ severity: 'error', msg: `app: duplicated screens (expect single fixed chrome): ${dupScreens.join(', ')}` });
      report.ok = false;
    }

    // B. 品牌
    const missingBrand = REQUIRED_APP_BRAND.filter((b) => !text.includes(b));
    if (missingBrand.length) {
      report.issues.push({ severity: 'error', msg: `app: missing brand: ${missingBrand.join(', ')}` });
      report.ok = false;
    }

    // C. 內容字串（功能 / 歌單 / 歌名 / 藝人 / 分類）
    const missingContent = REQUIRED_APP_CONTENT.filter((c) => !text.includes(c));
    if (missingContent.length) {
      const head = missingContent.slice(0, 8).join(', ');
      report.issues.push({ severity: 'error', msg: `app: missing content (${missingContent.length}): ${head}${missingContent.length > 8 ? '…' : ''}` });
      report.ok = false;
    }

    // D. 方案名
    const missingPlans = REQUIRED_APP_PLANS.filter((p) => !text.includes(p));
    if (missingPlans.length) {
      report.issues.push({ severity: 'error', msg: `app: missing plan names: ${missingPlans.join(', ')}` });
      report.ok = false;
    }

    // E. 三層定價（regex 容忍 NT$ 與數字間空白；NT$ 0 用負向預看防誤配）
    const missingPricing = REQUIRED_APP_PRICING.filter((p) => !p.re.test(text));
    if (missingPricing.length) {
      report.issues.push({ severity: 'error', msg: `app: missing pricing: ${missingPricing.map((p) => p.label).join(', ')}` });
      report.ok = false;
    }

    // F. 手機外觀標記
    if (!$('meta[name="viewport"]').length) {
      report.issues.push({ severity: 'error', msg: 'app: missing <meta name="viewport">' });
      report.ok = false;
    }
    if (!/data-viewport\s*=\s*["']?mobile/i.test(html)) {
      report.issues.push({ severity: 'error', msg: 'app: missing <body data-viewport="mobile"> marker' });
      report.ok = false;
    }
    if (!text.includes('9:41')) {
      report.issues.push({ severity: 'error', msg: 'app: status-bar time 9:41 not found' });
      report.ok = false;
    }
    const missingTabs = REQUIRED_APP_TABS.filter((t) => !text.includes(t));
    if (missingTabs.length) {
      report.issues.push({ severity: 'warn', msg: `app: tab labels missing: ${missingTabs.join(', ')}` });
    }

    // G. 互動性：必須是可導覽的多畫面 App（inline script + click handler）
    const hasInlineScript = /<script(?:\s[^>]*)?>[\s\S]*?<\/script>/i.test(html);
    if (!hasInlineScript) {
      report.issues.push({ severity: 'error', msg: 'app: missing inline <script> (多畫面導覽需要 JS)' });
      report.ok = false;
    }
    const hasClick = /addEventListener\s*\(\s*['"]click/i.test(html) || /\bonclick\s*=/i.test(html);
    if (!hasClick) {
      report.issues.push({ severity: 'error', msg: 'app: no click handler found (互動元素需可點擊：tab/卡片/曲目導覽)' });
      report.ok = false;
    }

    // H. 動畫政策：有動畫但缺 prefers-reduced-motion → warn
    const hasAnim = /@keyframes\s+/.test(html) || /animation\s*:/.test(html) || /\.animate\s*\(/.test(html);
    const hasReduced = /@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce/i.test(html);
    if (hasAnim && !hasReduced) {
      report.issues.push({ severity: 'warn', msg: 'app: animation present but no prefers-reduced-motion media query' });
    }
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

  // 8. date (festival 專屬)
  if (!isApp && !text.includes('8 月 21') && !text.includes('8/21') && !text.includes('08/21') && !text.includes('08-21')) {
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
