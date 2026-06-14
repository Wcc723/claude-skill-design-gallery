---
name: app-ios-dark
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS Dark style. Triggers on iOS Dark、iOS 深色、深色模式、Dark Mode、OLED、Apple HIG dark、純黑背景、system blue、vibrancy、SF Pro、iPhone 深色。
user-invocable: true
---

# iOS 深色 — 迴聲 Resona

## Style Philosophy

iOS 深色模式（Dark Mode，依 Apple Human Interface Guidelines）把整個 App 沉進 OLED 純黑，讓內容自己發光。它不是「把白底反相」這麼簡單——iOS 深色有一套嚴謹的**抬升表面層階（elevated surfaces）**：在 `#000` 純黑上，越靠近使用者、越互動的元件用越亮的灰（`#1C1C1E` → `#2C2C2E` → `#3A3A3C`）。系統 accent 用 iOS system blue `#0A84FF` 與 system green `#30D158`；半透 vibrancy 材質（`rgba` 半透 + `backdrop-filter: blur`）讓 navigation bar、tab bar、mini-player 像毛玻璃浮在內容之上，底下的封面色彩會微微透出。對音樂串流 App 而言，純黑背景是最強的舞台——專輯封面在暗背景上對比拉滿，彩色封面像在黑色畫廊裡發光，這正是 Apple Music 夜間情境的視覺語言。省電（OLED 純黑像素不發光）是附帶紅利。

本次精修目標：在「無跑版、品質佳」的基礎上把**細膩度**拉到產品級——強化 OLED 深色的階梯式層次、加入常駐 **mini-player（迷你播放列）**、把半透 vibrancy 材質做足、為每個可點元素加明確的 `:hover` / `:active` 微互動回饋。

三個視覺辨識特徵：
1. **OLED 純黑 `#000` 底 + 階梯式抬升灰表面**：背景純黑，卡片/列表用 `#1C1C1E`，浮起的 sheet/已選態再升到 `#2C2C2E`，pressed/最上層控制元件用 `#3A3A3C`，用「亮度」而非邊框表達層級。深度由「表面亮度差 + 極弱陰影」共同建立，不靠粗線、不靠強陰影。
2. **系統藍 accent + 半透 vibrancy 材質**：互動色一律 system blue `#0A84FF`；navbar / tab-bar / mini-player 用 `rgba` 半透 + `backdrop-filter: saturate(180%) blur(20px)` 製造毛玻璃；分隔線是極細 `rgba(255,255,255,0.08)` hairline，不用實心粗線。
3. **iOS 分組表格 + 大封面對比**：profile / library / detail 用 iOS「分組插入式表格（inset grouped）」圓角卡列表（左右各留 16px 邊距）；封面在純黑上以飽和色塊或圖像突出，是全頁唯一的高彩度來源。

---

## Design Tokens (CSS variables)

> 所有數值（間距、字級、圓角、陰影）一律走以下 token；樣式中不得硬編色碼或 magic number。間距採 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32）。

