import js from "@eslint/js" // 校验 js 规范
import globals from "globals"
import tseslint from "typescript-eslint" // 校验 ts 规范
import pluginVue from "eslint-plugin-vue" // 校验 vue 规范
import { defineConfig } from "eslint/config"
// import prettierRecommended from "eslint-plugin-prettier/recommended"
import prettier from "eslint-plugin-prettier"

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const autoImport = require('./eslintrc-auto-import.json')

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImport.globals
      }
    }
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  { plugins: { prettier } },
  {
    rules: {
      "no-console": "warn",
      "vue/multi-word-component-names": "off"
    }
  }
  // prettierRecommended
])
