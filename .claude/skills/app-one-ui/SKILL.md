---
name: app-one-ui
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Samsung One UI style. Triggers on One UI、One UI 6、Samsung、三星介面、單手友善、單手可達、bottom-heavy、上半留白、大粗標題、柔和大圓角、藍 accent。
user-invocable: true
---

# One UI — 迴聲 Resona

## Style Philosophy

Samsung One UI（特別是 One UI 6）的核心命題是「**把大螢幕手機交還給單手**」。它的招牌做法是：**畫面頂部留一塊「適度」的留白標題區（viewing area）**，放一個超大、超粗的標題；把搜尋框、卡片、按鈕、列表往拇指自然弧線可達的下半（interaction area）安排。整體調性柔和、安靜、舒適——淺灰白底、寬鬆呼吸間距、柔和大圓角白卡、極淺陰影，唯一鮮明色彩是品牌藍 accent，只在 active / 主按鈕 / 選取態 / 進度條出現。

在「迴聲 Resona」音樂串流 App 中，這風格要表現「**從容、好按、不吵**」——巨大歡迎標題佔住頂部一小段，歌單卡牆與曲目列在其下舒展，配色克制，唯有正在播放的進度條與底部 active tab 透出那一抹藍。

三個視覺辨識特徵：
1. **頂部適度留白 + 超大粗標題**：每屏頂部一塊 large-title 區，**高度只佔可視內容區的 18–26%（約 130–180px），絕不佔滿整個 viewport**。標題字級 28px、字重 700、行高緊湊，標題下方緊接內容。
2. **柔和大圓角白卡 + 淺灰白底**：背景 `#F2F4F7`、卡片純白 `#FFFFFF`、圓角 20–28px、陰影極淺（靠底色對比分層），元件間 12–24px 間距。
3. **單一藍 accent `#0F62FE`**：只在主 CTA、active tab、進度條已播段、選取 chip、開關打開態、迷你播放鍵出現；其餘一律中性灰。

### 致命跑版警告（必讀，本風格最容易壞在這）

> 本風格過去出現「**6 個內容屏全部空白，只剩頂部標題與底部 tab bar**」的嚴重跑版。根因是把「上半留白」做過頭，導致：
> (A) large-title 區把整個 viewport 佔滿，內容被擠到 844px 視窗以外；
> (B) 內容顏色太接近白色、低對比，看起來像空白；
> (C) `.screen-scroll` 沒給高度 / 沒能捲動，下方內容看不到。

**必守三條鐵律修法：**
1. **large-title 區高度上限 = 180px**（用 `max-height`/固定高），**禁止 `height: 100%` / `flex: 1` / `min-height: 60vh` 之類把它撐滿**。留白只是「標題上方多一點 padding-top」，不是「整屏空白」。
2. **每個 `data-screen` 內容屏，large-title 之下必須有實際、可見、對比充足的內容**（卡片、清單、按鈕），且這些內容在 390×844 視窗內第一眼就看得到一部分。
3. **正文、標題用 `--text`（近黑）或 `--text-2`（中灰），絕不用 `--text-3` 或接近白色的淺灰當主要內容文字**。卡片底是白 `#FFFFFF`、頁底是灰白 `#F2F4F7`，兩者有可辨識對比。

## Design Tokens (CSS variables)

