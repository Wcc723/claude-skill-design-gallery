---
name: motion-counter-burst
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with animated number counters that count up from 0 to target value when entering viewport. Triggers on counter animation、數字計數、count up、odometer effect.
user-invocable: true
---

# 數字爆裂計數 Counter Burst — 島嶼共鳴 2026

## Style Philosophy

把所有關鍵數字——屆數、樂團組數、人次、票價——都變成**進入視窗時的動畫展示**：從 0 跳動到目標值，伴隨輕微 scale 與 colour shift，給網頁一種「資訊在你眼前生成」的能量感。靈感來自 Stripe、Linear、Vercel 統計頁、Apple 規格頁。視覺風格：明亮乾淨 + 巨型數字 + 大量留白。

三個視覺辨識特徵：
1. **巨型數字字體**（80-200px）作為主要視覺
2. **進入視窗時 0 → target 計數動畫**（requestAnimationFrame easing）
3. **數字旁的小單位字 / 描述**用對比小字

## Design Tokens

```css
:root {
  --c-bg: #fdfcfb;
  --c-bg-card: #ffffff;
  --c-fg: #18181b;
  --c-fg-soft: #52525b;
  --c-fg-mute: #a1a1aa;
  --c-accent: #dc2626;        /* 鮮紅 — 計數高亮 */
  --c-accent-2: #2563eb;       /* 藍 — 副計數 */
  --c-success: #059669;        /* 綠 — 完成色 */
  --c-line: #e4e4e7;

  --color-bg: var(--c-bg);
  --color-fg: var(--c-fg);
  --color-accent: var(--c-accent);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'Inter', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| numeral | clamp(80px, 14vw, 200px) / 0.95 / 800 / -0.04em / tabular-nums | 巨型數字 |
| display | clamp(40px, 6vw, 72px) / 1.1 / 700 | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | 單位描述 |

## Layout Rules

- 容器 max-width 1180px
- 數字用 `<span class="counter" data-to="25000">0</span>`
- 大量留白，每個數字塊獨立行
- `font-variant-numeric: tabular-nums` 保證寬度穩定不跳動

各區塊構圖：
- **hero**：display 大字標題 + 4 個 inline counter chip（屆數 6 / 三日 / 12 樂團 / 25000 人次）
- **about**：4 個巨型數字 grid（每個獨立卡 + counter 動畫 + 描述）
- **lineup**：12 樂團列表，每組旁顯示 hover 觸發的「演出時間」counter
- **schedule**：3 day timetable，時段以 mono 數字呈現（不計數）
- **venues**：3 舞台，容量（8000 / 3000 / 800）用大 counter
- **tickets**：3 票價巨型 counter（2200 / 5400 / 12800）+ 早鳥優惠 9 折
- **travel**：3 步驟，每步驟前有計數編號（不計數）
- **sponsors**：分級 list
- **footer-faq**：FAQ + counter「7 條 FAQ」「12 樂團」總結

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver + requestAnimationFrame 計數動畫
- **性能要求**：用 `textContent` 寫入，避免 reflow；數字保持 tabular-nums 避免位移
- **觸發頻率**：每次計數動畫 ~1200ms，只觸發一次

## Accessibility (Reduced Motion)

- reduced 模式：直接顯示最終數字、不動畫
- 用 aria-label 標明完整數字以利螢幕閱讀器

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="reveal">`。

## Required Images

無圖，純文字動畫。

## Reference Snippet

```html
<div class="stat">
  <span class="counter" data-to="25000" aria-label="25000 人次">0</span>
  <span class="unit">人次</span>
</div>
```

```css
.counter {
  font-family: var(--font-display);
  font-size: clamp(80px, 14vw, 200px);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: var(--c-accent);
  line-height: 0.95;
  letter-spacing: -0.04em;
  display: inline-block;
}
.counter.done {
  animation: pop 0.5s ease-out;
}
@keyframes pop {
  0% { transform: scale(1); }
  40% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
.stat .unit {
  font-size: 14px;
  letter-spacing: 0.12em;
  color: var(--c-fg-mute);
  text-transform: uppercase;
  margin-left: 8px;
}
@media (prefers-reduced-motion: reduce) {
  .counter.done { animation: none; }
}
```

```javascript
(function () {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('.counter[data-to]');
  if (reducedMotion) {
    counters.forEach((el) => {
      el.textContent = Number(el.dataset.to).toLocaleString('en');
    });
    return;
  }
  function animateOne(el) {
    const to = Number(el.dataset.to);
    const duration = Number(el.dataset.duration || 1400);
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased).toLocaleString('en');
      if (p < 1) requestAnimationFrame(step);
      else el.classList.add('done');
    }
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { animateOne(e.target); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  counters.forEach((el) => io.observe(el));
})();
```
