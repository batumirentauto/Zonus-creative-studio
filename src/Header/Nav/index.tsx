'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  return (
    <nav className="flex items-center gap-6">
      <div className="hidden md:flex items-center gap-6 text-[13px] font-normal text-neutral-400">
        <Link href="#what-we-build" className="hover:text-white transition-colors duration-150">
          What We Build
        </Link>
        <Link href="#scope" className="hover:text-white transition-colors duration-150">
          Scope of Work
        </Link>
        <Link href="#specs" className="hover:text-white transition-colors duration-150">
          Architecture & Speed
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors duration-150">
          Direct Contact
        </Link>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center px-3.5 py-1.5 text-[12px] font-medium tracking-tight rounded-full bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all duration-150"
      >
        Book a 15-Min Scoping Call
      </Link>
    </nav>
  )
}
