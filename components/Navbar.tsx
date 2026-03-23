'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Menu, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { href: '/',               label: 'Home' },
  { href: '/how-it-works',   label: 'How it works' },
  { href: '/about',          label: 'About' },
  { href: '/explore',        label: 'Explore' },
]

export default function Navbar() {
  const { itemCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevCount, setPrevCount] = useState(0)
  const [badgePulse, setBadgePulse] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (itemCount > prevCount) {
      setBadgePulse(true)
      setTimeout(() => setBadgePulse(false), 300)
    }
    setPrevCount(itemCount)
  }, [itemCount, prevCount])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid var(--leaf)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/tnt-logo.webp"
              alt="True North Tropical"
              width={120}
              height={120}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[var(--orange)]"
                style={{
                  color: 'var(--green)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Badge + CTA + Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Season badge */}
            <Badge
              className="hidden lg:flex text-xs px-3 py-1"
              style={{
                backgroundColor: 'var(--soft-green)',
                color: 'var(--dark-green)',
                border: '1px solid var(--leaf)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              🌿 Season Opens June 2026
            </Badge>

            {/* Farm share CTA */}
            <Link href="/farm-share" className="hidden sm:block">
              <Button
                size="sm"
                className="shimmer-btn h-9 px-4 text-sm font-medium"
                style={{
                  backgroundColor: 'var(--orange)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Get Farm Share
              </Button>
            </Link>

            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:bg-[var(--soft-green)]"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} style={{ color: 'var(--green)' }} />
              {itemCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${badgePulse ? 'badge-bounce' : ''}`}
                  style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
                >
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={20} style={{ color: 'var(--green)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Mobile Nav Drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0" style={{ backgroundColor: '#FFFFFF' }}>
          <SheetHeader className="px-6 pt-6 pb-4 border-b" style={{ borderColor: 'var(--leaf)' }}>
            <div className="flex items-center justify-between">
              <SheetTitle>
                <Image src="/tnt-logo.webp" alt="True North Tropical" width={120} height={120} className="h-14 w-auto" />
              </SheetTitle>
              <button onClick={() => setMobileOpen(false)}>
                <X size={18} style={{ color: 'var(--muted-color)' }} />
              </button>
            </div>
            <p className="text-xs" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
              🌿 Grown in Baden, Ontario
            </p>
          </SheetHeader>

          <nav className="px-6 py-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center h-11 text-base font-medium rounded-lg px-3 transition-colors hover:bg-[var(--soft-green)]"
                style={{ color: 'var(--green)', fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-6 border-t pt-4" style={{ borderColor: 'var(--leaf)' }}>
            <Badge
              className="w-full justify-center text-xs py-2 mb-4"
              style={{
                backgroundColor: 'var(--soft-green)',
                color: 'var(--dark-green)',
                border: '1px solid var(--leaf)',
              }}
            >
              🌿 Season Opens June 2026
            </Badge>
            <Link href="/farm-share" onClick={() => setMobileOpen(false)}>
              <Button
                className="w-full h-11 shimmer-btn"
                style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF' }}
              >
                Get Farm Share
              </Button>
            </Link>
            <div className="mt-4 text-xs space-y-1" style={{ color: 'var(--muted-color)' }}>
              <p>📧 truenorthtropical@gmail.com</p>
              <p>📞 226-868-3651</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
