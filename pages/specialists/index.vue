<template>
  <div class="specialists">
     <section class="specialists-section specialists-hero">
        <div class="container">
             <div class="specialists-section__title">Наши специалисты</div>
            <p class="specialists-section__descr">
              Для более подробной информации о каждом из наших врачей, их квалификации <br> и опыте, вы можете ознакомиться с их профилями на нашем сайте
            </p>
            <div class="specialists-section__inner">
                <div class="specialists-section__info">
                    <p>Опытная команда специалистов с многолетней практикой</p>
                    <div class="descr">Наши врачи регулярно повышают квалификацию и используют современные методы лечения</div>
                </div>
                <div class="specialists-section__wrapper">
                  <!-- Используем router.push для навигации -->
                  <div 
                    v-for="specialist in specialists" 
                    :key="specialist.id"
                    class="specialists-section__item"
                    @click="goToSpecialist(specialist.id)"
                  >
                      <div class="specialists-section__item-img">
                           <img :src="specialist.photo" :alt="specialist.fullName">
                           <div class="name">{{ specialist.fullName }}</div>
                      </div>
                      <p>{{ specialist.profile }}</p>
                  </div>
                </div>
            </div>
        </div>
     </section>
     <section class="contat-us">
        <div class="container">
            <div class="contat-us__info">
                <div class="contat-us__subtitle">не уверены в выборе услуги?</div>
                <h3 class="contat-us__title">Свяжитесь с нами <br> и уточните <br> у специалиста</h3>
                <div class="contat-us__wrap">
                    <div class="contat-us__contacts">
                        <div class="contat-us__contact">
                            <span>Номер телефона:</span>
                            <a href="tel:+7 (921) 873-70-73">+7 (921) 873-70-73</a>
                        </div>
                        <div class="contat-us__contact">
                            <span>Электронная почта:</span>
                            <a href="mailto:perf-dent@yandex.ru">perf-dent@yandex.ru</a>
                        </div>
                    </div>
                    <img src="~/assets/images/tooth-contacts.png" alt="" class="contat-us__info-img">
                </div>
            </div>
            <img src="~/assets/images/contat-us.png" alt="" class="contat-us__img">
        </div>
     </section>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const specialists = [
  {
    id: 'dyakonova-vilena-viktorovna',
    fullName: 'Дьяконова Вилена Викторовна',
    photo: '/images/specialists/vilena-dyakonova.png',
    profile: 'Главный врач, врач стоматолог-ортопед, терапевт, хирург',
    experience: 28
  },
  {
    id: 'tsareva-yulia-anatolyevna',
    fullName: 'Царева Юлия Анатольевна',
    photo: '/images/specialists/tsareva.png',
    profile: 'Врач-стоматолог общей практики',
    experience: 24
  },
  {
    id: 'gogina-alina-vladimirovna',
    fullName: 'Гогина Алина Владимировна',
    photo: '/images/specialists/gogina.png',
    profile: 'Врач-стоматолог общей практики',
    experience: 7
  }
]

const goToSpecialist = (id: string) => {
  console.log('Navigating to specialist:', id)
  router.push(`/specialists/${id}`)
}
</script>