```css
:root {
  /* ===== 裝置殼尺寸（鎖死，不可變）===== */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;
  --miniplayer-h: 56px;         /* tab-bar 上方常駐迷你播放列 */
  --safe-bottom: 20px;          /* home indicator 安全區 */
  --device-radius: 46px;        /* 圓角螢幕 */

  /* ===== One UI 頂部留白標題區（高度受控，禁止撐滿）===== */
  --largetitle-h: 148px;        /* 頂部 large-title 區高度，約佔可視 18–22% */
  --largetitle-max: 180px;      /* 絕對上限，超過即視為跑版 */
  --pad: 20px;                  /* 全頁左右內距，內容統一對齊此值 */

  /* ===== 色彩（對比已驗，主內容文字一律深色）===== */
  --bg: #F2F4F7;                /* 灰白頁底 */
  --surface: #FFFFFF;          /* 白卡 / 列表底 */
  --surface-2: #FAFBFC;        /* 次層卡（略偏白）*/
  --sunken: #E9ECF1;           /* 搜尋框、chip 未選底、進度條軌 */
  --accent: #0F62FE;           /* 品牌藍，唯一鮮色 */
  --accent-soft: #E3EDFF;      /* 藍柔色：選取 chip 底、active tab 膠囊底 */
  --accent-pressed: #0A4FCC;   /* 按下態 */
  --text: #16181D;             /* 主文字 / 大標題（對白底 > 15:1）*/
  --text-2: #535963;           /* 次要文字（對白底 > 6:1）*/
  --text-3: #8A909B;           /* 第三層：時長、caption（對白底 > 3.5:1，僅次要）*/
  --on-accent: #FFFFFF;        /* 藍底上的字 */
  --divider: #E4E7EC;          /* 分隔線 */

  /* ===== 圓角 ===== */
  --r-card: 26px;              /* 大卡片 */
  --r-sm: 18px;               /* 歌單封面卡 / 小卡 */
  --r-field: 20px;            /* 搜尋框 / 按鈕（柔和半圓）*/
  --r-pill: 999px;            /* chip / tab 膠囊 / 圓鈕 */

  /* ===== 陰影（極淺，One UI 幾乎只靠底色分層）===== */
  --shadow-card: 0 1px 4px rgba(20,22,26,.05);
  --shadow-raised: 0 6px 18px rgba(20,22,26,.10);   /* 迷你播放列 / 大圓鈕 */

  /* ===== 8pt 間距尺度（4/8/12/16/20/24/32）===== */
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 20px;
  --s-6: 24px;
  --s-8: 32px;

  --font: 'SamsungOne', 'PingFang TC', 'Noto Sans TC', 'Roboto', system-ui, sans-serif;
}
```

## Typography Scale（行高 / 字重 / 字距完整）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 28px / 1.2 / 700 / -0.01em | 頂部 large-title 區的超大粗標題 |
| title | 22px / 1.25 / 700 / -0.005em | 區段大標、player 曲名、detail 專輯名 |
| section | 18px / 1.3 / 700 / 0 | 「為你精選歌單」「熱門排行」等區段標題 |
| headline | 16px / 1.35 / 600 / 0 | 卡片標題、歌單名、列表主標 |
| body | 15px / 1.5 / 400 / 0 | 一般內文、藝人名 |
| label | 13px / 1.4 / 500 / 0 | chip、按鈕、tab 標籤、次要說明 |
| caption | 11px / 1.35 / 500 / 0.01em | 時長、播放次數、徽章、status-bar 細節 |

字距：large-title / title 大字微收緊；其餘 0。**禁止把主標題或正文設成 `--text-3` 等淺灰，避免低對比看似空白。**

## Layout Rules（嚴格鎖版，這是防跑版的關鍵）

裝置三層固定結構，**高度分配寫死**：

```
.device (390 × 844, overflow:hidden, display:flex, flex-direction:column)
├── .statusbar      高 44px，固定頂，flex:0 0 auto，永遠在最上
├── .screen-scroll  flex:1 1 auto, min-height:0, overflow-y:auto   ← 唯一可捲動內容區
│     每個 .screen（home/search/detail/player/library/profile）：
│       .largetitle  高 ≤180px（受 --largetitle-h 控制）
│       下方內容卡 / 清單 / 按鈕（實際內容，對比充足）
└── .dock           固定底，flex:0 0 auto，永遠在最下
      ├── .miniplayer 高 56px（home/search/library/profile 顯示；player/detail 可隱）
      └── .tabbar     高 60px + safe-bottom，4 tab
```

**鎖版鐵律（逐條檢查，違反即跑版）：**
1. `.device` 鎖 `width:390px; height:844px; overflow:hidden`，內部一律相對它定位，不可超出。
2. `.screen-scroll` 必須 `flex:1 1 auto; min-height:0; overflow-y:auto`——**`min-height:0` 不可漏**，否則 flex 子項撐高導致無法捲動 / 內容被推走。
3. `.largetitle` 用 `min-height:var(--largetitle-h); max-height:var(--largetitle-max)`，**禁止 `flex:1`、`height:100%`、`min-height:50vh`**。它只是「標題 + 上方 padding」，不是整屏空白。
4. `.screen-scroll` 底部 `padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--s-4))`，確保最後一列不被 dock 遮住。
5. 所有文字容器 `min-width:0`，長文字 `overflow:hidden; text-overflow:ellipsis; white-space:nowrap`（單行）或正常換行（多行），**不得溢出卡片或被裁切**。
6. 卡片、清單列左右內距至少 `--s-4`（16px）以上，內容不貼邊。
7. 每個內容屏 large-title 之下**至少要有一塊在 844px 視窗內可見的內容**（第一眼非空白）。

