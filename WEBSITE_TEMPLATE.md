# Website Template Structure

This document defines the reusable template structure for the Service Pro'Preté B2B cleaning services website. Use this to quickly adapt the site for new businesses by updating the copy and color palette.

---

## Part 1: Color Palette Configuration

The website uses a consistent **5-color system**. Update these values in `app/globals.css` under `:root` to rebrand for a new business.

### Primary Colors
```css
--marine:           #2B2E6E;        /* Primary brand color — buttons, headings, accents */
--marine-dark:      #1A1C4A;        /* Darker variant — hero bg, section accents, footer */
```

### Secondary/Accent Colors
```css
--lavande:          #9B9FD4;        /* Accent color — CTAs, highlights, hovers */
--lavande-pale:     #E8E8F5;        /* Light accent — badges, input borders, hover states */
--cream:            #F5F3EE;        /* Background — default section bg, cards, contrast */
```

### Utility Colors
```css
--surface:          #FFFFFF;        /* Card surfaces, form inputs, white overlays */
--text-body:        #374151;        /* Primary text color for body copy */
--text-secondary:   #6B7280;        /* Secondary text — subtitles, captions, metadata */
```

### How to Rebrand
1. Choose 2 primary brand colors (e.g., navy + teal) → replace `--marine` and `--marine-dark`
2. Choose 1-2 accent colors for highlights → replace `--lavande` and `--lavande-pale`
3. Keep neutrals (`--cream`, `--surface`, `--text-*`) or adapt to match your brand
4. Update all CSS variables and `@theme` values in `globals.css`

---

## Part 2: Website Copy Structure

The website follows this hierarchical structure. **Bold items** are static/structural; *italic items* should be replaced with new business copy.

### 1. Navigation & Header
**Location:** `components/nav.tsx`

- Logo text: *{Business Name}* (e.g., "Service Pro'Preté", "CleanWorks Plus")
- Navigation links: "Services" | "Réalisations" | "À propos" | "Contact" (kept static)
- CTA button: *{Phone Number}* or "Devis gratuit"

---

### 2. Hero Section
**Location:** `components/hero.tsx`

#### Badge (Eyebrow)
```
{Business Type} · {Geographic Region}
→ Example: "Nettoyage professionnel · Loire-Atlantique"
```

#### Headline (H1)
```
{Core Promise}. {Emotional Hook}.
→ Example: "Des locaux impeccables. Zéro prise de tête."
```
- First part: concrete benefit
- Second part (italicized in accent color): emotional/aspirational message

#### Subheadline
```
{Solution Type} pour {Target Audience} et {Secondary Audience} en {Region} — {Rotating Service 1}, {Rotating Service 2}, {Rotating Service 3}.
→ Example: "Nettoyage professionnel pour entreprises et commerces en Loire-Atlantique — entretien régulier, vitrerie, remise en état."
```
- Rotating services cycle every 2.5 seconds with fade-up animation

#### CTA Button
```
{Action Verb} {Benefit} →
→ Example: "Obtenir un devis gratuit →"
```

#### Micro-text
```
{Reassurance} — {Value Prop}
→ Example: "Réponse sous 24h — Devis sans engagement"
```

#### Hero Image
- Right-side photo of founder/team member (or business hero image)
- Alt text: *"{Business} Founder/Team"*

---

### 3. Trust Strip (3 Quick Claims)
**Location:** `components/trust-strip.tsx`

Three items with icon + title + subtitle:

```
1. Icon + "{Feature 1}" + "{Feature 1 Description}"
2. Icon + "{Feature 2}" + "{Feature 2 Description}"
3. Icon + "{Feature 3}" + "{Feature 3 Description}"
```

**Example:**
```
1. Briefcase icon + "Matériel pro fourni" + "À chaque intervention"
2. Calendar icon + "Horaires adaptés" + "Selon vos contraintes"
3. Badge Check icon + "Devis gratuit" + "Réponse sous 24h"
```

---

### 4. Services Section
**Location:** `components/services.tsx`

#### Section Badge
```
{Category Label}
→ Example: "Prestations"
```

