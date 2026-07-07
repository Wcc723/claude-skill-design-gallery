---
name: design-persona5
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Persona 5 (女神異聞錄 5 / 怪盜風格 acid-jazz JRPG UI) style. Triggers on Persona 5、女神異聞錄、P5、怪盜、Phantom Thieves、acid jazz、緋紅撞純黑、鋸齒撕裂、漫畫網點 halftone、All-Out Attack 結算名單、街頭塗鴉描邊、starburst 星爆、JRPG 選單。
user-invocable: true
---

# 女神異聞錄 5 Persona 5 — 島嶼共鳴 2026

> 這是對《Persona 5》**視覺語言**的抽象致敬（如同本圖鑑對 cyberpunk / vaporwave 等版權美學的致敬）。
> **只重現可用純 CSS + 原創生成圖表達的抽象語彙**：緋紅×純黑×紙白三色、鋸齒撕裂 clip-path、半色調網點、傾斜動勢、街頭塗鴉描邊、星爆 callout、怪盜「予告狀」對話框、斜切選單名單。
> **絕不**複製或指名任何具體角色、面具、吉祥物、劇情符號，**不用**官方 logo、官方標題字型名。全部靠系統字堆疊 + `skewX` 近似。

## Style Philosophy

把「島嶼共鳴 2026」官網當成一張**會動的怪盜宣傳海報 × 一個可掃讀的 JRPG 選單**。核心張力＝**攻擊性動勢**（傾斜、鋸齒、星爆、塗鴉）與**編輯級可讀性**（資料一律回正、真表格、嚴守 WCAG AA）的並存：裝飾放肆傾斜，**資料回到正立**。

三個視覺辨識特徵：
1. **緋紅 × 純黑 × 紙白** 三色鐵律（警示黃可作 <5% 爆點，但預設不用；不引入第四色）。
2. **拒絕正交**——色塊/按鈕/標題/選單皆傾斜（`rotate` / `skewX`），內層一律**反向 counter-skew** 讓文字回正可讀。
3. **選單語彙**——lineup / tickets / travel / FAQ 做成「會滑入緋紅高亮塊」的斜切選單列；3 組頭條做成 **All-Out Attack 結算式斜排階梯名單**。

治理原則（**最重要，避免變成只是「紅黑配色」**）：
- 緋紅 `#E4002B` 落純黑僅 ~4.2:1 → **只可用於 ≥24px 粗大字或色塊**；**紙白底上的任何紅字一律改用 `--p5-red-ink #B00020`**。
- 內文一律 **白 on 黑（~19:1）** 或 **黑 on 紙白（~16:1）**。
- **⚠️ 小號文字禁用緋紅字**：所有 `<24px` 的**分節標籤（// Headliner、// Gold）、英文 slogan、hashtag、場地名、單位小字、說明文字、nav 連結**——文字色一律 `--white` / `--paper`（黑底）或 `--ink`（紙底）；緋紅只保留給**色塊、≥24px 粗大字、大編號描邊**。紅底上的小字一律 `--white`（勿用淡粉）。這是最常被違反的一條，逐一自查。
- **半色調網點永遠是裝飾層**：`::before` + `z-index:0` + `pointer-events:none` + `opacity ≤ .16`，永遠壓在文字下，不得降低對比。
- `schedule` **必用真 `<table>`**，絕不做成斜切表格（會同時傷掃讀、WCAG reflow 與手機橫捲）。

## Design Tokens (CSS variables)

