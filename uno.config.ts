import presetUno, { Theme } from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, UserConfig } from 'unocss'

const config = defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {},
}) satisfies UserConfig<Theme>

// noinspection JSUnusedGlobalSymbols
export default config