## Component & Layout（逐屏內容，密度要夠）

> 通則：每屏頂部 `.largetitle`（高 ≤180px，標題壓底）→ 其下緊接內容。所有內容左右對齊 `--pad`（20px）。**禁止整屏空白。**

### status-bar（`data-screen="status-bar"`）
頂部固定列，高 44px。左 **9:41**；右側依序訊號格、Wi‑Fi、電量（unicode 或 inline SVG）。背景與頁底融合，文字 `--text`，字重 600。每頁固定，不可省。

### home（`data-screen="home"`）
- **large-title**：「迴聲 Resona」+ 一行副標 slogan（如「為你而聲，島嶼的迴響」），副標用 `--text-2`。
- **分類 chip 橫排**：`華語 / 獨立 / 電子 / 放鬆`，當前 active 為藍膠囊（`--accent-soft` 底 + `--accent` 字）。
- **區段 1「每日迴聲」**：區段標題（section）+「查看全部 ›」。一張大圓角白卡 banner：左方形封面（`assets/cover-1.webp`）+ 右側「每日迴聲」標題、一句推薦文案、藍色「立即播放」小按鈕。
- **區段 2「為你精選歌單」**：區段標題 +「查看全部 ›」。2 欄 grid 歌單卡牆，列出全部 7 個歌單名：`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻`。每張 `.album-card`：封面（`assets/cover-N.webp`，N=1..6 循環，第 7 張重用）+ 封面下歌單名（headline）+ 一行 caption（如「24 首・1 小時 38 分」）。
- **區段 3「熱門排行」**：區段標題 +「查看全部 ›」。編號清單 `.song-row`，列 5–6 首：左排名數字、中歌名(headline)+藝人(label)、右時長(caption)+播放鍵。歌名取自 9 歌名集合，藝人取自 5 藝人集合。
- **功能露出**：在某張卡或 caption 帶出 6 核心功能名（無損音質串流 / 離線下載 / 跨裝置接續播放 / 歌詞同步 / 共享音樂庫 / 智慧每日推薦）。

### search（`data-screen="search"`）
- **large-title**：「搜尋」。
- **searchbar**：`--sunken` 底、`--r-field`、左放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」。
- **4 分類 chip**：`華語 / 獨立 / 電子 / 放鬆`。
- **區段「熱門歌曲」**：編號 `.song-row` 清單（含時長），列多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉…），每列序號 + 歌名 + 藝人 + 時長 + 播放鍵。
- **區段「熱門藝人」**：橫向圓形頭像列或 2 欄列，列出 5 藝人名：`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠`，每位帶一行 caption（如「月聽眾 12.4 萬」）。

### detail（`data-screen="detail"`）
- **large-title**：專輯名「島嶼晨光」+ 藝人「林知夏」（藝人用 `--text-2`）。
- **專輯資訊區**：大正方形封面（`assets/cover-3.webp`，`--r-card`）+ 旁邊或下方 meta：專輯名・林知夏・2026・9 首・38 分鐘。
- **動作列**：藍底膠囊「播放全部」`.btn-primary` + 圈框「隨機播放」按鈕（含 🔀）。
- **9 首曲目列**：`.song-row` 逐列列出全部 9 首：`藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三`。每列：左曲序、中歌名(headline)+藝人(label)、右時長(caption)+行尾選單 ⋯ 或播放 ▶。
- **返回鍵**：large-title 區左上一個返回箭頭（‹），點擊回上一屏。

