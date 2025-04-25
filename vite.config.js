import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr'

// const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
// const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  // lintOnSave: false, // 关闭ESLint
  // productionSourceMap: false, // 设为false表示不生成source map文件
  // chainWebpack: (config) => {
  //   config.optimization.minimize(false) // vuecli去掉代码混淆和压缩
  // },
  // transpileDependencies: true,
  build: {
    minify: false, // 關閉混淆
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js', // 入口文件 (e.g., main.js)
        chunkFileNames: 'js/[name].js', // 其他拆分的 JS
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name ?? '')) {
            return 'img/[name][extname]' // 圖片存放於 img/
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name ?? '')) {
            return 'fonts/[name][extname]' // 字型存放於 fonts/
          }
          if (/\.css$/.test(assetInfo.name ?? '')) {
            return 'css/[name][extname]' // CSS 存放於 css/
          }
          return 'assets/[name][extname]' // 其他資源
        }
      }
    }
  },

  plugins: [vue(), svgr()],
  resolve: {
    alias: {
      'swiper/vue': 'swiper/vue',
      'swiper/css': 'swiper/css',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/' // 將 <REPO_NAME> 替換為你的 GitHub repository 名稱
  // base: '/Daga-homePage/' // 將 <REPO_NAME> 替換為你的 GitHub repository 名稱
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   chunkSizeWarningLimit: 1000 // 根據需要調整
  // }
})