#### Section Heading
```
{Main Offer}
→ Example: "Ce que je fais pour vous"
```

#### Section Description
```
{Sub-benefit with personalization}
→ Example: "Des prestations sur-mesure adaptées à vos locaux, vos contraintes et vos horaires."
```

#### Service Cards (4 items)
Each card:
```
{Service Name}
{Service Description — concise, benefit-focused}
```

**Example:**
```
1. Entretien de locaux
   "Bureaux, commerces, cabinets — entretien régulier selon vos fréquences."
   
2. Vitrerie professionnelle
   "Nettoyage de vitres intérieures et extérieures. Résultat garanti sans traces."
   
3. Remise en état
   "Après travaux, déménagement ou fin de bail. Décrassage complet."
   
4. Interventions ponctuelles
   "Besoin urgent ou ponctuel ? J'interviens rapidement sur votre secteur."
```

#### Bottom CTA (below cards)
```
{Closing sentence inviting action}
→ Example: "Besoin d'une intervention rapide ou d'un entretien régulier ? Nous vous accompagnons pour maintenir vos locaux impeccables."

Button: "{Action} →"
→ Example: "Demander un devis gratuit →"

Micro-text: {Reassurance}
→ Example: "Réponse sous 24h — Devis gratuit et sans engagement"
```
- Button opens the **QuoteModal** (does not link to email or phone directly)

---

### 5. Video Section (Founder Story)
**Location:** `components/video-section.tsx`

#### Badge
```
{Context Label}
→ Example: "Notre histoire"
```

#### Heading
```
{Founder Promise} {Tagline}.
→ Example: "Derrière chaque prestation, une vraie professionnelle."
```

#### Paragraph 1 (Background)
```
{Years of experience} dans {industry}, j'ai créé {business name} pour proposer {core value} aux {target audience} de {region}. Mon engagement : {promise 1}, {promise 2}, et {promise 3}.
```

**Example:**
```
"Après plus de 30 ans dans le domaine du nettoyage professionnel, j'ai créé Service Pro'Preté pour proposer des prestations de qualité aux entreprises et commerces de Loire-Atlantique. Mon engagement : des locaux impeccables, du matériel professionnel, et une relation de confiance avec chacun de mes clients."
```

#### Paragraph 2 (Approach)
```
Je travaille avec {key method 1}, en m'adaptant à {adaptation point}. Que vous ayez besoin de {use case 1} ou {use case 2}, je suis là pour vous.
```

**Example:**
```
"Je travaille avec rigueur et discrétion, en m'adaptant à vos horaires et à vos exigences. Que vous ayez besoin d'un entretien régulier ou d'une intervention ponctuelle, je suis là pour vous."
```

#### Founder Signature
```
— {Title} de {Business Name}
→ Example: "— Fondatrice de Service Pro'Preté"
```

#### Video URL
- Replace `PLACEHOLDER_VIDEO_URL` with YouTube embed link

---

### 6. Why Us Section (Authority/Arguments)
**Location:** `components/why-us.tsx`

#### Badge
```
{Category Label}
→ Example: "Nos engagements"
```

#### Heading
```
Pourquoi choisir {Business Name}?
→ Example: "Pourquoi choisir Service Pro'Preté ?"
```

#### Arguments (4 items)
```
1. {Benefit Statement}
2. {Benefit Statement}
3. {Benefit Statement}
4. {Benefit Statement}
```

**Example:**
```
1. Matériel professionnel apporté à chaque intervention
2. Prestations sur-mesure selon vos horaires
3. Réactive et joignable — réponse sous 24h
4. Entreprise locale, basée à {Location}
```

#### Bottom CTA (below argument cards)
```
{Reinforcing sentence summarizing the value proposition}
→ Example: "Bénéficiez du savoir-faire d'une entreprise locale et réactive pour vos besoins de nettoyage."

Button: "{Action} →"
→ Example: "Démarrer mon projet →"

Micro-text: {Reassurance}
→ Example: "Réponse garantie sous 24 heures"
```
- Button opens the **QuoteModal** (does not link to email or phone directly)
- Button uses **lavande** color scheme to stand out against the dark navy section background

