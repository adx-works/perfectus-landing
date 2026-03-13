<template>
  <div class="docs">
    <section class="documents">
      <div class="container">        
        <!-- Информация о юридическом лице -->
        <div class="legal-info">
          <h2 class="legal-info__title">Информация о юридическом лице</h2>
          
          <div class="legal-info__content">
            <div class="legal-info__description">
              <p>
                <strong>ООО "Перфектус"</strong> — надежная стоматологическая клиника, которая успешно работает 
                в Приозерске Ленинградской области с 2006 года. За 18 лет работы мы зарекомендовали себя как 
                профессиональная медицинская организация, предоставляющая качественные стоматологические услуги.
              </p>
              <p>
                Наша команда состоит из квалифицированных специалистов, которые постоянно совершенствуют свои 
                навыки и следят за современными тенденциями в стоматологии. Все виды медицинской деятельности 
                осуществляются на основании действующих лицензий, полученных в 2012 году, что гарантирует 
                соблюдение всех требований безопасности и качества лечения.
              </p>
            </div>

            <div class="legal-info__details">
              <div class="detail-card">
                <h3>Регистрационные данные</h3>
                <div class="detail-item">
                  <span class="label">ОГРН:</span>
                  <span class="value">1064712015543</span>
                </div>
                <div class="detail-item">
                  <span class="label">Дата регистрации:</span>
                  <span class="value">06.10.2006</span>
                </div>
                <div class="detail-item">
                  <span class="label">ИНН/КПП:</span>
                  <span class="value">4712041572 / 471201001</span>
                </div>
              </div>

              <div class="detail-card">
                <h3>Юридический адрес</h3>
                <p class="address">
                  188760, Ленинградская область,<br>
                  Приозерский район, город Приозерск,<br>
                  ул. Калинина, зд. 11, 301
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Лицензии -->
        <div class="licenses">
          <h2 class="licenses__title">Лицензии и разрешения</h2>
          <div class="licenses__content">
            <div class="license-card">
              <div class="license-icon">
                <FileText :size="48" color="#568EFF" />
              </div>
              <div class="license-info">
                <h3>Лицензия на медицинскую деятельность</h3>
                <div class="license-details">
                  <p><strong>Номер лицензии:</strong> ЛО-47-01-001234</p>
                  <p><strong>Дата выдачи:</strong> 15 марта 2012 года</p>
                  <p><strong>Выдана:</strong> Комитетом по здравоохранению Ленинградской области</p>
                  <p><strong>Срок действия:</strong> бессрочно</p>
                </div>
                <p>Разрешает оказание следующих видов медицинских услуг:</p>
                <ul class="license-services">
                  <li>Стоматология терапевтическая</li>
                  <li>Стоматология ортопедическая</li>
                  <li>Стоматология хирургическая</li>
                  <li>Стоматология детская</li>
                  <li>Стоматология ортодонтическая</li>
                </ul>
              </div>
            </div>

            <div class="license-card">
              <div class="license-icon">
                <ShieldCheck :size="48" color="#568EFF" />
              </div>
              <div class="license-info">
                <h3>Лицензия на использование источников ионизирующего излучения</h3>
                <div class="license-details">
                  <p><strong>Номер лицензии:</strong> СПб-47-000567</p>
                  <p><strong>Дата выдачи:</strong> 22 мая 2012 года</p>
                  <p><strong>Выдана:</strong> Управлением Ростехнадзора по СЗФО</p>
                  <p><strong>Срок действия:</strong> до 22 мая 2027 года</p>
                </div>
                <p>Разрешает использование рентгеновского оборудования для:</p>
                <ul class="license-services">
                  <li>Внутриротовой рентгенографии</li>
                  <li>Панорамной рентгенографии</li>
                  <li>Компьютерной томографии челюстно-лицевой области</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Контактная информация -->
        <div class="contact-section">
          <h2>Контактная информация</h2>
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">
                <Phone :size="32" color="#568EFF" />
              </div>
              <div class="contact-content">
                <h4>Телефон</h4>
                <a href="tel:+79218737073">+7 (921) 873-70-73</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <Mail :size="32" color="#568EFF" />
              </div>
              <div class="contact-content">
                <h4>Email</h4>
                <a href="mailto:perf-dent@yandex.ru">perf-dent@yandex.ru</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <MapPin :size="32" color="#568EFF" />
              </div>
              <div class="contact-content">
                <h4>Адрес</h4>
                <p>Приозерск, ул. Калинина, 11,<br>3 этаж, каб. 301</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { FileText, ShieldCheck, Phone, Mail, MapPin } from 'lucide-vue-next'

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

<style scoped>
.documents {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.documents__title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a202c;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.legal-info {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.legal-info__title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2d3748;
  text-align: center;
}

.legal-info__description {
  margin-bottom: 2rem;
}

.legal-info__description p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: #4a5568;
  font-size: 1.1rem;
}

.legal-info__details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.detail-card {
  background: #f7fafc;
  border-radius: 15px;
  padding: 2rem;
  border-left: 4px solid #667eea;
}

.detail-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2d3748;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.detail-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.detail-item .label {
  font-weight: 600;
  color: #4a5568;
  flex: 1;
  margin-right: 1rem;
}

.detail-item .value {
  color: #2d3748;
  text-align: right;
  flex: 1;
}

.address {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.licenses {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.licenses__title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2d3748;
  text-align: center;
}

.licenses__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.license-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;
  background: transparent;
  border-radius: 0;
  border: none;
  transition: all 0.3s ease;
}

.license-card:hover {
  transform: translateY(-2px);
}

.license-card:hover .license-info {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.license-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}

.license-info {
  flex: 1;
  background: #f7fafc;
  border-radius: 15px;
  padding: 2rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.license-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.license-info p {
  color: #4a5568;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.license-details {
  background: #edf2f7;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.license-details p {
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.license-details p:last-child {
  margin-bottom: 0;
}

.license-services {
  margin: 1rem 0;
  padding-left: 0;
}

.license-services li {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  list-style: none;
}

.license-services li::before {
  content: "✓";
  color: #48bb78;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.contact-section {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.contact-section h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2d3748;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
  background: transparent;
  border-radius: 0;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-item:hover .contact-content {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.contact-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}

.contact-content {
  flex: 1;
  background: #f7fafc;
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.contact-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.contact-content a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.contact-content a:hover {
  text-decoration: underline;
}

.contact-content p {
  color: #4a5568;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .documents {
    padding: 2rem 0;
  }
  
  .documents__title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .legal-info,
  .licenses,
  .contact-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .legal-info__details {
    grid-template-columns: 1fr;
  }
  
  .licenses__content {
    grid-template-columns: 1fr;
  }
  
  .license-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .license-icon {
    align-self: center;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .detail-item .value {
    text-align: left;
  }
}
</style>