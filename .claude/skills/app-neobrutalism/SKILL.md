---
name: app-neobrutalism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in 新野獸派 Neobrutalism style. Triggers on Neobrutalism、新野獸派、neobrutalist、粗黑邊框、硬位移陰影、hard shadow、撞色色塊、Gumroad style、brutalist UI、high-contrast blocks.
user-invocable: true
---

# 新野獸派 — 迴聲 Resona

## Style Philosophy

新野獸派（Neobrutalism）把 90 年代瀏覽器原生控件的「粗、硬、直白」重新時尚化：粗黑邊框、毫無模糊的硬位移陰影、飽和度拉滿的撞色色塊、幾乎為零的圓角、粗壯到接近黑體極限的字重，以及刻意「對齊偏移」的叛逆排版。它不討好、不柔化，反而用最直接的視覺重量宣告層級——一個按鈕看起來就「真的可以按下去」（陰影位移到底）。放進 **迴聲 Resona** 音樂串流 App，這種風格讓每張歌單卡、每個方案卡都像貼在牆上的 DIY 海報，叛逆、年輕、辨識度極高，卻仍保有產品級 App 該有的清晰資訊階層與舒適間距。

**精修目標**：在保留「粗框硬陰影撞色」DNA 的前提下，把它做成「看起來真的能用、能按、能切換」的產品。重點在於——間距系統精準、內容密度豐富、迷你播放列常駐、每個可點元素都有「按下位移」回饋、絕不跑版。

三個視覺辨識特徵（精修後三層次）：

1. **粗黑邊框 3px + 多層硬位移陰影（無模糊）**：所有卡片、按鈕、chip、封面一律包黑框；陰影是純黑、無 blur、有明確偏移量，並建立**三階陰影層次**——`2px`（chip / 小元件）→ `4px`（標準卡 / 按鈕）→ `6px`（主封面 / 主推方案卡 / player 大封面）。按下時陰影收回到 `1px` 並把元件 `translate(3px,3px)` 位移到陰影處（「壓下去」的物理感）。
2. **高彩度撞色色塊輪替**：亮黃 `#FFE600`／桃粉 `#FF6B9D`／天藍 `#4DA6FF` 三主色輪番當底與封面，背景則用近白紙 `#FBF7EF`，色塊之間直接硬碰硬、不做漸變過渡。每個區段以不同撞色當「分區記號」，色塊之間留近白紙喘息，避免整頁刺眼。
3. **粗壯字體 + 對齊偏移的叛逆排版**：標題用 800/900 字重、可加 `text-shadow` 模擬「貼紙厚度」；分區標籤刻意旋轉 -2°～3°、區塊標題偏左或偏右錯位，破壞「乖巧的網格」——但**主要內文、列表、價格永遠水平正擺、不旋轉**，確保可讀。

---

## Design Tokens (CSS variables)

> 全部數值寫死於 token，元件只引用 token、不撿色不撿尺寸。間距採 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32）。

