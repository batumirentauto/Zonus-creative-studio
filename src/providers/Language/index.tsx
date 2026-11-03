'use client'

import React, { createContext, useContext, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { translations, TranslationType } from '@/components/studio/translations'

export type Language = 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => null,
  t: translations.en,
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const isRu = pathname === '/ru' || pathname?.startsWith('/ru/')
  const language: Language = isRu ? 'ru' : 'en'

  const value = useMemo(
    () => ({
      language,
      setLanguage: () => null,
      t: translations[language] || translations.en,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
