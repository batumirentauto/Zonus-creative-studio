'use client'

import React from 'react'
import { useLanguage, Language } from '@/providers/Language'

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-0.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono tracking-wider ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          language === 'en'
            ? 'bg-white text-black font-semibold shadow-sm'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ru')}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          language === 'ru'
            ? 'bg-white text-black font-semibold shadow-sm'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        RU
      </button>
    </div>
  )
}