```css
:root {
  /* ===== 手機外殼 ===== */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;
  --miniplayer-h: 60px;         /* 迷你播放列高度（疊在 tab-bar 上方） */
  --safe-bottom: 20px;          /* 模擬 home indicator 安全區 */

  /* ===== 8pt 間距尺度（唯一允許的間距值） ===== */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;                 /* 內容區左右標準 padding */
  --sp-5: 20px;
  --sp-6: 24px;                 /* 區段之間的標準縱向間距 */
  --sp-8: 32px;                 /* 大區段 / 屏首間距 */
  --content-pad: var(--sp-4);

  /* ===== 撞色主色 ===== */
  --nb-yellow: #FFE600;         /* 亮黃 */
  --nb-pink: #FF6B9D;           /* 桃粉 */
  --nb-blue: #4DA6FF;           /* 天藍 */
  --nb-black: #000000;          /* 邊框 / 陰影 / 主文字 */
  --nb-paper: #FBF7EF;          /* 近白紙背景 */
  --nb-paper-2: #FFFFFF;        /* 卡片白底 */
  --nb-ink-soft: #2B2B2B;       /* 次要文字（仍 ≥ 4.5:1） */
  --nb-mint: #7CE0C3;           /* 第四點綴（徽章/下載狀態，克制使用） */

  /* 角色化色彩 token（元件引用這層） */
  --color-bg: var(--nb-paper);
  --color-surface: var(--nb-paper-2);
  --color-fg: var(--nb-black);
  --color-fg-soft: var(--nb-ink-soft);
  --color-accent: var(--nb-yellow);     /* 主強調 = 亮黃 */
  --color-accent-2: var(--nb-pink);     /* 次強調 = 桃粉 */
  --color-accent-3: var(--nb-blue);     /* 第三強調 = 天藍 */
  --color-accent-4: var(--nb-mint);     /* 第四點綴 = 薄荷 */
  --color-on-accent: var(--nb-black);   /* 撞色塊上的文字一律黑（保 AA） */

  /* ===== 邊框（粗黑） ===== */
  --border-w: 3px;
  --border: var(--border-w) solid var(--nb-black);
  --border-thin: 2px solid var(--nb-black);

  /* ===== 硬位移陰影（無模糊，這是靈魂，三階層次） ===== */
  --shadow-sm: 2px 2px 0 var(--nb-black);        /* chip / 小元件 / icon 框 */
  --shadow: 4px 4px 0 var(--nb-black);           /* 標準卡片 / 按鈕 / song-row */
  --shadow-lg: 6px 6px 0 var(--nb-black);        /* 主封面 / 主推方案卡 / player 大封面 */
  --shadow-pressed: 1px 1px 0 var(--nb-black);   /* 按下態 */

  /* ===== 圓角（幾乎為零） ===== */
  --radius: 0px;                /* 預設直角 */
  --radius-xs: 4px;             /* 極少數需要時的最大圓角 */
  --radius-pill: 6px;           /* chip 也只給一點點，不做藥丸 */
  --radius-screen: 28px;        /* 僅裝置外殼螢幕圓角 */

  /* ===== 字體（粗壯為主） ===== */
  --font-display: 'Arial Black', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
  --fw-black: 900;
  --fw-bold: 800;
  --fw-mid: 600;
  --fw-reg: 500;

  /* ===== 叛逆排版用的微旋轉（只給標籤/裝飾，不給內文） ===== */
  --tilt-a: -2deg;
  --tilt-b: 2.5deg;
  --tilt-c: -1.5deg;

  /* ===== 動畫 ===== */
  --press: transform .04s ease, box-shadow .04s ease;
  --z-statusbar: 30;
  --z-mini: 25;
  --z-tabbar: 26;
}
```

---

## Typography Scale（手機字級・含行高/字重/字距）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.05 / 900 / -0.01em | App 品牌「迴聲 Resona」、player 大封面下曲名 |
| h1 | 22px / 1.10 / 900 / -0.01em | 各屏大標題（歌單牆標題、專輯名、方案區標、我的音樂庫） |
| h2 | 17px / 1.20 / 800 / 0 | 卡片標題、歌名、區段標題、方案名 |
| h3 | 15px / 1.25 / 800 / 0 | song-row 歌名、方案價格、區段「查看全部」 |
| body | 15px / 1.45 / 600 / 0 | 主要內文、曲目藝人、方案權益 |
| caption | 13px / 1.35 / 600 / 0 | 副標、播放次數、時長、tab 標籤、區段副標 |
| micro | 11px / 1.30 / 700 / 0.02em | status-bar 數字、chip 文字、徽章、序號、年份 |

排版規則：
- 標題（display/h1/h2）字重 900/800；display 與 h1 可加 `text-shadow: 2px 2px 0 var(--nb-black)`（要白底或亮色塊上才用，避免糊）。
- 中文不做斜體；叛逆傾斜一律用 `transform: rotate()`，**只給分區標籤 / chip / 裝飾印記，不給內文與價格**。
- 區段標題與「查看全部」同一行（`display:flex; justify-content:space-between; align-items:baseline`）。
- 數字（時長、價格、進度）用 `font-variant-numeric: tabular-nums` 對齊。

---

## Component & Layout（逐屏明細）

整體結構：單一 390×844 裝置外殼，**三層持久外框 + 單一活躍畫面**——
- 頂：`status-bar`（釘最上，永遠可見）。
- 中：6 個內容畫面**同時只顯示一個**（其餘 `hidden`），各自獨立可垂直捲動，預設顯示 `home`。
- 底：`mini-player`（迷你播放列）疊在 `tab-bar` 正上方 →`tab-bar`（4 tab，釘最下）。

