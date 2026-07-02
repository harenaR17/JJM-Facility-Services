'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { QuoteModal } from '@/components/quote-modal'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show the sticky CTA once user has scrolled past the hero (about 600px)
      setVisible(window.scrollY > 600)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`
        md:hidden
        fixed bottom-0 left-0 right-0 z-50
        bg-[var(--marine)] text-white
        transition-transform duration-200 ease-out
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <QuoteModal>
        <button
          className="flex items-center justify-center gap-2 w-full py-4 font-semibold text-base outline-none cursor-pointer"
          tabIndex={visible ? 0 : -1}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Obtenir un devis
        </button>
      </QuoteModal>
    </div>
  )
}

