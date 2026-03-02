export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  compatibilityDate: '2026-03-01',
  
  css: [
    '~/assets/styles/main.scss' 
  ],
  
  modules: [
    '@pinia/nuxt'
  ],
  
  pinia: {
    storesDirs: ['./stores/**']
  },
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Стоматология Перфектус в Приозерске | Современная стоматологическая клиника',
      meta: [
        { name: 'description', content: 'Стоматологическая клиника Перфектус в Приозерске. Опытные врачи, современное оборудование, безопасное лечение. Запись по телефону +7 (921) 873-70-73. Ул. Калинина, 11, 3 этаж.' }
      ]
    }
  }
  
})