純 CSS 專輯封面策略：**所有封面/縮圖/大頭貼一律純 CSS 繪製，不引用任何圖檔**。手法 = 撞色色塊（`linear-gradient` 硬切 / `conic-gradient` 幾何扇形 / 多層 `background` 疊方塊與條紋）+ 3px 黑框 + 硬陰影 + 一個旋轉小方塊或粗線當「裝飾印記」。**用 `:nth-child` 或 modifier class 讓每張封面套不同幾何變體與主色（黃/粉/藍/薄荷輪替）**，避免封面千篇一律。建議至少 4 種幾何 variant：對角硬切 / 三扇形 conic / 三橫條 / 同心方塊。

### 屏 1・status-bar（持久頂部）
- 高 `--statusbar-h`，黃底 `--nb-yellow`，底部 3px 黑線。
- 左：時間 **9:41**（micro、900、tabular-nums）。
- 右：訊號（4 條漸高黑直條 div）、Wi-Fi（CSS 扇形/三角）、電量符號（黑框小電池 div + 內部填色 + 正極凸點）。

### 屏 2・home（預設可見、≥ 3 區段）
頂部品牌列：「**迴聲 Resona**」（display，可 `rotate(var(--tilt-a))`）+ slogan「讓每首歌，回到你身上」。右上一顆「個人化每日推薦」入口小徽章。
1. **「每日迴聲」每日推薦 banner**（區段標題「每日迴聲」+ 副標「個人化每日推薦・每天 06:00 更新」）：一張桃粉底、粗框、6px 陰影的橫幅卡，內含一個 CSS 封面印記 + 文案 + 一顆黑底白三角「播放」鍵（點擊 → player）。
2. **4 分類 chip 橫排**：`華語`、`獨立`、`電子`、`放鬆`（撞色輪替 + 微旋轉 + 2px 陰影）。
3. **「為你精選歌單」卡牆**（區段標題 + 右側「查看全部」）：2 欄網格列出**全部 7 歌單**（`浪潮回聲`、`深夜公路`、`島嶼晨光`、`雨後散步`、`城市心跳`、`山海之間`、`失重時刻`），每張卡 = 純 CSS 撞色封面（4 種幾何 variant 輪替）+ 黑框 + 4px 陰影 + 歌單名（h2）+ caption 副標（如「24 首・你的深夜配方」）。點卡 → detail。
4. **「熱門排行」清單**（區段標題 + 「查看全部」）：編號 song-row（黑底白字序號 + CSS 縮圖 + 歌名 + 藝人 + 時長），列 3～4 首（如〈藍色信號〉/`海平面樂團`、〈霓虹巷弄〉/`Echo Lab`、〈候鳥地圖〉/`何遠`）。點列 → player。
5. 底部露出核心功能徽章列：「無損音質串流」「跨裝置接續播放」兩個藍/薄荷底粗框小卡。

### 屏 3・search
1. **粗框搜尋框**：白底、3px 黑框、4px 陰影、左側 CSS 放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」。
2. **4 分類 chip**：`華語`/`獨立`/`電子`/`放鬆`（撞色輪替）。
3. **「熱門歌曲」編號清單**：song-row 列多首歌名 + 藝人 + 時長，序號 1～5（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈無人車站〉）。點列 → player。
4. **「熱門藝人」**：橫向卡列，CSS 圓/方頭貼 + 藝人名，列出**全部 5 藝人**：`海平面樂團`、`林知夏`、`夜行列車`、`Echo Lab`、`何遠`。

### 屏 4・detail
頂部返回鍵（黑框方鍵 + ‹）回 home。
1. **大封面**：純 CSS 撞色幾何（黃/粉/藍拼貼 + conic 扇形 + 旋轉印記）+ 粗黑框 + **6px 陰影**，方形約 200px。
2. **專輯資訊**：專輯名 `島嶼晨光`（h1）+ 藝人 `林知夏`（h2）+ meta 列「2026・9 首・31 分鐘」（micro，tabular-nums）。
3. **動作列**：桃粉「播放全部」粗框按鈕（黑底白三角 + 文字）→ player；藍框「隨機播放」按鈕。
4. **完整 9 曲目清單**（song-row）：序號 1–9 + 歌名 + 藝人（皆 `林知夏`）+ 時長 + 行尾「⋮」選單鍵或播放鍵。全部 9 首：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。點任一列 → player。

