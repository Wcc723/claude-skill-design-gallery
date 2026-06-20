---
name: app-cassette-futurism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Cassette Futurism style. Triggers on Cassette Futurism、卡帶未來主義、卡帶、磁帶、隨身聽、Walkman、卡座、tape deck、reel、捲盤、復古硬體、髮絲紋金屬、brushed metal、LCD、段碼字、seven-segment、旋鈕、knob、VU 表、VU meter、類比音響、analog hardware、塑膠按鍵、physical buttons、retrofuturism、1980s 隨身聽。
user-invocable: true
---

# 卡帶未來主義 — 迴聲 Resona

## Style Philosophy

卡帶未來主義（Cassette Futurism）把整支手機想像成**一台 1980s 隨身聽 × 桌上型卡座的混血硬體**——畫面不是「軟體 UI」，而是一塊**機器面板**。使用者不是在「點選項目」，而是在「操作一台類比音響」：按下凹凸的塑膠按鍵、旋轉刻痕旋鈕、盯著背光 LCD 視窗裡跳動的琥珀段碼字、看著卡帶捲盤緩緩轉動。機身是 gunmetal/charcoal 的金屬殼，表面有細密的髮絲紋（brushed aluminum），四角鎖著十字螺絲，所有資訊都被框在凹陷的 LCD 視窗或印在暖奶油色的紙標籤上。

用在 迴聲 Resona 音樂串流 App，這風格傳達「類比、機械、暖、懷舊未來、可觸控的硬體感」：專輯封面被換成一個**會旋轉的卡帶視窗**，等化器是一排上下跳動的 VU 琥珀燈條，分類 chip 是貼在機身上的彩色標籤貼紙，底部 tab-bar 是機身的一排實體按鍵列（active 鍵亮起琥珀燈）。整個 App 看起來像一台你可以伸手按下去的隨身聽。

本次精修的三條鐵律：

1. **每個可點元素都是「實體零件」，不是扁平色塊**：按鍵必須有 bevel（同時 `inset` 頂亮/底暗 + 外 `drop-shadow`），**按下時陰影反轉**（外影縮小、inset 變暗）做出「真的被壓下去」的觸感。沒有任何純色無質感的 Material 卡。
2. **所有數字都是 7 段碼 LCD**：時間 9:41、曲目時長、進度 01:12、價格 NT$ 149——一律等寬段碼風（`tabular-nums` + 琥珀 `text-shadow` 光暈），呈現在深墨綠黑的凹陷 LCD 視窗裡，附 1px 掃描線。標籤文字則用窄體無襯線、**大寫 + 拉開字距**，像機器絲印。
3. **暖琥珀/奶油 on 深機身，WCAG AA 不妥協**：機身深、文字暖。主文字用奶油色 `#ece6d4`（on `#23262b` 對比 ≈ 10:1）或亮琥珀 `#ffb12e`（on LCD 底 `#14180f` 對比 ≈ 11:1），全部遠超 AA 4.5:1。teal `#23d3c4` 與 REC 紅 `#ff4438` 只做點綴強調，不承載長文。

三個視覺辨識特徵：

