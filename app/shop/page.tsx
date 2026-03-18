'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import TierCard from '@/components/TierCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { products, categories } from '@/lib/products'
import { tiers } from '@/lib/tiers'
import type { Category } from '@/lib/products'

const nurseryItems = [
  { name: 'Seedling Starter Pack', description: '6 seedlings of your choice', price: 35.99, unit: 'pack' },
  { name: 'Home Garden Box', description: '12 seedlings — curated African variety mix', price: 59.99, unit: 'box' },
  { name: 'Market Garden Bundle', description: '24 seedlings — ideal for serious growers', price: 96.49, unit: 'bundle' },
]

const consultItems = [
  {
    title: '30-Min Garden Consult',
    description: 'Quick consultation to diagnose a garden issue, choose varieties, or plan your season.',
    price: 45,
    duration: '30 min',
  },
  {
    title: '1-Hour Garden Consult',
    description: 'Full session to plan your garden layout, soil prep, and crop rotation strategy.',
    price: 80,
    duration: '1 hour',
  },
]

const giftCards = [
  { amount: 200, label: 'Perfect Start' },
  { amount: 400, label: 'Season Sampler' },
  { amount: 0, label: 'Custom Amount', custom: true },
]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const displayProducts =
    activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative h-[40svh] min-h-[260px] flex items-end overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&auto=format&fit=crop"
          alt="True North Tropical farm store"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* [SWAP: farm store or produce banner photo] */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(47,87,54,0.3) 0%, rgba(47,87,54,0.75) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <p
            className="text-sm mb-2 uppercase tracking-widest"
            style={{ color: 'rgba(245,241,232,0.7)', fontFamily: 'var(--font-sans)' }}
          >
            True North Tropical
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl"
            style={{ color: '#FFFFFF' }}
          >
            The Farm Store
          </h1>
        </div>
      </section>

      {/* ── TABS ──────────────────────────────────────────── */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="produce">
            <TabsList
              className="flex flex-wrap gap-1 h-auto p-1 mb-10 rounded-xl"
              style={{ backgroundColor: 'var(--soft-green)', width: 'fit-content' }}
            >
              {[
                { value: 'produce',    label: 'Produce' },
                { value: 'farmshare', label: 'Farm Share' },
                { value: 'nursery',   label: 'Nursery' },
                { value: 'consult',   label: 'Garden Consult' },
                { value: 'gifts',     label: 'Gift Cards' },
              ].map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-all data-[state=active]:shadow-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ── PRODUCE ──────────────────────────────────── */}
            <TabsContent value="produce">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sticky sidebar: category filter */}
                <aside className="lg:w-48 flex-shrink-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                  >
                    Filter by
                  </p>
                  <div className="flex lg:flex-col gap-2 flex-wrap">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="text-sm px-3 py-2 rounded-lg capitalize text-left transition-all font-medium"
                        style={{
                          backgroundColor: activeCategory === cat ? 'var(--green)' : 'transparent',
                          color: activeCategory === cat ? '#FFFFFF' : 'var(--green)',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        <span
                          className="ml-1 text-xs"
                          style={{ opacity: 0.6 }}
                        >
                          ({cat === 'all' ? products.length : products.filter(p => p.category === cat).length})
                        </span>
                      </button>
                    ))}
                  </div>
                </aside>

                {/* Product grid */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <p
                      className="text-sm"
                      style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                    >
                      {displayProducts.length} product{displayProducts.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {displayProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ── FARM SHARE ───────────────────────────────── */}
            <TabsContent value="farmshare">
              <div className="mb-8 max-w-2xl">
                <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--green)' }}>
                  Farm Share CSA
                </h2>
                <p style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                  Pre-invest in your farm wallet and get bonus value. No weekly boxes — shop freely on your own schedule.
                </p>
                <Link href="/farm-share" className="text-sm font-medium mt-3 inline-block" style={{ color: 'var(--orange)' }}>
                  See full details →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {tiers.map(tier => (
                  <TierCard key={tier.id} tier={tier} />
                ))}
              </div>
            </TabsContent>

            {/* ── NURSERY ──────────────────────────────────── */}
            <TabsContent value="nursery">
              <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--green)' }}>
                Seedlings & Nursery
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                Start your own Afro-heritage garden. All seedlings are GMO-free, heirloom-variety, hand-grown. HST included.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {nurseryItems.map(item => (
                  <div
                    key={item.name}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                      style={{ backgroundColor: 'var(--soft-green)' }}
                    >
                      🌱
                    </div>
                    <h3 className="font-serif text-xl mb-1" style={{ color: 'var(--green)' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                      {item.description}
                    </p>
                    <p className="font-serif text-2xl mb-4" style={{ color: 'var(--brown)' }}>
                      ${item.price.toFixed(2)}
                      <span className="text-sm ml-1" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                        / {item.unit}
                      </span>
                    </p>
                    <button
                      className="w-full h-10 rounded-xl text-sm font-medium shimmer-btn"
                      style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
                      onClick={() => window.location.href = 'mailto:truenorthtropical@gmail.com?subject=Nursery Order - ' + item.name}
                    >
                      Order Now →
                    </button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* ── GARDEN CONSULT ───────────────────────────── */}
            <TabsContent value="consult">
              <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--green)' }}>
                Garden Consulting
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                One-on-one sessions with Aramide. Virtual or in-person (Baden area).
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
                {consultItems.map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
                  >
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                      style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
                    >
                      ⏱ {item.duration}
                    </div>
                    <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--green)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm mb-5" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                      {item.description}
                    </p>
                    <p className="font-serif text-3xl mb-5" style={{ color: 'var(--brown)' }}>
                      ${item.price}
                    </p>
                    <button
                      className="w-full h-10 rounded-xl text-sm font-medium shimmer-btn"
                      style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
                      onClick={() => window.location.href = 'mailto:truenorthtropical@gmail.com?subject=Garden Consult - ' + item.title}
                    >
                      Book a Session →
                    </button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* ── GIFT CARDS ───────────────────────────────── */}
            <TabsContent value="gifts">
              <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--green)' }}>
                Gift Cards
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                Give the gift of real food. Loaded directly to their farm wallet.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
                {giftCards.map(gc => (
                  <div
                    key={gc.label}
                    className="rounded-2xl p-6 text-center"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-4"
                      style={{ backgroundColor: 'var(--soft-green)' }}
                    >
                      🎁
                    </div>
                    <h3 className="font-serif text-lg mb-1" style={{ color: 'var(--green)' }}>
                      {gc.label}
                    </h3>
                    {gc.amount > 0 ? (
                      <p className="font-serif text-3xl mb-4" style={{ color: 'var(--brown)' }}>
                        ${gc.amount}
                      </p>
                    ) : (
                      <p className="text-sm mb-4" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                        You choose
                      </p>
                    )}
                    <button
                      className="w-full h-10 rounded-xl text-sm font-medium shimmer-btn"
                      style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
                      onClick={() => window.location.href = 'mailto:truenorthtropical@gmail.com?subject=Gift Card - ' + gc.label}
                    >
                      Buy Gift Card →
                    </button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
