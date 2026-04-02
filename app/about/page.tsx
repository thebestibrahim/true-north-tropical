import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import NewsletterSection from '@/components/NewsletterSection'

const howWeGrow = [
  { icon: '🌿', label: 'No synthetic chemicals', desc: 'Ever.' },
  { icon: '🚫', label: 'No GMO', desc: 'Only heirloom and open-pollinated seeds.' },
  { icon: '🌾', label: 'Heirloom seeds', desc: 'Preserving biodiversity.' },
  { icon: '🌍', label: 'Healthy living soil', desc: 'EFAO certified practices.' },
  { icon: '📍', label: 'Locally grown', desc: 'Right here in Baden, Ontario.' },
  { icon: '✋', label: 'Hand harvested', desc: 'Every single bunch inspected.' },
]

const harvestCalendar: { crop: string; jun?: string; jul?: string; aug?: string; sep?: string; oct?: string }[] = [
  { crop: 'Water Leaves',        jun: '✓', jul: '✓', aug: '✓', sep: '✓', oct: '' },
  { crop: 'Tete / Callaloo',     jun: '✓', jul: '✓', aug: '✓', sep: '✓', oct: '' },
  { crop: 'Shoko (Lagos Spinach)', jun: '✓', jul: '✓', aug: '✓', sep: '', oct: '' },
  { crop: 'Bitter Leaf',         jun: '',  jul: '✓', aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'Jute Leaves',         jun: '✓', jul: '✓', aug: '✓', sep: '✓', oct: '' },
  { crop: 'Okra',                jun: '',  jul: '',  aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'Habanero',            jun: '',  jul: '',  aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'Cameroon Pepper',     jun: '',  jul: '',  aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'African Corn',        jun: '',  jul: '✓', aug: '✓', sep: '', oct: '' },
  { crop: 'Sweet Potato',        jun: '',  jul: '',  aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'Squash Leaves / Ugu', jun: '✓', jul: '✓', aug: '✓', sep: '✓', oct: '' },
  { crop: 'Curry Leaves',        jun: '✓', jul: '✓', aug: '✓', sep: '✓', oct: '✓' },
  { crop: 'Watermelon',          jun: '',  jul: '',  aug: '✓', sep: '✓', oct: '' },
  { crop: 'Cherry Tomato',       jun: '',  jul: '✓', aug: '✓', sep: '✓', oct: '' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[65svh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="/farm-hero.webp"
          alt="True North Tropical farm in Baden Ontario"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
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
            A small farm with<br />a simple idea.
          </h1>
        </div>
      </section>

      {/* ── WHY WE FARM ───────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-5"
            style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
          >
            Why we farm
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl mb-6"
            style={{ color: 'var(--green)' }}
          >
            Quality food should not be this hard to find.
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Many families rely on vegetables shipped thousands of miles before reaching the store. By the time those vegetables arrive, the flavour is gone and much of the nutrition is lost. Others settle for substitutes only to get disappointing results. We started True North Tropical to change that. We grow culturally meaningful vegetables right here in Ontario so families can cook the meals they grew up with using fresh ingredients. Food should feel familiar, nourishing, and celebrated — not tolerated.
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

      {/* ── FROM BACKYARD TO FARM ─────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden blur-fade blur-fade-1">
              <Image
                src="/farm-hero.webp"
                alt="True North Tropical farm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                From backyard garden to farm
              </p>
              <h2
                className="font-serif text-4xl mb-6"
                style={{ color: 'var(--green)' }}
              >
                Know your farmer.
              </h2>

              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                <p>
                  True North Tropical began as a backyard garden. We were simply trying to grow the foods we missed. When crops like garden egg and bitterleaf thrived in our garden, we realized something important. These foods can grow here too.
                </p>
                <p>
                  Today the farm grows culturally meaningful vegetables for families who want food that feels familiar, nourishing, and full of flavour.
                </p>
                <p>
                  Hi, I&apos;m Aramide. I didn&apos;t grow up on a farm, but I grew up with real food. Meals made from fresh ingredients. Seeds passed down through generations. Flavours that meant something.
                </p>
                <p>
                  When I moved to Canada, finding those foods fresh became difficult. So I started growing them. Today True North Tropical is a small farm growing vegetables that keep traditions alive and bring real flavour back to the table.
                </p>
                <p>
                  If you&apos;re searching for real fresh okra, callaloo, eggplant, and other Afro-heritage vegetables, I&apos;d be honoured to be your farmer.
                </p>
              </div>

              {/* 3 key stats */}
              <div
                className="grid grid-cols-3 gap-4 mt-8 py-6 border-y"
                style={{ borderColor: 'var(--leaf)' }}
              >
                {[
                  { stat: '2019', label: 'Started in a backyard' },
                  { stat: 'Baden', label: 'Ontario, Canada' },
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
        id="harvest-calendar"
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
            2026 season — June through October
          </p>

          <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--leaf)' }}>
            <table className="w-full text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--green)' }}>
                  <th className="text-left px-4 py-3 font-serif text-base font-normal" style={{ color: 'var(--cream)' }}>
                    Crop
                  </th>
                  {['Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
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
                    {[row.jun, row.jul, row.aug, row.sep, row.oct].map((val, j) => (
                      <td key={j} className="px-4 py-3 text-center" style={{ color: 'var(--green)' }}>
                        {val || (
                          <span style={{ color: 'var(--leaf)' }}></span>
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
              Shop Now
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
