'use client'

import { useInView } from '@/hooks/use-in-view'
import { Phone, ArrowRight } from 'lucide-react'
import { QuoteModal } from '@/components/quote-modal'
import { Button } from '@/components/ui/button'

const arguments_ = [
  'Matériel professionnel apporté à chaque intervention',
  'Prestations sur-mesure selon vos horaires',
  'Réactive et joignable — réponse sous 24h',
  'Entreprise locale, basée à Loireauxence (44)',
]

const staggerClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5 flex-shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill="#C5C8E8" fillOpacity="0.25" />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="#C5C8E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhyUs() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section
      id="pourquoi-nous"
      className="relative bg-[var(--marine)] py-20 md:py-28 overflow-hidden"
      aria-label="Pourquoi nous choisir"
    >
      {/* Subtle radial dot texture */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center gap-12">
        {/* Heading */}
        <div
          ref={headerRef}
          className={`text-center flex flex-col gap-4 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex self-center items-center rounded-full bg-white/10 text-white text-[13px] font-medium px-3 py-1">
            Nos engagements
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
            Pourquoi choisir Service Pro&apos;Preté ?
          </h2>
        </div>

        {/* Arguments grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl"
        >
          {arguments_.map((arg, i) => (
            <div
              key={arg}
              className={`flex items-start gap-4 bg-white/10 rounded-xl p-6 border border-transparent
                transition-all duration-300 hover:border-[var(--lavande)]/50 hover:ring-2 hover:ring-[var(--lavande)]/30 hover:bg-white/15
                reveal ${staggerClasses[i]} ${gridVisible ? 'visible' : ''}`}
            >
              <CheckIcon />
              <p className="text-white text-base leading-relaxed font-medium">
                {arg}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Bénéficiez du savoir-faire d&apos;une entreprise locale et réactive pour vos besoins de nettoyage.
          </p>
          <QuoteModal>
            <Button
              size="lg"
              className="group h-14 px-10 rounded-full bg-[var(--lavande)] hover:bg-white hover:text-[var(--marine-dark)] text-white text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>Démarrer mon projet</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </QuoteModal>
          <p className="mt-6 text-sm text-white/40 italic">
            Réponse garantie sous 24 heures
          </p>
        </div>
      </div>
    </section>
  )
}
