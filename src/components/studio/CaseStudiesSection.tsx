'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, TrendingUp, Check, Star, MapPin } from 'lucide-react'

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      client: 'Apex Tree Experts',
      location: 'Atlanta, GA',
      niche: 'Tree Care & Emergency Removal',
      headline: '+312% Inbound Emergency Storm Calls in 60 Days',
      metric: '+$52,000',
      metricLabel: 'First Month Added Job Value',
      summary:
        'Replaced a slow 9-second WordPress site with a 0.3s Zonus mobile machine with emergency storm dispatch and ISA certified arborist credentials.',
      highlights: [
        '#1 Google Map Pack ranking in 4 target suburbs',
        'Direct 1-tap call button generated 46 emergency calls after Spring storms',
        'Payload CMS admin allows crew foreman to upload crane job photos in 30 seconds',
      ],
      quote:
        '“Our phones literally didn’t stop ringing during the last wind storm. The site paid for itself in our first 4 days of launching.”',
      author: 'Marcus Vance, Owner',
    },
    {
      client: 'Summit Ridge Roofing',
      location: 'Dallas-Fort Worth, TX',
      niche: 'Residential & Commercial Roofing',
      headline: '$480,000 in Hail Damage Roof Claims Signed in 4 Months',
      metric: '38 Roofs',
      metricLabel: 'Signed Through Web Funnel',
      summary:
        'Built an interactive hail damage insurance claim helper and instant roof replacement estimator with CertainTeed 50-year warranty badges.',
      highlights: [
        'Conversion rate jumped from 1.4% to 5.8% on mobile',
        'Automated 5-star Google review feed showing 140+ verified local homeowners',
        'Zero lead fees — all homeowner calls go straight to the office coordinator',
      ],
      quote:
        '“Homeowners told us directly: your site made you look 10x more legitimate and trustworthy than the other 3 roofers who knocked on their door.”',
      author: 'David Kowalski, Managing Partner',
    },
    {
      client: 'Precision Auto Spa',
      location: 'Scottsdale, AZ',
      niche: 'Ceramic Coating, PPF & Detailing',
      headline: 'Average Ticket Value Jumped From $650 to $1,450',
      metric: '3 Weeks',
      metricLabel: 'Booked In Advance Consistently',
      summary:
        'Engineered high-gloss package selectors (Bronze, Silver, Gold Ceramic) with paint correction sliders and deposit capture.',
      highlights: [
        'Eliminated phone tag by pre-educating luxury car owners on ceramic longevity',
        'Integrated with Square / Stripe for seamless 20% scheduling deposits',
        'Blazing mobile performance showcases 4K paint depth without lag',
      ],
      quote:
        '“Clients now pick the $1,800 coating package before they even walk through our shop doors. It changed our entire business model.”',
      author: 'Elena Rostova, Studio Founder',
    },
  ]

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
            Proven Contractor Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Real Inbound Calls. Real Booked Revenue.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We don’t measure vanity metrics like "impressions" or "clicks". We measure trucks dispatched, roofs signed, and revenue deposited into your business account.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-3xl border border-border bg-card/80 hover:border-orange-500/40 transition-all duration-200 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="font-semibold px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {cs.niche}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {cs.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cs.client}
                </h3>
                <p className="text-base font-semibold text-orange-400 mb-4 leading-snug">
                  {cs.headline}
                </p>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-6">
                  <span className="text-3xl font-black text-white block">
                    {cs.metric}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {cs.metricLabel}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                  {cs.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {cs.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <blockquote className="text-xs italic text-muted-foreground mb-3">
                  {cs.quote}
                </blockquote>
                <div className="text-xs font-semibold text-foreground">
                  {cs.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
