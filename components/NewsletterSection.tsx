'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--dark-green)' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="text-sm font-medium mb-3 uppercase tracking-widest"
          style={{ color: 'rgba(245,241,232,0.6)', fontFamily: 'var(--font-sans)' }}
        >
          Stay in the loop
        </p>

        {/* Headline */}
        <h2
          className="font-serif text-4xl sm:text-5xl mb-3"
          style={{ color: 'var(--cream)' }}
        >
          Be first to know what&apos;s ready.
        </h2>

        <p
          className="text-base mb-10"
          style={{ color: 'rgba(245,241,232,0.7)', fontFamily: 'var(--font-sans)' }}
        >
          Weekly harvest alerts. No spam.
        </p>

        {submitted ? (
          /* Success state */
          <div
            className="flex flex-col items-center gap-3 py-8 blur-fade"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--orange)' }}
            >
              <Check size={28} color="#FFFFFF" />
            </div>
            <p className="font-serif text-xl" style={{ color: 'var(--cream)' }}>
              You&apos;re on the list!
            </p>
            <p className="text-sm" style={{ color: 'rgba(245,241,232,0.65)', fontFamily: 'var(--font-sans)' }}>
              Watch your inbox each Sunday for fresh harvest updates.
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            {/* Animated beam border on input */}
            <div
              className="flex-1 rounded-full p-[2px] transition-all"
              style={{
                background: focused
                  ? 'linear-gradient(90deg, var(--orange), var(--leaf), var(--orange))'
                  : 'rgba(245,241,232,0.2)',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="your@email.com"
                required
                className="w-full h-12 px-5 rounded-full text-sm outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-sans)',
                  border: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              className="h-12 px-6 rounded-full text-sm font-semibold shimmer-btn flex-shrink-0 transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: 'var(--orange)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Subscribe
            </button>
          </form>
        )}

        {!submitted && (
          <p
            className="text-xs mt-4"
            style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-sans)' }}
          >
            No spam, ever. Unsubscribe anytime.
          </p>
        )}
      </div>
    </section>
  )
}