### player（`data-screen="player"`，**本屏不顯示迷你播放列**）
- **large-title**：「正在播放」+ 左上返回鍵（▾ 收合）。
- **大正方形專輯封面**：`assets/cover-3.webp`，`--r-card`，置中、佔較大空間（但不可把下方控制推出視窗，封面寬約 = 內容寬，高 aspect-ratio:1 但整屏可捲）。
- **曲目資訊**：曲名〈晚風練習曲〉(title) + 藝人「林知夏」(body) + 專輯「島嶼晨光」(label)。
- **歌詞同步**：一行逐字高亮歌詞示意（active 字上藍 `--accent`，其餘 `--text-3`），下一行 `--text-2`。
- **進度條** `.progress`：軌 `--sunken`、已播段 `--accent`、圓 thumb；左 `01:02` / 右 `02:47`。
- **控制列**：隨機 🔀 / 上一首 ⏮ / 播放暫停大藍圓鈕（▶ ⇄ ⏸ 兩態）/ 下一首 ⏭ / 循環 🔁。
- **底部列**：音量或「無損 Hi-Res」音質徽章（藍邊膠囊）+ 歌詞 / 佇列 icon。

### library（`data-screen="library"`）
- **large-title**：「音樂庫」。
- **分頁 chip**：`歌單 / 專輯 / 已下載`（當前 active 藍膠囊）。
- **收藏歌單清單**：`.song-row` 樣式，左封面縮圖 + 歌單名（再次列出「浪潮回聲」「失重時刻」「島嶼晨光」「深夜公路」等）+ caption「N 首・建立者」。
- **離線下載入口列**：下載 icon + 「離線下載」+ caption「已下載 18 首・142 MB」。
- **共享音樂庫入口列**：人群 icon + 「共享音樂庫」+ 徽章「Family 方案」。

### profile（`data-screen="profile"`）
- **large-title**：「我的」。
- **使用者卡**：圓頭像 + 暱稱（如「島嶼旅人」）+ 「迴聲 Resona・Plus 會員」+ 編輯箭頭。
- **播放偏好設定列**：「無損音質」開關、「**跨裝置接續播放**」開關（打開態藍 `--accent`）。
- **3 張訂閱方案卡**（縱排）：`免費 NT$ 0 ／月`、`Plus NT$ 149 ／月`、`Family NT$ 249 ／月`。每卡：方案名 + 價格(title) + 2–3 條權益列 + 按鈕。**推薦方案 Plus** 用 `--accent` 藍邊框 + 「推薦」徽章；**目前方案** 標「目前方案」灰徽章。價格字串嚴格用 `NT$ 0` / `NT$ 149` / `NT$ 249`（`NT$` 與數字一個半形空格）+ 全形「／月」。

### tab-bar（`data-screen="tab-bar"`，在 `.dock` 內，迷你播放列下方）
固定底部，4 tab：可見文字「**首頁 / 搜尋 / 音樂庫 / 我的**」，icon + label 直排。active（預設首頁）`--accent` 著色 + `--accent-soft` 膠囊底；非 active `--text-3`。上方一道 1px `--divider`，無重陰影。

### mini-player（迷你播放列，常駐於 tab-bar 上方）
- 一條高 56px 的常駐列，**顯示於 home / search / library / profile**；**player 屏隱藏**（player 已是展開態）。
- 內容：左小封面縮圖（`assets/cover-3.webp`）+ 中歌名〈晚風練習曲〉(label) + 藝人「林知夏」(caption) + 右播放/暫停鍵（▶/⏸ 兩態）+ 下一首鍵。
- 點整條（封面/文字）→ 展開到 player 屏；右側播放鍵切換 ▶/⏸ 不展開。
- 視覺：白底 `--surface` + 頂部 1px `--divider` + 極淺 `--shadow-raised`，與 tab-bar 連成一塊 dock。

## Do / Don't

| Do | Don't |
| --- | --- |
| large-title 區高度 ≤180px，只是「標題 + 上方留白」 | 讓 large-title 用 `flex:1` / `100%` / `50vh` 撐滿整屏 |
| large-title 之下緊接實際內容，第一眼可見 | 內容被推到 844px 視窗以外、首屏空白 |
| 主標題 / 正文用 `--text` / `--text-2` 深色 | 用 `--text-3` 或近白淺灰當主要內容，低對比看似空白 |
| `.screen-scroll` 設 `flex:1; min-height:0; overflow-y:auto` | 漏 `min-height:0` 導致無法捲動 |
| 卡片圓角 18–28px、按鈕/搜尋框 20px 柔半圓 | 用方角或銳利小圓角 |
| 陰影極淺，靠頁底灰白與白卡對比分層 | 用深重 box-shadow 堆立體感 |
| 藍 accent 只給 CTA / active / 進度 / 選取 | 整頁灑藍、多處彩色搶眼 |
| 間距走 8pt（12–24px），有呼吸感 | 元件擠成密集列、間距 < 8px 或溢出卡片 |
| dock（迷你播放列 + tab-bar）永遠固定在底 | 讓迷你播放列隨內容捲走 / 遮住內容 |

