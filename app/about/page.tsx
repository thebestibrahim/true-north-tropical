import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NewsletterSection from '@/components/NewsletterSection'

const howWeGrow = [
  { icon: '🌿', label: 'No synthetic chemicals', desc: 'Ever.' },
  { icon: '🌾', label: 'Heirloom & open-pollinated seeds', desc: 'Preserving biodiversity.' },
  { icon: '✋', label: 'Hand harvested & inspected', desc: 'Every single bunch.' },
  { icon: '🏅', label: 'EFAO member', desc: 'Ecological Farmers Assoc. of Ontario.' },
  { icon: '🌍', label: 'Cultural heritage first', desc: 'Grown for diaspora communities.' },
]

const harvestCalendar: { crop: string; jun?: string; jul?: string; aug?: string; sep?: string }[] = [
  { crop: 'Waterleaf',         jun: '✓', jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'Ugu Leaf',          jun: '✓', jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'Lagos Spinach',     jun: '✓', jul: '✓', aug: '✓', sep: '' },
  { crop: 'Callaloo/Amaranth', jun: '✓', jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'Bitterleaf',        jun: '',  jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'Habanero Peppers',  jun: '',  jul: '',  aug: '✓', sep: '✓' },
  { crop: 'Cameroon Pepper',   jun: '',  jul: '',  aug: '✓', sep: '✓' },
  { crop: 'Garden Egg',        jun: '',  jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'African Corn',      jun: '',  jul: '✓', aug: '✓', sep: '' },
  { crop: 'Sweet Potato',      jun: '',  jul: '',  aug: '✓', sep: '✓' },
  { crop: 'Ginger',            jun: '',  jul: '',  aug: '✓', sep: '✓' },
  { crop: 'Scent Leaf',        jun: '✓', jul: '✓', aug: '✓', sep: '✓' },
  { crop: 'Kiwano Melon',      jun: '',  jul: '',  aug: '✓', sep: '✓' },
  { crop: 'Seeded Watermelon', jun: '',  jul: '',  aug: '✓', sep: '✓' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[65svh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&auto=format&fit=crop"
          alt="True North Tropical farm in Baden Ontario"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* [SWAP: full bleed farm landscape photo] */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(47,87,54,0.15) 0%, rgba(47,87,54,0.70) 100%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <h1
            className="font-serif blur-fade blur-fade-1"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Growing the real<br />flavours of home.
          </h1>
        </div>
      </section>

      {/* ── WHY ───────────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-5"
            style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
          >
            Why we grow
          </p>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Millions of Africans and Caribbean people in Canada wake up every day wanting to cook the food they grew up with — and can&apos;t find it. What they find is wilted, frozen, or grown without care. We started True North Tropical to fix that.
          </p>

          {/* Pull quote */}
          <blockquote
            className="font-serif italic text-2xl sm:text-3xl leading-relaxed pl-6 text-left"
            style={{
              color: 'var(--green)',
              borderLeft: '4px solid var(--orange)',
            }}
          >
            &ldquo;Food should feel familiar, nourishing, and celebrated — not tolerated.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── ARAMIDE'S STORY ───────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden blur-fade blur-fade-1">
              <Image
                src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=800&auto=format&fit=crop"
                alt="Aramide, founder of True North Tropical"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* [SWAP: Aramide portrait or farm action photo] */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(63,111,70,0.15) 0%, transparent 60%)' }}
              />
            </div>

            {/* Story */}
            <div className="blur-fade blur-fade-2">
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
              >
                Aramide&apos;s story
              </p>
              <h2
                className="font-serif text-4xl mb-6"
                style={{ color: 'var(--green)' }}
              >
                From boardroom<br />to farm.
              </h2>

              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                <p>
                  After years in the corporate world, Aramide found herself increasingly disconnected — not just from nature, but from the foods that grounded her. The ugu leaves she ate growing up in Nigeria. The scent leaf her grandmother grew outside the kitchen.
                </p>
                <p>
                  In 2019, she planted her first seeds in a Baden backyard. What started as a personal project became something much bigger when neighbours and friends started asking for extra bunches.
                </p>
                <p>
                  Through COVID, she kept growing. She joined the EFAO. She found land. And now she grows food for hundreds of families across Waterloo Region.
                </p>
              </div>

              {/* 3 key stats */}
              <div
                className="grid grid-cols-3 gap-4 mt-8 py-6 border-y"
                style={{ borderColor: 'var(--leaf)' }}
              >
                {[
                  { stat: '2019', label: 'Started in a backyard' },
                  { stat: '2020', label: 'Grew through COVID' },
                  { stat: '500+', label: 'Families served' },
                ].map(item => (
                  <div key={item.label} className="text-center">
                    <p className="font-serif text-2xl" style={{ color: 'var(--green)' }}>
                      {item.stat}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE GROW ───────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--soft-green)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-serif text-3xl mb-8 text-center"
            style={{ color: 'var(--green)' }}
          >
            How we grow
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {howWeGrow.map(item => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-serif text-base" style={{ color: 'var(--green)' }}>
                    {item.label}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARVEST CALENDAR ──────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-serif text-3xl mb-3"
            style={{ color: 'var(--green)' }}
          >
            Harvest calendar
          </h2>
          <p
            className="mb-8 text-sm"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
          >
            2026 season — June through September
          </p>

          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--leaf)' }}>
            <table className="w-full text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--green)' }}>
                  <th className="text-left px-4 py-3 font-serif text-base font-normal" style={{ color: 'var(--cream)' }}>
                    Crop
                  </th>
                  {['Jun', 'Jul', 'Aug', 'Sep'].map(m => (
                    <th key={m} className="px-4 py-3 font-medium text-center" style={{ color: 'var(--cream)' }}>
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {harvestCalendar.map((row, i) => (
                  <tr
                    key={row.crop}
                    style={{
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'var(--soft-green)',
                    }}
                  >
                    <td className="px-4 py-3 font-medium" style={{ color: 'var(--foreground)' }}>
                      {row.crop}
                    </td>
                    {[row.jun, row.jul, row.aug, row.sep].map((val, j) => (
                      <td key={j} className="px-4 py-3 text-center" style={{ color: 'var(--green)' }}>
                        {val || (
                          <span style={{ color: 'var(--leaf)' }}>—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────── */}
      <section
        className="py-12 px-4 text-center"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <h2 className="font-serif text-3xl mb-4" style={{ color: 'var(--green)' }}>
          Ready to eat food that feels like home?
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/shop">
            <button
              className="shimmer-btn h-12 px-6 rounded-xl text-base font-semibold"
              style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}
            >
              Shop Now →
            </button>
          </Link>
          <Link href="/farm-share">
            <Button
              variant="outline"
              className="h-12 px-6 font-medium"
              style={{ borderColor: 'var(--green)', color: 'var(--green)', fontFamily: 'var(--font-sans)' }}
            >
              Get Farm Share
            </Button>
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
