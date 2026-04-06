import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock } from 'lucide-react'
import { posts } from '@/lib/posts'
import NewsletterSection from '@/components/NewsletterSection'

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Farm Story':       { bg: 'var(--soft-green)',  color: 'var(--dark-green)' },
  'Ingredient Guide': { bg: '#FFF0E6',             color: 'var(--dark-orange, #c0580a)' },
  'Recipe':           { bg: 'var(--leaf)',          color: 'var(--dark-green)' },
  'CSA Guide':        { bg: 'rgba(92,70,50,0.1)',   color: 'var(--brown)' },
  'Farm Update':      { bg: 'var(--soft-green)',    color: 'var(--dark-green)' },
  'Home Gardening':   { bg: '#E8F5E9',              color: '#2E7D32' },
  'Farm Gist':        { bg: 'var(--soft-green)',    color: 'var(--dark-green)' },
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — True North Tropical`,
    description: post.excerpt,
  }
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const catStyle = categoryColors[post.category] ?? { bg: 'var(--soft-green)', color: 'var(--dark-green)' }

  // Related posts (same category, excluding current)
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const otherPosts = posts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - related.length)
  const relatedPosts = [...related, ...otherPosts].slice(0, 2)

  return (
    <>
      {/* ── BACK LINK ───────────────────────────────── */}
      <div className="pt-28 pb-4 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--orange)]"
            style={{ color: 'var(--muted-color)' }}
          >
            <ArrowLeft size={14} />
            Back to Explore
          </Link>
        </div>
      </div>

      {/* ── HERO IMAGE ──────────────────────────────── */}
      <div className="px-4 pb-0" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>

      {/* ── HEADER ──────────────────────────────────── */}
      <section className="py-10 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: catStyle.bg, color: catStyle.color }}
            >
              {post.category}
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted-color)' }}>
              <Clock size={11} />
              {post.readTime}
            </span>
            <span className="text-xs" style={{ color: 'var(--muted-color)' }}>
              {post.date}
            </span>
          </div>

          <h1
            className="font-serif mb-5"
            style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              color: 'var(--green)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-lg leading-relaxed"
            style={{ color: 'var(--muted-color)', fontWeight: 300 }}
          >
            {post.excerpt}
          </p>

          <div className="mt-8 h-px" style={{ backgroundColor: 'var(--leaf)' }} />
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────── */}
      <article className="pb-20 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-3xl mx-auto pt-10">
          <div className="prose-tnt">
            {post.body.map((section, i) => {
              if (section.type === 'heading') {
                return (
                  <h2
                    key={i}
                    className="font-serif mt-10 mb-3"
                    style={{ fontSize: '1.45rem', color: 'var(--green)', letterSpacing: '-0.01em' }}
                  >
                    {section.text}
                  </h2>
                )
              }
              if (section.type === 'list' && section.items) {
                return (
                  <ul key={i} className="my-4 space-y-1.5 pl-5">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-base leading-relaxed list-disc"
                        style={{ color: 'var(--muted-color)', fontWeight: 300 }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (section.type === 'divider') {
                return <div key={i} className="my-10 h-px" style={{ backgroundColor: 'var(--leaf)' }} />
              }
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed mb-5"
                  style={{ color: 'var(--muted-color)', fontWeight: 300 }}
                >
                  {section.text}
                </p>
              )
            })}
          </div>

          {/* ── AUTHOR CARD ───────────────────────── */}
          <div
            className="mt-16 flex items-center gap-4 p-5 rounded-2xl"
            style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-serif text-lg text-white"
              style={{ backgroundColor: 'var(--green)' }}
            >
              A
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--dark-green)' }}>
                Aramide — True North Tropical
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                Farmer, grower, and founder. Growing Afro-heritage crops in Baden, Ontario since 2020.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── RELATED POSTS ───────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4" style={{ backgroundColor: 'var(--cream)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: 'var(--muted-color)' }}>
              Keep reading
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => {
                const rCat = categoryColors[rp.category] ?? { bg: 'var(--soft-green)', color: 'var(--dark-green)' }
                return (
                  <Link
                    key={rp.slug}
                    href={`/explore/${rp.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
                    style={{ border: '1px solid var(--leaf)', backgroundColor: '#fff' }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                        style={{ backgroundColor: rCat.bg, color: rCat.color }}
                      >
                        {rp.category}
                      </span>
                      <h3
                        className="font-serif text-sm mt-3 leading-snug group-hover:text-[var(--orange)] transition-colors"
                        style={{ color: 'var(--green)' }}
                      >
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />
    </>
  )
}
