---
name: app-memphis
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Memphis style. Triggers on Memphis、孟菲斯、Memphis Group、後現代設計、postmodern、撞色、波浪線、鋸齒 zigzag、terrazzo 噴點、彩屑點點、散落圓點、傾斜貼紙、80s MTV、Ettore Sottsass、奶油白撞色。
user-invocable: true
---

# 孟菲斯 — 迴聲 Resona

## Style Philosophy

孟菲斯（Memphis）源自 1980 年代義大利 Memphis Group 與後現代設計運動：把現代主義「少即是多」的克制徹底反過來——**多即是多、亂中有序、刻意不協調的協調**。整個 App 像一張貼滿貼紙的派對海報：奶油白底（#fdf6e9）上，熱粉、亮青、檸檬黃、薄荷、葡萄紫的平塗色塊直接相撞，全部用墨黑粗描邊框住；波浪線、鋸齒、棋盤、散落圓點、三角碎屑、terrazzo 噴點這些「圖樣母題」鋪在背景與卡片上；每張卡片、每個 chip 都像貼紙一樣輕微傾斜（rotate ±2–4deg），元素疊放像拼貼。氛圍是 80s MTV、後現代、派對、俏皮、歡樂。

用在 迴聲 Resona 音樂串流 App，這風格傳達「玩味、躍動、年輕、不正經的歡樂」：專輯與歌單封面是一塊塊撞色幾何拼貼（不同母題：波浪/圓點/三角），播放鍵是一顆粗黑邊的撞色大圓，tab-bar 是彩色塊拼成的方格——整個 App 像一場視覺派對。

本次精修的三條鐵律：

1. **母題圖樣 + 撞色 + 黑描邊，三者缺一不可**：Memphis 的辨識度不靠單一顏色，而靠「波浪/鋸齒/圓點/terrazzo 母題鋪面 × 高飽和撞色平塗 × 2–3px 墨黑描邊把每塊色框住」。任何主要色塊都該有黑邊；背景與封面都該鋪至少一種 CSS 母題圖樣。光換色、沒母題、沒黑邊 = 失敗。
2. **刻意傾斜與拼貼，但不犧牲可讀與不跑版**：卡片/chip/裝飾形狀輕微 rotate(±2–4deg) 製造「貼上去」的隨意感；散落的 zigzag、波浪、彩色圓點、小三角點綴每屏角落。但**文字本體不傾斜、行高足、留白夠**；裝飾用 `pointer-events:none` 不擋點擊；外框仍鎖 390×844 不跑版。亂是視覺的，結構是嚴謹的。
3. **撞色僅作色塊與大字，正文一律墨黑 on 淺色達 AA**：熱粉/亮青/檸檬黃/葡萄紫飽和度高，當小字會讀不清。**主文字一律墨黑 #1a1a1a（on 奶油白 #fdf6e9 對比 14:1）**；亮色只用於大色塊、徽章、≥20px 的大標題裝飾字（且需自行確認該色 on 其背景 ≥ AA）。可讀性不可向花俏妥協。

三個視覺辨識特徵（signature，必做、要看得出是 Memphis 不是別的）：

1. **撞色幾何拼貼封面（純 CSS 母題）**：每個專輯/歌單/頭像封面 = 一塊奶油底 + 黑邊 + 內部用 `conic/linear/radial-gradient` 拼出的撞色幾何（半圓波浪 / 散落圓點 / 三角斜切 / terrazzo 噴點），不同封面用不同母題與配色區分。**絕無點陣圖**。
2. **散落裝飾碎形點綴每屏角落**：每屏角落以絕對定位（`pointer-events:none`）撒幾個 Memphis 小元件——一段 zigzag 折線、一條波浪線、3–5 顆彩色圓點、一個傾斜小三角。它們是「貼紙」，輕微傾斜、不對齊網格、不擋互動。
3. **傾斜彩色貼紙 chip + 粗黑邊撞色播放大圓 + 方塊黑邊 tab-bar**：chip 是傾斜（rotate ±3deg）的撞色標籤貼紙（黑邊 + 撞色底 + 墨黑字）；播放鍵是粗黑邊（3px）的撞色大圓 + 黑色 ▶ 字符；tab-bar 是四格彩色塊拼成、塊間黑邊分隔，active tab 換成亮色塊 + 微微頂起。

