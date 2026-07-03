'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

const PLACEHOLDER_VIDEO_URL =
  'https://www.youtube.com/embed/TUrR0xxeczE?si=13t4g_cUa7SIVdZj'

export function VideoSection() {
  const [videoRef, videoVisible] = useInView<HTMLDivElement>()
  const [textRef, textVisible] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section
      id="presentation"
      className="bg-[var(--lavande-pale)] py-20 md:py-28"
      aria-label="Our Story"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Video — left on desktop */}
        <div
          ref={videoRef}
          className={`relative flex gap-4 items-stretch reveal ${videoVisible ? 'visible' : ''}`}
        >
          {/* Navy left-edge accent bar */}
          <div
            aria-hidden="true"
            className="hidden md:block w-1.5 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(to bottom, var(--lavande), var(--marine))' }}
          />
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: 'var(--shadow-lifted)' }}>
            <iframe
              src={PLACEHOLDER_VIDEO_URL}
              title="JJM Facility Services — Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Text — right on desktop */}
        <div
          ref={textRef}
          className={`flex flex-col gap-6 reveal reveal-delay-2 ${textVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex self-start items-center rounded-full bg-white text-[var(--marine)] text-[13px] font-medium px-3 py-1 border border-[var(--lavande-pale)]">
            Our Story
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine)] leading-[1.2] text-balance">
            A family business built on real care.
          </h2>

          <p className="text-[var(--text-body)] leading-relaxed">
            Since 2015, JJM Facility Services has been a family-owned business proudly serving the
            Cleveland area. We created JJM to bring dependable, high-quality commercial cleaning
            to offices, medical facilities, schools, and industrial spaces. Our commitment: spotless
            results, honest pricing, and service you can count on.
          </p>

          <p className="text-[var(--text-body)] leading-relaxed">
            We work with trained, dependable professionals who adapt to your facility&apos;s needs
            and schedule. Whether you need routine janitorial service or a one-time
            post-construction cleanup, we&apos;re here for you.
          </p>

          {/* Signature */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--lavande)] flex-shrink-0">
              <Image
                src="https://placehold.co/80x80/1A2B6B/FFFFFF?text=J"
                alt="Founder"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-[var(--text-secondary)] text-sm italic">
              — Owner, JJM Facility Services
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
