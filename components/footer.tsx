import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const LOGO_URL = 'https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUlWc0SjQgsYJlfkie2dTVHAUXw9rBNC1Iq6G5'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer
      className="bg-[var(--marine-dark)] text-white/80"
      aria-label="Footer"
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
                alt="JJM Facility Services logo"
                width={36}
                height={36}
                className="rounded-full object-cover flex-shrink-0"
                unoptimized
              />
              <p className="font-serif text-xl text-white">
                JJM Facility Services
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Affordable and dependable commercial cleaning for the Cleveland area.
            </p>
            <p className="text-xs text-white/40 mt-2">
              Middleburg Heights, OH 44130
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm font-sans tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
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
                  href="tel:+14405321475"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  (440) 532-1475
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jjmfacilityservices.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  info@jjmfacilityservices.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>7017 Pearl Rd, Ste 1E<br />Middleburg Heights, OH 44130</span>
              </li>
            </ul>
            <div className="mt-2">
              <a
                href="tel:+14405321475"
                className="inline-flex items-center rounded-lg bg-[var(--lavande)] hover:bg-[var(--marine)] px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                Get a Free Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2026 JJM Facility Services. All rights reserved.</p>
          <p>Middleburg Heights · Cleveland · Ohio</p>
        </div>
      </div>
    </footer>
  )
}
