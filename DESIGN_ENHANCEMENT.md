# Design Enhancement Plan — Service Pro'Preté

## Goal

Transform the current flat, plain-background website into a premium, modern B2B service site with visual depth, motion cues, and clear section hierarchy — using only CSS animations and a lightweight IntersectionObserver hook. Zero new npm packages required.

---

## Dependency Audit

| Dependency        | Already installed | Notes                                      |
|-------------------|-------------------|--------------------------------------------|
| `tw-animate-css`  | Yes (v1.3.3)      | Provides Tailwind animation utilities      |
| `lucide-react`    | Yes (v0.564.0)    | Icons throughout the site                  |
| `next/font`       | Yes (via Next.js) | DM Sans + DM Serif Display already loaded  |
| No new packages required | — | All enhancements use CSS + native browser APIs |

---

## Phase 1 — Global Foundations (`globals.css`)

- [x] Add `@keyframes fadeUp` for scroll-reveal (translate Y + opacity)
- [x] Add `.reveal` base class + `.reveal.visible` active state
- [x] Add stagger delay utilities (`.reveal-delay-1` through `.reveal-delay-4`)
- [x] Add `.section-divider-wave` SVG clip-path utility for diagonal section breaks
- [x] Add `--shadow-card` token for consistent card elevation
- [x] Add `--shadow-lifted` token for hover-lifted card elevation

---

## Phase 2 — Shared Hook (`hooks/use-in-view.ts`)

- [x] Create `useInView(ref, options?)` hook wrapping `IntersectionObserver`
- [x] Returns `isVisible: boolean` — fires once when element enters viewport
- [x] Used by Services, About, CTA, Video Section, and Testimonials

---

## Phase 3 — Component Updates

### 3a — `components/nav.tsx`
- [x] Transparent background when at top of page
- [x] Glassmorphism (`bg-white/90 backdrop-blur-md`) + `shadow-sm` after scrolling past hero sentinel
- [x] Smooth `transition-all duration-300` on background change

### 3b — `components/hero.tsx`
- [x] Add two CSS-only ambient orbs (lavande + marine, blurred, absolutely positioned)
- [x] Add diagonal clip-path bottom divider for visual flow into trust-strip
- [x] Ensure swirl pattern remains subtle behind orbs

### 3c — `components/trust-strip.tsx`
- [x] Flip background to dark navy (`var(--marine-dark)`) for strong visual break after hero
- [x] Update all text/icon colors to white/lavande variants for contrast
- [x] Add subtle dot texture (already used in why-us.tsx — replicate pattern)

### 3d — `components/services.tsx`
- [x] Wrap cards in `useInView` scroll-reveal with staggered delays
- [x] Add left-border accent (`border-l-2 border-[var(--lavande)]`) on hover
- [x] Deepen hover shadow to `shadow-[0_8px_32px_rgba(43,46,110,0.12)]`

### 3d — `components/video-section.tsx`
- [x] Add navy left-edge gradient accent bar next to video frame
- [x] Apply `useInView` scroll-reveal to text column

### 3d — `components/why-us.tsx`
- [x] Add glowing ring border on hover (`ring-2 ring-[var(--lavande)]/50`)
- [x] Apply `useInView` scroll-reveal with stagger to argument cards

### 3e — `components/about.tsx`
- [x] Apply `useInView` scroll-reveal to text block and photo
- [x] Upgrade accent shape to use `bg-[var(--lavande-pale)]` with subtle border

### 3e — `components/testimonials.tsx`
- [x] Add faint grain/noise overlay via SVG filter on card background
- [x] Apply `useInView` scroll-reveal to section header

### 3e — `components/cta-section.tsx`
- [x] Add ambient orb behind the form card (lavande, blurred)
- [x] Apply `useInView` scroll-reveal to both cards

### 3e — `components/footer.tsx`
- [x] Add thin lavande-to-marine gradient top accent bar
- [x] Slightly lighten body text from `white/60` to `white/70` for readability

---

## Visual Outcome Summary

| Before                          | After                                        |
|---------------------------------|----------------------------------------------|
| Flat cream background throughout | Alternating dark/light sections with depth   |
| All sections same visual weight  | Clear hierarchy: hero → dark strip → light → dark → light |
| No motion on scroll              | Staggered fade-up reveal on all major blocks |
| Nav always solid white           | Transparent at top, glassmorphism on scroll  |
| Plain card borders               | Accent borders + lifted shadows on hover     |
| No ambient depth                 | Soft blurred orbs in hero + CTA              |

---

## Constraints

- No new npm packages
- No heavy JavaScript — all animations driven by CSS transitions triggered by `IntersectionObserver`
- Fully accessible: `prefers-reduced-motion` respected via Tailwind's `motion-safe:` prefix where applicable
- All existing functionality (text cycling, testimonial auto-cycle) is preserved
