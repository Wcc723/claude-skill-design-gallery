---
name: motion-scroll-progress
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with a top scroll progress bar and side chapter indicator. Triggers on scroll progress、進度條、reading progress、chapter indicator.
user-invocable: true
---

# 滾動進度 Scroll Progress — 島嶼共鳴 2026

## Style Philosophy

長文／長頁面的閱讀器標配——**頂部 progress bar** 隨滾動填滿、**側邊章節指示器**標示目前位置與全部章節。這個風格的視覺核心是**清晰、輕量、不干擾內容**，靈感來自 Medium、紐約客、Notion 文檔。文字優先、淡色節點。

三個視覺辨識特徵：
1. **頂端 1-2px progress bar**，從左到右隨滾動填滿，accent 色
2. **側邊垂直 mini map**，9 個章節點 + 當前章節高亮 + 章節名 hover 顯示
3. **內容偏文章感**：寬鬆 line-height、適中 max-width、淺色背景

## Design Tokens

```css
:root {
  --sp-bg: #fafafa;
  --sp-card: #ffffff;
  --sp-fg: #1a1a1a;
  --sp-fg-soft: #555555;
  --sp-fg-mute: #999999;
  --sp-line: #e5e5e5;
  --sp-accent: #ea580c;       /* 進度橙 */
  --sp-accent-soft: rgba(234, 88, 12, 0.15);

  --color-bg: var(--sp-bg);
  --color-fg: var(--sp-fg);
  --color-accent: var(--sp-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
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
| body | 17px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | 章節編號 |

## Layout Rules

- 主容器 max-width 880px 置中（文章感）
- 頂部 progress bar 用 `position: fixed; top: 0; left: 0; height: 3px;` 配合 `transform: scaleX(progress)`
- 側邊章節 mini map `position: fixed; left: 24px; top: 50%`，9 個直線連節點
- 每章節進入視窗時，mini map 對應節點亮起

各區塊構圖：
- **hero**：滿版淺色 + 大字 + 副標 + 兩個 CTA（橙色 pill）
- **about**：兩欄圖文 + 4 stat 數字（小尺寸但極粗）
- **lineup**：12 樂團淺色卡 3 欄、headliner 用橙色細邊
- **schedule**：時刻表式 3 day list
- **venues**：3 段落 + 容量數字
- **tickets**：3 張票價卡，VIP 中央橙底白字
- **travel**：3 步驟編號 list
- **sponsors**：分級列
- **footer-faq**：`<details>` accordion

## Motion Specification

- **動態效果類別**：scroll-driven
- **觸發機制**：scroll event + rAF，更新 `--scroll-progress` CSS 變數
- **性能要求**：只動 `transform: scaleX()`、不重排
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：progress bar 仍可正常顯示位置（無動畫意涵）；hover 章節名 tooltip 取消 fade，改瞬間出現
- mini map 章節點仍 functional（點擊跳轉）

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="scroll-driven">`。

## Required Images

少量或無圖；以文字為主。

## Reference Snippet

Progress bar：
```html
<div class="progress-bar" aria-hidden="true"><span class="fill"></span></div>
```

```css
.progress-bar {
  position: fixed; top: 0; left: 0; right: 0; height: 3px;
  background: var(--sp-line);
  z-index: 1000;
}
.progress-bar .fill {
  display: block; height: 100%;
  background: var(--sp-accent);
  transform-origin: left center;
  transform: scaleX(var(--scroll-progress, 0));
  transition: transform 0.05s linear;
}
```

```javascript
(function () {
  const fill = document.querySelector('.progress-bar .fill');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    document.documentElement.style.setProperty('--scroll-progress', p);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();
```

側邊 mini map：
```html
<nav class="mini-map" aria-label="章節導覽">
  <a href="#hero"><span class="dot"></span><span class="label">活動首頁</span></a>
  ...
</nav>
```

```css
.mini-map {
  position: fixed; left: 24px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: 12px; z-index: 100;
}
.mini-map a {
  display: flex; align-items: center; gap: 10px;
  color: var(--sp-fg-mute); text-decoration: none;
  font-size: 12px; letter-spacing: 0.08em;
}
.mini-map .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--sp-fg-mute); transition: all 0.2s; }
.mini-map .label { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; }
.mini-map a:hover .label { opacity: 1; transform: translateX(0); }
.mini-map a.active .dot { background: var(--sp-accent); transform: scale(1.6); }
.mini-map a.active { color: var(--sp-fg); }
```
