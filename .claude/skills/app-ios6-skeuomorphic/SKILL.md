---
name: app-ios6-skeuomorphic
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS6 Skeuomorphic style. Triggers on iOS6 擬物、skeuomorphic、擬物化、linen、亞麻織紋、皮革材質、letterpress、玻璃光澤、浮雕按鈕、拉絲金屬、縫線邊框、舊版 iPod Music app、Forstall era、pre-iOS7。
user-invocable: true
---

# iOS6 擬物 — 迴聲 Resona

## Style Philosophy

iOS6 擬物（skeuomorphic）是 2007–2012 年 Scott Forstall 時代 iOS 的設計語言：介面盡力「假裝成真實世界的物件」。Music app 是一台磨砂金屬與玻璃面板的隨身聽，Notes 是黃色橫線記事本，Game Center 是賭場綠氈桌。設計師用**多層 inset/outset 陰影 + 線性漸層**疊出「按得下去」的浮雕感，用**亞麻織紋（linen）背景**填滿系統層，用 **letterpress 內凹文字**把標題壓進金屬裡。質感是這個風格的全部——每個像素都在模仿一種真實材質。

在 迴聲 Resona 音樂 App 中，這風格表現出「**一台 2012 年的精緻隨身聽**」：拉絲金屬 navbar、皮革質感歌單列、玻璃光澤的播放鈕、縫線收邊的卡片。懷舊但工整，每個元件都看得出重量。要做到「像真的」，秘訣在**克制與一致**：所有受光面從上方來、所有縫線同一道金黃、所有刻字同一組 letterpress 陰影、所有圓角偏小且密集——讓畫面像一塊精心打磨的硬體面板，而非一堆濾鏡。

三個視覺辨識特徵：
1. **亞麻織紋系統背景（linen）**：全頁底層用 `repeating-linear-gradient` 兩向交織出細密布紋，深灰偏暖；卡片浮在布紋之上，永遠看得到布。
2. **浮雕斜角元件（emboss/bevel）**：按鈕與 navbar 是「上亮下暗」的線性漸層 + 一道內側白色高光（`inset 0 1px 0 rgba(255,255,255,.5)`）+ 外側深色投影，看起來凸出可按；按下（`:active`）翻成內凹 `--press-in`。
3. **Letterpress 內凹文字 + 縫線邊框**：標題文字用 `text-shadow: 0 1px 0 rgba(255,255,255,.6)`（淺底）或 `0 -1px 0 rgba(0,0,0,.5)`（深底）壓出刻字感；皮革卡片邊緣用 `dashed` 假縫線，金黃線一致。

### 本次精修重點（修正首頁跑版 + 全頁擬物質感）

> **🔴 首頁跑版修正（最高優先）**：先前版本 home 變成「一整面巨大專輯封面牆」，狀態列(9:41)、拉絲金屬標題列、亞麻底紋、清單列全被吃掉。**本版強制 home 必須有完整擬物 chrome**：
> 1. home **不是**滿版封面牆。封面只能以**卡片內的小縮圖**出現（歌單卡 ≤ 半屏寬 2 欄網格的方形縮圖；清單列縮圖 44–52px）。**禁止**任何 `width:100vw` / `height:100%` 的滿版封面背景。
> 2. home 第一眼必看到：頂部 **status-bar(9:41)** → **拉絲金屬標題列(navbar)** → **亞麻織紋背景** → **玻璃光澤卡片與清單列**，由上而下層次分明。
> 3. 全頁加強擬物質感：**皮革**（每日迴聲橫幅）、**縫線 stitch**（金黃 dashed）、**letterpress 內凹字**、**浮雕 emboss 按鈕**、**玻璃反光**（卡片/封面頂部白色弧形高光），每一屏都要看得出材質與重量。

## Design Tokens (CSS variables)

所有數值寫死於此，SubAgent 不得自創魔術數字。間距一律走 8pt 尺度，圓角/陰影/字級皆為 token。

