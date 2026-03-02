import type { Specialist } from '~/types/specialist'

export const tsarevaYuliaAnatolyevna: Specialist = {
  id: 'tsareva-yulia-anatolyevna',
  fullName: 'Царева Юлия Анатольевна',
  photo: '/images/specialists/tsareva.png',
  profile: 'Врач-стоматолог общей практики',
  experience: 25,
  education: [
    {
      id: '2-1',
      type: 'Основное образование',
      institution: '2001 г. — Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова',
      date: '2001',
      certificateUrl: '#'
    }
  ]
}