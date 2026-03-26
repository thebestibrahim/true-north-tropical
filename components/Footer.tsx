'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--soft-green)', color: 'var(--green)', borderTop: '1px solid var(--leaf)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="mb-4">
              {/* Logo — natural colours on cream background */}
              <Image
                src="/tnt-logo.webp"
                alt="True North Tropical"
                width={200}
                height={200}
                className="h-28 w-auto"
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)', opacity: 0.8 }}
            >
              Afro-heritage vegetables grown with love in Baden, Ontario. Food that feels like home.
            </p>
            <p
              className="text-xs mt-4"
              style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)' }}
            >
              ✓No GMO &nbsp;✓Locally grown &nbsp;✓No chemicals
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-serif text-base mb-4"
              style={{ color: 'var(--green)' }}
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
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green)')}
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
              style={{ color: 'var(--green)' }}
            >
              Get in Touch
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)', opacity: 0.85 }}
            >
              <li>
                <a
                  href="mailto:truenorthtropical@gmail.com"
                  className="transition-colors hover:text-[var(--green)]"
                  style={{ color: 'var(--orange)' }}
                >
                  truenorthtropical@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:2268683651"
                  className="transition-colors hover:text-[var(--orange)]"
                  style={{ color: 'var(--muted-color)' }}
                >
                  226-868-3651
                </a>
              </li>
              <li>Baden, Ontario, Canada</li>
              <li className="pt-2">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: 'var(--soft-green)',
                    color: 'var(--dark-green)',
                    border: '1px solid var(--leaf)',
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
              style={{ color: 'var(--green)' }}
            >
              Follow Along
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
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
                    backgroundColor: 'var(--soft-green)',
                    color: 'var(--green)',
                    border: '1px solid var(--leaf)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--orange)';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--orange)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--soft-green)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--green)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--leaf)'
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
          style={{ borderColor: 'var(--leaf)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)', opacity: 0.6 }}
          >
            © 2026 True North Tropical. Grown with love in Ontario.
          </p>
          <div
            className="flex gap-4 text-xs"
            style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-sans)', opacity: 0.45 }}
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
