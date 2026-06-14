---
name: app-wireframe
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Wireframe / lo-fi 線框原型 style. Triggers on wireframe、lo-fi、低保真、線框稿、原型稿、灰階線稿、mockup、prototype、骨架圖、placeholder box、手繪註記、greybox、blueprint UI.
user-invocable: true
---

# 線框 lo-fi — 迴聲 Resona

## Style Philosophy

線框 lo-fi 是「設計流程最前端」的視覺語言——刻意停在**低保真原型稿（greybox）**階段，把焦點放在資訊結構、版面骨架、互動意圖，而**不是視覺細節**。它故意「未完成」：純灰階、細線條、佔位方框、對角斜線交叉，讓觀者一眼讀懂「這裡是封面」「這裡是曲目列」「這是一顆按鈕」，而不被顏色與裝飾分心。在音樂串流 App 中，這風格表現出「**這是還沒上色的設計稿，但結構已經完整可用、可點、可導覽**」——像把 Figma / Balsamiq 的灰模 mockup 直接做成一台可捲動、可互動的手機 demo。

精修核心原則：**「低保真」不等於「低密度」**。本次精修要把每個畫面的資訊量做滿（多區段、多卡片、完整曲目、迷你播放列），但所有新增內容**仍維持 greybox 語彙**——圖像永遠是「方框 + 對角交叉 X」，強調永遠靠「加粗線 + 加深灰」，註記永遠用手寫便利貼字體，**絕不引入任何 hue 或實際照片**。密度提高，保真度不變。

三個視覺辨識特徵（不可妥協）：

1. **純灰階線稿**：只有 `#111` 線條 / `#fff` 底 / `#f0f0f0`–`#e4e4e4` 佔位灰；零彩色、零照片、零漸層裝飾色。強調 (accent) 只用「比較粗 / 比較深的灰線」表達，不用任何 hue。連 active 狀態、推薦徽章、進度條已播段，全部只是「更深的灰 + 更粗的線」。
2. **方框 + 對角斜線交叉佔位**：所有圖像位置（專輯封面、頭像、Banner、歌單縮圖、迷你播放列縮圖）一律是**一個邊框方框，內含兩條對角線交叉成 X**——原型稿宇宙通用的「此處有圖」符號。純 CSS 線性漸層繪製，不引用任何圖檔、不留 `<img>`。
3. **細實線 / 虛線邊框 + 手寫便利貼註記**：元件用 1px 實線、分隔用 1px 虛線（`dashed`）勾勒；穿插 monospace / 標楷體的「便利貼批註」（如 `// 拖曳排序`、`〔自動更新〕`、`[ 封面 ]`），營造設計師在稿子上手寫批註的草稿氛圍。註記是「氛圍」，**絕不蓋掉或取代任何權威內容字串**。

---

## Design Tokens (CSS variables)

精修重點：間距全面收斂到 **8pt 尺度**（4 / 8 / 12 / 16 / 20 / 24 / 32），字級階梯補滿行高 / 字重 / 字距，圓角與陰影 token 全部集中宣告，數值即真理。