```css
:root{
  /* ===== 三色鐵律：緋紅 × 純黑 × 紙白 ===== */
  --p5-red:      #E4002B;   /* 緋紅主色：大字／色塊／callout 底／選單 hover 高亮 */
  --p5-red-ink:  #B00020;   /* 紙白底上的「紅字／連結」專用（白落此紅 ~4.6:1、紅字落紙 ~9:1） */
  --p5-red-deep: #8A0018;   /* 血紅：撕裂塊下層位移影 / active */
  --ink:         #0B0B0B;   /* 近純黑：主底色與主前景墨色 */
  --ink-soft:    #191919;   /* 次黑：卡片 / 選單列底 */
  --paper:       #F5F1E8;   /* 紙白（暖調）：予告狀 / 長文閱讀底 */
  --paper-dim:   #E8E2D4;   /* 紙白次階：表格斑馬紋 / 分隔 */
  --white:       #FFFFFF;   /* 純白：黑／紅底上的主文字 */
  --alert:       #FFE100;   /* 警示黃：<5% 爆點（膠帶斜條 / NEW），預設不用 */

  /* ===== 語意別名（元件只引用這層）===== */
  --color-bg:        var(--ink);
  --color-surface:   var(--paper);
  --color-fg:        var(--white);      /* on --color-bg */
  --color-fg-invert: var(--ink);        /* on --color-surface（紙白）*/
  --color-accent:    var(--p5-red);
  --color-link:      var(--p5-red-ink); /* 紙底可讀紅 */

  /* ===== 對比守則（註記）=====
     白 on 黑    ~19:1 ✓ body      黑 on 紙  ~16:1 ✓ body
     白 on 紅    ~4.6:1 ✓ 大字/粗   紅 on 黑  ~4.2:1 僅 ≥24px bold
     紅ink on 紙 ~9:1  ✓ 內文紅字/連結 */

  /* ===== 直角美學：圓角一律 0 ===== */
  --radius: 0;

  /* ===== 街頭塗鴉粗描邊 ===== */
  --stroke-hair: 2px; --stroke: 3px; --stroke-bold: 5px;
  --stroke-color: var(--ink);
  --ink-outline: 2px 2px 0 var(--ink), -2px -2px 0 var(--ink);

  /* ===== 陰影＝硬位移印刷影（零模糊）===== */
  --shadow-hard: 6px 6px 0 var(--ink);
  --shadow-red:  6px 6px 0 var(--p5-red);
  --shadow-pop:  10px 10px 0 var(--ink);

  /* ===== 半色調網點（Ben-Day dots）===== */
  --halftone-size: 6px;              /* 網點格距 */
  --halftone-dot:  1.6px;            /* 點半徑 */
  --halftone-ink:  rgba(11,11,11,.9);
  --halftone-red:  rgba(228,0,43,.85);
  --halftone-opacity: .14;           /* 裝飾層不透明度上限（勿超過 .16）*/

  /* ===== 傾斜動勢 ===== */
  --tilt-sm: -2deg; --tilt: -4deg; --tilt-lg: -7deg;
  --skew: -8deg;        /* 選單/按鈕/標籤主斜角 */
  --skew-title: -6deg;  /* 標題斜角 */
  --skew-hard: -12deg;  /* All-Out Attack 結算名單斜角 */

  /* ===== 動效時序（hover 滑入用）===== */
  --ease-snap: cubic-bezier(.2,.9,.2,1);
  --dur: .18s;

  /* ===== 版面節奏 ===== */
  --maxw: 1200px;
  --gap: clamp(16px,3vw,32px);
  --pad-block: clamp(56px,9vw,128px);

  /* ===== 字型堆疊（純系統字、無 CDN、不指名任何遊戲字型）===== */
  --font-display: 'Arial Black','Helvetica Neue','Impact','PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif;
  --font-cond:    'Arial Narrow','Helvetica Neue Condensed','PingFang TC','Noto Sans TC',sans-serif;
  --font-body:    'PingFang TC','Noto Sans TC','Hiragino Sans','Microsoft JhengHei','Helvetica Neue',sans-serif;
  --font-num:     'DIN Alternate','Roboto Mono','Courier New',monospace;  /* 票價/時刻：font-variant-numeric:tabular-nums */

  /* ===== z 疊層 ===== */
  --z-halftone: 0; --z-content: 1; --z-callout: 5;

  /* ===== 共用 clip-path（收進變數重用，避免每個元件重複長字串灌大 HTML）===== */
  --clip-tear:  polygon(0 6%,9% 0,34% 5%,55% 0,78% 4%,100% 0,100% 92%,88% 100%,62% 95%,40% 100%,15% 96%,0 100%);
  --clip-torn:  polygon(0 0,100% 0,100% 86%,92% 100%,78% 88%,64% 99%,50% 87%,36% 100%,22% 88%,8% 99%,0 87%);
  --clip-slant: polygon(0 0,100% 0,97% 100%,0 100%);
  --clip-para:  polygon(7% 0,100% 0,93% 100%,0 100%);   /* 平行四邊：標籤/切字 */
  --clip-duo:   polygon(0 0,100% 0,100% 92%,90% 100%,0 100%);
  --clip-zig:   polygon(0 0,100% 0,100% 55%,96% 100%,90% 55%,84% 100%,78% 55%,72% 100%,66% 55%,60% 100%,54% 55%,48% 100%,42% 55%,36% 100%,30% 55%,24% 100%,18% 55%,12% 100%,6% 55%,0 100%);
  --clip-star:  polygon(100% 50%,86.6% 56.7%,93.3% 66.9%,80.4% 69.1%,84.1% 81.6%,71.5% 78.2%,71.9% 91.3%,60.9% 84.1%,57.1% 96.6%,50% 85.4%,42.9% 96.6%,39.1% 84.1%,28.1% 91.3%,28.5% 78.2%,15.9% 81.6%,19.6% 69.1%,6.7% 66.9%,13.4% 56.7%,0 50%,13.4% 43.3%,6.7% 33.1%,19.6% 30.9%,15.9% 18.4%,28.5% 21.8%,28.1% 8.7%,39.1% 15.9%,42.9% 3.4%,50% 14.6%,57.1% 3.4%,60.9% 15.9%,71.9% 8.7%,71.5% 21.8%,84.1% 18.4%,80.4% 30.9%,93.3% 33.1%,86.6% 43.3%);
}
```

