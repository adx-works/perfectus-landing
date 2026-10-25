<template>
  <div class="price-page">
    <section class="price">
      <div class="container">
        <div class="price-card">
          <div class="price-card__top">
            <a href="/#services" class="price-back">← Все услуги</a>
            <div class="price-actions">
              <a href="/price.pdf" class="price-btn price-btn--outline" target="_blank" rel="noopener noreferrer">
                <FileText :size="18" />
                <span>Полный прейскурант</span>
              </a>
            </div>
          </div>

          <h1 class="price-card__title">{{ block.title }}</h1>
          <p class="price-card__descr">{{ block.description }}</p>
          <p class="price-card__meta">Прейскурант ООО «Перфектус». Действует с {{ priceValidFrom }} г. Цены указаны в рублях.</p>

          <div v-for="section in sections" :key="section.id" class="price-section">
            <h2 class="price-section__title">{{ section.number }}. {{ section.title }}</h2>
            <table class="price-table">
              <thead>
                <tr>
                  <th class="price-table__code">Код</th>
                  <th>Услуга</th>
                  <th class="price-table__price">Цена, руб.</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in section.items" :key="index">
                  <tr v-if="'subtitle' in item" class="price-table__subtitle">
                    <td colspan="3">{{ item.subtitle }}</td>
                  </tr>
                  <tr v-else>
                    <td class="price-table__code">{{ item.code }}</td>
                    <td>
                      {{ item.name }}
                      <span v-if="item.nomenclature" class="price-table__nomenclature">{{ item.nomenclature }}</span>
                    </td>
                    <td class="price-table__price">{{ formatPrice(item.price) }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <div class="price-discounts">
            <h2>Система скидок</h2>
            <ul>
              <li><strong>7% — семейная:</strong> каждый последующий член семьи лечится с 7% скидкой</li>
              <li><strong>10% — постоянный пациент:</strong> следующее посещение после полной санации полости рта</li>
            </ul>
            <p>При наличии двух скидок применяется наибольшая.</p>
          </div>

          <p class="price-card__note">
            Прейскурант составлен в соответствии с Приказом Министерства здравоохранения РФ от 13 октября 2017 г. № 804н
            «Об утверждении номенклатуры медицинских услуг». Окончательная стоимость лечения определяется врачом после осмотра.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FileText } from 'lucide-vue-next'
import { getPriceBlockById, getBlockSections, priceValidFrom } from '~/data/price'

const route = useRoute()

const foundBlock = getPriceBlockById(route.params.block as string)

if (!foundBlock) {
  throw createError({ statusCode: 404, statusMessage: 'Раздел прайса не найден', fatal: true })
}

const block = foundBlock
const sections = getBlockSections(block)

const formatPrice = (price: number) => {
  return price === 0 ? 'бесплатно' : price.toLocaleString('ru-RU')
}

useHead({
  title: `${block.title} — цены | Стоматология Перфектус в Приозерске`,
  meta: [
    {
      name: 'description',
      content: `Цены на услуги: ${block.title.toLowerCase()} в стоматологической клинике Перфектус в Приозерске. ${block.description}.`
    },
    { property: 'og:title', content: `${block.title} — цены | Стоматология Перфектус` },
    { property: 'og:description', content: block.description }
  ]
})
</script>

<style scoped>
.price {
  padding: 6.4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.price-card {
  max-width: 100rem;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 4rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.price-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
}

.price-back {
  color: #568EFF;
  font-weight: 500;
}

.price-back:hover {
  text-decoration: underline;
}

.price-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.price-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.1rem 1.9rem;
  border-radius: 10px;
  border: 2px solid #568EFF;
  background: #568EFF;
  color: white;
  font: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.price-btn:hover {
  background: #3f7af0;
  border-color: #3f7af0;
}

.price-btn--outline,
.price-btn--outline:link,
.price-btn--outline:visited {
  background: transparent;
  color: #568EFF;
}

.price-btn--outline:hover {
  background: #edf2ff;
}

.price-card__title {
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #2d3748;
}

.price-card__descr {
  color: #4a5568;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}

.price-card__meta {
  color: #718096;
  font-size: 1.5rem;
  margin-bottom: 3.2rem;
}

.price-section {
  margin-bottom: 4rem;
}

.price-section__title {
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  color: #2d3748;
  padding-left: 1.6rem;
  border-left: 4px solid #568EFF;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
}

.price-table th {
  text-align: left;
  font-weight: 600;
  color: #4a5568;
  background: #f7fafc;
  padding: 1.2rem 1.6rem;
  border-bottom: 2px solid #e2e8f0;
}

.price-table td {
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid #e2e8f0;
  color: #2d3748;
  line-height: 1.5;
  vertical-align: top;
}

.price-table tbody tr:hover td {
  background: #f7fafc;
}

.price-table__code {
  width: 70px;
  color: #718096;
  white-space: nowrap;
}

.price-table__price {
  width: 130px;
  text-align: right !important;
  font-weight: 600;
  white-space: nowrap;
}

.price-table__nomenclature {
  display: block;
  font-size: 1.3rem;
  color: #a0aec0;
}

.price-table__subtitle td {
  font-weight: 600;
  color: #4a5568;
  background: #edf2f7;
}

.price-discounts {
  background: #f7fafc;
  border-radius: 15px;
  padding: 3.2rem;
  border-left: 4px solid #568EFF;
  margin-bottom: 3.2rem;
}

.price-discounts h2 {
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  color: #2d3748;
}

.price-discounts ul {
  padding-left: 0;
  margin-bottom: 1.6rem;
}

.price-discounts li {
  list-style: none;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.price-discounts p {
  color: #4a5568;
}

.price-card__note {
  color: #718096;
  font-size: 1.4rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .price {
    padding: 3.2rem 0;
  }

  .price-card {
    padding: 2.4rem 1.6rem;
  }

  .price-card__title {
    font-size: 2.6rem;
  }

  .price-table thead {
    display: none;
  }

  .price-table tr {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.4rem 1.6rem;
    padding: 1.2rem 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .price-table td {
    padding: 0;
    border-bottom: none;
  }

  .price-table__code {
    grid-column: 1 / -1;
    width: auto;
    font-size: 1.4rem;
  }

  .price-table__price {
    width: auto;
  }

  .price-table__subtitle td {
    grid-column: 1 / -1;
    padding: 0.8rem;
  }
}
</style>

<style>
@media print {
  .header,
  .footer,
  .accessibility-panel,
  .price-card__top {
    display: none !important;
  }

  .price {
    padding: 0;
    background: none;
    min-height: 0;
  }

  .price-card {
    box-shadow: none;
    border: none;
    padding: 0;
  }

  .price-table tr {
    break-inside: avoid;
  }

  .price-section__title {
    break-after: avoid;
  }
}
</style>
