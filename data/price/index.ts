import type { PriceBlock, PriceSection } from '~/types/price'
import { priceSections } from './sections'

export { priceSections }

export const priceValidFrom = '01.10.2026'

export const priceBlocks: PriceBlock[] = [
  {
    id: 'ortopediya-i-protezirovanie',
    title: 'Ортопедия и протезирование',
    description: 'Замещение отсутствующих зубов, восстановление красоты зубного ряда',
    sectionIds: ['1', '2', '12', '14', '15', '16', '17', '18', '19', '20', '21', '22']
  },
  {
    id: 'terapevticheskoe-lechenie',
    title: 'Терапевтическое лечение зубов',
    description: 'Лечение кариеса, пульпита, периодонтита',
    sectionIds: ['1', '2', '3', '4', '6', '7', '8', '9']
  },
  {
    id: 'parodontologiya',
    title: 'Пародонтология',
    description: 'Устранение подвижности зубов лечением десен, шинированием, протезированием',
    sectionIds: ['13', '23']
  },
  {
    id: 'esteticheskaya-stomatologiya',
    title: 'Эстетическая стоматология',
    description: 'Профессиональное и безопасное отбеливание зубов',
    sectionIds: ['7', '16']
  },
  {
    id: 'professionalnaya-gigiena',
    title: 'Профессиональная гигиена',
    description: 'Удаление зубных камней и налета ультразвуком, airflow',
    sectionIds: ['6']
  },
  {
    id: 'hirurgicheskaya-stomatologiya',
    title: 'Хирургическая стоматология',
    description: 'Удаление зубов, разрезы, закрытый/открытый кюретаж',
    sectionIds: ['1', '2', '3', '4', '23']
  }
]

export const getPriceBlockById = (id: string): PriceBlock | undefined => {
  return priceBlocks.find(block => block.id === id)
}

export const getBlockSections = (block: PriceBlock): PriceSection[] => {
  return block.sectionIds
    .map(id => priceSections.find(section => section.id === id))
    .filter((section): section is PriceSection => Boolean(section))
}
