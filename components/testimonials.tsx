'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'

const reviews = [
  {
    name: 'Johnny Lunsford',
    location: 'Cleveland Area',
    rating: 5,
    text: "Great owner. Really cares about the quality of work and provides a wide range of cleaning services — floor work, windows, general cleaning, post-construction, you name it!",
    service: 'Commercial Cleaning',
  },
  {
    name: 'Sarah M.',
    location: 'Middleburg Heights',
    rating: 5,
    text: "JJM has kept our office spotless for over a year now. Always on time and easy to work with.",
    service: 'Office Cleaning',
  },
  {
    name: 'David R.',
    location: 'Cleveland',
    rating: 5,
    text: "They handled our post-construction cleanup and the results were incredible. Highly recommend.",
    service: 'Post-Construction Cleanup',
  },
  {
    name: 'Lisa T.',
    location: 'Berea',
    rating: 5,
    text: "Great value and very professional team. Our carpets look brand new.",
    service: 'Carpet Cleaning',
  },
  {
    name: 'Mark H.',
    location: 'Strongsville',
    rating: 5,
    text: "Reliable and responsive — exactly what you want from a cleaning company.",
    service: 'Janitorial Services',
  },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className={`w-4 h-4 ${filled ? 'text-[#F59E0B]' : 'text-[var(--lavande)]'}`}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-8 text-[var(--lavande)] opacity-40"
    >
      <path
        d="M0 30V18C0 10.667 2.333 5.333 7 2L9.5 5C7.167 6.667 6 9.333 6 13H12V30H0ZM22 30V18C22 10.667 24.333 5.333 29 2L31.5 5C29.167 6.667 28 9.333 28 13H34V30H22Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const [headerRef, headerVisible] = useInView<HTMLDivElement>()

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % reviews.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  const review = reviews[current]

  return (
    <section
      id="avis"
      className="bg-[var(--cream)] py-20 md:py-28"
      aria-label="Client Testimonials"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-12">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center flex flex-col gap-4 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex self-center items-center rounded-full bg-[var(--lavande-pale)] text-[var(--marine)] text-[13px] font-medium px-3 py-1">
            What Our Clients Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-balance text-[var(--marine-dark)]">
            Trusted by Businesses Across Cleveland
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled />
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--marine)]">5 / 5</span>
            <span className="text-sm text-[var(--text-secondary)]">— Verified reviews</span>
          </div>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full rounded-2xl border border-[var(--border)] px-8 py-10 md:px-14 md:py-12 flex flex-col gap-6 overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'
            }`}
          style={{ boxShadow: 'var(--shadow-card)', background: 'var(--surface)' }}
        >
          {/* Grain / noise overlay via SVG filter */}
          <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain-testimonial">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-testimonial)" />
          </svg>

          <QuoteIcon />

          <blockquote className="font-sans text-lg md:text-xl text-[var(--text-body)] leading-relaxed text-balance">
            &ldquo;{review.text}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-[var(--lavande-pale)] flex items-center justify-center text-[var(--marine)] font-semibold text-base flex-shrink-0"
                aria-hidden="true"
              >
                {review.name.charAt(0)}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-[var(--marine-dark)] text-base">{review.name}</span>
                <span className="text-sm text-[var(--text-secondary)]">{review.location}</span>
              </div>
            </div>

            {/* Stars + service tag */}
            <div className="flex flex-col items-start sm:items-end gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>
              <span className="text-xs font-medium text-[var(--marine)] bg-[var(--lavande-pale)] rounded-full px-3 py-0.5">
                {review.service}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--marine)] hover:bg-[var(--lavande-pale)] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${i === current
                    ? 'w-6 h-2.5 bg-[var(--marine)]'
                    : 'w-2.5 h-2.5 bg-[var(--lavande)]'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--marine)] hover:bg-[var(--lavande-pale)] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Counter */}
        <p className="text-sm text-[var(--text-secondary)]" aria-live="polite">
          {current + 1} / {reviews.length}
        </p>

      </div>
    </section>
  )
}
