// GA4 條件式載入器。
// 只有設定了 VITE_GA_ID 才動態插入 gtag.js 並送出初始 page_view。
// 本站是單頁應用（只有一個 route，外連作品都用 target="_blank" 開新分頁），
// 預設的 page_view 已足夠，不需掛 SPA 路由追蹤。

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initGA4(): void {
  const id = import.meta.env.VITE_GA_ID;
  if (!id) return; // 未設定 → 完全不載入、不送任何請求

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}
