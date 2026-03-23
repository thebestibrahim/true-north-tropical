'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import TrustMarquee from '@/components/TrustMarquee'
import TestimonialCard from '@/components/TestimonialCard'
import NewsletterSection from '@/components/NewsletterSection'
import { featuredProducts, products, categories } from '@/lib/products'
import type { Category } from '@/lib/products'
import { ArrowRight, CalendarDays, ShoppingBag, Truck, Leaf, ChevronRight, Clock } from 'lucide-react'
import { tiers, earlyBirdWindow } from '@/lib/tiers'

// 3 tiers for homepage teaser (Bounty first — anchoring)
const homepageTiers = ['bounty', 'essential', 'sampler'].map(id => tiers.find(t => t.id === id)!)

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

const wholesaleSteps = [
  { num: '01', title: 'Get a wholesale share', icon: ShoppingBag },
  { num: '02', title: 'Receive our weekly harvest list', icon: CalendarDays },
  { num: '03', title: 'Order online', icon: Leaf },
  { num: '04', title: 'Schedule pickup or delivery', icon: Truck },
]

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

        {/* Full-bleed background — actual TNT farm */}
        <Image
          src="/farm-hero.webp"
          alt="True North Tropical farm in Baden, Ontario — polytunnel greenhouses and rows of fresh vegetables"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Overlay — dark enough for legibility, light enough to show the farm */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,28,14,0.45) 0%, rgba(10,28,14,0.70) 60%, rgba(8,22,12,0.88) 100%)',
          }}
        />

        {/* Content — centred */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28 pt-40 text-center flex flex-col items-center">

          {/* Season badge */}
          <div className="inline-flex items-center gap-2 mb-7 blur-fade blur-fade-1">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
            >
              🌿 Season Opens June 2026
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-serif blur-fade blur-fade-2"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 5.8rem)',
              color: 'var(--cream)',
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}
          >
            Experience food that tastes<br />
            like home from{' '}
            <span style={{ color: 'var(--orange)' }}>your local farm.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 blur-fade blur-fade-3"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(245,241,232,0.78)',
              fontWeight: 300,
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Discover wholesome, seasonal Afro-heritage vegetables grown fresh in Baden, Ontario.
            Weekly delivery and pickup available from June through October.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 blur-fade blur-fade-4">
            <Link href="/shop">
              <button
                className="shimmer-btn px-8 rounded-xl text-base font-semibold flex items-center gap-2"
                style={{ backgroundColor: 'var(--orange)', color: '#fff', height: '3.25rem' }}
              >
                Shop Now
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/farm-share">
              <button
                className="px-8 rounded-xl text-base font-medium transition-all hover:bg-white/10"
                style={{
                  border: '1.5px solid rgba(245,241,232,0.40)',
                  color: 'var(--cream)',
                  backgroundColor: 'rgba(245,241,232,0.06)',
                  height: '3.25rem',
                }}
              >
                Get a Farm Share
              </button>
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-6 blur-fade blur-fade-5">
            {['No GMO', 'Locally grown', 'No chemicals'].map(t => (
              <span
                key={t}
                className="text-sm flex items-center gap-1.5"
                style={{ color: 'rgba(191,214,191,0.92)', fontWeight: 400 }}
              >
                <span style={{ color: 'var(--orange)' }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST MARQUEE ──────────────────────── */}
      <TrustMarquee />

      {/* ── SECTION 3: THIS WEEK'S HARVEST ────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p
                className="text-sm font-medium uppercase tracking-widest mb-2"
                style={{ color: 'var(--orange)' }}
              >
                Fresh from the field
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl" style={{ color: 'var(--green)' }}>
                This week&apos;s harvest.
              </h2>
              <p className="mt-2 text-base" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Updated every Sunday. Order by Tuesday noon.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-sm font-medium flex items-center gap-1 flex-shrink-0"
              style={{ color: 'var(--orange)' }}
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
                  border: activeCategory === cat ? '1px solid var(--green)' : '1px solid var(--leaf)',
                }}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/shop">
              <button
                className="h-12 px-8 text-sm font-medium rounded-xl border transition-colors hover:bg-[var(--soft-green)]"
                style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
              >
                See all products →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TESTIMONIALS ───────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-3"
              style={{ color: 'var(--orange)' }}
            >
              From our community
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl" style={{ color: 'var(--green)' }}>
              People who know the difference.
            </h2>
          </div>
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
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--soft-green)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--dark-green)' }}>
              2026 Season
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl mb-3" style={{ color: 'var(--green)' }}>
              Get a Farm Share.
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
              Pre-invest in your farm wallet. No fixed boxes. Shop what you want, when you want it.
            </p>
          </div>

          {/* Early bird notice */}
          <div
            className="max-w-xl mx-auto mb-10 mt-4 flex items-center gap-2 justify-center px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
          >
            <Clock size={14} />
            Early Bird bonus: {earlyBirdWindow.label} only
          </div>

          {/* 3 tier cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {homepageTiers.map(tier => (
              <div
                key={tier.id}
                className="rounded-2xl p-5 flex flex-col gap-1.5 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: tier.highlight ? 'var(--green)' : '#fff',
                  border: tier.highlight ? '2px solid var(--green)' : '1px solid var(--leaf)',
                  boxShadow: tier.highlight ? '0 8px 32px rgba(63,111,70,0.18)' : 'none',
                }}
              >
                {tier.badge && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full self-start mb-1"
                    style={{
                      backgroundColor: tier.highlight ? 'var(--orange)' : 'var(--soft-green)',
                      color: tier.highlight ? '#fff' : 'var(--dark-green)',
                    }}
                  >
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-serif text-xl" style={{ color: tier.highlight ? '#fff' : 'var(--green)' }}>
                  {tier.name}
                </h3>
                <p
                  className="font-serif text-3xl font-bold"
                  style={{ color: tier.highlight ? '#fff' : 'var(--brown)' }}
                >
                  ${tier.walletValue}
                  <span className="text-sm font-normal ml-1" style={{ color: tier.highlight ? 'rgba(255,255,255,0.6)' : 'var(--muted-color)' }}>
                    wallet
                  </span>
                </p>
                <p className="text-xs" style={{ color: tier.highlight ? 'rgba(255,255,255,0.55)' : 'var(--muted-color)' }}>
                  Pay ${tier.price} + {tier.bonus}% early bird bonus
                </p>
                <p
                  className="text-xs font-medium mt-0.5"
                  style={{ color: tier.highlight ? 'rgba(232,125,47,0.95)' : 'var(--orange)' }}
                >
                  {tier.checkoutSavings} at checkout
                </p>
                <Link
                  href="/farm-share#tiers"
                  className="text-xs font-semibold mt-2"
                  style={{ color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--orange)' }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/farm-share">
              <button
                className="h-12 px-8 rounded-xl text-sm font-semibold border transition-colors hover:bg-white/60"
                style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
              >
                See all 5 share tiers →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHOLESALE ──────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: 'var(--green)' }}>
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%), radial-gradient(circle at 20% 80%, #fff 0%, transparent 50%)',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  3 Spots Available — 2026 Season
                </span>
              </div>

              <h2
                className="font-serif mb-5"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  color: 'var(--cream)',
                  lineHeight: 1.1,
                }}
              >
                Wholesale
              </h2>

              <p
                className="text-lg mb-4 font-medium"
                style={{ color: 'var(--leaf)', lineHeight: 1.5 }}
              >
                Are you a restaurant owner, caterer, produce market, or event host?
              </p>

              <p
                className="mb-8 leading-relaxed"
                style={{ color: 'rgba(245,241,232,0.72)', fontWeight: 300, fontSize: '1.05rem', maxWidth: '480px' }}
              >
                If you want vegetables harvested fresh instead of shipped from thousands of miles
                away, we would love to grow for you. We will accept three wholesale partners for
                the 2026 season.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/farm-share">
                  <button
                    className="shimmer-btn h-12 px-6 rounded-xl text-sm font-semibold flex items-center gap-2"
                    style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                  >
                    Get a Wholesale Share
                    <ArrowRight size={15} />
                  </button>
                </Link>
                <Link href="/about#harvest-calendar">
                  <button
                    className="h-12 px-5 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-all hover:bg-white/10"
                    style={{
                      border: '1.5px solid rgba(191,214,191,0.45)',
                      color: 'var(--leaf)',
                    }}
                  >
                    See our Harvest Calendar
                    <ChevronRight size={14} />
                  </button>
                </Link>
                <Link href="/faq#contact">
                  <button
                    className="h-12 px-5 rounded-xl text-sm font-medium flex items-center gap-1.5 transition-all hover:bg-white/10"
                    style={{
                      border: '1.5px solid rgba(191,214,191,0.45)',
                      color: 'var(--leaf)',
                    }}
                  >
                    Contact Form
                    <ChevronRight size={14} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: How it works steps */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: 'rgba(191,214,191,0.70)' }}
              >
                How it works
              </p>
              <div className="space-y-4">
                {wholesaleSteps.map(step => {
                  const Icon = step.icon
                  return (
                    <div
                      key={step.num}
                      className="flex items-center gap-5 p-5 rounded-2xl transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(191,214,191,0.18)',
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--orange)' }}
                      >
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <span
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--orange)', display: 'block', marginBottom: '2px' }}
                        >
                          Step {step.num}
                        </span>
                        <span
                          className="font-medium"
                          style={{ color: 'var(--cream)', fontSize: '0.975rem' }}
                        >
                          {step.title}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: NEWSLETTER ─────────────────────────── */}
      <NewsletterSection />
    </>
  )
}