```css
:root {
  /* ── 手機殼專用 token（所有 app-* 共用基準）── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 56px;
  --miniplayer-h: 56px;          /* 迷你播放列高度（疊在 tab-bar 上方） */
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --screen-radius: 44px;         /* 模擬螢幕圓角 */
  --navbar-h: 52px;              /* 拉絲金屬標題列高度 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --content-pad: var(--sp-4);    /* 內容區左右內距 = 16px */
  --section-gap: var(--sp-6);    /* 區段之間 = 24px */

  /* ── 材質底色（亞麻 / 皮革 / 拉絲金屬）── */
  --linen-base: #5b5650;         /* 亞麻織紋主色（暖灰） */
  --linen-dark: #4a463f;         /* 織紋暗線 */
  --linen-light: #6a655d;        /* 織紋亮線 */
  --leather: #3a2c22;            /* 深棕皮革 */
  --leather-top: #4a382c;        /* 皮革受光上緣 */
  --leather-stitch: #c9a06a;     /* 皮革縫線金黃 */
  --leather-ink: #f4e8d8;        /* 皮革上的米白字 */
  --felt: #1f5135;               /* 賭桌綠氈（player 點綴） */
  --felt-top: #2a6845;

  /* 拉絲金屬 navbar / tab-bar / status-bar */
  --metal-top: #c7ccd2;
  --metal-mid: #9aa2ab;
  --metal-bot: #767e89;
  --metal-line: #5d646e;         /* 金屬下緣硬線 */

  /* ── 卡片紙面 ── */
  --card-top: #fbf8f2;           /* 卡片上緣（受光） */
  --card-bot: #e7e1d6;           /* 卡片下緣（陰影） */
  --card-edge: #b7ad9c;          /* 卡片硬邊 */
  --row-top: #fcfaf5;            /* 清單列受光上緣 */
  --row-bot: #efe9dd;            /* 清單列下緣 */

  /* ── 文字（WCAG AA：金屬上深字、紙上墨字）── */
  --ink: #2b2a27;                /* 主墨色，紙底對比 > 9:1 */
  --ink-soft: #5a5750;           /* 次要文字，對比 > 4.5:1 */
  --ink-on-metal: #2c3038;       /* 金屬列上的字 */
  --letterpress-up: rgba(255,255,255,.6);   /* 淺底刻字高光 */
  --letterpress-dn: rgba(0,0,0,.45);        /* 深底刻字陰影 */

  /* ── 強調色（玻璃藍鈕，沿用 iOS6 #007aff 系）── */
  --glass-blue-top: #59a6ff;
  --glass-blue-bot: #0a64e0;
  --glass-blue-edge: #0a4aa8;
  --glass-blue-ink: #0a4aa8;     /* active tab / 連結文字 */
  --accent-red: #c0392b;         /* 紅色刪除/喜歡點綴 */
  --accent-green-top: #7bd06a;   /* 「目前方案」徽章 */
  --accent-green-bot: #3f9c2e;
  --on-glass: #ffffff;

  /* ── 圓角（擬物時代偏小）── */
  --radius-card: 12px;
  --radius-btn: 9px;
  --radius-row: 8px;
  --radius-cover: 8px;
  --radius-pill: 999px;

  /* ── 陰影 / 浮雕 token ── */
  --bevel-up: inset 0 1px 0 rgba(255,255,255,.55);   /* 元件內側上高光 */
  --bevel-dn: inset 0 -1px 0 rgba(0,0,0,.35);        /* 元件內側下陰影 */
  --drop: 0 1px 2px rgba(0,0,0,.45);                 /* 元件外投影 */
  --drop-lg: 0 3px 8px rgba(0,0,0,.45);              /* 大元件落影（封面/方案卡） */
  --card-shadow: 0 1px 0 rgba(255,255,255,.5),       /* 卡片頂高光 */
                 0 2px 5px rgba(0,0,0,.4);           /* 卡片落影 */
  --press-in: inset 0 2px 5px rgba(0,0,0,.5);        /* 按下/凹槽 */
  --gloss: linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,0) 48%); /* 玻璃反光 */

  /* ── 字體（擬物時代慣用無襯線 + 細節用窄體）── */
  --font-ui: 'Helvetica Neue', 'PingFang TC', 'Heiti TC', system-ui, sans-serif;
  --font-num: 'Helvetica Neue', 'Arial Narrow', sans-serif;  /* 時間/時長等數字 */
}
```

## Typography Scale（手機字級，含行高/字重/字距）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| caption | 11px / 1.30 / 400 / +0.2px | 播放次數、時長、tab 標籤、徽章文字 |
| meta | 13px / 1.35 / 400 / 0 | 副標、藝人名、分類說明、方案權益 |
| body | 15px / 1.40 / 400 / 0 | 歌名、列表主文字、段落 |
| label | 13px / 1.20 / 600 / +0.3px | 「查看全部」連結、chip 文字、按鈕小字 |
| row-title | 17px / 1.30 / 600 / 0 | 歌單卡標題、清單列主項（letterpress） |
| section | 20px / 1.25 / 700 / +0.2px | 屏內區段大標、navbar 標題（letterpress） |
| display | 26px / 1.20 / 700 / +0.3px | home 品牌「迴聲 Resona」、player 曲名 |

