<template>
  <div class="profile">
    <!-- Секция информации о специалисте -->
    <section class="specialist">
      <div class="container">
        <!-- Кнопка назад -->
        <NuxtLink to="/specialists" class="prev">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L8.41 12.59L3.83 8L20 8L20 6L3.83 6L8.42 1.41L7 -1.1365e-06L6.11959e-07 7L7 14Z" fill="#323232" />
          </svg>
          К общему списку
        </NuxtLink>

        <!-- Информация о специалисте -->
        <div v-if="specialist" class="specialist-info">
          <div class="specialist-info__title">Профиль специалиста</div>
          <div class="specialist-info__wrapper">
            <div class="specialist-info__img">
              <img :src="specialist.photo" :alt="specialist.fullName">
            </div>
            <div class="specialist-info__items">
              <div class="specialist-info__item">
                <span>ФИО:</span>
                <p>{{ specialist.fullName }}</p>
              </div>
              <div class="specialist-info__item">
                <span>Профиль специалиста:</span>
                <p>{{ specialist.profile }}</p>
              </div>
              <div class="specialist-info__item">
                <span>Опыт работы:</span>
                <p>{{ specialist.experience }} лет</p>
              </div>
              <a href="#education" class="docs-link">
                Посмотреть документы
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_174_420)">
                    <path d="M15 5L13.59 6.41L18.17 11L2 11V13L18.17 13L13.58 17.59L15 19L22 12L15 5Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_174_420">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Если специалист не найден -->
        <div v-else class="not-found">
          <p>Специалист не найден</p>
          <NuxtLink to="/specialists" class="back-link">Вернуться к списку</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Секция образования -->
    <section v-if="specialist" id="education" class="education">
    <div class="container">
      <div class="education__title">Образование</div>
      <div v-if="specialist.education && specialist.education.length > 0" class="education__wrapper">
        <!-- Свайпер контейнер -->
        <ClientOnly>
          <Swiper
            :modules="[SwiperFreeMode]"
            :slides-per-view="'auto'"
            :space-between="20"
            :free-mode="{
              enabled: true,
              momentum: true,
              momentumBounce: true,
              momentumBounceRatio: 1,
              momentumRatio: 1,
              momentumVelocityRatio: 1
            }"
            :grab-cursor="true"
            :breakpoints="{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24
              }
            }"
            class="educationSwiper"
          >
            <SwiperSlide v-for="(edu, index) in specialist.education" :key="index">
              <div class="education__item">
                <div class="education__item-label"><span>{{ edu.type }}</span></div>
                <p>{{ edu.institution }}</p>
                <div class="date">Дата получения: <span>{{ edu.date }}</span></div>
                
              </div>
            </SwiperSlide>
          </Swiper>
          
          <!-- Fallback для SSR -->
          <template #fallback>
            <div class="education__grid">
              <div v-for="(edu, index) in specialist.education.slice(0, 3)" :key="index" class="education__item">
                <div class="education__item-label"><span>{{ edu.type }}</span></div>
                <p>{{ edu.institution }}</p>
                <div class="date">Дата получения: <span>{{ edu.date }}</span></div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
      <div v-else class="no-education">
        <p>Информация об образовании отсутствует</p>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup lang="ts">
import { getSpecialistById } from '~/data/specialists'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode as SwiperFreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

defineProps({
  specialist: {
    type: Object,
    required: true
  }
})

const route = useRoute()

// Получаем ID из URL
const specialistId = route.params.id as string

// Для отладки
console.log('Profile page loaded')
console.log('Route params:', route.params)
console.log('Specialist ID from URL:', specialistId)

// Находим специалиста по ID
const specialist = computed(() => {
  return getSpecialistById(specialistId)
})

// Если специалист не найден - показываем 404
if (!specialist.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Специалист не найден'
  })
}

// Метаданные
useHead({
  title: computed(() => specialist.value ? `${specialist.value.fullName} - Стоматология` : 'Специалист не найден'
  )
})
</script>