## Typography Scale

| 級距 | 規格 | 用途 |
| --- | --- | --- |
| display | `clamp(56px,11vw,180px)` / .82 / 900 italic / -.03em / uppercase / `skewX(-6deg)` | Hero slash-title（每字塞斜切紅塊）|
| h1 | `clamp(40px,6vw,72px)` / .9 / 900 / -.02em / uppercase / `skewX(-6deg)` | 區塊標題（配 `em` 緋紅字）|
| h2 | `clamp(22px,3vw,30px)` / 1.1 / 800 / .02em / uppercase | 選單列 / 子標 |
| body | 15–16px / 1.7 / 400 | 段落（白 on 黑 或 黑 on 紙）|
| caption | 11–12px / 1.3 / 800 / .22em / uppercase | 標籤 / 予告狀 tag / 欄名 |
| num | `clamp(28px,7vw,96px)` / 900 / `tabular-nums` | 票價 / 關鍵數字 / 時刻 |

- 標題「斜」一律靠 `transform: skewX()` 施加（`Arial Black`/`Impact` 無真斜體字身）；CJK 用 `font-weight:900` + `skewX` + 緋紅挖填補動勢。
- 大字用 `-webkit-text-stroke` + `paint-order: stroke fill` 做街頭塗鴉厚描邊 knockout。
- **嚴禁** serif / thin / light 字重（會立刻失去 P5 的攻擊性）。

## Layout Rules（9 區塊逐一）

整頁 `--color-bg`（近黑）為底，紙白區塊作為「予告狀 / 情報檔案」穿插。所有色塊 4–12° 傾斜、互相破邊重疊；閱讀動線走左上→右下強對角線。

- **hero**：`.diag-split` 滿版紅黑對角撕裂為底 + `.slash-title` 每字塞斜切紅塊的巨大標題「島嶼共鳴 2026 / ISLAND RESONANCE」；`.starburst` 星爆承載日期 **2026.08.21–23** 與場地 **台東都蘭灣海岸自然公園**；slogan「在島嶼盡頭，聽見彼此的迴聲」；右側 `.p5-duotone` 演出者剪影（`hero-silhouette`）；底部「關鍵數字帶」正立 tabular-nums：**6 屆 / 3 日 / 3 舞台 / 12 組 / 25,000 人次 / 9 地區**。主 CTA 用 `.p5-btn`（斜切、內文反 skew）「立即購票」。
- **about**：紙白 `.p5-torn.paper` 予告狀，宣言用可讀正立段落（沿用 brief：2021 創辦、2026 第六屆、獨立音樂與東部自然地景對話、押金循環杯、島嶼夥伴計畫），主辦「**浪打文化 Wave Strike Culture**」以斜切戳記標示；點綴 `.p5-halftone` 網點。
- **lineup**（**全頁核心**）：分兩層。
  - 上層 **3 組頭條** → `.p5-roster` All-Out Attack 斜排階梯：**鯨向海 Whale Bound / 霧色公路 Misty Highway / 颱風口 Eye of Typhoon**，每列 `margin-left` 遞增 + `skewX(-12deg)`、緋紅描邊巨編號 01–03、覆緋紅斜塊，可疊 `hero-silhouette` 剪影切角；國籍/曲風/上場日/舞台/時段以「欄名:值」小字列出。
  - 下層 **9 組支援陣容** → `.p5-menu` 滑入高亮列：**海岬鳥群 / 浪打信號 / 火車前進 / 苔蘚紀年 / 銀河郵差 / 夜鷺夜談 / 紙鳶失蹤 / 鏽色羅盤 / 黎明號角**（中英並列），hover 緋紅塊自左滑入 + 名稱右頂。
  - **12 組樂團名一字不差、正立可掃**（子元素反 skew 校正）；名字必在**可見 body 文字**，不可只放 `aria-label`/`::before`。
