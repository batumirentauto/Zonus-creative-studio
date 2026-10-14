import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { Home, ShieldCheck, ArrowRight, CheckCircle2, Award, FileText } from 'lucide-react'
import { AuditFormSection } from '@/components/studio/AuditFormSection'

export const metadata: Metadata = {
  title: 'Websites for Roofing Contractors & Storm Restoration | Zonus Creative Studio',
  description:
    'High-converting websites engineered for US Roofing Contractors. Hail damage claim funnels, manufacturer warranty badges, and instant roof replacement estimators on Payload CMS.',
}

export default function RoofingWebsitesPage() {
  const pillars = [
    {
      title: 'Storm & Hail Damage Insurance Claim Guide',
      desc: 'Homeowners are overwhelmed by insurance adjusters. Your website acts as the trusted local authority, walking them through the insurance restoration process step-by-step.',
    },
    {
      title: 'Manufacturer Certification Badges',
      desc: 'GAF Master Elite, CertainTeed SELECT ShingleMaster, and Owens Corning Platinum Preferred badges prominently featured to command 15–25% higher project margins.',
    },
    {
      title: 'Interactive Drone Roof Inspection Scheduler',
      desc: 'High-tech drone video embeds show homeowners exactly how you inspect storm-damaged vents, flashing, and hail strikes with zero guesswork.',
    },
    {
      title: '0% Financing & Monthly Payment Displays',
      desc: 'Displaying "Payments starting at $189/mo" removes sticker shock and converts homeowners who don’t have $18,000 cash sitting in checking.',
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400 font-semibold">Roofing Contractor Websites</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
            <Home className="w-4 h-4" />
            Specialized Roofing Contractor Solution
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Sign More $15,000+ Roof Replacements & Hail Damage Claims.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stop relying solely on door-knocking after a hail storm. We build the high-trust digital presence that makes affluent homeowners choose you over storm-chaser competitors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#audit-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/25 hover:from-amber-500 hover:to-orange-500 transition-all"
            >
              <span>Get Free Roofing Website Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Roofing Growth Pillar
              </div>
              <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Form */}
        <AuditFormSection />
      </div>
    </main>
  )
}
