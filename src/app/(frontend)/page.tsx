import type { Metadata } from 'next'
import React from 'react'
import { AppleZonusLanding } from '@/components/studio/AppleZonusLanding'

export const metadata: Metadata = {
  title: 'Zonus Creative Studio — Web Infrastructure for High-Ticket Contractors (zonus.co)',
  description:
    'We design and deploy high-performance websites for roofing, tree care, and specialty trade businesses across the United States. Fast loading, clear architecture, zero agency fluff.',
  openGraph: {
    title: 'Zonus Creative Studio — High-Ticket Trade Infrastructure',
    description:
      'Engineered websites for US roofing, tree care, and specialty contractors. Sub-second load speed, direct CRM routing, and 100% owned assets.',
    url: 'https://zonus.co',
    siteName: 'Zonus Creative Studio',
  },
}

export default function HomePage() {
  return <AppleZonusLanding />
}
