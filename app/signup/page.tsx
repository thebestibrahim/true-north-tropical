'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'

export default function SignupPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('success')
  }

  const inputStyle = {
    border: '1.5px solid var(--leaf)',
    backgroundColor: '#fafafa',
    color: 'var(--green)',
    fontFamily: 'var(--font-sans)',
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/tnt-logo.webp"
              alt="True North Tropical"
              width={120}
              height={120}
              className="h-14 w-auto mx-auto"
            />
          </Link>
        </div>

        <div
          className="p-8 rounded-3xl"
          style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
        >
          {step === 'success' ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--orange)' }}
              >
                <Check size={32} color="#fff" />
              </div>
              <h2 className="font-serif text-2xl" style={{ color: 'var(--green)' }}>
                Account created!
              </h2>
              <p className="text-sm" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Welcome to True North Tropical. Check your email to verify your account.
              </p>
              <Link
                href="/account"
                className="shimmer-btn mt-4 h-12 px-8 rounded-xl text-base font-semibold flex items-center gap-2"
                style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
              >
                Go to my account <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <h1 className="font-serif text-3xl mb-2" style={{ color: 'var(--green)' }}>
                Create an account.
              </h1>
              <p className="text-sm mb-8" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Track your farm share balance, order history, and manage deliveries.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Full name *
                  </label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                  />
                </div>

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
                    Phone (optional)
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

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      required
                      minLength={8}
                      value={form.password}
                      onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min. 8 characters"
                      className="w-full h-12 px-4 pr-12 rounded-xl text-sm outline-none"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(v => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: 'var(--muted-color)' }}
                    >
                      {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="shimmer-btn w-full h-12 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-2"
                  style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
                >
                  Create account <ArrowRight size={16} />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--leaf)' }}>
                <p className="text-sm" style={{ color: 'var(--muted-color)' }}>
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold" style={{ color: 'var(--orange)' }}>
                    Sign in
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