```css
:root {
  /* ── 手機外殼尺寸 ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 47px;       /* iPhone notch 狀態列高 */
  --tabbar-h: 83px;          /* tab bar(49) + home indicator 安全區(34) */
  --miniplayer-h: 56px;      /* 常駐迷你播放列高（疊在 tab-bar 之上） */
  --navbar-h: 44px;          /* 標準 iOS navigation bar */
  --safe-bottom: 34px;       /* home indicator 安全區 */
  --safe-top: 0px;
  --screen-radius: 44px;     /* iPhone 圓角螢幕 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;           /* iOS 標準頁面左右邊距 = --inset */
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --inset: 16px;             /* 頁面與 inset-group 的左右邊距 */

  /* ── 抬升表面層階（iOS Dark elevated surfaces，靠亮度分層）── */
  --bg-base: #000000;        /* OLED 純黑底（最底層 / scroll 背景）*/
  --surface-1: #1C1C1E;      /* 卡片 / 列表列 / 搜尋結果列 */
  --surface-2: #2C2C2E;      /* 浮起 sheet / 已選態 / 巢狀卡 / chip active */
  --surface-3: #3A3A3C;      /* 最上層控制元件 / :active pressed 態 */
  --fill-quaternary: rgba(118,118,128,0.18); /* 搜尋框 / 未選 chip 填色 */
  --fill-pressed: rgba(255,255,255,0.08);    /* 列表列 :active 高亮 */

  /* ── 半透 vibrancy 材質（navbar / tabbar / mini-player）── */
  --material-bar: rgba(20,20,22,0.72);
  --material-mini: rgba(28,28,30,0.82);      /* mini-player 稍實一點，讀得清楚 */
  --material-blur: saturate(180%) blur(20px);

  /* ── 文字（iOS label 階層，純黑底仍 ≥ WCAG AA）── */
  --label-primary: #FFFFFF;                  /* 主要文字 */
  --label-secondary: rgba(235,235,245,0.60); /* 次要：藝人 / 副標 / 時長 */
  --label-tertiary: rgba(235,235,245,0.30);  /* 佔位 / 曲序 / 非當前歌詞 */
  --label-quaternary: rgba(235,235,245,0.18);

  /* ── 系統 accent ── */
  --accent-blue: #0A84FF;    /* iOS dark system blue（互動主色）*/
  --accent-green: #30D158;   /* system green（無損 / 下載完成）*/
  --accent-red: #FF453A;     /* destructive */
  --accent-pink: #FF375F;    /* 強調 / 喜歡 */
  --on-accent: #FFFFFF;

  /* ── 分隔線 hairline ── */
  --separator: rgba(255,255,255,0.08);
  --separator-opaque: #38383A;

  /* ── 圓角 token（一致）── */
  --radius-card: 16px;       /* inset grouped 卡片 / 訂閱卡 */
  --radius-tile: 8px;        /* 專輯封面縮圖 / mini-player 縮圖 */
  --radius-cover: 12px;      /* player 大封面 / detail 大封面 */
  --radius-control: 10px;    /* 搜尋框 / 方形按鈕 */
  --radius-pill: 999px;      /* 膠囊 chip / filled 按鈕 */

  /* ── 陰影 token（深色下陰影極弱，主要靠表面亮度差）── */
  --shadow-none: none;
  --shadow-card: 0 1px 0 rgba(255,255,255,0.03);   /* 卡頂極細高光 */
  --shadow-sheet: 0 -1px 0 rgba(255,255,255,0.04), 0 8px 30px rgba(0,0,0,0.6);
  --shadow-cover: 0 16px 40px rgba(0,0,0,0.7);     /* 大封面落影 */
  --shadow-bar: 0 -0.5px 0 rgba(255,255,255,0.10); /* bar 頂 hairline 高光 */

  /* ── 字體（SF Pro 為主，中文回退；不外連字型）── */
  --font-text: -apple-system, 'SF Pro Text', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-display: -apple-system, 'SF Pro Display', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;

  /* ── 過場時間（微互動）── */
  --dur-fast: 120ms;
  --dur-base: 220ms;
  --ease-ios: cubic-bezier(0.32, 0.72, 0, 1);   /* iOS 標準 spring-like */
}
```

---

## Typography Scale（手機字級，對應 iOS Dynamic Type）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 28px / 1.18 / 700 / 0.01em | home / library / profile 頁的大標題（「迴聲 Resona」「音樂庫」「我的」）|
| title-2 | 22px / 1.25 / 700 / 0 | detail 專輯名、player 曲名、訂閱方案價格 |
| section | 20px / 1.3 / 700 / 0.01em | 區段標題（「為你精選歌單」「熱門排行」「最近播放」）|
| headline | 17px / 1.3 / 600 / -0.01em | 列表列主文字（歌名 / 歌單名 / 方案名 / mini-player 歌名）|
| body | 15px / 1.4 / 400 / -0.01em | 一般內文、搜尋結果次行、按鈕文字 |
| subhead | 13px / 1.35 / 400 / 0 | 藝人名、副標、列表 secondary、「查看全部」、mini-player 藝人 |
| caption | 11px / 1.3 / 500 / 0.02em | tab-bar 標籤、徽章、時長、播放次數、曲序 |

