<template>
  <div class="home-page">
     <section class="hero">
        <div class="container">
          <picture>
            <source media="(max-width:1024px )" srcset="~/assets/images/bg-mobile.png">
            <img src="~/assets/images/bg.png" class="bg" alt="Фон стоматологической клиники Перфектус">
          </picture>
            <picture>
              <source media="(max-width:1024px )" srcset="~/assets/images/tooth-mobile.png">
              <img src="~/assets/images/tooth.png" class="tooth" alt="Декоративное изображение зуба">
            </picture>
            <div class="hero__content">
                <div class="hero__stats">
                    <div class="hero__stats-item">
                      <span>65 600</span>
                      <p>поставили <br> пломб</p>
                    </div>
                    <div class="hero__stats-item">
                      <span>8 640</span>
                      <p>поставили <br> коронок</p>
                    </div>
                    <div class="hero__stats-item">
                      <span>3550</span>
                      <p>установили съемных протезов</p>
                    </div>
                    <div class="hero__stats-item">
                      <span>3400</span>
                      <p>зубов спасли <br> от удаления</p>
                    </div>
                </div>
                 <h2 class="hero__subtitle">Стоматологическая клиника</h2>
                <h1 class="hero__title">«Перфектус»</h1>
                <a href="tel:" class="hero__tel">
                    Записаться на прием
                    <span>+7 (921) 873-70-73</span>
                </a>
                <p class="hero__descr">Опытные врачи, индивидуальный подход, современное оборудование, безопасное лечение, дружелюбная атмосфера — вот что вас ждет в стоматологии «Перфектус»</p>
            </div>
        </div>
     </section>
     <section class="services-section" id="services">
        <div class="container">
            <h3 class="services-section__title">Стоматологические услуги</h3>
            <p>В нашей клинике мы предлагаем комплексные стоматологические <br>
               услуги, направленные на поддержание здоровья и красоты ваших зубов. <br>
                Для ознакомления со стоимостью услуг скачайте наш PDF-прайс</p>
        </div>
        <div class="services-section__wrapper">
          <div class="container">
            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon1.svg" class="icon" alt="Иконка ортопедии и протезирования">
                   Ортопедия <br> и протезирование
              </div>
              <p>Замещение отсутствующих зубов, <br> восстановление красоты зубного ряда</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>
            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon2.svg" class="icon" alt="Иконка терапевтического лечения зубов">
                   Терапевтическое лечение зубов
              </div>
              <p>Лечени кариеса, пульпита, периодонтита</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>
            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon3.svg" class="icon" alt="Иконка пародонтологии">
                   Пародонтология
              </div>
              <p>Устранение подвижности зубов лечением десен, шинированием, протезированием</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>

            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon4.svg" class="icon" alt="Иконка эстетической стоматологии">
                   Эстетическая стоматология
              </div>
              <p>Профессиональное и безопасное отбеливание зубов</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>
            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon5.svg" class="icon" alt="Иконка профессиональной гигиены">
                  Профессиональная <br> гигиена
              </div>
              <p>Удаление зубных камней и налета <br> ультразвуком, airflow</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>
            <div class="services-section__item">
              <div class="services-section__item-top">
                   <img src="~/assets/images/icon6.svg" class="icon" alt="Иконка хирургической стоматологии">
                   Хирургическая стоматология 
              </div>
              <p>Удаление зубов, разрезы, закрытый/открытый кюретаж</p>
              <a href="/price.pdf" class="download" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.800003 11.2V12.8C0.800003 13.2244 0.968574 13.6314 1.26863 13.9314C1.56869 14.2315 1.97566 14.4 2.4 14.4H12C12.4243 14.4 12.8313 14.2315 13.1314 13.9314C13.4314 13.6314 13.6 13.2244 13.6 12.8V11.2M3.2 6.40005L7.2 10.4M7.2 10.4L11.2 6.40005M7.2 10.4V0.800049" stroke="url(#paint0_linear_59_170)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_59_170" x1="-4.32126" y1="20.5819" x2="15.4663" y2="18.8813" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#568EFF" />
                        <stop offset="1" stop-color="#9EBAC3" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Скачать PDF</span>
              </a>
            </div>
          </div>
        </div>
     </section>
     <section class="specialists-section">
        <div class="container">
          <div class="specialists-section__top">
            <div class="specialists-section__title">Наши специалисты</div>
            <a href="/specialists">
              все специалисты
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_180_416)">
    <path d="M9.49996 3.16675L8.38371 4.283L12.8012 8.70842H3.16663V10.2917H12.8012L8.38371 14.7172L9.49996 15.8334L15.8333 9.50008L9.49996 3.16675Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_180_416">
      <rect width="19" height="19" fill="white" />
    </clipPath>
  </defs>
