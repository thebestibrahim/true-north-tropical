'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import type { Tier } from '@/lib/tiers'

type Props = {
  tier: Tier
  compact?: boolean
}

export default function TierCard({ tier, compact = false }: Props) {
  const isAlaCarte = tier.id === 'alacarte'

  if (compact) {
    return (
      <div
        className="rounded-2xl p-5 flex flex-col gap-2 transition-all hover:-translate-y-1"
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
              fontFamily: 'var(--font-sans)',
            }}
          >
            {tier.badge}
          </span>
        )}
        <h3
          className="font-serif text-lg"
          style={{ color: tier.highlight ? '#FFFFFF' : 'var(--green)' }}
        >
          {tier.name}
        </h3>
        {!isAlaCarte ? (
          <p
            className="font-serif text-2xl font-bold"
            style={{ color: tier.highlight ? 'rgba(255,255,255,0.95)' : 'var(--brown)' }}
          >
            ${tier.walletValue}
            <span
              className="text-sm font-normal ml-1"
              style={{
                color: tier.highlight ? 'rgba(255,255,255,0.7)' : 'var(--muted-color)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              wallet
            </span>
          </p>
        ) : (
          <p
            className="text-sm"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
          >
            No upfront cost
          </p>
        )}
        <Link
          href="/farm-share#tiers"
          className="text-sm font-medium mt-1"
          style={{
            color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--orange)',
            fontFamily: 'var(--font-sans)',
          }}
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
      {/* Popular badge */}
      {tier.badge && (
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: tier.highlight ? 'var(--orange)' : 'var(--soft-green)',
              color: tier.highlight ? '#FFFFFF' : 'var(--dark-green)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {tier.highlight && '⭐ '}
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3
        className="font-serif text-2xl mb-1"
        style={{ color: tier.highlight ? '#FFFFFF' : 'var(--green)' }}
      >
        {tier.name}
      </h3>

      {/* Price block */}
      {!isAlaCarte ? (
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="font-serif text-4xl font-bold"
            style={{ color: tier.highlight ? '#FFFFFF' : 'var(--brown)' }}
          >
            ${tier.walletValue}
          </span>
          <span
            className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: tier.highlight ? 'rgba(255,255,255,0.18)' : 'var(--soft-green)',
              color: tier.highlight ? '#FFFFFF' : 'var(--dark-green)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            +{tier.bonus}%
          </span>
        </div>
      ) : (
        <div className="mb-1">
          <span
            className="font-serif text-2xl"
            style={{ color: 'var(--brown)' }}
          >
            Pay as you go
          </span>
        </div>
      )}

      {!isAlaCarte && (
        <p
          className="text-xs mb-4"
          style={{
            color: tier.highlight ? 'rgba(255,255,255,0.65)' : 'var(--muted-color)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          (${tier.price} invested + {tier.bonus}% bonus)
        </p>
      )}

      {isAlaCarte && (
        <p
          className="text-xs mb-4"
          style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
        >
          ${tier.minOrder} minimum per order
        </p>
      )}

      {/* Perks */}
      <ul className="flex-1 space-y-2.5 mb-6">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2">
            <Check
              size={14}
              className="flex-shrink-0 mt-0.5"
              style={{ color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--green)' }}
            />
            <span
              className="text-sm"
              style={{
                color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--foreground)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {perk}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        className="w-full h-12 rounded-xl text-sm font-semibold shimmer-btn transition-all hover:opacity-90 active:scale-95"
        style={{
          backgroundColor: tier.highlight ? 'var(--orange)' : 'var(--orange)',
          color: '#FFFFFF',
          fontFamily: 'var(--font-sans)',
        }}
        onClick={() => {
          window.location.href = 'mailto:truenorthtropical@gmail.com?subject=Farm Share Inquiry - ' + tier.name
        }}
      >
        {tier.cta}
      </button>
    </div>
  )
}
