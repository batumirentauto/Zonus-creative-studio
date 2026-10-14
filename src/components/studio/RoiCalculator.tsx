'use client'

import React, { useState } from 'react'
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const RoiCalculator: React.FC = () => {
  const [ticketValue, setTicketValue] = useState<number>(3500)
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(10)
  const [closeRate, setCloseRate] = useState<number>(40)

  // Calculations
  const bookedJobsPerMonth = Math.round(leadsPerMonth * (closeRate / 100))
  const monthlyRevenue = bookedJobsPerMonth * ticketValue
  const annualRevenue = monthlyRevenue * 12
  const estimatedSiteInvestment = 4500
  const jobsToPayOff = Math.max(1, Math.ceil(estimatedSiteInvestment / ticketValue))

  const setPreset = (ticket: number, leads: number) => {
    setTicketValue(ticket)
    setLeadsPerMonth(leads)
  }

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Contractor Revenue & ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Just 1 or 2 Closed Jobs Pays For Your Entire Website.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            See the raw math. When your website ranks on Google and converts mobile visitors into phone calls, the payoff is immediate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Quick Trade Presets */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Select Your Trade Preset:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                type="button"
                onClick={() => setPreset(2800, 12)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                  ticketValue === 2800
                    ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                    : 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                🌲 Tree Care ($2.8k)
              </button>
              <button
                type="button"
                onClick={() => setPreset(12000, 6)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                  ticketValue === 12000
                    ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                    : 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                🏠 Roofing ($12k)
              </button>
              <button
                type="button"
                onClick={() => setPreset(1400, 15)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                  ticketValue === 1400
                    ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                    : 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                🚗 Auto Detailing ($1.4k)
              </button>
              <button
                type="button"
                onClick={() => setPreset(4500, 10)}
                className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                  ticketValue === 4500
                    ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                    : 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                🔧 HVAC / Trades ($4.5k)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Average Job / Invoice Value</span>
                  <span className="text-lg font-bold text-orange-400">
                    ${ticketValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$20,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Inbound Website Leads / Month</span>
                  <span className="text-lg font-bold text-orange-400">
                    {leadsPerMonth} leads
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  step="1"
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>2 leads</span>
                  <span>15 leads</span>
                  <span>35 leads</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Estimate-to-Closed Job Rate</span>
                  <span className="text-lg font-bold text-orange-400">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                  <span>20% (Conservative)</span>
                  <span>50%</span>
                  <span>80% (Aggressive)</span>
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  Projected Financial Impact
                </div>

                <div>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider block">
                    Estimated Extra Annual Revenue
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    +${annualRevenue.toLocaleString()}
                    <span className="text-sm font-normal text-zinc-400">/yr</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                      Extra Monthly Revenue
                    </span>
                    <span className="text-xl font-bold text-emerald-400">
                      ${monthlyRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                      Jobs To Pay For Website
                    </span>
                    <span className="text-xl font-bold text-orange-400 flex items-center gap-1">
                      <span>{jobsToPayOff} {jobsToPayOff === 1 ? 'job' : 'jobs'}</span>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-colors shadow-md shadow-orange-600/30"
                >
                  <span>Build My High-Converting Website</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-center text-zinc-500 mt-2">
                  Based on realistic conversion metrics across our 50+ contractor client sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