### 屏 5・player（不顯示 mini-player）
頂部返回鍵（▾ 或 ‹）回上一畫面。
1. **大封面**：純 CSS conic 三扇形撞色 + 旋轉印記，約 280px 方形、**6px 陰影**。
2. **曲目資訊**：曲名〈`晚風練習曲`〉（display）+ 藝人 `林知夏`（h2）+ 專輯 `島嶼晨光`（caption）。
3. **歌詞同步**：一行逐字高亮示意（當前行黃底黑字色塊、前後行灰字），如「晚風吹過月台　帶走未說的話」。
4. **進度條**：粗黑框軌道 + 黃色已播段 + 黑色方形拖把；左 `00:00`、右 `02:47`（tabular-nums）。
5. **播放控制列**：隨機（黑框）／上一首／**播放暫停大方鍵**（黑底白三角，▶⇄⏸ 兩態切換）／下一首／循環（黑框），五鍵等距，主播放鍵最大。
6. **底列徽章**：「無損音質串流」藍底徽章（音質）+ 音量條（粗框 + 黃填段）。

### 屏 6・library
頂部 h1「我的音樂庫」。
1. **分頁 tab**：`歌單`／`專輯`／`已下載` 三個粗框分頁鍵（active 黃底，其餘白底，純 class toggle 切換即可）。
2. **收藏歌單清單**：song-row 變體（CSS 縮圖封面 + 歌單名 + 曲數 caption），重複列出部分歌單（`浪潮回聲`、`城市心跳`、`山海之間`、`失重時刻`）。點 → detail。
3. **「離線下載」卡**：薄荷/藍底粗框卡，CSS 下載圖示 + 「已下載 24 首・約 360 MB」（呼應功能名「離線下載」）。
4. **「共享音樂庫」卡**：桃粉底粗框卡，「Family 方案・最多 6 人共建一座音樂庫」（呼應功能名「共享音樂庫」）。

### 屏 7・profile
1. **使用者身份卡**：CSS 大頭貼撞色方塊 + 暱稱「島上聽歌的人」+ 副標「v3.2.0・resona.app」。
2. **播放偏好卡**：列幾個開關 row，含 **「跨裝置接續播放」開關**（粗框方形 toggle，黃色 = 開；手機/平板/車機接力說明）、「無損音質串流」開關。
3. **三訂閱方案卡**（同屏、一字不差）：
   - `免費　NT$ 0　／月`（黃底）— 隨機播放／含廣告／標準音質。
   - `Plus　NT$ 149　／月`（桃粉底 + **6px 陰影 + 「推薦」貼紙標籤旋轉 -2°**）— 無廣告／無損／離線下載／指定單曲。
   - `Family　NT$ 249　／月`（藍底）— 6 帳號／共享音樂庫／家長控制／涵蓋全部 Plus 權益。
   - 其一標「目前方案」貼紙（如免費）。

### 屏 8・tab-bar（持久底部）
- 高 `--tabbar-h` + `--safe-bottom` padding，頂部 3px 黑線。
- 4 tab 等寬：**首頁／搜尋／音樂庫／我的**，每 tab = 上方 CSS 線框 icon + 下方文字（caption）。
- **active 態**：該 tab 黃色色塊底 + 黑框 + 文字 900；其餘透明底純黑線框。tab 之間 2px 黑分隔線。

### mini-player（迷你播放列・常駐於 tab-bar 上方）
- 一條高 `--miniplayer-h` 的粗框 bar，**疊在 tab-bar 正上方**（底部 = `tabbar-h + safe-bottom`，z-index 介於內容與 tab-bar 之間）。
- 內容：左側 CSS 縮圖封面（40px）+ 中間〈`晚風練習曲`〉/`林知夏`（兩行：h3 + caption）+ 右側「播放/暫停」黑底白三角方鍵（▶⇄⏸ 兩態）。
- 上方一條 2px 細進度條（黃填段）做「正在播放」暗示。
- **顯示於 home / search / library / profile**；**player 與 detail 進入 player 後不顯示**（player 畫面本身不顯示 mini-player）。點擊 mini-player 主體（非播放鍵）→ 展開到 player；點播放鍵 → 僅切換 ▶/⏸ 不切畫面。
- 各內容畫面底部 padding 需預留 `calc(tabbar-h + safe-bottom + miniplayer-h + sp-2)`，避免最後一列被遮住。

---

## 微互動（Micro-interactions）