- 字色用 label 階層：主文字 `--label-primary`、次要資訊 `--label-secondary`、佔位/裝飾 `--label-tertiary`。
- large-title / title-2 / section 用 `--font-display`；其餘用 `--font-text`。
- **不溢出**：歌名 / 歌單名 / 藝人名一律 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`（或 2 行 `-webkit-line-clamp`），避免長字串撐破列寬。
- 即使純黑底，所有文字對比都需 ≥ WCAG AA：白字 `#FFF` 對 `#000` 為 21:1，`--label-secondary`（60% 白）對 `#1C1C1E` ≈ 8:1，皆合格。`--label-tertiary` 僅用於非關鍵裝飾文字（曲序、佔位），不承載必抄字串的唯一可讀來源。

---

## Component & Layout（逐屏內容密度規範）

整頁是單一固定 iPhone 外框（390×844、圓角 `--screen-radius`、底色 `--bg-base` 純黑）：

```
.device（純黑殼，鎖 390×844，overflow:hidden）
├── .statusbar      ← position:absolute top:0，永遠在頂，z 高
├── .screens        ← 中間唯一可捲動區（flex:1, overflow-y:auto）；同時只顯示一個 .screen
│     home / search / detail / player / library / profile（class toggle 切換）
├── .miniplayer     ← 疊在 tab-bar 正上方，常駐於 home/search/library/profile；player 屏隱藏
└── .tabbar         ← position:absolute bottom:0，永遠在底，z 高
```

**版面鐵律（無跑版）**：
- `.device` 鎖 `width:390px; height:844px; overflow:hidden`，內容被裁成 iPhone 圓角。
- `.statusbar` 永遠在頂、`.tabbar`（含其上的 `.miniplayer`）永遠在底，皆 `position:absolute` 釘在裝置殼上、`z-index` 高於內容。
- 中間 `.screens` 是唯一垂直捲動容器，`padding-top` 預留 `--statusbar-h`、`padding-bottom` 預留 `calc(--tabbar-h + --miniplayer-h + --space-2)`，確保**內容永不被 status-bar / tab-bar / mini-player 遮住**。
- 任何文字加 ellipsis 防溢出；任何列高足夠（song-row ≥ 56px）；左右邊距至少 `--inset`（16px），不貼齊螢幕邊。

### status-bar（固定頂部，每屏共用）
高 `--statusbar-h`。左：時間 `9:41`（17px / 600，白字，**在可見文字**）。右：訊號格 + Wi-Fi + 電量符號（inline SVG 或 unicode 小圖示，純白）。背景透明（疊在純黑/內容上）；`padding: 0 26px 6px`，底對齊。

### home（首頁，3+ 區段）
- **navbar 區**：large-title「迴聲 Resona」（左對齊），右側圓形頭像（`--surface-2` 圓 + 首字）。
- **分類 chip 列**：4 個 chip `華語 / 獨立 / 電子 / 放鬆`（橫向，`--fill-quaternary` 膠囊；點擊切 active 態變 `--surface-2`）。
- **區段 1 —「每日迴聲」每日推薦 banner**：寬幅卡（封面 `assets/cover-1.webp` + 漸層遮罩 + 標題「每日迴聲」+ 副標「個人化每日推薦・每天 06:00 更新」+ 角落播放圓鈕）。露出核心功能名「個人化每日推薦」。
- **區段 2 —「為你精選歌單」橫向卡牆**：section 標題 + 右側「查看全部 ›」。橫向滑動 7 張歌單卡，**全部列出** `浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻`——每卡 = 方形封面 `assets/cover-N.webp`（N 循環 1–6，圓角 `--radius-tile`）+ 歌單名（headline，ellipsis）+ 副標（subhead，如曲數）。
- **區段 3 —「熱門排行」/「最近播放」清單**：section 標題 + 「查看全部 ›」。inset-group 編號清單（5–6 列），左縮圖 + 中歌名（從 9 歌名取）+ 藝人（從 5 藝人取）+ 右時長。再露出小功能卡「無損音質串流」「跨裝置接續播放」。
- 每張卡 / 每列 → 點擊切到 `detail`。