1. **會旋轉的卡帶視窗**（取代 player 大封面）：一個橫式卡帶外殼，內含**兩個會轉的捲盤**（reel = `conic-gradient` 放射輻條 + `@keyframes spin`），中央一段磁帶，殼上貼一張**紙標籤**寫專輯名 / 曲名 / A 面。reduced-motion 下捲盤停轉但卡帶構造完整呈現。
2. **VU 表等化器**：player 與 home banner 上放一排上下錯落跳動的琥珀 bar（`@keyframes` 各 bar 不同 delay/高度），像真的音量表針在跳。reduced-motion 關閉跳動、定格成靜態柱狀。
3. **髮絲紋金屬機身 + 塑膠實體按鍵 + 凹陷 LCD 視窗 + 旋鈕 + 四角螺絲**：整個 device 是刷紋鋁面板，tab-bar 是底部一排實體按鍵，進度/音量做成實體推桿或旋鈕，到處點綴十字螺絲與絲印標籤。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* 實體按鍵列本體（比一般高，要容得下立體鍵） */
  --miniplayer-h: 58px;         /* 迷你卡座播放列高度 */
  --safe-bottom: 30px;          /* home indicator 安全區 */
  --content-pad: 18px;
  --device-radius: 30px;        /* 機身圓角偏方，硬體感（非 46px 軟圓） */

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 機身金屬色（gunmetal / charcoal） ── */
  --case-1: #23262b;            /* 機身主面 */
  --case-2: #1a1c20;            /* 機身深處 / 凹槽 */
  --case-3: #2c3036;            /* 機身亮面 / 凸起按鍵頂 */
  --case-edge-hi: #3a3f47;      /* 機身斜面高光 */
  --case-edge-lo: #101216;      /* 機身斜面陰影 */

  /* ── 刷紋鋁銀（髮絲紋面板用，pattern） ── */
  --brush-a: #d8dadd;
  --brush-b: #aeb2b7;
  --brush-deep-a: #5b6068;      /* 深色髮絲紋（深機身上的金屬條） */
  --brush-deep-b: #41454c;

  /* ── LCD 凹窗：深墨綠黑底 + 琥珀段碼 ── */
  --lcd-bg: #14180f;            /* 深墨綠黑 */
  --lcd-bg-2: #0d1009;          /* LCD 更深處 */
  --lcd-amber: #ffb12e;         /* 琥珀段碼字（主） */
  --lcd-amber-dim: #7a5418;     /* 熄滅段碼（段碼字底層暗字，營造液晶感） */
  --lcd-scanline: rgba(0, 0, 0, 0.22);  /* 1px 掃描線 */
  --lcd-glow: rgba(255, 177, 46, 0.55);  /* 琥珀光暈 text-shadow */

  /* ── 文字（暖奶油 / 琥珀 on 深機身，WCAG AA） ── */
  --text-1: #ece6d4;            /* 主文字：暖奶油，on case ≈ 10:1 */
  --text-2: #b7b2a2;            /* 次文字：暗奶油，on case ≈ 5.6:1（達 AA） */
  --text-3: #8a8675;           /* 弱文字：僅用於 ≥17px 大字或非關鍵裝飾，on case ≈ 3.4:1 */
  --label-ink: #6f6a5c;        /* 絲印標籤暗刻字（用在亮銀面板上，on 銀 ≈ 4.7:1） */
  --label-ink-strong: #2a2823; /* 紙標籤上手寫/印刷字（on 奶油標籤 ≈ 9:1） */

  /* ── 強調色 ── */
  --teal: #23d3c4;             /* teal 強調：active 燈、進度 fill、play 環 */
  --teal-dim: #14756d;         /* teal 熄滅態 */
  --rec: #ff4438;              /* REC / 錄音 / active 紅點 / 心跳 */
  --cream-label: #ece6d4;      /* 暖奶油紙標籤底色 */
  --sticker-1: #ff7a3d;        /* 標籤貼紙：橘 */
  --sticker-2: #23d3c4;        /* 標籤貼紙：teal */
  --sticker-3: #ffb12e;        /* 標籤貼紙：琥珀 */
  --sticker-4: #c46cff;        /* 標籤貼紙：紫 */

  /* ── 圓角（整體偏方，硬體感） ── */
  --radius-panel: 12px;        /* 面板 / 卡片 */
  --radius-panel-sm: 8px;
  --radius-lcd: 6px;           /* LCD 視窗（很方） */
  --radius-key: 10px;          /* 塑膠按鍵 */
  --radius-knob: 50%;          /* 旋鈕 */
  --radius-sticker: 4px;       /* 標籤貼紙（幾乎直角） */
  --radius-pill: 999px;        /* 推桿軌 */

  /* ── 材質陰影配方（核心） ── */
  /* 塑膠按鍵 bevel：外凸 = 頂亮 inset + 底暗 inset + 外 drop */
  --bevel-up:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -2px 3px rgba(0, 0, 0, 0.55),
    0 3px 5px rgba(0, 0, 0, 0.45),
    0 1px 0 rgba(0, 0, 0, 0.6);
  /* 按下時：外影縮小、inset 反轉變凹 */
  --bevel-down:
    inset 0 2px 4px rgba(0, 0, 0, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.08),
    0 1px 1px rgba(0, 0, 0, 0.4);
  /* 凹陷 LCD 視窗：內凹陰影 */
  --inset-window:
    inset 0 2px 5px rgba(0, 0, 0, 0.85),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);
  /* 面板凹槽（裝按鍵的機身溝） */
  --inset-trough:
    inset 0 2px 4px rgba(0, 0, 0, 0.55),
    inset 0 -1px 0 rgba(255, 255, 255, 0.06);
  /* 髮絲紋面板細高光 */
  --metal-hi: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  --shadow-float: 0 18px 50px rgba(0, 0, 0, 0.55);

  /* ── 字體 ── */
  /* 標籤：窄體無襯線，絲印感 */
  --font-label: 'Helvetica Neue', 'Arial Narrow', 'PingFang TC', system-ui, sans-serif;
  --font-ui: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  /* 段碼數字：等寬 */
  --font-lcd: 'DSEG7', 'Courier New', ui-monospace, 'SF Mono', Menlo, monospace;

  /* ── 動效 ── */
  --ease: cubic-bezier(0.34, 0.02, 0.2, 1);   /* 機械頓挫感 */
  --dur-fast: 90ms;
  --dur: 180ms;
  --spin-dur: 4s;              /* 卡帶捲盤一圈 */
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 字體 | 顏色 | 用途 |
| --- | --- | --- | --- | --- |
| stencil-cap | 10px / 1.2 / 700 / +1.6px **UPPERCASE** | `--font-label` | `--label-ink` / `--text-3` | 機身絲印小標（如「SIDE A」「DECK」「EQ」）、面板註記 |
| label | 12px / 1.4 / 600 / +0.4px | `--font-label` | `--text-2` | chip 標籤、卡片副標、藝人名、tab 文字 |
| body | 14px / 1.55 / 400 / 0 | `--font-ui` | `--text-2` | 段落、方案權益、功能說明 |
| row-title | 16px / 1.35 / 600 / +0.2px | `--font-ui` | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 19px / 1.25 / 700 / +0.8px **UPPERCASE 風** | `--font-label` | `--text-1` | 各屏區塊標題（如「每日迴聲」「我的音樂庫」） |
| display | 26px / 1.1 / 800 / +0.6px | `--font-label` | `--text-1` | home 品牌大標、紙標籤專輯名 |
| lcd-sm | 13px / 1 / 400 / +1px | `--font-lcd` | `--lcd-amber` | LCD 內小段碼（時長、進度、播放次數、價格數字） |
| lcd-lg | 22px / 1 / 400 / +2px | `--font-lcd` | `--lcd-amber` | status-bar 時間 9:41、player 大計時器 |