排版規則：
- 金屬 navbar 標題與紙底卡片標題一律加 letterpress `text-shadow`（淺底向上 `--letterpress-up`、皮革/深底向下 `--letterpress-dn`）。
- 數字（9:41 時間、02:47 時長、播放次數）一律 `--font-num` 窄體，營造儀錶板感。
- 行尾不溢出：歌名/歌單名用 `overflow:hidden; text-overflow:ellipsis; white-space:nowrap`，藝人名同理；多行文案用 `-webkit-line-clamp` 截 2 行。

## Component & Layout（逐屏與元件規範）

整頁是一台直立隨身聽。**版面骨架（鎖死，不可跑版）**：

```
.device  (390×844, --screen-radius 圓角, overflow:hidden, display:flex column)
 ├─ .statusbar  (固定頂, 44px, 拉絲金屬, 永遠在最上)
 ├─ .content    (flex:1, 唯一可捲動區, 底鋪 linen, padding-bottom 預留 mini-player+tab-bar)
 │    └─ 當前 data-screen 的內容（切換顯示）
 ├─ .miniplayer (常駐, 56px, 疊在 tab-bar 上方; home/search/library/profile 顯示, player 隱藏)
 └─ .tabbar     (固定底, 56px + safe-bottom, 拉絲金屬, 4 tab, 永遠在最下)
```

- `.content` 的 `padding-bottom` 必須 = `calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))`，確保最後一列不被迷你播放列或 tab-bar 遮住。
- player 畫面顯示時隱藏 mini-player（`.device[data-active="player"] .miniplayer { display:none }`），此時 `.content` 的底距改只預留 tab-bar 高度（或 player 自身為全屏不捲）。
- 每屏 `<section data-screen="<id>">`，固定順序，未顯示者 `display:none`；切 tab / 開 detail / 開 player 透過 `:target` 或極小 inline JS 切換 `data-active`。

逐屏規範：

### 1. `status-bar`（固定頂部，44px，拉絲金屬）
- 左：時間 `9:41`（`--font-num`，letterpress 深字）。
- 右：訊號格（5 條由矮到高的 CSS 小長條）＋ Wi-Fi 弧形＋電量符號（電池外框 + 內填 + 正極小凸）。
- 金屬下緣 `--metal-line` 1px 硬線 + 內側上高光。永遠在最上，任何畫面都看得到。

### 2. `home`（修正跑版重點屏）
頂到底**三段式 + chrome 完整**：

- **navbar（拉絲金屬標題列，52px）**：左側大標「**迴聲 Resona**」（display 級、letterpress），右側可放小齒輪/通知浮雕圓鈕。金屬上緣高光 + 下緣硬線。
- **區段 A — 「每日迴聲」每日推薦 banner（皮革材質）**：整條 `.card--stitched` 皮革橫幅（`--leather` 漸層 + 金黃 dashed 縫線），左側 **小方形封面縮圖**（≤ 88px，玻璃高光 + 縫線框）、右側米白 letterpress 文字「每日迴聲」+ 一句推薦詞 + 浮雕「立即播放」玻璃藍小鈕。**此封面是縮圖，非滿版。**
- **區段 B — 「為你精選歌單」卡牆**：區段標題列（section 級 letterpress「為你精選歌單」+ 右側「查看全部 ›」label 連結）。下方 **2 欄網格**，**7 個歌單卡全列**，每卡：方形封面縮圖（卡內，套 `--gloss` 玻璃高光 + 縫線框）+ 卡下 letterpress 歌單名 + caption（如曲數）。7 歌單名：**晨間通勤、深夜電台、海邊散步、專注編碼、雨天咖啡館、健身節拍、週末派對**。卡片浮在 linen 上，網格 gap = `--sp-3`。
- **區段 C — 「最近播放」清單**：區段標題「最近播放」+「查看全部 ›」。下方 `.song-row` 清單列（玻璃光澤紙面），列出數首歌：左 44–52px 封面縮圖、中歌名 + 藝人（meta）、右時長（`--font-num`）+ 浮雕播放鍵 ▶。露出歌名與藝人：〈藍色信號〉海平面樂團、〈霓虹巷弄〉林知夏、〈候鳥地圖〉夜行列車、〈靜電〉Echo Lab、〈晚風練習曲〉何遠。
- **區段 D — 核心功能小卡（2 張）**：浮雕紙卡橫排，露出 **無損音質串流**、**歌詞同步** 兩功能名 + 小說明。

