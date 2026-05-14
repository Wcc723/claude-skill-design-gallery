---
name: motion-scroll-snap-acts
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with CSS scroll-snap fullscreen acts (每章 100vh + 強制吸附切換). Triggers on scroll snap、全屏切換、fullscreen acts、cinematic scroll、chapter-by-chapter.
user-invocable: true
---

# 全屏章節 Scroll Snap Acts — 島嶼共鳴 2026

## Style Philosophy

把整個網頁切成 9 個「幕」，每幕佔滿一整個視窗，透過 CSS `scroll-snap-type` 強制吸附——滑鼠滾一下就跳到下一幕，像看 keynote 或電影章節。每幕擁有完全不同的氛圍與大字標題，配合 IntersectionObserver 觸發進場動畫。視覺風格偏電影感：深色背景 + 大字 + 強烈對比配色，每幕一個焦點視覺。

三個視覺辨識特徵：
1. **CSS `scroll-snap-type: y mandatory`** 強制吸附式切換
2. **每章獨立 100vh 全屏**，無滾動阻礙
3. **進場大字 + 章節編號（01-09）** 戲劇感引導

## Design Tokens

```css
:root {
  --a-bg-base: #0f1729;
  --a-bg-1: #0f1729;   /* 深夜藍 */
  --a-bg-2: #4c1d95;   /* 紫 */
  --a-bg-3: #be123c;   /* 玫瑰紅 */
  --a-bg-4: #047857;   /* 翠綠 */
  --a-bg-5: #ea580c;   /* 火橘 */
  --a-bg-6: #0e7490;   /* 青藍 */
  --a-bg-7: #a16207;   /* 琥珀棕 */
  --a-bg-8: #1e293b;   /* 石板 */
  --a-bg-9: #18181b;   /* 純黑近 */

  --a-fg: #fafafa;
  --a-fg-soft: #d4d4d8;
  --a-accent: #fbbf24;

  --color-bg: var(--a-bg-base);
  --color-fg: var(--a-fg);
  --color-accent: var(--a-accent);

  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 10vw, 144px) / 1.0 / 800 / -0.03em | 每章大標 |
| h1 | clamp(28px, 4vw, 44px) / 1.2 / 700 | 子標 |
| h2 | 20px / 1.3 / 600 | 卡標 |
| body | 17px / 1.7 / 400 | 段落（大字便於遠看） |
| caption | 12px / 1.4 / 700 / 0.18em / mono / uppercase | 章節編號 ACT 01 |

## Layout Rules

- `<html>` 設 `scroll-snap-type: y mandatory; scroll-behavior: smooth; height: 100vh; overflow-y: scroll;`
- 每個 section 設 `scroll-snap-align: start; min-height: 100vh; display: grid; place-items: center;`
- 每章內容置中、極大字、極寬鬆 leading
- 章節間切換時內部元素 transform 由 `translateY(40px), opacity 0` → `0, 1`
- 右側固定一個垂直章節指示器（9 個圓點，目前所在章節點亮）

各區塊（依序）：
- **hero (ACT 01 / 深夜藍)**：大字「島嶼共鳴 2026」+ slogan
- **about (ACT 02 / 紫)**：浪打文化簡介 + 4 stat 數字
- **lineup (ACT 03 / 玫瑰紅)**：12 樂團 grid
- **schedule (ACT 04 / 翠綠)**：三日時程
- **venues (ACT 05 / 火橘)**：三舞台
- **tickets (ACT 06 / 青藍)**：三票價
- **travel (ACT 07 / 琥珀棕)**：三步驟
- **sponsors (ACT 08 / 石板)**：贊助商
- **footer-faq (ACT 09 / 黑)**：FAQ + footer

## Motion Specification

- **動態效果類別**：scroll-driven
- **觸發機制**：CSS `scroll-snap` + IntersectionObserver（threshold 0.5 觸發進場動畫）+ scroll event 更新右側 dot indicator
- **性能要求**：snap 由 CSS 處理（GPU friendly），進場動畫只動 transform + opacity
- **觸發頻率**：IntersectionObserver 自然節流；可加 rAF 處理 dot indicator

## Accessibility (Reduced Motion)

- reduced 模式：保留 scroll-snap（無傷可用性），但取消進場動畫（直接 opacity 1）；smooth scroll 也改 auto
- 確保每章內容預設可見（opacity 1 fallback）

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="scroll-driven">`。

## Required Images

可選 1-2 張 hero 圖。建議純色 + 大字即可達到電影感。

## Reference Snippet

Scroll-snap 基礎：
```css
html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: scroll;
}
body { margin: 0; }
section {
  scroll-snap-align: start;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 80px 40px;
  position: relative;
  color: var(--a-fg);
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; scroll-snap-type: none; }
}
```

章節指示器：
```html
<nav class="dot-indicator" aria-label="章節導覽">
  <a href="#act-01"><span></span></a>
  ...
</nav>
```

```css
.dot-indicator {
  position: fixed; right: 24px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 14px; z-index: 100;
}
.dot-indicator a {
  width: 12px; height: 12px; border-radius: 50%;
  background: rgba(255,255,255,0.25); transition: all 0.3s;
}
.dot-indicator a.active { background: var(--a-accent); transform: scale(1.4); }
```

進場動畫：
```css
.reveal { opacity: 1; transform: translateY(0); }
.js-on .reveal:not(.in) { opacity: 0; transform: translateY(40px); }
.reveal { transition: opacity 0.6s, transform 0.6s cubic-bezier(0.22,1,0.36,1); }
```

```javascript
(function () {
  document.documentElement.classList.add('js-on');
  const dots = [...document.querySelectorAll('.dot-indicator a')];
  const sections = [...document.querySelectorAll('section[data-block]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }), { threshold: 0.3 });
    sections.forEach((s) => io.observe(s));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }
  // dot indicator
  const navIo = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      const i = sections.indexOf(e.target);
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }
  }), { threshold: 0.5 });
  sections.forEach((s) => navIo.observe(s));
})();
```
