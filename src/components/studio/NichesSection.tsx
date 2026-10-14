'use client'

import React from 'react'
import Link from 'next/link'
import { Trees, Home, Car, Wrench, ArrowUpRight, Phone, Clock, ShieldCheck, Flame } from 'lucide-react'

export const NichesSection: React.FC = () => {
  const niches = [
    {
      id: 'tree-service',
      title: 'Tree Removal & Care Specialists',
      slug: '/tree-service-websites',
      badge: 'High Emergency Volume',
      icon: Trees,
      accentColor: 'from-emerald-500/20 to-emerald-950/20 border-emerald-500/30 text-emerald-400',
      description:
        'When a storm hits at 2 AM, homeowners need your crew immediately. We build instant 1-tap call funnels, crane job showcases, and storm damage claim generators.',
      features: [
        '24/7 Emergency Storm Dispatch Button',
        'ISA Certified Arborist & Fully Insured Trust Badges',
        'Dangerous Tree & Stump Grinding Quote Flow',
        'Geo-targeted Landing Pages for Every Local Suburb',
      ],
      avgTicket: '$1,800 – $6,500/job',
    },
    {
      id: 'roofing',
      title: 'Roofing & Storm Restoration',
      slug: '/roofing-websites',
      badge: 'High Ticket Value',
      icon: Home,
      accentColor: 'from-amber-500/20 to-amber-950/20 border-amber-500/30 text-amber-400',
      description:
        'Homeowners replacing a $15,000+ roof won\'t call a contractor with an amateur website. We showcase your manufacturer warranties, drone inspections, and insurance claim expertise.',
      features: [
        'Instant Roof Replacement Cost Calculator',
        'Storm & Hail Damage Insurance Claim Guide',
        'GAF / CertainTeed / Owens Corning Credential Badges',
        'Interactive Before & After Shingle Transformations',
      ],
      avgTicket: '$9,000 – $24,000/job',
    },
    {
      id: 'auto-business',
      title: 'Auto Detailing, PPF & Body Shops',
      slug: '/auto-business-websites',
      badge: 'High Customer Repeat',
      icon: Car,
      accentColor: 'from-blue-500/20 to-blue-950/20 border-blue-500/30 text-blue-400',
      description:
        'Car enthusiasts and everyday drivers want to see flawless gloss and clear pricing. We build sleek booking funnels for ceramic coatings, tinting, and collision estimates.',
      features: [
        'Tiered Package Comparison (Bronze / Gold / Platinum)',
        'Instant Photo Upload for Collision Estimates',
        'Before & After Paint Correction High-Res Sliders',
        'Integrated Booking & Deposit Collection',
      ],
      avgTicket: '$600 – $3,500/package',
    },
    {
      id: 'home-services',
      title: 'HVAC, Plumbing & Home Trades',
      slug: '/home-services-websites',
      badge: 'Essential Daily Services',
      icon: Wrench,
      accentColor: 'from-orange-500/20 to-orange-950/20 border-orange-500/30 text-orange-400',
      description:
        'No heat in the winter or burst pipes in the summer? Homeowners choose the first trustworthy contractor on their phone. We turn local Google searches into dispatched jobs.',
      features: [
        'Click-to-Call Floating Mobile Bar',
        'Financing & 0% APR Monthly Payment Calculator',
        'Real-time Google Reviews & BBB A+ Badges',
        'ServiceTitan & Jobber Schedule Syncing',
      ],
      avgTicket: '$1,200 – $8,000/service',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-950/60 border-y border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
            Specialized Contractor Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Built For The Demands Of American Trade Businesses.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Generic website templates fail because they don’t understand the urgency of storm damage, the trust required for a roof replacement, or the pride in a ceramic coating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche) => {
            const Icon = niche.icon
            return (
              <div
                key={niche.id}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900/90 hover:border-zinc-700 transition-all duration-200 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border bg-gradient-to-br ${niche.accentColor}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {niche.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                    {niche.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {niche.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {niche.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block">
                      Typical Job Value
                    </span>
                    <span className="text-sm font-bold text-orange-400">
                      {niche.avgTicket}
                    </span>
                  </div>

                  <Link
                    href={niche.slug}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-zinc-800 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Explore Niche Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
