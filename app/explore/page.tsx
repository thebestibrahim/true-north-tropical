import Link from 'next/link'
import Image from 'next/image'
import NewsletterSection from '@/components/NewsletterSection'
import { ArrowRight, Clock } from 'lucide-react'
import { posts, featuredPost, restPosts } from '@/lib/posts'

const categories = ['All', 'Farm Story', 'Ingredient Guide', 'Home Gardening', 'Farm Gist', 'Recipe', 'CSA Guide']

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Farm Story':       { bg: 'var(--soft-green)',  color: 'var(--dark-green)' },
  'Ingredient Guide': { bg: '#FFF0E6',             color: 'var(--dark-orange, #c0580a)' },
  'Recipe':           { bg: 'var(--leaf)',          color: 'var(--dark-green)' },
  'CSA Guide':        { bg: 'rgba(92,70,50,0.1)',   color: 'var(--brown)' },
  'Farm Update':      { bg: 'var(--soft-green)',    color: 'var(--dark-green)' },
  'Home Gardening':   { bg: '#E8F5E9',              color: '#2E7D32' },
  'Farm Gist':        { bg: 'var(--soft-green)',    color: 'var(--dark-green)' },
}

export default function ExplorePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--orange)' }}
          >
            Stories, guides & recipes
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                color: 'var(--green)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Explore.
            </h1>
            <p
              className="text-base pb-2"
              style={{ color: 'var(--muted-color)', fontWeight: 300, maxWidth: '360px' }}
            >
              From the farm, the kitchen, and everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY PILLS ────────────────────────────────── */}
      <div className="sticky top-20 z-30 px-4 py-3 border-b" style={{ backgroundColor: '#fff', borderColor: 'var(--leaf)' }}>
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-0.5 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              className="text-xs px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0"
              style={{
                backgroundColor: cat === 'All' ? 'var(--green)' : 'var(--soft-green)',
                color: cat === 'All' ? '#fff' : 'var(--green)',
                border: cat === 'All' ? '1px solid var(--green)' : '1px solid var(--leaf)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── FEATURED POST ─────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--muted-color)' }}>
            Featured
          </p>
          <Link href={`/explore/${featuredPost.slug}`} className="grid lg:grid-cols-2 gap-8 items-center group cursor-pointer">
            <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="py-4">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: categoryColors[featuredPost.category]?.bg ?? 'var(--soft-green)',
                    color: categoryColors[featuredPost.category]?.color ?? 'var(--dark-green)',
                  }}
                >
                  {featuredPost.category}
                </span>
                <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted-color)' }}>
                  <Clock size={11} /> {featuredPost.readTime}
                </span>
              </div>

              <h2
                className="font-serif mb-4 group-hover:text-[var(--orange)] transition-colors"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--green)', lineHeight: 1.15 }}
              >
                {featuredPost.title}
              </h2>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: 'var(--muted-color)', fontWeight: 300, fontSize: '1.05rem' }}
              >
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--orange)' }}>
                Read more <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── REST OF POSTS ─────────────────────────────────── */}
      <section className="pb-20 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="h-px mb-12" style={{ backgroundColor: 'var(--leaf)' }} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {restPosts.map(post => (
              <Link
                key={post.slug}
                href={`/explore/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
                style={{ border: '1px solid var(--leaf)', backgroundColor: '#fff' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                      style={{
                        backgroundColor: categoryColors[post.category]?.bg ?? 'var(--soft-green)',
                        color: categoryColors[post.category]?.color ?? 'var(--dark-green)',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[0.68rem] flex items-center gap-1" style={{ color: 'var(--muted-color)' }}>
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-base mb-2 leading-snug group-hover:text-[var(--orange)] transition-colors"
                    style={{ color: 'var(--green)' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted-color)', fontWeight: 300 }}>
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--orange)' }}>
                    Read more <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