- **schedule**：**真 `<table>`**（Day1/Day2/Day3 三張）——表頭紅底白字、斑馬紋 `--paper-dim`、時間走 `--font-num` tabular-nums 右對齊、三舞台為三欄；Headliner 列以緋紅左框 + 粗體標記；手機 `overflow-x:auto`。
- **venues**：3 張撕裂漫畫分鏡卡（`.p5-torn` + `.p5-duotone`）——**共鳴山主舞台 Resonance Mountain Stage（8,000）/ 海風舞台 Sea Breeze Stage（3,000）/ 部落舞台 Tribe Stage（800）**，各用對應剪影圖（`stage-mountain`/`stage-sea`/`stage-tribe`）疊緋紅 multiply；容納人數做巨大緋紅斜體 tabular-nums；斜貼白色予告狀寫舞台名 + 英文。
- **tickets**：3 卡並列選單列——**單日票 NT$ 2,200 / 三日通票 NT$ 5,400 / VIP 三日 NT$ 12,800**，價格超大 tabular-nums 正立可比；VIP 卡 `.p5-torn.red` 緋紅實心白字 + `.starburst`「BEST」；早鳥 9 折 **NT$ 4,860** 做 `.p5-tag` 斜切予告狀。售票通路（官網 / KKTIX / ibon / tixCraft）小字列。
- **travel**：3 段（自行開車 / 大眾運輸 / 住宿建議）做 `.p5-menu` 斜切步驟列，序號用緋紅巨斜體；停車 NT$ 200/500、免費接駁、帳篷營位 NT$ 800/晚等要點正立可讀。
- **sponsors**：**麥森啤酒 Marsen Beer** title 帶用 `.p5-tear`（+ 血紅 `::before` 位移）放大；Gold（**山隈唱片 / 潮間帶咖啡 / 雲擇科技**）、Silver（**海島襪品 / 長浪電池 / 青葉旅店 / 輕食工坊 / 半島郵差**）用描邊 chip 正立掃讀；媒體夥伴（Blow 吹音樂 / StreetVoice / KKBOX / 大誌雜誌）小字。
- **footer-faq**：7 條 FAQ 用 `.p5-menu` 滑入列（問題正立可讀、答案展開段落）；結尾用 `.graffiti` 巨型塗鴉 wordmark「島嶼共鳴 2026」+ hashtag `#島嶼共鳴2026` 收尾。

## Do / Don't

| Do | Don't |
| --- | --- |
| 緋紅×純黑×紙白三色鐵律；黃只當 <5% 爆點 | 引入藍/綠/粉等第四色 |
| 裝飾傾斜、資料回正（子元素反 skew） | 讓傾斜傷及 12 樂團/票價/時程的掃讀 |
| 紙底紅字一律 `--p5-red-ink #B00020` | 小號緋紅落純黑當內文（對比不足）|
| 標題極粗窄體 + uppercase + 負字距 + `skewX` | 用 serif / thin / light 字重 |
| 網點永遠 `::before z-0 pointer-events:none opacity≤.16` | 把網點當一般 background 壓在文字上 |
| lineup 頭條做 All-Out Attack 斜排 roster | schedule 做成斜切表格（改回真 `<table>`）|
| 樂團名/票價放進**可見 body 文字** | 只塞進 `data-*`/`aria-label`/`::content` |
| 剪影圖走高反差純黑白 + CSS `.p5-duotone` 上緋紅 | 用彩色寫實照片 |
| 複製任何具體角色/面具/吉祥物、官方 logo/字型名 → **禁** | — |

## Accessibility & Reduced Motion

- 內文對比守 WCAG AA（見 tokens 對比守則）；緋紅僅限 ≥24px bold。
- hover 滑入高亮列 / 按鈕位移屬裝飾——**必附** `@media (prefers-reduced-motion: reduce)` 關閉 `transition` 並保留可讀靜態版（清單/名單在無動效下仍完整）。

## Required Output Contract

