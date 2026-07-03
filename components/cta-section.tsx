'use client'

import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send, CreditCard } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function CtaSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sectionRef, sectionVisible] = useInView<HTMLDivElement>({ threshold: 0.05 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const mailtoHref = () => {
    const subject = encodeURIComponent('Free Quote Request – JJM Facility Services')
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    )
    return `mailto:info@jjmfacilityservices.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" aria-label="Contact and Quote" className="relative bg-[var(--cream)] py-20 md:py-28 overflow-hidden">
      {/* Ambient orb behind form */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-[var(--lavande-pale)] text-[var(--marine)] text-[13px] font-medium px-3 py-1 mb-4">
            Contact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--marine-dark)] text-balance">
            Request Your Free Quote
          </h2>
        </div>

        {/* Two-card grid */}
        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 gap-6 items-stretch"
        >
          {/* LEFT — Contact details card */}
          <div
            className={`rounded-2xl p-8 flex flex-col gap-8 text-white reveal ${sectionVisible ? 'visible' : ''}`}
            style={{ background: 'linear-gradient(145deg, var(--marine) 0%, var(--marine-dark) 100%)' }}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-white">Contact Us</h3>

            {/* Contact items */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <Phone className="w-5 h-5 text-[var(--lavande)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white/70 mb-0.5">Phone</p>
                  <a href="tel:+14405321475" className="text-white font-medium hover:text-white/80 transition-colors">
                    (440) 532-1475
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <MapPin className="w-5 h-5 text-[var(--lavande)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white/70 mb-0.5">Location</p>
                  <p className="text-white font-medium">7017 Pearl Rd, Ste 1E</p>
                  <p className="text-white/80 text-sm">Middleburg Heights, OH 44130</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <Mail className="w-5 h-5 text-[var(--lavande)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white/70 mb-0.5">Contact</p>
                  <p className="text-white font-medium">info@jjmfacilityservices.com</p>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[var(--lavande)]" aria-hidden="true" />
                <p className="font-semibold text-white text-sm">Business Hours</p>
              </div>
              <ul className="flex flex-col gap-1 text-white/80 text-sm">
                <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
                <li>Sat: Closed</li>
                <li>Sun: Closed</li>
              </ul>
            </div>

            {/* Payment methods */}
            <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CreditCard className="w-4 h-4 text-[var(--lavande)] flex-shrink-0" aria-hidden="true" />
              <p className="text-white/70 text-sm">Credit Cards · Zelle · Cash App</p>
            </div>

            {/* Call CTA */}
            <a
              href="tel:+14405321475"
              className="mt-auto flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white bg-[var(--lavande)] hover:bg-[var(--marine-dark)] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* RIGHT — Quote form card */}
          <div
            className={`bg-white rounded-2xl p-8 flex flex-col gap-6 reveal reveal-delay-2 ${sectionVisible ? 'visible' : ''}`}
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--marine-dark)]">
              Request a Free Quote
            </h3>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-name" className="text-sm font-medium text-[var(--text-body)]">
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-email" className="text-sm font-medium text-[var(--text-body)]">
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-phone" className="text-sm font-medium text-[var(--text-body)]">
                  Phone <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(440) 555-0123"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="cta-message" className="text-sm font-medium text-[var(--text-body)]">
                  Message
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your cleaning needs..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition resize-none"
                />
              </div>
            </div>

            <a
              href={mailtoHref()}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white bg-[var(--marine)] hover:bg-[var(--marine-dark)] transition-colors"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              Send My Request
            </a>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-10 rounded-2xl overflow-hidden w-full h-80 md:h-[400px]" style={{ boxShadow: 'var(--shadow-card)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-81.8!3d41.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831004b79dd6cc9%3A0x0!2s7017+Pearl+Rd%2C+Middleburg+Heights%2C+OH+44130!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JJM Facility Services — 7017 Pearl Rd, Middleburg Heights, OH 44130"
          />
        </div>
      </div>
    </section>
  )
}