- **所有可點元素**：`cursor: pointer` + 明確 `:hover`（陰影加深一階或邊框加粗暗示）+ `:active`（陰影收回 `--shadow-pressed` + `translate(3px,3px)` 壓下去）。沒有「看似可點卻沒反應」的死元素。
- **播放鍵兩態**：▶（播放）/ ⏸（暫停）兩態切換——用 JS toggle class 換 `::before` 內容或顯示/隱藏兩個 CSS 三角/雙豎條。mini-player、home banner、player 主鍵、detail 播放鍵皆有兩態。
- **tab / 分頁 / chip active 視覺**：active 黃底色塊 + 文字加粗；非 active 白/透明底。切換用 class toggle。
- **卡片 active**：song-row / 歌單卡 hover 陰影加深、active 壓下位移。
- **toggle 開關**：方形 thumb，開 = 黃底 + thumb 右；關 = 白底 + thumb 左；點擊瞬間切換（建議 transform 移動 thumb）。
- 所有 transition 只動 `transform` / `opacity` / `box-shadow`，並包進 `@media (prefers-reduced-motion: reduce)` 關閉。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 邊框一律 3px 純黑（`--border`），陰影一律無模糊硬位移，並用 sm/標準/lg **三階層次** | 用柔和 `box-shadow: 0 4px 12px rgba(...)` 擬真陰影、或全部同一階陰影沒層次 |
| 間距只用 8pt 尺度 token（4/8/12/16/20/24/32），區段間距一致 `--sp-6` | 隨手寫 7px、13px、19px 等非尺度值，間距忽大忽小 |
| 圓角預設 0，最多 4px（外殼螢幕 28px 例外） | 用 16px+ 大圓角或藥丸按鈕 |
| 撞色塊上文字一律黑色（`--color-on-accent`），確保 ≥ 4.5:1 | 在亮黃/桃粉上放白字（對比不足、糊掉） |
| 標題 900 + `text-shadow` 厚度感、標籤微旋轉錯位 | 內文、價格、列表也跟著旋轉，導致難讀 |
| 按下態：陰影縮成 `--shadow-pressed` + `translate(3px,3px)` 壓到陰影處 | 按下無回饋、或用 opacity 變淡假裝按下 |
| 封面用純 CSS 撞色幾何，且多種 variant 輪替避免重複 | 引用任何 `.webp/.png/.jpg` 圖檔或外部 CDN 圖、或所有封面長一樣 |
| mini-player 常駐 home/search/library/profile，player 內不顯示 | 在 player 畫面也疊一條 mini-player（重複） |
| 內容畫面底部留足 padding，最後一列不被 mini-player/tab-bar 蓋住 | 內容被底部 bar 裁切、文字溢出容器 |

---

## Mobile Chrome / 無跑版規範

- **裝置容器鎖 390×844**：最外層 `.device` 寬 `--screen-w`、最小高 `--screen-h`、置中、`overflow: hidden`、3px 黑框、`border-radius: var(--radius-screen)`（內容仍直角）。`position: relative` 作為底部固定列的定位脈絡。
- **status-bar 永遠在頂**：`position: sticky; top: 0; z-index: var(--z-statusbar)`，黃底 + 底部 3px 黑線；高度固定 `--statusbar-h`。
- **tab-bar（含其上的 mini-player）永遠在底**：固定於裝置容器底部（`position: absolute; bottom: 0` 於 `.device` 內，或 sticky）；mini-player 緊貼 tab-bar 上緣。
- **中間為當前畫面的可捲動區**：每個內容畫面 `overflow-y: auto`，`padding-bottom` 預留 `calc(var(--tabbar-h) + var(--safe-bottom) + var(--miniplayer-h) + var(--sp-2))`，避免被底部 bar 蓋住；頂部 padding 從 status-bar 下緣起算。
- **文字不溢出 / 不被裁切**：長標題用 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`（單行）或 `-webkit-line-clamp`（多行）；卡片內 `min-width: 0` 讓 flex 子元素可縮。
- **padding 充足**：列表 row 內距 ≥ `--sp-3`、卡片內距 ≥ `--sp-4`、區段左右 `--content-pad`、區段之間 `--sp-6`。
- **安全區**：底部用 `--safe-bottom`（或 `env(safe-area-inset-bottom)`）預留 home indicator。
- **微旋轉不破版**：旋轉只給陰影外的標籤/chip，且容器要有足夠 margin，旋轉後不溢出裁切。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `data-screen`**（固定順序、各恰一次）：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，每屏用 `<section data-screen="<id>">` 包起來。
- **`<body data-viewport="mobile">` 必須存在**；`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`。
- 所有「必抄」字串出現在**可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌 迴聲 / Resona、6 功能名（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單、9 歌名、5 藝人、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放 `林知夏` —〈`晚風練習曲`〉（專輯 `島嶼晨光`）。
- **三層定價精確字串同屏出現**（profile）：`免費　NT$ 0　／月`、`Plus　NT$ 149　／月`、`Family　NT$ 249　／月`（`NT$` 與數字間一個半形空格，後綴全形「／月」）。
- status-bar 必含 **9:41** + 訊號 + 電量符號；tab-bar 四字「首頁／搜尋／音樂庫／我的」（active 高亮）。
- **可互動多畫面導覽**（vanilla inline JS，禁外部庫，`<script>` ≤ 8 KB）：
  - 預設只顯示 `home`，其餘內容畫面 `hidden`；status-bar / mini-player / tab-bar 持久。
  - tab-bar 4 tab 切換 home / search / library / profile，同步 active 態。
  - home / library / search 的歌單或專輯卡 → `detail`。
  - detail 曲目列、mini-player 主體、各處播放列 / 播放鍵 → `player`。
  - detail 與 player 頂部有**返回鍵**回上一畫面。
  - mini-player 顯示於 home/search/library/profile，**player 畫面隱藏 mini-player**。
  - 播放鍵 ▶/⏸ 兩態切換；所有可點元素 `cursor:pointer` + `:active` 按下回饋。
- 單檔 ≤ 200 KB、**無外部 CDN**（`src`/`href` 不得以 `http://`／`https://` 開頭）、繁體中文、CSS 變數驅動、不用 framework CSS、不留 LLM 自白。
- JS 失敗時 `home` 內容仍完整可讀（預設可見即 home）。
- 任何 `@keyframes`／`transition` 必附 `@media (prefers-reduced-motion: reduce)`，且只動 `transform` / `opacity`。

