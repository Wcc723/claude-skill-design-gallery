---
name: design-minimalism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in a strict Minimalism / editorial whitespace style. Triggers on 極簡、極簡主義、Minimalism、白底黑字、ample whitespace, Dieter Rams, Jony Ive aesthetic.
user-invocable: true
---

# 極簡主義 Minimalism — 島嶼共鳴 2026

## Style Philosophy

極簡主義不是「東西很少」，而是「只保留必要的」。源於 1960s 的極簡藝術運動、1980s 的 Dieter Rams 設計十誡，再到 21 世紀蘋果 + 日系雜誌的當代詮釋。核心精神是：**讓內容說話、讓留白呼吸、讓字體做工**。在音樂節網頁中，這風格不會用大圖、不會用色彩斑斕——它把這場海邊音樂節呈現得像一張高品質印刷的藝廊邀請函或瑞士唱片內頁。

三個視覺辨識特徵：
1. **白底黑字**（或近黑近白），單色為主，僅一個 accent
2. **超大留白**：section 之間 160px+，元素之間慷慨間距
3. **精準的字體層次**：靠尺寸、字重、間距分階，不靠顏色或裝飾

## Design Tokens

```css
:root {
  --color-bg: #ffffff;
  --color-bg-soft: #f7f7f7;
  --color-fg: #0a0a0a;           /* 近黑 */
  --color-fg-soft: #555555;
  --color-fg-mute: #999999;
  --color-line: #e5e5e5;
  --color-accent: #d4391c;       /* 一抹朱紅，整頁僅出現於極關鍵點 */
  --color-accent-fg: #ffffff;

  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 32px;
  --space-lg: 64px;
  --space-xl: 120px;
  --space-2xl: 200px;

  --radius-none: 0;
  --radius-sm: 2px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', 'Arial', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-mono: 'SF Mono', 'Menlo', 'Consolas', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.04em | Hero 主標 |
| h1 | clamp(36px, 5vw, 56px) / 1.1 / 500 / -0.02em | 區塊大標 |
| h2 | 22px / 1.3 / 500 | 小標 |
| body | 15px / 1.75 / 400 / 0.005em | 段落 |
| caption | 11px / 1.5 / 500 / 0.18em / uppercase | kicker / 序號 |
| mono | 12px / 1.4 / 400 / 0.04em / mono-font | 票價、時段 |

注意：**字體寬度的對比**是極簡的核心武器——title 用粗、body 用 regular、time / number 用 mono。

## Layout Rules

- 容器寬度：max-width 1080px、左右大量留白（padding 32px+）
- section 之間最少 `--space-xl`（120px）
- 元素一律左對齊（hero 也左對齊，禁用置中）
- 沒有卡片、沒有 box-shadow、沒有 background-color（除了 accent 區）
- 區隔靠 hairline（1px var(--color-line)）與留白

各區塊構圖：
- **hero**：左對齊大字、上方一個三位數編號（"01" 暗示 issue number）、下方一行細節（日期 · 場地 · slogan）、最下一行 CTA link with underline
- **about**：兩欄 1:2，左 caption "ABOUT"、右段文字 + 4 行數字 list（無 icon）
- **lineup**：純文字 list（編號 · 樂團名 · 曲風 · 上場日 · 舞台 · 時段），無圖、無框；headliner 用粗體 + 朱紅短橫線標註
- **schedule**：表格樣式（hairline 分隔），時段用 mono 字體
- **venues**：三段純文字並排（grid 3 欄），用 hairline 分隔
- **tickets**：3 欄純文字、票價用 display 級距大字、無框、無漸層
- **travel**：序號 list（01 / 02 / 03）
- **sponsors**：純文字 list 分三組（title / gold / silver），不放 logo 圖
- **footer-faq**：純文字 Q/A、Q 粗 A 細、之間 hairline

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量留白，section margin 120px+ | 把元素塞滿、無呼吸感 |
| 字體階層完全靠 size、weight、letter-spacing | 用顏色或框線製造階層 |
| accent 色（朱紅）整頁出現次數不超過 6 次 | 用色塊裝飾每個區塊 |
| hairline 線寬恆為 1px、顏色淺 | 用粗框線、深色框 |
| 字級對比要明顯（display ≥ 5x body） | 字級接近、無視覺節奏 |

## Required Output Contract

- 9 section 齊全；不要因「極簡」而省略任何區塊
- 12 樂團、3 票價、9 贊助商名一字不差
- 不用圖片也可以（hero 可以純文字）但若用圖片，需單色或低彩度
- 對比度 ≥ 7:1（接近黑白）
- 響應式三斷點，手機留白可降到 24px 但 section margin 仍需 80px+

## Required Images

依 `assets-manifest.json`。圖片可以選擇性使用（極簡風格本身就傾向少圖）。

## Reference Snippet

Hero：
```css
.hero {
  padding: 200px 32px 160px;
  max-width: 1080px;
  margin: 0 auto;
}
.hero-issue {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.2em;
  color: var(--color-fg-soft);
  margin-bottom: 80px;
}
.hero-title {
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--color-fg);
  max-width: 14ch;
}
.hero-meta {
  margin-top: 40px;
  font-size: 14px;
  color: var(--color-fg-soft);
  display: flex;
  gap: 32px;
}
```

Lineup list item：
```css
.lineup-row {
  display: grid;
  grid-template-columns: 48px 1fr 1fr 1fr 1fr;
  padding: 28px 0;
  border-top: 1px solid var(--color-line);
  font-size: 15px;
  align-items: baseline;
}
.lineup-row.headliner .name {
  font-weight: 700;
}
.lineup-row.headliner .badge {
  color: var(--color-accent);
  font-family: var(--font-mono);
}
```

Accent link：
```css
.link-accent {
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  font-weight: 500;
}
```
