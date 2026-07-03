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
      aria-label="About JJM Facility Services"
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
              src="https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUSP0e6GMLQwrlgoqNsXSPhC4fZ1I7b5GER3Hz"
              alt="JJM Facility Services Founder"
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
            About Us
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine)] leading-[1.2] text-balance">
            Dependable cleaning, backed by nearly a decade of experience.
          </h2>

          <p className="text-[var(--text-body)] leading-relaxed">
            Established in 2015, JJM Facility Services is a family-owned business dedicated to
            creating cleaner, safer, and healthier environments for businesses across the Cleveland
            area. Our experience has taught us that great service comes from both skill and genuine
            care for our clients.
          </p>

          <p className="text-[var(--text-body)] leading-relaxed">
            Every client is unique. We tailor our services to your facility, your industry, and your
            schedule. From floor stripping and waxing to restroom sanitization and upholstery
            cleaning, we use professional-grade methods to guarantee flawless results every time.
          </p>

          {/* Location tag */}
          <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm pt-1">
            <MapPin className="w-4 h-4 text-[var(--lavande)]" aria-hidden="true" />
            <span>Middleburg Heights — Cleveland Area, Ohio</span>
          </div>
        </div>
      </div>
    </section>
  )
}
