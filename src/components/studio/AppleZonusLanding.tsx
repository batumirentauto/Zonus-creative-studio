'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  Smartphone,
  Workflow,
} from 'lucide-react'
import { useLanguage } from '@/providers/Language'
import { LanguageSwitcher } from './LanguageSwitcher'

export const AppleZonusLanding: React.FC = () => {
  const { t, language } = useLanguage()

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
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
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 border-b border-white/[0.08] overflow-hidden">
        {/* Architectural ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-white/[0.05] to-transparent blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="space-y-6 sm:space-y-7 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-neutral-400 font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              {t.hero.title}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed tracking-[-0.01em] max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 active:scale-[0.99] transition-all text-sm font-semibold tracking-tight shadow-sm"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#what-we-build"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.14] bg-white/[0.03] hover:bg-white/[0.07] text-neutral-200 transition-all text-sm font-medium tracking-tight"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Proof Points Strip */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  {t.hero.proofSpeedLabel}
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t.hero.proofSpeedVal}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  {t.hero.proofDispatcherLabel}
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {t.hero.proofDispatcherVal}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                  {t.hero.proofOwnershipLabel}
                </span>
                <p className="text-sm font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  {t.hero.proofOwnershipVal}
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
              {t.market.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              {t.market.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Agency Pitch */}
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 block">
                  {t.market.agencyModel}
                </span>
                <h3 className="text-xl font-medium text-neutral-300">
                  {t.market.agencyTitle}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {t.market.agencyDesc}
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/[0.08] text-xs text-neutral-400 font-mono">
                {t.market.agencyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-neutral-600">—</span> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Zonus Model */}
            <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.18] bg-[#16161C] flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white font-medium">
                    {t.market.zonusModel}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/[0.15] bg-white/[0.06] text-neutral-300">
                    {t.market.zonusBadge}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white">
                  {t.market.zonusTitle}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {t.market.zonusDesc}
                </p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-white/[0.08] text-xs text-neutral-200 font-mono">
                {t.market.zonusPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-white" /> {pt}
                  </li>
                ))}
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
              {t.capabilities.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              {t.capabilities.title}
            </h2>
            <p className="text-base text-neutral-400 font-normal">
              {t.capabilities.subtitle}
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
                  {t.capabilities.modules[0].title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {t.capabilities.modules[0].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                {t.capabilities.modules[0].tag}
              </div>
            </div>

            {/* Module 2 */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {t.capabilities.modules[1].title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {t.capabilities.modules[1].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                {t.capabilities.modules[1].tag}
              </div>
            </div>

            {/* Module 3 */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-lg border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white">
                  <Workflow className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {t.capabilities.modules[2].title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {t.capabilities.modules[2].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                {t.capabilities.modules[2].tag}
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
                {t.deliverable.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white leading-tight">
                {t.deliverable.title}
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {t.deliverable.desc}
              </p>
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 underline underline-offset-4"
                >
                  <span>{t.deliverable.requestScope}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#111115] p-6 sm:p-8 space-y-4">
              {t.deliverable.checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-neutral-300 py-2.5 border-b border-white/[0.04] last:border-0"
                >
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
              {t.timeline.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
              {t.timeline.title}
            </h2>
            <p className="text-base text-neutral-400 font-normal">
              {t.timeline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.timeline.stages.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#111115] flex flex-col justify-between space-y-6"
              >
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
                  {st.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & INQUIRY FORM
          ========================================================================= */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 block">
                {t.contact.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                {t.contact.desc}
              </p>

              <div className="pt-6 border-t border-white/[0.08] space-y-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">
                    {t.contact.directCorrespondence}
                  </span>
                  <a
                    href="mailto:hello@zonus.co"
                    className="text-white hover:underline text-sm font-sans"
                  >
                    hello@zonus.co
                  </a>
                </div>
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">
                    {t.contact.activeTimezones}
                  </span>
                  <span className="text-neutral-300">{t.contact.timezonesVal}</span>
                </div>
                <div>
                  <span className="text-neutral-600 uppercase block mb-1">
                    {t.contact.studioDomain}
                  </span>
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
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-full border border-white/[0.1] text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    {t.contact.resetBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.contact.form.businessLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contact.form.businessPlaceholder}
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.contact.form.tradeLabel}
                      </label>
                      <select
                        value={formData.trade}
                        onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white focus:outline-none focus:border-white/30 transition-all font-sans"
                      >
                        {t.contact.form.trades.map((tr) => (
                          <option key={tr.value} value={tr.value}>
                            {tr.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.contact.form.serviceAreaLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contact.form.serviceAreaPlaceholder}
                        value={formData.serviceArea}
                        onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-[#0A0A0C] text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      {t.contact.form.contactLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.contact.form.contactPlaceholder}
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
                      <span>
                        {isSubmitting
                          ? t.contact.form.submittingBtn
                          : t.contact.form.submitBtn}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-neutral-500 text-center">
                    {t.contact.form.privacyNotice}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating convenient language switcher pill for testing and fast toggling */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 p-1.5 pl-3 rounded-full border border-white/[0.15] bg-[#111115]/90 backdrop-blur-md shadow-2xl">
        <span className="text-[11px] font-mono text-neutral-400">Lang:</span>
        <LanguageSwitcher />
      </div>
    </div>
  )
}
