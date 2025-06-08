import {
  defineConfig,
  presetWind3,
  presetAttributify,
  presetIcons
} from "unocss"
import transformerDirectives from "@unocss/transformer-directives"

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()], // 类似 apply
  shortcuts: [["icon", "inline-block w-1em h-1em align-middle text-current"]]
})
