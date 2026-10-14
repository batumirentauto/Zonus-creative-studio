import type { Metadata } from 'next'
import React from 'react'
import { HeroSection } from '@/components/studio/HeroSection'
import { NichesSection } from '@/components/studio/NichesSection'
import { RoiCalculator } from '@/components/studio/RoiCalculator'
import { ComparisonSection } from '@/components/studio/ComparisonSection'
import { CaseStudiesSection } from '@/components/studio/CaseStudiesSection'
import { TechStackSection } from '@/components/studio/TechStackSection'
import { AuditFormSection } from '@/components/studio/AuditFormSection'
import { FaqSection } from '@/components/studio/FaqSection'

export const metadata: Metadata = {
  title: 'Zonus Creative Studio | High-Converting Websites for US Trade Contractors',
  description:
    'We engineer high-converting websites for American Tree Removal, Roofing Contractors, and Auto Businesses. Blazing 0.3s mobile speeds, 5-star Google review funnels, and click-to-call architecture on Payload CMS & Railway.',
  openGraph: {
    title: 'Zonus Creative Studio | Websites for US Contractors',
    description:
      'High-converting websites for Tree Removal, Roofing, and Auto Businesses across the USA. Built on Payload CMS 3.0, Next.js, and Railway.',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NichesSection />
      <RoiCalculator />
      <ComparisonSection />
      <CaseStudiesSection />
      <TechStackSection />
      <AuditFormSection />
      <FaqSection />
    </main>
  )
}
