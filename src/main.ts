import { createApp } from 'vue'
import App from './App.vue'
import { initGA4 } from './lib/analytics'
import { loadAdSense } from './lib/adsense'

createApp(App).mount('#app')

// 在呼叫點用靜態 env 條件判斷：未設定時 Vite build 會把整段 DCE 掉、
// 連同 loader 函式與其中的 Google URL 一併 tree-shake，產物完全不含相關字串、
// 也不會載入任何外部腳本或送出任何請求。
if (import.meta.env.VITE_GA_ID) initGA4()
if (import.meta.env.VITE_ADSENSE_CLIENT) loadAdSense()