- **所有數字一律段碼**：時間、時長、進度、價格 NT$、播放次數，全用 `--font-lcd` + `font-variant-numeric: tabular-nums` + 琥珀 `text-shadow: 0 0 6px var(--lcd-glow)`，並放在 LCD 凹窗底（`--lcd-bg` + `--inset-window` + 1px 掃描線）。
- **所有機身絲印標籤一律大寫 + 拉開字距**（`text-transform: uppercase; letter-spacing`），呈現雷射蝕刻 / 絲網印刷感。中文標題用 `--font-label`（窄體）配 `+0.6~0.8px` 字距，營造機器面板的工業氣質。
- 段碼 LCD 字可選疊一層 `--lcd-amber-dim` 的「熄滅段碼」假背景（如 `888` 暗影）以加強液晶真實感（裝飾用，不影響可讀）。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 髮絲紋金屬機身，`overflow:hidden`、`border-radius: --device-radius`，四角放 `.screw` 十字螺絲）→ `.statusbar`（固定頂，做成一條深色 LCD 計時條，`z-index:5`）→ `.viewport`（中間可捲動畫面容器，`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.miniplayer`（貼在 tab-bar 上方的常駐迷你卡座播放列，`z-index:4`）→ `.tabbar`（固定底，做成一排機身實體按鍵，`z-index:5`）。最外層 `body` 用 `display:grid; place-items:center; padding:0`（**不可加會撐破 390×844 的 padding**，否則 device 被往下推、player 底部控制列在 844 視窗外被裁切）。

`.device` 本體背景 = 深機身 `--case-1` + **髮絲紋 pattern**（`repeating-linear-gradient(90deg, var(--brush-deep-a), var(--brush-deep-b) 1px, var(--brush-deep-a) 2px)` 疊極低 opacity）+ 邊緣斜面高光 / 陰影，讓整支手機像一塊金屬殼。亮銀面板（如 player 的卡座框）才用 `--brush-a/--brush-b` 的亮髮絲紋。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（無跑版的骨架）

- 用一個簡單的 class 切換：`.screen` 預設 `display:none`，**只有** `.screen.is-active` 顯示（`display:flex; flex-direction:column`）。**嚴禁**任何「畫面專屬 class」無條件設 `display`——那會讓畫面永遠疊著。畫面專屬樣式只能設 padding/排版。
- 可導覽元素加 `data-go="<target>"`：歌單卡 / 收藏列 / 專輯 `data-go="detail"`；曲目列 / 迷你播放列 / 任一播放鍵 `data-go="player"`；返回鍵 `data-go="back"`。JS 以事件委派處理 click。
- 導覽行為全部接好：tab → 切 home/search/library/profile；home 歌單卡 / detail 曲目 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 → 開 player；detail / player 返回鍵 → 回上一畫面。
- **JS 失效時** home 為預設 `is-active`，仍可讀完整內容。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 `.viewport` 為當前畫面唯一可捲動區。`.viewport` 高度 = `calc(--screen-h - --statusbar-h)`，下緣由 dock（miniplayer+tabbar）佔位；每個 `.screen` 內部各自 `overflow-y:auto`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，做成一條橫貫機身頂部的**深色 LCD 計時條**（`--lcd-bg` 底 + `--inset-window` 凹陷 + 1px 掃描線）。
- 左側時間 **9:41** 用 `lcd-lg` 琥珀段碼（tabular-nums + 琥珀光暈），右側並排訊號格 / Wi-Fi / 電量符號——全部用**琥珀段碼/小燈條**風純 CSS 繪製（訊號 = 遞增高度的小琥珀條、電量 = 一個有刻度的小電池框），不用圖檔。
- 固定於機身頂、不隨內容捲動、永遠在最上層。可在左角點綴一個 `stencil-cap` 絲印「RESONA DECK」字樣。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左 `section` 大寫風標題 + 右「查看全部」絲印小連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display 絲印風）+ slogan「讓每首歌，回到你身上」；右側一個**旋鈕造型頭像**（`conic-gradient` 刻痕 + 中心高光）。下方一個橫排 LCD 小窗顯示日期/問候段碼字（裝飾）。
2. **每日迴聲（個人化每日推薦 banner）**：一張橫幅機身面板（凹槽 `--inset-trough`），左一個小卡帶圖示 + LCD 視窗寫「每日迴聲」與「**個人化每日推薦**」文案 + 一排 **VU 表等化器**（琥珀跳動 bar）+ 右側一顆**實體圓形播放鍵**（▶ bevel 凸鍵，teal 環）。露出「**無損音質串流**」絲印徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一個**迷你卡帶造型封面**（`.cassette-mini`：橫式殼 + 兩個小捲盤孔 + 一張不同色 `--sticker-*` 的紙標籤寫歌單名）+ 下方 LCD 小窗寫曲數。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 段碼排名數字（LCD 小窗）+ 小卡帶縮圖 + 歌名 + 藝人 + 段碼時長 + 實體小播放鍵。
5. **4 分類 chip 標籤貼紙橫排**（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，做成**貼在機身上的彩色標籤貼紙**（不同 `--sticker-*` 底、`--radius-sticker` 近直角、微旋轉 `rotate(-1deg)`、`--label-ink-strong` 印刷字），首個 active（亮起 + 微抬起陰影）。

