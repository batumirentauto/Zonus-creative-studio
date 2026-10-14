'use client'

import React from 'react'
import { Server, GitBranch, Database, ShieldCheck, Zap, Lock, Code2, Cloud } from 'lucide-react'

export const TechStackSection: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Payload CMS 3.0 Native',
      badge: 'Modern Headless CMS',
      color: 'from-orange-500/20 to-orange-950/20 border-orange-500/30 text-orange-400',
      description:
        'Payload 3.0 lives directly inside Next.js App Router. That means no separate backend servers, instant TypeScript typing, and intuitive visual editing for your staff.',
      points: [
        'Live Preview editing for services, before/after galleries & pricing',
        'Next.js 16 Server Components for instant 0.3s rendering',
        'Rich Lexical editor with drag-and-drop media uploads',
        '100% open-source TypeScript code you fully own',
      ],
    },
    {
      icon: GitBranch,
      title: 'GitHub Professional Workflow',
      badge: 'Version Control & CI/CD',
      color: 'from-blue-500/20 to-blue-950/20 border-blue-500/30 text-blue-400',
      description:
        'Every code change, design enhancement, and feature update is versioned in your private GitHub repository with automated continuous integration.',
      points: [
        'Clean branch protection and automated pull request testing',
        'Full historical audit trail of all code changes',
        'Automated Playwright & Vitest end-to-end test verification',
        'Direct connection to production deployment triggers',
      ],
    },
    {
      icon: Cloud,
      title: 'Railway Cloud Platform',
      badge: 'Enterprise Infrastructure',
      color: 'from-purple-500/20 to-purple-950/20 border-purple-500/30 text-purple-400',
      description:
        'Hosted on Railway’s high-performance cloud with a dedicated PostgreSQL database. Handles massive traffic surges when severe weather strikes your city.',
      points: [
        'Dedicated PostgreSQL database with automated daily backups',
        'Zero-downtime rolling deployments on git push',
        'Built-in SSL, DDoS mitigation, and global edge routing',
        '99.99% uptime guarantee through storm emergencies',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-950/80 border-t border-border/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            Engineering Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            The Industry Gold Standard: Payload · GitHub · Railway
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            We don’t use fragile 2012 WordPress stacks or locked proprietary site builders. Every contractor site is engineered on the modern web standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl border bg-gradient-to-br ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
