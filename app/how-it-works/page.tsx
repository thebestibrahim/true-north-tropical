import Link from 'next/link'
import Image from 'next/image'
import NewsletterSection from '@/components/NewsletterSection'
import { ArrowRight, ShoppingBag, CalendarDays, MapPin, Leaf, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: CalendarDays,
    title: 'Browse the weekly harvest list',
    description:
      'Every Sunday we update the shop with exactly what was harvested that week — no guessing, no out-of-stock surprises. Fresh produce, always in season.',
    detail: 'Updated every Sunday. Order by Tuesday noon.',
  },
  {
    num: '02',
    icon: ShoppingBag,
    title: 'Add to cart & checkout',
    description:
      'Pick your vegetables, choose your quantities, and checkout securely online. Pay in advance, skip the line.',
    detail: 'Secure checkout. Email confirmation sent instantly.',
  },
  {
    num: '03',
    icon: MapPin,
    title: 'Choose pickup or delivery',
    description:
      'Select a pickup hub near you — Kitchener, Cambridge, or Baden — or opt for local delivery. We bring the farm to your doorstep.',
    detail: 'Pickup: Wed–Sat. Delivery available within 30km of Baden.',
  },
  {
    num: '04',
    icon: Leaf,
    title: 'Enjoy food that tastes right',
    description:
      'Harvested days — not weeks — before it reaches you. No cold storage, no long-haul shipping. Just real food, grown with care.',
    detail: 'Guaranteed fresh. If it\'s not right, we make it right.',
  },
]

const whyItems = [
  'No GMO seeds — ever',
  'No synthetic pesticides or herbicides',
  'Heirloom and heritage varieties',
  'Grown in Baden, Ontario soil',
  'EFAO member — certified ecological',
  'Harvested to order, not to shelf life',
]

const pickupHubs = [
  { name: 'Doon Pioneer Village', area: 'Kitchener South', days: 'Thursdays 4–7pm' },
  { name: 'Legacy Greens Market', area: 'Waterloo', days: 'Saturdays 9am–1pm' },
  { name: 'Café Pyrus', area: 'Kitchener Downtown', days: 'Fridays 12–6pm' },
  { name: 'D&D African Food Market', area: 'Cambridge', days: 'Saturdays 10am–3pm' },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="pt-28 pb-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--orange)' }}
          >
            Simple from the start
          </p>
          <h1
            className="font-serif mb-6"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
              color: 'var(--green)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            From our farm to<br />your table — simply.
          </h1>
          <p
            className="text-lg mx-auto"
            style={{ color: 'var(--muted-color)', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}
          >
            Ordering fresh Afro-heritage produce should be as easy as shopping at the market —
            with the quality of knowing exactly who grew your food.
          </p>
        </div>
      </section>

      {/* ── 4 STEPS ───────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="relative p-8 rounded-3xl flex flex-col gap-4 group hover:shadow-md transition-shadow"
                  style={{
                    backgroundColor: i % 2 === 0 ? 'var(--soft-green)' : '#fff',
                    border: '1px solid var(--leaf)',
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--orange)' }}
                    >
                      <Icon size={22} color="#fff" />
                    </div>
                    <span
                      className="font-serif"
                      style={{ fontSize: '4rem', color: 'var(--leaf)', lineHeight: 1, fontWeight: 700 }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <h3
                    className="font-serif"
                    style={{ fontSize: '1.35rem', color: 'var(--green)' }}
                  >
                    {step.title}
                  </h3>

                  <p style={{ color: 'var(--muted-color)', fontWeight: 300, lineHeight: 1.65 }}>
                    {step.description}
                  </p>

                  <p
                    className="text-xs font-medium mt-1 px-3 py-1.5 rounded-full self-start"
                    style={{ backgroundColor: 'var(--leaf)', color: 'var(--dark-green)' }}
                  >
                    {step.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--green)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(191,214,191,0.7)' }}
              >
                Our growing promise
              </p>
              <h2
                className="font-serif mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--cream)', lineHeight: 1.1 }}
              >
                Grown with intention.<br />Delivered with care.
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{ color: 'rgba(245,241,232,0.70)', fontWeight: 300, fontSize: '1.05rem' }}
              >
                Every variety we grow is chosen because it tastes right — not because it ships well
                or looks good under fluorescent lights. This is food grown for people who know the difference.
              </p>
              <ul className="space-y-3">
                {whyItems.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--leaf)', fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80"
                alt="True North Tropical farm rows"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,28,14,0.3) 0%, transparent 60%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PICKUP HUBS ───────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--orange)' }}
            >
              Find us near you
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl"
              style={{ color: 'var(--green)' }}
            >
              Pickup hubs.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pickupHubs.map(hub => (
              <div
                key={hub.name}
                className="p-6 rounded-2xl flex flex-col gap-2"
                style={{ backgroundColor: '#fff', border: '1px solid var(--leaf)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                  style={{ backgroundColor: 'var(--soft-green)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--green)' }} />
                </div>
                <h3 className="font-serif text-base" style={{ color: 'var(--green)' }}>
                  {hub.name}
                </h3>
                <p className="text-xs" style={{ color: 'var(--muted-color)' }}>
                  {hub.area}
                </p>
                <p
                  className="text-xs font-medium mt-1 px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: 'var(--soft-green)', color: 'var(--dark-green)' }}
                >
                  {hub.days}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4" style={{ color: 'var(--green)' }}>
            Ready to taste the difference?
          </h2>
          <p className="mb-8 text-base" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
            Browse this week&apos;s harvest or get a Farm Share for the full season.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop">
              <button
                className="shimmer-btn h-12 px-7 rounded-xl text-base font-semibold flex items-center gap-2"
                style={{ backgroundColor: 'var(--orange)', color: '#fff' }}
              >
                Shop Now <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/farm-share">
              <button
                className="h-12 px-7 rounded-xl text-base font-medium border transition-colors hover:bg-[var(--soft-green)]"
                style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
              >
                Get a Farm Share
              </button>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
