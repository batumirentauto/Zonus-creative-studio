import type { Metadata } from 'next'
import React from 'react'
import { AppleZonusLanding } from '@/components/studio/AppleZonusLanding'

export const metadata: Metadata = {
  title: 'Zonus Creative Studio — Веб-инфраструктура для подрядчиков и сервисных компаний (zonus.co)',
  description:
    'Создаем и запускаем конверсионные сайты для кровельных компаний, арбористов и сервисных подрядчиков в США. Без предоплаты, запуск за 48 часов, до 3 раундов правок.',
  openGraph: {
    title: 'Zonus Creative Studio — Веб-инфраструктура для бизнеса в США',
    description:
      'Сайты под ключ для строителей и сервисных компаний в США. Мгновенная загрузка, интеграция с CRM, оплата только после утверждения готового сайта.',
    url: 'https://zonus.co/ru',
    siteName: 'Zonus Creative Studio',
  },
}

export default function RuHomePage() {
  return <AppleZonusLanding forcedLanguage="ru" />
}