```css
:root {
  /* ===== 裝置外殼基準 ===== */
  --screen-w: 390px;            /* iPhone 直式邏輯寬，鎖死不變 */
  --screen-h: 844px;            /* iPhone 直式邏輯高 */
  --statusbar-h: 44px;          /* 狀態列固定高 */
  --tabbar-h: 56px;             /* tab-bar 本體高（不含安全區） */
  --miniplayer-h: 56px;         /* 迷你播放列高 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --device-radius: 44px;        /* 圓角螢幕半徑 */
  --content-pad: 16px;          /* 內容區左右留白 */

  /* ===== 灰階調色（唯一允許的顏色家族）===== */
  --ink: #111111;               /* 主線條 / 主文字 */
  --ink-2: #555555;             /* 次要文字 */
  --ink-3: #999999;             /* 註記 / 弱化文字 / 時長 */
  --line: #cccccc;              /* 一般邊框線 */
  --line-2: #dddddd;            /* 更淺分隔線 */
  --line-strong: #111111;       /* 強調邊框（active / 主按鈕）*/
  --paper: #ffffff;             /* 底色 */
  --fill: #f0f0f0;              /* 佔位灰 / 區塊填充 */
  --fill-2: #e4e4e4;            /* 次階佔位灰（hover / 選取 / 已播軌）*/
  --fill-3: #d8d8d8;            /* :active 按下回饋灰 */
  --note: #888888;              /* 手寫便利貼註記墨色 */

  /* ===== 線條樣式 token ===== */
  --bw: 1px;                    /* 標準線寬 */
  --bw-strong: 2px;            /* 強調線寬（主按鈕 / active）*/
  --border: var(--bw) solid var(--line);
  --border-strong: var(--bw-strong) solid var(--line-strong);
  --border-dash: var(--bw) dashed var(--line);
  --border-dash-2: var(--bw) dashed var(--line-2);

  /* ===== 圓角（原型稿偏方正，圓角極小）===== */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-pill: 999px;         /* 僅 chip / tab / toggle 用 */

  /* ===== 陰影：原型稿無柔光陰影；最多一條離線位移虛邊 ===== */
  --shadow-flat: none;
  --shadow-lift: 2px 2px 0 var(--line);   /* 紙張錯位「貼紙感」，非柔光陰影 */
  --shadow-lift-strong: 3px 3px 0 var(--ink); /* 推薦方案卡硬位移 */

  /* ===== 間距系統（8pt 尺度，4 為半階）===== */
  --sp-1: 4px;    /* 半階：icon 與文字微距 */
  --sp-2: 8px;    /* 基本單位 */
  --sp-3: 12px;   /* 列內間距 */
  --sp-4: 16px;   /* 區塊內 padding / 卡片間距 */
  --sp-5: 20px;   /* 區段內上下節奏 */
  --sp-6: 24px;   /* 區段間距 */
  --sp-8: 32px;   /* 大區段分隔 / 畫面頂留白 */

  /* ===== 字體：草稿手感，正文無襯線、註記用 mono/標楷 ===== */
  --font-ui: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  --font-note: 'DFKai-SB', 'BiauKai', '標楷體', ui-monospace,
               'SFMono-Regular', 'Courier New', monospace;

  /* ===== 對角交叉佔位圖（核心識別）===== */
  /* 兩條 linear-gradient 畫出 X，配合 --fill 底色 + --line 邊框 */
  --x-placeholder:
    linear-gradient(to top right,
      transparent calc(50% - 0.5px), var(--line) 50%, transparent calc(50% + 0.5px)),
    linear-gradient(to top left,
      transparent calc(50% - 0.5px), var(--line) 50%, transparent calc(50% + 0.5px));

  /* ===== 動效時長（如用 transition）===== */
  --dur-fast: 120ms;
  --ease: cubic-bezier(0.2, 0, 0.2, 1);
}
```

### 間距使用規則（8pt 一致性）

| 場景 | token | 數值 |
| --- | --- | --- |
| icon 與文字、徽章內距微縫 | `--sp-1` | 4px |
| 列表列內元素間 gap、chip 內上下 padding | `--sp-2` | 8px |
| song-row 上下 padding、卡片內元素間 | `--sp-3` | 12px |
| 卡片 padding、左右安全留白、卡片間距 | `--sp-4` | 16px |
| 區段標題與內容、控制列上下 | `--sp-5` | 20px |
| 區段與區段之間 | `--sp-6` | 24px |
| 畫面頂部留白、大封面上下 | `--sp-8` | 32px |

**所有 margin / padding / gap 只能取上述 7 個值**，禁止出現 `13px`、`18px`、`7px` 之類離散數字，確保節奏一致、不跑版。

---

## Typography Scale（手機字級階梯，含行高 / 字重 / 字距）

| 級距 | font-size | line-height | font-weight | letter-spacing | 用途 |
| --- | --- | --- | --- | --- | --- |
| display | 28px | 34px (1.2) | 600 | -0.01em | home 大標「迴聲 Resona」、player 曲名 |
| title | 22px | 28px (1.27) | 600 | -0.01em | 各屏屏名標題、專輯名 |
| section | 18px | 24px (1.33) | 600 | 0 | 區段標題「每日迴聲 / 為你精選歌單 / 熱門排行」 |
| heading | 16px | 22px (1.375) | 600 | 0 | 卡片標題、歌單名、方案名 |
| body | 15px | 22px (1.47) | 400 | 0 | 列表主文字、藝人名、說明 |
| label | 13px | 18px (1.38) | 500 | 0 | chip、tab 文字、按鈕、次資訊 |
| caption | 12px | 16px (1.33) | 400 | 0 | 時長、曲目數、價格後綴 |
| note | 11px | 16px (1.45) | 400 (常斜體) | 0.01em | 手寫便利貼註記、佔位標籤 `[ 封面 ]`（`--font-note`） |

- 原型稿避免多字重炫技：**標題 600、正文 400、label/heading 之間的 500** 三檔為主。
- 「查看全部」連結用 label 級 + `--ink-2` + 右側 `›` 線框箭頭。
- 佔位文字（lorem 感）可用實心灰塊 `.text-skeleton`（`--fill` 條，高 8–12px、圓角 2px）替代——但**所有 brief 權威字串（品牌 / 功能 / 方案 / 價格 / 歌單名 / 歌名 / 藝人 / chip / tab）必須是真實可見文字，絕不可用灰塊取代**。
- 文字一律 `overflow: hidden; text-overflow: ellipsis;` 防溢出；多行用 `-webkit-line-clamp` 限行，杜絕跑版。

