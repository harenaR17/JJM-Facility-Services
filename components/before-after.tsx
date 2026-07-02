'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CompareSlider } from '@/components/compare-slider'

const pairs = [
  {
    label: 'Salle de bain',
    caption: 'Sanitaires professionnels',
    before: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1cwFRXzBoyXm6LC1R7MifGq32JdgYASwel5rb',
    after: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1p71PDuC2YEf4ybC6IOxWJToURhZKi0FeHNzP',
  },
  {
    label: 'Vitrine',
    caption: 'Vitrerie extérieure',
    before: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1JbtMkBiZfzE35o6Km4r8MUVbNqlaTRdYvjFL',
    after: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1ZsgqO7HDC3hKAu4kXl9fzIa2wMgLQiGvdPRB',
  },
  {
    label: 'Chantier après travaux',
    caption: 'Remise en état',
    before: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1TBL7DA01ZgNd0yK4laJk8fXsYvBUbDpCoPuS',
    after: 'https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt12bA6WaP1HTMLhvRyGkY4oiaxU8VBQZ2IK9un',
  },
]

export function BeforeAfter() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const prev = () => setCurrent((c) => (c - 1 + pairs.length) % pairs.length)
  const next = () => setCurrent((c) => (c + 1) % pairs.length)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % pairs.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  const { label, caption, before, after } = pairs[current]

  return (
    <section
      id="avant-apres"
      className="bg-[var(--cream)] py-20 md:py-28"
      aria-label="Avant / après"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col gap-4">
          <span className="inline-flex self-center items-center rounded-full bg-[var(--lavande-pale)] text-[var(--marine)] text-[13px] font-medium px-3 py-1">
            Réalisations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine)] text-balance">
            Avant / Après — nos interventions parlent d&apos;elles-mêmes
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Faites glisser le curseur pour comparer l&apos;état avant et après
            chaque intervention.
          </p>
        </div>

        {/* Slider */}
        <figure
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex flex-col gap-4 transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'
            }`}
        >
          <CompareSlider
            key={current}
            before={before}
            after={after}
            beforeLabel="Avant"
            afterLabel="Après"
          />

          {/* Caption */}
          <figcaption className="flex flex-col items-center gap-0.5 text-center">
            <span className="font-semibold text-[var(--marine-dark)] text-sm font-sans">
              {label}
            </span>
            <span className="text-[var(--text-secondary)] text-xs">
              {caption}
            </span>
          </figcaption>
        </figure>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Réalisation précédente"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--marine)] text-[var(--marine)] hover:bg-[var(--marine)] hover:text-[var(--cream)] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Sélecteur de réalisation">
            {pairs.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Réalisation ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                  ? 'bg-[var(--marine)] w-5'
                  : 'bg-[var(--lavande-pale)] w-2'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Réalisation suivante"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--marine)] text-[var(--marine)] hover:bg-[var(--marine)] hover:text-[var(--cream)] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
