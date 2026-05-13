---
name: design-hand-drawn
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Hand-Drawn Sketch (手繪塗鴉) style. Triggers on 手繪、塗鴉、Sketch、wobbly lines、felt-tip、crayon、children drawing、indie zine、illustrated.
user-invocable: true
---

# 手繪塗鴉 Hand-Drawn — 島嶼共鳴 2026

## Style Philosophy

手繪塗鴉風格在 2020 年代被 indie 品牌、教育產品、Notion app、Discord 早期介面廣泛使用——它的核心是「**不完美的人味**」：線條歪斜、邊界手抖、底色是塗鴉本而非螢幕。在音樂節網頁中，這風格把「島嶼共鳴」做成 **設計師個人速寫本中的活動策劃**——粉蠟筆塗色、原子筆描邊、便利貼註解、咖啡漬印——溫暖、誠懇、私人。

三個視覺辨識特徵：
1. **歪斜手繪線條**（CSS `border-style` 不可，須用 SVG 或 box-shadow 模擬）+ 不規則填色
2. **手寫字 mock**（用 Comic Sans / Patrick Hand / 自然衍生字體；中文用粗黑體 + 微旋轉）
3. **便利貼、咖啡漬、箭頭塗鴉、波浪線下劃** 等紙上元素

## Design Tokens

