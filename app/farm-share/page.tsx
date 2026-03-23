'use client'

import Link from 'next/link'
import Image from 'next/image'
import TierCard from '@/components/TierCard'
import NewsletterSection from '@/components/NewsletterSection'
import { tiers, pickupHubs, sharedPerks, earlyBirdWindow } from '@/lib/tiers'
import { ArrowDown, Check, X, Clock, Banknote, Smartphone } from 'lucide-react'

const howItWorks = [
  {
    icon: '💳',
    step: 'Choose your share',
    desc: 'Select a tier and pre-load your farm wallet. Your balance is ready to spend as soon as your payment is confirmed.',
  },
  {
    icon: '🌱',
    step: 'Receive the weekly harvest list',
    desc: 'Every Sunday we email you what\'s ready to harvest that week. No fixed boxes. No surprises.',
  },
  {
    icon: '🛒',
    step: 'Order online',
    desc: 'Browse what\'s available, add to cart, and your wallet balance pays at checkout automatically.',
  },
  {
    icon: '🚚',
    step: 'Schedule pickup or delivery',
    desc: 'Choose a pickup hub near you or request local delivery. Orders close Tuesday at noon.',
  },
]

const isForYouYes = [
  'You cook African, Caribbean, or diaspora food regularly',
  'You want fresher produce than any grocery store can offer',
  'You like knowing your farmer personally',
  'You want choice, not a fixed box of vegetables you didn\'t pick',
  'You care about where your food comes from',
]

const isForYouNo = [
  'You want a fixed weekly box with no decisions',
  'You only cook European or North American cuisine',
  'You need delivery options outside our current hubs',
]

// Anchored display order: Bounty first (anchoring effect), then descending
const orderedTiers = ['bounty', 'sustainer', 'essential', 'sampler', 'alacarte']
  .map(id => tiers.find(t => t.id === id)!)

