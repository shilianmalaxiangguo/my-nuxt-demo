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
  }
})