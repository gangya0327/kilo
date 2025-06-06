import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import vueTypeImports from 'vite-plugin-vue-type-imports'
import path from "path"
import UnoCSS from "unocss/vite"

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"

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
    // 解析 api
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: { enabled: false }, // 给 eslint 生成的配置需要一次
      resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts"
    }),
    // 解析组件
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components", "src/layout/components"]
    }),
    ElementPlus({})
  ]
})
