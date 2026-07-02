'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function About() {
  const [photoRef, photoVisible] = useInView<HTMLDivElement>()
  const [textRef, textVisible] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section
      id="about"
      className="bg-[var(--surface)] py-20 md:py-28"
      aria-label="À propos de la fondatrice"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Photo — left on desktop */}
        <div
          ref={photoRef}
          className={`relative flex justify-center md:justify-start order-2 md:order-1 reveal ${photoVisible ? 'visible' : ''}`}
        >
          {/* Accent shape */}
          <div
            className="absolute -bottom-4 -left-4 md:-left-6 w-52 h-72 md:w-64 md:h-80 rounded-2xl bg-[var(--lavande-pale)] border border-[var(--lavande)]/30"
            aria-hidden="true"
          />
          <div className="relative z-10 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-lifted)' }}>
            <Image
              src="https://qwqpvpu78l.ufs.sh/f/dHTn5T2MAgt1Opk7QSDMEhSqVdzrIB4NGC0UuKRm6xga2Pjc"
              alt="Fondatrice de Service Pro'Preté"
              width={420}
              height={504}
              className="object-cover w-full h-auto max-h-[504px]"
            />
          </div>
        </div>

        {/* Text — right on desktop */}
        <div
          ref={textRef}
          className={`flex flex-col gap-6 order-1 md:order-2 reveal reveal-delay-2 ${textVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex self-start items-center rounded-full bg-[var(--lavande-pale)] text-[var(--marine)] text-[13px] font-medium px-3 py-1">
            À propos
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine)] leading-[1.2] text-balance">
            Un nouveau départ, avec 30 ans d&apos;expérience.
          </h2>

          <p className="text-[var(--text-body)] leading-relaxed">
            Forte de plus de 30 ans dans le secteur du nettoyage professionnel,
            j&apos;ai fondé Service Pro&apos;Preté pour mettre mon
            expertise au service des entreprises et commerces de
            Loire-Atlantique. Mon parcours m&apos;a appris que la qualité
            d&apos;une prestation repose autant sur le savoir-faire que sur la
            relation humaine.
          </p>

          <p className="text-[var(--text-body)] leading-relaxed">
            Chaque client est unique. J&apos;adapte mes interventions à vos
            locaux, votre activité et vos contraintes horaires. Je travaille
            avec du matériel professionnel — monobrosse autolaveuse,
            équipements vitrerie — pour garantir des résultats irréprochables à
            chaque passage.
          </p>

          {/* Location tag */}
          <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm pt-1">
            <MapPin className="w-4 h-4 text-[var(--lavande)]" aria-hidden="true" />
            <span>Varades — Loireauxence, Loire-Atlantique</span>
          </div>
        </div>
      </div>
    </section>
  )
}