```css
:root {
  --hd-paper: #fbf6ee;           /* 米色草稿紙 */
  --hd-paper-grid: rgba(45, 42, 38, 0.06); /* 方格紋紙 */
  --hd-ink: #2d2a26;             /* 鋼筆藍黑 */
  --hd-pencil: #5a564d;
  --hd-red: #e84a3a;             /* 紅蠟筆 */
  --hd-yellow: #f7c84b;          /* 黃蠟筆 */
  --hd-blue: #4a86e0;            /* 藍蠟筆 */
  --hd-green: #4fb585;           /* 綠蠟筆 */
  --hd-pink: #e8779e;            /* 粉蠟筆 */
  --hd-highlighter: rgba(247, 200, 75, 0.5);  /* 螢光筆 */

  --color-bg: var(--hd-paper);
  --color-fg: var(--hd-ink);
  --color-accent: var(--hd-red);

  --radius-rough: 24px 18px 22px 16px / 16px 22px 18px 24px;
  --radius-circle: 50%;

  --font-display: 'Comic Sans MS', 'Marker Felt', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Patrick Hand', system-ui, sans-serif;
  --font-script: 'Marker Felt', 'PingFang TC', cursive;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 100px) / 1.05 / 800 / Comic Sans 或粗黑體 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.15 / 700 | 區塊 |
| h2 | 22px / 1.3 / 700 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 13px / 1.4 / 500 / italic | 註解 |

中文常配輕微旋轉 (`rotate(-1deg)` ~ `rotate(2deg)`) 製造手寫感。

## Layout Rules

- 背景：米色草稿紙 + 細格紋（CSS gradient 5mm 方格）+ 偶爾一處咖啡漬（radial-gradient 半透棕）
- 容器寬度：max-width 1180px
- 卡片用「不規則圓角」（border-radius 多值 / 變形）+ 手繪邊框（SVG dasharray 或 hand-drawn-border-image）
- 元素小幅旋轉（-2° ~ 2°）製造手繪不對齊感
- 添加塗鴉裝飾：手繪箭頭 ↗、波浪線下劃、便利貼、星星 ✦

各區塊構圖：
- **hero**：左大字（用 Marker Felt / Comic Sans）+ 中央咖啡漬 + 右邊一張便利貼上寫日期 + 紅蠟筆 CTA 「立即購票！」配手繪箭頭
- **about**：左插畫 hero 圖（手繪風） + 右段落 + 4 個圓圈手繪數字（每個配波浪下劃線強調）
- **lineup**：12 張便利貼卡（不同顏色：黃 / 粉 / 綠 / 藍輪換）旋轉 -2°~2°；headliner 加紅蠟筆圈起 + 星星裝飾
- **schedule**：3 day 為手繪行事曆頁，時段用粉藍綠標色
- **venues**：3 段，配手繪 SVG 場地小圖（純 CSS 或 SVG）
- **tickets**：3 張票卡仿手繪票根，VIP 中央用紅蠟筆塗滿
- **travel**：3 步驟，用手繪箭頭 ↗↘ 連接
- **sponsors**：仿筆記本標籤，title 用螢光筆 highlight
- **footer-faq**：每條 FAQ 為便利貼疊放，Q 用紅筆 A 用鉛筆

## Do / Don't

| Do | Don't |
| --- | --- |
| 不規則圓角、輕微元素旋轉、手寫字風 | 完美對齊與圓角 |
| 紙質背景（細格紋 / 米色 / 咖啡漬） | 純色 flat 背景 |
| 蠟筆色塊塗色（不要 100% 飽和） | 螢光純色 |
| 添加塗鴉裝飾：箭頭、波浪線、星星 | 完全無裝飾 |
| 文字保持高對比（深藍黑配米紙 ≈ 11:1） | 用淺灰文字 |

## Required Output Contract

通用契約。**鼓勵手繪 SVG 圖示**。

## Required Images

依 `assets-manifest.json`。鼓勵插畫風格。

## Reference Snippet

紙紋背景：
```css
body {
  background-color: var(--hd-paper);
  background-image:
    linear-gradient(var(--hd-paper-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--hd-paper-grid) 1px, transparent 1px);
  background-size: 20px 20px;
}
body::before {
  content: '';
  position: fixed;
  width: 280px; height: 220px;
  top: 30%; right: 5%;
  background: radial-gradient(ellipse, rgba(120, 80, 50, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```

便利貼卡：
```css
.sticky-note {
  background: var(--hd-yellow);
  padding: 20px 22px 24px;
  border-radius: var(--radius-rough);
  box-shadow:
    0 6px 12px rgba(45, 42, 38, 0.12),
    0 1px 1px rgba(45, 42, 38, 0.08);
  transform: rotate(-1.5deg);
  font-family: var(--font-display);
  color: var(--hd-ink);
  position: relative;
}
.sticky-note.pink   { background: var(--hd-pink); transform: rotate(1.2deg); }
.sticky-note.blue   { background: var(--hd-blue); transform: rotate(-0.8deg); color: white; }
.sticky-note.green  { background: var(--hd-green); transform: rotate(1.5deg); color: white; }
.sticky-note.tape::before {
  content: '';
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-4deg);
  width: 60px; height: 18px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
```

蠟筆圈塗鴉：
```css
.crayon-circle {
  position: relative;
  display: inline-block;
}
.crayon-circle::after {
  content: '';
  position: absolute;
  inset: -8px -14px;
  border: 3px solid var(--hd-red);
  border-radius: 50% 60% 40% 55% / 50% 45% 55% 50%;
  transform: rotate(-3deg);
  opacity: 0.7;
}
```

螢光筆 highlight：
```css
.highlight {
  background: linear-gradient(180deg, transparent 50%, var(--hd-highlighter) 50%);
  padding: 0 4px;
}
```

手繪 CTA：
```css
.btn-hand {
  background: var(--hd-red);
  color: var(--hd-paper);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-rough);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  transform: rotate(-1deg);
  box-shadow: 4px 4px 0 var(--hd-ink);
  cursor: pointer;
  position: relative;
}
.btn-hand:hover { transform: rotate(-2deg) translateY(-2px); box-shadow: 6px 6px 0 var(--hd-ink); }
```

手繪箭頭（SVG inline）：
```html
<svg viewBox="0 0 80 30" class="hand-arrow">
  <path d="M5 15 Q 25 8 40 18 T 70 12" stroke="var(--hd-ink)" stroke-width="2.5" fill="none" stroke-linecap="round" />
  <path d="M62 6 L 75 12 L 68 22" stroke="var(--hd-ink)" stroke-width="2.5" fill="none" stroke-linecap="round" />
</svg>
```