**與 neobrutalism 嚴格區別**：neobrutalism = 邊框 + 硬位移陰影（hard offset shadow）+ 少色克制、嚴肅對齊；Memphis = **多色母題圖樣 + 傾斜拼貼 + 散落裝飾碎形**，更花、更俏皮、更歡樂，陰影是輔助不是主角，網格刻意被打破。若做出來像 Gumroad 那種「白底黑框幾色硬陰影」就是錯方向。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* tab-bar 本體（方塊較高，含黑邊） */
  --miniplayer-h: 60px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 18px;
  --device-radius: 44px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 色彩：奶油白底 + Memphis 撞色盤 ── */
  --cream: #fdf6e9;            /* 奶油白底（全 App 主背景） */
  --cream-2: #fbedd3;          /* 次底色（卡片內襯、區段分隔） */
  --ink: #1a1a1a;             /* 墨黑（描邊 + 所有正文，on cream 對比 ~14:1 AA） */
  --pink: #ff4d8d;            /* 熱粉 */
  --cyan: #19c3d6;            /* 亮青 */
  --yellow: #ffd23f;          /* 檸檬黃 */
  --mint: #4fd6a3;            /* 薄荷 */
  --grape: #7b5cff;           /* 葡萄紫 */

  /* ── 文字（正文一律墨黑 on 淺色達 AA；亮色僅作大字 / 色塊） ── */
  --text-1: #1a1a1a;          /* 主文字（墨黑 on cream ~14:1） */
  --text-2: #4a4338;          /* 次文字（暖灰墨 on cream ~7:1 AA） */
  --text-3: #6f6657;          /* 弱文字（≥4.5:1 on cream，僅 ≥13px） */
  --text-on-pink: #1a1a1a;    /* 熱粉色塊上：墨黑（#1a1a1a on #ff4d8d ~5.3:1 AA） */
  --text-on-cyan: #1a1a1a;    /* 亮青色塊上：墨黑（on #19c3d6 ~6.5:1 AA） */
  --text-on-yellow: #1a1a1a;  /* 檸檬黃色塊上：墨黑（on #ffd23f ~13:1 AAA） */
  --text-on-mint: #1a1a1a;    /* 薄荷色塊上：墨黑（on #4fd6a3 ~7.8:1 AA） */
  --text-on-grape: #fdf6e9;   /* 葡萄紫色塊上：奶油白（#fdf6e9 on #7b5cff ~4.6:1 AA） */

  /* ── 描邊（Memphis 靈魂：墨黑粗描邊） ── */
  --stroke: 3px;              /* 主描邊（卡片 / 播放鍵 / 大色塊外框） */
  --stroke-2: 2px;            /* 次描邊（chip / 小封面 / 列項） */
  --stroke-hair: 1.5px;       /* 細描邊（內分隔線、母題線） */
  --border-ink: var(--stroke) solid var(--ink);
  --border-ink-2: var(--stroke-2) solid var(--ink);

  /* ── 陰影（Memphis 的影是輔助、軟短，不是 neobrutalism 的硬位移主角） ── */
  --shadow-soft: 0 4px 0 rgba(26, 26, 26, 0.12);     /* 卡片微落地（短、軟、墨色） */
  --shadow-pop: 3px 4px 0 var(--ink);                /* 互動元素點綴用硬影（小幅、僅按鈕/chip 強調） */
  --shadow-press: 1px 1px 0 var(--ink);              /* 按下後收影 */

  /* ── 圓角（Memphis 圓角混用：色塊偏方、貼紙偏圓，製造節奏） ── */
  --radius-card: 18px;
  --radius-card-sm: 12px;
  --radius-cover: 14px;
  --radius-cover-sm: 10px;
  --radius-chip: 999px;        /* chip 用全圓膠囊 */
  --radius-blob: 50% 50% 48% 52% / 52% 48% 52% 48%;  /* 有機 blob 形（頭像/裝飾） */

  /* ── 傾斜角（貼紙感；裝飾與部分卡片用，文字本體不轉） ── */
  --tilt-a: -3deg;
  --tilt-b: 2.5deg;
  --tilt-c: -2deg;
  --tilt-d: 4deg;

  /* ── 字體（粗體大寫標題 + 字級對比大製造躍動） ── */
  --font: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
  --font-display: 'Arial Black', 'PingFang TC', system-ui, sans-serif;  /* 西文大標更粗黑 */

  /* ── 動效 ── */
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);   /* 帶回彈，俏皮 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 120ms;
  --dur: 220ms;
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.4 / 700 / +0.4px / 大寫 | `--text-2` | tab 標籤、播放次數、徽章副字、序號 |
| label | 13px / 1.45 / 600 / +0.2px | `--text-2` | chip 文字、卡片副標、時長、藝人名 |
| body | 15px / 1.55 / 500 / 0 | `--text-1` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 800 / 0 | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 23px / 1.2 / 900 / -0.3px / 大寫 | `--text-1` | 各屏區塊標題（如「每日迴聲」） |
| display | 34px / 1.05 / 900 / -0.8px / 大寫 | `--text-1` | home 品牌大標、player 曲名 |

- 標題級（section / display）用 `--font-display`、`font-weight:900`、`text-transform:uppercase`（中文不影響、英文/數字會變大寫）製造「粗體大寫標題」的躍動感。
- **字級對比要大**：display 34px 與 body 15px 並置，刻意拉開層級反差是 Memphis 的活潑來源；可在同一標題混兩種字重（如品牌「迴聲」900 + 「Resona」700 斜放）。
- 數字（時間 9:41、價格、時長、進度、序號）一律 `font-variant-numeric: tabular-nums` 對齊。
- **正文一律墨黑 `--text-1`**；亮色不用於 <20px 的文字。弱文字 `--text-3` 僅用於 ≥13px 且非關鍵的副字。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。標題本體不傾斜（裝飾性大字若要傾斜，需確保仍可讀且不溢出）。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 手機殼，奶油白底 `--cream`，`overflow:hidden`、`border-radius:--device-radius`、外框 `--border-ink`）→ 底層 `.deco-bg`（絕對定位鋪滿、`z-index:0`、`pointer-events:none`，放滿屏淡 Memphis 母題圖樣＝散落圓點 + 細波浪）→ `.statusbar`（固定頂、`z-index:5`）→ `.viewport`（中間可捲動畫面容器，`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個；各屏角落另撒 `.deco-corner` 裝飾碎形）→ `.miniplayer`（貼在 tab-bar 上方的常駐迷你播放列、`z-index:4`）→ `.tabbar`（固定底、`z-index:5`）。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（無跑版的骨架，對齊契約 B2）

- `<body data-viewport="mobile">` 必須在。基礎規則 `.screen { display:none }`，**只有** `.screen.is-active { display:flex }`（縱向 flex）。**嚴禁**任何「畫面專屬 class」無條件設 `display`（會造成永久疊層 bug）；畫面專屬樣式只設 padding/排版。**預設 `home` 為 `is-active`**，JS 失效時 home 仍完整可讀。
- 用一個簡單的 class 切換 + `data-go` 委派：可導覽元素加 `data-go="<target>"`（歌單/專輯卡 `data-go="detail"`、曲目列/迷你播放列 `data-go="player"`、返回鍵 `data-go="back"`），JS 以事件委派切換 active screen 並同步 tab-bar active 態。
- 導覽行為全部接好：tab → 切 home/search/library/profile；home 歌單卡 / library 收藏列 / detail 任一曲目列 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 / search 熱門歌曲列 → 開 player；detail / player 左上返回鍵 → 回上一畫面。**所有「看起來可點的都要能點」**：tab / 卡片 / 歌曲列 / chip / 按鈕 / 播放控制都要有真實 click handler、`cursor:pointer`、明確 `:hover` / `:active` 回饋。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 `.viewport` 為當前畫面的唯一可捲動區。`.viewport` 高度 = `calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)`，每個 `.screen` 內部各自 `overflow-y:auto`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，奶油白底，底緣一條 `--stroke-2` 墨黑線收住（像貼紙頂邊）。
- 左側時間 **9:41**（tabular-nums、900 字重），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔），符號用墨黑。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左大寫粗黑標題 + 右「查看全部」傾斜小貼紙連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display，「迴聲」墨黑 900 + 「Resona」可微傾上色）+ slogan「讓每首歌，回到你身上」；右側 blob 形漸層頭像（`--radius-blob` + 黑邊）。問候列下方撒一段 zigzag 折線裝飾。
2. **每日迴聲（個人化每日推薦 banner）**：一張橫幅撞色強調卡（葡萄紫或熱粉平塗 + 黑邊 + 微傾 `--tilt-c`），左側撞色幾何封面（波浪母題）+ 「每日迴聲」標題 + 個人化文案 + 粗黑邊撞色大播放鍵（▶）。露出「**無損音質串流**」傾斜徽章貼紙。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同母題 + 不同撞色配色的 `.cover`（純 CSS 幾何拼貼）+ 黑邊 + 墨黑標題 + 曲數副字，卡片交錯微傾（奇數 `--tilt-a`、偶數 `--tilt-b`）製造拼貼節奏。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大寫粗黑排名數字（撞色描邊圓底）+ 小幾何封面 + 歌名 + 藝人 + 時長 + 播放鍵。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，傾斜撞色貼紙 chip（四種不同撞色底 + 黑邊 + 墨黑字），首個 active（換亮色 + 微頂起）。
6. 露出其他核心功能名（如「個人化每日推薦」「歌詞同步」）於 banner 文案或功能小貼紙。

### search（`data-screen="search"`）

- 頂部搜尋框（奶油白 input 外觀 + 粗黑邊 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」），右上撒一個傾斜小三角裝飾。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）傾斜撞色貼紙。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——混排歌名與藝人：海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 撞色描邊序號 + 小幾何封面 + 歌名 + 藝人 + 時長 + 播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（blob 漸層頭像 + 黑邊 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠，膠囊交錯微傾。

### detail（`data-screen="detail"`）

- 左上**返回鍵**（‹，奶油白圓 + 粗黑邊 + 墨黑字，cursor:pointer + hover/active，`data-go="back"`）。
- **大封面**：頂部大張撞色幾何拼貼封面（純 CSS，島嶼晨光配色：薄荷 + 亮青 + 檸檬黃，波浪 + 散落圓點母題 + 黑邊），輕微傾斜並露出底層裝飾。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（撞色大鍵 ▶ + 黑邊 + 墨黑/撞色字）+ **隨機播放**（奶油白次鍵 + 黑邊）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 `.song-row`：撞色序號 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵 / 選單（⋯），列間以細虛線分隔。點任一曲 → player（`data-go="player"`）。

### player（`data-screen="player"`）

**覆蓋全屏的 now-playing 面板，進入時隱藏底部 dock（tab-bar + mini-player）**。整個 player 用 `height:100%; display:flex; flex-direction:column`，讓進度條、控制列、徽章永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**返回鍵**（⌄ 收合，奶油白圓 + 黑邊，`data-go="back"`）。
- **大封面**：置中大尺寸撞色幾何拼貼（`flex:1; min-height:0` 可壓縮，純 CSS conic/radial 撞色 + 母題 + 黑邊，色相呼應島嶼晨光），可包一條波浪或圓點裝飾。封面是唯一可壓縮區，其餘列固定。
- 正在播放：**林知夏 —〈晚風練習曲〉**（display 級曲名），副字專輯「島嶼晨光」/ 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字撞色描底貼紙效果，其餘 `--text-3`）。
- 進度條 `.progress`（奶油白軌 + 黑邊 + 撞色 fill），左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓鍵（▶ / ⏸ 兩態，粗黑邊撞色大圓）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時換撞色。
- 底部：**Hi-Res 無損音質**傾斜徽章貼紙 + 音量滑桿（奶油白軌 + 黑邊 + 撞色把手）。**這四列（曲名/歌詞/進度/控制+徽章）全部固定可見，不滑動。**

### library（`data-screen="library"`）

- 「**我的音樂庫**」標題（section 大寫粗黑）。
- 分頁列（segmented 撞色方塊 + 黑邊）：**歌單 / 專輯 / 已下載**，首個 active（亮色塊 + 微頂起）。
- **收藏歌單清單**：每列 = 小幾何封面 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail（`data-go="detail"`），列交錯微傾。
- **離線下載**功能列（list-item + 已下載狀態傾斜徽章）。
- **共享音樂庫**功能列（list-item + 切換開關 toggle，toggle 軌與把手皆黑邊撞色）。

### profile（`data-screen="profile"`）

- **使用者卡**：blob 頭像 + 暱稱 + 會員狀態行（撞色強調卡 + 黑邊 + 微傾）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（toggle 開關 + 黑邊撞色，預設開）。
- **3 訂閱方案卡**（堆疊，各自不同撞色底 + 黑邊 + 交錯微傾）：
  - **免費** — `NT$ 0 ／月` — 標「目前方案」傾斜徽章。
  - **Plus** — `NT$ 149 ／月` — 標「推薦」，強調卡（最飽和撞色 + `--stroke` 粗邊 + `--shadow-pop` 硬影 + 角標貼紙）。
  - **Family** — `NT$ 249 ／月`。
  - 每卡含 2–3 條權益小字（涵蓋 6 功能名相關描述，如離線下載 / 共享音樂庫 / 跨裝置接續播放）。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的撞色浮條（撞色平塗 + 黑邊 + 微傾 `--tilt-c`），高 `--miniplayer-h`。
- 內容：左小幾何封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵（▶ / ⏸，黑邊圓鍵）**。文字用該撞色底對應的 AA 文字色。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .miniplayer { display:none }`）。
- 整條 cursor:pointer（`data-go="player"`），點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（奶油白軌 + 撞色 fill，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部，**四格彩色塊拼成的方格**（每 tab 一塊撞色底 + 塊間 `--stroke-2` 黑邊分隔 + 整條頂緣 `--stroke` 黑邊），高 `--tabbar-h`，4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 大寫粗黑標籤。
- active tab 換成**亮色塊**（如檸檬黃）+ 微微頂起（`transform: translateY(-2px)`）+ 該 tab 文字加粗，視覺上像被「按亮」的派對燈。每 tab cursor:pointer + hover/active 回饋。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定區。

### 封面繪製規範（重要）＝純 CSS 撞色幾何拼貼

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 `linear-gradient` / `radial-gradient` / `conic-gradient` 拼出 Memphis 母題並配不同撞色：
- **波浪母題**：用 `radial-gradient` 排成半圓鱗片，或 `repeating-linear` 斜紋。
- **散落圓點**：`radial-gradient(circle, color 30%, transparent 31%)` + `background-size` 製造圓點陣。
- **三角斜切**：`linear-gradient(45deg, A 50%, B 50%)` 拼對角撞色三角。
- **terrazzo 噴點**：多個小 `radial-gradient` 不規則散佈在底色上。
- **棋盤**：`conic-gradient` 或雙向 `repeating-linear`。
每個封面外加 `--border-ink` 黑邊。不同封面用不同母題 + 不同撞色組合區分。**不得引用任何 `assets/*.webp` 圖檔，不得出現指向圖檔的 `<img>`。**

### 散落裝飾碎形規範（signature 2）

每屏與背景以絕對定位（`position:absolute` + `pointer-events:none` + 低 z-index）撒 Memphis 碎形：
- **zigzag 折線**：`linear-gradient` 45/-45 拼接的鋸齒帶（見 Reference Snippet）。
- **波浪線**：`radial-gradient` 排半圓 + `background-size`。
- **彩色圓點群**：3–5 顆不同撞色小圓（黑邊或無邊）散落。
- **小三角**：`clip-path: polygon(...)` 或 CSS border 三角，傾斜。
裝飾須 `pointer-events:none` 不擋互動、不溢出裝置殼（`overflow:hidden` 由 `.device` 兜底）、reduced-motion 下保持靜態。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 每個主要色塊都用 `--border-ink`（2–3px 墨黑）框住 | 撞色平塗不描邊（失去 Memphis 框界感、糊在一起） |
| 背景與封面鋪 Memphis 母題（波浪/圓點/三角/terrazzo/棋盤）純 CSS | 純色背景、純色封面（變成普通 App 只是換色） |
| 卡片/chip/裝飾輕微 rotate(±2–4deg) 製造貼紙拼貼感 | 全部嚴格對齊網格、零傾斜（變嚴肅、不是 Memphis） |
| 每屏角落撒 zigzag / 波浪 / 圓點 / 小三角碎形，`pointer-events:none` | 沒有任何散落裝飾（少了招牌俏皮碎形） |
| 正文一律墨黑 `--text-1` on 奶油/淺色，撞色只作大字/色塊 | 用熱粉/亮青當小字正文（高飽和讀不清、破 AA） |
| 撞色直接相撞（粉旁邊放青、黃旁邊放紫）製造活潑反差 | 同色系漸層收斂（變柔和，失去撞色衝突的歡樂） |
| 標題大寫 900 字重、字級對比大（display 34 vs body 15） | 標題正文字級接近、字重平板（缺躍動感） |
| 播放鍵 = 粗黑邊撞色大圓 + ▶/⏸ 兩態；tab active 換亮色塊頂起 | 播放鍵單態無邊、tab active 無區別 |
| 陰影用軟短墨色點綴（輔助），互動偶用小幅硬影強調 | 全靠 neobrutalism 式大硬位移陰影（那是別的風格） |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度/曲長/價格/序號用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

App 頁預設靜態即可；本風格的「亂」是構成而非動畫。若加動效，限定 `transform` / `opacity` 並必附 `prefers-reduced-motion`：

- **microinteractions（俏皮回彈）**：
  - 可點元素 `transition: transform var(--dur-fast) var(--ease);`（`--ease` 帶 1.56 overshoot 回彈），`:active { transform: scale(0.95) rotate(0deg); }`（按下時順手「擺正」傾斜，鬆開回到原傾角，強化貼紙感）。
  - 卡片 `:hover` 微抬 + 強化硬影（`transform: translateY(-2px)`、`box-shadow: var(--shadow-pop)`）。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class），按下 `scale(0.92)` 回彈。
  - chip / tab / 分頁 active 切換用 background + transform 的 220ms 過渡（active 微頂起）。
- **可選裝飾動畫**：散落圓點 / 小三角可做極緩慢（20s+）的 `transform: rotate` 或 `translate` 漂浮（幅度 ≤ 4%），純裝飾；player 大封面母題可緩慢 `rotate` 的 conic-gradient。一律 `prefers-reduced-motion` 下停用。
- **進度條**：純 CSS 寬度示意即可（width 屬靜態示意，不放捲動熱路徑）。
- 只動 `transform` / `opacity`（按壓、卡片抬起、裝飾漂浮）。不使用任何外部動畫庫（禁 GSAP / Lottie / anime.js / framer-motion）。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

- 裝飾碎形漂浮、卡片抬起、按壓回彈、conic 封面旋轉在 reduced motion 下全部停用；所有母題圖樣與傾斜為靜態 CSS，靜止下仍完整呈現 Memphis 視覺。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀（home 預設可見）。
- **WCAG AA 底線**：所有正文墨黑 `--text-1` on 奶油白/淺色（≥7:1）；撞色色塊上文字一律用 token 標好的對應 AA 文字色（粉/青/薄荷上墨黑、紫上奶油白）；亮色字僅用於 ≥20px 大字且自驗對比。傾斜不可造成文字溢出或被裁切。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確（亮色塊頂起）。
- **player 為覆蓋全屏 now-playing**：進入時隱藏 dock（tab-bar + mini-player）；`height:100%; display:flex; flex-direction:column`；封面 `flex:1; min-height:0`；進度/控制/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋；返回時恢復 dock。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：用 `data-go` 委派——tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；JS 失效時 home 預設可見。畫面切換遵守 `.screen{display:none}` / `.screen.is-active{display:flex}`，嚴禁畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、傾斜與裝飾不溢出、文字不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` ≤ 8 KB。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "孟菲斯 Memphis", "images": [] }`。所有封面、頭像、裝飾母題（波浪 / 鋸齒 / 散落圓點 / 三角碎屑 / terrazzo 噴點 / 棋盤）一律純 CSS（`linear-gradient` / `radial-gradient` / `conic-gradient` / `clip-path` / `background-size` 鋪面）繪製，**頁面不得引用任何圖檔**、不得出現指向 `assets/` 的 `<img>`。

---

## Reference Snippet

```css
/* ── 手機殼（奶油白 + 粗黑外框） ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  border: var(--border-ink);
  background: var(--cream);
  font-family: var(--font);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
}

/* ── 滿屏淡 Memphis 母題背景（散落圓點 + 細波浪，z-index:0、不擋點） ── */
.deco-bg {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(circle at 12px 12px, rgba(123,92,255,0.10) 2.5px, transparent 3px) 0 0 / 36px 36px,
    radial-gradient(circle at 8px 8px, rgba(25,195,214,0.08) 2px, transparent 2.5px) 18px 18px / 44px 44px;
}

