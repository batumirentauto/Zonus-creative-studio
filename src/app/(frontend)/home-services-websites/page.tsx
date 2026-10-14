import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { AuditFormSection } from '@/components/studio/AuditFormSection'

export const metadata: Metadata = {
  title: 'Websites for HVAC, Plumbing & Home Service Contractors | Zonus Creative Studio',
  description:
    'High-converting websites for US HVAC, plumbing, electrical, and home trade contractors. Built for mobile-first speed, ServiceTitan syncing, and Google Local Service Ads.',
}

export default function HomeServicesPage() {
  const points = [
    {
      title: 'Click-to-Call Emergency Dispatch',
      desc: 'When AC fails in a 100°F heatwave or a sewer line backs up, homeowners need help right away. Our sticky call bar drives immediate emergency conversions.',
    },
    {
      title: 'ServiceTitan & Jobber Schedule Syncing',
      desc: 'Direct integration with your contractor dispatch software so online appointments show up right on your technician schedule board.',
    },
    {
      title: 'Seasonal Tune-Up & Maintenance Membership Funnels',
      desc: 'Build recurring monthly maintenance revenue with easy online membership signups for seasonal furnace and AC checkups.',
    },
    {
      title: 'Local Google LSA & Map Pack Optimization',
      desc: 'Built with local contractor schema and verified customer reviews that help you rank #1 on Google Local Service Ads and Maps.',
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400 font-semibold">HVAC & Home Services Websites</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold">
            <Wrench className="w-4 h-4" />
            Specialized Home Trades Solution
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Turn Emergency Plumbing & HVAC Searches Into Dispatched Vans.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            When homeowners have an emergency, they call the first trustworthy contractor they see on mobile. We make sure that contractor is you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#audit-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-600/25 hover:from-orange-500 hover:to-amber-500 transition-all"
            >
              <span>Get Free Home Service Website Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {points.map((pt, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Home Trade Feature
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
