---
name: design-isometric-3d
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Isometric 3D (等距 3D) illustration style. Triggers on Isometric、等距視角、isometric illustration、3D illustration、玩具感、30 度斜角、Cuberto、Pixel Truedimensions.
user-invocable: true
---

# 等距 3D Isometric 3D — 島嶼共鳴 2026

## Style Philosophy

Isometric 是一種**沒有透視收斂的 3D 視角**——所有 x/y/z 軸成 30°/30°/90° 等距投影，物件不會因距離縮小。這視角源於工程繪圖，1980 年代電玩（《Q\*bert》《SimCity 2000》）將其推上主流，21 世紀則成為產品插畫的「萬用語言」（Stripe、Notion、Slack 早期插畫風格）。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **一座可被觀察的微型玩具世界**：山在這裡、海在那裡、舞台在中央、小人物在跑步——資訊與觀察並存。

三個視覺辨識特徵：
1. **30°/30° 等距投影、明顯三組平面**（頂、前、側）
2. **明亮飽和的色彩、扁平著色 + 投影陰影**
3. **小人物、小場景、堆疊物件**等「玩具感」插畫

## Design Tokens

```css
:root {
  --iso-bg: #f0e6d2;             /* 米沙色背景 */
  --iso-bg-2: #f7efe1;
  --iso-sky: #b9e2ff;            /* 等距天空 */
  --iso-fg: #2d2a26;
  --iso-fg-soft: #6b6760;
  --iso-orange: #ff8a3c;          /* 暖橘 */
  --iso-pink: #ff6f9b;
  --iso-mint: #5fd0b3;
  --iso-lavender: #b6a2ff;
  --iso-yellow: #ffd166;
  --iso-blue: #4c8df6;
  --iso-shadow: #d3c5a8;

  --color-bg: var(--iso-bg);
  --color-fg: var(--iso-fg);
  --color-accent: var(--iso-orange);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-soft: 0 4px 12px rgba(45, 42, 38, 0.08), 0 12px 24px rgba(45, 42, 38, 0.08);
  --shadow-deep: 0 12px 36px rgba(45, 42, 38, 0.14);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Avenir', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(44px, 7vw, 84px) / 1.05 / 800 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 700 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.12em / uppercase | label |

字重偏粗、字距負（玩具感字標）。

## Layout Rules

- 背景：米沙色 + 等距格線 SVG（淺色）+ 偶爾飄一個小雲朵
- 容器寬度：max-width 1200px
- 卡片用圓角 + 軟陰影，模擬「漂浮」立體感
- 用 CSS `transform: matrix(...)` 或預先生成的 SVG 模擬等距形狀

各區塊構圖：
- **hero**：左大字 + 右等距場景圖（hero.webp 是核心圖、整個音樂節微縮成等距插畫）+ 圓 CTA 按鈕（橘色 + 投影）
- **about**：左等距插畫小場景 + 右段落 + 4 個圓形 3D 數字（每個搭配一個等距小物件）
- **lineup**：12 張圓角卡，每張卡上方放等距樂團小插畫、下方資訊
- **schedule**：3 day 用 timetable 卡，配立體小時鐘 icon
- **venues**：3 張卡用等距舞台插畫、下方文字
- **tickets**：3 張票卡，VIP 中央卡放大、配等距小皇冠插畫
- **travel**：3 步驟，每步配等距小交通工具 SVG（巴士、火車、帳篷）
- **sponsors**：title 配等距禮物盒圖示、gold/silver 配小徽章
- **footer-faq**：圓角卡 with `<details>`，配等距問號裝飾

## Do / Don't

| Do | Don't |
| --- | --- |
| 30° 等距角、不要近大遠小 | 用一點透視 |
| 飽和但不刺眼的暖色調 | 用單色或黑白 |
| 卡片用軟陰影製造漂浮感 | 用扁平無陰影 |
| 每個區塊配 1-2 個等距小元素 | 完全純文字 |
| 圓角中等（16-24px），玩具感不過度 | 用尖角或極大圓角 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。**強烈依賴 AI 生圖**，等距插畫風格。

## Reference Snippet

等距格線背景：
```css
body {
  background-color: var(--iso-bg);
  background-image:
    linear-gradient(30deg, transparent 50%, rgba(45, 42, 38, 0.04) 50%),
    linear-gradient(150deg, transparent 50%, rgba(45, 42, 38, 0.04) 50%);
  background-size: 60px 35px;
}
```

漂浮卡：
```css
.iso-card {
  background: #ffffff;
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.iso-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-deep);
}
```

立體圓形數字：
```css
.iso-num {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: var(--iso-orange);
  color: white;
  display: grid;
  place-items: center;
  font-size: 48px;
  font-weight: 800;
  box-shadow: 0 0 0 8px rgba(255, 138, 60, 0.15), 0 12px 24px rgba(255, 138, 60, 0.35);
}
.iso-num.mint { background: var(--iso-mint); box-shadow: 0 0 0 8px rgba(95, 208, 179, 0.15), 0 12px 24px rgba(95, 208, 179, 0.35); }
.iso-num.lavender { background: var(--iso-lavender); }
.iso-num.yellow { background: var(--iso-yellow); color: var(--iso-fg); }
```

CTA：
```css
.btn-iso {
  background: var(--iso-orange);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 16px rgba(255, 138, 60, 0.35);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.btn-iso:hover { transform: translateY(-2px); }
```

純 CSS 等距方塊（小裝飾用）：
```css
.iso-block {
  width: 60px; height: 60px;
  background: var(--iso-orange);
  position: relative;
  transform: rotate(45deg) skew(15deg, 15deg);
}
.iso-block::before, .iso-block::after {
  content: '';
  position: absolute;
}
.iso-block::before {
  inset: 0;
  background: rgba(0,0,0,0.15);
  transform: translateY(-100%) skewX(-30deg);
  transform-origin: bottom;
}
```
