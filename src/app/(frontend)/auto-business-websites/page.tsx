import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Car, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react'
import { AuditFormSection } from '@/components/studio/AuditFormSection'

export const metadata: Metadata = {
  title: 'Websites for Auto Detailing, PPF & Body Shops | Zonus Creative Studio',
  description:
    'High-converting websites for auto detailing, paint protection film (PPF), ceramic coatings, and collision repair shops across the USA. Built on Payload CMS & Railway.',
}

export default function AutoBusinessPage() {
  const points = [
    {
      title: 'Tiered Ceramic Coating & PPF Packages',
      desc: 'Display clear, irresistible comparison charts (2-Year, 5-Year, Lifetime) with warranty specs, hydrophobicity ratings, and hardness guarantees that justify premium $1,500+ invoices.',
    },
    {
      title: '50/50 Swirl-Mark Paint Correction Sliders',
      desc: 'Car owners care about visual perfection. Interactive swipe sliders demonstrate your multi-stage rotary buffing results with zero lag on mobile.',
    },
    {
      title: 'Instant Collision Photo Upload Funnel',
      desc: 'Drivers in minor accidents can snap 3 photos of their bumper or fender on their phone and receive a preliminary repair quote within hours.',
    },
    {
      title: 'Online Scheduling & 20% Deposit Collection',
      desc: 'Lock in appointments and eliminate no-shows by connecting directly to Stripe, Square, or your shop management software.',
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400 font-semibold">Auto Business Websites</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold">
            <Car className="w-4 h-4" />
            Specialized Auto Business Solution
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Pack Your Bays With $1,500+ Ceramic Coatings & PPF Projects.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stop giving discount quotes over Instagram DMs. We build luxury-feel booking experiences that attract high-end vehicle owners ready to pay for perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#audit-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-indigo-500 transition-all"
            >
              <span>Get Free Auto Shop Website Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {points.map((pt, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Auto Shop Feature
              </div>
              <h3 className="text-xl font-bold text-foreground">{pt.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Form */}
        <AuditFormSection />
      </div>
    </main>
  )
}