### search（搜尋）
- **搜尋框**：`--fill-quaternary` 填色、圓角 `--radius-control`、內含放大鏡 + placeholder「藝人、歌曲或歌單」。
- **4 分類 chip**：`華語 / 獨立 / 電子 / 放鬆`（膠囊）。
- **熱門歌曲**：section 標題「熱門歌曲」+ 編號清單（inset-group），每列：左**編號**（caption，`--label-tertiary`）+ 中歌名（headline）+ 藝人（subhead）+ 右**時長**（caption，如 03:12 / 02:47 / 04:05）。露出多首歌名〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉與藝人 `海平面樂團`、`Echo Lab`、`何遠`、`夜行列車`。
- **熱門藝人**：section 標題「熱門藝人」+ 橫向圓形頭像卡（藝人名於下，`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠`）。
- 歌曲列 → 點擊切到 `player`；藝人卡 → 切到 `detail`。

### detail（專輯詳情）
- **返回鍵**（navbar 左，`‹` + system blue），右側「⋯」更多。
- **大封面** `assets/cover-3.webp`（置中，寬約 220px，圓角 `--radius-cover` + `--shadow-cover`）。
- **專輯資訊**：專輯名 `島嶼晨光`（title-2）、藝人 `林知夏`（subhead，`--accent-blue`）、**年份・曲目數・總時長** 一行（`2026・9 首・31 分鐘`，caption / secondary）。
- **動作列**：`▶ 播放全部`（filled system blue pill）+ `⤮ 隨機`（次按鈕，`--surface-2` pill）。
- **9 首曲目清單**（inset-group，`島嶼晨光` 曲目，全部 9 首）：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。每列：左**曲序**（caption tertiary）+ 中歌名（headline）+ 藝人（subhead，如 `林知夏`）+ 右**時長**（caption）+ 行尾「⋯」選單鍵 / hover 顯示 ▶。
- 任一曲目列 → 切到 `player`。

### player（正在播放，純黑全屏；**不顯示 mini-player**）
- **返回鍵**（navbar 左，`⌄` 收合）+ 中央「正在播放・島嶼晨光」+ 右「⋯」。
- **大正方形封面** `assets/cover-3.webp`（近滿寬，圓角 `--radius-cover` + `--shadow-cover`）。
- **曲目資訊**：曲名〈晚風練習曲〉（title-2）+ 藝人 `林知夏`（subhead）+ 專輯 `島嶼晨光`（subhead tertiary）+ 右側 ♡ 喜歡鍵（`--accent-pink` active）。
- **進度條**：細長 track（`--surface-2`）+ 已播 fill（白）+ 拖曳圓點；兩端時長 `00:42`（目前）/ `02:47`（總長）。
- **控制列**：上一首 `⏮` + **播放/暫停**大圓鈕（白填，內含 ▶/⏸ 兩態，點擊切換）+ 下一首 `⏭`，左右各一 `⤮ 隨機` / `🔁 循環`（active 態 system blue）。
- **次列**：音質徽章「無損音質串流」（`--accent-green` 圓角小標）+ 音量列（喇叭 icon + track）。
- **歌詞同步**：3–4 行歌詞，**當前行白色高亮（headline）**、其餘 `--label-tertiary`；露出功能名「歌詞同步」。

### library（音樂庫）
- large-title「音樂庫」。
- **分頁 chip**：`歌單 / 專輯 / 已下載`（segmented，active 態 `--surface-2`）。
- **收藏歌單清單**（inset-group）：列出數個歌單（`浪潮回聲 / 雨後散步 / 城市心跳 / 失重時刻`），每列 = 封面縮圖 + 標題（headline）+ **曲數**（subhead，如「24 首」）+ chevron `›`。
- **功能列**（inset-group）：`離線下載`（leading icon + headline + 右「已下載 12 首」+ ›）、`共享音樂庫`（icon + headline + 「Family・6 人」+ ›）。露出功能名「離線下載」「共享音樂庫」。
- 歌單列 → 切到 `detail`。

