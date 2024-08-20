import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  // Other Astro configuration options can go here

  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
          devSourcemap: true,
        },
      },
    },
    ssr: {
      noExternal: ['@formspark/use-formspark'],
    },
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'de'],
  },
  integrations: [astroI18next()],
})
