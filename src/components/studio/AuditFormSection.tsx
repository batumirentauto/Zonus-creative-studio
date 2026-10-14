'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, ShieldCheck, Video, Clock, Lock } from 'lucide-react'

export const AuditFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    websiteUrl: '',
    niche: 'tree-removal',
    phone: '',
    cityState: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="audit-form" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-orange-500/30 bg-gradient-to-b from-card to-background p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-foreground">
                Audit Request Received!
              </h3>
              <p className="max-w-lg mx-auto text-base text-muted-foreground leading-relaxed">
                Thank you, <strong className="text-foreground">{formData.name || 'Contractor'}</strong>. Our studio lead will personally record your 10-minute video audit analyzing your website speed, mobile click-to-call flow, and local Google Map competitors for <strong className="text-foreground">{formData.businessName || 'your business'}</strong>.
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-orange-400 font-semibold px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <Clock className="w-4 h-4" />
                Delivery within 24 hours to your phone and email
              </div>
            </div>
          ) : (
            <div>
              <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
                  <Video className="w-3.5 h-3.5" />
                  100% Free · No Obligation · No Sales Pressure
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                  Get A Free 10-Minute Video Audit Of Your Contractor Website
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We’ll record our screen showing you exactly why homeowners are bouncing to your local competitors, and how 3 changes can double your inbound calls.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Mike Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Business / Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Henderson Tree Care LLC"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Current Website (or "None")
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. www.hendersontrees.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Contractor Trade / Niche *
                    </label>
                    <select
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    >
                      <option value="tree-removal">Tree Removal & Tree Care</option>
                      <option value="roofing">Roofing & Storm Restoration</option>
                      <option value="auto-business">Auto Detailing, PPF & Repair</option>
                      <option value="hvac">HVAC & Plumbing Trades</option>
                      <option value="other">Other Trade / Home Service</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Phone Number (to text video link) *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. (404) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      City, State *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Atlanta, GA"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-card/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-foreground"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-amber-500 hover:shadow-orange-500/40 active:scale-95 transition-all duration-150 disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Claim My Free Video Website Audit'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Your information is strictly private. We never sell your data or spam you.</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
