---
name: design-editorial
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Editorial Magazine layout style. Triggers on 雜誌排版、editorial、Monocle、Wallpaper、Kinfolk、12-column grid、serif、長文閱讀、long-form layout、印刷雜誌.
user-invocable: true
---

# 雜誌排版 Editorial Magazine — 島嶼共鳴 2026

## Style Philosophy

借鑑 Monocle、Wallpaper*、Kinfolk、紐約客 New Yorker 等高品質印刷雜誌的版面語言：**12 欄 grid、明確 baseline、襯線標題與無襯線內文的對位、長文與 figure 的圖文互動、頁首頁尾的頁碼節律**。在音樂節網頁中，這風格把「島嶼共鳴」做成一份**特刊雜誌**：第一篇是節慶導讀、第二篇是樂團專訪導覽、第三篇是場地探祕——讀者翻頁瀏覽。

三個視覺辨識特徵：
1. **12-column 嚴格 grid + 對齊 baseline**
2. **粗體襯線標題 + 細無襯線內文**雙字體對位
3. **頁首頁碼導引、章節編號、引言大字 pull-quote、figure caption**

## Design Tokens

```css
:root {
  --ed-paper: #f7f5f1;          /* 雜誌米紙 */
  --ed-fg: #1a1a1a;             /* 黑色油墨 */
  --ed-fg-soft: #555555;
  --ed-fg-mute: #888888;
  --ed-line: #d4cdc0;
  --ed-accent: #b8473a;          /* 朱紅，封面紙印章色 */
  --ed-highlight: #f1e7d4;       /* 米黃 box */

  --color-bg: var(--ed-paper);
  --color-fg: var(--ed-fg);
  --color-accent: var(--ed-accent);

  --radius-none: 0;

  --grid-cols: 12;
  --grid-gutter: 24px;

  --font-display: 'Georgia', 'Times New Roman', 'PingFang TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', 'Arial', sans-serif;
  --font-numeric: 'Georgia', 'Times', serif;
  --font-mono: 'Menlo', 'Courier New', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 8vw, 96px) / 1.05 / 700 / Georgia / -0.02em | 封面大標 |
| h1 | clamp(36px, 5vw, 56px) / 1.15 / 700 / Georgia | 特輯標題 |
| h2 | 24px / 1.3 / 700 / Georgia | 子標 |
| pull-quote | 36px / 1.4 / 500 / Georgia italic | 引言 |
| body | 16px / 1.7 / 400 / sans-serif | 段落 |
| caption | 12px / 1.5 / 500 / sans-serif / 0.04em | figure caption |
| number | clamp(64px, 10vw, 144px) / 0.9 / 700 / Georgia | 數字大字 |

## Layout Rules

- 容器寬度：max-width 1280px，padding 32-48px
- 12-column grid + 24px gutter；可細到 11/12、8/12、6/6、3/3/3/3 等多種比例
- 段間距嚴格：title-h1 80px、h2-body 32px、body line 1.7
- 圖片配 figure caption 樣式（中文小字 + 編號 fig. 1）
- 頁首小字：`SECTION TITLE  ·  ISSUE 06  ·  PAGE NN`

各區塊構圖：
- **hero**：封面感。左 8/12 大字封面標題 + 右 4/12 小卡描述。下方頁碼導引。
- **about**：特輯導讀體。左 4/12 編者小字 + 右 8/12 長文。4 個數字以 large drop-cap 排列。
- **lineup**：分兩列排版。每組樂團如雜誌人物特寫——左圖右文，圖+caption+段落介紹。headliner 用全寬 spread（12/12 圖 + 標題覆蓋下方）。
- **schedule**：仿 listing magazine 的條列式：粗體時段 + 樂團名 + 舞台 + 場地（hairline 分隔）。
- **venues**：3 個全寬 figure + 3 段長文，左圖右文交替。
- **tickets**：仿 price table，邊框極輕 hairline。
- **travel**：圖文混排，左圖右指南清單。
- **sponsors**：仿節目本末頁的贊助名單頁，分級排版。
- **footer-faq**：FAQ 用 Q. A. 印刷標準格式。

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格 12-column grid 與對齊 | 用 flexbox 失去網格對齊 |
| 標題用 Georgia 粗襯線 + 內文用 sans-serif | 全文同一字體 |
| 大段落 ≥ 80 字、配 drop-cap 與引言 | 短條列代替長文 |
| 圖片必須有 caption（fig. n + 描述） | 無 caption 圖片 |
| 朱紅 accent 用於章節標籤、引號、page indicator | 全頁無 accent，太單調 |

## Required Output Contract

通用契約，**鼓勵長文段落**（每個 section 至少 80 字段落 ≥ 2 段）。

## Required Images

依 `assets-manifest.json`。鼓勵高品質編輯攝影風格（雜誌可用實景照片）。

## Reference Snippet

12-column grid：
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
.col-8 { grid-column: span 8; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-12 { grid-column: span 12; }
@media (max-width: 720px) {
  .col-8, .col-6, .col-4 { grid-column: 1 / -1; }
}
```

Pull-quote：
```css
.pullquote {
  font-family: var(--font-display);
  font-size: 36px;
  line-height: 1.35;
  font-style: italic;
  font-weight: 500;
  color: var(--ed-fg);
  padding: 32px 0;
  border-top: 1px solid var(--ed-fg);
  border-bottom: 1px solid var(--ed-fg);
  margin: 48px 0;
}
.pullquote::before { content: '＂'; color: var(--ed-accent); margin-right: 8px; }
```

Figure + caption：
```html
<figure>
  <img src="assets/hero.webp" alt="">
  <figcaption>
    <span class="fig-no">fig. 01</span>
    <span class="fig-desc">都蘭灣黃昏。攝影：浪打文化</span>
  </figcaption>
</figure>
```
```css
figure { margin: 0; }
figure img { width: 100%; display: block; }
figcaption {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--ed-fg-soft);
  letter-spacing: 0.03em;
  margin-top: 8px;
  display: flex;
  gap: 12px;
}
.fig-no {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--ed-accent);
}
```

Section header：
```html
<header class="section-head">
  <span class="kicker">SECTION 03 · LINEUP</span>
  <h2>來自島嶼與海的 12 組樂團</h2>
</header>
```
```css
.section-head .kicker {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.18em;
  color: var(--ed-accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--ed-fg);
}
.section-head h2 {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.15;
  font-weight: 700;
  margin: 0;
}
```

Drop-cap：
```css
.dropcap p:first-of-type::first-letter {
  font-family: var(--font-display);
  font-size: 80px;
  line-height: 0.85;
  font-weight: 700;
  float: left;
  margin: 4px 12px 0 0;
  color: var(--ed-accent);
}
```
