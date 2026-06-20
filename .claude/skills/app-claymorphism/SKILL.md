---
name: app-claymorphism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Claymorphism style. Triggers on Claymorphism、黏土擬態、軟陶、軟糖 UI、clay、puffy、膨起、3D inflated、糖果色、超大圓角、果凍按鈕、可愛 UI、軟 UI、play 軟糖球.
user-invocable: true
---

# 黏土擬態 — 迴聲 Resona

## Style Philosophy

黏土擬態（Claymorphism）把整個 App 想像成**一盒用軟陶捏出來、再吹一口氣膨起來的彩色糖果**：每一個元件都圓潤、胖胖、軟軟的，邊角是近乎球體的極大圓角，表面像剛出爐的棉花糖——頂部被光打亮、底部窩進一圈柔影，看起來「按下去會凹、放手會彈回來」。它跟新擬物化（Neumorphism）最大的差別是：**Neumorphism 是單色微浮雕、克制、近乎隱形；Claymorphism 是彩色、更膨、更俏皮、像可以伸手捏的軟糖。**

用在 迴聲 Resona 音樂串流 App，這風格傳達「柔軟、療癒、可愛、果凍感」：專輯封面是一塊塊不同糖果色相、頂部帶高光的澎潤圓角方塊；播放鍵是一顆大軟糖圓球；分類 chip 是捏出來的膠囊軟糖；整個 App 像一台被捏成軟陶的隨身播放器。

本次精修的三條鐵律（**務必寫進 tokens 與 snippet，照做就有辨識度**）：

1. **三層立體配方 = 吹氣膨起（核心鐵律，每個 clay 元件都要）**：每個元件的「澎潤」由三層陰影疊出——① **外部柔和 drop-shadow**（顏色取「該元件色相加深」、blur 大、位移中等偏下）讓它浮在桌面上；② **內部頂亮 inset highlight**（`inset 0 X 0 rgba(255,255,255,0.7)`）模擬光從上方打在膨起的表面；③ **內部底暗 inset shadow**（`inset 0 -X 0 該色相加深半透明`）讓底緣窩進去。少了任何一層就會塌成扁平卡片或退化成 Neumorphism。
2. **大圓角、近球體**：所有元件 `border-radius` 落在 **22–40px**；播放鍵、頭像、FAB 類圓形元素 `border-radius: 50%` 直接做成軟糖球；chip/toggle 用 `border-radius: 999px` 捏成膠囊。**禁止任何 < 16px 的圓角與任何直角**。
3. **按壓觸覺 = 被捏扁再彈回**：所有可點元件按下時 `transform: scale(0.94)` 並把外影縮小、內凹陰影收緊（像被手指壓扁），放開靠 `transition` 回彈。這個「捏」的回饋是黏土感的靈魂，每個按鈕、卡片、tab、chip 都要有。

