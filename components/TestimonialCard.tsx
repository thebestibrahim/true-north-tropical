import { Card } from '@/components/ui/card'

type Props = {
  quote: string
  name: string
  city: string
  delay?: number
}

export default function TestimonialCard({ quote, name, city, delay = 0 }: Props) {
  return (
    <Card
      className={`relative overflow-hidden p-8 flex flex-col gap-4 blur-fade blur-fade-${delay}`}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--leaf)',
        boxShadow: '0 2px 20px rgba(63,111,70,0.06)',
      }}
    >
      {/* Large decorative quote mark */}
      <span
        className="absolute top-4 left-6 font-serif select-none pointer-events-none"
        style={{
          fontSize: '6rem',
          lineHeight: 1,
          color: 'var(--orange)',
          opacity: 0.12,
          fontFamily: 'var(--font-serif)',
        }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <blockquote
        className="relative z-10 font-serif italic text-lg leading-relaxed"
        style={{ color: 'var(--green)' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 mt-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-serif"
          style={{ backgroundColor: 'var(--soft-green)', color: 'var(--green)' }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p
            className="text-sm font-medium"
            style={{ color: 'var(--brown)', fontFamily: 'var(--font-sans)' }}
          >
            {name}
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}
          >
            {city}
          </p>
        </div>
      </div>
    </Card>
  )
}
