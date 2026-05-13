export type Category =
  | 'mainstream'
  | 'retro'
  | 'experimental'
  | 'cultural'
  | 'decorative'
  | 'motion';

export type Round = 1 | 2;

export type MotionType = 'parallax' | 'scroll-driven' | 'reveal' | 'loop' | 'pointer';

export type Work = {
  slug: string;
  name: { zh: string; en: string };
  category: Category;
  round: Round;
  /** 僅第二輪 motion 風格使用 */
  motionType?: MotionType;
  tags: string[];
  brief: string;
  /** 是否已完成（縮圖與 index.html 都已產出） */
  status: 'planned' | 'shipped';
};

export const categoryLabels: Record<Category, string> = {
  mainstream: '主流 UI',
  retro: '復古懷舊',
  experimental: '實驗前衛',
  cultural: '文化在地',
  decorative: '裝飾性',
  motion: '動態效果',
};

export const motionTypeLabels: Record<MotionType, string> = {
  parallax: '視差',
  'scroll-driven': '滾動',
  reveal: '入場',
  loop: '循環',
  pointer: '指標',
};

export const works: Work[] = [
  // ========================================
  // 第一輪 · 25 個靜態風格 (round: 1)
  // ========================================

  // 主流 UI
  {
    slug: 'design-glassmorphism',
    name: { zh: '玻璃擬態', en: 'Glassmorphism' },
    category: 'mainstream',
    round: 1,
    tags: ['frosted', 'translucent', '2020s'],
    brief: '霧面玻璃、半透層次與微妙光暈，呈現未來感的清涼海邊夜場。',
    status: 'shipped',
  },
  {
    slug: 'design-neumorphism',
    name: { zh: '新擬物化', en: 'Neumorphism' },
    category: 'mainstream',
    round: 1,
    tags: ['soft-ui', 'shadow', 'tactile'],
    brief: '柔和陰影與雕塑感介面，把音樂節做成像觸感極佳的精緻按鈕。',
    status: 'shipped',
  },
  {
    slug: 'design-material-3',
    name: { zh: 'Material You', en: 'Material 3' },
    category: 'mainstream',
    round: 1,
    tags: ['google', 'dynamic-color', 'elevation'],
    brief: '動態色彩、明確層階與圓角元件，是當代產品設計的學院派。',
    status: 'shipped',
  },
  {
    slug: 'design-minimalism',
    name: { zh: '極簡主義', en: 'Minimalism' },
    category: 'mainstream',
    round: 1,
    tags: ['whitespace', 'mono', 'editorial'],
    brief: '大量留白、單色字體與精確排版，把音樂節呈現成藝廊邀請函。',
    status: 'shipped',
  },
  {
    slug: 'design-dark-mode',
    name: { zh: '沉浸暗黑', en: 'Immersive Dark' },
    category: 'mainstream',
    round: 1,
    tags: ['dark', 'low-light', 'cinematic'],
    brief: '深色背景配低彩度發光，像深夜 livehouse 裡的 stage spotlight。',
    status: 'shipped',
  },

  // 復古懷舊
  {
    slug: 'design-vaporwave',
    name: { zh: '蒸氣波', en: 'Vaporwave' },
    category: 'retro',
    round: 1,
    tags: ['80s', 'pastel', 'aesthetic'],
    brief: '粉紫漸層、希臘雕像與日文標題的網際網路懷舊美學。',
    status: 'shipped',
  },
  {
    slug: 'design-y2k',
    name: { zh: 'Y2K 千禧', en: 'Y2K' },
    category: 'retro',
    round: 1,
    tags: ['2000s', 'chrome', 'cyber-cute'],
    brief: '銀色金屬、半透塑膠與星型 sticker，把 1999 的網頁夢搬到 2026 海邊。',
    status: 'shipped',
  },
  {
    slug: 'design-web1',
    name: { zh: '90s Web 1.0', en: 'Web 1.0' },
    category: 'retro',
    round: 1,
    tags: ['90s', 'tables', 'marquee'],
    brief: '系統字體、tile 背景與灰色按鈕，致敬 1996 年地理城市網頁。',
    status: 'shipped',
  },
  {
    slug: 'design-american-retro-print',
    name: { zh: '美式復古印刷', en: 'American Retro Print' },
    category: 'retro',
    round: 1,
    tags: ['vintage', 'print', 'screen-print'],
    brief: '網點質感、油墨偏色與粗襯線標題，活脫像 1970 年代音樂海報。',
    status: 'shipped',
  },
  {
    slug: 'design-synthwave',
    name: { zh: '80s Synthwave', en: 'Synthwave' },
    category: 'retro',
    round: 1,
    tags: ['80s', 'neon', 'grid'],
    brief: '霓虹線條、紫紅落日與賽車透視格線，演奏一場數位夕陽。',
    status: 'shipped',
  },
  {
    slug: 'design-bauhaus',
    name: { zh: '包浩斯', en: 'Bauhaus' },
    category: 'retro',
    round: 1,
    tags: ['1920s', 'geometric', 'primary'],
    brief: '紅黃藍三色 + 圓三角方塊的幾何構成，向 100 年前的德國學院致敬。',
    status: 'shipped',
  },

  // 實驗前衛
  {
    slug: 'design-brutalism',
    name: { zh: '野獸派', en: 'Brutalism' },
    category: 'experimental',
    round: 1,
    tags: ['raw', 'monospace', 'anti-design'],
    brief: '裸露結構、強烈對比與粗暴排版，故意違反所有 UX 學派。',
    status: 'shipped',
  },
  {
    slug: 'design-glitch',
    name: { zh: '故障藝術', en: 'Glitch Art' },
    category: 'experimental',
    round: 1,
    tags: ['rgb-shift', 'distortion', 'noise'],
    brief: 'RGB 錯位、掃描線與隨機破碎，像訊號被海風干擾的演唱會直播。',
    status: 'shipped',
  },
  {
    slug: 'design-cyberpunk',
    name: { zh: '賽博龐克', en: 'Cyberpunk' },
    category: 'experimental',
    round: 1,
    tags: ['neon', 'dystopia', 'tech-noir'],
    brief: '霓虹粉藍配黑色背景、片假名與發光邊框的高科技反烏托邦。',
    status: 'shipped',
  },
  {
    slug: 'design-constructivism',
    name: { zh: '構成主義', en: 'Constructivism' },
    category: 'experimental',
    round: 1,
    tags: ['russian', 'propaganda', 'diagonal'],
    brief: '紅黑斜切構圖、宣傳海報語法，把獨立音樂節做成革命口號。',
    status: 'shipped',
  },
  {
    slug: 'design-ascii-terminal',
    name: { zh: 'ASCII 終端機', en: 'ASCII Terminal' },
    category: 'experimental',
    round: 1,
    tags: ['monospace', 'green-phosphor', 'cli'],
    brief: '綠底螢光字、ASCII art 與 80x24 終端機美學，整個網頁是一台 PDP-11。',
    status: 'shipped',
  },
  {
    slug: 'design-editorial',
    name: { zh: '雜誌排版', en: 'Editorial Magazine' },
    category: 'experimental',
    round: 1,
    tags: ['print', 'serif', 'grid'],
    brief: '12 欄網格、粗襯線標題與圖文混排，像翻開《Monocle》音樂特輯。',
    status: 'shipped',
  },

  // 文化在地
  {
    slug: 'design-wabi-sabi',
    name: { zh: '日式禪意', en: 'Wabi-Sabi' },
    category: 'cultural',
    round: 1,
    tags: ['japan', 'minimal', 'natural'],
    brief: '米色紙質、墨色筆觸與留白構成，安靜得像京都茶室裡的音樂節。',
    status: 'shipped',
  },
  {
    slug: 'design-chinoiserie',
    name: { zh: '中國風國潮', en: 'Chinoiserie / Guochao' },
    category: 'cultural',
    round: 1,
    tags: ['china', 'traditional', 'modern-fusion'],
    brief: '硃砂紅、墨黑、宋體字配水墨點綴，融合古典與當代潮流。',
    status: 'shipped',
  },
  {
    slug: 'design-scandinavian',
    name: { zh: '北歐極簡', en: 'Scandinavian' },
    category: 'cultural',
    round: 1,
    tags: ['nordic', 'cozy', 'natural'],
    brief: '木質暖灰、無襯線清爽字體與北歐插畫，營造森林系音樂節。',
    status: 'shipped',
  },
  {
    slug: 'design-swiss-international',
    name: { zh: '瑞士國際風格', en: 'Swiss International' },
    category: 'cultural',
    round: 1,
    tags: ['grid', 'helvetica', 'sans-serif'],
    brief: '左對齊網格、Helvetica 與紅色強調，二戰後最理性的排版革命。',
    status: 'shipped',
  },
  {
    slug: 'design-taiwan-temple',
    name: { zh: '台灣廟會', en: 'Taiwan Temple Carnival' },
    category: 'cultural',
    round: 1,
    tags: ['taiwan', 'folk', 'festive'],
    brief: '霓虹招牌、紅黃對比與民俗符號，把音樂節辦成熱鬧的夜市廟口。',
    status: 'shipped',
  },

  // 裝飾性
  {
    slug: 'design-isometric-3d',
    name: { zh: '等距 3D', en: 'Isometric 3D' },
    category: 'decorative',
    round: 1,
    tags: ['3d', 'illustration', 'colorful'],
    brief: '30 度斜角的玩具世界、立體舞台與小人物插畫，整個音樂節變成樂高城。',
    status: 'shipped',
  },
  {
    slug: 'design-hand-drawn',
    name: { zh: '手繪塗鴉', en: 'Hand-Drawn Sketch' },
    category: 'decorative',
    round: 1,
    tags: ['sketch', 'doodle', 'human'],
    brief: '彩色蠟筆、歪斜手寫字與隨意箭頭，像翻開設計師現場速寫本。',
    status: 'shipped',
  },
  {
    slug: 'design-gradient-mesh',
    name: { zh: '漸層 Mesh', en: 'Gradient Mesh' },
    category: 'decorative',
    round: 1,
    tags: ['gradient', 'aurora', 'fluid'],
    brief: '流動曲線漸層、極光色彩與柔光球體，像把音樂節調進液態畫布。',
    status: 'shipped',
  },

  // ========================================
  // 第二輪 · 15 個動態風格 (round: 2)
  // ========================================

  // Parallax 視差類
  {
    slug: 'motion-parallax-layers',
    name: { zh: '多層視差', en: 'Parallax Layers' },
    category: 'motion',
    round: 2,
    motionType: 'parallax',
    tags: ['parallax', 'depth', 'mountain'],
    brief: '滾動時三層山海以不同速度位移，呈現都蘭灣的縱深感。',
    status: 'shipped',
  },
  {
    slug: 'motion-sticky-stack',
    name: { zh: 'Sticky 堆疊章節', en: 'Sticky Stack' },
    category: 'motion',
    round: 2,
    motionType: 'parallax',
    tags: ['sticky', 'stack', 'apple-style'],
    brief: '每個章節先被釘住、再被下一章從底部疊上來，像 Apple AirPods 頁。',
    status: 'shipped',
  },
  {
    slug: 'motion-horizontal-scroll',
    name: { zh: '橫向滾動陣容', en: 'Horizontal Scroll' },
    category: 'motion',
    round: 2,
    motionType: 'parallax',
    tags: ['horizontal', 'scroll-translate', 'lineup'],
    brief: '在 lineup 區段，垂直滾動會被轉換成 12 組樂團的橫向滑動。',
    status: 'shipped',
  },

  // Scroll-driven 滾動驅動
  {
    slug: 'motion-scroll-snap-acts',
    name: { zh: '全屏章節切換', en: 'Scroll Snap Acts' },
    category: 'motion',
    round: 2,
    motionType: 'scroll-driven',
    tags: ['scroll-snap', 'fullscreen', 'cinematic'],
    brief: '每個區段佔滿整個視窗，scroll-snap 強制吸附，像翻電影章節。',
    status: 'shipped',
  },
  {
    slug: 'motion-scroll-progress',
    name: { zh: '滾動進度指示', en: 'Scroll Progress' },
    category: 'motion',
    round: 2,
    motionType: 'scroll-driven',
    tags: ['progress-bar', 'indicator', 'navigation'],
    brief: '頂部 progress bar + 側邊章節點陣，隨滾動點亮當下位置。',
    status: 'shipped',
  },
  {
    slug: 'motion-marquee-band',
    name: { zh: '滾動跑馬燈', en: 'Marquee Band' },
    category: 'motion',
    round: 2,
    motionType: 'scroll-driven',
    tags: ['marquee', 'speed-modulated', 'lineup'],
    brief: '12 組樂團名巨型橫向跑動、滾動時會反向加速，產生時間感。',
    status: 'shipped',
  },

  // Reveal 入場
  {
    slug: 'motion-fade-stagger',
    name: { zh: '錯落淡入', en: 'Fade Stagger' },
    category: 'motion',
    round: 2,
    motionType: 'reveal',
    tags: ['intersection-observer', 'stagger', 'wave'],
    brief: '卡片進入視窗時依序波浪式淡入位移，像被海浪推上岸。',
    status: 'shipped',
  },
  {
    slug: 'motion-typewriter',
    name: { zh: '打字機標題', en: 'Typewriter' },
    category: 'motion',
    round: 2,
    motionType: 'reveal',
    tags: ['typewriter', 'cursor-blink', 'hero'],
    brief: 'Hero 標題以打字機節奏一字一字浮現，段落隨之滑入。',
    status: 'shipped',
  },
  {
    slug: 'motion-counter-burst',
    name: { zh: '數字爆裂計數', en: 'Counter Burst' },
    category: 'motion',
    round: 2,
    motionType: 'reveal',
    tags: ['counter', 'animate-numeric', 'about'],
    brief: 'About 區的 6 屆 / 12 樂團 / 25,000 人次數字在滾入時從 0 跳動到目標值。',
    status: 'shipped',
  },

  // Loop 循環
  {
    slug: 'motion-aurora-flow',
    name: { zh: '極光漸層流動', en: 'Aurora Flow' },
    category: 'motion',
    round: 2,
    motionType: 'loop',
    tags: ['gradient', 'aurora', 'keyframes'],
    brief: '多色 radial-gradient 球體以 20s loop 緩慢流動，整面像呼吸的極光。',
    status: 'shipped',
  },
  {
    slug: 'motion-floating-orbs',
    name: { zh: '漂浮幾何球', en: 'Floating Orbs' },
    category: 'motion',
    round: 2,
    motionType: 'loop',
    tags: ['floating', 'orbs', 'background'],
    brief: '背景的彩色幾何形體上下漂浮、時快時慢，給靜態頁面呼吸感。',
    status: 'shipped',
  },
  {
    slug: 'motion-noise-grain',
    name: { zh: '動態噪點', en: 'Noise Grain' },
    category: 'motion',
    round: 2,
    motionType: 'loop',
    tags: ['noise', 'film-grain', 'hue-rotate'],
    brief: '電影顆粒感的動態噪點 + 緩慢色相旋轉，整頁像舊膠卷在播放。',
    status: 'shipped',
  },

  // Pointer 互動
  {
    slug: 'motion-cursor-spotlight',
    name: { zh: '滑鼠光暈', en: 'Cursor Spotlight' },
    category: 'motion',
    round: 2,
    motionType: 'pointer',
    tags: ['cursor', 'spotlight', 'radial-gradient'],
    brief: 'Hero 區暗背景上有顆光暈跟著滑鼠走，像舞台燈追樂手。',
    status: 'shipped',
  },
  {
    slug: 'motion-tilt-cards',
    name: { zh: '3D 傾斜卡片', en: 'Tilt Cards' },
    category: 'motion',
    round: 2,
    motionType: 'pointer',
    tags: ['3d-transform', 'mouse-tilt', 'perspective'],
    brief: '12 張樂團卡會依滑鼠位置 3D 傾斜，像捧在手上的小相片。',
    status: 'shipped',
  },
  {
    slug: 'motion-magnetic-cta',
    name: { zh: '磁吸按鈕', en: 'Magnetic CTA' },
    category: 'motion',
    round: 2,
    motionType: 'pointer',
    tags: ['magnetic', 'attraction', 'cta'],
    brief: '主 CTA 按鈕在滑鼠靠近時被輕輕吸過去，按鍵變成有重力的物件。',
    status: 'shipped',
  },
];

export const totalCount = works.length;
