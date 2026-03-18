export type Tier = {
  id: string
  name: string
  price: number
  bonus: number        // percentage
  walletValue: number  // price + bonus amount
  minOrder: number | null
  savings: string
  perks: string[]
  highlight: boolean
  badge: string | null
  cta: string
}

export const tiers: Tier[] = [
  {
    id: 'bounty',
    name: 'Bounty',
    price: 700,
    bonus: 10,
    walletValue: 770,
    minOrder: null,
    savings: '20% savings',
    perks: [
      'No order minimum',
      '20% savings on every order',
      'Priority harvest access',
      'Farm community membership',
      'Exclusive early-bird crops',
      'Direct farmer line',
    ],
    highlight: false,
    badge: 'Best Value',
    cta: 'I want this →',
  },
  {
    id: 'sustainer',
    name: 'Sustainer',
    price: 500,
    bonus: 8,
    walletValue: 540,
    minOrder: null,
    savings: '8% savings',
    perks: [
      'No order minimum',
      '8% savings on every order',
      'Priority ordering',
      'Farm community membership',
      'Early harvest notifications',
    ],
    highlight: false,
    badge: null,
    cta: 'I want this →',
  },
  {
    id: 'essential',
    name: 'Essential',
    price: 300,
    bonus: 7,
    walletValue: 321,
    minOrder: null,
    savings: '7% savings',
    perks: [
      'No order minimum',
      'Up to 7% savings',
      'Priority harvest access',
      'Farm community membership',
      'Weekly harvest updates',
    ],
    highlight: true,
    badge: 'Most Popular',
    cta: 'I want this →',
  },
  {
    id: 'sampler',
    name: 'Sampler',
    price: 100,
    bonus: 2,
    walletValue: 102,
    minOrder: 60,
    savings: '5% savings',
    perks: [
      '$60 minimum order',
      '5% off all orders',
      'Access to weekly harvest',
      'Community newsletter',
    ],
    highlight: false,
    badge: null,
    cta: 'I want this →',
  },
  {
    id: 'alacarte',
    name: 'À La Carte',
    price: 0,
    bonus: 0,
    walletValue: 0,
    minOrder: 60,
    savings: 'No commitment',
    perks: [
      '$60 minimum per order',
      'Shop freely each week',
      'No upfront commitment',
      'Pay as you go',
    ],
    highlight: false,
    badge: null,
    cta: 'Start shopping →',
  },
]

export const pickupHubs = [
  {
    name: 'Doon Hub',
    address: 'Doon, Kitchener, ON',
    day: 'Wednesday',
    time: '4:00 PM – 7:00 PM',
    icon: '📍',
  },
  {
    name: 'Legacy Greens',
    address: 'Waterloo, ON',
    day: 'Wednesday',
    time: '3:00 PM – 6:00 PM',
    icon: '🌿',
  },
  {
    name: 'Cafe Pyrus',
    address: 'Kitchener, ON',
    day: 'Thursday',
    time: '10:00 AM – 1:00 PM',
    icon: '☕',
  },
  {
    name: 'D&D African Food Market',
    address: 'Cambridge, ON',
    day: 'Wednesday',
    time: '5:00 PM – 8:00 PM',
    icon: '🛒',
  },
]
