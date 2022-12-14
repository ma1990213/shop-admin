import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      // 配置项
      cache: false // 禁用eslint缓存
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