---

## Component & Layout（逐屏寫滿，密度提高但維持 greybox）

### 整體三層外殼

最外層 `.device`（390×844、`--device-radius` 圓角、`overflow: hidden`、置中、底色 `--paper`、外圈一條 `--border` 模擬裝置邊框）。內部結構：

```
.device
 ├─ .statusbar        (固定頂部，flex:0 0 auto)
 ├─ .viewport         (中間單一可捲動區，flex:1 1 auto，overflow-y:auto)
 │    └─ 6 個 <section data-screen> 垂直堆疊，屏間用 --border-dash + 屏名註記分隔
 └─ .dock             (固定底部，flex:0 0 auto)
      ├─ .miniplayer  (迷你播放列，常駐於 home/search/library/profile，player 屏隱藏)
      └─ .tabbar      (4 tab)
```

屏與屏之間用一條 `--border-dash` 分隔線 + 一行 `--font-note` 屏名註記（如 `// ───── SCREEN: search ─────`），凸顯「這是一份標注過的線框稿」。

互動導覽（用 `:target` + `<a href="#screen">` 或無 JS 的純錨點，或極簡 inline JS）：tab 切換、卡片 → detail、曲目列 / 迷你播放列 → player、detail/player 返回鍵。所有導覽元素 `cursor: pointer` + `:hover` / `:active` 回饋。

---

### 1. `status-bar`（固定頂部，每頁不可省）

- 高 `--statusbar-h`，底邊一條 `--border`，左右 padding `--content-pad`。
- 左：`9:41`（`--font-note`，等寬）。
- 右：訊號 / Wi-Fi / 電量——用**線框符號**表達：
  - 訊號＝4 條由矮到高的細實線豎條（純 CSS，`--ink` 邊框 + 部分填 `--fill`）；
  - Wi-Fi＝同心弧線（可用 CSS border-radius 弧或 `▸))` 線框）；
  - 電量＝一個圓角矩形外框 + 內部填滿約 70% 的 `--ink` 色塊 + 右側小凸點。
- 全部灰階線稿，不上色。

---

### 2. `home`（多區段卡牆，至少 3 區段）

頂部標題列：大標 `迴聲 Resona`（display 級）+ slogan 副標（body, `--ink-2`），旁附 `--font-note` 註記 `〔v3.2.0 草稿〕`。

**區段 A — 每日迴聲（推薦 Banner）**
- 區段標題列：`每日迴聲`（section 級）+ 右側 `查看全部 ›`。
- 一個寬 placeholder（對角交叉 X）Banner 佔位框（約 358×140），左上角標籤 `[ Banner ]`，框內手寫註記 `// 個人化每日推薦 · 每天 06:00 更新`。
- Banner 下方一行：推薦歌單名 + 一顆線框 `▶ 立即播放` 小按鈕（`cursor:pointer`，點擊 → player）。

**區段 B — 為你精選歌單（7 歌單卡牆）**
- 區段標題列：`為你精選歌單`（section 級）+ `查看全部 ›`。
- 4 分類 chip 橫排：`華語`、`獨立`、`電子`、`放鬆`——`.chip`（`--border` 線框膠囊），第一顆為 active（`--border-strong` 粗線框 + `--ink`）。chip 可橫向捲動，`cursor:pointer`。
- 2 欄網格 `.playlist-card`，每張 = 上方正方 X 佔位封面（`cover-grid`）+ 下方歌單名（heading）+ 副標（caption, `--ink-3`，如 `28 首 · 1 小時 52 分`）。**7 張全部列出歌單名**：`浪潮回聲`、`深夜公路`、`島嶼晨光`、`雨後散步`、`城市心跳`、`山海之間`、`失重時刻`。整張卡 `cursor:pointer`，點擊 → detail。

**區段 C — 熱門排行（編號清單）**
- 區段標題列：`熱門排行`（section 級）+ `查看全部 ›`。
- 編號清單 `.rank-list`，至少 5 列 `.song-row` = 左方大號排名 `01`–`05`（`--font-note`, `--ink-3`）+ 小 X 佔位縮圖 + 中間兩行（歌名 body / 藝人 caption `--ink-3`）+ 右方時長 + 線框 `▷` 播放鍵（`cursor:pointer` → player）。歌名取自 9 歌名清單，藝人取自 5 藝人清單。

**功能露出條**（區段底）：用 `--font-note` 列核心功能名作為「待設計」標注，需含全部 6 核心功能名為可見文字（如 `無損音質串流`、`歌詞同步` 等照 brief）。

---

### 3. `search`（搜尋框 + chip + 熱門歌曲 + 熱門藝人）