> ✅ home 第一屏由上而下：status-bar(9:41) → 金屬 navbar「迴聲 Resona」→ linen 背景 → 皮革「每日迴聲」橫幅 → 歌單卡牆 → 清單。封面全為縮圖，無滿版牆。

### 3. `search`
- navbar「搜尋」。
- **凹槽搜尋框**：`--press-in` 內陰影 + 放大鏡 icon + placeholder「搜尋歌曲、藝人、專輯」，看起來像壓進金屬的搜尋槽（cursor:text）。
- **4 分類 chip**（浮雕膠囊橫排）：**華語 / 獨立 / 電子 / 放鬆**，首個 active 凹槽態。
- **「熱門歌曲」編號清單**：`.song-row` 帶左側大序號（1–6，`--font-num`，letterpress），中歌名 + 藝人，右時長。露出多歌名與 5 藝人：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。
- **「熱門藝人」**：橫向小卡或圓形頭像列，露出上述藝人名（letterpress）。

### 4. `detail`
- navbar 左側**返回鍵 ‹**（浮雕玻璃鈕，回 home，cursor:pointer）+ 標題「專輯」。
- **大方形封面**（`assets/cover-1.webp`，套 `--gloss` 玻璃高光 + 金屬縫線框，置中，寬約 60% 屏寬，**非滿版**）。
- **專輯資訊**：專輯名 **島嶼晨光**（section letterpress）＋ 藝人 **林知夏**（meta）＋ **2024 · 9 首 · 38 分鐘**（年份/曲目數/總時長，`--font-num`）。
- **動作列**：**播放全部**（玻璃藍浮雕主鈕，含 ▶）＋ **隨機播放**（次要浮雕鈕，含 🔀）。
- **完整 9 曲目清單** `.track-list`，逐列：左序號（1–9）、中歌名、藝人小字、右時長（`--font-num`）+ 行尾浮雕播放鍵 ▶（點擊 → player）。9 歌名全列：**藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三**。列間 1px 內凹刻線分隔。

### 5. `player`（全屏，不顯示 mini-player）
- 深皮革或綠氈底（`--leather`/`--felt`）營造「翻面控制台」。
- navbar 左側**收合鍵 ⌄**（回上一屏）+ 中央「正在播放」+ 右側選單。
- **大方形封面**（`assets/cover-1.webp`，玻璃光澤 + 金屬縫線框，置中偏上）。
- **曲目資訊**：歌名〈**晚風練習曲**〉（display letterpress，皮革向下刻字）＋ 藝人 **林知夏** ＋ 專輯 **島嶼晨光**（meta）。
- **進度條**：金屬凹槽 `--press-in` 軌 + 已播放段玻璃藍填色 + 玻璃圓鈕滑塊（knob）；左 `01:12`（目前）右 `02:47`（總長），皆 `--font-num`。
- **歌詞同步**：3–4 行歌詞，**當前行逐字高亮**（高亮行玻璃藍 + 較亮，其餘 `--ink-soft`/皮革灰）。
- **控制列**：隨機 🔀 / 上一首 ⏮ /（大玻璃藍圓鈕）**播放暫停 ▶⏸**（兩態）/ 下一首 ⏭ / 循環 🔁，皆浮雕斜角鈕，按下翻 `--press-in`。
- **底列徽章**：**無損音質**（Hi-Res 金屬徽章）＋ 音量小滑桿（金屬凹槽）。

### 6. `library`
- navbar「音樂庫」。
- **分頁列**（3 分頁浮雕 segmented）：**歌單 / 專輯 / 已下載**，首個 active 凹槽態。
- **收藏歌單清單** `.song-row`：左封面縮圖（44–52px，玻璃高光）、中 letterpress 歌單名 + 曲數 caption、右 chevron ›。列出 home 7 歌單名中數筆（如 晨間通勤 / 深夜電台 / 海邊散步 / 專注編碼 / 雨天咖啡館）。
- **功能列**：**離線下載**（下載 icon + 「已下載 12 首」徽章）、**共享音樂庫**（Family 共建提示，皮革小卡）。

### 7. `profile`
- navbar「我的」。
- **使用者卡（皮革名片 + 金黃縫線）**：圓形頭像（玻璃高光）+ 名稱 + 會員狀態。
- **播放偏好卡（浮雕紙卡）**：列出開關列，含 **跨裝置接續播放**（浮雕滑動開關 toggle，cursor:pointer）+ 無損串流開關 + 通知開關。
- **3 訂閱方案卡**（浮雕紙卡，堆疊）：
  - **免費 NT$ 0**／月（基礎權益）— 標「目前方案」徽章（綠）。
  - **Plus NT$ 149**／月（無損 + 離線）— 玻璃藍邊高亮，標「推薦」徽章。
  - **Family NT$ 249**／月（6 人共享）。
  - 每張列權益 + 浮雕「升級 / 選擇」玻璃鈕。**三價格字串同屏**。

