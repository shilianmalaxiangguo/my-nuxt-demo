// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/icon',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  image: {
    quality: 80,
    format: ['webp']
  },
  nitro: {
    preset: 'cloudflare-pages',
    output: {
      dir: './dist'
    },
    moduleSideEffects: ['shiki']
  },
  vite: {
    build: {
      manifest: true
    },
    optimizeDeps: {
      exclude: ['@vueuse/core', 'shiki']
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'material-theme'
      },
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'bash',
        'markdown'
      ]
    },
    markdown: {
      mdc: true,
      toc: {
        depth: 3,
        searchDepth: 3,
      }
    }
  },

})