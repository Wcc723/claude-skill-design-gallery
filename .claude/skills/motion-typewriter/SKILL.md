---
name: motion-typewriter
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with typewriter effect on hero and paragraph reveal. Triggers on typewriter、打字機效果、char-by-char reveal、cursor blink.
user-invocable: true
---

# 打字機 Typewriter — 島嶼共鳴 2026

## Style Philosophy

Hero 標題以**打字機的節奏一字一字浮現**，下方副標、CTA、後續區段段落依序「打出來」。這個風格的靈感來自老式打字機、終端機、Stripe 早期 hero、Vercel 部落格頁。視覺風格偏文學感：明朝體標題、深色背景（讓 cursor 閃爍更明顯）、適度間距。

三個視覺辨識特徵：
1. **字元逐個出現 + 閃爍 cursor**（CSS animation：`steps()` 製造打字節奏）
2. **段落 reveal**（每段在進入視窗時開始打字）
3. **暗色背景 + 高對比文字**（讓 cursor 閃爍更銳利）

## Design Tokens

```css
:root {
  --t-bg: #0a0a0a;
  --t-bg-2: #18181b;
  --t-fg: #fafaf9;
  --t-fg-soft: #d4d4d8;
  --t-fg-mute: #71717a;
  --t-accent: #facc15;          /* 打字機機械黃 */
  --t-cursor: #facc15;
  --t-line: rgba(255, 255, 255, 0.1);

  --color-bg: var(--t-bg);
  --color-fg: var(--t-fg);
  --color-accent: var(--t-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'Georgia', 'Times New Roman', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.1 / 700 / -0.02em / serif | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 / serif | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / mono / uppercase | label |

## Layout Rules

- 暗色背景、寬鬆 max-width 1080px
- 每個 reveal 文字節點包 `<span class="typewriter" data-text="...">` 由 JS 處理
- cursor 用 `::after` 偽元素 + CSS keyframes 閃爍
- 段落出現的速率：~30-50 字／秒（每字 20-30ms）

各區塊構圖：
- **hero**：display 標題一字一字打出來，cursor 閃爍；下方副標延遲後打字
- **about**：左 4 stat 數字（打字節奏 0→target）+ 右段落「打字機體驗」
- **lineup**：12 樂團名以連續打字方式列出（headliner 用黃色強調 + 慢速打字）
- **schedule**：3 day 時程表，每個時段一行 mono 風格打字
- **venues**：3 段，每段段落打字
- **tickets**：3 張票卡，價格數字遞增打出
- **travel**：3 步驟段落
- **sponsors**：list 列名
- **footer-faq**：問題段落打字

## Motion Specification

- **動態效果類別**：reveal
- **觸發機制**：IntersectionObserver + setInterval / requestAnimationFrame 逐字 append
- **性能要求**：用 `textContent +=` 而非 innerHTML；元素已渲染好、JS 只控制可見字數
- **觸發頻率**：每字 20-30ms

## Accessibility (Reduced Motion)

- reduced 模式：直接顯示完整文字、cursor 不閃爍
- 對螢幕閱讀器：data-text 完整內容應在 DOM（aria-label）即使 JS 動態 typing

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="reveal">`。

## Required Images

可選 1 張 hero 配圖；以文字節奏為主。

## Reference Snippet

打字機 cursor：
```css
.typewriter {
  display: inline-block;
  white-space: pre-wrap;
}
.typewriter::after {
  content: '▎';
  color: var(--t-cursor);
  animation: blink 1s steps(2) infinite;
  margin-left: 2px;
}
.typewriter.done::after { animation-delay: 0s; opacity: 0; }
@keyframes blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .typewriter::after { animation: none; opacity: 0.5; }
}
```

```javascript
(function () {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.typewriter[data-text]');
  if (reducedMotion) {
    targets.forEach((el) => { el.textContent = el.dataset.text; el.classList.add('done'); });
    return;
  }
  // 設 aria-label 給 screen reader
  targets.forEach((el) => {
    el.setAttribute('aria-label', el.dataset.text);
    el.textContent = '';
  });
  const speed = 28; // ms per char
  function typeOne(el) {
    const text = el.dataset.text;
    let i = 0;
    const id = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(id); el.classList.add('done'); }
    }, speed);
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { typeOne(e.target); io.unobserve(e.target); }
  }), { threshold: 0.4 });
  targets.forEach((el) => io.observe(el));
})();
```

數字計數版（用在 about）：
```javascript
function countUp(el, to, duration = 1200) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min(1, (ts - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased).toLocaleString('en');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
```
