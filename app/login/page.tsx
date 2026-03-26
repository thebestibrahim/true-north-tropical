'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Placeholder — connect to auth backend
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/account'
    }, 1200)
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
          <h1 className="font-serif text-3xl mb-2" style={{ color: 'var(--green)' }}>
            Welcome back.
          </h1>
          <p className="text-sm mb-8" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
            Sign in to view your farm share balance and order history.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                Email
              </label>
              <input
                type="email" required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full h-12 px-4 rounded-xl text-sm outline-none"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--green)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--leaf)')}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--muted-color)' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Your password"
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

            <div className="flex justify-end">
              <Link
                href="#"
                className="text-xs"
                style={{ color: 'var(--orange)' }}
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="shimmer-btn w-full h-12 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-2"
              style={{ backgroundColor: loading ? 'var(--leaf)' : 'var(--orange)', color: '#fff' }}
            >
              {loading ? 'Signing in...' : (<>Sign in <ArrowRight size={16} /></>)}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--leaf)' }}>
            <p className="text-sm" style={{ color: 'var(--muted-color)' }}>
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-semibold" style={{ color: 'var(--orange)' }}>
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--muted-color)', opacity: 0.7 }}>
          By signing in you agree to our{' '}
          <span style={{ color: 'var(--green)' }}>Terms of Service</span>.
        </p>
      </div>
    </div>
  )
}
