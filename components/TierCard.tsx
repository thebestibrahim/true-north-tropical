'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import type { Tier } from '@/lib/tiers'
import { earlyBirdWindow } from '@/lib/tiers'

type Props = {
  tier: Tier
  compact?: boolean
}

export default function TierCard({ tier, compact = false }: Props) {
  const isAlaCarte = tier.id === 'alacarte'
  const hasBonus = tier.bonus > 0

  const handleCta = () => {
    window.location.href = `mailto:truenorthtropical@gmail.com?subject=Farm Share Inquiry — ${tier.name}`
  }

  if (compact) {
    return (
      <div
        className="rounded-2xl p-5 flex flex-col gap-2 transition-all hover:-translate-y-0.5"
        style={{
          backgroundColor: tier.highlight ? 'var(--green)' : '#FFFFFF',
          border: tier.highlight ? '2px solid var(--green)' : '1px solid var(--leaf)',
          boxShadow: tier.highlight ? '0 8px 32px rgba(63,111,70,0.18)' : 'none',
        }}
      >
        {tier.badge && (
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
            style={{
              backgroundColor: tier.highlight ? 'var(--orange)' : 'var(--soft-green)',
              color: tier.highlight ? '#FFFFFF' : 'var(--dark-green)',
            }}
          >
            {tier.badge}
          </span>
        )}
        <h3 className="font-serif text-lg" style={{ color: tier.highlight ? '#FFFFFF' : 'var(--green)' }}>
          {tier.name}
        </h3>
        {!isAlaCarte ? (
          <div>
            <p
              className="font-serif text-2xl font-bold"
              style={{ color: tier.highlight ? '#fff' : 'var(--brown)' }}
            >
              ${tier.walletValue}
              <span className="text-sm font-normal ml-1" style={{ color: tier.highlight ? 'rgba(255,255,255,0.65)' : 'var(--muted-color)' }}>
                wallet
              </span>
            </p>
            {hasBonus && (
              <p className="text-xs mt-0.5" style={{ color: tier.highlight ? 'rgba(255,255,255,0.55)' : 'var(--muted-color)' }}>
                Pay ${tier.price} · +{tier.bonus}% early bird bonus
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm" style={{ color: 'var(--muted-color)' }}>No upfront cost · $60 min order</p>
        )}
        <Link
          href="/farm-share#tiers"
          className="text-sm font-medium mt-1"
          style={{ color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--orange)' }}
        >
          {tier.cta}
        </Link>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1"
      style={{
        backgroundColor: tier.highlight ? 'var(--green)' : '#FFFFFF',
        border: tier.highlight ? '2px solid var(--green)' : '1px solid var(--leaf)',
        boxShadow: tier.highlight ? '0 16px 48px rgba(63,111,70,0.20)' : '0 2px 12px rgba(0,0,0,0.04)',
        position: 'relative',
      }}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: tier.highlight ? 'var(--orange)' : 'var(--soft-green)',
              color: tier.highlight ? '#FFFFFF' : 'var(--dark-green)',
            }}
          >
            {tier.highlight && '⭐ '}{tier.badge}
          </span>
        </div>
      )}

      {/* Name */}
      <h3 className="font-serif text-2xl mb-2" style={{ color: tier.highlight ? '#FFFFFF' : 'var(--green)' }}>
        {tier.name}
      </h3>

      {/* Price block */}
      {!isAlaCarte ? (
        <div className="mb-4">
          {/* Wallet value — the headline number */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl font-bold" style={{ color: tier.highlight ? '#FFFFFF' : 'var(--brown)' }}>
              ${tier.walletValue}
            </span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: tier.highlight ? 'rgba(255,255,255,0.15)' : 'var(--soft-green)',
                color: tier.highlight ? '#fff' : 'var(--dark-green)',
              }}
            >
              wallet value
            </span>
          </div>

          {/* Investment breakdown */}
          <p className="text-xs mt-1.5" style={{ color: tier.highlight ? 'rgba(255,255,255,0.60)' : 'var(--muted-color)' }}>
            Pay ${tier.price} + {tier.bonus}% bonus = ${tier.walletValue}
          </p>

          {/* Early bird notice */}
          {hasBonus && (
            <p
              className="text-xs mt-1 font-medium"
              style={{ color: tier.highlight ? 'rgba(232,125,47,0.95)' : 'var(--orange)' }}
            >
              ⏰ Early Bird bonus only — {earlyBirdWindow.label}
            </p>
          )}

          {/* Checkout savings chip */}
          <div
            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mt-2"
            style={{
              backgroundColor: tier.highlight ? 'rgba(255,255,255,0.12)' : '#FFF0E6',
              color: tier.highlight ? '#fff' : 'var(--dark-orange)',
            }}
          >
            {tier.checkoutSavings} at checkout
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <span className="font-serif text-2xl" style={{ color: 'var(--brown)' }}>
            Pay as you go
          </span>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted-color)' }}>
            $60 minimum per order · No upfront payment
          </p>
        </div>
      )}

      {/* Tier-specific perks */}
      <ul className="flex-1 space-y-2 mb-5">
        {tier.perks.map(perk => (
          <li key={perk} className="flex items-start gap-2">
            <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: tier.highlight ? 'rgba(255,255,255,0.80)' : 'var(--green)' }} />
            <span className="text-sm" style={{ color: tier.highlight ? 'rgba(255,255,255,0.82)' : 'var(--foreground)' }}>
              {perk}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {isAlaCarte ? (
        <Link href="/shop">
          <button
            className="w-full h-11 rounded-xl text-sm font-semibold border transition-all hover:bg-[var(--soft-green)]"
            style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
          >
            {tier.cta}
          </button>
        </Link>
      ) : (
        <button
          onClick={handleCta}
          className="w-full h-11 rounded-xl text-sm font-semibold shimmer-btn transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF' }}
        >
          {tier.cta}
        </button>
      )}
    </div>
  )
}
