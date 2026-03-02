<template>
  <header class="header">
    <div class="container">
      <img src="~/assets/images/logo.svg" alt="Логотип стоматологической клиники Перфектус" class="logo">
      <nav class="nav" :class="{ 'open': isMenuOpen }">
        <NuxtLink to="/" active-class="active" @click="closeMenu">Наша клиника</NuxtLink>
        <NuxtLink to="/#services" active-class="active" @click="closeMenu">Услуги</NuxtLink>
        <NuxtLink to="/specialists" active-class="active" @click="closeMenu">Специалисты</NuxtLink>
        <NuxtLink to="/docs" active-class="active" @click="closeMenu">Документы</NuxtLink>
      </nav>
      <div class="header__actions">
          <div class="header__action">
              <div class="header__action-icon">
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0C8.22391 4.37133e-08 9.87769 0.632594 11.0967 1.75781C12.3154 2.88299 13 4.40891 13 6C13 9.52113 8.66985 13.9564 7.07812 15.4678C6.75121 15.7782 6.24879 15.7782 5.92188 15.4678C4.33015 13.9564 0 9.52113 0 6C3.85087e-08 4.40891 0.684639 2.88299 1.90332 1.75781C3.12231 0.632594 4.77609 0 6.5 0ZM6.5 3.5C5.83696 3.5 5.20126 3.76358 4.73242 4.23242C4.26358 4.70126 4 5.33696 4 6C4 6.66304 4.26358 7.29874 4.73242 7.76758C5.20126 8.23642 5.83696 8.5 6.5 8.5C7.16304 8.5 7.79874 8.23642 8.26758 7.76758C8.73642 7.29874 9 6.66304 9 6C9 5.33696 8.73642 4.70126 8.26758 4.23242C7.79874 3.76358 7.16304 3.5 6.5 3.5Z" fill="white" />
                  </svg>
              </div>
              <div class="header__action-wrap">
                <span>Мы находимся по адресу:</span>
                <p>Приозерск, ул. Калинина, 11, 3 этаж, каб 301</p>
              </div>
          </div>
          <div class="header__action">
              <div class="header__action-icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.83084 0.721332C4.60527 0.176434 4.01057 -0.113592 3.44223 0.0416744L0.86422 0.744768C0.354477 0.885387 0 1.34826 0 1.87558C0 9.12331 5.87669 15 13.1244 15C13.6517 15 14.1146 14.6455 14.2552 14.1358L14.9583 11.5578C15.1136 10.9894 14.8236 10.3947 14.2787 10.1692L11.4663 8.99734C10.9888 8.79813 10.4351 8.93581 10.1099 9.33716L8.92636 10.7814C6.86396 9.80589 5.19411 8.13605 4.21856 6.07364L5.66284 4.89302C6.06419 4.56491 6.20187 4.01416 6.00266 3.53664L4.83084 0.724262V0.721332Z" fill="white" />
                </svg>
              </div>
              <div class="header__action-wrap">
                <span>Запись по телефону:</span>
                <a href="tel:+7 (921) 873-70-73">+7 (921) 873-70-73</a>
              </div>
          </div>
      </div>
    </div>
    <div class="hamburger" @click="toggleMenu">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H19M1 1H19M1 13H19" stroke="#3C3C3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMenuOpen = ref(false)

// Функция для открытия/закрытия меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  updateBodyClass()
}

// Функция для закрытия меню
const closeMenu = () => {
  isMenuOpen.value = false
  updateBodyClass()
}

// Обновление класса на body
const updateBodyClass = () => {
  if (isMenuOpen.value) {
    document.body.classList.add('menu-open')
    document.body.style.overflow = 'hidden'
  } else {
    document.body.classList.remove('menu-open')
    document.body.style.overflow = ''
  }
}

// Закрытие меню при клике вне навигации (опционально)
const handleClickOutside = (event) => {
  const nav = document.querySelector('.nav')
  const hamburger = document.querySelector('.hamburger')
  
  if (isMenuOpen.value && 
      nav && 
      !nav.contains(event.target) && 
      hamburger && 
      !hamburger.contains(event.target)) {
    closeMenu()
  }
}

// Обработка изменения размера экрана - закрываем меню на десктопе
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    closeMenu()
  }
}

// Добавляем и удаляем обработчики событий
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
  // Убираем класс при размонтировании компонента
  document.body.classList.remove('menu-open')
  document.body.style.overflow = ''
})

// Следим за изменением маршрута для закрытия меню (для Nuxt)
const route = useRoute()
watch(() => route.path, () => {
  closeMenu()
})
</script>
