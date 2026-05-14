---
name: design-scandinavian
ating-description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Scandinavian / Nordic Minimalism style. Triggers on Scandinavian、北歐、Nordic、Hygge、Finn Juhl、Aalto、Kinfolk、自然木質、極簡溫暖、淺色木紋.
user-invocable: true
---

# 北歐極簡 Scandinavian — 島嶼共鳴 2026

## Style Philosophy

北歐設計哲學以「**機能 + 自然 + 溫暖**」為核心——20 世紀芬蘭 Alvar Aalto、丹麥 Finn Juhl 等家具設計師創立的傳統，加上當代 Hygge 生活哲學。視覺上：**淺木色、白色、灰色、軍綠色 / 深藍**為基調，少量強調色，自然素材（木紋、亞麻、植栽）為紋理，幾何但溫暖。在音樂節網頁中，這風格把「島嶼共鳴」呈現得像 **斯堪地納維亞夏日的森林音樂會**：寬鬆、舒適、人本。

三個視覺辨識特徵：
1. **米白 + 淺木 + 軍綠 / 深藍** 配色，飽和度低、明度高
2. **無襯線細字 + 大量留白 + 適中圓角（8-12px）**
3. **手繪自然元素**（葉子、枝條、波浪）作為點綴

## Design Tokens

```css
:root {
  --sc-cream: #f5f0e6;          /* 亞麻米 */
  --sc-cream-2: #ece5d4;
  --sc-wood: #c89e69;           /* 淺木 */
  --sc-wood-dark: #9c764a;
  --sc-fg: #2c2a26;             /* 暖深棕 */
  --sc-fg-soft: #5a564d;
  --sc-fg-mute: #8a8478;
  --sc-stone: #cfc8b9;
  --sc-forest: #3e574b;         /* 森林綠 */
  --sc-deep: #1f3b4d;           /* 深海藍 */
  --sc-accent: #c44e3c;         /* 磚紅，少量 */

  --color-bg: var(--sc-cream);
  --color-fg: var(--sc-fg);
  --color-accent: var(--sc-forest);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-soft: 0 2px 8px rgba(44, 42, 38, 0.05), 0 8px 32px rgba(44, 42, 38, 0.06);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(44px, 7vw, 84px) / 1.1 / 500 / -0.015em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 500 | 區塊 |
| h2 | 20px / 1.35 / 500 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.5 / 500 / 0.16em / uppercase | label |

字重偏輕至中（400-500），不用 700+ 粗體。

## Layout Rules

- 背景：米白 + 偶爾的「木紋」CSS gradient 條紋紋理
- 容器寬度：max-width 1160px，section padding 80-100px
- 卡片用淺色背景 + 軟陰影，圓角 8-16px
- 大量留白、寬鬆 line-height、適中字距

各區塊構圖：
- **hero**：左大字標題 + 右 hero 圖（圓角 28px）+ 下方 chip 標示日期 / 場地 / slogan + 軍綠 pill CTA
- **about**：左插畫圖（葉片 / 森林意象 / 木質）+ 右段落 + 4 個圓形大數字（淺木背景）
- **lineup**：12 張米白卡 + 軟陰影；headliner 卡背景換深森林綠白字
- **schedule**：3 day 各為一張長卡，時段以淺木分隔線
- **venues**：3 張卡（圖在頂、文在下），圓角 16px
- **tickets**：3 張卡，VIP 中央背景深海藍白字、其他米白配軍綠細邊
- **travel**：3 步驟，序號圈為淺木色
- **sponsors**：title 米白卡大 + gold 米白卡中 + silver 純文字
- **footer-faq**：每條 FAQ 為米白圓角卡 with `<details>` expand

## Do / Don't

| Do | Don't |
| --- | --- |
| 飽和度低、明度高的自然色 | 高飽和螢光色 |
| 細到中等字重、寬鬆 line-height | 厚實粗體 |
| 適中圓角（8-16px） | 直角或極大圓角 |
| 配葉片 / 樹枝 / 波浪等自然元素裝飾 | 用機械幾何裝飾 |
| 大量留白、不擁擠 | 元素密集排版 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。鼓勵自然光、靜物、戶外景觀。

## Reference Snippet

軟陰影卡：
```css
.nordic-card {
  background: #fdfbf5;
  border: 1px solid rgba(44, 42, 38, 0.06);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
}
.nordic-card.forest {
  background: var(--sc-forest);
  color: var(--sc-cream);
}
.nordic-card.deep {
  background: var(--sc-deep);
  color: var(--sc-cream);
}
```

葉片裝飾（SVG inline）：
```html
<svg viewBox="0 0 40 40" class="leaf">
  <path d="M20 4 C 28 8, 32 16, 30 28 C 24 26, 16 22, 12 14 C 14 8, 18 4, 20 4 Z"
        fill="var(--sc-forest)" opacity="0.4"/>
  <path d="M20 4 L 20 32" stroke="var(--sc-forest)" stroke-width="0.8" opacity="0.6"/>
</svg>
```

```css
.leaf {
  width: 32px; height: 32px;
  display: inline-block;
}
```

Pill CTA：
```css
.btn-nordic {
  background: var(--sc-forest);
  color: var(--sc-cream);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  font-weight: 500;
  letter-spacing: 0.04em;
  font-size: 15px;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
}
.btn-nordic.outline {
  background: transparent;
  color: var(--sc-forest);
  border: 1px solid var(--sc-forest);
}
```

數字大字：
```css
.nordic-stat {
  width: 120px; height: 120px;
  border-radius: 50%;
  background: var(--sc-cream-2);
  display: grid;
  place-items: center;
  font-size: 36px;
  font-weight: 500;
  color: var(--sc-forest);
}
```
