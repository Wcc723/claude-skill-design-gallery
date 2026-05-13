export type Category = 'mainstream' | 'retro' | 'experimental' | 'cultural' | 'decorative';

export type Work = {
  slug: string;
  name: { zh: string; en: string };
  category: Category;
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
};

export const works: Work[] = [
  // 主流 UI（批 1）
  {
    slug: 'design-glassmorphism',
    name: { zh: '玻璃擬態', en: 'Glassmorphism' },
    category: 'mainstream',
    tags: ['frosted', 'translucent', '2020s'],
    brief: '霧面玻璃、半透層次與微妙光暈，呈現未來感的清涼海邊夜場。',
    status: 'shipped',
  },
  {
    slug: 'design-neumorphism',
    name: { zh: '新擬物化', en: 'Neumorphism' },
    category: 'mainstream',
    tags: ['soft-ui', 'shadow', 'tactile'],
    brief: '柔和陰影與雕塑感介面，把音樂節做成像觸感極佳的精緻按鈕。',
    status: 'shipped',
  },
  {
    slug: 'design-material-3',
    name: { zh: 'Material You', en: 'Material 3' },
    category: 'mainstream',
    tags: ['google', 'dynamic-color', 'elevation'],
    brief: '動態色彩、明確層階與圓角元件，是當代產品設計的學院派。',
    status: 'shipped',
  },
  {
    slug: 'design-minimalism',
    name: { zh: '極簡主義', en: 'Minimalism' },
    category: 'mainstream',
    tags: ['whitespace', 'mono', 'editorial'],
    brief: '大量留白、單色字體與精確排版，把音樂節呈現成藝廊邀請函。',
    status: 'shipped',
  },
  {
    slug: 'design-dark-mode',
    name: { zh: '沉浸暗黑', en: 'Immersive Dark' },
    category: 'mainstream',
    tags: ['dark', 'low-light', 'cinematic'],
    brief: '深色背景配低彩度發光，像深夜 livehouse 裡的 stage spotlight。',
    status: 'shipped',
  },

  // 復古懷舊（批 2 + 批 3 起點）
  {
    slug: 'design-vaporwave',
    name: { zh: '蒸氣波', en: 'Vaporwave' },
    category: 'retro',
    tags: ['80s', 'pastel', 'aesthetic'],
    brief: '粉紫漸層、希臘雕像與日文標題的網際網路懷舊美學。',
    status: 'shipped',
  },
  {
    slug: 'design-y2k',
    name: { zh: 'Y2K 千禧', en: 'Y2K' },
    category: 'retro',
    tags: ['2000s', 'chrome', 'cyber-cute'],
    brief: '銀色金屬、半透塑膠與星型 sticker，把 1999 的網頁夢搬到 2026 海邊。',
    status: 'shipped',
  },
  {
    slug: 'design-web1',
    name: { zh: '90s Web 1.0', en: 'Web 1.0' },
    category: 'retro',
    tags: ['90s', 'tables', 'marquee'],
    brief: '系統字體、tile 背景與灰色按鈕，致敬 1996 年地理城市網頁。',
    status: 'shipped',
  },
  {
    slug: 'design-american-retro-print',
    name: { zh: '美式復古印刷', en: 'American Retro Print' },
    category: 'retro',
    tags: ['vintage', 'print', 'screen-print'],
    brief: '網點質感、油墨偏色與粗襯線標題，活脫像 1970 年代音樂海報。',
    status: 'shipped',
  },
  {
    slug: 'design-synthwave',
    name: { zh: '80s Synthwave', en: 'Synthwave' },
    category: 'retro',
    tags: ['80s', 'neon', 'grid'],
    brief: '霓虹線條、紫紅落日與賽車透視格線，演奏一場數位夕陽。',
    status: 'shipped',
  },
  {
    slug: 'design-bauhaus',
    name: { zh: '包浩斯', en: 'Bauhaus' },
    category: 'retro',
    tags: ['1920s', 'geometric', 'primary'],
    brief: '紅黃藍三色 + 圓三角方塊的幾何構成，向 100 年前的德國學院致敬。',
    status: 'shipped',
  },

  // 實驗前衛
  {
    slug: 'design-brutalism',
    name: { zh: '野獸派', en: 'Brutalism' },
    category: 'experimental',
    tags: ['raw', 'monospace', 'anti-design'],
    brief: '裸露結構、強烈對比與粗暴排版，故意違反所有 UX 學派。',
    status: 'shipped',
  },
  {
    slug: 'design-glitch',
    name: { zh: '故障藝術', en: 'Glitch Art' },
    category: 'experimental',
    tags: ['rgb-shift', 'distortion', 'noise'],
    brief: 'RGB 錯位、掃描線與隨機破碎，像訊號被海風干擾的演唱會直播。',
    status: 'shipped',
  },
  {
    slug: 'design-cyberpunk',
    name: { zh: '賽博龐克', en: 'Cyberpunk' },
    category: 'experimental',
    tags: ['neon', 'dystopia', 'tech-noir'],
    brief: '霓虹粉藍配黑色背景、片假名與發光邊框的高科技反烏托邦。',
    status: 'shipped',
  },
  {
    slug: 'design-constructivism',
    name: { zh: '構成主義', en: 'Constructivism' },
    category: 'experimental',
    tags: ['russian', 'propaganda', 'diagonal'],
    brief: '紅黑斜切構圖、宣傳海報語法，把獨立音樂節做成革命口號。',
    status: 'shipped',
  },
  {
    slug: 'design-ascii-terminal',
    name: { zh: 'ASCII 終端機', en: 'ASCII Terminal' },
    category: 'experimental',
    tags: ['monospace', 'green-phosphor', 'cli'],
    brief: '綠底螢光字、ASCII art 與 80x24 終端機美學，整個網頁是一台 PDP-11。',
    status: 'shipped',
  },
  {
    slug: 'design-editorial',
    name: { zh: '雜誌排版', en: 'Editorial Magazine' },
    category: 'experimental',
    tags: ['print', 'serif', 'grid'],
    brief: '12 欄網格、粗襯線標題與圖文混排，像翻開《Monocle》音樂特輯。',
    status: 'shipped',
  },

  // 文化在地
  {
    slug: 'design-wabi-sabi',
    name: { zh: '日式禪意', en: 'Wabi-Sabi' },
    category: 'cultural',
    tags: ['japan', 'minimal', 'natural'],
    brief: '米色紙質、墨色筆觸與留白構成，安靜得像京都茶室裡的音樂節。',
    status: 'shipped',
  },
  {
    slug: 'design-chinoiserie',
    name: { zh: '中國風國潮', en: 'Chinoiserie / Guochao' },
    category: 'cultural',
    tags: ['china', 'traditional', 'modern-fusion'],
    brief: '硃砂紅、墨黑、宋體字配水墨點綴，融合古典與當代潮流。',
    status: 'shipped',
  },
  {
    slug: 'design-scandinavian',
    name: { zh: '北歐極簡', en: 'Scandinavian' },
    category: 'cultural',
    tags: ['nordic', 'cozy', 'natural'],
    brief: '木質暖灰、無襯線清爽字體與北歐插畫，營造森林系音樂節。',
    status: 'shipped',
  },
  {
    slug: 'design-swiss-international',
    name: { zh: '瑞士國際風格', en: 'Swiss International' },
    category: 'cultural',
    tags: ['grid', 'helvetica', 'sans-serif'],
    brief: '左對齊網格、Helvetica 與紅色強調，二戰後最理性的排版革命。',
    status: 'shipped',
  },
  {
    slug: 'design-taiwan-temple',
    name: { zh: '台灣廟會', en: 'Taiwan Temple Carnival' },
    category: 'cultural',
    tags: ['taiwan', 'folk', 'festive'],
    brief: '霓虹招牌、紅黃對比與民俗符號，把音樂節辦成熱鬧的夜市廟口。',
    status: 'shipped',
  },

  // 裝飾性
  {
    slug: 'design-isometric-3d',
    name: { zh: '等距 3D', en: 'Isometric 3D' },
    category: 'decorative',
    tags: ['3d', 'illustration', 'colorful'],
    brief: '30 度斜角的玩具世界、立體舞台與小人物插畫，整個音樂節變成樂高城。',
    status: 'shipped',
  },
  {
    slug: 'design-hand-drawn',
    name: { zh: '手繪塗鴉', en: 'Hand-Drawn Sketch' },
    category: 'decorative',
    tags: ['sketch', 'doodle', 'human'],
    brief: '彩色蠟筆、歪斜手寫字與隨意箭頭，像翻開設計師現場速寫本。',
    status: 'shipped',
  },
  {
    slug: 'design-gradient-mesh',
    name: { zh: '漸層 Mesh', en: 'Gradient Mesh' },
    category: 'decorative',
    tags: ['gradient', 'aurora', 'fluid'],
    brief: '流動曲線漸層、極光色彩與柔光球體，像把音樂節調進液態畫布。',
    status: 'shipped',
  },
];

export const totalCount = works.length;
