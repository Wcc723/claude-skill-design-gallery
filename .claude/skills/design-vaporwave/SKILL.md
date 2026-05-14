---
name: design-vaporwave
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Vaporwave (蒸氣波) aesthetic. Triggers on Vaporwave、蒸氣波、A E S T H E T I C、80s/90s internet retro、希臘雕像 + 日文 katakana、pastel pink purple aesthetic.
user-invocable: true
---

# 蒸氣波 Vaporwave — 島嶼共鳴 2026

## Style Philosophy

蒸氣波誕生於 2010 年代初的 tumblr，是一種**回憶 90 年代資本主義美學的反烏托邦電子藝術**。視覺核心：希臘羅馬雕像、棕櫚樹、Windows 95 視窗、片假名（カタカナ）、磁帶 VHS 故障、夕陽落日、粉紅紫漸層。在音樂節網頁裡，這風格把獨立音樂節打扮成 **1995 年從未存在的賽博渡假村廣告**——既懷舊又超現實，帶著淡淡的諷刺與大量寬鬆字距的英文標題。

三個視覺辨識特徵：
1. **粉紅 + 紫 + 青色漸層**，常見天空、棋盤格地板
2. **粗體寬鬆字距英文標題**（"A E S T H E T I C" 風格），混搭片假名
3. **古典雕像、棕櫚樹、CRT 掃描線、復古 windows 視窗** 元素

## Design Tokens

```css
:root {
  --vw-bg-1: #2a0a4a;          /* deep purple */
  --vw-bg-2: #ff6ec7;          /* bright pink */
  --vw-bg-3: #00f0ff;          /* cyan */
  --vw-bg-4: #ffafcc;          /* pastel pink */
  --vw-bg-grid: #ff2e88;       /* grid lines */

  --vw-fg: #ffffff;
  --vw-fg-soft: #ffd6ec;
  --vw-fg-mute: #c89cff;
  --vw-accent: #fffd54;        /* electric yellow — sparingly */
  --vw-accent-fg: #2a0a4a;
  --vw-cyan: #00f0ff;
  --vw-pink: #ff6ec7;

  --color-bg: var(--vw-bg-1);
  --color-fg: var(--vw-fg);
  --color-accent: var(--vw-accent);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-none: 0;

  --shadow-glow-pink: 0 0 24px var(--vw-pink), 0 0 48px rgba(255, 110, 199, 0.4);
  --shadow-glow-cyan: 0 0 24px var(--vw-cyan), 0 0 48px rgba(0, 240, 255, 0.4);
  --shadow-window: 4px 4px 0 #000, 6px 6px 16px rgba(0, 0, 0, 0.3);

  --font-display: 'Impact', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', 'Courier', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 0.95 / 900 / 0.15em / uppercase | "A E S T H E T I C" 大標 |
| h1 | clamp(40px, 6vw, 64px) / 1.1 / 700 / 0.1em / uppercase | 區塊標題 |
| h2 | 24px / 1.3 / 700 / 0.06em / uppercase | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.4 / 500 / 0.2em / uppercase | label |
| katakana | 18px / 1.4 / 500 / 0.08em | 片假名輔助標題 |

## Layout Rules

- 主要背景：紫粉漸層 + 棋盤格透視地板（CSS `transform: perspective + rotateX`）+ 棕櫚樹剪影
- 區塊容器：max-width 1100px，section 之間放大量留白與分隔線（霓虹色 hr）
- 模擬古 windows 95 視窗風格的卡片：標題列 + 三個圓鈕（紅黃綠）+ 內容區
- 文字常用「W I D E  S P A C I N G」效果（letter-spacing 0.15-0.2em）

各區塊構圖：
- **hero**：滿版漸層背景 + 中央希臘雕像或圖案 + 上方大字「島嶼 共鳴」與英文「I S L A N D  R E S O N A N C E」+ 片假名副標「アイランド・レゾナンス」+ 下方 CTA 復古按鈕
- **about**：仿 Windows 95 視窗的 about box；4 個閃光球體數字
- **lineup**：12 張卡片仿 VHS cassette 標籤；headliner 卡較大、附 hot pink 邊框
- **schedule**：3 day 並列，每 day 用網格時間表配霓虹線
- **venues**：3 張小視窗，視窗內為舞台插畫 + 名稱（中英雙語 + 片假名）
- **tickets**：3 個 cassette 風格票卡，VIP 中央配電光黃描邊
- **travel**：跑馬燈跑過頂部 + 3 步驟配 80 年代圖示
- **sponsors**：仿銀色金屬名單列、title 用閃爍效果
- **footer-faq**：每條 FAQ 為 windows 視窗詳情展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量使用片假名、粗體寬距英文標題 | 完全捨棄日英輔助文字 |
| 棋盤格透視地板、漸層天空 | 用純色背景 |
| 視窗 / VHS / 卡帶 等元素至少 3 處 | 完全現代風格、無懷舊符號 |
| 文字保持白色或淺粉以維持對比 | 紫底配紫字 — 不可讀 |
| 用 css 製作棕櫚樹剪影或仿 SVG | 用真實照片（風格不合） |

## Required Output Contract

（通用契約：9 section、12 樂團、3 票價、9 贊助商、200KB、無 CDN、相對路徑圖）

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

棋盤格透視地板：
```css
.grid-floor {
  position: fixed;
  bottom: 0; left: 0;
  width: 100%; height: 50vh;
  background:
    linear-gradient(transparent 0%, rgba(255, 46, 136, 0.4) 100%),
    repeating-linear-gradient(0deg, var(--vw-bg-grid) 0 1px, transparent 1px 60px),
    repeating-linear-gradient(90deg, var(--vw-bg-grid) 0 1px, transparent 1px 60px);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  pointer-events: none;
  z-index: 0;
}
```

Windows 95 視窗：
```css
.win95 {
  background: #c0c0c0;
  border: 2px solid #fff;
  border-right-color: #404040;
  border-bottom-color: #404040;
  box-shadow: var(--shadow-window);
  color: #000;
}
.win95-bar {
  background: linear-gradient(90deg, var(--vw-bg-1) 0%, var(--vw-pink) 100%);
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: space-between;
}
```

Aesthetic title：
```css
.aesthetic-title {
  font-family: var(--font-display);
  font-size: clamp(64px, 10vw, 144px);
  font-weight: 900;
  letter-spacing: 0.15em;
  color: var(--vw-fg);
  text-shadow:
    4px 4px 0 var(--vw-pink),
    8px 8px 0 var(--vw-cyan);
  text-transform: uppercase;
}
```

跑馬燈：
```css
.marquee {
  overflow: hidden;
  background: var(--vw-pink);
  color: #fff;
  padding: 8px 0;
}
.marquee-inner {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
```
