import { Briefcase, CalendarDays, BadgeCheck } from 'lucide-react'

const items = [
  {
    icon: Briefcase,
    title: 'Matériel pro fourni',
    subtitle: 'À chaque intervention',
  },
  {
    icon: CalendarDays,
    title: 'Horaires adaptés',
    subtitle: 'Selon vos contraintes',
  },
  {
    icon: BadgeCheck,
    title: 'Devis gratuit',
    subtitle: 'Réponse sous 24h',
  },
]

export function TrustStrip() {
  return (
    <section
      className="relative bg-[var(--marine-dark)] overflow-hidden"
      aria-label="Nos engagements"
    >
      {/* Dot texture — same pattern as why-us */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.04 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="trust-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#trust-dots)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row items-center gap-4 py-8 px-8 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Icon
                  className="w-5 h-5 text-[var(--lavande)]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-base font-sans">
                  {title}
                </p>
                <p className="text-white/60 text-sm mt-0.5">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