### search（`data-screen="search"`）

- 頂部**凹陷 LCD 搜尋框**（`--lcd-bg` + `--inset-window` + 1px 掃描線 + 左側放大鏡符號 + 琥珀 placeholder「搜尋歌曲、藝人、歌單」+ 右側一個閃爍游標豎線）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）標籤貼紙。
- **熱門歌曲**：section 標題，**編號清單**（含段碼時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = LCD 序號 + 小卡帶縮圖 + 歌名 + 藝人 + 段碼時長 + 實體小播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（旋鈕造型圓頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（`data-screen="detail"`）

- 左上**實體圓形返回鍵**（‹ bevel 凸鍵，cursor:pointer + hover/active 反轉陰影）。
- **大卡帶封面**：頂部一個大張**卡帶造型封面**（`.cassette`：橫式金屬殼 + 兩個捲盤孔 + 一張暖奶油紙標籤印「島嶼晨光」+「SIDE A」絲印 + 角落十字螺絲）。色相用 `--sticker-*` 區分。
- 資訊區（紙標籤風）：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 LCD **2026** / **9 首** / 總時長 LCD **34:12**。
- 動作列：**播放全部**（teal 大實體凸鍵 ▶）+ **隨機播放**（金屬次鍵 bevel）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 `.song-row`（機身凹槽分隔）：LCD 曲序 + 歌名 + 藝人（林知夏）+ 段碼時長 + 行尾實體小播放鍵 / 選單（⋯）。點任一曲 → player。

### player（`data-screen="player"`）

覆蓋全屏的 now-playing 卡座面板，**進入時隱藏底部 dock（tab-bar + miniplayer）**，整個 player 用 `height:100%; display:flex; flex-direction:column`，讓控制列/進度/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**實體返回鍵**（⌄ 收合 bevel 凸鍵，`data-go="back"` 回上一畫面）。頂部一條 `stencil-cap` 絲印「NOW PLAYING ／ DECK A」。
- **會旋轉的卡帶視窗**（核心 signature，`flex:1; min-height:0` 可壓縮）：置中一個亮銀髮絲紋卡座框，內嵌一個**橫式卡帶**——左右**兩個會轉的捲盤**（reel = `conic-gradient` 放射輻條 + 中心齒孔高光 + `@keyframes spin`，左盤帶較滿、右盤較空示意進度）+ 中央一段磁帶連接 + 殼上一張暖奶油紙標籤印「島嶼晨光 ／ A 面」。
- 正在播放（紙標籤 / LCD）：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」。旁邊一排 **VU 表等化器**琥珀跳動 bar。
- **歌詞同步**：一行逐字高亮示意（高亮字 `--lcd-amber`，其餘 `--text-3`），呼應「歌詞同步」功能。
- 進度：做成**實體推桿軌**（`.fader`：凹槽軌 + teal fill + 一個可見推桿握把），左 LCD **01:12** / 右 LCD **03:24**（段碼 tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大實體圓鍵（▶ / ⏸ 兩態，teal 環凸鍵）** / 下一首（⏭）/ 循環（⟳），全部 bevel 凸鍵、按下反轉。隨機與循環 active 時亮 teal 燈。
- 底部固定區：**Hi-Res 無損音質**絲印徽章 + **音量旋鈕**（`.knob`：conic 刻痕 + 指示點 + 中心高光，純裝飾可旋轉示意）。

### library（`data-screen="library"`）

