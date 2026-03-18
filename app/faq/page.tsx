import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'

const faqSections = [
  {
    title: 'About the Farm',
    icon: '🌿',
    faqs: [
      {
        q: 'Where is True North Tropical located?',
        a: 'We farm in Baden, Ontario, in Waterloo Region. While you\'re welcome to email us for updates, we do not currently offer farm tours without prior arrangement.',
      },
      {
        q: 'Are you certified organic?',
        a: 'We are not certified organic (certification is expensive and not always accessible for small farms), but we operate under strict ecological farming principles — no synthetic chemicals, no GMOs, heirloom and open-pollinated seeds only. We are proud members of the Ecological Farmers Association of Ontario (EFAO).',
      },
      {
        q: 'What kinds of crops do you grow?',
        a: 'We specialize in Afro-heritage crops: West African leafy greens (waterleaf, ugu, bitterleaf, shoko), African peppers (habanero, Cameroon pepper), garden eggs, African corn varieties, scent leaf, curry leaf, ginger, kiwano melon, seeded watermelon, and more.',
      },
      {
        q: 'Who is Aramide?',
        a: 'Aramide is the founder and lead farmer at True North Tropical. She transitioned from a corporate career to farming full-time to serve the African and Caribbean diaspora communities in Ontario with food that actually tastes like home.',
      },
    ],
  },
  {
    title: 'Ordering & Delivery',
    icon: '🚚',
    faqs: [
      {
        q: 'How do I place an order?',
        a: 'Shop online at our store and add items to your cart. Complete your order and we will confirm by email. You can also reach us directly at truenorthtropical@gmail.com or 226-868-3651.',
      },
      {
        q: 'When is the ordering deadline?',
        a: 'Orders must be placed by Tuesday at noon. Availability is updated every Sunday. Orders received after Tuesday noon will be processed for the following week.',
      },
      {
        q: 'How and when will I receive my order?',
        a: 'Orders are delivered to pickup hubs every Wednesday. Available hubs: Doon Hub (Kitchener), Legacy Greens (Waterloo), Cafe Pyrus (Kitchener), and D&D African Food Market (Cambridge). Home delivery is available for farm share members in select areas — contact us to discuss.',
      },
      {
        q: 'Do you offer home delivery?',
        a: 'We offer home delivery for farm share members (Sustainer and Bounty tiers) within select areas of Waterloo Region. Please contact us directly to confirm your address.',
      },
      {
        q: 'What is the minimum order?',
        a: 'For à la carte orders, the minimum is $60. Farm share members on the Essential tier and above have no order minimum — shop as little or as much as you like.',
      },
    ],
  },
  {
    title: 'Farm Share CSA',
    icon: '📦',
    faqs: [
      {
        q: 'What is a farm share / CSA?',
        a: 'CSA stands for Community Supported Agriculture. Our model is a "farm wallet" — you pre-invest a lump sum at the start of the season and receive bonus value on top. Then you shop freely each week from whatever\'s available, rather than receiving a fixed weekly box.',
      },
      {
        q: 'How does the farm wallet work?',
        a: 'You choose a tier (Sampler, Essential, Sustainer, or Bounty), pay upfront, and your wallet is loaded with that amount PLUS a bonus percentage. For example, the Essential tier: you invest $300 and your wallet loads with $321 (7% bonus). You spend from your wallet each time you order.',
      },
      {
        q: 'Is there a minimum order for farm share members?',
        a: 'The Sampler tier has a $60 minimum per order. The Essential, Sustainer, and Bounty tiers have no minimum — order as little as one bunch if that\'s what you need.',
      },
      {
        q: 'What happens if I don\'t use my full wallet balance?',
        a: 'Unused balances can be rolled over to the following season or refunded at the end of the season (minus a 5% administration fee). We encourage members to use their full balance during the season.',
      },
      {
        q: 'When does the 2026 season start?',
        a: 'The 2026 growing season opens in June. Farm share early bird pricing ends March 31, 2026. After that, regular pricing applies. We recommend signing up early to lock in the best rates.',
      },
      {
        q: 'Can I upgrade my tier during the season?',
        a: 'Yes! You can top up your wallet at any time during the season. Contact us at truenorthtropical@gmail.com and we will adjust your tier and bonus accordingly.',
      },
    ],
  },
  {
    title: 'Products & Quality',
    icon: '🥬',
    faqs: [
      {
        q: 'How fresh is the produce?',
        a: 'Most produce is harvested within 24–48 hours of your pickup. Some items like leafy greens are harvested the morning of delivery. This is as fresh as it gets outside of growing it yourself.',
      },
      {
        q: 'How should I store the produce?',
        a: 'Most leafy greens (waterleaf, ugu, scent leaf) are best stored in a damp paper towel in the fridge and used within 3–5 days. Peppers can be refrigerated for up to 2 weeks or frozen. Roots (ginger, sweet potato) should be stored in a cool, dark, dry place.',
      },
      {
        q: 'Are your seeds GMO-free?',
        a: 'Yes, absolutely. We use only heirloom and open-pollinated, non-GMO seed varieties. Many of our varieties are sourced directly from West Africa to preserve authentic flavour profiles.',
      },
      {
        q: 'Why do some crops have limited availability?',
        a: 'We grow seasonally and in relatively small quantities to maintain quality. Some specialty crops like Cameroon pepper or Kiwano melon have short harvest windows. Signing up for our newsletter is the best way to know when they\'re available.',
      },
    ],
  },
  {
    title: 'Nursery & Consulting',
    icon: '🌱',
    faqs: [
      {
        q: 'Do you sell seedlings?',
        a: 'Yes! We offer Afro-heritage seedling packs for home gardeners who want to grow their own. Packages range from starter packs (6 seedlings at $35.99) to market garden bundles (24 seedlings at $96.49 + HST). Available from May.',
      },
      {
        q: 'What does a garden consulting session include?',
        a: 'Sessions with Aramide cover garden planning, variety selection, soil prep, planting schedules, pest management, and anything specific to growing Afro-heritage crops in Ontario\'s climate. Sessions can be virtual or in-person.',
      },
      {
        q: 'How do I book a consulting session?',
        a: 'Email us at truenorthtropical@gmail.com with "Garden Consult" in the subject line, or visit our Shop page and go to the Garden Consult tab.',
      },
    ],
  },
  {
    title: 'Gift Cards & Payments',
    icon: '🎁',
    faqs: [
      {
        q: 'How do gift cards work?',
        a: 'Gift cards are loaded directly to the recipient\'s farm wallet. They can be used for any purchase, including farm share top-ups, weekly produce orders, or seedling packages.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept e-transfer, credit card, and cash on pickup. For farm share pre-investments, payment plan options may be available — contact us to discuss.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Produce orders are non-refundable once harvested. If there is a quality issue with your order, please contact us within 24 hours and we will make it right. Farm share wallet balances are refundable at season end minus a 5% administration fee.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: 'var(--orange)', fontFamily: 'var(--font-sans)' }}
          >
            Got questions?
          </p>
          <h1
            className="font-serif mb-4 blur-fade blur-fade-1"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: 'var(--green)',
            }}
          >
            Frequently asked questions
          </h1>
          <p
            className="text-lg"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          >
            Everything you need to know about farming, ordering, and what makes TNT different.
          </p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ─────────────────────────────────── */}
      <section
        className="pb-20 px-4"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="max-w-3xl mx-auto space-y-8">
          {faqSections.map(section => (
            <div key={section.title}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{section.icon}</span>
                <h2
                  className="font-serif text-2xl"
                  style={{ color: 'var(--green)' }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-2">
                {section.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.title}-${i}`}
                    className="rounded-xl overflow-hidden px-5"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--leaf)',
                    }}
                  >
                    <AccordionTrigger
                      className="text-left py-4 text-base font-medium hover:no-underline"
                      style={{
                        color: 'var(--green)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-sm leading-relaxed pb-4"
                      style={{
                        color: 'var(--muted-color)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Still have questions */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: 'var(--soft-green)', border: '1px solid var(--leaf)' }}
          >
            <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--green)' }}>
              Still have a question?
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
            >
              We&apos;re a small farm. Real people answer every message.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:truenorthtropical@gmail.com"
                className="shimmer-btn h-10 px-5 rounded-xl text-sm font-medium flex items-center gap-2"
                style={{
                  backgroundColor: 'var(--orange)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Email Us
              </a>
              <a
                href="tel:2268683651"
                className="h-10 px-5 rounded-xl text-sm font-medium flex items-center border"
                style={{
                  borderColor: 'var(--green)',
                  color: 'var(--green)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Call 226-868-3651
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