### profile（我的）
- **使用者卡**（inset-group）：頭像 + 名稱 + `@resona` 帳號 + 「Plus 會員」徽章。
- **播放偏好**（inset-group）：`跨裝置接續播放`（headline + 右 iOS toggle 開關，預設開）、`無損音質串流`（headline + toggle）、`歌詞同步`（headline + toggle）。露出 3 個功能名。
- **3 訂閱方案卡**（inset grouped，同屏）：
  - `免費`＝`NT$ 0 ／月`（標「目前方案」）
  - `Plus`＝`NT$ 149 ／月`（標「推薦」，卡用 `--accent-blue` 邊框強調）
  - `Family`＝`NT$ 249 ／月`
  三方案名與三價格須**一字不差同屏**；推薦/目前方案以邊框或徽章強調。

### mini-player（迷你播放列，常駐）
- 疊在 tab-bar 正上方，高 `--miniplayer-h`，半透 vibrancy 材質（`--material-mini` + blur），頂端 hairline。
- 內容：左封面縮圖（`assets/cover-3.webp`，`--radius-tile`）+ 歌名〈晚風練習曲〉（headline，ellipsis）+ 藝人 `林知夏`（subhead）+ 右**播放/暫停鍵**（▶/⏸ 兩態）。
- 顯示於 **home / search / library / profile**；**player 屏隱藏**（`.screen-player.active` 時 `.miniplayer { display:none }`）。
- **點擊本體（非播放鍵）→ 展開到 `player`**；點播放鍵只切 ▶/⏸ 不換屏。

### tab-bar（固定底部，每屏共用）
高 `--tabbar-h`、半透 vibrancy（`--material-bar` + blur）、頂端 hairline。4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每 tab = SF Symbol 風格 inline SVG icon + caption。active tab icon 與標籤用 `--accent-blue`，非 active 用 `--label-secondary`。底部留 `--safe-bottom` home indicator 安全區。

---

## Micro-interactions（微互動，產品級回饋）

