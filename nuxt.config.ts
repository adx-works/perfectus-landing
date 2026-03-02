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
        { name: 'description', content: 'Стоматологическая клиника Перфектус в Приозерске. Опытные врачи, современное оборудование, безопасное лечение. Запись по телефону +7 (921) 873-70-73. Ул. Калинина, 11, 3 этаж.' },
        { property: 'og:title', content: 'Стоматология Перфектус в Приозерске | Современная стоматологическая клиника' },
        { property: 'og:description', content: 'Стоматологическая клиника Перфектус в Приозерске. Опытные врачи, современное оборудование, безопасное лечение. Запись по телефону +7 (921) 873-70-73. Ул. Калинина, 11, 3 этаж.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://perfectus-dent.ru' },
        { property: 'og:image', content: 'https://perfectus-dent.ru/images/og-image.jpg' },
        { property: 'og:locale', content: 'ru_RU' },
        { name: 'keywords', content: 'стоматология, зубы, лечение зубов, Приозерск, стоматолог, коронки, пломбы, протезирование' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Стоматологическая клиника Перфектус",
            "description": "Современная стоматологическая клиника в Приозерске с опытными врачами и современным оборудованием",
            "url": "https://perfectus-dent.ru",
            "telephone": "+7-921-873-70-73",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Калинина, 11, 3 этаж, каб 301",
              "addressLocality": "Приозерск",
              "addressRegion": "Ленинградская область",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "61.035472",
              "longitude": "30.119103"
            },
            "openingHours": [
              "Mo-Fr 10:00-20:00",
              "Sa 09:00-16:00"
            ],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card"],
            "currenciesAccepted": "RUB"
          })
        }
      ]
    }
  }
  
})