export default function FarmSharePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-[72svh] flex items-center overflow-hidden py-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(191,214,191,0.30) 0%, transparent 65%)',
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Early bird badge */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-bold animate-pulse"
                style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
              >
                <Clock size={14} />
                Early Bird: {earlyBirdWindow.start} – {earlyBirdWindow.end}
              </div>

              <h1
                className="font-serif mb-5"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  color: 'var(--green)',
                  lineHeight: 1.05,
                }}
              >
                Your farm.<br />Your food.<br />Your way.
              </h1>

              <p
                className="text-lg mb-4"
                style={{ color: 'var(--muted-color)', fontWeight: 300, maxWidth: '440px', lineHeight: 1.65 }}
              >
                Pre-invest in your farm wallet and shop on your own schedule. No fixed boxes, no wasted produce.
                Choose only what you want, when you want it.
              </p>

              <p
                className="text-sm mb-8 font-medium"
                style={{ color: 'var(--orange)' }}
              >
                ⏰ Bonus wallet credit is only available during the Early Bird window: {earlyBirdWindow.label}.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#tiers">
                  <button
                    className="shimmer-btn h-12 px-6 rounded-xl text-base font-semibold flex items-center gap-2"
                    style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                  >
                    Choose your share
                    <ArrowDown size={16} />
                  </button>
                </a>
                <Link href="/shop">
                  <button
                    className="h-12 px-6 rounded-xl text-base font-medium border transition-colors hover:bg-[var(--soft-green)]"
                    style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
                  >
                    See what&apos;s growing
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80"
                alt="True North Tropical farm — rows of fresh produce"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* [SWAP: your own farm photo] */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(63,111,70,0.08) 0%, transparent 60%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--soft-green)' }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest text-center mb-10"
            style={{ color: 'var(--dark-green)' }}
          >
            How it works
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="flex flex-col gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
                >
                  {step.icon}
                </div>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--orange)', display: 'block', marginBottom: '4px' }}
                  >
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-base mb-1" style={{ color: 'var(--green)' }}>
                    {step.step}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER CARDS ────────────────────────────────────── */}
      <section id="tiers" className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="font-serif text-4xl sm:text-5xl mb-3" style={{ color: 'var(--green)' }}>
              Choose your share.
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
              The more you invest, the more you save at checkout. Bonus wallet credit is only available during the Early Bird window.
            </p>
          </div>

          {/* Early bird countdown bar */}
          <div
            className="max-w-2xl mx-auto mb-10 px-5 py-3 rounded-xl flex items-center gap-3"
            style={{ backgroundColor: '#FFF8F3', border: '1px solid rgba(232,125,47,0.25)' }}
          >
            <Clock size={15} style={{ color: 'var(--orange)', flexShrink: 0 }} />
            <p className="text-sm font-medium" style={{ color: 'var(--brown)' }}>
              <span style={{ color: 'var(--orange)' }}>Early Bird window: {earlyBirdWindow.label}.</span>{' '}
              Bonus credit applies only to purchases made during this period.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {orderedTiers.map(tier => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>

          {/* Shared perks */}
          <div
            className="mt-10 p-6 rounded-2xl max-w-3xl mx-auto"
            style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}
          >
            <p className="text-sm font-semibold mb-4 text-center" style={{ color: 'var(--dark-green)' }}>
              Every paid share also includes:
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {sharedPerks.map(perk => (
                <li key={perk} className="flex items-start gap-2">
                  <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} />
                  <span className="text-sm leading-snug" style={{ color: 'var(--dark-green)' }}>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact line */}
          <p className="text-center text-sm mt-6" style={{ color: 'var(--muted-color)' }}>
            Questions?{' '}
            <a href="mailto:truenorthtropical@gmail.com" style={{ color: 'var(--orange)' }}>
              truenorthtropical@gmail.com
            </a>
            {' '}or{' '}
            <a href="tel:2268683651" style={{ color: 'var(--orange)' }}>226-868-3651</a>
          </p>
        </div>
      </section>

      {/* ── PAYMENT METHODS ───────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--orange)' }}>
                How to pay
              </p>
              <h2 className="font-serif text-3xl mb-4" style={{ color: 'var(--green)' }}>
                Pay by e-transfer<br />and earn more.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Pay with debit or e-transfer and receive up to <strong style={{ color: 'var(--green)' }}>2% additional bonus credit</strong> on your order value.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                When you pay by debit or e-transfer it saves us credit card processing fees, and we pass those savings directly back to you.
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--soft-green)' }}
                >
                  <Banknote size={20} style={{ color: 'var(--green)' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--green)' }}>
                    E-Transfer / Interac
                  </p>
                  <p className="text-sm" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                    Send to <strong>truenorthtropical@gmail.com</strong>. Include your name and share tier in the message.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--soft-green)' }}
                >
                  <Smartphone size={20} style={{ color: 'var(--green)' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--green)' }}>
                    Debit (in person)
                  </p>
                  <p className="text-sm" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                    Available at any of our pickup hubs. Ask about the debit bonus when you pay.
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-xl text-sm"
                style={{ backgroundColor: '#FFF8F3', border: '1px solid rgba(232,125,47,0.20)', color: 'var(--brown)' }}
              >
                💡 <strong>Reminder:</strong> The 2% debit/e-transfer bonus applies on top of your share bonus during the Early Bird window.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PICKUP HUBS ───────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--green)' }}>
            Pickup hubs
          </h2>
          <p className="mb-8 text-base" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
            Order by Tuesday noon. Pick up Wednesday or Thursday at your nearest hub.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pickupHubs.map(hub => (
              <div
                key={hub.name}
                className="rounded-2xl p-5 transition-all hover:-translate-y-1"
                style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--leaf)' }}
              >
                <span className="text-2xl mb-3 block">{hub.icon}</span>
                <h3 className="font-serif text-base mb-1" style={{ color: 'var(--green)' }}>
                  {hub.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: 'var(--muted-color)' }}>{hub.address}</p>
                <div
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)' }}
                >
                  {hub.day} · {hub.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS THIS FOR YOU? ──────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--soft-green)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center" style={{ color: 'var(--green)' }}>
            Is this for you?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <p className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--dark-green)' }}>
                Great fit ✓
              </p>
              <ul className="space-y-3">
                {isForYouYes.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} />
                    <span className="text-sm" style={{ color: 'var(--foreground)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <p className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--muted-color)' }}>
                Probably not for you ✗
              </p>
              <ul className="space-y-3">
                {isForYouNo.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <X size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#DC2626', opacity: 0.6 }} />
                    <span className="text-sm" style={{ color: 'var(--muted-color)' }}>{item}</span>
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
