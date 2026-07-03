'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { QuoteModal } from '@/components/quote-modal'

const serviceTypes = [
  'Quality',
  'Professional',
  'Affordable',
  'Dependable',
]

function SwirlPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.06 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="swirl" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M60,10 C80,10 100,30 100,60 C100,90 80,110 60,110 C40,110 20,90 20,60 C20,40 35,25 60,25 C80,25 90,40 90,60 C90,75 80,85 60,85 C45,85 40,75 40,60 C40,52 47,45 60,45"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#swirl)" />
    </svg>
  )
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % serviceTypes.length)
        setIsAnimating(false)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-[var(--marine-dark)] overflow-hidden"
      aria-label="JJM Facility Services — Commercial Cleaning Cleveland"
    >
      <SwirlPattern />

      {/* Ambient orb — red, top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.18) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />
      {/* Ambient orb — marine lighter, bottom-left */}
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,43,107,0.45) 0%, transparent 70%)',
          filter: 'blur(56px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex self-start items-center rounded-full bg-white/10 text-white/80 text-[13px] font-medium px-3 py-1 border border-white/10">
            Commercial Cleaning · Cleveland &amp; Middleburg Heights, OH
          </span>

          {/* H1 */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.15] text-balance">
            Spotless facilities.{' '}
            <span className="italic text-[var(--lavande)]">Zero hassle.</span>
          </h1>

          {/* Subtitle with animated text cycling */}
          <p className="text-white/75 text-lg leading-relaxed max-w-md">
            Reliable janitorial and facility cleaning for offices, medical
            facilities, schools, and industrial spaces across the Cleveland
            area —{' '}
            <span className="relative inline-block">
              <span
                className={`inline-block transition-all duration-300 ease-out ${isAnimating
                  ? 'opacity-0 translate-y-2'
                  : 'opacity-100 translate-y-0'
                  }`}
              >
                <span className="font-semibold text-[var(--lavande)]">
                  {serviceTypes[currentIndex]}
                </span>
              </span>
            </span>
            .
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <QuoteModal>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[var(--lavande)] hover:bg-white hover:text-[var(--marine-dark)] text-white rounded-lg px-8 py-[14px] text-base font-semibold transition-colors"
              >
                Get a Free Quote →
              </Button>
            </QuoteModal>
          </div>

          {/* Micro-text */}
          <p className="text-white/50 text-sm">
            Family-owned since 2015 — Quality guaranteed at the lowest price
          </p>
        </div>

        {/* Right — founder photo */}
        <div className="relative flex justify-center md:justify-end">
          {/* Navy geometric accent shape */}
          <div
            className="absolute -bottom-6 -right-4 md:-right-6 w-56 h-72 md:w-72 md:h-96 rounded-2xl bg-[var(--lavande)] opacity-15"
            aria-hidden="true"
          />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUSP0e6GMLQwrlgoqNsXSPhC4fZ1I7b5GER3Hz"
              alt="JJM Facility Services Team"
              width={480}
              height={560}
              className="object-cover w-full h-auto max-h-[560px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Diagonal bottom divider */}
    </section>
  )
}