/* ── Memphis 母題 mixin（封面用：撞色 + 母題拼貼 + 黑邊） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--border-ink-2);
  background:
    /* 散落圓點母題 */
    radial-gradient(circle at 26% 30%, var(--yellow) 0 9px, transparent 10px),
    radial-gradient(circle at 74% 22%, var(--pink) 0 7px, transparent 8px),
    /* 三角斜切母題 */
    linear-gradient(135deg, var(--cyan) 0 50%, var(--mint) 50% 100%);
  box-shadow: var(--shadow-soft);
}
.cover.v2 {  /* 波浪母題變體（不同撞色） */
  background:
    radial-gradient(circle at 50% 120%, var(--grape) 0 40%, transparent 41%) 0 0 / 40px 40px,
    linear-gradient(0deg, var(--pink), var(--yellow));
}

/* ── 散落裝飾碎形：zigzag 鋸齒帶（45/-45 拼接） ── */
.deco-zigzag {
  position: absolute; pointer-events: none; z-index: 0;
  width: 80px; height: 14px; transform: rotate(var(--tilt-a));
  background:
    linear-gradient(135deg, var(--pink) 25%, transparent 25%) -10px 0,
    linear-gradient(225deg, var(--pink) 25%, transparent 25%) -10px 0;
  background-size: 14px 14px;
}
/* 彩色圓點群 + 小三角，傾斜散落（用 ::before/::after 補形） */
.deco-dots { position:absolute; pointer-events:none; z-index:0;
  width:60px; height:18px;
  background:
    radial-gradient(circle, var(--cyan) 4px, transparent 5px) 0 0/20px 18px repeat-x; }