- 「**我的音樂庫**」標題（section 絲印風）。
- 分頁列做成**機身上的三顆實體按鍵**（segmented 風）：**歌單 / 專輯 / 已下載**，首個 active（按下態 + 亮 teal 燈）。
- **收藏歌單清單**：每列 = 迷你卡帶縮圖 + 標題（複用歌單名）+ LCD 曲數 + 行尾箭頭，機身凹槽分隔，點擊 → detail。
- **離線下載**功能列：機身列 + 已下載狀態 LCD 徽章（呼應「離線下載」）。
- **共享音樂庫**功能列：機身列 + **實體撥桿開關 toggle**（`.switch`：金屬撥桿在凹槽內，on 亮 teal 燈、off 暗）——呼應「共享音樂庫」。

### profile（`data-screen="profile"`）

- **使用者卡**：旋鈕造型頭像 + 暱稱 + 會員狀態行（機身面板 + LCD 小窗顯示帳號狀態）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（實體撥桿開關 toggle，預設 on 亮 teal）——呼應「跨裝置接續播放」。
- **3 訂閱方案卡**（機身面板堆疊）：
  - **免費** — LCD `NT$ 0` ／月 — 標「目前方案」（絲印標籤）。權益：含廣告插播、標準音質。
  - **Plus** — LCD `NT$ 149` ／月 — 標「推薦」，強調面板（亮銀髮絲紋框 + teal 邊光 + 角落「REC」風紅標）。權益：無廣告、**離線下載**、無損音質。
  - **Family** — LCD `NT$ 249` ／月。權益：6 帳號、**共享音樂庫**、家長控制。
  - 每卡含 2–3 條權益小字。價格用 LCD 段碼 + tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你卡座播放列，常駐）

- 一條貼在 tab-bar **正上方**的迷你卡座機身條（`--case-3` 凸面 + `--metal-hi`），高 `--miniplayer-h`。
- 內容：左一個**會轉的迷你雙捲盤**（小 reel + spin）+ 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**實體播放/暫停鍵（▶ / ⏸ bevel）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .miniplayer { display:none }`，與 tab-bar 一起構成被隱藏的 dock）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細**進度推桿線**（凹軌 + teal fill，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部做成**機身底部一排實體按鍵列**（深機身 `--case-2` 底 + 上緣 `--metal-hi` 細高光 + `--inset-trough` 容鍵凹槽），4 鍵：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon（線稿風）+ `label` 絲印文字。
- 每鍵是 bevel 凸塑膠鍵，cursor:pointer + hover 微亮 + active 反轉陰影。**active tab 亮起一顆琥珀/teal 指示燈**（鍵上方一個小發光點）+ icon/文字提亮。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定 dock（player 屏隱藏）。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——專輯/歌單用**卡帶造型**（金屬殼 `linear/repeating-linear-gradient` 髮絲紋 + 兩個捲盤孔 `radial-gradient` + 紙標籤色塊 + 不同 `--sticker-*` 區分色相）；頭像用**旋鈕造型**（`conic-gradient` 刻痕 + 中心高光）。**不得引用任何 `assets/*.webp` 圖檔，不得出現指向圖檔的 `<img>`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 按鍵用 bevel（inset 頂亮/底暗 + 外 drop-shadow），按下反轉成凹陷 | 用扁平純色色塊當按鍵（失去硬體感） |
| 機身鋪髮絲紋 `repeating-linear-gradient` + 邊緣斜面高光/陰影 | 純色平面機身（看不出金屬刷紋） |
| 所有數字用 LCD 段碼字（`--font-lcd` + 琥珀光暈 + 凹窗 + 掃描線） | 用一般比例字寫時間/時長/價格 |
| 封面做成卡帶造型（殼 + 雙捲盤 + 紙標籤），頭像做成旋鈕 | 用方形漸層或圓角矩形當封面 |
| chip 做成貼在機身上的彩色標籤貼紙（近直角 + 微旋轉） | 用一般膠囊 chip |
| 進度/音量做成實體推桿或旋鈕（凹軌 + 握把 / 刻痕） | 用細線進度條無握把 |
| player 用會旋轉的卡帶視窗 + VU 表等化器 | player 用一般大方形封面 |
| 文字用暖奶油/琥珀 on 深機身，確保 ≥ AA | 用低對比深灰文字在深機身上 |
| 四角點綴十字螺絲、機身絲印大寫小標 | 乾淨無細節的純面板 |
| 所有可點元素 cursor:pointer + hover + active 反轉陰影 | 元件無 hover/active 態 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px |

**整體禁忌**：扁平 Material 卡、純色無質感、玻璃 / `backdrop-filter` 毛玻璃、霓虹發光氾濫、emoji 裝飾。這是**硬體**，不是軟體卡片。

---

## Motion Specification

- **卡帶捲盤旋轉**：player 大卡帶與迷你播放列雙捲盤用 `@keyframes spin { to { transform: rotate(360deg); } }`，`animation: spin var(--spin-dur) linear infinite`，只動 `transform: rotate`。播放時轉、暫停時可由 JS 加 `paused` class 暫停（`animation-play-state: paused`）。
- **VU 表等化器**：每根 bar 各自 `@keyframes vu` 在不同 `scaleY` 間跳動（`transform-origin: bottom`），各 bar 不同 `animation-delay` / `animation-duration`（0.5–1.1s）做出錯落跳動，只動 `transform: scaleY`。
- **LCD 掃描線**：用靜態 `repeating-linear-gradient` 即可（不需動畫）；游標 `|` 可選 1s `@keyframes blink` 透明度閃爍。
- **microinteractions**：
  - 實體按鍵 `transition: box-shadow var(--dur-fast), transform var(--dur-fast);`，`:active` 切到 `--bevel-down` + `transform: translateY(1px)`（壓下去）。
  - 標籤貼紙 chip `:active` 微壓；active 態抬起（強化 drop-shadow）。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class），同時切捲盤 `animation-play-state`。
  - 撥桿開關 toggle 切換時握把 `transform: translateX` 滑動 + 指示燈亮滅。
- 動畫屬性限定 `transform` / `opacity`（捲盤 rotate、VU scaleY、按壓 translateY、開關 translateX）；進度/音量 fill 的 `width` 屬靜態示意可接受但不放在捲動熱路徑。
- 不使用任何外部動畫庫。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  /* 捲盤定格、VU 表定格成靜態柱狀、游標停止閃爍——硬體構造仍完整呈現 */
  .reel { transform: none; }
  .vu-bar { transform: scaleY(0.6); }
}
```

- 卡帶捲盤旋轉、VU 跳動、LCD 游標閃爍、按壓位移在 reduced motion 下全部停用；卡帶 / VU / LCD 仍以靜態形態完整呈現（看得出捲盤、看得出柱狀表、段碼字清楚）。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA：主文字暖奶油 `--text-1`（on case ≈ 10:1）、LCD 琥珀（on lcd-bg ≈ 11:1）、次文字 `--text-2`（≈ 5.6:1）；`--text-3` 只用於 ≥17px 大字或純裝飾。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（LCD 段碼 + tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」做成實體按鍵列，active 態明確（指示燈 + 提亮）。
- **迷你卡座播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態、雙捲盤旋轉。
- **player 為覆蓋全屏 now-playing**：進入時隱藏底部 dock（tab-bar + miniplayer）；整個 player `height:100%; display:flex; flex-direction:column`，卡帶視窗 `flex:1; min-height:0`，**控制列 / 進度推桿 / 徽章 / 音量旋鈕永遠固定在 844 內可見、不靠捲動、不被遮擋、不超出**；返回時恢復 dock。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」，數字用 LCD 段碼），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；用 `data-go` 委派 click；JS 失效時 home 預設可見。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **畫面切換 CSS 鐵律**：`.screen { display:none }`，只有 `.screen.is-active` 設 display；嚴禁畫面專屬 class 無條件設 display。
- **無跑版**：機身鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`，不得引用 Google Fonts；段碼字體 fallback 到等寬系統字即可）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` ≤ 8 KB。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "卡帶未來主義 Cassette Futurism", "images": [] }`。所有封面（卡帶造型）、頭像（旋鈕造型）、捲盤、VU 表、LCD 視窗、旋鈕、按鍵、螺絲、髮絲紋面板一律純 CSS（`linear-gradient` / `radial-gradient` / `conic-gradient` / `repeating-linear-gradient` / box-shadow / 幾何形 / `@keyframes`）繪製，**頁面不得引用任何圖檔**、不得出現指向 `assets/` 的 `<img>`。

