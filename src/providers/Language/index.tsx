'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, TranslationType } from '@/components/studio/translations'

export type Language = 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const defaultContext: LanguageContextType = {
  language: 'ru',
  setLanguage: () => null,
  t: translations.ru,
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('zonus_language') as Language | null
    if (saved && (saved === 'en' || saved === 'ru')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('zonus_language', newLang)
    }
  }

  const currentTranslation = translations[language] || translations.ru

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
