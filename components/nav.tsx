'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { QuoteModal } from '@/components/quote-modal'

const LOGO_URL = 'https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUlWc0SjQgsYJlfkie2dTVHAUXw9rBNC1Iq6G5'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--lavande-pale)]/60'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 transition-colors duration-300 ${scrolled ? 'text-[var(--marine)]' : 'text-white'
            }`}
          aria-label="JJM Facility Services — scroll to top"
        >
          <Image
            src={LOGO_URL}
            alt="JJM Facility Services logo"
            width={32}
            height={32}
            className="rounded-full object-cover flex-shrink-0"
            unoptimized
          />
          <span className="font-serif text-xl font-normal leading-none">
            JJM Facility Services
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-[var(--text-body)] hover:text-[var(--marine)]' : 'text-white/90 hover:text-white'
              }`}
          >
            Services
          </a>
          <a
            href="#avant-apres"
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-[var(--text-body)] hover:text-[var(--marine)]' : 'text-white/90 hover:text-white'
              }`}
          >
            Our Work
          </a>
          <a
            href="#about"
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-[var(--text-body)] hover:text-[var(--marine)]' : 'text-white/90 hover:text-white'
              }`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${scrolled ? 'text-[var(--text-body)] hover:text-[var(--marine)]' : 'text-white/90 hover:text-white'
              }`}
          >
            Contact
          </a>
          <a
            href="tel:+14405321475"
            className={`flex items-center gap-2 rounded-lg px-5 py-2 font-semibold transition-colors ${scrolled
                ? 'bg-[var(--lavande)] hover:bg-[var(--marine)] text-white'
                : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (440) 532-1475
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[var(--marine)]' : 'text-white'
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-b border-[var(--lavande-pale)]/60 flex flex-col items-center py-8 gap-6 z-40">
          <a
            href="#services"
            className="text-[var(--text-body)] hover:text-[var(--marine)] font-medium text-lg w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#avant-apres"
            className="text-[var(--text-body)] hover:text-[var(--marine)] font-medium text-lg w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Work
          </a>
          <a
            href="#about"
            className="text-[var(--text-body)] hover:text-[var(--marine)] font-medium text-lg w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[var(--text-body)] hover:text-[var(--marine)] font-medium text-lg w-full text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="tel:+14405321475"
            className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold bg-[var(--lavande)] hover:bg-[var(--marine)] text-white w-[80%] mt-2"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (440) 532-1475
          </a>
        </div>
      )}
    </header>
  )
}
