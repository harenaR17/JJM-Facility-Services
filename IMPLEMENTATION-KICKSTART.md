# IMPLEMENTATION KICKSTART — Service Pro'Preté Landing Page

> **Goal:** Build a pixel-faithful, fully responsive frontend prototype of the Service Pro'Preté landing page, ready to present to the client. All assets use link-based placeholders (image URLs + YouTube embeds). No backend. CTA triggers `mailto:`.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 — App Router |
| Styling | Tailwind CSS + CSS custom properties |
| Components | shadcn/ui (Button, Card) |
| Icons | Lucide React |
| Before/After slider | `react-compare-image` |
| Fonts | `next/font/google` — DM Serif Display + DM Sans |

---

## Design System

### Color Palette

| Token | Hex | Role |
|---|---|---|
| `--marine` | `#2B2E6E` | Primary — CTA, nav, footer |
| `--marine-dark` | `#1A1C4A` | Headings, hover states |
| `--lavande` | `#9B9FD4` | Accent — icons, borders |
| `--lavande-pale` | `#E8E8F5` | Section backgrounds, badges |
| `--cream` | `#F5F3EE` | Main body background, hero |
| `--surface` | `#FFFFFF` | Cards, white sections |
| `--text-secondary` | `#6B7280` | Descriptions, captions |

All tokens defined in `app/globals.css` and mapped in `tailwind.config.ts`.

### Typography

| Level | Font | Size (desktop / mobile) | Color |
|---|---|---|---|
| H1 | DM Serif Display | 56px / 36px | `--marine-dark` |
| H2 | DM Serif Display | 36px / 28px | `--marine` |
| H3 | DM Sans Bold | 20px | `--marine-dark` |
| Body | DM Sans Regular | 16px, line-height 1.7 | `#374151` |
| Caption | DM Sans Medium | 13px | `--text-secondary` |

### Key Component Specs

**CTA Button (primary)**
- Background: `--marine`, hover: `--marine-dark`
- Padding: `14px 32px`, `border-radius: 8px`, `font-weight: 600`
- White version (CTA section): white background, `--marine` text

**Service Card**
- White background, border `1px solid --lavande-pale`
- Hover: border `--lavande`, box-shadow `0 4px 20px rgba(43,46,110,0.08)`
- `border-radius: 12px`, padding `28px 24px`

**Badge/Tag**
- Background `--lavande-pale`, color `--marine`
- `border-radius: 99px`, padding `4px 12px`, `font-size: 13px`

---

## File Structure

```
app/
├── layout.tsx              ← Fonts, SEO metadata, JSON-LD, globals
├── page.tsx                ← Section assembly (imports all components)
└── globals.css             ← CSS custom properties, Tailwind base

components/
├── nav.tsx                 ← Sticky nav, transparent-to-white on scroll
├── hero.tsx                ← Two-column hero, swirl background pattern
├── trust-strip.tsx         ← 3-column reassurance band
├── video-section.tsx       ← YouTube embed + founder story text
├── services.tsx            ← 4-card services grid
├── before-after.tsx        ← react-compare-image slider grid (4 pairs)
├── demo-video-banner.tsx   ← Full-width dark navy YouTube embed
├── why-us.tsx              ← Navy section, 4 checkmark arguments
├── about.tsx               ← Two-column founder portrait + bio
├── cta-section.tsx         ← Final CTA, contact details, zone
├── footer.tsx              ← Dark navy footer, 3-column layout
└── sticky-mobile-cta.tsx   ← Mobile-only bottom bar, appears after hero scroll
```

---

## Section-by-Section Specification

### Section 1 — Navigation (`nav.tsx`)

- **Behaviour:** `position: sticky, top: 0`. Transparent on hero, white + `box-shadow` after scroll (`IntersectionObserver` on hero sentinel).
- **Desktop:** Logo left (`"Service Pro'Preté"` in DM Serif Display, `--marine`) + single CTA button right.
- **Mobile:** Logo centered. Nav CTA hidden. Sticky bottom bar handles mobile CTA (see Section 11).

---

### Section 2 — Hero (`hero.tsx`)

- **Background:** `--cream` + inline SVG swirl pattern, `opacity: 0.06`, `pointer-events: none`, `position: absolute`.
- **Layout:** Two columns desktop (text left, visual right), stacked mobile (text first, image below).
- **Content (left):**
  - Badge: `"Nettoyage professionnel · Loire-Atlantique"`
  - H1: `"Des locaux impeccables. Zéro prise de tête."`
  - Subtitle: `"Nettoyage professionnel pour entreprises et commerces en Loire-Atlantique — entretien régulier, vitrerie, remise en état après travaux."`
  - CTA: `<a href="mailto:serviceproprete44@gmail.com">Obtenir un devis gratuit →</a>` (full-width on mobile)
  - Micro-text: `"Réponse sous 24h — Devis sans engagement"`
