---
name: motion-floating-orbs
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with continuously floating geometric orbs in background. Triggers on floating orbs、漂浮幾何、ambient shapes、loop animation.
user-invocable: true
---

# 漂浮幾何球 Floating Orbs — 島嶼共鳴 2026

## Style Philosophy

背景上有 8-12 個彩色幾何體（圓、菱、三角、星）以**緩慢上下漂浮**循環，每個球有獨立節奏、不同延遲，整面像漂浮在液體中的玩具。視覺風格俏皮、輕盈，適合年輕族群。前景內容使用清爽 sans-serif、白底卡片，保持讀感。

三個視覺辨識特徵：
1. **8-12 個絕對定位幾何球**散布全頁，各自獨立 CSS keyframes
2. **柔和淺粉、薄荷、薰衣草、奶油色**幾何體（取自 isometric-3d 配色）
3. **白底 + 大量留白**，前景清爽不干擾

## Design Tokens

```css
:root {
  --o-bg: #fefaf6;
  --o-card: #ffffff;
  --o-fg: #2d2a26;
  --o-fg-soft: #6b6760;
  --o-fg-mute: #a89c8e;
  --o-orb-1: #ffafd2;       /* 淺粉 */
  --o-orb-2: #a8e6cf;       /* 薄荷 */
  --o-orb-3: #c8b6ff;       /* 薰衣草 */
  --o-orb-4: #ffd6a5;       /* 奶油 */
  --o-orb-5: #b4e7ff;       /* 天藍 */
  --o-orb-6: #ffaaa5;       /* 珊瑚 */
  --o-accent: #ff5e87;
  --o-line: #f0e8d8;

  --color-bg: var(--o-bg);
  --color-fg: var(--o-fg);
  --color-accent: var(--o-accent);

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

- `<body>` 直接放 8-12 個 `.orb` 元素（絕對定位、不同位置與大小）
- 每個 orb 用獨立 `@keyframes orb-float-N` 隨機 timing（8-22s）translateY + rotate
- 內容卡片放上層、z-index 2，避免被 orb 蓋住
- orb 透明度 0.5-0.7，柔和不搶戲

各區塊構圖：
- **hero**：白底 + 漂浮 orb 圍繞、display 標題置中、CTA pill
- **about**：白卡 + 4 stat tile
- **lineup**：白底 12 卡 grid
- 其餘區段用標準淺色卡片
- 整頁中始終可見部分 orb 漂浮

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS `@keyframes`
- **性能要求**：用 transform + opacity，避免動 position
- **觸發頻率**：純 CSS

## Accessibility (Reduced Motion)

- reduced 模式：orb keyframes 取消，但 orb 仍以靜態位置顯示作為裝飾

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="loop">`。

## Required Images

無圖。

## Reference Snippet

漂浮球：
```html
<div class="orbs" aria-hidden="true">
  <span class="orb o1"></span>
  <span class="orb o2"></span>
  ...
</div>
```

```css
.orbs {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0.55;
  will-change: transform;
  filter: blur(2px);
}
.orb.o1 { top: 8%;  left: 12%; width: 160px; height: 160px; background: var(--o-orb-1); animation: orb-float 12s ease-in-out infinite; }
.orb.o2 { top: 20%; right: 8%; width: 220px; height: 220px; background: var(--o-orb-2); animation: orb-float 16s ease-in-out infinite reverse; }
.orb.o3 { top: 60%; left: 5%; width: 180px; height: 180px; background: var(--o-orb-3); animation: orb-float 14s ease-in-out infinite -3s; }
.orb.o4 { top: 75%; right: 15%; width: 140px; height: 140px; background: var(--o-orb-4); animation: orb-float 18s ease-in-out infinite -6s; }
.orb.o5 { top: 40%; left: 50%; width: 200px; height: 200px; background: var(--o-orb-5); animation: orb-float 20s ease-in-out infinite; }
.orb.o6 { top: 30%; left: 30%; width: 120px; height: 120px; background: var(--o-orb-6); animation: orb-float 11s ease-in-out infinite -2s; }
@keyframes orb-float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(15px, -30px, 0) rotate(8deg); }
}
@media (prefers-reduced-motion: reduce) {
  .orb { animation: none !important; }
}
```

內容置上層：
```css
section { position: relative; z-index: 2; }
```