### 8. `tab-bar`（固定底部，56px）
- 拉絲金屬底 + 上緣 `--metal-line` 硬線。
- 4 tab 可見文字「**首頁 / 搜尋 / 音樂庫 / 我的**」，各配浮雕小 icon。
- **active 態**（隨當前畫面）：icon 與文字轉玻璃藍 `--glass-blue-ink` + `--press-in` 凹槽感（正按住）。cursor:pointer。

### mini-player（迷你播放列，常駐於 tab-bar 上方）
- 一條 56px 的浮雕橫條（金屬或深皮革底 + 上緣高光 + 落影），疊在 tab-bar 正上方。
- 內容：左 40px 封面縮圖（玻璃高光）+ 中歌名〈晚風練習曲〉+ 藝人 林知夏（單行省略）+ 右 **播放/暫停浮雕鈕 ▶⏸**（兩態）。
- **顯示於 home / search / library / profile**；**player 畫面隱藏**（避免重複控制）。
- 點擊整條（除播放鈕外）→ 展開到 `player` 畫面（cursor:pointer + :active 微下沉）。

封面 fallback：若 `assets/cover-N.webp` 不存在，封面元素以 CSS 線性漸層色塊替代（不同歌單給不同漸層），仍套 `--gloss` 玻璃光澤與縫線框，畫面不破。

## Do / Don't

| Do | Don't |
| --- | --- |
| home 用完整 chrome：status-bar→金屬 navbar→linen→卡片清單，封面只當縮圖 | ❌ home 做成滿版專輯封面牆，吃掉狀態列/標題列/底紋 |
| 系統層用 linen 織紋（雙向 `repeating-linear-gradient`），卡片永遠浮其上 | 用純色平面背景（失去擬物質感） |
| 按鈕用「上亮下暗線性漸層 + 內側白高光 + 外投影」浮雕，按下翻 `--press-in` | 用扁平單色填滿（那是 iOS7 之後） |
| 間距只用 4/8/12/16/20/24/32 token | 隨手寫 7px/13px/19px 魔術數字 |
| 標題用 letterpress（淺底向上、皮革深底向下） | 文字無陰影直接貼底 |
| navbar / tab-bar / status-bar 用拉絲金屬漸層 + 1px 下緣硬線 | 用半透明毛玻璃（那是後 iOS） |
| 皮革卡用 dashed 金黃假縫線；紙卡用硬邊收口 | 用大圓角 + 大留白的現代卡片 |
| 強調鈕用玻璃藍 `#007aff` 系漸層 + 頂部高光弧 | 用霓虹色或粉彩漸層 |
| 圓角偏小（8–12px），元件密集有重量 | 圓角 ≥ 20px 的輕盈現代感 |
| 所有材質貼圖用 CSS 生成，封面用相對路徑或 fallback 漸層 | 引入外部材質圖/字體 URL（違反無 CDN） |
| 文字 overflow 截斷、padding 充足、不溢出不裁切 | 長歌名撐破列、貼邊無內距 |

## Motion Specification

- 僅用於微互動，不做敘事動畫。允許：按鈕 `:active` 下沉、tab/卡片切換淡入、進度滑塊 transform、歌詞高亮行切換、mini-player 展開。
- **只動 `transform` / `opacity`**，不動 top/left/width/height（避免 reflow）。
- transition 時長 ≤ 180ms，ease-out。
- 任何 `:hover`/`:active`/active 態都要有明確視覺回饋（見 Micro-interaction）。

## Micro-interaction（微互動，全體必做）

- 所有可點元素 `cursor: pointer`（搜尋框 `cursor: text`）。
- `:hover` → 卡片/列輕微提亮（`filter: brightness(1.03)` 或頂高光加強）；`:active` → 浮雕翻 `--press-in` + `transform: translateY(1px)`（按下回饋）。
- **播放鍵兩態**：未播 ▶、播放中 ⏸；mini-player 與 player 大鈕皆兩態，按下有凹陷感。
- **tab / 分頁 / chip active**：玻璃藍著色 + `--press-in` 凹槽，明顯「被按住」。
- **訂閱卡**：推薦卡（Plus）玻璃藍邊高亮 + 徽章；目前方案（免費）綠徽章。
- 進度滑塊 knob 玻璃反光圓鈕，hover 微放大（transform scale）。

## Accessibility (Reduced Motion)

