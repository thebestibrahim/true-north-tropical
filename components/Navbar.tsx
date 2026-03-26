'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Menu, ShoppingBag, ChevronDown, User } from 'lucide-react'
import CountdownBadge from './CountdownBadge'

const shopDropdown = [
  { href: '/shop',              label: 'All Products' },
  { href: '/shop',              label: 'Produce' },
  { href: '/farm-share',        label: 'Farm Share' },
  { href: '/shop#nursery',      label: 'Nursery' },
  { href: '/shop#garden',       label: 'Garden Consult' },
  { href: '/shop#gift-cards',   label: 'Gift Cards' },
]

const exploreDropdown = [
  { href: '/explore',                     label: 'All Articles' },
  { href: '/explore?cat=recipe',          label: 'Recipes' },
  { href: '/explore?cat=ingredient',      label: 'Ingredient Guides' },
  { href: '/explore?cat=farm-story',      label: 'Farm Stories' },
  { href: '/explore?cat=csa',             label: 'CSA Guide' },
]

const navLinks = [
  { href: '/',             label: 'Home',       dropdown: null },
  { href: '/how-it-works', label: 'How it works', dropdown: null },
  { href: '/shop',         label: 'Shop',       dropdown: shopDropdown },
  { href: '/about',        label: 'About',      dropdown: null },
  { href: '/explore',      label: 'Explore',    dropdown: exploreDropdown },
]

function DropdownMenu({ items }: { items: { href: string; label: string }[] }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 rounded-2xl shadow-lg min-w-[180px]"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--leaf)',
        zIndex: 100,
      }}
    >
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm transition-colors hover:bg-[var(--soft-green)]"
          style={{ color: 'var(--green)', fontFamily: 'var(--font-sans)' }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { itemCount } = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevCount, setPrevCount] = useState(0)
  const [badgePulse, setBadgePulse] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

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
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--orange)]"
                  style={{
                    color: 'var(--green)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={13}
                      className="transition-transform"
                      style={{
                        transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: 'var(--muted-color)',
                      }}
                    />
                  )}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <DropdownMenu items={link.dropdown} />
                )}
              </div>
            ))}
          </div>

          {/* Right: Countdown + CTA + Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Countdown / season badge */}
            <CountdownBadge className="hidden lg:flex" />

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

            {/* Sign in */}
            <Link
              href="/login"
              className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center transition-colors hover:bg-[var(--soft-green)]"
              aria-label="Sign in"
            >
              <User size={20} style={{ color: 'var(--green)' }} />
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
            <SheetTitle>
              <Image src="/tnt-logo.webp" alt="True North Tropical" width={120} height={120} className="h-14 w-auto" />
            </SheetTitle>
            <p className="text-xs" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
              🌿 Grown in Baden, Ontario
            </p>
          </SheetHeader>

          <nav className="px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center h-11 text-base font-medium rounded-lg px-3 transition-colors hover:bg-[var(--soft-green)]"
                  style={{ color: 'var(--green)', fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
                {/* Mobile sub-items for Shop */}
                {link.dropdown && link.label === 'Shop' && (
                  <div className="ml-3 mt-1 mb-2 space-y-0.5">
                    {link.dropdown.slice(1).map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center h-8 text-sm rounded-lg px-3 transition-colors hover:bg-[var(--soft-green)]"
                        style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 pb-6 border-t pt-4" style={{ borderColor: 'var(--leaf)' }}>
            <CountdownBadge className="w-full justify-center text-xs py-2 mb-4" />
            <Link href="/farm-share" onClick={() => setMobileOpen(false)}>
              <Button
                className="w-full h-11 shimmer-btn"
                style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF' }}
              >
                Get Farm Share
              </Button>
            </Link>
            <div className="mt-4 flex gap-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex-1 h-9 rounded-xl text-sm font-medium flex items-center justify-center border transition-colors hover:bg-[var(--soft-green)]"
                style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 h-9 rounded-xl text-sm font-medium flex items-center justify-center"
                style={{ backgroundColor: 'var(--green)', color: '#fff' }}
              >
                Sign up
              </Link>
            </div>
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