- 屏名標題 `搜尋`（title）。
- 搜尋框 `.search-box`：`--border` 線框圓角矩形 + 左側放大鏡線框 icon（CSS 畫圓 + 一條斜線把手）+ placeholder 文字 `搜尋歌曲、藝人、歌單`（`--ink-3`）。`cursor:text`。
- 4 分類 chip 再現一次（`華語 / 獨立 / 電子 / 放鬆`），第一顆 active。
- **熱門歌曲**（區段標題 `熱門歌曲` + `查看全部 ›`）：編號清單 `.song-row`，每列 = 編號（`01`–`05`，`--font-note`）+ 小 X 佔位縮圖 + 中間兩行（歌名 / 藝人）+ **右方時長**（caption, `--ink-3`，如 `3:42`）+ 線框 `▷`。歌名 / 藝人取自權威清單，列間 `--border-dash`。`cursor:pointer` → player。
- **熱門藝人**（區段標題 `熱門藝人`）：橫向捲動列，每個 = 圓形 X 佔位頭像（`avatar-sm`）+ 下方藝人名（caption）。露出 5 位藝人：`海平面樂團`、`夜行列車`、`Echo Lab`、`何遠`、`林知夏`（照 brief，需與 brief 5 藝人一字不差）。

---

### 4. `detail`（大封面 + 完整資訊 + 9 曲目）

- 頂部導覽列：左方線框返回鍵 `‹`（`cursor:pointer` → home）+ 右方線框 `⋯` 選單。
- **大正方對角交叉 X 佔位封面**（`cover-md`，約 160×160，置中或左對齊），左上角標籤 `[ 專輯封面 ]`。
- 專輯資訊區：
  - 專輯名 `島嶼晨光`（title）。
  - 一行 meta：藝人 `林知夏` · 年份 `2026` · `9 首` · 總時長 `34 分鐘`（body / caption, `--ink-2`），用 `·` 分隔。
- 操作列：`.btn-primary`（`--border-strong` 粗線框，文字 `▶ 播放全部`，`cursor:pointer` → player）+ `.btn-ghost`（線框 `⤮ 隨機播放`）並排，gap `--sp-3`。
- **9 首完整曲目清單** `.track-list`：每列 `.song-row` = 左方曲序號（`01`–`09`，`--font-note`, `--ink-3`，寬 22px）+ 中間兩行（歌名 / 藝人 caption）+ 右方時長 + 行尾線框選單鍵 `⋮`（或 `▷` 播放鍵，`cursor:pointer` → player）。**9 首全列**（照 brief 9 歌名一字不差）：〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉。列間用 `--border-dash` 分隔。

---

### 5. `player`（大封面 + 進度 + 完整控制 + 歌詞同步）

> player 屏顯示時，底部 `.miniplayer` 隱藏（已展開為全屏播放）；`.tabbar` 仍在。

- 頂部導覽列：左方線框 `⌄`（收合 → home）+ 中間 `正在播放`（label, `--ink-3`）+ 右方 `⋯`。
- 置中**大方形對角交叉 X 佔位封面**（`cover-lg`，約 280×280），左上角標籤 `[ 正在播放封面 ]`。
- 曲目資訊：曲名 `晚風練習曲`（display）+ 藝人 `林知夏`（body, `--ink-2`）+ 專輯 `島嶼晨光`（caption, `--ink-3`）。三行置中或左對齊。
- **歌詞同步**：一塊歌詞區，3 行其中**中間一行高亮**（`--ink` 粗、`--bw-strong` 下底線或 `--fill-2` 底）表示「正在唱的這一行」，上下行用 `--ink-3` 弱化，旁附 `--font-note` 註記 `// 逐字高亮 · 滾動同步`。
- **進度條** `.progress`：一條 `--line` 細軌 + 一段填滿的 `--ink` 已播軌（`--fill-2` 為未播）+ 一個圓形線框拖鈕（`knob`，`cursor:grab`）；兩端時間 `02:47`（目前）/ `04:12`（總長）（caption, `--ink-3`）。
- **控制列**：隨機 `⤮` / 上一首 `◁◁` / **播放暫停**（中央 `--border-strong` 圓形粗框，內含 ▶/⏸ 兩態）/ 下一首 `▷▷` / 循環 `↻`，五顆等距排列。中央播放鍵直徑大、`:active` 縮放回饋。
- 底列徽章 + 音量：左方 `Hi-Res 無損` 線框小膠囊徽章（音質）+ 右方音量線框滑桿（細軌 + 圓鈕）。旁附 `--font-note` 註記 `// 音質徽章 + 音量`。

---

### 6. `library`（分頁 + 收藏清單 + 離線 + 共享）

