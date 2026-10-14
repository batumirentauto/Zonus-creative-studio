import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border/40 bg-zinc-950 text-zinc-300">
      <div className="container pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          <div className="md:col-span-1 space-y-4">
            <Link className="inline-block" href="/">
              <Logo />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We design and build high-converting websites that generate exclusive homeowner calls for Tree Removal, Roofing, and Auto businesses across the USA.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting new contractor projects for Q4/2026
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contractor Niches
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/tree-service-websites" className="hover:text-orange-400 transition-colors">
                  Tree Care & Emergency Removal
                </Link>
              </li>
              <li>
                <Link href="/roofing-websites" className="hover:text-orange-400 transition-colors">
                  Roofing & Storm Restoration
                </Link>
              </li>
              <li>
                <Link href="/auto-business-websites" className="hover:text-orange-400 transition-colors">
                  Auto Detailing, Tint & Repair
                </Link>
              </li>
              <li>
                <Link href="/home-services-websites" className="hover:text-orange-400 transition-colors">
                  HVAC, Plumbing & Home Trades
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Technology & Standard
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✓</span> Payload CMS 3.0 (Self-Hosted)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✓</span> Next.js App Router & Tailwind
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✓</span> Railway Production Cloud + Postgres
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✓</span> 98+ Mobile PageSpeed Guaranteed
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Schedule A Call
            </h4>
            <p className="text-sm text-zinc-400 mb-4">
              Get an honest 10-minute video audit of your current contractor site and local map rankings.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-sm"
            >
              Request Free Video Audit
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Zonus Creative Studio. All rights reserved. Built for US Trade Professionals.
          </div>
          <div className="flex items-center gap-6">
            <ThemeSelector />
            {navItems.map(({ link }, i) => (
              <CMSLink className="text-zinc-400 hover:text-white" key={i} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
