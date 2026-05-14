---
name: motion-parallax-layers
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with multi-layer parallax scrolling. Triggers on 視差捲動、parallax scroll、multi-layer depth、滾動深度位移、scrolling with depth.
user-invocable: true
---

# 多層視差 Parallax Layers — 島嶼共鳴 2026

## Style Philosophy

視差滾動（parallax）模擬人眼的雙眼立體視覺：前景動得快、遠景動得慢，造成「深度錯覺」。這個風格的核心是**把都蘭灣的山、海、雲、人**拆成 4-5 個重疊圖層，滾動時每層的 translateY 乘以不同係數，產生身臨其境的縱深感。視覺風格採用扁平插畫風（受 Sebastian Lester / Owen Davey 影響）：純色塊 + 簡單形狀。

三個視覺辨識特徵：
1. **多層重疊 SVG 山海雲**作為 hero 背景，每層獨立 z-index 與 transform speed
2. **scroll 事件 + rAF 節流**驅動 transform translateY 變化
3. **扁平插畫**：限定 5 色調色盤、純色塊、無漸層

## Design Tokens

```css
:root {
  --p-sky-1: #fcd34d;          /* 夕陽黃 */
  --p-sky-2: #f97316;          /* 橘紅 */
  --p-sky-3: #d97706;          /* 深橘 */
  --p-mountain-far: #92400e;   /* 遠山 */
  --p-mountain-mid: #7c2d12;   /* 中山 */
  --p-mountain-near: #451a03;  /* 近山 */
  --p-sea-1: #0c4a6e;
  --p-sea-2: #075985;
  --p-text: #fafaf9;
  --p-text-dark: #1c1917;
  --p-accent: #fef3c7;
  --p-cta: #f97316;

  --color-bg: var(--p-sky-2);
  --color-fg: var(--p-text);
  --color-accent: var(--p-cta);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.12em / uppercase | label |

## Layout Rules

- Hero 區設為 `min-height: 100vh`、`overflow: hidden`，內含 5 個絕對定位的 SVG 圖層
- 後續區塊保持白底深色文字（避免一直視差感太重）
- 每兩個內容區段之間插一個 80px 的「半固定圖層」過場（用 sticky）

各區塊構圖：
- **hero**：全螢幕視差 — 天空（speed 0.1）→ 遠山（0.3）→ 中山（0.5）→ 近山（0.7）→ 海浪（0.9），中央覆蓋大字「島嶼共鳴」
- **about**：白底深色，4 個 stat 數字附小視差插畫
- **lineup**：12 樂團卡片網格，每張卡 hover 時內部插畫上下浮動（CSS keyframes）
- **schedule**：3 day timetable，每 day 配一條淺色山形 SVG 作為視差背景
- **venues**：3 段，每段配視差山海插畫
- **tickets**：3 張票卡，VIP 中央配漸層紙質背景
- **travel**：步驟 list，背景有飄動雲層 SVG
- **sponsors**：純文字 list，分級
- **footer-faq**：簡單 `<details>` accordion

## Motion Specification

- **動態效果類別**：parallax
- **觸發機制**：window scroll event（passive: true）+ requestAnimationFrame
- **性能要求**：所有 layer 用 `transform: translate3d(0, ?px, 0)` 啟用 GPU 加速；不可動 top / margin
- **觸發頻率**：scroll handler 設 `passive: true` 與 rAF batching，最多 60fps
- **layer speed 配對**：
  - 天空：0（不動）
  - 雲：0.15
  - 遠山：0.3
  - 中山：0.5
  - 近山：0.7
  - 海浪：0.85（接近 scroll 速度）

## Accessibility (Reduced Motion)

- 必含 `@media (prefers-reduced-motion: reduce)` 區塊
- reduced 模式：所有 `.parallax-layer` 設 `transform: none !important`、JS rAF loop 直接 return
- 視差層仍可看見、只是不再隨滾動位移
- 內容對比度：白字（#fafaf9）on 橘紅天空（#f97316）約 4.7:1，邊界值，可加 1px text-shadow 加強

## Required Output Contract

通用契約 + 8 條動態額外要求。**`<body data-motion-type="parallax">`**。

## Required Images

依 `assets-manifest.json`。視差圖建議用內嵌 SVG（純色塊山海雲），減少請求。可選 1-2 張寫實圖加強氛圍。

## Reference Snippet

視差 hero：
```html
<section class="hero">
  <svg class="layer" data-speed="0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
    <rect width="1440" height="900" fill="var(--p-sky-2)"/>
  </svg>
  <svg class="layer" data-speed="0.3" viewBox="0 0 1440 900">
    <polygon points="0,600 400,400 800,500 1200,350 1440,420 1440,900 0,900" fill="var(--p-mountain-far)"/>
  </svg>
  <svg class="layer" data-speed="0.5" viewBox="0 0 1440 900">
    <polygon points="0,700 200,520 500,600 900,480 1440,580 1440,900 0,900" fill="var(--p-mountain-mid)"/>
  </svg>
  <svg class="layer" data-speed="0.7" viewBox="0 0 1440 900">
    <polygon points="0,780 300,650 700,720 1100,640 1440,700 1440,900 0,900" fill="var(--p-mountain-near)"/>
  </svg>
  <div class="hero-content">
    <h1>島嶼共鳴 2026</h1>
  </div>
</section>
```

```css
.hero { position: relative; min-height: 100vh; overflow: hidden; }
.layer { position: absolute; inset: 0; width: 100%; height: 100%; will-change: transform; }
.hero-content {
  position: relative; z-index: 10;
  display: grid; place-items: center; min-height: 100vh;
  color: var(--p-text);
}
@media (prefers-reduced-motion: reduce) {
  .layer { transform: none !important; }
}
```

```javascript
// 視差 JS — 寫進 inline <script>
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layers = document.querySelectorAll('.layer[data-speed]');
  let ticking = false;
  function update() {
    const y = window.scrollY;
    layers.forEach((l) => {
      const speed = parseFloat(l.dataset.speed) || 0;
      l.style.transform = 'translate3d(0,' + (y * speed) + 'px,0)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();
```
