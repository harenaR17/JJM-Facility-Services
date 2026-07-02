import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

const LOGO_URL = 'https://niy5kmpsgn.ufs.sh/f/Ae47L81N5E0P4Z5uhdWezwyf2bjKd9Lun5HDkCxgtETcelQJ'

const serviceLinks = [
  { label: 'Entretien de locaux', href: '#services' },
  { label: 'Vitrerie professionnelle', href: '#services' },
  { label: 'Remise en état', href: '#services' },
  { label: 'Interventions ponctuelles', href: '#services' },
]

export function Footer() {
  return (
    <footer
      className="bg-[var(--marine-dark)] text-white/80"
      aria-label="Pied de page"
    >
      {/* Gradient top accent bar */}
      <div
        aria-hidden="true"
        className="h-1 w-full"
        style={{ background: 'linear-gradient(to right, var(--lavande), var(--marine), var(--lavande))' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={LOGO_URL}
                alt="Service Pro'Preté logo"
                width={36}
                height={36}
                className="rounded-full object-cover flex-shrink-0"
                unoptimized
              />
              <p className="font-serif text-xl text-white">
                Service Pro&apos;Preté
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Nettoyage professionnel pour entreprises et commerces en
              Loire-Atlantique.
            </p>
            <p className="text-xs text-white/40 mt-2">
              Loireauxence (Varades), 44370
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm font-sans tracking-wide uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm font-sans tracking-wide uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:serviceproprete44@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  serviceproprete44@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33695909891"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  06 95 90 98 91
                </a>
              </li>
            </ul>
            <div className="mt-2">
              <a
                href="mailto:serviceproprete44@gmail.com"
                className="inline-flex items-center rounded-lg bg-[var(--marine)] hover:bg-[var(--lavande)] px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                Devis gratuit →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2025 Service Pro&apos;Preté — Tous droits réservés</p>
          <p>Loireauxence · Varades · Ancenis · Loire-Atlantique</p>
        </div>
      </div>
    </footer>
  )
}
