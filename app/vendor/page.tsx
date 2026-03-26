'use client'

import { useState } from 'react'
import { Check, ArrowRight, Leaf, ShoppingBag, Users, TrendingUp } from 'lucide-react'
import NewsletterSection from '@/components/NewsletterSection'

const perks = [
  {
    icon: <ShoppingBag size={22} />,
    title: 'Access our customer base',
    desc: 'Reach hundreds of African and Caribbean diaspora families in Waterloo Region who already buy from us.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Focus on what you grow',
    desc: 'We handle the platform, payments, and logistics. You focus on producing quality food.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Weekly harvest listings',
    desc: 'List what you have available each week. No long-term commitments to unsold inventory.',
  },
  {
    icon: <Users size={22} />,
    title: 'Join a community of growers',
    desc: 'Be part of a network building food sovereignty for Black and immigrant communities in Ontario.',
  },
]

export default function VendorPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    farmName: '',
    email: '',
    phone: '',
    location: '',
    crops: '',
    experience: '',
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setSubmitted(true)
  }

  const inputStyle = {
    border: '1.5px solid var(--leaf)',
    backgroundColor: '#fafafa',
    color: 'var(--green)',
    fontFamily: 'var(--font-sans)',
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--orange)' }}
          >
            Grow with us
          </p>
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              color: 'var(--green)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Become a vendor.
          </h1>
          <p
            className="text-base"
            style={{ color: 'var(--muted-color)', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}
          >
            We are building Ontario&apos;s first dedicated marketplace for Afro-heritage and Caribbean produce. If you grow, we want to hear from you.
          </p>
        </div>
      </section>

      {/* ── WHY ───────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl mb-10 text-center" style={{ color: 'var(--green)' }}>
            Why sell on True North Tropical?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {perks.map(perk => (
              <div
                key={perk.title}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  {perk.icon}
                </div>
                <div>
                  <h3 className="font-serif text-base mb-1" style={{ color: 'var(--green)' }}>
                    {perk.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTRATION FORM ─────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--green)' }}>
              Register your interest
            </h2>
            <p className="text-base" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
              Fill in the form below and we will be in touch before the 2026 season opens.
            </p>
          </div>

          {submitted ? (
            <div
              className="flex flex-col items-center justify-center gap-4 py-20 text-center rounded-3xl"
              style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--orange)' }}
              >
                <Check size={32} color="#fff" />
              </div>
              <h3 className="font-serif text-2xl" style={{ color: 'var(--green)' }}>
                Registration received!
              </h3>
              <p className="text-base max-w-xs" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                We will reach out to you before the 2026 season with next steps.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-3xl"
              style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Your name *
                  </label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Full name"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Farm / business name
                  </label>
                  <input
                    type="text"
                    value={form.farmName}
                    onChange={e => setForm(f => ({ ...f, farmName: e.target.value }))}
                    placeholder="Your farm name"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Email *
                  </label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@email.com"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="226-000-0000"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                  Farm location / city
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                  placeholder="e.g. Kitchener, ON"
                  className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                  What do you grow?
                </label>
                <textarea
                  rows={3}
                  value={form.crops}
                  onChange={e => setForm(f => ({ ...f, crops: e.target.value }))}
                  placeholder="e.g. Waterleaf, Ugu leaf, Callaloo, Garden Egg..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ ...inputStyle, lineHeight: 1.6 }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                  Years of farming experience
                </label>
                <select
                  value={form.experience}
                  onChange={e => setForm(f => ({ ...f, experience: e.target.value }))}
                  className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                >
                  <option value="">Select...</option>
                  <option value="less-1">Less than 1 year</option>
                  <option value="1-3">1 – 3 years</option>
                  <option value="3-5">3 – 5 years</option>
                  <option value="5-10">5 – 10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                  Anything else you want to tell us?
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about your farm, your practices, or any questions you have..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ ...inputStyle, lineHeight: 1.6 }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                />
              </div>

              <button
                type="submit"
                className="shimmer-btn w-full h-12 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
              >
                Submit registration <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