- 屏名標題 `音樂庫`（title）。
- **分頁列** `.lib-tabs`：3 個線框分頁 `歌單` / `專輯` / `已下載`，第一個 active（`--border-strong` 下底線 + `--ink`，其餘 `--ink-3`），`cursor:pointer`。
- **收藏歌單清單**（列表式，非卡牆）`.lib-row`：每列 = 左小 X 佔位縮圖（`cover-sm`）+ 中間兩行（歌單名 heading / 副標 caption「歌單 · 28 首」）+ 右側拖曳把手線框（三條短橫線 `≡`）+ `--font-note` 註記 `// 拖曳排序`。再次列出收藏歌單名（至少 `浪潮回聲`、`深夜公路`、`島嶼晨光`，照 brief）。`cursor:pointer` → detail。
- **離線下載**區段：標題 `離線下載`（section）+ 線框 ↓ icon + 一行說明（caption `--ink-3`，如 `已下載 12 首 · 約 86 MB`）+ 一條線框進度 bar 示意。
- **共享音樂庫**區段：標題 `共享音樂庫`（section）+ 線框雙人 icon + 一行說明 + 線框開關 toggle（`cursor:pointer`）。

---

### 7. `profile`（使用者卡 + 播放偏好 + 三方案）

- 屏名標題 `我的`（title）。
- **使用者卡** `.user-card`：左方圓形 X 佔位頭像（`avatar`）+ 右方暱稱（heading）+ `迴聲 Resona Plus 會員`字樣（caption, `--ink-3`）+ 線框 `編輯 ›`。`--border` 框 + `--shadow-lift`。
- **播放偏好**區段（標題 `播放偏好`）：設定列 `.setting-row` 數列，每列 = 標籤 + 右側線框 toggle 或值。必含 `跨裝置接續播放`（toggle 開＝圓鈕在右、pill 內側填 `--fill-2`）、`無損音質串流`、`歌詞同步` 等列。`cursor:pointer`。
- **三訂閱方案卡** `.plan-card` 直向堆疊，全部 `--border` 線框（**推薦方案 Plus 用 `--border-strong` 粗框 + `--shadow-lift-strong` 硬位移貼紙感 + 右上角線框 `推薦` 角標**；**目前方案標 `目前方案`**）：
  - `免費` — `NT$ 0`／月（隨機播放、含廣告、標準音質）
  - `Plus` — `NT$ 149`／月（無廣告、無損音質、離線下載）— **推薦**
  - `Family` — `NT$ 249`／月（6 帳號、共享音樂庫、家長控制）
  - 每卡：方案名（heading）+ 價格（`.price`，22px 600）+ 後綴「／月」（caption）+ 權益要點清單（body，每點前線框 `–` 或 `✓` 框）+ 底部線框 `選擇方案` / `目前方案` 按鈕。
  - 價格字串嚴格照 brief：`NT$ 0`、`NT$ 149`、`NT$ 249`（`NT$` 與數字間一個半形空格，後綴全形「／月」）。

---

### 8. mini-player（迷你播放列，常駐 tab-bar 上方）

- `.miniplayer` 緊貼 `.tabbar` 上方，是 `.dock` 的一部分，固定於 `.device` 底部。
- 高 `--miniplayer-h`，頂邊一條 `--border`，底邊與 tabbar 相連。
- 結構：左方小 X 佔位縮圖（`cover-sm`，約 40×40）+ 中間兩行（歌名 `晚風練習曲` body / 藝人 `林知夏` caption `--ink-3`，皆 ellipsis 防溢出）+ 右方一顆線框播放/暫停鍵（▶/⏸ 兩態，`cursor:pointer`）。
- 整條 `cursor:pointer`，點擊 → 展開到 `player` 畫面。
- **顯示規則**：顯示於 home / search / library / profile；在 player 畫面**隱藏**（用 `:target` 或 body class 控制：`.device[data-screen="player"] .miniplayer { display:none; }`，或對應錨點選擇器）。

---

### 9. `tab-bar`（底部 4 tab，固定）

- 高 `--tabbar-h` + `--safe-bottom` 安全區，頂邊一條 `--border`（若上方有 miniplayer 則由 miniplayer 提供分隔），固定於 `.device` 底部。
- 4 tab 等寬：`首頁` / `搜尋` / `音樂庫` / `我的`，每個 = 上方線框 icon（純 CSS 幾何：屋形 / 放大鏡 / 方塊堆 / 圓圈）+ 下方 label（caption），`cursor:pointer`。
- **active 態**：當前頁 icon 與文字改 `--ink` 粗線（`--bw-strong`），其餘 tab 用 `--ink-3` 細線，視覺上明顯區隔。
- `:active` 按下回饋：背景閃 `--fill`。

---

## Micro-interactions（微互動）

