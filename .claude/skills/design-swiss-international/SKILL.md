---
name: design-swiss-international
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Swiss International Typographic Style (瑞士國際風格). Triggers on Swiss、International Style、瑞士風格、Helvetica、Akzidenz Grotesk、Müller-Brockmann、grid system、左對齊網格、二戰後排版革命.
user-invocable: true
---

# 瑞士國際風格 Swiss International — 島嶼共鳴 2026

## Style Philosophy

瑞士國際排版風格（International Typographic Style）由 Josef Müller-Brockmann、Armin Hofmann 等 1950 年代瑞士設計師建立，是 20 世紀**設計理性主義的高峰**——嚴格的網格系統、無襯線字體（Helvetica / Akzidenz Grotesk）、左對齊、客觀傳達訊息。在音樂節網頁中，這風格把「島嶼共鳴」做成**蘇黎世火車站的活動公告**：精準、安靜、毫無花俏，但每個元素都各得其所。

三個視覺辨識特徵：
1. **嚴格 grid + 全部左對齊（or 嚴格對齊）**
2. **Helvetica / sans-serif、緊密 line-height、明確字級層次**
3. **白底黑字 + 單一鮮明強調色**（多為紅或藍）

## Design Tokens

```css
:root {
  --sw-white: #ffffff;
  --sw-black: #1d1d1b;
  --sw-fg-soft: #555555;
  --sw-grey-1: #e6e6e3;
  --sw-grey-2: #b8b8b4;
  --sw-red: #d4361a;             /* Swiss red */
  --sw-blue: #003a99;            /* Swiss blue alternative */

  --color-bg: var(--sw-white);
  --color-fg: var(--sw-black);
  --color-accent: var(--sw-red);

  --radius-none: 0;

  --grid-cols: 12;
  --grid-gutter: 24px;

  --font-display: 'Helvetica Neue', 'Helvetica', 'PingFang TC', 'Noto Sans TC', 'Arial', sans-serif;
  --font-body: 'Helvetica Neue', 'Helvetica', 'PingFang TC', 'Noto Sans TC', 'Arial', sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 0.95 / 700 / -0.02em | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.05 / 600 | 區塊 |
| h2 | 22px / 1.2 / 600 | 子標 |
| body | 15px / 1.5 / 400 | 段落 — 緊密 leading 是瑞士風格特徵 |
| caption | 11px / 1.3 / 500 / 0.06em / uppercase | label |
| mono | 13px / 1.4 / 400 | 時段（用 Helvetica，無 monospace） |

## Layout Rules

- 容器寬度：max-width 1280px、padding 40-60px
- 12-column grid + 24px gutter（嚴格遵守）
- 所有元素左對齊（或統一右對齊作為對比）
- baseline grid：所有文字都對齊到 8px baseline
- 不用陰影、不用漸層、不用裝飾——只用 hairline 或實色塊

各區塊構圖：
- **hero**：左上 8/12 大字標題，標題下 4/12 一段資訊段；右側 4/12 紅色實心方塊或極簡海報式排版
- **about**：左 4/12 caption + 右 8/12 段落 + 4 個數字（hairline 分隔）
- **lineup**：12 樂團以純文字 list、嚴格欄位對齊；headliner 用紅色短橫線標記
- **schedule**：3 個 day 為 12-column grid 內 4-column blocks，時段表用 hairline
- **venues**：3 段對齊到 4-4-4 grid，每段為 caption + name + capacity + 1 段文字
- **tickets**：3 個 4-column blocks，價格用 display 大字、純文字
- **travel**：3 個 4-column blocks
- **sponsors**：純文字三組
- **footer-faq**：6/6 grid，Q 與 A 對齊到不同 column

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格 12-column grid 對齊 | 隨意 flexbox |
| 全部 Helvetica / sans-serif | 用襯線或裝飾字體 |
| accent 色僅用紅或藍其中之一，極少用 | 用多種強調色 |
| hairline / 實色塊 / 字級對比為主要視覺工具 | 用陰影 / 漸層 / 圓角 |
| 所有文字左對齊 | 中央對齊 / 右對齊混用 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。瑞士風格可幾乎全文字 + 偶爾 1 張關鍵圖。

## Reference Snippet

12-col grid：
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
.col-2 { grid-column: span 2; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-8 { grid-column: span 8; }
.col-12 { grid-column: span 12; }
```

Display 標題：
```css
.swiss-title {
  font-family: var(--font-display);
  font-size: clamp(64px, 10vw, 144px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--sw-black);
}
.swiss-title em {
  font-style: normal;
  color: var(--sw-red);
}
```

Hairline 分隔：
```css
.swiss-hairline {
  border: none;
  border-top: 1px solid var(--sw-black);
  margin: 32px 0;
}
```

紅色實色塊（可作為 hero 視覺重點）：
```css
.swiss-block {
  background: var(--sw-red);
  color: var(--sw-white);
  padding: 40px;
  font-family: var(--font-display);
  font-weight: 600;
}
```

Caption：
```css
.swiss-kicker {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sw-fg-soft);
  margin-bottom: 16px;
}
```
