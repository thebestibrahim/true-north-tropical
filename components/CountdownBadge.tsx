'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'

// Key dates
const EARLY_BIRD_START = new Date('2026-04-06T00:00:00')
const EARLY_BIRD_END   = new Date('2026-04-20T23:59:59')
const SEASON_START     = new Date('2026-06-01T00:00:00')

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return null
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

type Phase = 'before-bird' | 'bird-open' | 'after-bird' | 'season-open'

function getPhase(): Phase {
  const now = Date.now()
  if (now < EARLY_BIRD_START.getTime()) return 'before-bird'
  if (now < EARLY_BIRD_END.getTime())   return 'bird-open'
  if (now < SEASON_START.getTime())     return 'after-bird'
  return 'season-open'
}

interface Props {
  className?: string
  style?: React.CSSProperties
}

export default function CountdownBadge({ className = '', style }: Props) {
  const [phase, setPhase] = useState<Phase>(getPhase)
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null)

  useEffect(() => {
    function tick() {
      const p = getPhase()
      setPhase(p)
      if (p === 'before-bird') setTimeLeft(getTimeLeft(EARLY_BIRD_START))
      else if (p === 'bird-open') setTimeLeft(getTimeLeft(EARLY_BIRD_END))
      else setTimeLeft(null)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const baseStyle: React.CSSProperties = {
    backgroundColor: 'var(--soft-green)',
    color: 'var(--dark-green)',
    border: '1px solid var(--leaf)',
    fontFamily: 'var(--font-sans)',
    ...style,
  }

  // After early bird window passes, show static "Season Opens June 2026"
  if (phase === 'after-bird' || phase === 'season-open') {
    return (
      <Badge className={`text-xs px-3 py-1 ${className}`} style={baseStyle}>
        {phase === 'season-open' ? '🌿 Shop is Open' : '🌿 Season Opens June 2026'}
      </Badge>
    )
  }

  if (!timeLeft) {
    return (
      <Badge className={`text-xs px-3 py-1 ${className}`} style={baseStyle}>
        🌿 Season Opens June 2026
      </Badge>
    )
  }

  if (phase === 'before-bird') {
    // Count down to early bird opening (April 6)
    return (
      <Badge
        className={`text-xs px-3 py-1 ${className}`}
        style={{ ...baseStyle, backgroundColor: '#FFF0E6', color: 'var(--dark-orange)', border: '1px solid var(--orange)' }}
      >
        🌿 Farm Share opens in {timeLeft.days}d {timeLeft.hours}h
      </Badge>
    )
  }

  // bird-open: count down to April 20 deadline
  return (
    <Badge
      className={`text-xs px-3 py-1 ${className}`}
      style={{ ...baseStyle, backgroundColor: '#FFF0E6', color: 'var(--dark-orange)', border: '1px solid var(--orange)' }}
    >
      🔥 Early Bird ends: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
    </Badge>
  )
}