---

## Reference Snippet

```css
/* ── 手機殼：髮絲紋金屬機身 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  font-family: var(--font-ui);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
  background:
    repeating-linear-gradient(90deg,
      var(--brush-deep-a) 0, var(--brush-deep-b) 1px, var(--brush-deep-a) 2px),
    linear-gradient(180deg, var(--case-3), var(--case-1) 12%, var(--case-1) 88%, var(--case-2));
  box-shadow:
    inset 0 1px 0 var(--case-edge-hi),
    inset 0 -2px 0 var(--case-edge-lo),
    inset 1px 0 0 rgba(255,255,255,0.05),
    var(--shadow-float);
}
/* 四角十字螺絲裝飾 */
.screw {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #4a4f57, #1a1c20 70%);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.25), 0 1px 1px rgba(0,0,0,0.5);
}
.screw::before, .screw::after { /* 十字槽 */
  content: ""; position: absolute; inset: 0; margin: auto;
  background: rgba(0,0,0,0.55);
}
.screw::before { width: 9px; height: 1.5px; top: 0; bottom: 0; left: 0; right: 0; }
.screw::after  { width: 1.5px; height: 9px; top: 0; bottom: 0; left: 0; right: 0; }
.screw.tl { top: 8px; left: 8px; } .screw.tr { top: 8px; right: 8px; }
.screw.bl { bottom: 8px; left: 8px; } .screw.br { bottom: 8px; right: 8px; }

/* ── 亮銀髮絲紋面板（player 卡座框等） ── */
.metal-panel {
  background:
    repeating-linear-gradient(90deg, var(--brush-a) 0, var(--brush-b) 1px, var(--brush-a) 2px);
  border-radius: var(--radius-panel);
  box-shadow: var(--metal-hi), 0 2px 4px rgba(0,0,0,0.4);
}

/* ── 凹陷 LCD 視窗 + 琥珀段碼 + 掃描線 ── */
.lcd {
  position: relative;
  background:
    repeating-linear-gradient(0deg, transparent 0, transparent 2px, var(--lcd-scanline) 3px),
    linear-gradient(180deg, var(--lcd-bg), var(--lcd-bg-2));
  border-radius: var(--radius-lcd);
  box-shadow: var(--inset-window);
  padding: var(--space-1) var(--space-2);
}
.lcd .digits {
  font-family: var(--font-lcd);
  font-variant-numeric: tabular-nums;
  letter-spacing: 1.5px;
  color: var(--lcd-amber);
  text-shadow: 0 0 6px var(--lcd-glow);
}

/* ── 塑膠實體按鍵（bevel，按下反轉） ── */
.key {
  font-family: var(--font-label);
  text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--text-1);
  background: linear-gradient(180deg, var(--case-3), var(--case-1));
  border: 1px solid var(--case-edge-lo);
  border-radius: var(--radius-key);
  box-shadow: var(--bevel-up);
  cursor: pointer;
  transition: box-shadow var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
}
.key:hover  { background: linear-gradient(180deg, #33373e, var(--case-1)); }
.key:active { box-shadow: var(--bevel-down); transform: translateY(1px); }

/* play 大圓鍵：teal 環凸鍵 */
.play-key {
  width: 60px; height: 60px; border-radius: 50%;
  display: grid; place-items: center; color: var(--teal);
  background: radial-gradient(circle at 38% 32%, var(--case-3), var(--case-1) 75%);
  border: 2px solid var(--teal-dim);
  box-shadow: var(--bevel-up), 0 0 10px rgba(35,211,196,0.25);
}
.play-key:active { box-shadow: var(--bevel-down); transform: translateY(1px); }

/* ── 卡帶造型封面（殼 + 雙捲盤 + 紙標籤） ── */
.cassette {
  position: relative; aspect-ratio: 8 / 5; border-radius: var(--radius-panel);
  background:
    repeating-linear-gradient(90deg, #34373d 0, #2a2d33 1px, #34373d 2px),
    linear-gradient(180deg, #3a3e45, #23262b);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 3px 8px rgba(0,0,0,0.5);
  overflow: hidden;
}
.cassette .label { /* 暖奶油紙標籤 */
  position: absolute; left: 8%; right: 8%; top: 10%; height: 38%;
  background: linear-gradient(180deg, #f3eedd, var(--cream-label));
  border-radius: var(--radius-sticker);
  color: var(--label-ink-strong); font-family: var(--font-label);
  text-transform: uppercase; letter-spacing: 0.6px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
}
.cassette .reel { /* 捲盤：放射輻條 + 齒孔 */
  position: absolute; bottom: 12%; width: 26%; aspect-ratio: 1; border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, #14180f 22%, transparent 23%),
    conic-gradient(#5b6068 0 8deg, #2a2d33 8deg 45deg,
                   #5b6068 45deg 53deg, #2a2d33 53deg 90deg,
                   #5b6068 90deg 98deg, #2a2d33 98deg 135deg,
                   #5b6068 135deg 143deg, #2a2d33 143deg 180deg,
                   #5b6068 180deg 188deg, #2a2d33 188deg 225deg,
                   #5b6068 225deg 233deg, #2a2d33 233deg 270deg,
                   #5b6068 270deg 278deg, #2a2d33 278deg 315deg,
                   #5b6068 315deg 323deg, #2a2d33 323deg 360deg);
  box-shadow: inset 0 0 0 2px #1a1c20, inset 0 1px 2px rgba(255,255,255,0.15);
  animation: spin var(--spin-dur) linear infinite;
}
.cassette .reel.left  { left: 14%; }
.cassette .reel.right { right: 14%; }
.is-paused .reel { animation-play-state: paused; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ── VU 表等化器（琥珀跳動 bar） ── */
.vu { display: flex; align-items: flex-end; gap: 2px; height: 22px; }
.vu-bar {
  width: 3px; height: 100%; transform-origin: bottom; border-radius: 1px;
  background: linear-gradient(180deg, var(--rec), var(--lcd-amber) 45%, var(--teal));
  box-shadow: 0 0 4px var(--lcd-glow);
  animation: vu 0.8s ease-in-out infinite alternate;
}
.vu-bar:nth-child(2){ animation-duration: 0.62s; }
.vu-bar:nth-child(3){ animation-duration: 1.05s; }
.vu-bar:nth-child(4){ animation-duration: 0.74s; }
.vu-bar:nth-child(5){ animation-duration: 0.93s; }
@keyframes vu { from { transform: scaleY(0.25); } to { transform: scaleY(1); } }

/* ── 旋鈕（音量 / 頭像，conic 刻痕 + 中心高光） ── */
.knob {
  width: 56px; height: 56px; border-radius: 50%;
  background:
    radial-gradient(circle at 42% 38%, #44484f, #1a1c20 72%),
    conic-gradient(from 0deg, #2a2d33 0 6deg, #4a4f57 6deg 12deg);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.2), 0 3px 6px rgba(0,0,0,0.5);
  position: relative; cursor: pointer;
}
.knob::after { /* 指示點 */
  content: ""; position: absolute; top: 6px; left: 50%; width: 4px; height: 10px;
  transform: translateX(-50%); border-radius: 2px; background: var(--teal);
  box-shadow: 0 0 5px var(--teal);
}

/* ── 實體推桿（進度 / 音量 fader） ── */
.fader { position: relative; height: 10px; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--lcd-bg-2), #1f2128);
  box-shadow: var(--inset-window); }
.fader > i { display:block; height:100%; width:36%; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--teal), var(--teal-dim)); }
.fader .grip { position:absolute; top:50%; left:36%; width:14px; height:20px;
  transform: translate(-50%,-50%); border-radius: 3px;
  background: linear-gradient(180deg, var(--case-3), var(--case-1));
  box-shadow: var(--bevel-up); }

/* ── 標籤貼紙 chip（貼在機身上，近直角 + 微旋轉） ── */
.chip {
  font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.4px;
  font-size: 12px; font-weight: 700; color: var(--label-ink-strong);
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-sticker);
  background: var(--sticker-3); transform: rotate(-1.2deg); cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.35);
  transition: transform var(--dur-fast) var(--ease), filter var(--dur);
}
.chip:nth-child(2){ background: var(--sticker-2); transform: rotate(0.8deg); }
.chip:nth-child(3){ background: var(--sticker-1); transform: rotate(-0.6deg); }
.chip:nth-child(4){ background: var(--sticker-4); transform: rotate(1deg); }
.chip:active { transform: scale(0.96); }
.chip[aria-selected="true"] { filter: brightness(1.12);
  box-shadow: 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.45); }

/* ── 實體撥桿開關 toggle ── */
.switch { width: 46px; height: 26px; border-radius: var(--radius-pill);
  background: linear-gradient(180deg, var(--lcd-bg-2), #22252b);
  box-shadow: var(--inset-trough); position: relative; cursor: pointer; }
.switch .grip { position:absolute; top:3px; left:3px; width:20px; height:20px;
  border-radius: 4px; background: linear-gradient(180deg, var(--case-3), var(--case-1));
  box-shadow: var(--bevel-up); transition: transform var(--dur) var(--ease); }
.switch[aria-checked="true"] { box-shadow: var(--inset-trough), inset 0 0 8px rgba(35,211,196,0.4); }
.switch[aria-checked="true"] .grip { transform: translateX(20px); }

/* ── 中間畫面容器：唯一三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--tabbar-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }

/* ── player：覆蓋全屏，dock 隱藏，控制列永遠在 844 內 ── */
.is-player .miniplayer, .is-player .tabbar { display: none; }
.screen-player.is-active { padding-bottom: var(--space-4); }
.screen-player .deck { flex: 1; min-height: 0; display: grid; place-items: center; }
.screen-player .controls { flex: 0 0 auto; }   /* 進度/控制/徽章永遠可見 */

/* ── status-bar（LCD 計時條，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 18px;
  background:
    repeating-linear-gradient(0deg, transparent 0, transparent 2px, var(--lcd-scanline) 3px),
    linear-gradient(180deg, var(--lcd-bg), var(--lcd-bg-2));
  box-shadow: var(--inset-window);
}
.statusbar .clock { font-family: var(--font-lcd); font-size: 22px; letter-spacing: 2px;
  font-variant-numeric: tabular-nums; color: var(--lcd-amber);
  text-shadow: 0 0 6px var(--lcd-glow); }

/* ── tab-bar（底部實體按鍵列，固定底） ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  background: linear-gradient(180deg, var(--case-1), var(--case-2));
  box-shadow: inset 0 1px 0 var(--case-edge-hi), var(--inset-trough);
}
.tab { display:flex; flex-direction:column; align-items:center; gap:3px;
  font-family: var(--font-label); text-transform: uppercase; letter-spacing: 0.4px;
  font-size: 11px; color: var(--text-3); cursor: pointer;
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-key);
  box-shadow: var(--bevel-up); background: linear-gradient(180deg, var(--case-3), var(--case-1));
  transition: box-shadow var(--dur-fast), color var(--dur); }
.tab:active { box-shadow: var(--bevel-down); transform: translateY(1px); }
.tab[aria-current="page"] { color: var(--lcd-amber); }
.tab[aria-current="page"] .led { background: var(--lcd-amber);
  box-shadow: 0 0 6px var(--lcd-glow); }   /* active 指示燈亮 */
.tab .led { width: 5px; height: 5px; border-radius: 50%; background: #15171b; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reel { transform: none; }
  .vu-bar { transform: scaleY(0.6); }
}
```