- **Content (right):** Founder photo — placeholder: `https://placehold.co/600x700/2B2E6E/FFFFFF?text=Photo+Fondatrice`. Navy geometric shape behind image.
- **Scroll sentinel:** Invisible `<div id="hero-sentinel" />` at bottom of hero, observed by nav + sticky mobile CTA.

---

### Section 3 — Trust Strip (`trust-strip.tsx`)

- **Background:** `--surface` (white).
- **Layout:** 3 equal columns, thin vertical separators, generous padding.
- **Items (Lucide icons in `--lavande`):**
  1. `<Briefcase />` — "Matériel pro fourni" / "À chaque intervention"
  2. `<CalendarDays />` — "Horaires adaptés" / "Selon vos contraintes"
  3. `<BadgeCheck />` — "Devis gratuit" / "Réponse sous 24h"

---

### Section 4 — Video Presentation (`video-section.tsx`)

- **Background:** `--lavande-pale`.
- **Layout:** Two columns desktop (video left, text right), stacked mobile (video first).
- **Video placeholder:** YouTube `<iframe>` embed using a generic public YouTube video URL as stand-in: `https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1`. Replace with real URL when provided. Ratio: 16:9, `border-radius: 12px`.
- **Text content:**
  - Badge: `"Notre histoire"`
  - H2: `"Derrière chaque prestation, une vraie professionnelle."`
  - Body: Full paragraph from copywriting section.
  - Signature line: `"— Fondatrice de Service Pro'Preté"` with small avatar placeholder.

---

### Section 5 — Services (`services.tsx`)

- **Background:** `--surface`.
- **Layout:** 2×2 grid mobile, 4 columns desktop.
- **Section heading:** H2 `"Ce que je fais pour vous"` + subtitle.
- **Cards (Lucide icons on `--lavande-pale` circle bg):**
  1. `<Building2 />` — "Entretien de locaux" — "Bureaux, commerces, cabinets — entretien régulier selon vos fréquences."
  2. `<Sparkles />` — "Vitrerie professionnelle" — "Nettoyage de vitres intérieures et extérieures. Résultat garanti sans traces."
  3. `<Wrench />` — "Remise en état" — "Après travaux, déménagement ou fin de bail. Décrassage complet."
  4. `<Clock />` — "Interventions ponctuelles" — "Besoin urgent ou ponctuel ? J'interviens rapidement sur votre secteur."

---

### Section 6 — Before / After (`before-after.tsx`)

- **Background:** `--cream`.
- **Layout:** 2-column grid desktop, 1 column mobile.
- **Component:** `react-compare-image` slider for each pair.
- **Placeholder images:** Use `https://placehold.co/600x400` with descriptive query params per pair. Each pair has "Avant" and "Après" badge labels.
- **4 pairs with captions:**
  1. Salle de bain — "Sanitaires professionnels"
  2. Bureau — "Entretien de locaux"
  3. Vitrine commerciale — "Vitrerie extérieure"
  4. Chantier après travaux — "Remise en état"

---

### Section 6b — Demo Video Banner (`demo-video-banner.tsx`)

- **Background:** `--marine-dark` (`#1A1C4A`).
- **Layout:** Full width, centered text + YouTube embed below.
- **Title (white):** `"Regardez notre monobrosse autolaveuse en action"`
- **Video placeholder:** YouTube embed — same stand-in URL as Section 4 until real video is provided.

---

### Section 7 — Why Us (`why-us.tsx`)

- **Background:** `--marine`.
- **Text:** White.
- **Layout:** Centered H2 + 4 arguments in 2-column grid.
- **Arguments (SVG check in `#C5C8E8`):**
  1. "Matériel professionnel apporté à chaque intervention"
  2. "Prestations sur-mesure selon vos horaires"
  3. "Réactive et joignable — réponse sous 24h"
  4. "Entreprise locale, basée à Loireauxence (44)"
- **Background texture:** Subtle CSS radial dot pattern at ~5% opacity.

---

### Section 8 — About (`about.tsx`)

- **Background:** `--surface`.
- **Layout:** Two columns (photo left, text right), stacked mobile.
- **Photo placeholder:** `https://placehold.co/500x600/2B2E6E/FFFFFF?text=Photo+Fondatrice` with navy accent shape behind.
- **Text content:**
  - Badge: `"À propos"`
  - H2: `"Un nouveau départ, avec 30 ans d'expérience."`
  - Body: Full paragraph from copywriting.
  - Location tag: `"Varades — Loireauxence, Loire-Atlantique"`

---

### Section 9 — Final CTA (`cta-section.tsx`)

