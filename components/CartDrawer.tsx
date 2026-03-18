'use client'

import { useCart } from './CartContext'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQty, total, itemCount } = useCart()

  return (
    <Sheet open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b" style={{ borderColor: 'var(--leaf)' }}>
          <SheetTitle className="font-serif text-xl" style={{ color: 'var(--green)' }}>
            Your Harvest Basket
          </SheetTitle>
          {itemCount > 0 && (
            <p className="text-sm" style={{ color: 'var(--muted-color)', fontFamily: 'var(--font-sans)' }}>
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          )}
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--soft-green)' }}
              >
                <ShoppingBag size={28} style={{ color: 'var(--green)' }} />
              </div>
              <p className="font-serif text-lg" style={{ color: 'var(--green)' }}>
                Your basket is empty
              </p>
              <p className="text-sm text-center" style={{ color: 'var(--muted-color)' }}>
                Add some fresh produce from the farm store
              </p>
              <Button
                onClick={onClose}
                className="shimmer-btn mt-2"
                style={{ backgroundColor: 'var(--orange)', color: '#FFFFFF' }}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 py-3 border-b last:border-0"
                  style={{ borderColor: 'var(--leaf)' }}
                >
                  {/* Product image */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                    {/* [SWAP: product image] */}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm leading-tight truncate" style={{ color: 'var(--green)' }}>
                      {item.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted-color)' }}>
                      ${item.price.toFixed(2)} / {item.unit}
                    </p>

                    {/* Qty stepper */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-full border flex items-center justify-center hover:border-[var(--orange)] transition-colors"
                        style={{ borderColor: 'var(--leaf)', color: 'var(--green)' }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span
                        className="text-sm font-medium w-6 text-center"
                        style={{ color: 'var(--brown)', fontFamily: 'var(--font-serif)' }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-full border flex items-center justify-center hover:border-[var(--orange)] transition-colors"
                        style={{ borderColor: 'var(--leaf)', color: 'var(--green)' }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Price + remove */}
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <p className="font-serif text-sm font-bold" style={{ color: 'var(--brown)' }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors"
                      style={{ color: '#DC2626' }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="px-6 py-6 border-t"
            style={{ borderColor: 'var(--leaf)', backgroundColor: 'var(--soft-green)' }}
          >
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-1">
              <span style={{ color: 'var(--muted-color)', fontSize: '0.875rem' }}>Subtotal</span>
              <span className="font-serif text-lg" style={{ color: 'var(--brown)' }}>
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--muted-color)' }}>
              Shipping & taxes calculated at checkout
            </p>

            <Separator className="mb-4" style={{ backgroundColor: 'var(--leaf)' }} />

            {/* CTA */}
            <Button
              className="w-full h-12 text-base shimmer-btn font-medium"
              style={{
                backgroundColor: 'var(--orange)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Checkout — ${total.toFixed(2)}
            </Button>

            <p className="text-xs text-center mt-3" style={{ color: 'var(--muted-color)' }}>
              Contact us to complete your order: truenorthtropical@gmail.com
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