</svg>
            </a>
          </div>
            
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
     <section class="gallery">
        <div class="container">
            <div class="gallery__title">Фото клиники</div>
            <div class="gallery__adress">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.87012 0C12.4879 0 14.9985 0.960276 16.8496 2.66895C18.7007 4.37763 19.7412 6.69488 19.7412 9.11133C19.7411 14.6988 12.5603 21.8021 10.4482 23.7705C10.1185 24.0779 9.62275 24.0779 9.29297 23.7705C7.18106 21.8022 9.88655e-05 14.699 0 9.11133C3.90059e-08 6.69504 1.03978 4.3776 2.89062 2.66895C4.74161 0.960341 7.25243 8.88204e-05 9.87012 0ZM9.87012 5.31445C8.86349 5.31454 7.89837 5.71502 7.18652 6.42676C6.47457 7.13871 6.07422 8.10448 6.07422 9.11133C6.07427 10.1181 6.47462 11.084 7.18652 11.7959C7.89835 12.5075 8.86359 12.9071 9.87012 12.9072C10.8768 12.9072 11.8428 12.5077 12.5547 11.7959C13.2666 11.084 13.6669 10.1181 13.667 9.11133C13.667 8.10448 13.2666 7.13871 12.5547 6.42676C11.8427 5.71485 10.8769 5.31445 9.87012 5.31445Z" fill="url(#paint0_linear_59_1773)" />
                <defs>
                  <linearGradient id="paint0_linear_59_1773" x1="-7.89844" y1="34.9106" x2="22.6725" y2="32.6146" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#568EFF" />
                    <stop offset="1" stop-color="#9EBAC3" />
                  </linearGradient>
                </defs>
              </svg>
              Приозерск, ул. Калинина, 11, 3 этаж, каб 301
            </div>
             <Swiper
    :modules="[SwiperNavigation]"
    :space-between="20"
    :slides-per-view="'auto'"
    :navigation="true"
    class="gallery__slider"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <div class="slide-content">
        <img 
          :src="slide.imageUrl" 
          :alt="'Фото клиники Перфектус - интерьер ' + slide.id"
          class="product-image"
        >
      </div>
    </SwiperSlide>
  </Swiper>
        </div>
     </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// Импортируем изображения напрямую
import img01 from '~/assets/images/gallery/clinic-1.jpg'
import img02 from '~/assets/images/gallery/clinic-2.jpg'
import img03 from '~/assets/images/gallery/clinic-3.jpg'
import img1 from '~/assets/images/gallery/gallery1.jpg'
import img2 from '~/assets/images/gallery/gallery2.jpg'
import img3 from '~/assets/images/gallery/gallery3.jpg'
import img4 from '~/assets/images/gallery/gallery4.jpg'
import img5 from '~/assets/images/gallery/gallery5.jpg'
import img6 from '~/assets/images/gallery/gallery6.jpg'
import img7 from '~/assets/images/gallery/gallery7.jpg'
import img8 from '~/assets/images/gallery/gallery8.jpg'
import img9 from '~/assets/images/gallery/gallery9.jpg'

const SwiperNavigation = Navigation

import 'swiper/css'
import 'swiper/css/navigation'

const slides = ref([
  { id: 1, imageUrl: img01 },
  { id: 2, imageUrl: img02 },
  { id: 3, imageUrl: img03 },
  { id: 4, imageUrl: img1 },
  { id: 5, imageUrl: img2 },
  { id: 6, imageUrl: img3 },
  { id: 7, imageUrl: img4 },
  { id: 8, imageUrl: img5 },
  { id: 9, imageUrl: img6 },
  { id: 10, imageUrl: img7 },
  { id: 11, imageUrl: img8 },
  { id: 12, imageUrl: img9 }
])

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

useHead({
  title: 'Стоматология Перфектус в Приозерске | Современная стоматологическая клиника',
  meta: [
    { 
      name: 'description', 
      content: 'Стоматологическая клиника Перфектус в Приозерске. Опытные врачи, современное оборудование, безопасное лечение. Запись по телефону +7 (921) 873-70-73. Ул. Калинина, 11, 3 этаж.' 
    },
    { 
      name: 'keywords', 
      content: 'стоматология Приозерск, лечение зубов, стоматолог, коронки, пломбы, протезирование, отбеливание зубов, профессиональная гигиена' 
    }
  ]
})
</script>


