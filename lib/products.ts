export type TagColor = 'rare' | 'heirloom' | 'staff-pick' | 'seasonal' | 'hot-seller' | 'limited' | 'fresh'

export type Product = {
  id: string
  name: string
  category: string
  unit: 'kg' | 'bunch' | 'each'
  price: number
  description: string
  image: string
  featured?: boolean
  tags?: string[]
}

export const products: Product[] = [
  // VEGETABLES
  {
    id: 'waterleaf',
    name: 'Waterleaf',
    category: 'vegetables',
    unit: 'bunch',
    price: 4.99,
    description: 'Tender leafy green, perfect for soups and stews',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Seasonal', 'Fresh Picked'],
  },
  {
    id: 'bitterleaf',
    name: 'Bitterleaf',
    category: 'vegetables',
    unit: 'bunch',
    price: 5.49,
    description: 'Aromatic leafy green for authentic Bitterleaf soup',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop',
    tags: ['Heirloom', 'Seasonal'],
  },
  {
    id: 'lagos-spinach',
    name: 'Lagos Spinach',
    category: 'vegetables',
    unit: 'bunch',
    price: 4.49,
    description: 'Also known as Shoko. Rich, flavourful and deeply nutritious.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop',
    tags: ['Rare Find', 'Heirloom'],
  },
  {
    id: 'callaloo',
    name: 'Callaloo / Amaranth',
    category: 'vegetables',
    unit: 'bunch',
    price: 4.99,
    description: 'Tete, beloved across West Africa and the Caribbean.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Staff Pick', 'Seasonal'],
  },
  {
    id: 'ugu',
    name: 'Ugu Leaf',
    category: 'vegetables',
    unit: 'bunch',
    price: 6.49,
    description: 'Fluted pumpkin leaf. A cornerstone of Nigerian cuisine.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Staff Pick', 'Heirloom'],
  },
  // PEPPERS
  {
    id: 'habanero',
    name: 'Habanero Peppers',
    category: 'peppers',
    unit: 'kg',
    price: 12.99,
    description: 'Fiery, fruity, freshly harvested',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Hot Seller', 'Fresh Picked'],
  },
  {
    id: 'cameroon-pepper',
    name: 'Cameroon Pepper',
    category: 'peppers',
    unit: 'kg',
    price: 14.99,
    description: 'Deeply aromatic. Hard to find this fresh anywhere else.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop',
    tags: ['Rare Find', 'Limited'],
  },
  {
    id: 'garden-egg',
    name: 'Garden Egg',
    category: 'vegetables',
    unit: 'kg',
    price: 9.99,
    description: 'African eggplant. Bitter, beautiful, irreplaceable.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Heirloom', 'Seasonal'],
  },
  // GRAINS
  {
    id: 'corn-white',
    name: 'Fresh African Corn (White)',
    category: 'grains',
    unit: 'each',
    price: 2.49,
    description: 'Starchy, chewy perfection for roasting or boiling',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Seasonal', 'Fresh Picked'],
  },
  {
    id: 'corn-yellow',
    name: 'Fresh African Corn (Yellow)',
    category: 'grains',
    unit: 'each',
    price: 2.49,
    description: 'Golden and sweet from the field',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop',
    tags: ['Seasonal', 'Fresh Picked'],
  },
  // ROOTS
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    category: 'roots',
    unit: 'kg',
    price: 5.99,
    description: 'Locally grown, rich and naturally sweet',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=600&auto=format&fit=crop',
    tags: ['Seasonal', 'Heirloom'],
  },
  {
    id: 'ginger',
    name: 'Fresh Ginger',
    category: 'roots',
    unit: 'kg',
    price: 8.99,
    description: 'Punchy and fragrant. Nothing like what you find at the grocery store.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&auto=format&fit=crop',
    tags: ['Staff Pick', 'Fresh Picked'],
  },
  // HERBS
  {
    id: 'scent-leaf',
    name: 'Scent Leaf',
    category: 'herbs',
    unit: 'bunch',
    price: 3.99,
    description: 'Efirin, the fragrant African basil. Essential for stews and jollof.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&auto=format&fit=crop',
    tags: ['Heirloom', 'Rare Find'],
  },
  {
    id: 'curry-leaf',
    name: 'Curry Leaf',
    category: 'herbs',
    unit: 'bunch',
    price: 4.49,
    description: 'Fresh, aromatic, rarely found this local',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&auto=format&fit=crop',
    tags: ['Rare Find', 'Limited'],
  },
  // FRUITS
  {
    id: 'kiwano',
    name: 'Kiwano Melon',
    category: 'fruits',
    unit: 'each',
    price: 6.99,
    description: 'African horned melon. Striking, tropical and a guaranteed conversation starter.',
    image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Rare Find', 'Seasonal'],
  },
  {
    id: 'watermelon',
    name: 'Seeded Watermelon',
    category: 'fruits',
    unit: 'each',
    price: 12.99,
    description: 'Old-school seeded variety. Sweeter and more flavourful than anything at the grocery store.',
    image: 'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&auto=format&fit=crop',
    featured: true,
    tags: ['Heirloom', 'Hot Seller'],
  },
]

export const categories = ['all', 'vegetables', 'peppers', 'grains', 'roots', 'herbs', 'fruits'] as const
export type Category = typeof categories[number]

export const featuredProducts = products.filter(p => p.featured).slice(0, 8)
