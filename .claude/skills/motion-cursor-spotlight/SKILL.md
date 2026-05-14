---
name: motion-cursor-spotlight
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with a radial spotlight that follows the cursor on hero and key sections. Triggers on cursor follow、spotlight、滑鼠光暈、mouse-tracking radial gradient.
user-invocable: true
---

# 滑鼠光暈 Cursor Spotlight — 島嶼共鳴 2026

## Style Philosophy

整個 hero 是深色背景，**有一束光跟著滑鼠走**——像演唱會的 followspot 追著樂手移動。技術上是 radial-gradient 中心點隨 mousemove 更新 CSS 變數。視覺風格電影感、暗黑、戲劇化。每個 section 進入時 spotlight 會掃過該區段一次。

三個視覺辨識特徵：
1. **滑鼠位置驅動 radial-gradient 中心點**（`--mx, --my` CSS 變數）
2. **暗背景** + 亮色文字（白字 / 米色）+ accent 強光顏色
3. **CTA 按鈕也有 spotlight hover 效果**（按鈕內部的 radial）

## Design Tokens

```css
:root {
  --sp-bg: #0a0a0a;
  --sp-bg-2: #18181b;
  --sp-bg-3: #27272a;
  --sp-fg: #fafafa;
  --sp-fg-soft: #d4d4d8;
  --sp-fg-mute: #71717a;
  --sp-light: rgba(251, 191, 36, 0.35);   /* spotlight 顏色 */
  --sp-light-edge: rgba(251, 191, 36, 0.05);
  --sp-accent: #fbbf24;
  --sp-line: rgba(255, 255, 255, 0.08);

  --color-bg: var(--sp-bg);
  --color-fg: var(--sp-fg);
  --color-accent: var(--sp-accent);

  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}

body {
  background: var(--sp-bg);
  color: var(--sp-fg);
}

.spotlight {
  position: relative;
  isolation: isolate;
}
.spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mx, 50%) var(--my, 50%),
    var(--sp-light) 0%,
    var(--sp-light-edge) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  transition: background 0.06s linear;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 700 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- `<body>` 套 `.spotlight` class，整頁 spotlight 跟著滑鼠
- 內容用 `position: relative; z-index: 1` 放在 spotlight 之上
- 每個 CTA 按鈕內部也有獨立 spotlight effect

各區塊構圖：
- **hero**：暗背景 + spotlight 跟滑鼠 + 中央 display 標題 + 副標 + 兩個 spotlight 按鈕
- 其他區段標準排版，配深色卡片 + amber accent

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove + rAF 節流，更新 `--mx`、`--my` CSS 變數
- **性能要求**：CSS 變數變更觸發 background re-paint，極輕量
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：spotlight 固定在中心、不跟滑鼠走（CSS 變數預設值）
- 對 keyboard 使用者：CTA 按鈕的 spotlight 也可在 :focus-visible 觸發

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="pointer">`。

## Required Images

無圖。

## Reference Snippet

```html
<body class="spotlight" data-motion-type="pointer">
  ...
</body>
```

```javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let mx = 0.5, my = 0.5, ticking = false;
  function update() {
    document.body.style.setProperty('--mx', (mx * 100) + '%');
    document.body.style.setProperty('--my', (my * 100) + '%');
    ticking = false;
  }
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX / window.innerWidth;
    my = e.clientY / window.innerHeight;
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();
```

按鈕 spotlight：
```css
.btn-spot {
  position: relative;
  overflow: hidden;
  background: var(--sp-bg-2);
  border: 1px solid var(--sp-accent);
  color: var(--sp-fg);
  padding: 14px 28px;
  border-radius: var(--radius-pill);
}
.btn-spot::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(
    200px circle at var(--bx, 50%) var(--by, 50%),
    rgba(251, 191, 36, 0.4) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.2s;
}
.btn-spot:hover::before, .btn-spot:focus-visible::before { opacity: 1; }
```
