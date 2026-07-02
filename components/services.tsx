'use client'

import { Building2, Sparkles, Wrench, Clock, Phone, ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { QuoteModal } from '@/components/quote-modal'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Building2,
    title: 'Entretien de locaux',
    description:
      'Bureaux, commerces, cabinets — entretien régulier selon vos fréquences.',
  },
  {
    icon: Sparkles,
    title: 'Vitrerie professionnelle',
    description:
      'Nettoyage de vitres intérieures et extérieures. Résultat garanti sans traces.',
  },
  {
    icon: Wrench,
    title: 'Remise en état',
    description:
      'Après travaux, déménagement ou fin de bail. Décrassage complet.',
  },
  {
    icon: Clock,
    title: 'Interventions ponctuelles',
    description:
      "Besoin urgent ou ponctuel ? J'interviens rapidement sur votre secteur.",
  },
]

const staggerClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

export function Services() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>()
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section
      id="services"
      className="bg-[var(--surface)] py-20 md:py-28"
      aria-label="Nos services"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div
          ref={headerRef}
          className={`text-center mb-14 flex flex-col gap-4 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex self-center items-center rounded-full bg-[var(--lavande-pale)] text-[var(--marine)] text-[13px] font-medium px-3 py-1">
            Prestations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine)] text-balance">
            Ce que je fais pour vous
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Des prestations sur-mesure adaptées à vos locaux, vos contraintes
            et vos horaires.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              className={`group bg-white border border-[var(--lavande-pale)] rounded-xl p-7 flex flex-col gap-5 transition-all duration-300
                hover:border-l-4 hover:border-l-[var(--lavande)] hover:border-[var(--lavande-pale)]
                hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1
                reveal ${staggerClasses[i]} ${gridVisible ? 'visible' : ''}`}
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-[var(--lavande-pale)] flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--lavande)] group-hover:bg-opacity-20">
                <Icon
                  className="w-5 h-5 text-[var(--lavande)] group-hover:text-[var(--marine)] transition-colors"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-[var(--marine-dark)] text-lg leading-snug">
                  {title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Besoin d&apos;une intervention rapide ou d&apos;un entretien régulier ? 
            Nous vous accompagnons pour maintenir vos locaux impeccables.
          </p>
          <QuoteModal>
            <Button
              size="lg"
              className="group h-14 px-10 rounded-full bg-[var(--marine)] hover:bg-[var(--marine-dark)] text-white text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </QuoteModal>
          <p className="mt-6 text-sm text-[var(--text-secondary)]/70 italic">
            Réponse sous 24h — Devis gratuit et sans engagement
          </p>
        </div>
      </div>
    </section>
  )
}
