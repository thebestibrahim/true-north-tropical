'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wallet, ShoppingBag, CalendarDays, MapPin, LogOut, ChevronRight, Package } from 'lucide-react'

// Mock data — replace with real API calls
const mockUser = {
  name: 'Folake Adeyemi',
  email: 'folake@email.com',
  tier: 'Essential Share',
  walletBalance: 249.50,
  walletTotal: 321.00,
  walletUsed: 71.50,
  nextPickup: 'Thursday, June 12 · Doon Pioneer Village, 4–7pm',
}

const mockOrders = [
  { id: '#001', date: 'Jun 8, 2026', items: 'Waterleaf × 2, Ugu Leaf × 1, Scent Leaf × 1', total: 19.96, status: 'Delivered' },
  { id: '#002', date: 'Jun 1, 2026', items: 'Habanero Peppers × 1kg, Callaloo × 2', total: 22.97, status: 'Delivered' },
  { id: '#003', date: 'May 25, 2026', items: 'Garden Egg × 6, African Corn × 2', total: 14.94, status: 'Delivered' },
]

type Tab = 'overview' | 'orders' | 'share'

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>('overview')
  const walletPercent = Math.round(((mockUser.walletTotal - mockUser.walletBalance) / mockUser.walletTotal) * 100)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      {/* Header */}
      <div className="pt-24 pb-8 px-4" style={{ backgroundColor: 'var(--green)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm mb-1" style={{ color: 'rgba(245,241,232,0.65)', fontFamily: 'var(--font-sans)' }}>
              Welcome back
            </p>
            <h1 className="font-serif text-3xl" style={{ color: 'var(--cream)' }}>
              {mockUser.name}
            </h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(245,241,232,0.55)', fontFamily: 'var(--font-sans)' }}>
              {mockUser.email}
            </p>
          </div>
          <button
            onClick={() => { window.location.href = '/login' }}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl transition-all hover:bg-white/10"
            style={{ color: 'rgba(245,241,232,0.7)', border: '1px solid rgba(245,241,232,0.2)' }}
          >
            <LogOut size={15} /> Sign out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 border-b" style={{ backgroundColor: '#fff', borderColor: 'var(--leaf)' }}>
        <div className="max-w-4xl mx-auto flex gap-0">
          {([
            { key: 'overview', label: 'Overview', icon: <Wallet size={15} /> },
            { key: 'orders',   label: 'Order history', icon: <Package size={15} /> },
            { key: 'share',    label: 'My Farm Share', icon: <CalendarDays size={15} /> },
          ] as { key: Tab; label: string; icon: React.ReactNode }[]).map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors"
              style={{
                borderColor: tab === t.key ? 'var(--orange)' : 'transparent',
                color: tab === t.key ? 'var(--orange)' : 'var(--muted-color)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* ── OVERVIEW ──── */}
        {tab === 'overview' && (
          <div className="space-y-6">
            {/* Wallet card */}
            <div
              className="p-7 rounded-3xl"
              style={{ backgroundColor: 'var(--green)', color: 'var(--cream)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Wallet size={16} style={{ color: 'var(--orange)' }} />
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(245,241,232,0.6)' }}>
                  Farm Share Wallet
                </p>
              </div>
              <p className="font-serif text-5xl mt-2 mb-1" style={{ color: '#fff' }}>
                ${mockUser.walletBalance.toFixed(2)}
              </p>
              <p className="text-sm" style={{ color: 'rgba(245,241,232,0.6)' }}>
                remaining of ${mockUser.walletTotal.toFixed(2)} wallet · ${mockUser.walletUsed.toFixed(2)} spent
              </p>

              {/* Progress bar */}
              <div className="mt-5 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${walletPercent}%`, backgroundColor: 'var(--orange)' }}
                />
              </div>
              <p className="text-xs mt-2" style={{ color: 'rgba(245,241,232,0.45)' }}>
                {walletPercent}% of wallet used
              </p>

              <div className="flex gap-3 mt-6">
                <Link
                  href="/shop"
                  className="shimmer-btn h-10 px-5 rounded-xl text-sm font-semibold flex items-center gap-1.5"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  <ShoppingBag size={14} /> Shop now
                </Link>
                <button
                  className="h-10 px-5 rounded-xl text-sm font-medium transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(245,241,232,0.25)', color: 'rgba(245,241,232,0.8)' }}
                >
                  Top up wallet
                </button>
              </div>
            </div>

            {/* Next pickup */}
            <div
              className="p-6 rounded-2xl flex items-start gap-4"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'var(--soft-green)' }}
              >
                <MapPin size={20} style={{ color: 'var(--green)' }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--muted-color)' }}>
                  Next pickup
                </p>
                <p className="font-serif text-base" style={{ color: 'var(--green)' }}>
                  {mockUser.nextPickup}
                </p>
              </div>
            </div>

            {/* Tier */}
            <div
              className="p-6 rounded-2xl flex items-center justify-between"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--muted-color)' }}>
                  Current plan
                </p>
                <p className="font-serif text-xl" style={{ color: 'var(--green)' }}>
                  {mockUser.tier}
                </p>
              </div>
              <Link
                href="/farm-share"
                className="flex items-center gap-1 text-sm font-medium"
                style={{ color: 'var(--orange)' }}
              >
                Upgrade <ChevronRight size={15} />
              </Link>
            </div>

            {/* Recent orders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-xl" style={{ color: 'var(--green)' }}>Recent orders</h2>
                <button onClick={() => setTab('orders')} className="text-sm font-medium" style={{ color: 'var(--orange)' }}>
                  See all
                </button>
              </div>
              <div className="space-y-3">
                {mockOrders.slice(0, 2).map(order => (
                  <div
                    key={order.id}
                    className="p-4 rounded-2xl flex items-center justify-between"
                    style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
                  >
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--green)' }}>{order.items}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted-color)' }}>{order.date}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-sm font-semibold" style={{ color: 'var(--green)' }}>${order.total.toFixed(2)}</p>
                      <p
                        className="text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block"
                        style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)' }}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── ORDER HISTORY ──── */}
        {tab === 'orders' && (
          <div>
            <h2 className="font-serif text-2xl mb-6" style={{ color: 'var(--green)' }}>Order history</h2>
            <div className="space-y-4">
              {mockOrders.map(order => (
                <div
                  key={order.id}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold" style={{ color: 'var(--muted-color)' }}>
                          {order.id}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)' }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--green)' }}>{order.items}</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--muted-color)' }}>{order.date}</p>
                    </div>
                    <p className="font-serif text-xl flex-shrink-0" style={{ color: 'var(--green)' }}>
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FARM SHARE ──── */}
        {tab === 'share' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl" style={{ color: 'var(--green)' }}>My Farm Share</h2>

            <div
              className="p-7 rounded-3xl"
              style={{ backgroundColor: 'var(--green)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(245,241,232,0.55)' }}>
                Current plan
              </p>
              <h3 className="font-serif text-3xl mb-1" style={{ color: '#fff' }}>
                {mockUser.tier}
              </h3>
              <p className="text-sm mb-5" style={{ color: 'rgba(245,241,232,0.6)' }}>
                Season: June – October 2026
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Wallet loaded', value: `$${mockUser.walletTotal.toFixed(2)}` },
                  { label: 'Remaining', value: `$${mockUser.walletBalance.toFixed(2)}` },
                  { label: 'Orders placed', value: mockOrders.length.toString() },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <p className="font-serif text-2xl" style={{ color: '#fff' }}>{stat.value}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(245,241,232,0.5)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <h3 className="font-serif text-lg mb-4" style={{ color: 'var(--green)' }}>
                Pickup schedule
              </h3>
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--green)' }}>
                    Doon Pioneer Village
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--muted-color)' }}>
                    Thursdays 4 – 7pm · Kitchener South
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/farm-share"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--orange)' }}
              >
                View all share tiers <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