## Motion Specification（微互動）

- 所有可點元素 `cursor:pointer`，並有明確 `:hover`（背景微亮 / 底色加深）與 `:active`（`transform: scale(.97)` 按下回饋）。
- 播放鍵兩態：`▶`（暫停中）/`⏸`（播放中）；切換時只換字元 + 微 scale。
- tab / 分頁 chip 有 active 視覺（藍膠囊底 + 藍字）。
- 卡片 `:active` 微縮 scale(.98)；歌單卡 `:hover` 抬升 `--shadow-raised`。
- 進度條 thumb 可顯示，已播段寬度由 inline width 控制（如 38%）。
- 一律只動 `transform` / `opacity`，附 `@media (prefers-reduced-motion: reduce)` 全關。

## Accessibility / 防跑版自檢

- 對比：主內容文字（標題、歌名、藝人主標）對其底色 ≥ 4.5:1；caption/時長 ≥ 3:1。
- 鍵盤可達：可點元素用 `<button>` 或加 `tabindex`，焦點環可見。
- reduced motion：關閉所有 transition / animation。
- **跑版自檢**：開頁第一眼，home 屏在 390×844 內必須看到 large-title + 至少「每日迴聲」卡或歌單卡牆的一部分（非空白）；切到其他 5 屏也都各有可見內容。

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- 8 個 `<section data-screen="<id>">`，固定 id 與順序：`status-bar → home → search → detail → player → library → profile → tab-bar`，每個唯一、各出現恰一次。
- `<body data-viewport="mobile">` 必須存在。
- status-bar 顯示 **9:41**。
- tab-bar 四 tab 可見文字「首頁 / 搜尋 / 音樂庫 / 我的」。
- 三層定價精確字串同屏出現：`免費 NT$ 0 ／月`、`Plus NT$ 149 ／月`、`Family NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。
- **常駐迷你播放列**：在 home/search/library/profile 上方（tab-bar 之上）顯示，player 屏隱藏。
- **可互動多畫面導覽**：tab 切換 4 屏 + 歌單卡/排行列 → detail + 曲目列/迷你播放列 → player + detail/player 有返回鍵回上一屏。用純 CSS（`:target` / radio + label / `:checked`）或 ≤8KB inline JS 實作切換。
- 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、底部 4 tab 文字皆需出現在**可見 body 文字**中（不可只放 `aria-label` / `data-*`）。
- 單檔 HTML ≤ 200 KB（不含 `assets/` 圖片）、**無外部 CDN**（`<link>`/`<script>`/`<img>` 不可 `http(s)://` 開頭）、圖片用相對路徑 `assets/<filename>.webp`。
- 若用任何 `@keyframes` / `transition`，必附 `@media (prefers-reduced-motion: reduce)` 關閉，且只動 `transform` / `opacity`。

## Required Images

使用方形專輯封面圖（見 `assets-manifest.json`，共 6 張 `cover-1.webp`..`cover-6.webp`，size 600×600）：

- **home**「每日迴聲」banner：`assets/cover-1.webp`；歌單卡牆 7 張依序 `cover-1..cover-6`，第 7 張重用任一。
- **detail** 專輯「島嶼晨光」大封面：`assets/cover-3.webp`。
- **player** 大封面 + **mini-player** 縮圖：同 `assets/cover-3.webp`（正在播放屬該專輯）。
- **library** 歌單縮圖：循環使用 `cover-1..cover-6`。
- 全部相對路徑 `assets/cover-N.webp` 引用。
- **Fallback**：圖檔不存在時，封面以 CSS 漸層色塊呈現（`--sunken` → `--accent-soft` 柔和 135deg 漸層），版面不破。**漸層色塊不可全白**，確保與頁底有對比。

## Reference Snippet（≥60 行，可直接用）

