'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import NewsletterSection from '@/components/NewsletterSection'

type Inquiry = 'general' | 'wholesale' | 'farm-share' | 'delivery' | 'vendor'

const inquiryOptions: { value: Inquiry; label: string }[] = [
  { value: 'general',    label: 'General question' },
  { value: 'wholesale',  label: 'Wholesale partnership' },
  { value: 'farm-share', label: 'Farm Share / CSA' },
  { value: 'delivery',   label: 'Pickup & delivery' },
  { value: 'vendor',     label: 'Become a vendor on our platform' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'general' as Inquiry,
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSubmitted(true)
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
            We would love to hear from you
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
            Get in touch.
          </h1>
          <p
            className="text-base"
            style={{ color: 'var(--muted-color)', fontWeight: 300, maxWidth: '460px', lineHeight: 1.7 }}
          >
            Whether you are interested in wholesale, a farm share, or just have a question about our produce, we are here.
          </p>
        </div>
      </section>

      {/* ── MAIN ──────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-14">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--green)' }}>
                Contact details
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: 'truenorthtropical@gmail.com', href: 'mailto:truenorthtropical@gmail.com' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '226-868-3651', href: 'tel:2268683651' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Baden, Ontario, Canada', href: undefined },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--soft-green)', color: 'var(--green)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted-color)' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-sm hover:text-[var(--orange)] transition-colors" style={{ color: 'var(--green)' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: 'var(--green)' }}>{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl" style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}>
              <p className="font-serif text-lg mb-2" style={{ color: 'var(--green)' }}>
                Looking to sell on our platform?
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                We are building a marketplace for African and Caribbean produce growers. Register your interest as a vendor.
              </p>
              <Link
                href="/vendor"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--orange)' }}
              >
                Vendor registration <ArrowRight size={13} />
              </Link>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--muted-color)' }}>
                Season
              </p>
              <p className="text-sm" style={{ color: 'var(--green)' }}>June – October 2026</p>
              <p className="text-xs mt-1" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Farm share early bird: April 6 – 20
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
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
                  Message sent!
                </h3>
                <p className="text-base max-w-xs" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                  We will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1.5px solid var(--leaf)',
                        backgroundColor: '#fafafa',
                        color: 'var(--green)',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@email.com"
                      className="w-full h-12 px-4 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1.5px solid var(--leaf)',
                        backgroundColor: '#fafafa',
                        color: 'var(--green)',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="226-000-0000"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: '1.5px solid var(--leaf)',
                      backgroundColor: '#fafafa',
                      color: 'var(--green)',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    What is this about?
                  </label>
                  <select
                    value={form.inquiry}
                    onChange={e => setForm(f => ({ ...f, inquiry: e.target.value as Inquiry }))}
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: '1.5px solid var(--leaf)',
                      backgroundColor: '#fafafa',
                      color: 'var(--green)',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  >
                    {inquiryOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      border: '1.5px solid var(--leaf)',
                      backgroundColor: '#fafafa',
                      color: 'var(--green)',
                      fontFamily: 'var(--font-sans)',
                      lineHeight: 1.6,
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>

                <button
                  type="submit"
                  className="shimmer-btn w-full h-12 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
