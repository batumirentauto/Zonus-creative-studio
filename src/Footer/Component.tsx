import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { FooterText } from './FooterText.client'

export async function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#0A0A0C] text-neutral-400">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-500">zonus.co</span>
          <span className="text-neutral-600">/</span>
          <a href="tel:+13022130266" className="text-neutral-400 hover:text-white transition-colors">
            +1 (302) 213-0266
          </a>
        </div>
        <FooterText />
      </div>
    </footer>
  )
}