- 所有可點元素 `cursor: pointer`（搜尋框用 `cursor: text`，拖鈕用 `cursor: grab`）。
- **`:hover`**（桌面預覽）：卡片 / 列 / 按鈕背景轉 `--fill`、邊框轉 `--line-strong`；chip / tab 文字轉 `--ink`。
- **`:active`**（按下回饋）：背景轉 `--fill-3`、`transform: translateY(1px)` 或 `scale(0.98)`，模擬實體按下。
- 播放鍵 **▶/⏸ 兩態**：用 `:checked`（hidden checkbox）或 class 切換顯示三角 / 雙豎線（純 CSS 幾何或字符）。
- tab / 卡片 / 分頁有明確 **active 視覺**（加粗線 + 加深灰）。
- 若用 `transition`：只動 `transform` / `opacity`，時長 `--dur-fast`，並**必附 `@media (prefers-reduced-motion: reduce)` 關閉**。

---

## 無跑版規範（Layout Integrity）

- 裝置容器 `.device` **鎖死 390×844**，`overflow: hidden`，置中；不做 RWD 斷點變形。
- `status-bar` 永遠在頂（`flex: 0 0 auto`）；`.dock`（miniplayer + tab-bar）永遠在底（`flex: 0 0 auto`）。
- 中間 `.viewport` 為當前畫面的**單一可捲動區**（`flex: 1 1 auto; overflow-y: auto`），`padding-bottom` 預留 `calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-4))`，確保內容**不被 dock 遮擋**；頂部預留 status-bar 高。
- 文字一律設 `min-width: 0` + `overflow: hidden; text-overflow: ellipsis`（單行）或 `-webkit-line-clamp`（多行），**不溢出、不被裁切**。
- 列 / 卡 / 按鈕內 padding 充足（至少 `--sp-3`），元素間 gap 取 8pt 尺度值。
- 所有 flex 子項加 `min-width: 0` 防止內容撐爆容器。
- 網格用 `grid-template-columns: repeat(2, 1fr)` + `gap: var(--sp-4)`，自動均分不溢出。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 只用 `#111 / #555 / #999 / #ccc / #ddd / #e4e4e4 / #f0f0f0 / #fff` 灰階家族 | 出現任何彩色 hue（藍、綠、品牌色） |
| 圖像位置一律「方框 + 對角交叉 X」純 CSS 佔位（含 mini-player 縮圖） | 引用任何 `.webp` / `.png` / 真實照片 / 漸層裝飾色 |
| 邊框用 1px 實線 / 1px 虛線勾勒元件 | 用柔光 box-shadow、毛玻璃、立體擬物 |
| 圓角極小（2–6px），保持方正草稿感 | 大圓角、藥丸卡片（chip / tab / toggle 除外）|
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 出現 7px / 13px / 18px 等離散數字 |
| 穿插 `--font-note` 手寫便利貼註記（`// …`、`[ … ]`、`〔…〕`） | 把註記寫成正式 UI 文案、或蓋掉真實內容字串 |
| 密度提高（多區段 / 完整曲目 / mini-player） | 為了密度引入彩色或照片破壞 greybox 語彙 |
| brief 權威字串都是真實可見文字 | 用 `.text-skeleton` 灰塊取代任何權威字串 |
| active / 推薦 / 已播 靠「加粗線 + 加深灰」表達 | 用填色 / 彩色高亮表達選取 |
| 所有可點元素 `cursor:pointer` + `:hover`/`:active` 回饋 | 靜態無回饋的「死」介面 |

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- `<body data-viewport="mobile">` 必須存在（驗證辨識依據）。
- 8 個 `<section data-screen="<id>">`，固定 id 與順序、各出現恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。**最高頻錯誤是只寫 `id=` 漏寫 `data-screen=`，務必兩者都有。** mini-player 不是獨立 `data-screen`，併入 `tab-bar` 上方的 `.dock`。
- status-bar 顯示 `9:41`（可見文字）。
- tab-bar 四 tab「首頁 / 搜尋 / 音樂庫 / 我的」皆為可見 body 文字。
- 三層定價精確字串（同屏，profile 訂閱卡）：`NT$ 0`、`NT$ 149`、`NT$ 249`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。
- 可互動多畫面導覽：**tab 切換**（4 tab）+ **卡片 → detail** + **曲目 / 迷你播放列 → player** + **detail / player 返回鍵**。用純錨點 `:target` 或 ≤8KB inline JS 切換 `.viewport` 顯示的屏。
- mini-player 顯示於 home / search / library / profile，player 屏隱藏；點擊展開到 player。
- 品牌 `迴聲` / `Resona`、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、`9:41`、底部 4 tab 皆為**可見 body 文字**，一字不差照 brief。
- 單檔 HTML ≤ 200 KB；**無外部 CDN**（`<link>`/`<script>`/`<img>` 的 src/href 不可 `http://` 或 `https://`）。
- 不使用任何 framework CSS（Tailwind 等）；全靠本檔 CSS 變數驅動。WCAG AA 對比（`--ink #111` on `--paper #fff` 遠超 AA；`--ink-3 #999` 僅用於次要註記 / 時長 / 弱化文字）。
- 本風格**無點陣圖**：所有封面 / 縮圖 / Banner / 頭像 / mini-player 縮圖皆用純 CSS（`--x-placeholder` 對角交叉 + `--fill` 灰底 + 線框）繪製，不引用 `assets/` 任何圖檔、不留 `<img>` 標籤。
- 若使用任何 `@keyframes` / `transition`，必須附 `@media (prefers-reduced-motion: reduce)` 關閉或簡化，且只動 `transform` / `opacity`。

