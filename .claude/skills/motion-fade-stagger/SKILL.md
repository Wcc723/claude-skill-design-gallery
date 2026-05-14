---
name: motion-fade-stagger
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with stagger fade-in reveal animations triggered by IntersectionObserver. Triggers on stagger animation、wave reveal、入場錯落、scroll trigger fade.
user-invocable: true
---

# 錯落淡入 Fade Stagger — 島嶼共鳴 2026

## Style Philosophy

當區段進入視窗時，內部的卡片、列表項、數字、文字會**依序以毫秒級錯落 fade + slide-up** 出現。這個風格的特徵是「波浪」感——每個元素之間有 60-100ms 的延遲，整體像一陣海風吹過。視覺風格採用淺色背景、寬鬆 grid、優雅 sans-serif，焦點完全在動畫節奏。

三個視覺辨識特徵：
1. **每個 reveal target 從 `opacity:0 + translateY(24px)` 進入到 `opacity:1 + translateY(0)`**
2. **stagger delay**：用 `transition-delay: calc(var(--i, 0) * 80ms)` 達成波浪
3. **IntersectionObserver** 觸發 `.in` class 切換

## Design Tokens

```css
:root {
  --f-bg: #f5f5f4;
  --f-card: #ffffff;
  --f-fg: #292524;
  --f-fg-soft: #57534e;
  --f-fg-mute: #a8a29e;
  --f-accent: #0891b2;       /* 海洋藍 */
  --f-accent-soft: rgba(8, 145, 178, 0.1);
  --f-line: #e7e5e4;

  --color-bg: var(--f-bg);
  --color-fg: var(--f-fg);
  --color-accent: var(--f-accent);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.1 / 700 / -0.02em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- 主背景米白、卡片白底、海洋藍 accent
- 每個區塊容器 max-width 1180px
- 卡片有微妙陰影，hover 微微抬起
- 每個 reveal 元素加 inline `style="--i: <index>"` 控制延遲

各區塊構圖：
- **hero**：display 標題 + 副標 + chips + 2 CTA，整組 stagger 入場
- **about**：4 stat tiles，依序 0-3 stagger
- **lineup**：12 樂團卡片 grid，依 row-major 順序 stagger
- **schedule**：3 day timetable，每 day 內時段 stagger
- **venues**：3 卡 stagger
- **tickets**：3 卡 stagger
- **travel**：3 步驟 stagger
- **sponsors**：分級 + stagger
- **footer-faq**：FAQ accordion，每條 stagger 0-6

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver（threshold 0.15）+ CSS transition
- **性能要求**：只用 transform + opacity
- **觸發頻率**：IntersectionObserver 自然節流；observe 多個 target

## Accessibility (Reduced Motion)

- reduced 模式：所有 `.reveal` 預設 opacity 1, transform none；transition duration 0
- 確保即使 IntersectionObserver 失敗，內容仍可見（CSS fallback：未加 `.js-on` class 時保持可見狀態）

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="reveal">`。

## Required Images

可選少量；以動畫為主。

## Reference Snippet

Stagger 機制：
```css
.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 80ms),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i, 0) * 80ms);
}
.js-on .reveal:not(.in) {
  opacity: 0;
  transform: translateY(24px);
}
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal:not(.in) {
    opacity: 1 !important;
    transform: none !important;
    transition: none;
  }
}
```

```html
<div class="grid">
  <article class="reveal" style="--i:0">...</article>
  <article class="reveal" style="--i:1">...</article>
  <article class="reveal" style="--i:2">...</article>
</div>
```

```javascript
(function () {
  document.documentElement.classList.add('js-on');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);  // 只觸發一次
      }
    }),
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
```