三個視覺辨識特徵：
1. **澎潤糖果色封面**：所有專輯/歌單/頭像封面 = 純 CSS 漸層方塊，用不同糖果色相（薰衣草/蜜桃/薄荷/奶油黃/天藍）區分，**每塊都帶頂部 inset 高光**，看起來像一顆顆軟糖磚。
2. **軟糖圓球播放鍵**：主播放鍵是一顆飽滿的大圓球（珊瑚或葡萄紫底 + 雙層外影 + 頂亮高光 + 底暗 inset），三角形 ▶ 用 CSS 邊框畫；按下整顆球被捏扁。
3. **捏出來的膠囊軟糖 chip / toggle**：分類 chip 與開關是膨起的膠囊；**active 時換成糖果色填充並翻成「內凹（按進去）」感**（外影消失、改用內陰影），未選時是凸起的奶白膠囊——靠「凸 vs 凹」分辨選取態。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* tab-bar 本體（clay 較胖，略高） */
  --miniplayer-h: 62px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 20px;
  --device-radius: 46px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 底色：暖白 + 極淡粉紫漸層（鋪在裝置最底層） ── */
  --bg-1: #f3ecff;             /* 漸層起：淡薰衣草白 */
  --bg-2: #fef0f4;             /* 漸層收：淡蜜桃白 */
  --surface: #fbf7ff;          /* 元件預設奶白填充（凸起膠囊/卡用） */
  --surface-2: #fffaf6;        /* 次填充（暖白偏奶油） */

  /* ── 糖果色（元件主色，澎潤色塊用） ── */
  --candy-lav: #b9a6ff;        /* 薰衣草 */
  --candy-peach: #ffb59e;      /* 蜜桃 */
  --candy-mint: #9fe6c9;       /* 薄荷 */
  --candy-cream: #ffd98a;      /* 奶油黃 */
  --candy-sky: #9cc9ff;        /* 天藍 */

  /* ── 糖果色「加深版」：給外 drop-shadow 與內底暗 inset 用（同色相更飽和暗） ── */
  --lav-deep: rgba(124, 99, 224, 0.40);
  --peach-deep: rgba(224, 122, 92, 0.40);
  --mint-deep: rgba(74, 184, 142, 0.40);
  --cream-deep: rgba(214, 160, 54, 0.40);
  --sky-deep: rgba(74, 138, 214, 0.40);

  /* ── 文字（深紫灰，對淺底達 WCAG AA） ── */
  --text-1: #4a3f63;           /* 主文字：對 #fbf7ff 約 8.0:1 ✔AA/AAA */
  --text-2: #6b5f86;           /* 次文字：對 #fbf7ff 約 5.0:1 ✔AA */
  --text-3: #8a7fa6;           /* 弱文字：對 #fbf7ff 約 3.3:1 → 僅限 ≥18px 大字/裝飾 */
  --text-on-accent: #ffffff;   /* 珊瑚/葡萄紫鍵上的白字（皆達 AA，見下） */

  /* ── 互動 / 強調 ── */
  --accent: #ff7a8a;           /* 珊瑚：播放球 / active 重點。白字對 #ff7a8a 約 3.0:1 →
                                  白字僅用於 ≥18px 粗體或 icon；小字改用 --text-1 */
  --accent-strong: #8b5cf6;    /* 葡萄紫：主 CTA / active tab。白字對 #8b5cf6 約 4.6:1 ✔AA */
  --accent-soft: #ffe3e7;      /* 珊瑚極淡填充（active chip 內凹底） */
  --accent-strong-soft: #ece2ff; /* 葡萄紫極淡填充 */

  /* ── clay 材質：高光與凹影的原子 ── */
  --hi: rgba(255, 255, 255, 0.70);     /* 頂亮 inset highlight */
  --hi-strong: rgba(255, 255, 255, 0.85);
  --press-veil: rgba(74, 63, 99, 0.06); /* 按下疊加 */

  /* ── 圓角（黏土：大、近球體；最小 16px） ── */
  --radius-lg: 36px;           /* 大卡 / banner / 大封面 */
  --radius-md: 28px;           /* 一般卡 / 列項 / 搜尋框 */
  --radius-sm: 22px;           /* 小封面縮圖 / 小元件 */
  --radius-pill: 999px;        /* chip / toggle / 膠囊 */
  --radius-ball: 50%;          /* 播放球 / 頭像 / 圓 icon 鈕 */

  /* ── clay 三層陰影配方（核心：外柔影 + 頂亮 inset + 底暗 inset） ── */
  /* 預設奶白凸起（中性元件） */
  --clay:
    0 12px 24px rgba(124, 99, 224, 0.18),          /* 外柔影（淡薰衣草） */
    0 4px 8px rgba(124, 99, 224, 0.10),
    inset 0 3px 4px var(--hi),                      /* 頂亮高光 */
    inset 0 -6px 10px rgba(124, 99, 224, 0.16);     /* 底暗內陰影 */
  /* 小元件（縮圖/小鈕）較淺的凸起 */
  --clay-sm:
    0 6px 14px rgba(124, 99, 224, 0.16),
    inset 0 2px 3px var(--hi),
    inset 0 -4px 7px rgba(124, 99, 224, 0.14);
  /* 「按進去」的內凹態（active chip / 凹槽軌 / 按下保持） */
  --clay-inset:
    inset 0 4px 8px rgba(124, 99, 224, 0.24),
    inset 0 -2px 3px var(--hi);
  /* 按下瞬間（外影縮小 + 內凹收緊，配合 scale .94） */
  --clay-press:
    0 4px 8px rgba(124, 99, 224, 0.16),
    inset 0 2px 5px rgba(124, 99, 224, 0.22),
    inset 0 -2px 3px var(--hi);

  /* ── 字體（圓潤無襯線、偏粗、字距略鬆，呼應軟糖感） ── */
  --font: 'Rounded Mplus 1c', 'Hiragino Maru Gothic ProN', 'PingFang TC',
          'Noto Sans TC', system-ui, -apple-system, 'Segoe UI Rounded', sans-serif;
  --tracking: 0.2px;           /* 字距略鬆 */

  /* ── 動效（軟糖回彈） ── */
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);  /* overshoot 回彈，像彈一下 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 130ms;
  --dur: 220ms;
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 600 / +0.2px | `--text-2` | tab 標籤、播放次數、徽章副字（弱資訊但仍用 text-2 保 AA） |
| label | 13px / 1.4 / 600 / +0.2px | `--text-2` | chip 文字、卡片副標、時長、藝人名 |
| body | 15px / 1.55 / 500 / +0.2px | `--text-2` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 700 / 0 | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.25 / 800 / -0.2px | `--text-1` | 各屏區塊標題（如「每日迴聲」） |
| display | 28px / 1.15 / 800 / -0.4px | `--text-1` | home 品牌大標、player 曲名 |

- 全部用 `--font`；黏土風格字重整體偏粗（500 起跳，標題 800），字距 `--tracking` 略鬆，呼應圓潤軟糖感。
- 數字（時間 9:41、價格、時長、進度）一律 `font-variant-numeric: tabular-nums` 對齊。
- `--text-3`（弱文字）對比約 3.3:1，**只准用在 ≥18px 大字或純裝飾**；任何 ≤15px 的小字一律 `--text-2` 以上以確保 AA。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 手機殼，`overflow:hidden`、`border-radius: --device-radius`，底鋪 `--bg-1 → --bg-2` 暖白粉紫漸層）→ `.statusbar`（固定頂、`z-index:5`）→ `.viewport`（中間可捲動畫面容器，`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.miniplayer`（貼在 tab-bar 上方的常駐迷你播放列、`z-index:4`）→ `.tabbar`（固定底、`z-index:5`）。背景純色暖白，**不放 aurora 光暈、不放任何點陣圖**；層次完全靠 clay 三層陰影堆出，元件之間用充足留白（黏土元件胖、要呼吸感）。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（無跑版的骨架，對齊契約 B2）

- 用一個簡單的 class 切換：`.screen` 預設 `display:none`，**只有** `.screen.is-active { display:flex; flex-direction:column }` 顯示。**嚴禁任何「畫面專屬 class」無條件設 `display`**（會永久疊層）；畫面專屬樣式只能設 padding/排版。JS 點 tab / 卡片 / 迷你播放列 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時** home 為預設 `is-active`，仍可讀完整內容。
- 導覽元素一律加結構屬性 `data-go="<target>"`：歌單/專輯卡 `data-go="detail"`、曲目列/迷你播放列/播放鍵 `data-go="player"`、返回鍵 `data-go="back"`、tab `data-go="home|search|library|profile"`。JS 以事件委派處理 click。
- 導覽行為要全部接好：tab → 切 home/search/library/profile；home 歌單卡 / library 收藏 / search 結果 → 開 detail；迷你播放列 / detail 曲目 / 任一播放鍵 → 開 player；detail / player 左上返回鍵 → 回上一畫面。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 `.viewport` 為當前畫面的唯一可捲動區。`.viewport { flex:1; min-height:0 }`，每個 `.screen` 內部 `overflow-y:auto`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，**不做成胖卡**（保持輕透，融入暖白底）：透明背景、深紫灰字。
- 左側時間 **9:41**（tabular-nums，700），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔；可做成小小的圓潤膠囊電量）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左標題 800 + 右「查看全部」連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display）+ slogan「讓每首歌，回到你身上」；右側頭像 = 糖果漸層**軟糖球**（`--radius-ball` + clay 陰影 + 頂亮）。
2. **每日迴聲（個人化每日推薦 banner）**：一張澎潤大卡（`--radius-lg` + 完整 `--clay`，糖果色填充例如薰衣草），左漸層**軟糖封面** + 「每日迴聲」標題 + 個人化文案 +「個人化每日推薦」字樣 + 一顆**軟糖球播放鍵**（▶）。露出「**無損音質串流**」膨起小徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同糖果色相 `.cover`（澎潤 CSS 漸層方塊 + 頂亮 inset）+ 標題 + 曲數副字；整卡是凸起的軟陶卡，hover 微浮、按下被捏扁。
4. **熱門排行（或最近播放）**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大圓潤排名數字 + 小糖果封面 + 歌名 + 藝人 + 時長 + 軟糖球播放鍵。歌名/藝人取自 9 歌名與 5 藝人。
5. **4 分類 chip 橫排**（華語 / 獨立 / 電子 / 放鬆）置於問候列下方：膨起膠囊軟糖，首個 active（active = 糖果色填充 + 內凹 `--clay-inset`；未選 = 奶白凸起）。

### search（`data-screen="search"`）

- 頂部**膨起搜尋框**（奶白填充 + `--clay`，圓潤 input 外觀 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆），膠囊軟糖。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號 + 小糖果封面 + 歌名 + 藝人 + 時長 + 軟糖球播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向膠囊（糖果漸層**軟糖圓頭像** + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（`data-screen="detail"`）

- 左上**軟糖圓形返回鍵**（‹，奶白凸起球 + clay，cursor:pointer + hover/active 捏扁）。
- **大封面**：頂部大張澎潤糖果漸層封面（`--radius-lg` + 完整 clay + 頂亮高光，色相呼應島嶼晨光，例如薄荷+薰衣草）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（葡萄紫 `--accent-strong` 膨起大鍵 ▶，白字達 AA）+ **隨機播放**（奶白凸起次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列圓潤 `.song-row`（奶白凸起膠囊條）：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾軟糖球播放鍵 / 選單（⋯）。點任一曲 → player。

### player（`data-screen="player"`）— 覆蓋全屏 now-playing

**進入 player 時隱藏底部 dock（tab-bar + mini-player）**；整個 player 用 `height:100%; display:flex; flex-direction:column`，讓控制列永遠固定在 844 內可見、不靠捲動、不被遮擋：

- 左上**軟糖圓形返回鍵**（⌄ 收合，`data-go="back"` 回上一畫面）。
- **大封面**：`flex:1; min-height:0`（可壓縮，永不把下方控制列擠出視窗）的置中大尺寸澎潤糖果漸層方塊（純 CSS conic/radial + 頂亮高光 + 厚 clay，色相呼應島嶼晨光）。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」、時間 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字 `--text-1` 700，其餘 `--text-3`）；對應功能名「歌詞同步」。
- **進度條 = 凹槽軌 + 凸起圓把手**（黏土招牌）：軌道用 `--clay-inset`（按進去的凹槽）+ 珊瑚 fill + 一顆凸起的小軟糖圓 `.knob`（`--radius-ball` + clay-sm）。左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列（固定可見）：隨機（⤮）/ 上一首（⏮）/ **軟糖球播放暫停大鍵（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。播放球用珊瑚或葡萄紫 + 雙層外影 + 頂亮 + 底暗 inset；隨機與循環 active 時填糖果色並翻成內凹。
- 底部固定：**無損音質串流**膨起徽章 + 音量滑桿（同凹槽軌 + 凸把手）。

### library（`data-screen="library"`）

- 「**我的音樂庫**」標題（section）。
- 分頁列（**膨起膠囊 segmented**）：**歌單 / 專輯 / 已下載**，首個 active（active 內凹 + 糖果色）。
- **收藏歌單清單**：每列圓潤膠囊條 = 小糖果封面縮圖 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail。
- **離線下載**功能列（圓潤 list-item + 已下載狀態膨起徽章）。
- **共享音樂庫**功能列（圓潤 list-item + 切換開關 `.toggle`：膠囊凹槽 + 凸起圓把手；on 態填糖果色把手滑到右）。

### profile（`data-screen="profile"`）

- **使用者卡**：糖果軟糖球頭像 + 暱稱 + 會員狀態行（澎潤強調卡）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（`.toggle` 開關，預設 on）。
- **3 訂閱方案卡**（澎潤卡並排或堆疊）：
  - **免費** — `NT$ 0 ／月` — 標「目前方案」。權益：隨機播放、含廣告插播、標準音質。
  - **Plus** — `NT$ 149 ／月` — 標「推薦」，**主推卡**：糖果色（葡萄紫系）填充 + 更厚 clay + 角標，最澎。權益：無廣告、無損音質、離線下載。
  - **Family** — `NT$ 249 ／月`。權益：6 帳號、共享音樂庫、家長控制。
  - 每卡含 2–3 條權益小字（可帶出「離線下載」「共享音樂庫」功能名）。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的**膨起膠囊浮條**（奶白/淡薰衣草填充 + `--clay`，`--radius-pill` 或 `--radius-md`），高 `--miniplayer-h`，左右留 `--space-3` margin 讓它像漂浮的軟糖條。
- 內容：左小糖果封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**軟糖球播放/暫停鍵（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .miniplayer { display:none }`，且 `.is-player .tabbar { display:none }` 一起隱藏 dock）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player（`data-go="player"`）；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細**凹槽進度線**（`--clay-inset` 凹軌 + 珊瑚 fill，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部**膨起膠囊托盤**（奶白填充 + `--clay`，`--radius-lg`，左右留 margin 像懸浮的軟糖底座），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 標籤。
- active tab = 糖果色（葡萄紫）**內凹軟糖膠囊高亮**（`--clay-inset` + `--accent-strong` 字/底），未選為平的圖示。每 tab cursor:pointer + hover/active 捏扁回饋。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定 dock；進入 player 時整個 dock 隱藏。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 `linear-gradient` / `radial-gradient` / `conic-gradient` 配不同**糖果色相**（薰衣草/蜜桃/薄荷/奶油黃/天藍）區分，**每塊封面都要加頂部 inset 高光**（`inset 0 4px 8px var(--hi)`）讓它像澎潤軟糖磚，可疊一層淺色圓點/波浪幾何當裝飾。**不得引用任何 `assets/*.webp` 圖檔，不得出現指向圖檔的 `<img>`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 每個元件用三層配方：外柔影（同色加深）+ 頂亮 inset 高光 + 底暗 inset | 只給單層 drop-shadow 或扁平卡（塌掉、失去澎潤） |
| 用彩色糖果色 + 暖白底，俏皮可愛 | 用純灰單色微浮雕（那是 Neumorphism，不是 Claymorphism） |
| 圓角一律 22–40px，播放球/頭像 50%，chip/toggle 999px | 任何直角或 < 16px 的小圓角、銳利邊 |
| 按下 `scale(0.94)` + 內凹收緊，放開 `--ease` 回彈 | 按下無反應或硬切（失去「捏」的觸覺） |
| chip/toggle/tab 的 active 用「翻成內凹 + 糖果色填充」表示 | active 只換顏色不換凸凹（黏土靠凸/凹分選取） |
| 封面用純 CSS 糖果漸層 + 頂亮高光，不同色相區分 | 引用點陣圖 / `<img src="assets/...">` |
| 進度條/滑桿用凹槽軌 + 凸起圓把手 | 用扁平細線進度條（不黏土） |
| 主文字深紫灰 `--text-1`（對暖白 ≥AA），白字只放葡萄紫鍵或 ≥18px 珊瑚鍵 | 在淺底用低對比淺紫小字、或珊瑚底放白色小字（< AA） |
| 間距只取 8pt 尺度，元件之間留足白讓胖元件呼吸 | 隨手寫 7px/13px，或元件擠在一起失去軟糖塊感 |
| 字體圓潤、字重偏粗、字距略鬆 | 細字重、緊字距、襯線體（與軟糖感衝突） |

---

## Motion Specification

- **按壓回彈（核心觸覺）**：所有可點元件 `transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);`，`:active { transform: scale(0.94); box-shadow: var(--clay-press); }`，放開用 overshoot `--ease`（`cubic-bezier(0.34,1.56,0.64,1)`）彈回，像捏一下軟糖。
- **卡片 hover**：`:hover { transform: translateY(-3px); }` 微微浮起（黏土更胖，浮多一點），外影同步放大。
- **播放鍵兩態**：JS 切 ▶/⏸（改 textContent/class），切換時播放球可做一次極輕的 `scale` 回彈。
- **chip / tab / segmented active 切換**：用 `box-shadow`（凸→凹）+ `background` 的 220ms 過渡，視覺上像被按進去。
- **toggle**：把手用 `transform: translateX()` 滑動（不動 left），220ms `--ease`。
- **進度條/滑桿**：純 CSS 寬度示意即可，把手位置可用 `transform`。
- 只動 `transform` / `opacity` / `box-shadow`（按壓、浮起、把手滑動）；不動 top/left/width/height 觸發 reflow（進度條 width 為靜態示意、不放捲動熱路徑）。
- **不使用任何外部動畫庫**。

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

- 按壓回彈、卡片浮起、toggle 滑動在 reduced motion 下全部停用；元件改為瞬間切換 active 凹/凸態，**clay 三層立體陰影仍完整呈現**（靜態也是黏土感）。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA：主文字深紫灰 `--text-1`（對暖白 ≈8:1）、次文字 `--text-2`（≈5:1）；`--text-3`（≈3.3:1）只用在 ≥18px。葡萄紫鍵白字達 AA；珊瑚鍵白字僅用於 ≥18px 粗體/icon，珊瑚鍵小字改用 `--text-1`。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態用內凹糖果膠囊明確標示。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏（連同 tab-bar 一起隱藏 dock）；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **player 為覆蓋全屏 now-playing**：進入隱藏 dock；`height:100%; flex column`；封面 `flex:1; min-height:0`；進度條/控制列/徽章永遠固定在 844 內可見、不靠捲動、不被遮擋。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；`data-go` 委派；JS 失效時 home 預設可見。畫面切換嚴守 `.screen{display:none}` + `.screen.is-active{display:flex}`，無任何畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock 永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、胖元件之間 padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` 精簡（≤ 8 KB）。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "黏土擬態 Claymorphism", "images": [] }`。所有封面/頭像一律純 CSS（`linear-gradient` / `radial-gradient` / `conic-gradient` 糖果漸層 + `inset` 頂亮高光 + clay 陰影）繪製，**頁面不得引用任何圖檔**、不得出現指向 `assets/` 的 `<img>`。

---

## Reference Snippet

```css
/* ── 手機殼：暖白 + 極淡粉紫漸層底 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: linear-gradient(160deg, var(--bg-1), var(--bg-2));
  font-family: var(--font);
  color: var(--text-1);
  letter-spacing: var(--tracking);
  display: flex;
  flex-direction: column;
}

/* ── clay 通用：吹氣膨起三層配方（外柔影 + 頂亮 inset + 底暗 inset） ── */
.clay {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--clay);
  transition: transform var(--dur-fast) var(--ease),
              box-shadow var(--dur) var(--ease-soft);
}
.clay.is-tap { cursor: pointer; }
.clay.is-tap:hover  { transform: translateY(-3px); }
.clay.is-tap:active { transform: scale(0.94); box-shadow: var(--clay-press); }  /* 被捏扁 */

