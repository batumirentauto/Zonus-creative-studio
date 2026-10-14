'use client'

import React from 'react'
import Link from 'next/link'
import { PhoneCall, ShieldCheck, Zap, ArrowRight, Star, TrendingUp, CheckCircle2 } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-background via-background to-zinc-950/40">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-amber-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span>High-Converting Websites For US Blue-Collar & Trade Contractors</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.08]">
            We Build Websites That Keep Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Crews Busy
            </span>{' '}
            & Your Phones Ringing.
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Specialized in <strong className="text-foreground">Tree Removal</strong>, <strong className="text-foreground">Roofing Contractors</strong>, and <strong className="text-foreground">Auto Businesses</strong> across the United States. Blazing 0.4s mobile speed, high-converting estimate funnels, and local Google Map dominance.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-amber-500 hover:shadow-orange-500/40 active:scale-95 transition-all duration-150"
            >
              <span>Get Free Video Audit of Your Website</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold rounded-xl border border-border bg-card/60 backdrop-blur hover:bg-accent text-foreground hover:text-accent-foreground active:scale-95 transition-all duration-150"
            >
              <span>Calculate Your ROI</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs md:text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Mobile-First (70%+ Calls Come From Phones)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No WordPress Bloat & No Plugins Breaking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>You Own Everything (Zero Lock-In)</span>
            </div>
          </div>
        </div>

        {/* Floating Metrics Showcase */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-2xl">
          <div className="p-4 text-center border-r border-border/40 last:border-0">
            <div className="flex items-center justify-center gap-1 text-orange-400 mb-1">
              <Zap className="w-5 h-5" />
              <span className="text-2xl md:text-3xl font-black text-foreground">99/100</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">Google PageSpeed Score</p>
          </div>

          <div className="p-4 text-center border-r border-border/40 last:border-0">
            <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
              <TrendingUp className="w-5 h-5" />
              <span className="text-2xl md:text-3xl font-black text-foreground">+240%</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">Avg Inbound Call Increase</p>
          </div>

          <div className="p-4 text-center border-r border-border/40 last:border-0">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-2xl md:text-3xl font-black text-foreground">5.0</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">Google Reviews Live Stream</p>
          </div>

          <div className="p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-2xl md:text-3xl font-black text-foreground">Payload 3</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">Railway PostgreSQL Engine</p>
          </div>
        </div>
      </div>
    </section>
  )
}
