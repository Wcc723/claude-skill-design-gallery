---
name: design-brutalism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Brutalism (野獸派 / Brutalist Web) style. Triggers on 野獸派、Brutalism、Brutalist web、raw HTML、anti-design、monospace、harsh contrast、Balenciaga website.
user-invocable: true
---

# 野獸派 Brutalism — 島嶼共鳴 2026

## Style Philosophy

Brutalism 原指 1950 年代清水混凝土建築運動，2010 年代 web design 借用此詞——意味著「**故意違反 UX 規範**」：粗糙、裸露、邊框醜、字體大到沒道理、按鈕長得像 90 年代教學網。但它不是「無腦亂排」，而是**有意識地拒絕舒適感**，呼籲設計回到內容本身。在音樂節網頁，這風格讓「島嶼共鳴」看起來像 **某個獨立廠牌剛印出來的傳單，還沒來得及設計過**——粗糙、急迫、誠實。

三個視覺辨識特徵：
1. **粗黑邊框、極端對比**（純黑白偶爾螢光色）
2. **monospace 或粗 grotesque 字體**、巨大粗體標題、無修飾段落
3. **故意「醜」的元素**：偏移容器、超大箭頭、未對齊按鈕、純色 alert 標籤

## Design Tokens

```css
:root {
  --bru-bg: #f0eeea;            /* 工地白 / 紙板色 */
  --bru-paper: #ffffff;
  --bru-fg: #000000;
  --bru-fg-mute: #444444;
  --bru-border: #000000;
  --bru-shock-yellow: #fff200;
  --bru-shock-pink: #ff007f;
  --bru-shock-blue: #00f;
  --bru-shock-red: #ff0000;

  --color-bg: var(--bru-bg);
  --color-fg: var(--bru-fg);
  --color-accent: var(--bru-shock-yellow);

  --radius-none: 0;
  --radius-sm: 0;

  --border-thick: 3px solid var(--bru-border);
  --border-extra: 6px solid var(--bru-border);

  --font-display: 'Helvetica Neue', 'Arial Narrow', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'Courier New', 'Menlo', 'PingFang TC', monospace;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(80px, 14vw, 200px) / 0.85 / 900 / -0.04em | Hero — 故意太大 |
| h1 | clamp(40px, 6vw, 64px) / 0.95 / 900 / -0.02em | 區塊 |
| h2 | 20px / 1.1 / 700 / mono | 子標 |
| body | 14px / 1.5 / 400 / mono | 段落 |
| caption | 11px / 1.3 / 700 / mono / uppercase | label |

## Layout Rules

- 背景：純白或紙板灰
- 容器寬度：故意不一致——有些區塊全寬、有些 600px、有些靠左
- 元素邊框：黑色粗框 3-6px，沒有圓角
- 排版常有偏移：標題向左壓邊、文字段超出容器、按鈕方角貼緊邊
- 衝擊色塊（pink / yellow / red / blue）用於警示與強調

各區塊構圖：
- **hero**：上方一條 alert 黃色橫條 + 巨型黑字標題 + 標題下方一段超長 monospace 段落（描述）+ 醜陋粗黑邊框 CTA 按鈕（hover 反白）
- **about**：左 1/3 純黑底白字段落 + 右 2/3 大字數字（4 行極大數字）
- **lineup**：12 樂團用列表方式呈現，每一列為粗黑橫線分隔；headliner 用衝擊粉色純底白字
- **schedule**：仿時刻表，monospace 字體、緊密 leading、用 ASCII 風 box drawing 字元（`+----+`）模擬表格
- **venues**：3 段，圖片用粗黑邊框框住、文字緊貼圖片下方
- **tickets**：3 個粗黑邊框方塊、各塊背景輪換衝擊色（pink / white / blue）
- **travel**：3 個 numbered block，01 02 03 字超大塞入
- **sponsors**：列表呈現、Title sponsor 用衝擊紅色純底白字
- **footer-faq**：每條 Q 用黑底白字 + A 用 mono 縮進，極粗暴

## Do / Don't

| Do | Don't |
| --- | --- |
| 粗黑邊框、無圓角、無漸層 | 用柔和設計元素 |
| 字體故意超大、超粗 | 用「優雅」字體 |
| 偏移、未對齊的排版 | 完美 grid 對齊 |
| 衝擊色塊用於警示 / headliner / title sponsor | 全頁同一色調 |
| 對比度必須 ≥ 7:1（純黑白沒問題） | 用低對比配色 — 即使野獸派也不能不可讀 |

## Required Output Contract

通用契約。對比度為**硬底線**：純黑白 ≥ 7:1 必然達標；衝擊色塊上的文字必須是純白或純黑。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

野獸派標題：
```css
.brutal-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(80px, 14vw, 200px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--bru-fg);
  text-transform: uppercase;
}
```

粗框 CTA：
```css
.btn-brutal {
  display: inline-block;
  background: var(--bru-fg);
  color: var(--bru-paper);
  padding: 16px 32px;
  border: var(--border-extra);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}
.btn-brutal:hover {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
}
```

Alert 橫條：
```css
.alert-bar {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
  border-top: var(--border-thick);
  border-bottom: var(--border-thick);
  padding: 12px 24px;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

ASCII 表格：
```css
.ascii-table {
  font-family: var(--font-mono);
  white-space: pre;
  font-size: 14px;
  line-height: 1.4;
  color: var(--bru-fg);
}
```

野獸卡：
```css
.brutal-card {
  background: var(--bru-paper);
  border: var(--border-extra);
  padding: 28px;
  font-family: var(--font-mono);
}
.brutal-card.shock-pink {
  background: var(--bru-shock-pink);
  color: var(--bru-paper);
  border-color: var(--bru-paper);
}
.brutal-card.shock-yellow {
  background: var(--bru-shock-yellow);
  color: var(--bru-fg);
}
```
