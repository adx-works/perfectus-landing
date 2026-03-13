<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1 class="error-title">{{ error.statusCode }}</h1>
        <h2 class="error-subtitle">
          {{ error.statusCode === 404 ? 'Страница не найдена' : 'Произошла ошибка' }}
        </h2>
        <p class="error-message">
          {{ error.statusCode === 404 
            ? 'К сожалению, запрашиваемая страница не существует или была перемещена.' 
            : error.statusMessage || 'Что-то пошло не так. Попробуйте обновить страницу.' 
          }}
        </p>
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary">
            Вернуться на главную
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])

const handleError = async () => {
  await clearError({ redirect: '/' })
}

useHead({
  title: 'Ошибка - Стоматология Перфектус',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.error-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 6rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-subtitle {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.error-message {
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

.error-contact {
  opacity: 0.8;
}

.error-contact p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.contact-phone {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.contact-phone:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .error-title {
    font-size: 4rem;
  }
  
  .error-subtitle {
    font-size: 1.5rem;
  }
  
  .error-content {
    padding: 2rem 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>