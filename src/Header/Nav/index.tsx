'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-4 md:gap-6">
      {navItems.length > 0 ? (
        navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" className="text-sm font-medium hover:text-orange-500 transition-colors" />
        })
      ) : (
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-foreground/80">
          <Link href="/tree-service-websites" className="hover:text-orange-500 transition-colors">
            Tree Care
          </Link>
          <Link href="/roofing-websites" className="hover:text-orange-500 transition-colors">
            Roofing
          </Link>
          <Link href="/auto-business-websites" className="hover:text-orange-500 transition-colors">
            Auto Business
          </Link>
          <Link href="/posts" className="hover:text-orange-500 transition-colors">
            Case Studies
          </Link>
        </div>
      )}
      <Link href="/search" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-4 h-4" />
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold rounded-lg bg-orange-600 text-white shadow-sm hover:bg-orange-500 active:scale-95 transition-all duration-150"
      >
        Free Audit
      </Link>
    </nav>
  )
}