- 必含 `@media (prefers-reduced-motion: reduce)`：關閉所有 `transition`/`animation`，保留靜態浮雕外觀；歌詞高亮以靜態色差呈現，進度條以靜態填色呈現。
- 文字對比走 token（紙底墨字 > 9:1、次字 > 4.5:1、金屬上深字達 AA）。
- 所有 tab/鈕/列可鍵盤聚焦，保留可見 `:focus-visible` 外框（玻璃藍 2px）。

## Mobile Chrome Spec（無跑版鐵律）

- 設計基準 **390×844**；最外層 `.device` 鎖寬 `var(--screen-w)`、最小高 `var(--screen-h)`、置中、`overflow: hidden`、`border-radius: var(--screen-radius)`。
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` 必含。
- `<body data-viewport="mobile">` 必含。
- **status-bar 永遠在頂**（44px，拉絲金屬，含 9:41 + 訊號 + 電量）。
- **tab-bar + mini-player 永遠在底**：mini-player 疊於 tab-bar 上方；tab-bar 56px + `var(--safe-bottom)`。
- 中間為**單一可捲動內容區** `.content`，`padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))`，**內容不被遮擋**。
- **文字不溢出/不被裁切**：所有單行文字 ellipsis、多行 line-clamp；元件 padding 充足（列內 ≥ `--sp-2`、卡內 ≥ `--sp-3`）。
- **封面禁滿版**：任何 `.cover` 縮圖最大寬度受卡片/列限制，home 封面為 2 欄網格縮圖或列縮圖，detail/player 大封面 ≤ 60% 屏寬置中。
- 圓角螢幕：`.device` 套 `--screen-radius`；status-bar / tab-bar 貼齊邊緣不另加圓角。

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar → home → search → detail → player → library → profile → tab-bar`，各恰一次。
- **`<body data-viewport="mobile">`** 必含。
- **status-bar 顯示 `9:41`**；**tab-bar 四 tab**「首頁 / 搜尋 / 音樂庫 / 我的」。
- **mini-player 常駐**於 home/search/library/profile（player 隱藏），含封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵。
- 所有「必抄」字串出現在**可見 body 文字**（不可只放 `aria-label`/`data-*`）：迴聲 / Resona、功能名（無損音質串流、歌詞同步、離線下載、共享音樂庫、跨裝置接續播放）、7 歌單（晨間通勤 / 深夜電台 / 海邊散步 / 專注編碼 / 雨天咖啡館 / 健身節拍 / 週末派對）、9 歌名、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放組合（林知夏 — 晚風練習曲 — 島嶼晨光）。
- **三層定價精確字串**同屏（profile）：`免費 NT$ 0`、`Plus NT$ 149`、`Family NT$ 249`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ home 卡片/曲目列 → detail + 曲目列/mini-player → player + detail/player 返回鍵回上一屏。用 `:target` 或 ≤ 數行 inline JS 切換 `data-active`。
- 單檔 HTML **≤ 200 KB**（不含 `assets/` 圖）；**無外部 CDN**（src/href 不可 `http://`/`https://`，封面用 `assets/cover-N.webp`）。
- 任何 `@keyframes`/`transition` 須附 `@media (prefers-reduced-motion: reduce)`，且只動 `transform`/`opacity`。
- 結尾回傳單行 JSON `{"ok":true, ...}`，`sections_found` 回報 8 個 `data-screen`。

## Required Images

真實感方形專輯封面圖，共 6 張：`cover-1.webp` … `cover-6.webp`（600×600，抽象、無文字、無 logo），各具不同氛圍，prompt 見 `assets-manifest.json`。

- **用途**：`detail` 主打專輯 `島嶼晨光` 與 `player` 大封面用 `cover-1.webp`；`home` 7 歌單卡牆與 `library` 收藏列依序套 `cover-1`…`cover-6`（第 7 張可重用或 CSS 漸層）；mini-player 縮圖用 `cover-1.webp`。
- **套圖方式**：封面外一律加「`--gloss` 玻璃高光（頂部白色弧形漸層）＋ 金屬縫線框」。
- **封面禁滿版**：僅作卡內/列內縮圖或 detail/player 大封面（≤ 60% 屏寬），不可作頁面背景滿版牆。
- **Fallback**：缺圖時以 CSS 線性漸層色塊替代（不同卡給不同漸層），仍套玻璃光澤與縫線框。

## Reference Snippet

可直接套用的 CSS（≥ 60 行）：device 殼 / statusbar / navbar / 區段 / song-row / 卡片 / 封面 / mini-player / tabbar / 進度條 / 訂閱卡 + prefers-reduced-motion。