---

### 7. About Section (Trust Building)
**Location:** `components/about.tsx`

#### Badge
```
{Context}
→ Example: "À propos"
```

#### Heading
```
{Experience Promise}, avec {Differentiator}.
→ Example: "Un nouveau départ, avec 30 ans d'expérience."
```

#### Paragraph 1 (Credentials)
```
Forte de {years} ans dans {industry}, j'ai fondé {business name} pour mettre {expertise} au service de {audience} de {region}. Mon parcours m'a appris que {insight}.
```

**Example:**
```
"Forte de plus de 30 ans dans le secteur du nettoyage professionnel, j'ai fondé Service Pro'Preté pour mettre mon expertise au service des entreprises et commerces de Loire-Atlantique. Mon parcours m'a appris que la qualité d'une prestation repose autant sur le savoir-faire que sur la relation humaine."
```

#### Paragraph 2 (Personalization)
```
Chaque client est unique. J'adapte {service type} à {personalization factors}. Je travaille avec {equipment/methods} — {example 1}, {example 2} — pour garantir {outcome}.
```

**Example:**
```
"Chaque client est unique. J'adapte mes interventions à vos locaux, votre activité et vos contraintes horaires. Je travaille avec du matériel professionnel — monobrosse autolaveuse, équipements vitrerie — pour garantir des résultats irréprochables à chaque passage."
```

#### Location Tag
```
{City} — {Region}, {Country}
→ Example: "Varades — Loireauxence, Loire-Atlantique"
```

#### About Photo
- Left-side photo of founder (or business team)
- Alt text: *"{Business} Founder"*

---

### 8. Testimonials Section
**Location:** `components/testimonials.tsx`

#### Badge
```
{Section Category}
→ Example: "Ce que disent nos clients"
```

#### Heading
```
{Social Proof Headline}
→ Example: "Ils nous font confiance"
```

#### Rating Display
```
{Stars} {Rating} — {Count} avis vérifiés
→ Example: "⭐⭐⭐⭐⭐ 5 / 5 — 5 avis vérifiés"
```

#### Testimonial Cards (5 items)
Each rotates every 3 seconds (auto-cycles, pauses on hover):

```
"{Testimonial Quote}"
— {Customer Name}
  {Customer Location}
  {Service Type} | {Rating Stars}
```

**Example:**
```
"Service impeccable du début à la fin. Mon appartement n'avait jamais été aussi propre. L'équipe est ponctuelle, discrète et très professionnelle. Je recommande sans hésitation."
— Marie-Claire D.
  Ancenis-Saint-Géréon
  Nettoyage résidentiel | ⭐⭐⭐⭐⭐
```

---

### 9. CTA Section (Contact & Quote)
**Location:** `components/cta-section.tsx`

#### Section Badge
```
{Section Type}
→ Example: "Contact"
```

#### Section Heading
```
Demandez votre {Offer}
→ Example: "Demandez votre devis gratuit"
```

#### Left Card — Contact Details

**Heading:**
```
{Primary CTA}
→ Example: "Contactez-nous"
```

**Contact Items:**
```
1. Phone: {Business Phone}
   → Example: "06 95 90 98 91"

2. Location: {City} — {Region}
             {Country}
   → Example: "Varades — Loireauxence"
             "Loire-Atlantique (44)"

3. Contact Person: {Name}
   → Example: "Angélique Grimaud"

4. Business Hours:
   Mon - Fri: {Hours}
   Sat: {Hours}
   Sun: {Status}
   → Example: "Mon - Fri: 8h - 18h"
             "Sat: 9h - 17h"
             "Sun: Fermé"
```

**Call CTA Button:**
```
{Action} {Channel}
→ Example: "Appelez maintenant"
```

#### Right Card — Quote Form

**Heading:**
```
{Offer Description}
→ Example: "Demander un devis gratuit"
```

**Form Fields:**
```
1. Name (required): placeholder "{Sample Name}"
2. Email (required): placeholder "{Sample Email}"
3. Phone (required): placeholder "{Sample Phone}"
4. Message (optional): placeholder "{Prompt}"
```