- **Background:** `--marine`.
- **Text:** White.
- **Layout:** Centered.
- **Content:**
  - H2: `"Prêt à déléguer le nettoyage ?"`
  - Subtitle: `"Contactez-moi pour un devis personnalisé et gratuit. Je vous réponds dans les 24 heures."`
  - CTA: White button, `--marine` text → `href="mailto:serviceproprete44@gmail.com"`
  - Email link: `serviceproprete44@gmail.com`
  - Phone link: `tel:+33695909891` → `06 95 90 98 91`
  - Zone: `"Loireauxence · Varades · Ancenis · Saint-Florent-le-Vieil et alentours"`

---

### Section 10 — Footer (`footer.tsx`)

- **Background:** `--marine-dark`.
- **Text:** White / light gray.
- **Layout:** Logo + tagline left, 2 columns (Services list, Contact), bottom copyright bar.
- **Logo:** Text fallback `"Service Pro'Preté"` in DM Serif Display white.
- **Services links:** Entretien de locaux · Vitrerie · Remise en état (anchor links to services section).
- **Bottom bar:** `"© 2025 Service Pro'Preté — Tous droits réservés"` with thin top border.

---

### Section 11 — Sticky Mobile CTA (`sticky-mobile-cta.tsx`)

- **Visibility:** Mobile only (`md:hidden`). Appears **only after the user scrolls past the hero** using `IntersectionObserver` on `#hero-sentinel`.
- **Layout:** Full-width, fixed bottom, navy background, white text.
- **Content:** `<Phone />` icon + `"Obtenir un devis"` → `href="mailto:serviceproprete44@gmail.com"`.
- **Safe area:** `padding-bottom: env(safe-area-inset-bottom)` for notched phones.
- **Transition:** Slides up from bottom (`translate-y-full` → `translate-y-0`) with 200ms ease.

---

## Asset Placeholder Strategy

All assets use public URL-based placeholders to simulate real content in the prototype. Replace URLs with client-provided links when available — no file changes needed, only URL swaps.

| Asset | Placeholder URL pattern |
|---|---|
| Founder portrait (hero) | `https://placehold.co/600x700/2B2E6E/FFFFFF?text=Photo+Fondatrice` |
| Founder portrait (about) | `https://placehold.co/500x600/2B2E6E/FFFFFF?text=Photo+Fondatrice` |
| Before images (×4) | `https://placehold.co/600x400/9B9FD4/FFFFFF?text=Avant` |
| After images (×4) | `https://placehold.co/600x400/2B2E6E/FFFFFF?text=Après` |
| Presentation video | `https://www.youtube.com/embed/YOUTUBE_ID_HERE?rel=0&modestbranding=1` |
| Demo video | `https://www.youtube.com/embed/YOUTUBE_ID_HERE?rel=0&modestbranding=1` |

---

## SEO & Metadata (`app/layout.tsx`)

- `<title>`: `"Service Pro'Preté | Nettoyage professionnel — Loireauxence, Loire-Atlantique"`
- `<meta description>`: `"Entreprise de nettoyage professionnel basée à Loireauxence (44). Entretien de locaux, vitrerie, remise en état après travaux. Devis gratuit sous 24h."`
- `metadataBase`: Vercel preview URL for now, swap to `https://www.serviceproprete.fr` when domain is live.
- **JSON-LD** `LocalBusiness` schema inline in `<head>` with full address, phone, email, and `areaServed`.
- `lang="fr"` on `<html>`.

---

## Build Tasks

```
1. Setup        → globals.css tokens + tailwind.config.ts + layout.tsx (fonts, metadata)
2. Nav          → nav.tsx (scroll behavior via IntersectionObserver)
3. Hero         → hero.tsx (two-column, swirl SVG, mailto CTA)
4. Trust Strip  → trust-strip.tsx (3 Lucide icons)
5. Video        → video-section.tsx (YouTube iframe + founder text)
6. Services     → services.tsx (4 cards grid)
7. Before/After → before-after.tsx (react-compare-image, 4 pairs)
8. Demo Banner  → demo-video-banner.tsx (full-width navy + YouTube)
9. Why Us       → why-us.tsx (navy bg, 4 checkmarks)
10. About       → about.tsx (two-column, founder bio)
11. CTA Final   → cta-section.tsx (navy, mailto, contact info)
12. Footer      → footer.tsx (dark navy, 3 columns)
13. Sticky CTA  → sticky-mobile-cta.tsx (mobile only, post-hero scroll)
14. Assembly    → app/page.tsx (import and order all sections)
```

---

## Out of Scope (Prototype Phase)

- Backend / form submission handling
- Analytics integration
- `robots.txt` / `sitemap.xml`
- Mentions légales page
- Real domain configuration
- Image optimization pipeline (WebP compression)

These are deferred to the production phase after client approval.

---

*Plan version: 1.0 — Frontend prototype only*
*Stack: Next.js 16 · Tailwind CSS · shadcn/ui · DM Serif Display + DM Sans*
*Client: Service Pro'Preté — Loireauxence, Loire-Atlantique (44)*
