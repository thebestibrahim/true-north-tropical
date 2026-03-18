'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, Check } from 'lucide-react'
import { useCart } from './CartContext'
import type { Product } from '@/lib/products'

type Props = {
  product: Product
  size?: 'default' | 'compact'
}

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  'Rare Find':    { bg: 'var(--orange)',     color: '#fff' },
  'Heirloom':    { bg: 'var(--brown)',      color: '#fff' },
  'Staff Pick':  { bg: 'var(--dark-green)', color: '#fff' },
  'Seasonal':    { bg: 'var(--leaf)',       color: 'var(--dark-green)' },
  'Hot Seller':  { bg: '#C0392B',           color: '#fff' },
  'Fresh Picked':{ bg: 'var(--soft-green)', color: 'var(--dark-green)' },
  'Limited':     { bg: 'var(--orange)',     color: '#fff' },
}

export default function ProductCard({ product, size = 'default' }: Props) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const handleDecrease = () => setQty(q => Math.max(1, q - 1))
  const handleIncrease = () => setQty(q => q + 1)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
    }, qty)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setQty(1)
    }, 1400)
  }

  const unitLabel = product.unit === 'kg' ? 'kg' : product.unit === 'bunch' ? 'bunch' : 'each'
  const primaryTag = product.tags?.[0]
  const tagStyle = primaryTag ? (TAG_STYLES[primaryTag] ?? { bg: 'var(--leaf)', color: 'var(--dark-green)' }) : null

  return (
    <div
      className="product-card-hover rounded-2xl overflow-hidden flex flex-col group"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--leaf)' }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1/1' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(44,62,48,0.18) 0%, transparent 55%)' }}
        />

        {/* Primary tag — top left */}
        {primaryTag && tagStyle && (
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: tagStyle.bg,
                color: tagStyle.color,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {primaryTag}
            </span>
          </div>
        )}

        {/* Category — top right */}
        <div className="absolute top-3 right-3">
          <span
            className="text-xs px-2 py-1 rounded-full capitalize"
            style={{
              backgroundColor: 'rgba(245,241,232,0.88)',
              color: 'var(--brown)',
              backdropFilter: 'blur(6px)',
              fontSize: '0.68rem',
              fontWeight: 500,
            }}
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${size === 'compact' ? 'p-3' : 'p-5'}`}>

        {/* Name */}
        <h3
          className={`font-serif leading-tight mb-1 ${size === 'compact' ? 'text-base' : 'text-[1.1rem]'}`}
          style={{ color: 'var(--green)', fontWeight: 700 }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className={`leading-snug line-clamp-2 ${size === 'compact' ? 'text-xs' : 'text-[0.8rem]'}`}
          style={{ color: 'var(--muted-color)' }}
        >
          {product.description}
        </p>

        {/* Secondary tags row */}
        {product.tags && product.tags.length > 1 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {product.tags.slice(1).map(tag => {
              const s = TAG_STYLES[tag] ?? { bg: 'var(--soft-green)', color: 'var(--dark-green)' }
              return (
                <span
                  key={tag}
                  className="rounded-full"
                  style={{
                    backgroundColor: s.bg,
                    color: s.color,
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    padding: '2px 8px',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        )}

        {/* Price row */}
        <div className="flex items-baseline gap-1 mt-3 mb-3">
          <span
            className={`font-serif font-bold ${size === 'compact' ? 'text-base' : 'text-xl'}`}
            style={{ color: 'var(--brown)' }}
          >
            ${product.price.toFixed(2)}
          </span>
          <span
            className="text-xs"
            style={{ color: 'var(--muted-color)' }}
          >
            / {unitLabel}
          </span>
        </div>

        <div className="flex-1" />

        {/* Controls */}
        <div className="flex items-center gap-2 mt-auto">
          {/* Qty stepper — pill shaped */}
          <div
            className="flex items-center rounded-full overflow-hidden flex-shrink-0"
            style={{ border: '1.5px solid var(--leaf)', height: '2.5rem' }}
          >
            <button
              onClick={handleDecrease}
              className="w-9 h-full flex items-center justify-center transition-colors hover:bg-[var(--soft-green)]"
              style={{ color: 'var(--green)' }}
              aria-label="Decrease"
              disabled={added}
            >
              <Minus size={12} />
            </button>

            <div
              className="px-1 h-full flex items-center justify-center min-w-[3.2rem] text-xs font-semibold text-center"
              style={{ color: 'var(--brown)' }}
            >
              {qty} {unitLabel}
            </div>

            <button
              onClick={handleIncrease}
              className="w-9 h-full flex items-center justify-center transition-colors hover:bg-[var(--soft-green)]"
              style={{ color: 'var(--green)' }}
              aria-label="Increase"
              disabled={added}
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Add button — full pill */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex-1 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              added ? 'confirm-pop' : 'shimmer-btn hover:opacity-90 active:scale-95'
            }`}
            style={{
              height: '2.5rem',
              backgroundColor: added ? '#3F6F46' : 'var(--orange)',
              color: '#FFFFFF',
              cursor: added ? 'default' : 'pointer',
              letterSpacing: '0.02em',
            }}
            aria-label={added ? 'Added to cart' : 'Add to cart'}
          >
            {added ? (
              <><Check size={13} /> Added</>
            ) : (
              <>Add to cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
