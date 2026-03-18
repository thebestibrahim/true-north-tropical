'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import TrustMarquee from '@/components/TrustMarquee'
import TestimonialCard from '@/components/TestimonialCard'
import TierCard from '@/components/TierCard'
import NewsletterSection from '@/components/NewsletterSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { featuredProducts, products, categories } from '@/lib/products'
import { tiers } from '@/lib/tiers'
import type { Category } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Finally, waterleaf and ugu that actually taste the way they should. I drove from Brampton the first time. Now they deliver.',
    name: 'Folake',
    city: 'Kitchener, ON',
  },
  {
    quote:
      "I grew up eating callaloo in Jamaica. Every bunch from this farm takes me right back. Nothing like this anywhere else in the region.",
    name: 'David',
    city: 'Guelph, ON',
  },
  {
    quote:
      'The Cameroon pepper is unreal. I had to call Aramide to ask how she does it. The answer is: she just cares.',
    name: 'Chidi',
    city: 'Cambridge, ON',
  },
]

// Compact 3 tiers for homepage teaser (Bounty first for anchoring)
const homepageTiers = ['bounty', 'essential', 'sampler'].map(id =>
  tiers.find(t => t.id === id)!
)

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const displayProducts = (
    activeCategory === 'all'
      ? featuredProducts
      : products.filter(p => p.category === activeCategory)
  ).slice(0, 8)

  return (
    <>
      {/* ── SECTION 1: HERO ───────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">

        {/* Full-bleed background image */}
        <Image
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1800&auto=format&fit=crop&q=85"
          alt="Fresh colourful Afro-heritage produce from True North Tropical"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Layered overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(160deg, rgba(25,48,30,0.30) 0%, rgba(20,42,25,0.62) 45%, rgba(12,32,16,0.88) 100%)',
          }}
        />
        {/* Bottom vignette for text legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,28,14,0.75) 0%, transparent 100%)',
          }}
        />

        {/* Content — pinned to bottom-left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 sm:pb-20 pt-32 w-full">
          <div className="max-w-2xl">

            {/* Season badge */}
            <div className="inline-flex items-center gap-2 mb-7 blur-fade blur-fade-1">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
              >
                🌿 Season Opens June 2026
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-serif blur-fade blur-fade-2"
              style={{
                fontSize: 'clamp(3.4rem, 8.5vw, 7rem)',
                color: 'var(--cream)',
                lineHeight: 0.97,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Food that<br />
              tastes{' '}
              <span style={{ color: 'var(--orange)' }}>like<br />home.</span>
            </h1>

            {/* Subhead */}
            <p
              className="text-lg mb-9 blur-fade blur-fade-3"
              style={{
                color: 'rgba(245,241,232,0.72)',
                fontWeight: 300,
                maxWidth: '400px',
                lineHeight: 1.55,
              }}
            >
              Afro-heritage vegetables grown fresh in Baden, Ontario — for families who know the difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10 blur-fade blur-fade-4">
              <Link href="/shop">
                <button
                  className="shimmer-btn h-12 px-7 rounded-xl text-base font-semibold flex items-center gap-2"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  Shop Now
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/farm-share">
                <button
                  className="h-12 px-7 rounded-xl text-base font-medium transition-colors"
                  style={{
                    border: '1.5px solid rgba(245,241,232,0.35)',
                    color: 'var(--cream)',
                    backgroundColor: 'rgba(245,241,232,0.07)',
                  }}
                >
                  Get Farm Share
                </button>
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-5 blur-fade blur-fade-5">
              {['No chemicals', 'Heirloom seeds', 'EFAO member'].map(t => (
                <span
                  key={t}
                  className="text-xs flex items-center gap-1.5"
                  style={{ color: 'rgba(191,214,191,0.85)', fontWeight: 400 }}
                >
                  <span style={{ color: 'var(--orange)' }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating harvest badge — mid-right, clear of trust chips */}
        <div
          className="absolute z-10 blur-fade blur-fade-6"
          style={{ bottom: '6.5rem', right: '2rem' }}
        >
          <div
            className="px-4 py-3 rounded-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(245,241,232,0.10)',
              border: '1px solid rgba(245,241,232,0.18)',
            }}
          >
            <p className="font-serif text-sm font-bold" style={{ color: 'var(--cream)' }}>
              Harvested this week
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(191,214,191,0.80)' }}>
              Baden, Ontario 🌿
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST MARQUEE ──────────────────────── */}
      <TrustMarquee />

      {/* ── SECTION 3: SHOP FROM HOME ─────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                className="font-serif text-4xl sm:text-5xl"
                style={{ color: 'var(--green)' }}
              >
                This week&apos;s harvest.
              </h2>
              <p
                className="mt-2 text-base"
                style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                Updated every Sunday. Order by Tuesday noon.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-sm font-medium flex items-center gap-1 flex-shrink-0"
              style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
            >
              See all products
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-sm px-4 py-2 rounded-full capitalize transition-all font-medium"
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--green)' : 'var(--soft-green)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--green)',
                  fontFamily: 'var(--font-sans)',
                  border: activeCategory === cat ? '1px solid var(--green)' : '1px solid var(--leaf)',
                }}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* See all CTA */}
          <div className="mt-10 text-center">
            <Link href="/shop">
              <Button
                variant="outline"
                className="h-12 px-8 text-sm font-medium"
                style={{
                  borderColor: 'var(--green)',
                  color: 'var(--green)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                See all products →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TESTIMONIALS ───────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* No heading — let the quotes land */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                city={t.city}
                delay={(i + 1) as 1 | 2 | 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FARM SHARE TEASER ──────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--soft-green)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Number ticker */}
            <div>
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
              >
                2026 Season
              </p>
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="font-serif number-ticker"
                  style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', color: 'var(--green)', lineHeight: 1 }}
                >
                  3
                </span>
                <div>
                  <p className="font-serif text-xl" style={{ color: 'var(--green)' }}>
                    Wholesale spots
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                  >
                    left in 2026
                  </p>
                </div>
              </div>

              <Badge
                className="mb-6 px-4 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--orange)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                ⏰ Early Bird ends March 31
              </Badge>

              <p
                className="text-base mb-6"
                style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', maxWidth: '380px' }}
              >
                Pre-invest in your farm wallet. Get bonus value, priority access, and food that actually tastes right.
              </p>

              <Link href="/farm-share">
                <button
                  className="shimmer-btn h-12 px-6 rounded-xl text-base font-semibold flex items-center gap-2"
                  style={{
                    backgroundColor: 'var(--orange)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  See all farm share options
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* Right: Compact tier cards */}
            <div className="grid grid-cols-1 gap-3">
              {homepageTiers.map(tier => (
                <TierCard key={tier.id} tier={tier} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: NEWSLETTER ─────────────────────────── */}
      <NewsletterSection />
    </>
  )
}