- **所有可點元素** `cursor: pointer`，且有明確 `:hover` 與 `:active`。
- **列表列 / 卡片** `:active` → 背景升到 `--fill-pressed` 或 `--surface-2`（按下回饋），`transition: background var(--dur-fast)`。
- **filled 按鈕**（播放全部 / pill）`:active` → `transform: scale(0.96); opacity: 0.85`。
- **播放鍵** 有 ▶ / ⏸ 兩態，由 JS toggle class 切換圖示。
- **tab / 分頁 chip / 分類 chip** 有 active 視覺：active tab 文字+icon 變 `--accent-blue`；active chip 背景 `--surface-2`。
- **mini-player** 整列 `:active` 微微提亮（`--surface-3`）。
- 凡用 `transition` 一律只動 `transform` / `opacity` / `background-color`，且**必附 `@media (prefers-reduced-motion: reduce)`** 關閉。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 背景用 OLED 純黑 `#000`，卡片/列表用 `#1C1C1E` 抬升灰，pressed 升到 `#3A3A3C` | 用深灰 `#121212` 當底（那是 Material 不是 iOS dark）|
| 用「表面亮度差 + 極弱高光陰影」表達層級（surface-1/2/3） | 在深色下加強烈 box-shadow 或粗邊框分層 |
| 互動色一律 system blue `#0A84FF`；無損/完成用 green `#30D158` | 撿不屬於 iOS 系統色盤的飽和紫 / 橘當主 accent |
| navbar / tab-bar / mini-player 用半透 `rgba` + `backdrop-filter: blur` | 把 bar 做成不透明實心黑（失去 vibrancy 質感）|
| mini-player 常駐於 4 屏、player 屏隱藏，點擊展開到 player | 在 player 屏也疊一條 mini-player（重複、跑版）|
| 分隔線用 `rgba(255,255,255,0.08)` 1px hairline | 用 `#444` 的粗實線當分隔 |
| 列表用 inset grouped 圓角卡（左右留 16px 邊距）| 列表貼齊螢幕兩側無邊距、無圓角 |
| 每個可點元素加 `:hover`/`:active` 與 `cursor:pointer` | 卡片/列「看似可點卻沒回饋」|
| 專輯封面是全頁唯一高彩度焦點，保持飽和 | 給封面套灰濛濛 overlay 削弱對比 |
| 文字用 label 階層 + ellipsis 防溢出 | 用同一個灰色不分主次、長字串撐破列寬 |

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="...">`**，唯一 id、固定順序、各出現恰一次：`status-bar → home → search → detail → player → library → profile → tab-bar`（`data-screen` 屬性是驗證辨識依據，務必每屏都加，勿只給 `id`）。
- **`<body data-viewport="mobile">`** 必須存在。
- **status-bar 顯示 `9:41`**；**tab-bar 四 tab**：`首頁 / 搜尋 / 音樂庫 / 我的`（active 態高亮）。
- 三層訂閱方案與**精確價格字串**須同屏出現（profile）：`免費`＝`NT$ 0 ／月`、`Plus`＝`NT$ 149 ／月`、`Family`＝`NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。
- 品牌「迴聲 / Resona」、6 核心功能名（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單名、9 歌名、5 藝人名、4 分類 chip 皆須出現在**可見 body 文字**（不可只放在 `aria-label` / `data-*`）。
- **可互動多畫面導覽**（vanilla inline JS，inline `<script>` ≤ 8 KB）：
  1. status-bar + tab-bar + mini-player 為持久外框；6 個內容畫面同時只顯示一個，**預設 `home`**。
  2. tab 切換 home / search / library / profile（同步 active 態）。
  3. 卡片 / 歌單列 → `detail`；曲目列 / mini-player 本體 → `player`；mini-player 播放鍵只切 ▶/⏸。
  4. `detail` 與 `player` 頂部有**返回鍵**回上一畫面。
  5. player 屏隱藏 mini-player；其餘屏顯示。
  6. 所有看似可點的元素都有真實 click handler + `cursor:pointer` + `:hover`/`:active`。
- 單檔 HTML **≤ 200 KB**（不含 `assets/` 圖片）；**無外部 CDN**（`<link>`/`<script>`/`<img>` 的 src/href 不可 `http://` 或 `https://`）；圖片一律相對路徑 `assets/<filename>.webp`。
- 繁體中文；不可使用任何 framework CSS（Tailwind 等），全以本檔 CSS 變數驅動；WCAG AA 對比。
- 若使用任何 `@keyframes` / `transition`，須附 `@media (prefers-reduced-motion: reduce)` 區塊關閉動畫，且只動 `transform` / `opacity`。
- JS 失敗或 reduced-motion 模式下內容仍完整可讀（預設可見即 home）。

---

## Required Images

使用**真實風格的方形專輯封面圖** 6 張，放在 `assets/`：`cover-1.webp` … `cover-6.webp`（各 600×600，抽象、無文字、無 logo，適合在純黑深色 UI 上發光的飽和氛圍，見 `assets-manifest.json`）。

用法：
- **home 每日迴聲 banner**：`assets/cover-1.webp`（加底部漸層遮罩）。
- **home 歌單卡牆**：7 張歌單卡的封面循環使用 `cover-1`…`cover-6`（第 7 張回到 `cover-1`）。
- **detail 主打專輯 `島嶼晨光`** 與 **player 大封面** 與 **mini-player 縮圖**：固定用 `assets/cover-3.webp`（呼應「正在播放即此專輯」）。
- **search / library** 縮圖：循環取用 6 張任一。
- **Fallback**：若圖檔不存在，封面以 CSS 漸層色塊替代（深色系飽和漸層，如 `linear-gradient(135deg, #0A84FF, #FF375F)`），維持封面在純黑上的高彩度突出感；可用 `background: var(--cover-fallback), url('assets/cover-N.webp')` 疊放，圖載入時自然覆蓋漸層。

