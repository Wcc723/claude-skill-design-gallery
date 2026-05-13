---
name: motion-sticky-stack
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with sticky-pinned stacking sections, in the style of Apple AirPods Pro / Stripe product pages. Triggers on sticky stack、釘住堆疊、Apple-style scrolling、章節疊上、scroll stack.
user-invocable: true
---

# Sticky 堆疊章節 Sticky Stack — 島嶼共鳴 2026

## Style Philosophy

致敬 2020 年代 Apple、Stripe、Linear 等產品頁的「章節釘住、後章疊上」滾動敘事：每個區塊用 `position: sticky` 釘住整個視窗，下一個區塊從底部滑上來疊住前章。這給人「層層展開的故事卡」感受。視覺以**對比強烈的章節輪換配色**為核心（深藍、暖橘、米白、墨綠交替），每章內部用「居中對齊大字 + 1-2 個焦點視覺」突顯。

三個視覺辨識特徵：
1. **整段 `position: sticky` + `height: 100vh`** 章節
2. **每章獨立大色塊背景**，章節切換時整面變色
3. **章節進入時內部元素 scale/translate 動畫**（IntersectionObserver）

## Design Tokens

```css
:root {
  --s-bg-a: #0c1233;            /* 深藍夜 */
  --s-bg-b: #f4a261;            /* 暖橘 */
  --s-bg-c: #f8f1e4;            /* 米白 */
  --s-bg-d: #1f4d3a;            /* 墨綠 */
  --s-bg-e: #e76f51;            /* 磚紅 */

  --s-fg-light: #f8f1e4;
  --s-fg-dark: #0c1233;
  --s-accent: #fbbf24;

  --color-bg: var(--s-bg-a);
  --color-fg: var(--s-fg-light);
  --color-accent: var(--s-accent);

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
| display | clamp(64px, 10vw, 128px) / 1.0 / 800 / -0.03em | 各章節大標 |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 700 | 子標 |
| h2 | 22px / 1.3 / 600 | 卡標 |
| body | 18px / 1.7 / 400 | 段落（特意大字） |
| caption | 12px / 1.4 / 600 / 0.12em / uppercase | 章節編號 |

## Layout Rules

- 每個 `<section>` 設 `position: sticky; top: 0; min-height: 100vh; z-index: <逐章遞增>` 形成堆疊
- 章節主體置中：用 `display: grid; place-items: center`
- 章節進入視窗時內部元素 transform 由 `translateY(30px) scale(0.95)` 變為 `translateY(0) scale(1)`、opacity 0 → 1
- 第 9 章（footer-faq）不 sticky，作為堆疊結尾

各區塊構圖（依序疊上）：
- **hero**：z-index 1，深藍夜底，大字「島嶼共鳴 2026」+ 副標 + 兩個 CTA
- **about**：z-index 2，米白底深字，4 個 stat tiles 在中央
- **lineup**：z-index 3，深藍底，12 樂團兩欄 list（headliner 較大）
- **schedule**：z-index 4，磚紅底，3 day 時程橫排
- **venues**：z-index 5，墨綠底，3 個舞台垂直 list
- **tickets**：z-index 6，暖橘底，3 張票卡橫排
- **travel**：z-index 7，米白底，3 步驟 list
- **sponsors**：z-index 8，深藍底，title 大、其他小
- **footer-faq**：z-index 9（不 sticky），結束堆疊

## Motion Specification

- **動態效果類別**：parallax（sticky 堆疊屬視差變體）
- **觸發機制**：CSS `position: sticky` + IntersectionObserver（觸發進入動畫）
- **性能要求**：sticky 本身 GPU friendly；進入動畫只動 transform + opacity
- **觸發頻率**：IntersectionObserver threshold 0.4，避免太敏感頻繁切換

## Accessibility (Reduced Motion)

- reduced 模式：保留 sticky 堆疊效果（不影響閱讀），但取消進入動畫（即所有元素直接 opacity:1 + 不 translate）
- 內容預設 opacity 1（fallback）；JS 進入後才設 0 → 1 的轉場

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="parallax">`。

## Required Images

`assets-manifest.json` 中 0-3 張可選圖（多用純色塊 + 大字即可）。

## Reference Snippet

Sticky 堆疊基礎：
```css
body { background: var(--s-bg-a); }
section {
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: var(--s-fg-light);
  padding: 80px 40px;
  isolation: isolate;
}
section[data-block="about"] { background: var(--s-bg-c); color: var(--s-fg-dark); z-index: 2; }
section[data-block="lineup"] { background: var(--s-bg-a); z-index: 3; }
section[data-block="schedule"] { background: var(--s-bg-e); z-index: 4; }
section[data-block="venues"] { background: var(--s-bg-d); z-index: 5; }
section[data-block="tickets"] { background: var(--s-bg-b); color: var(--s-fg-dark); z-index: 6; }
section[data-block="travel"] { background: var(--s-bg-c); color: var(--s-fg-dark); z-index: 7; }
section[data-block="sponsors"] { background: var(--s-bg-a); z-index: 8; }
section[data-block="footer-faq"] {
  position: relative; /* 不 sticky 結束堆疊 */
  background: var(--s-bg-d);
  z-index: 9;
}
```

進入動畫：
```css
.reveal {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.in {
  opacity: 1;
}
.js-on .reveal:not(.in) {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
}
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.in { opacity: 1 !important; transform: none !important; }
}
```

```javascript
(function () {
  document.documentElement.classList.add('js-on');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
    { threshold: 0.4 }
  );
  targets.forEach((t) => io.observe(t));
})();
```