**Submit Button:**
```
{Action}
→ Example: "Envoyer ma demande"
```

#### Map Embed
```
Google Maps iframe for business location
Update src with your coordinates and business name
```

---

### 10. Footer
**Location:** `components/footer.tsx`

#### Company Info
```
{Business Name}
{Tagline or Short Description}
```

#### Quick Links
```
- Services
- About
- Testimonials
- Contact
```

#### Contact Info
```
Phone: {Business Phone}
Email: {Business Email}
Location: {Full Address}
Hours: {Business Hours Summary}
```

#### Social/Legal
```
- Privacy Policy (optional)
- Terms of Service (optional)
- Social Media Links (if applicable)
- Copyright: © {Year} {Business Name}. All rights reserved.
```

---

## Part 3: Service Type Cycling (Hero Animation)

**Location:** `components/hero.tsx` → `serviceTypes` array

```typescript
const serviceTypes = [
  '{Service Type 1}',
  '{Service Type 2}',
  '{Service Type 3}'
]
```

**Example:**
```typescript
const serviceTypes = [
  'entretien régulier',
  'vitrerie',
  'remise en état'
]
```

- Services cycle every 2.5 seconds with fade-up animation
- Update this array to match your business's core services

---

## Part 4: Image Assets Required

| Section | Asset | Dimensions | Alt Text |
|---------|-------|-----------|----------|
| Hero | Founder/Team Photo | 480×560px (portrait) | "{Business} Founder" |
| Video | Founder/Team Photo (small) | 40×40px (circular) | "Founder" |
| About | Founder/Team Photo | 420×504px (portrait) | "{Business} Founder" |
| Map | Embedded Google Map | Full width responsive | "Service Area Map" |

---

## Part 5: Quick Adaptation Checklist

- [ ] Update color palette in `app/globals.css`
- [ ] Replace all service descriptions in `components/services.tsx`
- [ ] Update founder story in `components/video-section.tsx` and `components/about.tsx`
- [ ] Replace testimonials in `components/testimonials.tsx` with real client feedback
- [ ] Update contact details in `components/cta-section.tsx` (phone, email, address, hours)
- [ ] Upload founder/team photos (update image URLs)
- [ ] Update Google Maps embed coordinates in `components/cta-section.tsx`
- [ ] Update business location in footer
- [ ] Ensure all text maintains length parity (avoid layout breaking)
- [ ] Test on mobile and desktop

---

## Part 6: Design System Reference

### Typography
- **Headings:** DM Serif Display (serif)
- **Body:** DM Sans (sans-serif)
- **Mono:** Geist Mono (for code, if needed)

### Spacing Scale
- Sections: 20 (mobile) — 28 (desktop) padding in `py-` classes
- Component gaps: 4–12px (`gap-` classes)
- Heading gaps: 4–6px

### Shadows
- **Card shadow:** `var(--shadow-card)` → `0 2px 12px rgba(43, 46, 110, 0.07)`
- **Lifted shadow:** `var(--shadow-lifted)` → `0 8px 32px rgba(43, 46, 110, 0.13)`

### Animations
- **Scroll reveal:** `.reveal` class (fade-up on scroll) with `0.6s ease` duration
- **Service cycling:** 2.5s interval with 300ms fade transition
- **Testimonial cycling:** 3s interval (pauses on hover) with 300ms fade transition

---

## Part 7: Deployment Steps

1. **Update all copy** in component files per this template
2. **Update color palette** in `app/globals.css`
3. **Upload images** to `/public` and update image URLs
4. **Test locally**: `npm run dev`
5. **Deploy to Vercel**: Push to GitHub → Vercel auto-deploys
6. **QA**: Check all sections on mobile and desktop
7. **Monitor**: Set up Google Analytics to track performance

---

## Notes

- This template assumes a service-based B2B business (cleaning, consulting, etc.)
- Adapt copy length to fit layouts; very long text may break mobile designs
- Maintain the 5-color system for visual consistency
- All testimonials should be real or clearly marked as placeholder
- Update contact information regularly to stay current
