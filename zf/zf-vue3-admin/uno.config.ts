import { defineConfig, presetWind3, presetAttributify } from "unocss"
import transformerDirectives from "@unocss/transformer-directives"

export default defineConfig({
  presets: [presetWind3(), presetAttributify()],
  transformers: [transformerDirectives()] // 类似 apply
})
