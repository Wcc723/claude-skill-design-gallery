import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// GitHub Pages 部署需要設 base 為 /<repo-name>/。
// dev 預設用 '/'，build/preview 預設用 /claude-skill-design-gallery/。
// 改儲存庫名稱時，改 PROD_BASE 一行或用 VITE_BASE 環境變數覆蓋。
const PROD_BASE = process.env.VITE_BASE ?? '/claude-skill-design-gallery/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // vite dev = mode 'development'、vite build / preview = mode 'production'
  base: mode === 'production' ? PROD_BASE : '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))
