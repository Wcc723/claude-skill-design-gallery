// Google AdSense 條件式載入器。
// 只有設定了 VITE_ADSENSE_CLIENT 才動態載入 adsbygoogle.js（用 module 級旗標防重複注入），
// publisher id 帶在 query 上，避免把任何 id 硬寫進 index.html（開源 repo 友善）。

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

let loaded = false;

export function hasAdSense(): boolean {
  return !!import.meta.env.VITE_ADSENSE_CLIENT;
}

export function loadAdSense(): void {
  const client = import.meta.env.VITE_ADSENSE_CLIENT;
  if (!client || loaded) return; // 未設定 / 已載入 → 不重複注入
  loaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
  document.head.appendChild(s);
}
