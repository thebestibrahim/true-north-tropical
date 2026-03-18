'use client'

import Image from 'next/image'
import Link from 'next/link'
import TierCard from '@/components/TierCard'
import NewsletterSection from '@/components/NewsletterSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { tiers, pickupHubs } from '@/lib/tiers'
import { ArrowDown, Check, X } from 'lucide-react'

const howItWorks = [
  { icon: '🌱', step: 'You invest early', desc: 'Choose a farm share tier and pre-load your farm wallet.' },
  { icon: '💳', step: 'Farm wallet loads', desc: 'Your balance activates with bonus value on top.' },
  { icon: '🥬', step: 'You shop freely', desc: 'Order what you want, when you want it. No fixed box.' },
]

const deliveryInfo = [
  { icon: '📅', label: 'Updated Sundays', desc: 'Fresh availability every week' },
  { icon: '⏰', label: 'Order by Tue noon', desc: 'Close of ordering window' },
  { icon: '🚚', label: 'Delivered Wednesday', desc: 'To your pickup hub' },
]

const isForYouYes = [
  'You cook African, Caribbean, or diaspora food regularly',
  'You want fresher produce than any grocery store',
  'You like knowing your farmer personally',
  'You want more variety than a standard CSA box',
  'You care where your food comes from',
]

const isForYouNo = [
  'You want a fixed weekly box with no choices',
  'You only cook European or North American cuisine',
  'You need daily delivery flexibility',
  'You are not near our pickup hubs',
]

// Anchored order: Bounty first, then descending
const orderedTiers = ['bounty', 'sustainer', 'essential', 'sampler', 'alacarte']
  .map(id => tiers.find(t => t.id === id)!)

export default function FarmSharePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-[70svh] flex items-center overflow-hidden py-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        {/* Subtle background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(191,214,191,0.35) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <Badge
                className="mb-5 px-4 py-2 text-sm font-bold animate-pulse"
                style={{
                  backgroundColor: 'var(--orange)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                ⏰ Early Bird ends March 31, 2026
              </Badge>

              <h1
                className="font-serif mb-5 blur-fade blur-fade-1"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  color: 'var(--green)',
                  lineHeight: 1.08,
                }}
              >
                Your farm.<br />Your food.<br />Your way.
              </h1>

              <p
                className="text-lg mb-8 blur-fade blur-fade-2"
                style={{
                  color: 'var(--muted-color)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  maxWidth: '420px',
                }}
              >
                No fixed boxes. No wasted produce. Pre-invest in your farm wallet and shop on your own schedule — with bonus value built in.
              </p>

              <div className="flex flex-wrap gap-3 blur-fade blur-fade-3">
                <a href="#tiers">
                  <button
                    className="shimmer-btn h-12 px-6 rounded-xl text-base font-semibold flex items-center gap-2"
                    style={{
                      backgroundColor: 'var(--orange)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    Choose your share
                    <ArrowDown size={16} />
                  </button>
                </a>
                <Link href="/shop">
                  <Button
                    variant="outline"
                    className="h-12 px-6 font-medium"
                    style={{
                      borderColor: 'var(--green)',
                      color: 'var(--green)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    See what&apos;s growing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Farm image */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden blur-fade blur-fade-2">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop"
                alt="True North Tropical farm"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* [SWAP: farm field or harvest photo] */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(63,111,70,0.1) 0%, transparent 60%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--soft-green)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-8"
            style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
          >
            How it works
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
                >
                  {step.icon}
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden sm:block absolute" />
                )}
                <h3 className="font-serif text-lg" style={{ color: 'var(--green)' }}>
                  {step.step}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER CARDS ────────────────────────────────────── */}
      <section
        id="tiers"
        className="py-20 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-4xl sm:text-5xl mb-4"
              style={{ color: 'var(--green)' }}
            >
              Choose your share.
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              More you invest, more you save. Bonus value loaded instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {orderedTiers.map(tier => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          <p
            className="text-center text-sm mt-8"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
          >
            Questions? Email{' '}
            <a
              href="mailto:truenorthtropical@gmail.com"
              style={{ color: 'var(--orange)' }}
            >
              truenorthtropical@gmail.com
            </a>
            {' '}or call{' '}
            <a href="tel:2268683651" style={{ color: 'var(--orange)' }}>
              226-868-3651
            </a>
          </p>
        </div>
      </section>

      {/* ── PICKUP HUBS ───────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-serif text-3xl mb-2"
            style={{ color: 'var(--green)' }}
          >
            Pickup hubs
          </h2>
          <p
            className="mb-8 text-base"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
          >
            Delivery arrives Wednesday. Choose your nearest hub.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pickupHubs.map(hub => (
              <div
                key={hub.name}
                className="rounded-2xl p-5 transition-all hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
              >
                <span className="text-2xl mb-3 block">{hub.icon}</span>
                <h3 className="font-serif text-lg mb-1" style={{ color: 'var(--green)' }}>
                  {hub.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
                  {hub.address}
                </p>
                <div
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
                >
                  {hub.day} · {hub.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY INFO STRIP ───────────────────────────── */}
      <section style={{ backgroundColor: 'var(--green)' }} className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {deliveryInfo.map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-serif text-base" style={{ color: 'var(--cream)' }}>
                    {item.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(245,241,232,0.6)', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS THIS FOR YOU? ──────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-serif text-3xl mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            Is this for you?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Yes column */}
            <div>
              <p
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
              >
                Yes — perfect fit ✓
              </p>
              <ul className="space-y-3">
                {isForYouYes.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--green)' }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--foreground)', fontFamily: 'var(--font-sans)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No column */}
            <div>
              <p
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
              >
                Probably not for you ✗
              </p>
              <ul className="space-y-3">
                {isForYouNo.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <X
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#DC2626', opacity: 0.6 }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
