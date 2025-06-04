import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueTypeImports from 'vite-plugin-vue-type-imports'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueTypeImports],
})