通用契約（9 個 `data-block`、≤200KB、無外部 CDN、WCAG AA、相對圖路徑、繁中、無 framework、無自白）。**特別注意**：長 clip-path 已收進 `:root` 變數，元件用 `clip-path: var(--clip-*)` 引用以控 HTML 體積。

## Required Images

依 `assets-manifest.json`，共 5 張，**全部高反差純黑白**（網頁端用 `.p5-duotone` 以 CSS `mix-blend-mode:multiply` 上緋紅）：

| filename | 用途 |
| --- | --- |
| `hero-silhouette.webp` | hero 右側 + lineup 頭條剪影切角（直式）|
| `crowd-burst.webp` | hero / sponsors 能量底（俯視人群星爆構圖）|
| `stage-mountain.webp` | venues 共鳴山主舞台 |
| `stage-sea.webp` | venues 海風舞台 |
| `stage-tribe.webp` | venues 部落舞台 |

若圖缺，用 `.p5-halftone` 網點塊或純 CSS 剪影 placeholder 替代，並在 warnings 註記——不可外連。

## Reference Snippet（可直接取用的 CSS）

```css
/* 滿版紅黑對角撕裂背景 + 斜切分隔條 */
.diag-split{ background:linear-gradient(115deg,var(--ink) 0 46%,var(--p5-red) 46% 54%,var(--ink) 54% 100%); }
.diag-divider{ height:26px; background:var(--p5-red); clip-path:var(--clip-slant); }
.p5-zigzag{ height:22px; background:var(--p5-red); border:0; margin:0; clip-path:var(--clip-zig); }

/* Hero slash-title：每字塞斜切紅塊 */
.slash-title{
  font-family:var(--font-display); font-weight:900; font-style:italic;
  font-size:clamp(56px,11vw,180px); line-height:.82; letter-spacing:-.03em;
  text-transform:uppercase; color:var(--white);
  transform:skewX(var(--skew-title)); -webkit-text-stroke:2px var(--ink);
  paint-order:stroke fill; text-shadow:5px 5px 0 var(--p5-red);
}
.slash-title .cut{ display:inline-block; background:var(--p5-red); color:var(--ink);
  padding:0 .12em; margin:0 .02em; -webkit-text-stroke:0; clip-path:var(--clip-para); }

/* 撕裂漫畫分鏡塊 + 血紅位移厚度 */
.p5-tear{ position:relative; background:var(--p5-red); color:var(--white);
  padding:2.4rem 3rem; clip-path:var(--clip-tear); box-shadow:var(--shadow-hard); }
.p5-tear::before{ content:""; position:absolute; inset:0; z-index:-1;
  background:var(--p5-red-deep); transform:translate(6px,6px); clip-path:inherit; }
.p5-torn{ background:var(--ink); color:var(--white); padding:clamp(28px,5vw,64px); clip-path:var(--clip-torn); }
.p5-torn.red{ background:var(--p5-red); } .p5-torn.paper{ background:var(--paper); color:var(--ink); }

/* 半色調網點裝飾層（永在文字下）*/
.p5-halftone{ position:relative; isolation:isolate; }
.p5-halftone::before{ content:""; position:absolute; inset:0; z-index:var(--z-halftone);
  pointer-events:none; opacity:var(--halftone-opacity);
  background-image:radial-gradient(var(--halftone-ink) var(--halftone-dot),transparent calc(var(--halftone-dot) + .6px));
  background-size:var(--halftone-size) var(--halftone-size); }
.p5-halftone > *{ position:relative; z-index:var(--z-content); }

/* 星爆 callout（clip-path 收進 --clip-star）*/
.starburst{ display:grid; place-content:center; text-align:center; aspect-ratio:1;
  width:clamp(120px,22vw,220px); background:var(--p5-red); color:var(--white);
  font-family:var(--font-display); font-weight:900; font-style:italic; text-transform:uppercase;
  line-height:1; transform:rotate(8deg); clip-path:var(--clip-star); box-shadow:var(--shadow-hard); }
.starburst > *{ transform:rotate(-8deg); }   /* 文字回正 */

/* 予告狀斜切標籤 */
.p5-tag{ display:inline-block; background:var(--p5-red); color:var(--white);
  font:800 13px/1 var(--font-cond); letter-spacing:.22em; text-transform:uppercase;
  padding:8px 16px; transform:rotate(var(--tilt-sm)); clip-path:var(--clip-para); }
.p5-tag.on-paper{ background:var(--p5-red-ink); }   /* 紙底改深紅維持白字 AA */

/* 斜排選單列（緋紅高亮塊自左滑入；容器 skew／子元素反 skew）*/
.p5-menu{ list-style:none; margin:0; padding:0; }
.p5-menu li{ position:relative; overflow:hidden; cursor:pointer; margin:.4rem 0; padding:.9rem 1.4rem;
  background:var(--ink-soft); color:var(--paper); font-family:var(--font-display); font-weight:900;
  font-style:italic; font-size:clamp(18px,2.4vw,30px); text-transform:uppercase;
  transform:skewX(var(--skew)); clip-path:var(--clip-slant); transition:transform var(--dur) var(--ease-snap); }
.p5-menu li > *{ position:relative; z-index:1; display:inline-block; transform:skewX(calc(-1 * var(--skew))); }
.p5-menu li::before{ content:""; position:absolute; inset:0; z-index:0; background:var(--p5-red);
  transform:translateX(-102%); transition:transform calc(var(--dur) + .02s) var(--ease-snap); }
.p5-menu li:hover, .p5-menu li:focus-within, .p5-menu li[aria-current="true"]{ transform:skewX(var(--skew)) translateX(14px); }
.p5-menu li:hover::before, .p5-menu li:focus-within::before, .p5-menu li[aria-current="true"]::before{ transform:translateX(0); }
.p5-menu li:hover > *{ color:var(--white); }

/* All-Out Attack 結算斜排階梯名單（3 組頭條）*/
.p5-roster{ display:flex; flex-direction:column; gap:.5rem; }
.p5-roster .row{ align-self:flex-start; display:flex; align-items:baseline; gap:1.2rem;
  padding:.6rem 2rem .6rem 1.2rem; background:var(--ink); color:var(--white);
  border-left:6px solid var(--p5-red); transform:skewX(var(--skew-hard)); clip-path:polygon(0 0,100% 0,94% 100%,0 100%); }
.p5-roster .row:nth-child(2){ margin-left:5%; } .p5-roster .row:nth-child(3){ margin-left:10%; }
.p5-roster .row > *{ transform:skewX(calc(-1 * var(--skew-hard))); }   /* 反 skew：名字回正 */
.p5-roster .num{ font-family:var(--font-display); font-weight:900; font-style:italic; font-size:2.4rem;
  color:var(--p5-red); -webkit-text-stroke:1.5px var(--white); paint-order:stroke fill; }

/* 硬位移印刷按鈕 */
.p5-btn{ display:inline-block; padding:15px 32px; background:var(--p5-red); color:var(--white);
  font:800 16px/1 var(--font-cond); letter-spacing:.14em; text-transform:uppercase; text-decoration:none;
  cursor:pointer; border:var(--stroke) solid var(--ink); box-shadow:var(--shadow-hard); transform:skewX(var(--skew)); }
.p5-btn > span{ display:inline-block; transform:skewX(calc(-1 * var(--skew))); }
.p5-btn.ghost{ background:var(--ink); }
.p5-btn:hover{ transform:skewX(var(--skew)) translate(-2px,-2px); box-shadow:9px 9px 0 var(--ink); }

/* 紅黑雙色調圖（把黑白生成圖上緋紅）*/
.p5-duotone{ position:relative; display:block; overflow:hidden; clip-path:var(--clip-duo); }
.p5-duotone img{ display:block; width:100%; height:100%; object-fit:cover; filter:grayscale(1) contrast(1.2) brightness(.95); }
.p5-duotone::after{ content:""; position:absolute; inset:0; background:var(--p5-red); mix-blend-mode:multiply; opacity:.85; pointer-events:none; }

/* 街頭塗鴉 wordmark（footer 收尾）*/
.graffiti{ font-family:var(--font-display); font-weight:900; font-style:italic; color:var(--paper);
  text-transform:uppercase; -webkit-text-stroke:3px var(--ink); paint-order:stroke fill;
  text-shadow:3px 3px 0 var(--p5-red), 5px 5px 0 var(--ink); transform:rotate(-3deg); }

/* 減動偏好：關閉裝飾滑入 */
@media (prefers-reduced-motion:reduce){
  .p5-menu li, .p5-menu li::before, .p5-btn{ transition:none; }
  .p5-menu li:hover, .p5-menu li:focus-within, .p5-menu li[aria-current="true"]{ transform:skewX(var(--skew)); }
  .p5-menu li:hover::before{ transform:translateX(0); }
}
```
