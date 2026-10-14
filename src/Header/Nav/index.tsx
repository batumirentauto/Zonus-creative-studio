'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import Link from 'next/link'
import { useLanguage } from '@/providers/Language'
import { LanguageSwitcher } from '@/components/studio/LanguageSwitcher'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const { t } = useLanguage()

  return (
    <nav className="flex items-center gap-4 sm:gap-6">
      <div className="hidden lg:flex items-center gap-6 text-[13px] font-normal text-neutral-400">
        <Link href="#what-we-build" className="hover:text-white transition-colors duration-150">
          {t.nav.whatWeBuild}
        </Link>
        <Link href="#scope" className="hover:text-white transition-colors duration-150">
          {t.nav.scope}
        </Link>
        <Link href="#specs" className="hover:text-white transition-colors duration-150">
          {t.nav.specs}
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors duration-150">
          {t.nav.contact}
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />

        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-3.5 py-1.5 text-[12px] font-medium tracking-tight rounded-full bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all duration-150 whitespace-nowrap"
        >
          {t.nav.callCta}
        </Link>
      </div>
    </nav>
  )
}
