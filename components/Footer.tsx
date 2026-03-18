'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--green)', color: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(245,241,232,0.15)' }}
              >
                <Leaf size={16} style={{ color: 'var(--cream)' }} />
              </div>
              <span className="font-serif text-lg" style={{ color: 'var(--cream)' }}>
                True North Tropical
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(245,241,232,0.75)', fontFamily: 'var(--font-sans)' }}
            >
              Afro-heritage vegetables grown with love in Baden, Ontario. Food that feels like home.
            </p>
            <p
              className="text-xs mt-4"
              style={{ color: 'rgba(245,241,232,0.5)', fontFamily: 'var(--font-sans)' }}
            >
              EFAO Member · No Synthetic Chemicals · Heirloom Seeds
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-serif text-base mb-4"
              style={{ color: 'var(--cream)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/shop',        label: 'Farm Store' },
                { href: '/farm-share',  label: 'Farm Share CSA' },
                { href: '/about',       label: 'Our Story' },
                { href: '/faq',         label: 'FAQ' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-serif text-base mb-4"
              style={{ color: 'var(--cream)' }}
            >
              Get in Touch
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: 'rgba(245,241,232,0.75)', fontFamily: 'var(--font-sans)' }}
            >
              <li>
                <a
                  href="mailto:truenorthtropical@gmail.com"
                  className="transition-colors hover:text-[var(--orange)]"
                  style={{ color: 'var(--orange)' }}
                >
                  truenorthtropical@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:2268683651"
                  className="transition-colors hover:text-[var(--orange)]"
                  style={{ color: 'rgba(245,241,232,0.75)' }}
                >
                  226-868-3651
                </a>
              </li>
              <li style={{ color: 'rgba(245,241,232,0.75)' }}>Baden, Ontario, Canada</li>
              <li className="pt-2">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(245,241,232,0.1)',
                    color: 'rgba(245,241,232,0.6)',
                  }}
                >
                  Season: June – October 2026
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="font-serif text-base mb-4"
              style={{ color: 'var(--cream)' }}
            >
              Follow Along
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: 'rgba(245,241,232,0.6)', fontFamily: 'var(--font-sans)' }}
            >
              @truenorthtropical
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: 'https://instagram.com/truenorthtropical',
                  icon: <Instagram size={18} />,
                  label: 'Instagram',
                },
                {
                  href: 'https://facebook.com/truenorthtropical',
                  icon: <Facebook size={18} />,
                  label: 'Facebook',
                },
                {
                  href: 'https://youtube.com/@truenorthtropical',
                  icon: <Youtube size={18} />,
                  label: 'YouTube',
                },
                {
                  href: 'https://tiktok.com/@truenorthtropical',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z"/>
                    </svg>
                  ),
                  label: 'TikTok',
                },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(245,241,232,0.12)',
                    color: 'var(--cream)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--orange)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(245,241,232,0.12)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(245,241,232,0.15)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'rgba(245,241,232,0.5)', fontFamily: 'var(--font-sans)' }}
          >
            © 2026 True North Tropical. Grown with love in Ontario.
          </p>
          <div
            className="flex gap-4 text-xs"
            style={{ color: 'rgba(245,241,232,0.35)', fontFamily: 'var(--font-sans)' }}
          >
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
