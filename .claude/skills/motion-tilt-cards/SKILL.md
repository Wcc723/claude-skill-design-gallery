---
name: motion-tilt-cards
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where lineup cards 3D-tilt following mouse position. Triggers on tilt cards、3D tilt、滑鼠傾斜、card perspective、tilt.js style.
user-invocable: true
---

# 3D 傾斜卡片 Tilt Cards — 島嶼共鳴 2026

## Style Philosophy

12 張樂團卡的卡片**依滑鼠在卡內位置 3D 傾斜**——像捧著一張會反光的相片。技術上用 `mousemove` 計算滑鼠相對卡片中心的位移、轉成 `rotateX` `rotateY`。視覺風格偏精緻 / 質感：深色背景、卡片有微妙 spec gloss（漸層 + box-shadow）。其他區塊用標準排版。

三個視覺辨識特徵：
1. **卡片 3D 傾斜**（perspective + rotateX/Y）跟滑鼠
2. **卡片 hover 時內部 highlight**（漸層光斑跟滑鼠）
3. **暗背景 + 質感卡片**（細邊框 + 微妙陰影）

## Design Tokens

```css
:root {
  --t-bg: #18181b;
  --t-bg-2: #27272a;
  --t-card: #1f1f23;
  --t-card-edge: rgba(255, 255, 255, 0.12);
  --t-fg: #fafafa;
  --t-fg-soft: #d4d4d8;
  --t-fg-mute: #a1a1aa;
  --t-accent: #f97316;
  --t-accent-soft: rgba(249, 115, 22, 0.2);

  --color-bg: var(--t-bg);
  --color-fg: var(--t-fg);
  --color-accent: var(--t-accent);

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 800 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 700 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- `<body>` 暗背景
- 卡片用 `transform-style: preserve-3d; transform: perspective(800px) rotateX(?) rotateY(?)`
- 容器（卡片包外層）設 `perspective: 1000px` 讓 3D 更明顯
- mousemove 計算卡內相對位置，更新卡片 CSS transform

各區塊構圖：
- 大部分區段標準排版
- **lineup**：12 卡片 grid（headliner 較大），每卡可 tilt
- **tickets**：3 票價卡也可 tilt
- **venues**：3 舞台卡也可 tilt
- 其他區段卡片不 tilt（避免過度）

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove on each card + rAF
- **性能要求**：transform 3D GPU 加速；用 `will-change: transform`
- **觸發頻率**：rAF 節流

## Accessibility (Reduced Motion)

- reduced 模式：卡片不 tilt（CSS transform 不變）；hover 仍有 outline 變化

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="pointer">`。

## Required Images

無圖。

## Reference Snippet

```css
.tilt {
  perspective: 1000px;
}
.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.1s linear;
  will-change: transform;
  position: relative;
}
.tilt-card::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(
    300px circle at var(--cx, 50%) var(--cy, 50%),
    rgba(255, 255, 255, 0.12) 0%,
    transparent 60%
  );
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.tilt-card:hover::before { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .tilt-card { transform: none !important; }
}
```

```javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cards = document.querySelectorAll('.tilt-card');
  const MAX_DEG = 8;
  cards.forEach((card) => {
    let raf = 0;
    function update(e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0-1
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * MAX_DEG;
      const ry = (x - 0.5) * MAX_DEG;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      card.style.setProperty('--cx', (x * 100) + '%');
      card.style.setProperty('--cy', (y * 100) + '%');
    }
    card.addEventListener('mousemove', (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => update(e));
    }, { passive: true });
    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
    });
  });
})();
```
