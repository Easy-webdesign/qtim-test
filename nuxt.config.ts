// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
  ],

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `
                    @import "@/assets/scss/variables/index.scss";
                    @import "@/assets/scss/mixins/index.scss";
                `,
              }
          }
      }
  },

  css: [
    '@/assets/scss/style.scss'
  ],

  components: {
      global: true,
      dirs: [
          {path: '~/components/blocks/'},
          {path: '~/components/items/'},
          {path: '~/components/ui/'},
      ]
  },

  runtimeConfig: {
      public: {
          baseURL: process.env.BASE_URL
      },
  },

  imports: {
      dirs: ['./store'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  typescript: {
    typeCheck: true
  }
})
