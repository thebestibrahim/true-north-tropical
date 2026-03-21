import Link from 'next/link'
import Image from 'next/image'
import NewsletterSection from '@/components/NewsletterSection'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'what-is-waterleaf',
    category: 'Ingredient Guide',
    title: 'What is Waterleaf — and why you should be cooking with it',
    excerpt:
      'Talinum triangulare grows abundantly across West Africa and the Caribbean. Tender, slightly mucilaginous, and loaded with iron — here\'s everything you need to know.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    date: 'March 2026',
    featured: true,
  },
  {
    slug: 'afro-heritage-seeds',
    category: 'Farm Story',
    title: 'Why we chose heirloom seeds — and why it changes everything',
    excerpt:
      'Commercial agriculture optimises for yield and shelf life. We optimise for taste. Here\'s the difference an heirloom seed makes.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    date: 'February 2026',
    featured: false,
  },
  {
    slug: 'garden-egg-stew',
    category: 'Recipe',
    title: 'Garden egg stew — a recipe from Aramide\'s grandmother\'s kitchen',
    excerpt:
      'African eggplant cooked down with palm oil, crayfish, and scotch bonnet. A dish that tastes like Sunday afternoon in Lagos.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80',
    readTime: '5 min read',
    date: 'January 2026',
    featured: false,
  },
  {
    slug: 'farm-share-guide',
    category: 'CSA Guide',
    title: 'Is a Farm Share right for you? An honest breakdown',
    excerpt:
      'A farm share (CSA) is a commitment — and it\'s not for everyone. We\'ll help you figure out if it makes sense for your household.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80',
    readTime: '7 min read',
    date: 'December 2025',
    featured: false,
  },
  {
    slug: 'ugu-leaf-guide',
    category: 'Ingredient Guide',
    title: 'Ugu leaf: the fluted pumpkin leaf that powers Nigerian cooking',
    excerpt:
      'From egusi soup to fisherman\'s soup, ugu leaf is the backbone of the Nigerian kitchen. Here\'s how to source it, store it, and cook with it.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800&auto=format&fit=crop&q=80',
    readTime: '5 min read',
    date: 'November 2025',
    featured: false,
  },
  {
    slug: 'growing-season-2026',
    category: 'Farm Update',
    title: 'What we\'re growing in 2026 — and what\'s new this season',
    excerpt:
      'Kiwano melon is back, Cameroon pepper is expanding, and we\'re trialling three new heritage varieties. A preview of the 2026 growing season.',
    image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    date: 'October 2025',
    featured: false,
  },
]

const categories = ['All', 'Farm Story', 'Ingredient Guide', 'Recipe', 'CSA Guide', 'Farm Update']

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Farm Story':       { bg: 'var(--soft-green)',  color: 'var(--dark-green)' },
  'Ingredient Guide': { bg: '#FFF0E6',             color: 'var(--dark-orange)' },
  'Recipe':           { bg: 'var(--leaf)',          color: 'var(--dark-green)' },
  'CSA Guide':        { bg: 'rgba(92,70,50,0.1)',   color: 'var(--brown)' },
  'Farm Update':      { bg: 'var(--soft-green)',    color: 'var(--dark-green)' },
}

const featuredPost = posts.find(p => p.featured)!
const restPosts = posts.filter(p => !p.featured)

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
          <div className="grid lg:grid-cols-2 gap-8 items-center group cursor-pointer">
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
          </div>
        </div>
      </section>

      {/* ── REST OF POSTS ─────────────────────────────────── */}
      <section className="pb-20 px-4" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="h-px mb-12" style={{ backgroundColor: 'var(--leaf)' }} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {restPosts.map(post => (
              <article
                key={post.slug}
                className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
