export type Tier = {
  id: string
  name: string
  price: number           // upfront investment
  bonus: number           // % added to wallet — EARLY BIRD ONLY (April 6–20, 2026)
  walletValue: number     // price + bonus amount (early bird value)
  minOrder: number | null // null = no minimum
  checkoutSavings: string // discount applied at checkout when spending wallet
  perks: string[]         // tier-specific perks (shared perks listed separately)
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
    checkoutSavings: 'Up to 20% savings',
    perks: [
      'No order minimum',
      'Up to 20% savings at checkout',
      'Priority ordering every week',
    ],
    highlight: false,
    badge: 'Best Value',
    cta: 'Get this share →',
  },
  {
    id: 'sustainer',
    name: 'Sustainer',
    price: 500,
    bonus: 8,
    walletValue: 540,
    minOrder: null,
    checkoutSavings: 'Up to 10% savings',
    perks: [
      'No order minimum',
      'Up to 10% savings at checkout',
      'Priority ordering',
    ],
    highlight: false,
    badge: null,
    cta: 'Get this share →',
  },
  {
    id: 'essential',
    name: 'Essential',
    price: 300,
    bonus: 7,
    walletValue: 321,
    minOrder: null,
    checkoutSavings: 'Up to 7% savings',
    perks: [
      'No order minimum',
      'Up to 7% savings at checkout',
    ],
    highlight: true,
    badge: 'Most Popular',
    cta: 'Get this share →',
  },
  {
    id: 'sampler',
    name: 'Sampler',
    price: 100,
    bonus: 2,
    walletValue: 102,
    minOrder: 60,
    checkoutSavings: '5% off products',
    perks: [
      '$60 minimum per order',
      '5% off products',
    ],
    highlight: false,
    badge: null,
    cta: 'Get this share →',
  },
  {
    id: 'alacarte',
    name: 'À La Carte',
    price: 0,
    bonus: 0,
    walletValue: 0,
    minOrder: 60,
    checkoutSavings: 'Pay as you go',
    perks: [
      'No upfront payment',
      'Shop anytime',
      '$60 minimum per order',
    ],
    highlight: false,
    badge: null,
    cta: 'Start shopping →',
  },
]

// Universal perks included with every paid share (Sampler and above)
export const sharedPerks = [
  'Access to our private farm community (Facebook, Instagram & WhatsApp)',
  'Recipes, cooking inspiration, and seasonal guides',
  'Early access to the weekly harvest list',
]

export const earlyBirdWindow = {
  start: 'April 6, 2026',
  end: 'April 20, 2026',
  label: 'Early Bird: April 6 – 20, 2026',
}

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
