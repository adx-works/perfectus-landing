<template>
  <div class="docs">
     <section class="documents">
        <div class="development">
             <svg viewBox="0 0 64 64" fill="none" stroke="#98b7c6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M16 8h24l12 12v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"></path><path d="M40 8v12h12"></path><path d="M20 28h24M20 36h16M20 44h24" stroke-width="1.5"></path></svg>
             <div class="development__title">Страница в разработке</div>
             <p class="development__descr">Раздел «Документы» скоро будет доступен. <br> Мы работаем над наполнением страницы.</p>
        </div>

     </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Документы и лицензии - Стоматологическая клиника Перфектус в Приозерске',
  meta: [
    { 
      name: 'description', 
      content: 'Официальные документы, лицензии и сертификаты стоматологической клиники Перфектус в Приозерске. Вся документация для вашего спокойствия и доверия.' 
    },
    { 
      name: 'keywords', 
      content: 'документы стоматологии, лицензия стоматологической клиники, сертификаты врачей, Перфектус документы, Приозерск' 
    },
    { property: 'og:title', content: 'Документы и лицензии - Стоматологическая клиника Перфектус' },
    { property: 'og:description', content: 'Официальные документы, лицензии и сертификаты стоматологической клиники Перфектус в Приозерске.' }
  ]
})
</script>