---

## Required Images

**無**。線框 lo-fi 為純 CSS 風格，不使用點陣圖。`assets-manifest.json` 為 `{ "style": "Wireframe lo-fi", "images": [] }`。所有圖像位置（專輯封面、歌單縮圖、player 大封面、Banner、頭像、mini-player 縮圖）一律以「邊框方框 + 對角交叉 X」的純 CSS `--x-placeholder` 佔位繪製，**不引用任何圖檔、不留 `<img>` 標籤**。

---

## Reference Snippet

可直接套用的 CSS（≥ 60 行，體現灰階線稿、對角交叉佔位、8pt 間距、區段、song-row、卡片、mini-player、tab-bar、進度條、訂閱卡、手寫註記 + prefers-reduced-motion）：

```css
/* ===== 手機外殼（三層：statusbar / viewport / dock）===== */
.device {
  width: var(--screen-w); height: var(--screen-h);
  margin: 0 auto; background: var(--paper); color: var(--ink);
  border: var(--border); border-radius: var(--device-radius);
  overflow: hidden; display: flex; flex-direction: column;
  font-family: var(--font-ui); position: relative;
}

/* ===== 狀態列 9:41 + 線框符號 ===== */
.statusbar {
  height: var(--statusbar-h); flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--content-pad); border-bottom: var(--border);
  font: 13px/1 var(--font-note); color: var(--ink);
}
.statusbar .battery {            /* 線框電量：外框 + 70% 填充 + 凸點 */
  width: 22px; height: 11px; border: var(--border);
  border-radius: var(--radius-xs); position: relative;
  background: linear-gradient(to right, var(--ink) 0 70%, transparent 70%);
}
.statusbar .battery::after {
  content: ""; position: absolute; right: -3px; top: 3px;
  width: 2px; height: 5px; background: var(--ink); border-radius: 0 1px 1px 0;
}

/* ===== 可捲動內容區（留底部 dock 高度）===== */
.viewport {
  flex: 1 1 auto; overflow-y: auto;
  padding: var(--sp-5) var(--content-pad)
    calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-4));
}

/* ===== 區段標題列（含「查看全部」）===== */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-6) 0 var(--sp-3);
}
.section-head h2 { font: 600 18px/1.33 var(--font-ui); margin: 0; }
.section-head .more { font: 500 13px/1 var(--font-ui); color: var(--ink-2); cursor: pointer; }

/* ===== 對角交叉「此處有圖」佔位框（封面 / 縮圖 / banner / 頭像共用）===== */
.ph {
  background-color: var(--fill); background-image: var(--x-placeholder);
  border: var(--border); border-radius: var(--radius-sm); position: relative;
}
.ph[data-label]::before {        /* [ 封面 ] 角落標籤 */
  content: attr(data-label); position: absolute; top: 4px; left: 6px;
  font: 11px/1.2 var(--font-note); color: var(--ink-3);
}
.cover-lg { width: 280px; height: 280px; margin: 0 auto; }   /* player 大封面 */
.cover-md { width: 160px; height: 160px; }                   /* detail 封面 */
.cover-grid { width: 100%; aspect-ratio: 1; }               /* home 卡牆封面 */
.cover-sm { width: 48px; height: 48px; border-radius: var(--radius-xs); }
.cover-xs { width: 40px; height: 40px; border-radius: var(--radius-xs); } /* mini-player */
.avatar { width: 56px; height: 56px; border-radius: 50%; }

/* ===== 手寫便利貼註記 ===== */
.note { font: italic 11px/1.45 var(--font-note); color: var(--note); letter-spacing: .01em; }

/* ===== 分類 chip（線框膠囊，active 加粗）===== */
.chip {
  display: inline-flex; align-items: center; padding: 8px 12px;
  border: var(--border); border-radius: var(--radius-pill);
  font: 500 13px/1 var(--font-ui); color: var(--ink-2);
  background: var(--paper); cursor: pointer;
}
.chip:hover { border-color: var(--line-strong); color: var(--ink); }
.chip:active { background: var(--fill-3); }
.chip[aria-selected="true"] { border: var(--border-strong); color: var(--ink); }

/* ===== 歌單卡（2 欄網格）===== */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--sp-4); }
.playlist-card { cursor: pointer; min-width: 0; }
.playlist-card .name {
  font: 600 16px/1.375 var(--font-ui); margin-top: var(--sp-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.playlist-card .sub { font: 400 12px/1.33 var(--font-ui); color: var(--ink-3); }
.playlist-card:active { transform: scale(.98); }

/* ===== 歌曲 / 曲目列 ===== */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-3) 0; border-bottom: var(--border-dash); cursor: pointer;
}
.song-row:hover { background: var(--fill); }
.song-row:active { background: var(--fill-3); }
.song-row .idx { font: 13px/1 var(--font-note); color: var(--ink-3); width: 22px; flex: 0 0 auto; }
.song-row .meta { flex: 1 1 auto; min-width: 0; }
.song-row .title {
  font: 600 15px/1.3 var(--font-ui); color: var(--ink);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.song-row .artist { font: 400 12px/1.4 var(--font-ui); color: var(--ink-3); }
.song-row .time { font: 11px/1 var(--font-note); color: var(--ink-3); flex: 0 0 auto; }

/* ===== 主 / 次按鈕（線框，無填色，含按下回饋）===== */
.btn-primary, .btn-ghost {
  display: inline-flex; align-items: center; gap: var(--sp-1);
  padding: 10px 20px; border-radius: var(--radius-pill);
  background: var(--paper); color: var(--ink);
  font: 600 15px/1 var(--font-ui); cursor: pointer;
}
.btn-primary { border: var(--border-strong); }
.btn-ghost { border: var(--border); }
.btn-primary:active, .btn-ghost:active { background: var(--fill-3); transform: translateY(1px); }

/* ===== 進度條 ===== */
.progress { position: relative; height: 3px; background: var(--fill-2); margin: var(--sp-4) 0; border-radius: var(--radius-pill); }
.progress .played { position: absolute; inset: 0 45% 0 0; background: var(--ink); border-radius: var(--radius-pill); }
.progress .knob {
  position: absolute; left: 55%; top: 50%; width: 12px; height: 12px;
  transform: translate(-50%, -50%); border: var(--border-strong);
  border-radius: 50%; background: var(--paper); cursor: grab;
}
.progress-time { display: flex; justify-content: space-between; font: 11px/1 var(--font-note); color: var(--ink-3); }

/* ===== 歌詞同步（中間行高亮）===== */
.lyrics .line { font: 400 15px/1.6 var(--font-ui); color: var(--ink-3); text-align: center; }
.lyrics .line.active { color: var(--ink); font-weight: 600; }

/* ===== 訂閱方案卡（Plus 推薦 = 粗框 + 硬位移貼紙感）===== */
.plan-card {
  border: var(--border); border-radius: var(--radius-md);
  padding: var(--sp-4); margin-bottom: var(--sp-4); background: var(--paper); position: relative;
}
.plan-card[data-recommend] { border: var(--border-strong); box-shadow: var(--shadow-lift-strong); }
.plan-card[data-recommend]::after {
  content: "推薦"; position: absolute; top: var(--sp-3); right: var(--sp-3);
  font: 11px/1 var(--font-note); color: var(--ink); border: var(--border-strong);
  border-radius: var(--radius-xs); padding: 3px 6px;
}
.plan-card .price { font: 600 22px/1.2 var(--font-ui); color: var(--ink); }
.plan-card .unit { font: 400 12px/1.33 var(--font-ui); color: var(--ink-3); }

/* ===== mini-player（常駐 dock 上方；player 屏隱藏）===== */
.dock { flex: 0 0 auto; }
.miniplayer {
  display: flex; align-items: center; gap: var(--sp-3);
  height: var(--miniplayer-h); padding: 0 var(--content-pad);
  border-top: var(--border); cursor: pointer;
}
.miniplayer .meta { flex: 1 1 auto; min-width: 0; }
.miniplayer .title { font: 600 13px/1.3 var(--font-ui); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .artist { font: 400 11px/1.3 var(--font-ui); color: var(--ink-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .play { width: 32px; height: 32px; border: var(--border); border-radius: 50%; display: grid; place-items: center; cursor: pointer; }
.miniplayer .play:active { background: var(--fill-3); }
.device[data-screen="player"] .miniplayer { display: none; }   /* player 屏隱藏 */

/* ===== 底部 tab-bar（active 加粗加深）===== */
.tabbar {
  display: flex; height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom); border-top: var(--border); background: var(--paper);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: var(--sp-1); font: 500 11px/1 var(--font-ui); color: var(--ink-3); cursor: pointer;
}
.tabbar .tab:active { background: var(--fill); }
.tabbar .tab[aria-current="page"] { color: var(--ink); font-weight: 600; }
.tabbar .tab[aria-current="page"] .ic { border-width: var(--bw-strong); }

/* ===== Reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .btn-primary:active, .btn-ghost:active, .playlist-card:active { transform: none; }
}
```