.deco-tri { position:absolute; pointer-events:none; z-index:0;
  width:0; height:0; transform: rotate(var(--tilt-d));
  border-left:12px solid transparent; border-right:12px solid transparent;
  border-bottom:20px solid var(--grape); }

/* ── 通用 Memphis 卡（撞色 + 黑邊 + 微傾貼紙感） ── */
.card {
  background: var(--cream-2);
  border: var(--border-ink);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease);
}
.card.tilt-a { transform: rotate(var(--tilt-a)); }
.card.tilt-b { transform: rotate(var(--tilt-b)); }
.card.is-tap { cursor: pointer; }
.card.is-tap:hover  { transform: translateY(-2px) rotate(0deg); box-shadow: var(--shadow-pop); }
.card.is-tap:active { transform: scale(0.95) rotate(0deg); box-shadow: var(--shadow-press); }

/* ── 傾斜彩色貼紙 chip（黑邊 + 撞色底 + 墨黑字） ── */
.chip {
  display:inline-block; padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-chip); border: var(--border-ink-2);
  background: var(--cream); color: var(--text-1);
  font-size: 13px; font-weight: 700; letter-spacing: .2px;
  cursor: pointer; transform: rotate(var(--tilt-c));
  transition: transform var(--dur-fast) var(--ease), background var(--dur);
}
.chip:nth-child(2){ background: var(--cyan); }
.chip:nth-child(3){ background: var(--yellow); }
.chip:nth-child(4){ background: var(--mint); }
.chip:hover { transform: rotate(0deg) translateY(-1px); }
.chip[aria-selected="true"] {
  background: var(--pink); color: var(--text-on-pink);
  transform: rotate(0deg) translateY(-2px); box-shadow: var(--shadow-pop);
}

