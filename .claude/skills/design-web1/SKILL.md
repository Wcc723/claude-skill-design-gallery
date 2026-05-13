---
name: design-web1
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in 90s Web 1.0 style. Triggers on Web 1.0、Geocities、90s web、復古網頁、html table layout、blink、marquee、under construction GIF.
user-invocable: true
---

# 90s Web 1.0 — 島嶼共鳴 2026

## Style Philosophy

Web 1.0 是 1996–2000 年大眾建站的混亂青春期。沒有 CSS3、沒有 flexbox、沒有 design system——只有 `<table>` 排版、`<font color="red">` 標籤、tile 背景圖、blink 文字、marquee 跑馬燈、under construction GIF。在音樂節網頁中，這風格故意「失去設計感」：像 1998 年一位熱愛獨立音樂的大學生用 Frontpage 寫出來的個人首頁——粗糙、誠懇、滿是嫩芽級的網路熱情。

三個視覺辨識特徵：
1. **系統字體（Times、Courier、Verdana）+ 純色背景或 tile 圖**
2. **Table-based 排版視覺**（不需真的用 table 但要有那感覺）+ 內嵌彩色 `<font>` 字
3. **訪客數計數器、blink 文字、跑馬燈、星空 GIF、Best viewed with NS3.0**

## Design Tokens

```css
:root {
  --w1-bg: #008080;            /* Windows 98 teal */
  --w1-bg-alt: #c0c0c0;        /* silver */
  --w1-bg-tile: #e8d8b8;       /* paper tile-ish */
  --w1-text: #000000;
  --w1-link: #0000ff;
  --w1-link-visited: #800080;
  --w1-link-hover: #ff0000;
  --w1-accent-red: #ff0000;
  --w1-accent-green: #00ff00;
  --w1-accent-blue: #0000ff;
  --w1-yellow: #ffff00;

  --color-bg: var(--w1-bg);
  --color-fg: var(--w1-text);
  --color-accent: var(--w1-accent-red);

  --radius-none: 0;

  --font-display: 'Comic Sans MS', 'Times New Roman', serif;
  --font-body: 'Times New Roman', 'PingFang TC', 'Noto Sans TC', serif;
  --font-mono: 'Courier New', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | 36px / 1.1 / 700 / Comic Sans 或 Times Bold | Hero |
| h1 | 24px / 1.2 / 700 | 區塊大標 |
| h2 | 18px / 1.3 / 700 | 子標 |
| body | 14px / 1.5 / 400 / Times | 段落 |
| caption | 12px / 1.3 / 400 / Courier | 小字 |

**故意混搭 Times + Comic Sans + Courier**，視覺品味故意「土味」。

## Layout Rules

- 背景：teal 純色 + 內框白底（仿 frame 排版）；或內框直接放 tile pattern
- 容器寬度：max-width 800px（仿 1996 800x600 時代）置中
- **不用 flexbox / grid**：靠 `<table>`-like 排版（用 CSS 模擬：`display: table`）
- 大量 `<hr>` 分隔線（彩色或粗體）
- 區塊不留太多 padding，緊湊感

各區塊構圖：
- **hero**：上方居中大字 `*** 島嶼共鳴 2026 ***`，閃爍效果，下面三行 `<font>` 不同顏色說明、紅色「★ 立即購票 ★」連結
- **about**：左側星空 GIF/動畫 + 右側段落、底部 `Last updated:` 2026 年 5 月 1 日
- **lineup**：用 table 顯示 12 樂團，每列彩色背景條紋（白/灰交替）；headliner 用 `<blink>` + 紅字
- **schedule**：3 個 table、每天一個、藍黃綠各為一日標題色
- **venues**：3 個獨立 frame，垂直堆疊；每個 frame 內含舞台 GIF + Times 段落
- **tickets**：粗框 table、每張票一列 + 紅色「按這裡訂購」連結
- **travel**：以列點 list（`<ul>`），項目前用紅色三角符號
- **sponsors**：純文字三段、用 `<hr>` 分割，title 用 24px 紅字
- **footer-faq**：FAQ 用 `<dl>` 樣式 + 訪客計數器 + best viewed banner

## Do / Don't

| Do | Don't |
| --- | --- |
| 用系統字體、彩色文字、底線連結 | 用現代字體系列 |
| 模擬 table 排版、星空背景 | 用現代 flexbox 整齊 grid |
| 在 hero 加 `<marquee>` 樣式跑馬燈 | 完全沒有動態元素 |
| 連結藍底紅 hover 紫 visited | 用扁平風格按鈕 |
| 用 emoji-like 符號（★ ✦ ▶）裝飾 | 完全簡潔現代 |

注意對比度：黑字白底完全沒問題，但避免黃底白字、紅底藍字這類災難。

## Required Output Contract

通用契約，特別強調**檔案大小可低於 100KB**（這個風格本來就極輕）。

## Required Images

依 `assets-manifest.json`，鼓勵用模擬「90s gif」風格的圖。

## Reference Snippet

仿 table 排版：
```css
.tbl {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  width: 100%;
  background: #c0c0c0;
  border: 2px outset #c0c0c0;
}
.tbl-row { display: table-row; }
.tbl-cell {
  display: table-cell;
  padding: 4px 8px;
  background: #ffffff;
  vertical-align: top;
  font-family: var(--font-body);
  border: 1px inset #c0c0c0;
}
```

Blink 文字（用 CSS animation 替代）：
```css
.blink {
  animation: blink 1s step-end infinite;
  color: var(--w1-accent-red);
  font-weight: bold;
}
@keyframes blink {
  50% { visibility: hidden; }
}
```

跑馬燈：
```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
  background: var(--w1-yellow);
  color: black;
  padding: 4px 0;
  font-family: var(--font-mono);
}
.marquee span {
  display: inline-block;
  animation: scroll 15s linear infinite;
}
@keyframes scroll {
  from { transform: translateX(100%); }
  to   { transform: translateX(-100%); }
}
```

訪客計數器：
```css
.counter {
  display: inline-block;
  background: #000;
  color: var(--w1-accent-green);
  font-family: 'Courier New', monospace;
  padding: 2px 8px;
  border: 1px solid var(--w1-text);
  letter-spacing: 0.1em;
}
```
