import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { AuditFormSection } from '@/components/studio/AuditFormSection'
import { FaqSection } from '@/components/studio/FaqSection'
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Zonus Creative Studio | Web Design for US Contractors',
  description:
    'Schedule a strategy call or claim a free 10-minute video website audit for your tree service, roofing company, or auto business. Fast 24-hour turnaround.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-orange-400 font-semibold">Contact & Website Audit</span>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
            Let's Talk Business
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            Ready To Keep Your Crews Fully Booked?
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Whether you need a brand-new website machine or want an honest video audit of why your current site isn’t generating phone calls, we’re here to help.
          </p>
        </div>

        {/* Studio Info strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-center">
          <div className="p-6 rounded-2xl border border-border bg-card/60">
            <Mail className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-foreground">Email Inquiries</h3>
            <p className="text-xs text-muted-foreground mt-1">hello@zonusstudio.com</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card/60">
            <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-foreground">Audit Turnaround</h3>
            <p className="text-xs text-muted-foreground mt-1">Under 24 Business Hours</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card/60">
            <ShieldCheck className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-foreground">Service Area</h3>
            <p className="text-xs text-muted-foreground mt-1">United States (Nationwide)</p>
          </div>
        </div>

        {/* Audit Form */}
        <AuditFormSection />

        {/* FAQ */}
        <FaqSection />
      </div>
    </main>
  )
}
