---
name: design-synthwave
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in 80s Synthwave / Outrun aesthetic. Triggers on Synthwave、Outrun、80s、retrowave、neon grid sun、Drive movie、Stranger Things title style、霓虹網格夕陽.
user-invocable: true
---

# 80s Synthwave — 島嶼共鳴 2026

## Style Philosophy

Synthwave 是對 1980 年代電影、電玩、賽車海報的當代懷舊重塑——靈感來自 Tron、Miami Vice、Blade Runner、Drive。視覺核心：**深紫黑天空 + 巨大霓虹粉紅落日 + 透視網格地板 + 鉻金屬發光標題**。差異於 vaporwave 的反諷與廢墟感，synthwave 更燦爛、奔馳、英雄主義。在音樂節網頁中，這風格讓「島嶼共鳴」像 1985 年某部不存在的科幻電影的主視覺。

三個視覺辨識特徵：
1. **巨大霓虹太陽 / 月亮**漸層在水平線上（粉紅 → 橙 → 紫）
2. **透視網格地板**延伸至地平線
3. **發光鉻金屬標題字 + 銳利霓虹邊框**

## Design Tokens

```css
:root {
  --sw-sky-1: #0c0124;
  --sw-sky-2: #2c0c5a;
  --sw-sun-1: #ff2e88;
  --sw-sun-2: #ff8b00;
  --sw-sun-3: #ffe35c;
  --sw-grid: #ff2e88;
  --sw-cyan: #00f0ff;
  --sw-purple: #b026ff;

  --sw-fg: #ffffff;
  --sw-fg-soft: #d8c5ff;
  --sw-fg-mute: rgba(255, 255, 255, 0.6);

  --color-bg: var(--sw-sky-1);
  --color-fg: var(--sw-fg);
  --color-accent: var(--sw-sun-1);

  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-none: 0;

  --shadow-neon-pink: 0 0 8px var(--sw-sun-1), 0 0 24px rgba(255, 46, 136, 0.6);
  --shadow-neon-cyan: 0 0 8px var(--sw-cyan), 0 0 24px rgba(0, 240, 255, 0.6);
  --shadow-neon-purple: 0 0 8px var(--sw-purple), 0 0 24px rgba(176, 38, 255, 0.6);

  --font-display: 'Impact', 'Arial Black', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / 0.05em / uppercase | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.1 / 800 / uppercase | 區塊大標 |
| h2 | 22px / 1.25 / 700 / 0.05em / uppercase | 子標 |
| body | 15px / 1.65 / 400 | 段落 |
| caption | 12px / 1.4 / 700 / 0.18em / uppercase | label |
| mono | 14px / 1.5 / 500 / Courier | 時段、票價 |

## Layout Rules

- 全頁背景：紫黑漸層上方（天空）+ 透視網格地板下半部 + 中央放置巨大霓虹落日（CSS radial gradient + horizontal stripes 切割）
- 容器寬度：max-width 1180px
- 卡片：黑底配霓虹邊框（pink 或 cyan）、極輕內距、銳利角

各區塊構圖：
- **hero**：滿版背景配霓虹落日 + 中央鉻金屬發光大字標題 + 副標片假名或英文 + CTA 為粉紅霓虹邊框按鈕
- **about**：4 個霓虹邊框數字 tile（每個交替使用 pink / cyan 邊框）
- **lineup**：12 張卡，每張卡為黑底 + neon 邊框；headliner 卡用 pink 大邊 + 內外發光
- **schedule**：3 day 並列、每 day 用 cyan / pink / purple 邊框區分；時段表為 mono 字體
- **venues**：3 張卡寬排，圖片用 neon 邊框包圍
- **tickets**：3 張票卡，VIP 中央用粉紅發光厚邊
- **travel**：3 步驟，配紫色霓虹圖示
- **sponsors**：黑底 grid，title 用粉紅 + cyan 雙色文字漸層
- **footer-faq**：每條 FAQ 為霓虹邊框小框，標題粉色

## Do / Don't

| Do | Don't |
| --- | --- |
| 巨大落日 + 透視網格作為頁面背景 | 用平面色塊背景 |
| 標題字加 chrome 漸層 + glow shadow | 用 flat 顏色標題 |
| 邊框用 1-2px sharp neon border | 用厚實邊框 |
| 文字配色控制在 pink / cyan / purple / 白 | 用過多顏色變花 |
| 銳利角、不要圓角（最多 6px） | 用大圓角 — 失去 80s 感 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

霓虹落日（純 CSS）：
```css
.sun {
  position: relative;
  width: 80%; max-width: 600px;
  aspect-ratio: 1;
  margin: 0 auto;
  background:
    linear-gradient(180deg,
      var(--sw-sun-3) 0%, var(--sw-sun-3) 60%,
      transparent 60%, transparent 65%,
      var(--sw-sun-2) 65%, var(--sw-sun-2) 70%,
      transparent 70%, transparent 75%,
      var(--sw-sun-1) 75%, var(--sw-sun-1) 82%,
      transparent 82%, transparent 87%,
      var(--sw-sun-1) 87%, var(--sw-sun-1) 100%);
  border-radius: 50%;
  filter: drop-shadow(0 0 60px rgba(255, 46, 136, 0.6));
}
```

透視網格地板：
```css
.grid-floor {
  position: fixed;
  bottom: 0; left: 0; width: 100%; height: 40vh;
  background:
    linear-gradient(180deg, transparent 0%, var(--sw-sky-1) 90%),
    repeating-linear-gradient(0deg, var(--sw-grid) 0 1px, transparent 1px 50px),
    repeating-linear-gradient(90deg, var(--sw-grid) 0 1px, transparent 1px 50px);
  transform: perspective(400px) rotateX(60deg);
  transform-origin: top;
  z-index: -1;
}
```

Chrome 漸層標題：
```css
.chrome-title {
  font-family: var(--font-display);
  font-weight: 900;
  background: linear-gradient(180deg,
    var(--sw-sun-3) 0%,
    var(--sw-sun-2) 50%,
    var(--sw-sun-1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow:
    0 4px 12px rgba(255, 46, 136, 0.6);
  letter-spacing: 0.05em;
}
```

霓虹卡片：
```css
.neon-card {
  background: rgba(12, 1, 36, 0.7);
  border: 2px solid var(--sw-sun-1);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-neon-pink), inset 0 0 16px rgba(255, 46, 136, 0.2);
  color: var(--sw-fg);
}
.neon-card.cyan { border-color: var(--sw-cyan); box-shadow: var(--shadow-neon-cyan); }
.neon-card.purple { border-color: var(--sw-purple); box-shadow: var(--shadow-neon-purple); }
```

CTA：
```css
.btn-neon {
  background: transparent;
  border: 2px solid var(--sw-sun-1);
  color: var(--sw-sun-1);
  padding: 14px 32px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-shadow: var(--shadow-neon-pink);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-neon:hover { background: var(--sw-sun-1); color: var(--sw-sky-1); }
```
