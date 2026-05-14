---
name: design-glitch
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Glitch Art (故障藝術) style. Triggers on Glitch、故障藝術、databending、CRT、scanlines、RGB shift、VHS noise、distortion aesthetic.
user-invocable: true
---

# 故障藝術 Glitch Art — 島嶼共鳴 2026

## Style Philosophy

Glitch art 把「故障」當作藝術手法——讓 RGB 色道偏移、像素被擾動、掃描線出現在影像上。它的哲學是「**完美是工業的，故障才是人性的**」。在音樂節網頁，這風格讓「島嶼共鳴」像 **被颱風干擾的衛星直播畫面**——資訊還在、但訊號破碎、每個瞬間都不穩定。

三個視覺辨識特徵：
1. **RGB chromatic aberration**（紅藍綠分色錯位）
2. **CRT 掃描線、VHS 雜訊、隨機長條色塊**
3. **跳動 / 抖動文字效果、隨機字符替換**

## Design Tokens

```css
:root {
  --gl-bg: #050208;             /* 接近黑、偏紫 */
  --gl-bg-2: #0d0512;
  --gl-fg: #e8e8f0;
  --gl-fg-soft: #b4b4c8;
  --gl-r: #ff003c;              /* red channel */
  --gl-g: #00ff90;              /* green channel */
  --gl-b: #00d9ff;              /* blue channel */
  --gl-accent: #ff003c;

  --color-bg: var(--gl-bg);
  --color-fg: var(--gl-fg);
  --color-accent: var(--gl-accent);

  --radius-none: 0;
  --radius-sm: 2px;

  --font-display: 'Helvetica Neue', 'Arial', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Verdana', sans-serif;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / -0.02em / uppercase | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.05 / 800 / uppercase | 區塊大標 |
| h2 | 20px / 1.2 / 700 / 0.04em / uppercase | 子標 |
| body | 14px / 1.6 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.18em / mono / uppercase | label |

## Layout Rules

- 背景：純黑配 CRT 掃描線（CSS gradient repeating-linear），偶爾出現長條色塊
- 容器寬度：max-width 1180px
- 元素邊框極細（1px）或無；用 RGB 錯位代替 border
- 全頁有 subtle 抖動感（CSS animation 微小 translate / hue-rotate）

各區塊構圖：
- **hero**：滿版掃描線背景 + 主標題用 RGB 錯位效果 + 副標 mono 字 + 故障 CTA（hover 抖動）
- **about**：左側雜訊小方塊 + 右側段落、數字配 glitch 效果
- **lineup**：12 張黑色卡，每張卡標題有 RGB 偏移；headliner 卡邊框紅綠錯位
- **schedule**：3 個 day 表格、時段用 mono、headliner 列加 RGB 抖動
- **venues**：3 張卡、圖片應用 CSS filter（hue-rotate / saturate / drop-shadow 紅藍）
- **tickets**：3 張票卡，VIP 中央卡邊框 RGB 抖動 + 內部小掃描線
- **travel**：步驟卡，圖示用故障符號（▓ ░ ▀）
- **sponsors**：純文字、title 加紅藍錯位
- **footer-faq**：每條 FAQ 用 mono 字、Q 加閃爍效果

## Do / Don't

| Do | Don't |
| --- | --- |
| RGB chromatic aberration 是核心、用 text-shadow 製造 | 完全乾淨無錯位 |
| 掃描線背景必須有、可低 opacity | 純色平面背景 |
| 動畫節制：抖動幅度小、循環長 | 全頁狂閃 — 易閃光癲癇 |
| 對比度仍維持 ≥ 4.5:1 | 用低對比 RGB 文字使視覺殘像不可讀 |
| 用 ▓ ░ ▒ ▀ ▄ █ unicode block 製造像素感 | 用花俏 emoji |

## Required Output Contract

通用契約。光敏 / 閃爍動畫不能高頻（< 3Hz）以避免癲癇風險。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

CRT 掃描線背景：
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(255,255,255,0.04) 0 1px,
    transparent 1px 3px
  );
  mix-blend-mode: overlay;
  z-index: 100;
}
```

RGB 錯位標題：
```css
.glitch-title {
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--gl-fg);
  position: relative;
  text-shadow:
    -3px 0 var(--gl-r),
    3px 0 var(--gl-b);
  animation: glitch-shift 4s steps(1) infinite;
}
@keyframes glitch-shift {
  0%, 95% { text-shadow: -3px 0 var(--gl-r), 3px 0 var(--gl-b); }
  96%, 97% { text-shadow: 5px 0 var(--gl-r), -5px 0 var(--gl-b), 0 2px var(--gl-g); transform: translate(2px, -1px); }
  98%, 100% { text-shadow: -3px 0 var(--gl-r), 3px 0 var(--gl-b); transform: translate(0,0); }
}
```

故障卡：
```css
.glitch-card {
  background: var(--gl-bg-2);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 24px;
  position: relative;
  color: var(--gl-fg);
}
.glitch-card.headliner::before,
.glitch-card.headliner::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--gl-r);
  transform: translate(-2px, 0);
  pointer-events: none;
}
.glitch-card.headliner::after {
  border-color: var(--gl-b);
  transform: translate(2px, 0);
}
```

Glitch button：
```css
.btn-glitch {
  background: transparent;
  border: 1px solid var(--gl-fg);
  color: var(--gl-fg);
  padding: 12px 28px;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  position: relative;
}
.btn-glitch:hover {
  color: var(--gl-r);
  border-color: var(--gl-r);
  animation: jitter 0.15s steps(2) infinite;
}
@keyframes jitter {
  0% { transform: translate(0,0); }
  25% { transform: translate(-1px,1px); }
  50% { transform: translate(1px,-1px); }
  75% { transform: translate(-1px,-1px); }
  100% { transform: translate(0,0); }
}
```
