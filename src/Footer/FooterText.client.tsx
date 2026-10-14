'use client'

import React from 'react'
import { useLanguage } from '@/providers/Language'

export const FooterText: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="text-neutral-500 text-center md:text-right">
      © {new Date().getFullYear()} Zonus Creative Studio. {t.footer.rights}
    </div>
  )
}
