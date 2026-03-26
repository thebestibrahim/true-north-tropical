const items = [
  { icon: '🌱', text: 'No Synthetic Chemicals' },
  { icon: '🌾', text: 'Heirloom & Open-Pollinated' },
  { icon: '📍', text: 'Grown in Ontario' },
  { icon: '🚚', text: 'Weekly Delivery' },
  { icon: '✋', text: 'Hand Harvested' },
  { icon: '🌿', text: 'Afro-Heritage Crops' },
  { icon: '❄️', text: 'Peak Freshness Guaranteed' },
  { icon: '🫶', text: 'Community Farm' },
  { icon: '🌍', text: 'Rooted in Culture' },
  { icon: '🚫', text: 'No GMO' },
]

// Doubled for seamless loop
const doubled = [...items, ...items]

export default function TrustMarquee() {
  return (
    <div
      className="py-4 overflow-hidden"
      style={{ backgroundColor: 'var(--green)' }}
      aria-label="Trust indicators"
    >
      <div className="relative flex">
        <div className="marquee-track flex items-center gap-0">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 flex-shrink-0"
            >
              <span className="text-base" role="img" aria-hidden>
                {item.icon}
              </span>
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
              >
                {item.text}
              </span>
              <span
                className="ml-4 w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'rgba(245,241,232,0.3)' }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
