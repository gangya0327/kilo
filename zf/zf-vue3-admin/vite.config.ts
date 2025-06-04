import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import vueTypeImports from 'vite-plugin-vue-type-imports'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    vue()
    // vueTypeImports
  ]
})