```css
* { box-sizing: border-box; }
body { margin: 0; background: #DDE1E7; display: grid; place-items: center; min-height: 100vh; }

/* ===== 裝置殼：鎖死 390×844、三層 flex column ===== */
.device {
  width: var(--screen-w); height: var(--screen-h);
  background: var(--bg); border-radius: var(--device-radius);
  overflow: hidden; position: relative;
  display: flex; flex-direction: column;
  font-family: var(--font); color: var(--text);
}

/* status-bar：永遠在頂，不縮 */
.statusbar {
  flex: 0 0 var(--statusbar-h); height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--pad); font-size: 13px; font-weight: 600;
  background: var(--bg);
}

/* 唯一可捲動內容區：min-height:0 不可漏！ */
.screen-scroll {
  flex: 1 1 auto; min-height: 0; overflow-y: auto;
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--s-4));
}

/* One UI 招牌：頂部適度留白 + 大粗標題（高度受控，禁止撐滿）*/
.largetitle {
  min-height: var(--largetitle-h); max-height: var(--largetitle-max);
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: var(--s-8) var(--pad) var(--s-4);
}
.largetitle h1 { margin: 0; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -.01em; }
.largetitle .sub { margin-top: var(--s-1); font-size: 15px; color: var(--text-2); }

/* 區段標題 + 查看全部 */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: var(--s-5) var(--pad) var(--s-3);
}
.section-head .t { font-size: 18px; font-weight: 700; }
.section-head .more { font-size: 13px; color: var(--accent); cursor: pointer; }

/* 柔和大圓角白卡 */
.card {
  background: var(--surface); border-radius: var(--r-card);
  box-shadow: var(--shadow-card); padding: var(--s-5);
  margin: 0 var(--pad) var(--s-4);
}

/* chip 列（選取才上藍）*/
.chips { display: flex; gap: var(--s-2); padding: 0 var(--pad) var(--s-2); flex-wrap: wrap; }
.chip {
  display: inline-flex; align-items: center; padding: 8px 16px;
  border-radius: var(--r-pill); background: var(--sunken);
  color: var(--text-2); font-size: 13px; font-weight: 500; cursor: pointer;
}
.chip:active { transform: scale(.97); }
.chip[aria-selected="true"], .chip.is-active { background: var(--accent-soft); color: var(--accent); }

/* 歌單卡牆（2 欄）*/
.album-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-4); padding: 0 var(--pad) var(--s-4); }
.album-card { background: var(--surface); border-radius: var(--r-sm); overflow: hidden; box-shadow: var(--shadow-card); cursor: pointer; }
.album-card:active { transform: scale(.98); }
.album-card .cover {
  aspect-ratio: 1; background: linear-gradient(135deg, var(--sunken), var(--accent-soft));
  background-size: cover; background-position: center;
}
.album-card .name { font-size: 16px; font-weight: 600; padding: var(--s-3) var(--s-3) 2px; }
.album-card .meta { font-size: 11px; color: var(--text-3); padding: 0 var(--s-3) var(--s-3); }

/* 搜尋框 */
.searchbar {
  display: flex; align-items: center; gap: var(--s-3); height: 48px;
  margin: 0 var(--pad) var(--s-4); padding: 0 var(--s-4);
  background: var(--sunken); border-radius: var(--r-field);
  color: var(--text-2); font-size: 15px; cursor: text;
}

/* 曲目 / 清單列 */
.song-row {
  display: flex; align-items: center; gap: var(--s-4);
  padding: var(--s-3) var(--pad);
  border-bottom: 1px solid var(--divider); cursor: pointer;
}
.song-row:hover { background: var(--surface-2); }
.song-row:active { transform: scale(.99); }
.song-row .idx { width: 22px; color: var(--text-3); font-size: 13px; text-align: center; }
.song-row .thumb { width: 44px; height: 44px; border-radius: 12px; flex: 0 0 auto;
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft)); background-size: cover; }
.song-row .meta { flex: 1 1 auto; min-width: 0; }
.song-row .title { font-size: 16px; font-weight: 600; color: var(--text);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font-size: 13px; color: var(--text-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur { color: var(--text-3); font-size: 11px; flex: 0 0 auto; }
.song-row .play { flex: 0 0 auto; color: var(--text-2); cursor: pointer; }

/* 主要 CTA */
.btn-primary {
  background: var(--accent); color: var(--on-accent); border: none;
  padding: 14px 24px; border-radius: var(--r-field);
  font-weight: 600; font-size: 15px; cursor: pointer;
}
.btn-primary:hover { background: var(--accent-pressed); }
.btn-primary:active { transform: scale(.97); }
.btn-ghost {
  background: var(--surface); color: var(--text); border: 1.5px solid var(--divider);
  padding: 14px 24px; border-radius: var(--r-field); font-weight: 600; font-size: 15px; cursor: pointer;
}

/* player：大封面 + 進度 + 控制 */
.now-art {
  aspect-ratio: 1; border-radius: var(--r-card); margin: 0 var(--pad) var(--s-5);
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft));
  background-size: cover; background-position: center;
}
.lyric-line { padding: 0 var(--pad) var(--s-4); font-size: 16px; color: var(--text-3); }
.lyric-line b { color: var(--accent); font-weight: 600; }
.progress { height: 4px; border-radius: var(--r-pill); background: var(--sunken); margin: 0 var(--pad); overflow: hidden; }
.progress > .played { height: 100%; width: 38%; background: var(--accent); }
.time-row { display: flex; justify-content: space-between; padding: var(--s-2) var(--pad) var(--s-5); font-size: 11px; color: var(--text-3); }
.controls { display: flex; align-items: center; justify-content: center; gap: var(--s-6); padding: 0 var(--pad) var(--s-5); }
.controls .ico { font-size: 24px; color: var(--text); cursor: pointer; }
.play-btn {
  width: 64px; height: 64px; border-radius: var(--r-pill);
  background: var(--accent); color: var(--on-accent); border: none;
  box-shadow: var(--shadow-raised); font-size: 24px; cursor: pointer;
}
.play-btn:active { transform: scale(.95); }
.badge { display: inline-flex; padding: 6px 12px; border-radius: var(--r-pill);
  border: 1.5px solid var(--accent); color: var(--accent); font-size: 11px; font-weight: 600; }

/* 訂閱方案：推薦卡上藍邊 */
.plan-card { background: var(--surface); border-radius: var(--r-card); padding: var(--s-5);
  margin: 0 var(--pad) var(--s-4); box-shadow: var(--shadow-card); border: 1.5px solid transparent; }
.plan-card.is-recommended { border-color: var(--accent); }
.plan-card .pname { font-size: 16px; font-weight: 700; }
.plan-card .price { font-size: 22px; font-weight: 700; }
.plan-tag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: var(--r-pill); background: var(--accent-soft); color: var(--accent); }

/* ===== dock：迷你播放列 + tab-bar，永遠固定在底 ===== */
.dock { flex: 0 0 auto; background: var(--surface); border-top: 1px solid var(--divider); box-shadow: var(--shadow-raised); }
.miniplayer {
  height: var(--miniplayer-h); display: flex; align-items: center; gap: var(--s-3);
  padding: 0 var(--s-4); border-bottom: 1px solid var(--divider); cursor: pointer;
}
.miniplayer .mp-cover { width: 40px; height: 40px; border-radius: 10px; flex: 0 0 auto;
  background: linear-gradient(135deg, var(--sunken), var(--accent-soft)); background-size: cover; }
.miniplayer .mp-meta { flex: 1 1 auto; min-width: 0; }
.miniplayer .mp-title { font-size: 13px; font-weight: 600; color: var(--text);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font-size: 11px; color: var(--text-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-btn { width: 36px; height: 36px; border-radius: var(--r-pill); border: none;
  background: var(--accent); color: var(--on-accent); font-size: 16px; cursor: pointer; flex: 0 0 auto; }
.miniplayer .mp-btn:active { transform: scale(.94); }

.tabbar {
  height: calc(var(--tabbar-h) + var(--safe-bottom)); display: flex;
  padding-bottom: var(--safe-bottom);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; color: var(--text-3); font-size: 11px; font-weight: 500; cursor: pointer;
}
.tabbar .tab .ti { font-size: 20px; }
.tabbar .tab[aria-current="page"], .tabbar .tab.is-active {
  color: var(--accent);
}
.tabbar .tab[aria-current="page"] .ti { background: var(--accent-soft); border-radius: var(--r-pill); padding: 2px 14px; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
