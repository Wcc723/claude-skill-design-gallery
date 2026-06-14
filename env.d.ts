/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** GA4 評估 ID（G-XXXXXXXXXX）。留空＝不載入 gtag、不送任何分析請求。 */
  readonly VITE_GA_ID?: string;
  /** AdSense 發布商客戶 ID（ca-pub-XXXXXXXXXXXXXXXX）。留空＝不載入 adsbygoogle.js、AdSlot 在 prod 不渲染。 */
  readonly VITE_ADSENSE_CLIENT?: string;
  /** in-feed 廣告版位 ID（grid 內每 N 張卡插一個）。 */
  readonly VITE_ADSENSE_SLOT_INFEED?: string;
  /** footer/側欄 sticky 廣告版位 ID（可選）。 */
  readonly VITE_ADSENSE_SLOT_SIDEBAR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