/* ── 粗黑邊撞色播放大圓 ── */
.play-btn {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--pink); color: var(--ink);
  border: var(--border-ink); cursor: pointer;
  display:grid; place-items:center; font-size: 24px;
  box-shadow: var(--shadow-pop);
  transition: transform var(--dur-fast) var(--ease);
}
.play-btn:active { transform: scale(0.92); box-shadow: var(--shadow-press); }

/* ── 歌曲列（虛線分隔 + 撞色序號） ── */
.song-row {
  display:flex; align-items:center; gap: var(--space-3);
  padding: var(--space-3) var(--space-2);
  border-bottom: var(--stroke-hair) dashed var(--ink);
  cursor:pointer; transition: background var(--dur);
}
.song-row:hover  { background: var(--cream-2); }
.song-row:active { background: rgba(26,26,26,0.06); }
.song-row .idx   { width:26px; height:26px; display:grid; place-items:center;
  border: var(--border-ink-2); border-radius:50%; background: var(--yellow);
  font-weight:900; font-variant-numeric: tabular-nums; }
.song-row .title { font-size:17px; font-weight:800; color:var(--text-1); }
.song-row .meta  { font-size:13px; color:var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color:var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 中間畫面容器：三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }
.screen.screen-player { padding-bottom: var(--space-4); }

