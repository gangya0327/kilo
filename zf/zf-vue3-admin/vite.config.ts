import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import vueTypeImports from 'vite-plugin-vue-type-imports'
import path from "path"
import UnoCSS from "unocss/vite"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    // vueTypeImports
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()] // 解析 api
    }),
    Components({
      resolvers: [ElementPlusResolver()] // 解析组件
    })
  ]
})