---

## Reference Snippet

可直接套用的 CSS（≥ 60 行；體現 iOS 深色：純黑底 + 階梯抬升表面 + 半透 vibrancy bar/mini-player + inset 列表 + 大封面 + 進度條 + 訂閱卡 + 微互動 + reduced-motion）：

```css
/* 手機外殼：純黑、圓角螢幕、固定寬置中、釘住三層外框 */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--bg-base);                 /* OLED 純黑 */
  border-radius: var(--screen-radius);
  overflow: hidden;
  color: var(--label-primary);
  font-family: var(--font-text);
}

/* 狀態列：絕對釘頂、疊在內容上、左時間右符號 */
.statusbar {
  position: absolute; inset: 0 0 auto 0; z-index: 40;
  height: var(--statusbar-h);
  display: flex; align-items: flex-end; justify-content: space-between;
  padding: 0 26px 6px;
  font-size: 17px; font-weight: 600;
  background: transparent; pointer-events: none;
}
.statusbar .indicators { display: flex; gap: 6px; align-items: center; }

/* 唯一可捲動內容區：上下預留 status-bar / tab-bar+mini-player */
.screens {
  position: absolute; inset: 0;
  overflow-y: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none;
  padding-top: var(--statusbar-h);
  padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--space-2));
}
.screens::-webkit-scrollbar { display: none; }
.screen { display: none; padding: 0 var(--inset); }
.screen.active { display: block; }
.screen-player.active { padding: 0 var(--inset); }   /* player 時隱藏 mini-player */
.device:has(.screen-player.active) .miniplayer { display: none; }

/* 區段標題 + 查看全部 */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--space-6) 0 var(--space-3);
}
.section-head h2 { font: 700 20px/1.3 var(--font-display); }
.section-head a { font-size: 13px; color: var(--accent-blue); cursor: pointer; }

/* iOS 分組插入式表格 + 列（微互動：按下提亮）*/
.inset-group {
  margin: var(--space-2) 0 var(--space-6);
  background: var(--surface-1);
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  min-height: 56px; padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--separator);
  cursor: pointer;
  transition: background-color var(--dur-fast) var(--ease-ios);
}
.song-row:last-child { border-bottom: none; }
.song-row:active { background: var(--fill-pressed); }
.song-row .idx { color: var(--label-tertiary); font-size: 11px; min-width: 18px; text-align: center; }
.song-row .meta { min-width: 0; flex: 1; }
.song-row .title {
  font-size: 17px; font-weight: 600; color: var(--label-primary);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.song-row .artist {
  font-size: 13px; color: var(--label-secondary);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.song-row .dur { margin-left: auto; font-size: 11px; color: var(--label-tertiary); }

/* 橫向歌單卡牆 */
.card-rail { display: flex; gap: var(--space-3); overflow-x: auto; scrollbar-width: none; }
.card-rail::-webkit-scrollbar { display: none; }
.playlist-card { flex: 0 0 150px; cursor: pointer; }
.playlist-card:active { transform: scale(0.97); }
.cover-tile {
  width: 100%; aspect-ratio: 1; border-radius: var(--radius-tile); object-fit: cover;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink)); /* fallback */
}
.playlist-card .name {
  margin-top: var(--space-2); font-size: 17px; font-weight: 600;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.playlist-card .sub { font-size: 13px; color: var(--label-secondary); }

/* 分類 chip（quaternary fill 膠囊，active 態升表面）*/
.chip {
  display: inline-flex; align-items: center; padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-pill); background: var(--fill-quaternary);
  color: var(--label-primary); font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background-color var(--dur-fast);
}
.chip.active { background: var(--surface-2); }
.chip:active { background: var(--surface-3); }

/* player 大封面 + 進度條 + 控制 */
.now-playing .cover-art {
  width: 100%; aspect-ratio: 1; border-radius: var(--radius-cover);
  object-fit: cover; box-shadow: var(--shadow-cover);
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-pink));
}
.progress { height: 4px; border-radius: 2px; background: var(--surface-2); overflow: hidden; }
.progress > i { display: block; height: 100%; width: 25%; background: var(--label-primary); }
.play-btn {
  width: 64px; height: 64px; border-radius: var(--radius-pill);
  background: var(--label-primary); color: #000; border: none;
  display: grid; place-items: center; font-size: 26px; cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-ios);
}
.play-btn:active { transform: scale(0.94); }
.lossless-badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  padding: 3px var(--space-2); border-radius: var(--radius-pill);
  background: rgba(48,209,88,0.16); color: var(--accent-green);
  font-size: 11px; font-weight: 600;
}
.lyric-line { color: var(--label-tertiary); font-size: 15px; line-height: 1.8; }
.lyric-line.current { color: var(--label-primary); font-size: 17px; font-weight: 600; }

/* 常駐 mini-player：半透 vibrancy，疊在 tab-bar 正上方 */
.miniplayer {
  position: absolute; left: 0; right: 0;
  bottom: var(--tabbar-h); z-index: 35;
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--space-3);
  padding: 0 var(--space-3);
  background: var(--material-mini);
  -webkit-backdrop-filter: var(--material-blur); backdrop-filter: var(--material-blur);
  box-shadow: var(--shadow-bar);
  cursor: pointer; transition: background-color var(--dur-fast);
}
.miniplayer:active { background: var(--surface-3); }
.miniplayer img { width: 40px; height: 40px; border-radius: var(--radius-tile); object-fit: cover; }
.miniplayer .mp-meta { min-width: 0; flex: 1; }
.miniplayer .mp-title { font-size: 15px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .mp-artist { font-size: 13px; color: var(--label-secondary); }
.miniplayer .mp-play { margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center; color: var(--label-primary); cursor: pointer; }

/* 半透 vibrancy tab-bar（釘底）*/
.tabbar {
  position: absolute; inset: auto 0 0 0; z-index: 40;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  display: flex;
  background: var(--material-bar);
  -webkit-backdrop-filter: var(--material-blur); backdrop-filter: var(--material-blur);
  box-shadow: var(--shadow-bar);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; font-size: 11px; font-weight: 500; color: var(--label-secondary);
  cursor: pointer; transition: color var(--dur-fast);
}
.tabbar .tab.active { color: var(--accent-blue); }

/* system blue 主要按鈕 + 次按鈕 */
.btn-blue {
  background: var(--accent-blue); color: var(--on-accent); border: none;
  border-radius: var(--radius-pill); padding: 12px 22px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-ios), opacity var(--dur-fast);
}
.btn-blue:active { transform: scale(0.96); opacity: 0.85; }
.btn-secondary { background: var(--surface-2); color: var(--label-primary); border: none;
  border-radius: var(--radius-pill); padding: 12px 22px; font-size: 15px; font-weight: 600; cursor: pointer; }
.btn-secondary:active { background: var(--surface-3); }

/* 訂閱方案卡（推薦 = blue 邊框強調）*/
.plan-card {
  background: var(--surface-1); border: 1px solid var(--separator);
  border-radius: var(--radius-card); padding: var(--space-4);
  margin-bottom: var(--space-3);
}
.plan-card.featured { border-color: var(--accent-blue); }
.plan-card .price { font: 700 22px/1.25 var(--font-display); }
.plan-card .tag {
  font-size: 11px; font-weight: 600; color: var(--accent-blue);
  padding: 2px var(--space-2); border-radius: var(--radius-pill);
  background: rgba(10,132,255,0.16);
}

/* iOS toggle（播放偏好）開關 active 態 */
.ios-toggle { width: 51px; height: 31px; border-radius: var(--radius-pill); background: var(--surface-3); position: relative; cursor: pointer; }
.ios-toggle.on { background: var(--accent-green); }
.ios-toggle i { position: absolute; top: 2px; left: 2px; width: 27px; height: 27px; border-radius: 50%; background: #fff; transition: transform var(--dur-base) var(--ease-ios); }
.ios-toggle.on i { transform: translateX(20px); }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
