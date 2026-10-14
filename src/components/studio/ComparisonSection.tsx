'use client'

import React from 'react'
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Flame } from 'lucide-react'

export const ComparisonSection: React.FC = () => {
  const points = [
    {
      feature: 'Page Speed & Mobile Performance',
      bad: 'Slow 8–12 second load time on WordPress with 40+ plugins. Homeowners bounce before the page loads.',
      good: 'Blazing 0.3s load speed on Next.js & Turbopack. 99/100 Google PageSpeed score. Instantly loads on mobile 5G/4G.',
    },
    {
      feature: 'Click-to-Call Conversion',
      bad: 'Phone number buried in small text or hidden behind a 3-tap mobile hamburger menu.',
      good: 'Floating 1-tap call bar sticky on mobile screens with 24/7 emergency dispatch indicators.',
    },
    {
      feature: 'CMS & Website Ownership',
      bad: 'Locked into proprietary platforms (Wix, Squarespace) or fragile WordPress themes requiring constant maintenance.',
      good: 'Built on Payload CMS 3.0 (modern TypeScript headless CMS). You own 100% of the code & database. Zero hostage fees.',
    },
    {
      feature: 'Job Site Evidence & Proof',
      bad: 'Generic stock photos of smiling models in pristine safety vests that homeowners immediately distrust.',
      good: 'Interactive Before/After job galleries, crane setups, drone shingle scans, and real Google reviews streaming live.',
    },
    {
      feature: 'Quote & Estimate Funnels',
      bad: 'Clunky 15-field contact forms that ask for fax numbers and make homeowners abandon the quote.',
      good: '2-step streamlined quote funnel with optional photo upload so your office gets pre-qualified job details instantly.',
    },
    {
      feature: 'Deployment & Infrastructure',
      bad: '$10 shared GoDaddy/Bluehost server that crashes when severe storm traffic spikes.',
      good: 'Automated Railway cloud deployment with dedicated PostgreSQL database and global edge CDN.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-950/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
            Head-to-Head Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Why Generic Agencies Leave Contractors Empty-Handed.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Most digital agencies build pretty websites for coffee shops and tech startups. They don’t know what makes a homeowner hire an arborist, roofer, or auto shop.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Bad Way */}
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-950/10 backdrop-blur space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-red-500/20">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-200">The Generic Agency Way</h3>
                <p className="text-xs text-red-400/80">Bloated, slow, and built on outdated standards</p>
              </div>
            </div>

            <div className="space-y-6">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-200 block mb-1">{pt.feature}</strong>
                    <span className="text-zinc-400 text-xs leading-relaxed">{pt.bad}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Zonus Way */}
          <div className="p-8 rounded-3xl border border-orange-500/30 bg-gradient-to-b from-orange-950/20 to-zinc-900/60 backdrop-blur space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 pb-4 border-b border-orange-500/30">
              <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 shadow-md shadow-orange-500/20">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  The Zonus Standard
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30">
                    PAYLOAD + NEXT.JS
                  </span>
                </h3>
                <p className="text-xs text-orange-300/80">Engineered for immediate calls and zero technical headaches</p>
              </div>
            </div>

            <div className="space-y-6">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">{pt.feature}</strong>
                    <span className="text-zinc-300 text-xs leading-relaxed">{pt.good}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
