'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Layers,
  Lock,
  PhoneCall,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

export const AppleZonusLanding: React.FC = () => {
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    trade: 'roofing',
    serviceArea: '',
    contact: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 700)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans antialiased selection:bg-white selection:text-black">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative pt-24 pb-28 md:pt-36 md:pb-40 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle architectural ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-white/[0.05] to-transparent blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="space-y-8 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-neutral-400 font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
              <span>High-Ticket Trade Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              Web infrastructure engineered for high-ticket contractors.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed tracking-[-0.01em] max-w-2xl">
              We design and deploy high-performance websites for roofing, tree care, and specialty trade businesses across the United States. Fast loading, clear architecture, zero agency fluff.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 active:scale-[0.99] transition-all text-sm font-semibold tracking-tight shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#what-we-build"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.14] bg-white/[0.03] hover:bg-white/[0.07] text-neutral-200 transition-all text-sm font-medium tracking-tight"
              >
                <span>Review Technical Specs</span>
              </Link>
            </div>

            {/* Proof Points Strip */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Speed Benchmark
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Sub-second load speed (under 1s)
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Dispatcher Sync
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Direct CRM & CallRail routing
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Capital Ownership
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  100% owned assets (no lock-in)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE PROBLEM & APPROACH (Factual, no-fluff comparison)
          ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
              Market Reality
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              Most contractor websites look like generic templates from 2012. Or bloated WordPress sites that take 7 seconds to load.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Agency Pitch */}
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 block">
                  Standard Agency Model
                </span>
                <h3 className="text-xl font-medium text-neutral-300">
                  The Illusion of Complexity
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  Typical web marketing agencies sell vague promises, install 40+ unvetted WordPress plugins that create security vulnerabilities, and charge recurring monthly "maintenance fees" for simply keeping the server on. When severe weather hits your market, their shared servers crash.
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/[0.08] text-xs text-neutral-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-neutral-600">—</span> 6–10 second mobile load times on cellular 5G
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neutral-600">—</span> Buried phone numbers behind hamburger menus
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neutral-600">—</span> Proprietary platform lock-in (Wix / Squarespace)
                </li>
              </ul>
            </div>

            {/* The Zonus Model */}
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.18] bg-[#16161C] flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white font-medium">
                    The Zonus Standard
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/[0.15] bg-white/[0.06] text-neutral-300">
                    NEXT.JS + PAYLOAD
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white">
                  Direct Engineering Build
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  We treat your website as critical revenue infrastructure. You receive a clean, lightweight, bespoke digital asset built on modern TypeScript and edge networks. It renders instantly on any mobile device, inspires immediate credibility with high-net-worth homeowners, and directs inbound calls straight to your dispatcher without friction.
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/[0.08] text-xs text-neutral-200 font-mono">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" /> Under 1-second Core Web Vitals on mobile
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" /> Persistent 1-tap call routing to your office
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" /> 100% asset & codebase ownership transferred
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT WE BUILD (Three Specialized Modules)
          ========================================================================= */}
      <section id="what-we-build" className="py-24 md:py-32 border-b border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              Engineered specifically for high-ticket trades.
            </h2>
            <p className="text-base text-neutral-400 font-normal">
              Three functional pillars designed for businesses where a single closed client represents $5,000 to $50,000 in top-line revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  High-Ticket Conversion Architecture
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Tailored for affluent homeowners hiring for $15,000+ roof replacements, $6,000+ hazardous crane tree removals, or foundation restorations. Includes structured Service Area directory pages, upfront estimate calculators, and prominent licensed & insured trust signals.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                01 / CONVERSION
              </div>
            </div>

            {/* Module 2 */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Speed & Mobile Execution
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Over 90% of home service emergencies occur on smartphones during hail storms, fallen trees, or sudden leaks. We eliminate render-blocking scripts, providing an interface that loads instantaneously on weak cellular signals and allows homeowners to snap and upload damage photos in seconds.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                02 / PERFORMANCE
              </div>
            </div>

            {/* Module 3 */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white">
                  <Workflow className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Direct Operations Integration
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Your website directly feeds your existing operational dispatch. We wire incoming calls and quote forms straight into Jobber, ServiceTitan, Housecall Pro, or CallRail with zero manual re-entry. Leads land immediately on the estimator’s tablet or office dispatch screen.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                03 / INTEGRATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE DELIVERABLE (Scope of Work Checklist)
          ========================================================================= */}
      <section id="scope" className="py-24 md:py-32 border-b border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
                The Deliverable
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white leading-tight">
                What you actually receive. Transparent and complete.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                No nebulous retainer invoices. We deliver a finished, battle-tested digital property with all documentation and source code handed over to your company.
              </p>
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 underline underline-offset-4"
                >
                  <span>Request Full Project Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#111115] p-6 sm:p-8 space-y-4">
              {[
                'Custom UI/UX architecture designed specifically for your local market and primary service categories',
                'Mobile-first responsive build compiled with Next.js App Router and Tailwind CSS',
                'Service Area directory pages configured for targeted city and county search dominance',
                'High-intent estimate request funnels with direct photo/file upload for storm or roof damage',
                'Full telephony & call-tracking setup (CallRail whisper messages, dynamic number insertion)',
                'Direct CRM dispatch sync (Jobber, ServiceTitan, Housecall Pro, or webhook automation)',
                'Google Analytics 4, Tag Manager, and Conversion API event tracking configured',
                'DNS records management, SSL certification, and global edge CDN deployment on Railway / Vercel',
                '100% legal code and database ownership transferred with full administrative credentials',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-neutral-300 py-2.5 border-b border-white/[0.04] last:border-0">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PROCESS & TIMELINE (4 Clear Stages)
          ========================================================================= */}
      <section id="specs" className="py-24 md:py-32 border-b border-white/[0.08]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
              Execution Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              20-day structured deployment. No endless revisions.
            </h2>
            <p className="text-base text-neutral-400 font-normal">
              A linear 4-stage process with clear sign-offs so your internal team spends less than 3 total hours on calls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: 'Stage 01',
                days: 'Day 1–3',
                title: 'Audit & Discovery',
                desc: 'Deep teardown of your current traffic, highest-margin service categories, service territories, and primary local competitors.',
              },
              {
                stage: 'Stage 02',
                days: 'Day 4–8',
                title: 'Architecture & Copy',
                desc: 'Structuring the user conversion paths and writing direct, high-credibility copy aimed at US homeowners with substantial home equity.',
              },
              {
                stage: 'Stage 03',
                days: 'Day 9–16',
                title: 'Interface & Build',
                desc: 'Pixel-perfect responsive coding, edge speed benchmarking, CRM webhook wiring, and mobile click-to-call verification.',
              },
              {
                stage: 'Stage 04',
                days: 'Day 17–20',
                title: 'QA & Live Deployment',
                desc: 'Stress testing forms, Google Tag Manager event verification, DNS cutover, and full administrative credential transfer.',
              },
            ].map((st, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-medium">{st.stage}</span>
                    <span className="text-neutral-500">{st.days}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.04] text-[10px] font-mono text-neutral-500 uppercase">
                  Verified Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & FOOTER (Direct Inquiries)
          ========================================================================= */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
                Direct Inquiry
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
                Direct communication. No account managers.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Tell us what trade you operate, your primary service area, and your current bottleneck. We review your request and reply within 24 hours with an honest scope assessment.
              </p>

              <div className="pt-6 border-t border-white/[0.08] space-y-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">Direct Correspondence</span>
                  <a href="mailto:hello@zonus.co" className="text-white hover:underline text-sm font-sans">
                    hello@zonus.co
                  </a>
                </div>
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">Active Timezones</span>
                  <span className="text-neutral-300">EST · CST · PST (Continental United States)</span>
                </div>
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">Studio Domain</span>
                  <span className="text-neutral-300">zonus.co</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.12] bg-[#111115] p-8 sm:p-10 shadow-2xl relative">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-white/[0.2] bg-white/[0.05] text-white flex items-center justify-center mx-auto mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name || 'Contractor'}</strong>. We have logged your details for <strong className="text-white">{formData.businessName || 'your business'}</strong>. A senior engineer will examine your territory and reply within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-full border border-white/[0.1] text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Company & Current Website *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Miller Roofing LLC (or none)"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Primary Trade / Niche *
                      </label>
                      <select
                        value={formData.trade}
                        onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                      >
                        <option value="roofing">Roofing & Storm Restoration</option>
                        <option value="tree-service">Tree Care & Emergency Removal</option>
                        <option value="concrete">Concrete, Foundations & Flatwork</option>
                        <option value="landscaping">High-End Landscaping & Hardscapes</option>
                        <option value="restoration">Water & Fire Disaster Restoration</option>
                        <option value="other">Other High-Ticket Specialty Trade</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Target Service Area / Counties *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Greater Dallas-Fort Worth, TX"
                        value={formData.serviceArea}
                        onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Direct Phone or Email *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="john@millerroofing.com or (214) 555-0199"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 active:scale-[0.99] transition-all text-sm font-semibold tracking-tight disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry for Scope Assessment'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-neutral-500 text-center">
                    Strict confidentiality guaranteed. We never sell contractor information or run spam sequences.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