/* ── player：覆蓋全屏，封面可壓縮、控制永遠可見 ── */
.now-playing { height:100%; display:flex; flex-direction:column; gap: var(--space-4); }
.now-playing .art {
  flex: 1 1 auto; min-height: 0; border-radius: 18px;
  border: var(--border-ink);
  background:
    conic-gradient(from 30deg, var(--mint), var(--cyan), var(--yellow), var(--pink), var(--mint)),
    radial-gradient(circle at 30% 24%, var(--cream) 8px, transparent 9px);
}
.progress { height: 10px; border-radius:999px; background: var(--cream);
  border: var(--border-ink-2); overflow:hidden; }
.progress > i { display:block; height:100%; width:40%; background: var(--pink); }
.ctrl-row { display:flex; align-items:center; justify-content:space-between; }
.ctrl { cursor:pointer; color:var(--ink); transition: transform var(--dur-fast); }
.ctrl:active { transform: scale(0.9); }
.ctrl.is-on { color: var(--grape); }
.is-player .miniplayer, .is-player .tabbar { display:none; }  /* player 隱藏 dock */

/* ── tab-bar：四格撞色塊 + 黑邊分隔，active 換亮色頂起 ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display:flex; height: var(--tabbar-h);
  padding-bottom: var(--safe-bottom);
  border-top: var(--border-ink); background: var(--cream);
}
.tab { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:2px; font-size:11px; font-weight:700; letter-spacing:.4px; color:var(--text-2);
  cursor:pointer; border-right: var(--stroke-2) solid var(--ink);
  background: var(--cream); transition: transform var(--dur) var(--ease), background var(--dur); }
.tab:last-child { border-right: none; }
.tab:hover { background: var(--cream-2); }
.tab[aria-current="page"] {
  background: var(--yellow); color: var(--text-on-yellow);
  font-weight:900; transform: translateY(-2px); }

/* ── 迷你播放列（撞色浮條 + 黑邊 + 微傾，貼 tab-bar 上方） ── */
.miniplayer {
  position: relative; z-index: 4; flex: 0 0 auto;
  display:flex; align-items:center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-1);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  border: var(--border-ink); background: var(--grape); color: var(--text-on-grape);
  transform: rotate(var(--tilt-c)); cursor:pointer; box-shadow: var(--shadow-pop);
}
.miniplayer:active { transform: rotate(0deg) scale(0.99); }

/* ── 訂閱方案：Plus 推薦卡（撞色 + 粗邊 + 硬影 + 微傾） ── */
.plan { padding: var(--space-4); border-radius: var(--radius-card);
  border: var(--border-ink-2); background: var(--cream-2); transform: rotate(var(--tilt-b)); }
.plan.is-featured { background: var(--pink); color: var(--text-on-pink);
  border: var(--border-ink); box-shadow: var(--shadow-pop); transform: rotate(var(--tilt-a)); }
.plan .price { font-size:23px; font-weight:900; font-variant-numeric: tabular-nums; }
.plan .badge { display:inline-block; font-size:11px; font-weight:900; padding:2px 8px;
  border: var(--border-ink-2); border-radius:999px; background: var(--yellow);
  color: var(--ink); transform: rotate(var(--tilt-d)); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