```css
/* ── 手機殼 + 螢幕圓角 ── */
.device {
  position: relative;
  width: var(--screen-w); min-height: var(--screen-h);
  margin: 0 auto; overflow: hidden;
  border-radius: var(--screen-radius);
  background: var(--linen-base);
  box-shadow: 0 8px 40px rgba(0,0,0,.55);
  display: flex; flex-direction: column;
  font-family: var(--font-ui);
}

/* ── 亞麻織紋系統背景（雙向 repeating-linear-gradient）── */
.content {
  flex: 1; overflow-y: auto;
  padding: var(--content-pad);
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
  color: var(--ink);
  background:
    repeating-linear-gradient(45deg, var(--linen-dark) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(-45deg, var(--linen-light) 0 1px, transparent 1px 3px),
    var(--linen-base);
}
.device[data-active="player"] .content {
  padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* ── 拉絲金屬列（status-bar / navbar / tab-bar 共用）── */
.statusbar, .navbar, .tabbar, .miniplayer.metal {
  background: linear-gradient(180deg, var(--metal-top) 0%, var(--metal-mid) 55%, var(--metal-bot) 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.6), var(--drop);
  color: var(--ink-on-metal);
}
.statusbar {
  height: var(--statusbar-h); flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--metal-line);
  font-family: var(--font-num); text-shadow: 0 1px 0 var(--letterpress-up);
}
.navbar {
  height: var(--navbar-h); flex: 0 0 auto;
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--metal-line);
}
.navbar .title { font: 700 20px/1.25 var(--font-ui); letter-spacing: .2px; text-shadow: 0 1px 0 var(--letterpress-up); }
.navbar .brand { font: 700 26px/1.2 var(--font-ui); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 區段標題 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-5) 0 var(--sp-3);
}
.section-head h2 { font: 700 20px/1.25 var(--font-ui); color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }
.section-head a { font: 600 13px/1.2 var(--font-ui); color: var(--glass-blue-ink); cursor: pointer; }

/* ── 浮雕紙卡 + 縫線皮革卡 ── */
.card {
  background: linear-gradient(180deg, var(--card-top), var(--card-bot));
  border: 1px solid var(--card-edge); border-radius: var(--radius-card);
  box-shadow: var(--card-shadow); padding: var(--sp-3);
}
.card--stitched {
  background: linear-gradient(180deg, var(--leather-top), var(--leather));
  border: 2px dashed var(--leather-stitch); border-radius: var(--radius-card);
  color: var(--leather-ink); padding: var(--sp-3);
  text-shadow: 0 -1px 0 var(--letterpress-dn);
  box-shadow: var(--drop-lg), inset 0 1px 0 rgba(255,255,255,.12);
}

/* ── letterpress 內凹文字 ── */
.letterpress { color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 歌單卡牆（2 欄網格，封面為縮圖非滿版）── */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.playlist-card { cursor: pointer; transition: transform 140ms ease-out, filter 140ms ease-out; }
.playlist-card:hover { filter: brightness(1.03); }
.playlist-card:active { transform: translateY(1px); }
.playlist-card .name { margin-top: var(--sp-2); font: 600 15px/1.3 var(--font-ui);
  color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── 方形封面 + 玻璃高光 + 縫線框（含 fallback 漸層）── */
.cover {
  aspect-ratio: 1; width: 100%; border-radius: var(--radius-cover);
  border: 1px solid var(--card-edge); box-shadow: var(--card-shadow);
  background: var(--gloss), linear-gradient(135deg, #6b88a8, #2c3e50);
  background-size: cover; position: relative; overflow: hidden;
}
.cover.thumb { width: 48px; height: 48px; flex: 0 0 48px; }
.cover.has-img {
  background-image: var(--gloss), url('assets/cover-1.webp'); background-size: cover;
}

/* ── 歌曲列 / 曲目列 ── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-3);
  background: linear-gradient(180deg, var(--row-top), var(--row-bot));
  border-bottom: 1px solid var(--card-edge);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.45);
  cursor: pointer; transition: filter 140ms ease-out;
}
.song-row:hover { filter: brightness(1.03); }
.song-row:active { box-shadow: var(--press-in); }
.song-row .idx { width: 20px; text-align: center; font-family: var(--font-num); color: var(--ink-soft); }
.song-row .meta { flex: 1; min-width: 0; }
.song-row .title { font: 400 15px/1.4 var(--font-ui); color: var(--ink);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font: 400 13px/1.35 var(--font-ui); color: var(--ink-soft);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur { font-family: var(--font-num); font-size: 11px; color: var(--ink-soft); }

/* ── 浮雕膠囊分類 chip + active 凹槽 ── */
.chip {
  display: inline-block; padding: 6px 14px; margin: var(--sp-1);
  border-radius: var(--radius-pill);
  background: linear-gradient(180deg, #f3eee4, #d9d1c2);
  border: 1px solid var(--card-edge);
  box-shadow: var(--bevel-up), var(--drop);
  font: 600 13px/1.2 var(--font-ui); color: var(--ink);
  text-shadow: 0 1px 0 var(--letterpress-up); cursor: pointer;
}
.chip.active { color: var(--glass-blue-ink); box-shadow: var(--press-in); }

/* ── 玻璃光澤浮雕鈕（播放 / CTA / 播放暫停）── */
.btn-glass {
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot));
  border: 1px solid var(--glass-blue-edge); border-radius: var(--radius-btn);
  color: var(--on-glass); font: 600 15px/1.2 var(--font-ui);
  padding: 11px 18px; box-shadow: var(--bevel-up), var(--bevel-dn), var(--drop);
  position: relative; cursor: pointer; transition: transform 120ms ease-out;
}
.btn-glass::before {
  content: ""; position: absolute; inset: 1px 1px 50% 1px;
  border-radius: 8px 8px 50% 50% / 8px 8px 12px 12px;
  background: var(--gloss); pointer-events: none;
}
.btn-glass:active { box-shadow: var(--press-in); transform: translateY(1px); }
.btn-glass.round { width: 64px; height: 64px; border-radius: 50%; padding: 0; font-size: 24px; }

/* ── mini-player（疊在 tab-bar 上方，player 隱藏）── */
.miniplayer {
  flex: 0 0 auto; height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-3);
  background: linear-gradient(180deg, var(--leather-top), var(--leather));
  border-top: 1px solid #1c130c;
  box-shadow: 0 -2px 6px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.12);
  color: var(--leather-ink); cursor: pointer;
}
.miniplayer .cover.thumb { width: 40px; height: 40px; flex: 0 0 40px; }
.miniplayer .mp-meta { flex: 1; min-width: 0; }
.miniplayer .mp-title { font: 600 14px/1.2 var(--font-ui);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font: 400 12px/1.2 var(--font-ui); opacity: .8;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.device[data-active="player"] .miniplayer { display: none; }

/* ── tab-bar + active 凹槽 ── */
.tabbar {
  flex: 0 0 auto; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom); border-top: 1px solid var(--metal-line); display: flex;
}
.tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  font: 400 11px/1.3 var(--font-ui); color: var(--ink-on-metal);
  text-shadow: 0 1px 0 var(--letterpress-up); cursor: pointer;
}
.tab.active { color: var(--glass-blue-ink); box-shadow: var(--press-in); border-radius: 6px; }

/* ── 進度條（金屬凹槽 + 玻璃滑塊）── */
.scrubber {
  height: 8px; border-radius: 999px;
  background: linear-gradient(180deg, #2a2a2a, #444);
  box-shadow: var(--press-in); position: relative;
}
.scrubber .fill { position: absolute; inset: 0 40% 0 0; border-radius: 999px;
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot)); }
.scrubber .knob {
  position: absolute; top: 50%; left: 60%; width: 18px; height: 18px; border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at 35% 30%, #fff, #cfd6dd 60%, #9aa2ab);
  box-shadow: 0 1px 2px rgba(0,0,0,.6); transition: transform 120ms ease-out;
}
.scrubber .knob:hover { transform: translate(-50%, -50%) scale(1.12); }

/* ── 訂閱方案卡（推薦高亮 + 徽章）── */
.plan { margin-bottom: var(--sp-3); }
.plan.recommended { border: 2px solid var(--glass-blue-edge); box-shadow: var(--drop-lg); }
.plan .badge { display: inline-block; padding: 2px 10px; border-radius: 999px;
  font: 600 11px/1.3 var(--font-ui); color: #fff;
  background: linear-gradient(180deg, var(--glass-blue-top), var(--glass-blue-bot)); }
.plan .badge.current { background: linear-gradient(180deg, var(--accent-green-top), var(--accent-green-bot)); }
.plan .price { font: 700 22px/1.2 var(--font-num); color: var(--ink); text-shadow: 0 1px 0 var(--letterpress-up); }

/* ── 歌詞同步高亮行 ── */
.lyric { color: var(--ink-soft); transition: color 160ms ease-out, opacity 160ms ease-out; opacity: .65; }
.lyric.active { color: var(--glass-blue-ink); opacity: 1; font-weight: 600; }

/* ── reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```
