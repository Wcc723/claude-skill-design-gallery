---
name: motion-marquee-band
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with horizontal scrolling marquee text whose speed responds to scroll velocity. Triggers on marquee、跑馬燈、scroll-velocity、horizontal text loop.
user-invocable: true
---

# 滾動跑馬燈 Marquee Band — 島嶼共鳴 2026

## Style Philosophy

跑馬燈是一個老元素，但加上「**滾動會反向加速**」就變成當代 awwwards 級互動：用戶滾動時跑馬燈會「逆風」加速、停下時恢復常速。這個風格用大量重複的樂團名／slogan 構成水平大字帶，貫穿整個網頁。視覺極大、極粗、極黑白對比。

三個視覺辨識特徵：
1. **多條跑馬燈大字帶**穿插各區塊（樂團名、slogan、贊助商）
2. **滾動速度影響跑馬燈速率**（用 scroll velocity 計算）
3. **大量留白 + 巨型字**極簡風

## Design Tokens

```css
:root {
  --m-bg: #ffffff;
  --m-bg-dark: #0f0f0f;
  --m-fg: #0f0f0f;
  --m-fg-soft: #555555;
  --m-fg-inverse: #ffffff;
  --m-accent: #f43f5e;       /* 粉紅紅 */
  --m-line: #e5e5e5;

  --color-bg: var(--m-bg);
  --color-fg: var(--m-fg);
  --color-accent: var(--m-accent);

  --radius-none: 0;
  --radius-sm: 4px;
  --radius-pill: 999px;

  --font-display: 'Inter', 'Helvetica Neue', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| marquee | clamp(80px, 14vw, 200px) / 0.95 / 900 / -0.04em / uppercase | 跑馬燈大字 |
| display | clamp(56px, 9vw, 112px) / 1.0 / 800 | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.18em / mono / uppercase | label |

## Layout Rules

- 每個 section 之間插入一條跑馬燈帶（高度 `clamp(80px, 14vw, 200px)`、黑白交替）
- 跑馬燈技術：兩個相同內容的 `<div>` 並排在 flex 容器中，總寬度 200%，整個容器 `animation: marquee-loop 30s linear infinite`
- 滾動時改 CSS 變數 `--marquee-speed-multiplier`，影響 animation-duration

各區塊構圖：
- **hero**：白底 + 巨大 display 標題 + 跑馬燈條（slogan 重複）
- **marquee 1 (between hero and about)**：黑底白字「ISLAND RESONANCE · 2026.08.21–23 · TAITUNG · DULAN BAY」重複
- **about**：白底，4 stat 巨型數字
- **marquee 2**：白底黑字 12 樂團名重複
- **lineup**：12 樂團卡片（black bordered）
- **schedule**：3 day 時程
- **marquee 3**：黑底白字「TICKETS NOW ON SALE · TICKETS NOW ON SALE」
- **venues**：3 舞台
- **tickets**：3 票卡
- **travel**：3 步驟
- **marquee 4**：黑底紅字贊助商名
- **sponsors**：贊助商
- **footer-faq**：FAQ

## Motion Specification

- **動態效果類別**：scroll-driven / loop
- **觸發機制**：CSS @keyframes（基礎 loop）+ scroll event 更新 `--marquee-speed-multiplier` CSS 變數
- **性能要求**：所有 marquee 用 `transform: translateX()`；用 `will-change: transform`
- **觸發頻率**：scroll handler rAF 節流；計算 velocity 用上一幀差分

## Accessibility (Reduced Motion)

- reduced 模式：取消 marquee 動畫；將跑馬燈內容轉為靜態切割行（用 overflow: hidden + 短文字）
- 確保跑馬燈不會干擾正常閱讀（每條 marquee 區段標 `aria-hidden="true"`）

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="scroll-driven">`。

## Required Images

無圖。

## Reference Snippet

Marquee 條：
```html
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span class="marquee-item">ISLAND RESONANCE 2026 · 在島嶼盡頭聽見彼此的迴聲 ·</span>
    <span class="marquee-item">ISLAND RESONANCE 2026 · 在島嶼盡頭聽見彼此的迴聲 ·</span>
  </div>
</div>
```

```css
.marquee {
  overflow: hidden;
  background: var(--m-bg-dark);
  color: var(--m-fg-inverse);
  padding: clamp(20px, 3vw, 36px) 0;
  border-block: 2px solid var(--m-fg);
}
.marquee-track {
  display: flex;
  gap: 40px;
  white-space: nowrap;
  width: max-content;
  animation: marquee-loop calc(30s / var(--marquee-speed-multiplier, 1)) linear infinite;
  will-change: transform;
}
.marquee-item {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 200px);
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 0.95;
}
@keyframes marquee-loop {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; transform: translateX(-25%); }
}
```

```javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let lastY = window.scrollY;
  let velocity = 0;
  let ticking = false;
  function tick() {
    const dy = window.scrollY - lastY;
    velocity = velocity * 0.85 + dy * 0.15;
    lastY = window.scrollY;
    const speed = 1 + Math.min(3, Math.abs(velocity) * 0.04);
    document.documentElement.style.setProperty('--marquee-speed-multiplier', speed.toFixed(2));
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }, { passive: true });
  // 衰減：滾動停止時逐漸回到 1x
  setInterval(() => {
    velocity *= 0.9;
  }, 100);
})();
```