/* ── 純 CSS 糖果封面：不同色相 + 頂亮高光，像軟糖磚 ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-sm);
  background:
    radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
    linear-gradient(150deg, var(--candy-mint), var(--candy-lav));
  box-shadow:
    0 8px 18px var(--lav-deep),
    inset 0 4px 8px var(--hi),
    inset 0 -8px 12px var(--lav-deep);
}
.cover.peach { background:
  radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
  linear-gradient(150deg, var(--candy-peach), var(--candy-cream));
  box-shadow: 0 8px 18px var(--peach-deep), inset 0 4px 8px var(--hi), inset 0 -8px 12px var(--peach-deep); }
.cover.sky   { background:
  radial-gradient(80% 70% at 30% 22%, var(--hi-strong), transparent 55%),
  linear-gradient(150deg, var(--candy-sky), var(--candy-mint));
  box-shadow: 0 8px 18px var(--sky-deep), inset 0 4px 8px var(--hi), inset 0 -8px 12px var(--sky-deep); }

/* ── 軟糖球播放鍵（雙層外影 + 頂亮 + 底暗，按下被捏扁） ── */
.play-ball {
  width: 64px; height: 64px; border-radius: var(--radius-ball);
  border: none; cursor: pointer; position: relative;
  background:
    radial-gradient(70% 60% at 35% 28%, rgba(255,255,255,0.65), transparent 60%),
    var(--accent);                                   /* 珊瑚軟糖 */
  box-shadow:
    0 14px 26px rgba(255,122,138,0.45),              /* 外柔影（珊瑚加深） */
    0 6px 10px rgba(255,122,138,0.30),
    inset 0 4px 6px rgba(255,255,255,0.55),          /* 頂亮 */
    inset 0 -8px 12px rgba(200,60,80,0.35);          /* 底暗 */
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.play-ball:active { transform: scale(0.92);
  box-shadow: 0 6px 12px rgba(255,122,138,0.35), inset 0 3px 6px rgba(200,60,80,0.40), inset 0 -3px 5px rgba(255,255,255,0.45); }
/* ▶ 用 CSS 三角形（白，置中；達 AA 因 icon 為大色塊） */
.play-ball::after { content:""; position:absolute; top:50%; left:54%;
  transform: translate(-50%,-50%);
  border-style: solid; border-width: 11px 0 11px 18px;
  border-color: transparent transparent transparent #fff; }

/* ── 主 CTA：葡萄紫膨起鍵（白字達 AA） ── */
.btn-cta {
  display:inline-flex; align-items:center; justify-content:center; gap: var(--space-2);
  height: 52px; padding: 0 var(--space-6); border:none; cursor:pointer;
  border-radius: var(--radius-pill); font-size: 17px; font-weight: 700;
  color: var(--text-on-accent);
  background: radial-gradient(80% 60% at 30% 25%, rgba(255,255,255,0.35), transparent 60%), var(--accent-strong);
  box-shadow: 0 12px 22px rgba(139,92,246,0.42), inset 0 3px 5px rgba(255,255,255,0.45), inset 0 -6px 10px rgba(90,50,180,0.40);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.btn-cta:active { transform: scale(0.94); box-shadow: var(--clay-press); }

/* ── 膠囊軟糖 chip：凸（未選）↔ 凹+糖果色（active） ── */
.chip {
  padding: var(--space-2) var(--space-5); border-radius: var(--radius-pill);
  background: var(--surface); color: var(--text-2);
  font-size: 13px; font-weight: 600; cursor: pointer; border: none;
  box-shadow: var(--clay-sm);                        /* 凸起 */
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft), background var(--dur);
}
.chip:active { transform: scale(0.94); }
.chip[aria-selected="true"] {                        /* 翻成內凹 + 珊瑚色 */
  background: var(--accent-soft); color: var(--text-1);
  box-shadow: var(--clay-inset);
}

/* ── toggle：凹槽 + 凸起圓把手（on 滑到右並翻糖果色） ── */
.toggle { width: 52px; height: 30px; border-radius: var(--radius-pill);
  background: var(--surface); box-shadow: var(--clay-inset); position: relative; cursor: pointer; border:none; }
.toggle .knob { position:absolute; top:3px; left:3px; width:24px; height:24px; border-radius:50%;
  background: var(--surface-2); box-shadow: var(--clay-sm);
  transition: transform var(--dur) var(--ease); }
.toggle[aria-checked="true"] { background: var(--accent-strong-soft); }
.toggle[aria-checked="true"] .knob { transform: translateX(22px); background: var(--accent-strong); }

/* ── 進度條：凹槽軌 + 凸起圓把手（黏土招牌） ── */
.progress { height: 12px; border-radius: var(--radius-pill);
  background: var(--surface); box-shadow: var(--clay-inset); position: relative; }
.progress > i { display:block; height:100%; width:42%; border-radius: var(--radius-pill);
  background: linear-gradient(90deg, var(--candy-peach), var(--accent)); }
.progress .knob { position:absolute; top:50%; left:42%; width:22px; height:22px;
  transform: translate(-50%,-50%); border-radius:50%;
  background: radial-gradient(70% 60% at 35% 30%, #fff, var(--accent));
  box-shadow: var(--clay-sm); }

/* ── 歌曲列：奶白凸起膠囊條 ── */
.song-row {
  display:flex; align-items:center; gap: var(--space-3);
  padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
  background: var(--surface); box-shadow: var(--clay-sm); cursor: pointer;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft);
}
.song-row:active { transform: scale(0.97); box-shadow: var(--clay-press); }
.song-row .idx   { width:20px; text-align:center; color: var(--text-3); font-variant-numeric: tabular-nums; }
.song-row .title { font-size:17px; font-weight:700; color: var(--text-1); }
.song-row .meta  { font-size:13px; color: var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color: var(--text-2); font-variant-numeric: tabular-nums; }

/* ── 三段式骨架：中段為唯一可捲動區 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }

/* ── player：覆蓋全屏，封面可壓縮，控制列永遠可見 ── */
.screen-player.is-active { padding-bottom: var(--space-4); }
.np-art { flex: 1 1 auto; min-height: 0; aspect-ratio: 1; align-self: center;
  width: 100%; border-radius: var(--radius-lg);
  background: radial-gradient(75% 65% at 30% 22%, var(--hi-strong), transparent 55%),
    conic-gradient(from 200deg, var(--candy-mint), var(--candy-lav), var(--candy-sky), var(--candy-mint));
  box-shadow: 0 18px 36px var(--lav-deep), inset 0 6px 10px var(--hi), inset 0 -12px 18px var(--lav-deep); }
.is-player .miniplayer, .is-player .tabbar { display: none; }   /* 進 player 隱藏整個 dock */

/* ── tab-bar：懸浮膠囊托盤，active = 內凹糖果膠囊 ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); margin: 0 var(--space-3) var(--space-2);
  padding-bottom: var(--safe-bottom);
  border-radius: var(--radius-lg); background: var(--surface); box-shadow: var(--clay);
}
.tab { font-size:11px; font-weight:600; color: var(--text-2); text-align:center; cursor:pointer;
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); border:none; background:transparent;
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease-soft); }
.tab:active { transform: scale(0.94); }
.tab[aria-current="page"] { color: var(--accent-strong); box-shadow: var(--clay-inset); background: var(--accent-strong-soft); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
