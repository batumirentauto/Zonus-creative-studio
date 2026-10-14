import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Trees, PhoneCall, ShieldCheck, Zap, ArrowRight, CheckCircle2, AlertTriangle, MapPin } from 'lucide-react'
import { AuditFormSection } from '@/components/studio/AuditFormSection'

export const metadata: Metadata = {
  title: 'Websites for Tree Removal & Tree Care Contractors | Zonus Creative Studio',
  description:
    'High-converting websites engineered specifically for US Tree Service companies. 24/7 storm emergency call funnels, ISA arborist badges, and local Google Map dominance.',
}

export default function TreeServicePage() {
  const features = [
    {
      title: '24/7 Emergency Storm Dispatch Bar',
      desc: 'When high winds knock a 60-foot oak onto a house at 3 AM, homeowners want an instant phone connection. Our floating emergency call bar converts panicking homeowners into immediate dispatched jobs.',
    },
    {
      title: 'ISA Certified & Fully Insured Trust Architecture',
      desc: 'Homeowners are terrified of rogue tree cutters dropping branches on their roof. We spotlight your $2M liability insurance, ISA certification, worker’s comp, and specialized equipment.',
    },
    {
      title: 'Dangerous Tree & Crane Setup Galleries',
      desc: 'Showcase complex crane removals, tight-space backyard rigging, and commercial land clearing with crisp, fast-loading mobile photo sliders.',
    },
    {
      title: 'Suburb Silo Landing Pages',
      desc: 'Dominate local Google Map pack search queries like "emergency tree removal in [City]" and "stump grinding near me" across 10+ target service cities.',
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400 font-semibold">Tree Care & Removal Websites</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
            <Trees className="w-4 h-4" />
            Specialized Tree Contractor Solution
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Turn Severe Storms Into Dispatched Crews & High-Ticket Crane Jobs.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Most tree service websites look like they were built in 2005. We build modern, lightning-fast lead machines that make your tree business the undeniable #1 choice in your county.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#audit-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 hover:from-emerald-500 hover:to-teal-500 transition-all"
            >
              <span>Get Free Tree Website Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((feat, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Key Conversion Feature
              </div>
              <h3 className="text-xl font-bold text-foreground">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Form */}
        <AuditFormSection />
      </div>
    </main>
  )
}
