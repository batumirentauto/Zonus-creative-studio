'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How fast can our new contractor website go live?',
      a: 'Typically 14 to 21 business days. Because our architecture is already battle-tested for Tree Care, Roofing, and Auto businesses, we don’t waste 3 months in endless discovery meetings. We build your high-converting funnels, connect your local reviews, optimize your schema, and launch quickly.',
    },
    {
      q: 'Do I own 100% of my website and database?',
      a: 'YES, completely. Unlike proprietary website agencies that charge you monthly "rental fees" and hold your domain hostage if you leave, Zonus builds on open-source Payload CMS 3.0 and Next.js. The code lives in your own GitHub repository, and the database runs on your Railway account. You have full ownership.',
    },
    {
      q: 'Can my office dispatcher or crew foreman upload job photos easily?',
      a: 'Absolutely. Payload CMS provides an ultra-clean, intuitive admin panel that works on iPhones, iPads, and desktops. Your staff can drag and drop new crane removals, completed roof installations, or ceramic coating before/after pictures with zero technical skill required.',
    },
    {
      q: 'Will this integrate with our software (Jobber, ServiceTitan, Housecall Pro, CallRail)?',
      a: 'Yes. We seamlessly connect click-to-call phone numbers with CallRail or RingCentral for whisper tracking, and quote request forms directly into Jobber, ServiceTitan, Housecall Pro, or Zapier/webhook integrations.',
    },
    {
      q: 'Why Payload CMS 3.0 instead of WordPress?',
      a: 'WordPress sites for contractors are notorious for getting hacked, loading in 8–12 seconds, and breaking whenever a plugin updates. Payload CMS 3.0 is built directly into Next.js App Router with TypeScript. It has 0 plugin conflicts, 0.3-second mobile load speeds, and enterprise-grade security.',
    },
    {
      q: 'How does deployment on Railway work?',
      a: 'Railway is a modern cloud platform that provides high-performance hosting with a dedicated PostgreSQL database. When updates are pushed to GitHub, Railway automatically builds and deploys your website with zero downtime. If a severe storm hits and your site gets 1,000 visitors in an hour, Railway scales effortlessly without crashing.',
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-28 bg-zinc-950/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Clear Answers For Contractor Business Owners.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to know about our technology, process, and ownership.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
