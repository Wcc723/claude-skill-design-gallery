---
name: design-ascii-terminal
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in ASCII Terminal / CLI / Green Phosphor aesthetic. Triggers on ASCII、Terminal、CLI、80x24、green phosphor、retro computing、Curses TUI、boxdraw、Lynx.
user-invocable: true
---

# ASCII 終端機 ASCII Terminal — 島嶼共鳴 2026

## Style Philosophy

ASCII 終端機美學致敬 1970-1980 年代 VT100 / PDP-11 終端機時代——綠底螢光磷光屏、80×24 文字格、box-drawing 字元 `┌─┐│└┘` 構成 UI 邊框、ANSI 顏色、`█▓▒░` 不同密度方塊組成「像素」。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **登入 BBS 後看到的活動公告**——純文字、嚴格網格、極快、可被 Lynx 等文字瀏覽器良好閱讀。

三個視覺辨識特徵：
1. **monospace 字體**、嚴格網格、80 字寬限制感
2. **box-drawing 字元** 構成所有 UI 邊框與分隔
3. **限定色票**：黑底配磷綠 / 琥珀色 / 白；少量 ANSI 紅藍黃

## Design Tokens

```css
:root {
  --term-bg: #0a0e0a;            /* CRT 黑底（不純黑） */
  --term-bg-2: #0f160f;
  --term-green: #33ff66;         /* phosphor green */
  --term-green-dim: #22aa44;
  --term-amber: #ffaa00;
  --term-cyan: #66ddff;
  --term-magenta: #ff66cc;
  --term-white: #e8f0e8;
  --term-grey: #88a088;

  --color-bg: var(--term-bg);
  --color-fg: var(--term-green);
  --color-accent: var(--term-amber);

  --radius-none: 0;

  --font-display: 'IBM Plex Mono', 'JetBrains Mono', 'Cascadia Code', 'Consolas', 'Menlo', 'Courier New', monospace;
  --font-body: 'IBM Plex Mono', 'Cascadia Code', 'Consolas', 'Menlo', 'Courier New', monospace;
  --font-mono: var(--font-body);
}

* { font-family: var(--font-mono); }
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(24px, 4.5vw, 56px) / 1.0 / 700 / 0.04em / monospace | Hero ASCII art 標題 |
| h1 | 22px / 1.1 / 700 / monospace | 區塊標題 |
| h2 | 18px / 1.3 / 700 / monospace | 子標 |
| body | 14px / 1.6 / 400 / monospace | 段落 |
| caption | 12px / 1.4 / 400 / monospace | label |

中文也用 monospace（系統 monospace fallback 到 PingFang TC）。

## Layout Rules

- 背景：CRT 綠底（深綠黑）+ 微 scanline overlay（CSS gradient repeating）
- 容器寬度：固定 monospace 字寬（80ch / 100ch）、置中顯示
- 排版：所有元素用 box-drawing 字元構成邊框（`┌─┐│└─┘`）；不用 CSS border
- 中文字 1ch ≈ 2 個西文字寬，要注意對齊與排版

各區塊構圖：
- **hero**：80×24 BBS 風格的啟動畫面，ASCII art logo（用 figlet 字體風格的「ISLAND RESONANCE」） + 對話框 + 啟動提示 `> press [B]uy ticket...`
- **about**：仿 `man` 手冊頁：左 NAME / SYNOPSIS / DESCRIPTION 欄、右段落
- **lineup**：仿 `ls -la` 輸出：列表式 `2026-08-21  20:30  鯨向海 [HEADLINER]  共鳴山主舞台`
- **schedule**：仿 cron table，3 日 box-drawing 表格
- **venues**：仿 ASCII 地圖，每個舞台用 `[A]` `[B]` `[C]` 標記
- **tickets**：仿 dialog 視窗 box，3 個方框並排，VIP 中間配 `*` 角飾
- **travel**：仿 `cat README.md` 輸出，序號 1. 2. 3.
- **sponsors**：仿 BBS welcome banner，title 用 figlet 大字 ASCII
- **footer-faq**：仿 `--help` 輸出，Q. / A. 縮排

## Do / Don't

| Do | Don't |
| --- | --- |
| 所有 UI 邊框用 `┌─┐│└┘├┤┬┴┼` box-draw 字元 | 用 CSS border 或 background |
| 整頁 monospace 字體、嚴格網格 | 混用 proportional 字體 |
| 加掃描線、螢光發光效果 | 純色平面顯示 |
| 顯示 prompt `>` 、command `$` 提示符 | 隱藏終端機隱喻 |
| 對比度：magnet green (#33ff66) on (#0a0e0a) > 8:1 | 用低彩度暗綠 — 不夠 phosphor |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json` — 通常 1-2 張 ASCII art-like 圖即可（或完全 CSS-only）。

## Reference Snippet

CRT 掃描線：
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.05) 0 1px,
    transparent 1px 2px
  );
  z-index: 9999;
}
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%);
  z-index: 9998;
}
```

Box-drawing 容器：
```css
.term-box {
  padding: 8px 12px 12px;
  position: relative;
  color: var(--term-green);
  background: var(--term-bg);
}
.term-box::before {
  content: '┌─ ' attr(data-title) ' ' attr(data-fill) '┐';
  display: block;
  white-space: pre;
  letter-spacing: 0;
  margin-bottom: 8px;
}
/* 或用 .term-box 內手寫 ASCII：
   ┌──── LINEUP ────────────┐
   │ ...content...           │
   └─────────────────────────┘
*/
```

ASCII art logo（hero）：
```html
<pre class="ascii-logo">
██ ███████ ██       █████  ███    ██ ██████
██ ██      ██      ██   ██ ████   ██ ██   ██
██ ███████ ██      ███████ ██ ██  ██ ██   ██
██      ██ ██      ██   ██ ██  ██ ██ ██   ██
██ ███████ ███████ ██   ██ ██   ████ ██████

█████   ████  ██████  ██ ███    ██   ████  ███    ██  ████  ███████
██  ██ ██     ██   ██ ██ ████   ██  ██  ██ ████   ██ ██     ██
██████  ████  ██████  ██ ██ ██  ██ ██    ██ ██ ██  ██ ██     ██████
██  ██     ██ ██   ██ ██ ██  ██ ██ ████████ ██  ██ ██ ██     ██
██  ██  ████  ██   ██ ██ ██   ████ ██    ██ ██   ████  ████  ███████
</pre>
```

```css
.ascii-logo {
  font-family: var(--font-mono);
  color: var(--term-green);
  font-size: 10px;
  line-height: 1.0;
  white-space: pre;
  text-shadow: 0 0 4px var(--term-green);
}
```

Prompt 提示：
```css
.prompt::before {
  content: '$ ';
  color: var(--term-amber);
}
.cursor::after {
  content: '█';
  color: var(--term-green);
  animation: blink 1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

Dialog 視窗：
```html
<div class="term-dialog">
  <pre>
┌─────────── 票券資訊 ──────────────┐
│  單日票      NT$  2,200           │
│  三日通票    NT$  5,400  [推薦]   │
│  VIP 三日    NT$ 12,800           │
│                                   │
│  [ B ] 立即購票    [ Q ] 取消    │
└───────────────────────────────────┘
  </pre>
</div>
```