---

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 的 `images` 為空陣列 `[]`。

所有專輯封面、歌單縮圖、player 大封面、mini-player 縮圖、profile 大頭貼一律以**純 CSS 撞色色塊／幾何／線框佔位**繪製（`linear-gradient` 硬切、`conic-gradient` 扇形、多層 `background` 疊方塊與條紋、`transform: rotate` 裝飾印記），搭配 3px 黑框 + 硬位移陰影，並以多種幾何 variant 輪替。**不引用任何 `assets/` 圖檔、不外連任何圖片 URL。**

---

## Reference Snippet

可直接套用的 CSS（體現新野獸派・含外殼/statusbar/區段/song-row/卡片/mini-player/tabbar/進度條/訂閱卡 + reduced-motion；≥ 60 行）：

```css
/* ===== 手機外殼 ===== */
.device {
  width: var(--screen-w);
  min-height: var(--screen-h);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--color-bg);
  border: var(--border);
  border-radius: var(--radius-screen);
  overflow: hidden;
  position: relative;            /* 底部固定列定位脈絡 */
  font-family: var(--font-body);
  color: var(--color-fg);
}

/* ===== 持久頂部狀態列 ===== */
.statusbar {
  position: sticky; top: 0; z-index: var(--z-statusbar);
  height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-4);
  background: var(--nb-yellow);
  border-bottom: var(--border);
  font: 700 13px/1 var(--font-body);
  font-variant-numeric: tabular-nums;
}
.statusbar .battery { width: 22px; height: 11px; border: var(--border-thin); position: relative; }
.statusbar .battery::after { content: ""; position: absolute; right: -4px; top: 3px; width: 2px; height: 5px; background: var(--nb-black); }
.statusbar .battery > i { display: block; height: 100%; width: 70%; background: var(--nb-black); }

/* ===== 內容畫面：單一活躍 + 可捲動 + 底部預留 ===== */
.screen {
  position: absolute; inset: var(--statusbar-h) 0 0 0;
  overflow-y: auto;
  padding: var(--sp-5) var(--content-pad)
           calc(var(--tabbar-h) + var(--safe-bottom) + var(--miniplayer-h) + var(--sp-2));
  background: var(--color-bg);
}
.screen[hidden] { display: none; }
.screen--player { padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2)); } /* 不留 mini-player 空間 */

/* ===== 區段標題（含查看全部）+ 微旋轉標籤 ===== */
.section { margin-bottom: var(--sp-6); }
.section__head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: var(--sp-3); }
.section__title { font: 900 22px/1.1 var(--font-display); letter-spacing: -0.01em; }
.section__more { font: 800 13px/1 var(--font-body); cursor: pointer; }
.tag { display: inline-block; padding: 2px 8px; background: var(--nb-black); color: #fff;
  font: 700 11px/1.3 var(--font-body); transform: rotate(var(--tilt-a)); }

/* ===== 通用卡片 / 按鈕：粗框 + 硬位移陰影 + 按下回饋 ===== */
.card, .btn {
  background: var(--color-surface); border: var(--border);
  border-radius: var(--radius); box-shadow: var(--shadow);
}
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--sp-2);
  padding: 12px 18px; background: var(--color-accent-2); color: var(--color-on-accent);
  font: 800 15px/1 var(--font-body); cursor: pointer; transition: var(--press);
}
.btn:hover  { box-shadow: var(--shadow-lg); }
.btn:active { transform: translate(3px, 3px); box-shadow: var(--shadow-pressed); }
.btn--play::before { content: "▶"; }      /* ▶/⏸ 兩態：JS toggle .is-playing */
.btn--play.is-playing::before { content: "⏸"; }

/* ===== 分類 chip：小框 + 撞色輪替 + 微旋轉 ===== */
.chip {
  display: inline-block; padding: 6px 12px; border: var(--border-thin);
  border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
  background: var(--nb-blue); color: var(--color-on-accent);
  font: 700 11px/1 var(--font-body); cursor: pointer; transform: rotate(var(--tilt-a));
  transition: var(--press);
}
.chip:nth-child(2n) { background: var(--nb-pink);   transform: rotate(var(--tilt-b)); }
.chip:nth-child(3n) { background: var(--nb-yellow); transform: rotate(var(--tilt-c)); }
.chip:active        { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.chip.is-active     { background: var(--nb-yellow); font-weight: 900; }

/* ===== 純 CSS 封面（多 variant 輪替） ===== */
.cover { border: var(--border-thin); position: relative; aspect-ratio: 1; }
.cover--a { background: linear-gradient(135deg, var(--nb-yellow) 0 50%, var(--nb-pink) 50% 100%); }
.cover--b { background: conic-gradient(from 20deg, var(--nb-blue) 0 33%, var(--nb-yellow) 33% 66%, var(--nb-pink) 66%); }
.cover--c { background: repeating-linear-gradient(180deg, var(--nb-pink) 0 16px, var(--nb-paper) 16px 32px); }
.cover--d { background: var(--nb-blue); }
.cover--d::after { content: ""; position: absolute; inset: 22% 22%; background: var(--nb-yellow); border: var(--border-thin); transform: rotate(12deg); }

/* ===== 歌曲列：序號 + 縮圖 + 名稱 + 時長 ===== */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-3); background: var(--color-surface);
  border: var(--border-thin); box-shadow: var(--shadow-sm);
  margin-bottom: var(--sp-2); cursor: pointer; transition: var(--press);
}
.song-row:hover  { box-shadow: var(--shadow); }
.song-row:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.song-row .num { width: 22px; height: 22px; flex: 0 0 auto; display: grid; place-items: center;
  background: var(--nb-black); color: #fff; font: 700 11px/1 var(--font-body); }
.song-row .cover { flex: 0 0 auto; width: 48px; height: 48px; }
.song-row .meta { min-width: 0; }      /* 讓文字可省略不溢出 */
.song-row .title { font: 800 15px/1.25 var(--font-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .artist { font: 600 13px/1.3 var(--font-body); color: var(--color-fg-soft);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .time { margin-left: auto; font: 700 13px/1 var(--font-body);
  color: var(--color-fg-soft); font-variant-numeric: tabular-nums; }

/* ===== 歌單卡牆（2 欄） ===== */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.tile { background: var(--color-surface); border: var(--border); box-shadow: var(--shadow);
  cursor: pointer; transition: var(--press); }
.tile:active { transform: translate(3px,3px); box-shadow: var(--shadow-pressed); }
.tile .cover { width: 100%; }
.tile .name { padding: var(--sp-2) var(--sp-3); font: 800 15px/1.2 var(--font-body); }

/* ===== player 大封面 + 進度條 ===== */
.now-playing .art { width: 100%; max-width: 280px; aspect-ratio: 1; margin: 0 auto;
  border: var(--border); box-shadow: var(--shadow-lg); position: relative;
  background: conic-gradient(from 20deg, var(--nb-blue) 0 33%, var(--nb-yellow) 33% 66%, var(--nb-pink) 66%); }
.now-playing .art::after { content: ""; position: absolute; left: 24px; bottom: 24px;
  width: 40px; height: 40px; background: var(--nb-paper); border: var(--border); transform: rotate(12deg); }
.lyric { padding: var(--sp-2) var(--sp-3); background: var(--nb-yellow); border: var(--border-thin);
  font: 800 15px/1.4 var(--font-body); text-align: center; }
.progress { height: 14px; border: var(--border-thin); background: var(--nb-paper-2); position: relative; margin: var(--sp-3) 0 var(--sp-1); }
.progress > .fill { height: 100%; width: 38%; background: var(--nb-yellow); }
.progress > .thumb { position: absolute; top: -3px; left: 38%; width: 16px; height: 18px; background: var(--nb-black); }
.progress-time { display: flex; justify-content: space-between; font: 700 11px/1 var(--font-body); font-variant-numeric: tabular-nums; }
.transport { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3); margin-top: var(--sp-4); }
.transport .ctrl { width: 48px; height: 48px; display: grid; place-items: center; border: var(--border-thin);
  background: var(--color-surface); box-shadow: var(--shadow-sm); cursor: pointer; transition: var(--press); }
.transport .ctrl--main { width: 64px; height: 64px; background: var(--nb-black); color: #fff; box-shadow: var(--shadow); }
.transport .ctrl:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }

/* ===== mini-player（疊在 tab-bar 上方） ===== */
.miniplayer {
  position: absolute; left: 0; right: 0; z-index: var(--z-mini);
  bottom: calc(var(--tabbar-h) + var(--safe-bottom));
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3); padding: 0 var(--sp-3);
  background: var(--color-surface); border-top: var(--border); border-bottom: var(--border); cursor: pointer;
}
.miniplayer::before { content: ""; position: absolute; top: 0; left: 0; width: 42%; height: 3px; background: var(--nb-yellow); }
.miniplayer .cover { width: 40px; height: 40px; flex: 0 0 auto; }
.miniplayer .meta { min-width: 0; flex: 1; }
.miniplayer .title { font: 800 15px/1.2 var(--font-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .artist { font: 600 13px/1.2 var(--font-body); color: var(--color-fg-soft); }
.miniplayer .play { width: 40px; height: 40px; flex: 0 0 auto; display: grid; place-items: center;
  background: var(--nb-black); color: #fff; border: var(--border-thin); box-shadow: var(--shadow-sm);
  cursor: pointer; transition: var(--press); }
.miniplayer .play:active { transform: translate(2px,2px); box-shadow: var(--shadow-pressed); }
.screen--player ~ .miniplayer, body.is-player .miniplayer { display: none; } /* player 不顯示 mini-player */

/* ===== 底部 tab-bar：固定底 + active 黃高亮 ===== */
.tabbar {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: var(--z-tabbar);
  display: flex; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom);
  background: var(--color-surface); border-top: var(--border);
}
.tabbar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: var(--sp-1); font: 600 11px/1 var(--font-body); border-right: var(--border-thin); cursor: pointer; }
.tabbar .tab:last-child { border-right: none; }
.tabbar .tab .ico { width: 20px; height: 20px; border: var(--border-thin); }
.tabbar .tab.is-active { background: var(--nb-yellow); font-weight: 900; }

/* ===== 訂閱方案卡 ===== */
.plan { padding: var(--sp-4); border: var(--border); box-shadow: var(--shadow); margin-bottom: var(--sp-3); position: relative; }
.plan--free   { background: var(--nb-yellow); }
.plan--plus   { background: var(--nb-pink); box-shadow: var(--shadow-lg); }
.plan--family { background: var(--nb-blue); }
.plan__head { display: flex; align-items: baseline; justify-content: space-between; }
.plan__name { font: 900 17px/1.1 var(--font-body); }
.plan__price { font: 900 17px/1.1 var(--font-body); font-variant-numeric: tabular-nums; }
.plan__sticker { position: absolute; top: -10px; right: 12px; padding: 2px 8px; background: var(--nb-black);
  color: #fff; font: 700 11px/1.3 var(--font-body); transform: rotate(var(--tilt-a)); }

/* ===== toggle 開關 ===== */
.toggle { width: 48px; height: 26px; border: var(--border-thin); background: var(--color-surface); position: relative; cursor: pointer; }
.toggle > i { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: var(--nb-black);
  transition: transform .12s ease; }
.toggle.is-on { background: var(--nb-yellow); }
.toggle.is-on > i { transform: translateX(22px); }

/* ===== reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  .btn, .chip, .song-row, .tile, .transport .ctrl, .miniplayer .play, .toggle > i { transition: none; }
}
```
