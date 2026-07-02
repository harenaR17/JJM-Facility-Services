'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function QuoteModal({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const mailtoHref = () => {
    const subject = encodeURIComponent('Demande de devis – Service Pro\'Preté')
    const body = encodeURIComponent(
      `Nom : ${form.name}\nTéléphone : ${form.phone}\n\n${form.message}`
    )
    return `mailto:serviceproprete44@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="!w-[90vw] md:!w-[500px] md:!max-w-[500px] overflow-hidden max-h-[90vh] flex flex-col p-8 bg-white" style={{ boxShadow: 'var(--shadow-card)' }}>
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl md:text-3xl text-[var(--marine-dark)]">
            Demander un devis gratuit
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 mt-2 overflow-y-auto pr-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="modal-name" className="text-sm font-medium text-[var(--text-body)]">
              Nom complet <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-name"
              name="name"
              type="text"
              required
              placeholder="Jean Dupont"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="modal-email" className="text-sm font-medium text-[var(--text-body)]">
              Email <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-email"
              name="email"
              type="email"
              required
              placeholder="jean.dupont@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="modal-phone" className="text-sm font-medium text-[var(--text-body)]">
              Téléphone <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              required
              placeholder="06 12 34 56 78"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="modal-message" className="text-sm font-medium text-[var(--text-body)]">
              Message
            </label>
            <textarea
              id="modal-message"
              name="message"
              rows={4}
              placeholder="Décrivez votre projet..."
              value={form.message}
              onChange={handleChange}
              className="w-full border border-[var(--lavande-pale)] rounded-lg px-4 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--marine)] transition resize-none"
            />
          </div>
        </div>

        <div className="mt-4 shrink-0">
          <a
            href={mailtoHref()}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white bg-[var(--marine)] hover:bg-[var(--marine-dark)] transition-colors"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            Envoyer ma demande
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
