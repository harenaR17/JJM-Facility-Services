# Plan d'implémentation — Landing Page Service Pro'Preté

> **Objectif unique :** Générer des demandes de devis via un seul CTA — `Obtenir un devis`
> **Stack :** v0.dev → Next.js 14 + Tailwind CSS → Déploiement Vercel
> **Durée estimée :** 2 à 4 jours (en autonomie avec outils IA)

---

## Table des matières

1. [Préparation des assets](#1-préparation-des-assets)
2. [Architecture & stack technique](#2-architecture--stack-technique)
3. [Design system](#3-design-system)
4. [Structure de la page — section par section](#4-structure-de-la-page--section-par-section)
5. [Prompts v0.dev](#5-prompts-v0dev)
6. [Copywriting complet](#6-copywriting-complet)
7. [SEO local & métadonnées](#7-seo-local--métadonnées)
8. [Checklist de lancement](#8-checklist-de-lancement)
9. [Évolutions futures](#9-évolutions-futures)

---

## 1. Préparation des assets

Avant de toucher à v0 ou bolt.new, rassemblez tous les fichiers nécessaires. C'est l'étape qui conditionne la qualité finale.

### 1.1 Fichiers à préparer

| Asset | Format requis | Notes |
|---|---|---|
| Logo principal | SVG + PNG transparent | Exporter depuis le fichier source |
| Logo blanc (footer) | SVG + PNG | Version monochrome blanche |
| Favicon | ICO + PNG 32×32 | Initiales "SP" en marine |
| Photo de la fondatrice | JPG, min 800×800px | Fond neutre, sourire, tenue pro |
| Vidéo de présentation | MP4, < 50 Mo | Compress via HandBrake si besoin |
| Vidéo de démonstration | MP4, < 50 Mo | La prestation en action |
| Photos avant/après | JPG, min 1200px large | Minimum 4 paires (8 photos) |
| Thumbnail vidéo | JPG 1280×720px | Capture propre de la vidéo |

### 1.2 Optimisation des images

Utilisez **Squoosh** (squoosh.app — gratuit, en ligne) pour compresser :

- Photos : convertir en **WebP**, qualité 82%, max 200 Ko
- Logo : garder en **SVG** (vectoriel, léger)
- Thumbnail vidéo : **WebP**, qualité 85%

### 1.3 Hébergement des vidéos

Ne pas héberger les vidéos directement sur le site (trop lourd). Deux options :

**Option A — YouTube (recommandé)**
- Uploader les vidéos en non-répertorié sur YouTube
- Intégrer via `<iframe>` avec le paramètre `?rel=0&modestbranding=1`
- Avantage : lecture fluide, pas de coût bande passante

**Option B — Vimeo**
- Upload en privé, partage par lien
- Interface plus propre, sans pub
- Coût : gratuit jusqu'à 5 Go/semaine

---

## 2. Architecture & stack technique

### 2.1 Stack recommandée

```
v0.dev                  ← Génération du code React/Tailwind
  ↓
Next.js 14 (App Router) ← Framework exporté par v0
  ↓
Tailwind CSS            ← Styles utilitaires
  ↓
shadcn/ui               ← Composants accessibles (boutons, cards)
  ↓
Vercel                  ← Hébergement + déploiement continu
```

### 2.2 Structure des fichiers (une fois le projet généré)

```
service-proprete/
├── app/
│   ├── layout.tsx          ← Métadonnées, fonts, Analytics
│   ├── page.tsx            ← Page principale (assemblage sections)
│   └── globals.css         ← Variables CSS, reset
├── components/
│   ├── nav.tsx             ← Barre de navigation fixe
│   ├── hero.tsx            ← Section hero
│   ├── trust-strip.tsx     ← Bande de réassurance
│   ├── video-section.tsx   ← Présentation vidéo
│   ├── services.tsx        ← Grille de services
│   ├── before-after.tsx    ← Galerie avant/après
│   ├── about.tsx           ← Histoire de la fondatrice
│   ├── cta-section.tsx     ← CTA final (fond marine)
│   └── footer.tsx          ← Pied de page
├── public/
│   ├── images/             ← Toutes les images optimisées
│   └── logo.svg
└── tailwind.config.ts      ← Configuration palette personnalisée
```

### 2.3 Configuration Tailwind (couleurs de marque)

À ajouter dans `tailwind.config.ts` après génération :

```typescript
theme: {
  extend: {
    colors: {
      marine: {
        DEFAULT: '#2B2E6E',
        dark: '#1A1C4A',
        light: '#E8E8F5',
      },
      lavande: {
        DEFAULT: '#9B9FD4',
        pale: '#E8E8F5',
      },
      cream: '#F5F3EE',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      display: ['DM Serif Display', 'serif'],
    },
  },
}
```

> **Fonts :** Ajouter dans `app/layout.tsx` via `next/font/google` :
> `DM Sans` (corps) + `DM Serif Display` (titres H1/H2)

---

## 3. Design system

### 3.1 Palette complète

| Rôle | Couleur | Hex | Utilisation |
|---|---|---|---|
| Primaire | Marine | `#2B2E6E` | CTA, footer, titres forts |
| Primaire foncé | Marine dark | `#1A1C4A` | Hover CTA, texte corps |
| Accent | Lavande | `#9B9FD4` | Icônes, bordures, tags |
| Accent pâle | Lavande pâle | `#E8E8F5` | Fonds sections alternées |
| Fond principal | Crème | `#F5F3EE` | Hero, body background |
| Surfaces | Blanc | `#FFFFFF` | Cards, sections |
| Texte secondaire | Gris | `#6B7280` | Descriptions, légendes |

### 3.2 Typographie

```
H1 (Hero)       : DM Serif Display — 56px desktop / 36px mobile — #1A1C4A
H2 (Sections)   : DM Serif Display — 36px desktop / 28px mobile — #2B2E6E
H3 (Cards)      : DM Sans Bold — 20px — #1A1C4A
Body            : DM Sans Regular — 16px — #374151 — line-height: 1.7
Caption/Label   : DM Sans Medium — 13px — #6B7280
```

### 3.3 Composants clés

**Bouton CTA primaire**
```css
background: #2B2E6E;
color: white;
padding: 14px 32px;
border-radius: 8px;
font-weight: 600;
font-size: 16px;
transition: background 200ms;

/* hover */
background: #1A1C4A;
```

**Card service**
```css
background: white;
border: 1px solid #E8E8F5;
border-radius: 12px;
padding: 28px 24px;
transition: border-color 200ms, box-shadow 200ms;

/* hover */
border-color: #9B9FD4;
box-shadow: 0 4px 20px rgba(43, 46, 110, 0.08);
```

**Badge/Tag**
```css
background: #E8E8F5;
color: #2B2E6E;
padding: 4px 12px;
border-radius: 99px;
font-size: 13px;
font-weight: 500;
```

---

## 4. Structure de la page — section par section

### Section 1 — Navigation

**Comportement :**
- Fond transparent sur le hero, devient blanc avec ombre légère au scroll
- Logo à gauche
- Bouton `Obtenir un devis` à droite (seul élément de navigation)
- Sur mobile : logo centré + bouton pleine largeur sticky en bas

```
[Logo Service Pro'Preté]                    [Obtenir un devis →]
```

---

### Section 2 — Hero

**Fond :** Crème `#F5F3EE` avec motif SVG tourbillon en filigrane (opacité 6%)
**Disposition :** Centré, deux colonnes sur desktop (texte gauche / visuel droit)

```
Headline H1 :
"Des locaux impeccables.
Zéro prise de tête."

Sous-titre :
"Nettoyage professionnel pour entreprises et commerces
en Loire-Atlantique — entretien régulier, vitrerie,
remise en état après travaux."

[Obtenir un devis gratuit →]

Texte rassurant sous le bouton :
"Réponse sous 24h — Devis sans engagement"
```

**Visuel côté droit (desktop) :** Photo de la fondatrice avec une légère forme marine en arrière-plan (rectangle incliné ou demi-cercle).

**Note technique :** Le motif tourbillon est un SVG inline positionné en `absolute`, `opacity: 0.06`, `pointer-events: none`, non sélectionnable.

---

### Section 3 — Bande de réassurance

**Fond :** Blanc
**Disposition :** 3 colonnes égales, séparées par des traits fins

```
[Icône valise]          [Icône calendrier]      [Icône badge]
Matériel pro fourni     Horaires adaptés         Devis gratuit
À chaque intervention   Selon vos contraintes    Réponse sous 24h
```

**Style :** Icônes SVG simples en lavande `#9B9FD4`, texte court, espacement généreux.

---

### Section 4 — Présentation vidéo

**Fond :** Lavande pâle `#E8E8F5`
**Disposition :** 2 colonnes — vidéo à gauche, texte à droite (inversé sur mobile)

**Colonne vidéo :**
- Thumbnail avec bouton play centré
- Cliquer ouvre la vidéo YouTube en iframe ou modal lightbox
- Ratio 16:9, coins arrondis 12px

**Colonne texte :**
```
Badge : "Notre histoire"

H2 : "Derrière chaque prestation,
une vraie professionnelle."

Texte :
"Après plus de 30 ans en grande distribution,
j'ai créé Service Pro'Preté pour une raison simple :
offrir aux entreprises locales un service de nettoyage
aussi rigoureux que si c'était pour moi.

Je me déplace avec mon propre matériel professionnel,
je m'adapte à vos horaires, et je réponds toujours
présente."

— Fondatrice de Service Pro'Preté
```

---

### Section 5 — Services

**Fond :** Blanc
**Disposition :** Grille 2×2 sur mobile, 4 colonnes sur desktop

**Titre de section :**
```
H2 : "Ce que je fais pour vous"
Sous-titre : "Des prestations sur-mesure, adaptées à votre activité."
```

**4 cards :**

| Card | Icône | Titre | Description |
|---|---|---|---|
| 1 | 🏢 (SVG) | Entretien de locaux | Bureaux, commerces, cabinets — entretien régulier selon vos fréquences. |
| 2 | 🪟 (SVG) | Vitrerie professionnelle | Nettoyage de vitres intérieures et extérieures. Résultat garanti sans traces. |
| 3 | 🔧 (SVG) | Remise en état | Après travaux, déménagement ou fin de bail. Décrassage complet. |
| 4 | 📅 (SVG) | Interventions ponctuelles | Besoin urgent ou ponctuel ? J'interviens rapidement sur votre secteur. |

> Utiliser des icônes SVG simples, pas d'emoji. Source recommandée : Lucide Icons (libre, minimaliste).

---

### Section 6 — Avant / Après

**Fond :** Crème `#F5F3EE`
**Disposition :** Grille 2 colonnes sur desktop, 1 colonne sur mobile

**Titre de section :**
```
H2 : "Le résultat parle de lui-même"
Sous-titre : "Quelques exemples de prestations récentes."
```

**Composant avant/après :**
- 4 paires de photos minimum
- Légende courte sous chaque paire (type de prestation + lieu générique)
- Optionnel : slider avant/après interactif (librairie `react-compare-image`)

**Intégration de la vidéo de démo :**
- Encart pleine largeur sous la grille
- Fond marine `#2B2E6E`, texte blanc
- Titre : `"Regardez notre monobrosse autolaveuse en action"`
- Iframe YouTube embarquée

---

### Section 7 — Pourquoi nous choisir

**Fond :** Marine `#2B2E6E`
**Texte :** Blanc
**Disposition :** Centré, liste de 4 arguments en 2 colonnes

```
H2 : "Pourquoi Service Pro'Preté ?"

✔  Matériel professionnel apporté à chaque intervention
✔  Prestations sur-mesure selon vos horaires
✔  Réactive et joignable — réponse sous 24h
✔  Entreprise locale, basée à Loireauxence (44)
```

**Note design :** Les coches sont des SVG en lavande clair `#C5C8E8`, pas des emoji. Fond avec texture subtile (pattern SVG de points très discrets).

---

### Section 8 — À propos

**Fond :** Blanc
**Disposition :** 2 colonnes — photo à gauche, texte à droite

**Photo :** Portrait de la fondatrice, format carré ou portrait, coins arrondis.

**Texte :**
```
Badge : "À propos"

H2 : "Un nouveau départ,
avec 30 ans d'expérience."

Texte :
"Après avoir passé plus de 30 ans dans la grande distribution,
j'ai voulu relever un nouveau défi — créer ma propre entreprise,
à mon image : sérieuse, humaine et locale.

Service Pro'Preté, c'est mon projet, mon engagement.
J'interviens personnellement sur chaque prestation,
avec mon matériel et mes méthodes éprouvées.

Je travaille avec des produits adaptés à chaque surface,
un aspirateur dorsal sans fil pour les zones difficiles
et une monobrosse autolaveuse pour un résultat impeccable."

Localisation : Varades — Loireauxence, Loire-Atlantique (44)
```

---

### Section 9 — CTA final

**Fond :** Marine `#2B2E6E`
**Texte :** Blanc

```
H2 : "Prêt à déléguer le nettoyage ?"

Sous-titre :
"Contactez-moi pour un devis personnalisé et gratuit.
Je vous réponds dans les 24 heures."

[Obtenir un devis gratuit →]         (bouton blanc, texte marine)

Contacts :
📧 serviceproprete44@gmail.com
📞 06 95 90 98 91

Zone d'intervention :
Loireauxence · Varades · Saint-Florent-le-Vieil · Ancenis et alentours
```

---

### Section 10 — Footer

**Fond :** Marine foncé `#1A1C4A`
**Texte :** Blanc / Gris clair

```
[Logo blanc]

Service Pro'Preté                    Nos services
Nettoyage professionnel              Entretien de locaux
Loireauxence, Loire-Atlantique       Vitrerie
                                     Remise en état

Contact                              
serviceproprete44@gmail.com          
06 95 90 98 91                       

──────────────────────────────────────────────────────
© 2025 Service Pro'Preté — Tous droits réservés
```

---

## 5. Prompts v0.dev

Utilisez ces prompts dans l'ordre. Copiez-collez chacun dans v0.dev, ajustez si besoin, puis exportez le code final.

### Prompt 1 — Initialisation du design system

```
Create a professional cleaning company landing page design system for "Service Pro'Preté" in French.

Design system:
- Colors: navy #2B2E6E (primary), dark navy #1A1C4A (headings/hover), 
  lavender #9B9FD4 (accent/icons), pale lavender #E8E8F5 (section backgrounds),
  cream #F5F3EE (main background), white #FFFFFF (cards/surfaces)
- Fonts: DM Serif Display for H1/H2, DM Sans for everything else
- Tailwind config with these custom colors
- CSS variables for the full palette
- Base button component: primary CTA "Obtenir un devis" in navy, 
  white hover text, rounded-lg, px-8 py-4, font-semibold

Show me a design system preview card with all colors, typography scale, and the CTA button.
```

---

### Prompt 2 — Navigation + Hero

```
Create a Next.js hero section for "Service Pro'Preté", a French professional cleaning company.

Nav:
- Transparent background, becomes white with subtle shadow on scroll
- Logo text "Service Pro'Preté" on left (navy #2B2E6E, DM Serif Display)
- Single CTA button on right: "Obtenir un devis" (navy background, white text)

Hero (two-column layout on desktop, stacked on mobile):
- Background: cream #F5F3EE with very subtle swirl SVG pattern at 6% opacity
- Left column:
  - Small badge: "Nettoyage professionnel · Loire-Atlantique"
  - H1 (DM Serif Display, 56px): "Des locaux impeccables. Zéro prise de tête."
  - Subtitle (DM Sans, 18px, gray): "Nettoyage professionnel pour entreprises et commerces 
    en Loire-Atlantique — entretien régulier, vitrerie, remise en état après travaux."
  - Primary CTA button: "Obtenir un devis gratuit →" (navy, full-width on mobile)
  - Small text below button: "Réponse sous 24h — Devis sans engagement"
- Right column: image placeholder with navy rounded background shape

Colors: navy #2B2E6E, lavender #9B9FD4, cream #F5F3EE
```

---

### Prompt 3 — Bande de réassurance + Services

```
Create two sections for Service Pro'Preté landing page in French:

Section 1 - Trust strip (white background):
- 3 columns with Lucide icons in lavender #9B9FD4:
  1. Briefcase icon → "Matériel pro fourni" / "À chaque intervention"
  2. Calendar icon → "Horaires adaptés" / "Selon vos contraintes"
  3. BadgeCheck icon → "Devis gratuit" / "Réponse sous 24h"
- Thin vertical separators between columns

Section 2 - Services grid:
- Background: white, centered heading
- H2 (DM Serif Display): "Ce que je fais pour vous"
- Subtitle: "Des prestations sur-mesure, adaptées à votre activité."
- 4 cards in 2x2 grid (mobile) / 4 columns (desktop):
  Card 1: Building2 icon → "Entretien de locaux" / "Bureaux, commerces, cabinets"
  Card 2: Sun icon → "Vitrerie professionnelle" / "Sans traces, garanti"
  Card 3: Wrench icon → "Remise en état" / "Après travaux ou déménagement"
  Card 4: Clock icon → "Interventions ponctuelles" / "Réactivité assurée"
- Card style: white bg, border #E8E8F5, hover border #9B9FD4, rounded-xl, shadow on hover
- Icons in navy #2B2E6E on pale lavender #E8E8F5 circle background
```

---

### Prompt 4 — Vidéo + Avant/Après

```
Create two sections for Service Pro'Preté landing page in French:

Section 1 - Video presentation (background: #E8E8F5):
- Two columns: video left, text right (reverse on mobile)
- Left: YouTube embed placeholder (16:9 ratio, rounded-xl, navy play button overlay)
- Right:
  - Small badge "Notre histoire" in navy
  - H2: "Derrière chaque prestation, une vraie professionnelle."
  - Paragraph: "Après plus de 30 ans en grande distribution, j'ai créé Service Pro'Preté 
    pour une raison simple : offrir aux entreprises locales un service aussi rigoureux 
    que si c'était pour moi."
  - Signature line with small avatar placeholder

Section 2 - Before/After gallery (background: #F5F3EE):
- H2 centered: "Le résultat parle de lui-même"
- 4 before/after image pairs in a 2x2 grid
- Each pair: two images side by side with "Avant" / "Après" labels in navy badge
- Rounded corners, subtle shadow
- Below grid: full-width dark navy (#1A1C4A) banner with video thumbnail and 
  text "Regardez notre équipement professionnel en action"
```

---

### Prompt 5 — À propos + CTA final + Footer

```
Create the final three sections for Service Pro'Preté landing page in French:

Section 1 - About (white background, two columns):
- Left: image placeholder (square, rounded-xl with navy accent shape behind)
- Right:
  - Badge "À propos"
  - H2: "Un nouveau départ, avec 30 ans d'expérience."
  - Text about founding the company after 30 years in retail
  - Location: "Varades — Loireauxence, Loire-Atlantique"

Section 2 - Final CTA (background: #2B2E6E, white text):
- Centered layout
- H2 white: "Prêt à déléguer le nettoyage ?"
- Subtitle: "Contactez-moi pour un devis personnalisé et gratuit."
- White button with navy text: "Obtenir un devis gratuit →"
- Contact info: email + phone in pale lavender
- Zone text: "Loireauxence · Ancenis · Saint-Florent-le-Vieil et alentours"

Footer (background: #1A1C4A, white text):
- Logo white on left
- 3 columns: About blurb / Services list / Contact
- Bottom bar: copyright, thin top border
```

---

### Prompt 6 — Ajustements mobile

```
Review the complete Service Pro'Preté landing page and apply these mobile optimizations:

1. Add a sticky bottom bar on mobile only (< 768px):
   - Full-width navy button "Obtenir un devis" with phone icon
   - 16px padding, safe-area-inset-bottom for notched phones
   - Hidden on desktop

2. Adjust hero: stack columns vertically, image below text, H1 to 36px

3. Services: 2x2 grid on mobile (not 1 column)

4. Video section: video full-width first, text below

5. Nav on mobile: logo centered, remove desktop nav links, keep only the sticky bottom CTA

Ensure all touch targets are minimum 44px height.
```

---

## 6. Copywriting complet

### Hero

> **H1 :** Des locaux impeccables. Zéro prise de tête.
>
> **Sous-titre :** Nettoyage professionnel pour entreprises et commerces en Loire-Atlantique — entretien régulier, vitrerie, remise en état après travaux.
>
> **CTA :** Obtenir un devis gratuit →
>
> **Micro-texte :** Réponse sous 24h — Devis sans engagement

### Services

> **H2 :** Ce que je fais pour vous
>
> **Sous-titre :** Des prestations sur-mesure, adaptées à votre activité et vos horaires.

| Service | Description courte | Description longue (tooltip/modal) |
|---|---|---|
| Entretien de locaux | Bureaux, commerces, cabinets — régulier ou ponctuel | Dépoussiérage, sols, sanitaires, cuisine. Fréquence hebdomadaire, bi-mensuelle ou mensuelle selon vos besoins. |
| Vitrerie professionnelle | Vitres intérieures et extérieures sans traces | Nettoyage de vitrines, baies vitrées, cloisons en verre. Résultat impeccable, matériel professionnel fourni. |
| Remise en état | Après travaux, déménagement ou fin de bail | Décrassage complet, suppression du calcaire, traces de colle et de peinture. Prêt à l'usage ou à la relocation. |
| Interventions ponctuelles | Besoin urgent ? Je m'adapte | Grand nettoyage avant/après événement, remplacement temporaire, prestation unique. |

### Section vidéo

> **Badge :** Notre histoire
>
> **H2 :** Derrière chaque prestation, une vraie professionnelle.
>
> **Texte :** Après plus de 30 ans en grande distribution, j'ai créé Service Pro'Preté pour une raison simple : offrir aux entreprises locales un service de nettoyage aussi rigoureux que si c'était pour moi. Je me déplace avec mon propre matériel professionnel, je m'adapte à vos horaires, et je réponds toujours présente.

### Avant/après

> **H2 :** Le résultat parle de lui-même
>
> **Sous-titre :** Quelques exemples de prestations récentes — salle de bain, bureau, vitrine, remise en état.

### À propos

> **Badge :** À propos
>
> **H2 :** Un nouveau départ, avec 30 ans d'expérience.
>
> **Texte :** Professionnelle du nettoyage, j'ai fondé Service Pro'Preté pour offrir aux entreprises locales un service de propreté rigoureux, discret et de confiance. Mon objectif est simple : vous permettre de vous concentrer sur votre activité dans des locaux propres et valorisés. J'interviens personnellement à chaque prestation, avec mon matériel et mes méthodes.
>
> **Localisation :** Basée à Varades — Loireauxence · Active sur toute la Loire-Atlantique

### CTA final

> **H2 :** Prêt à déléguer le nettoyage ?
>
> **Sous-titre :** Contactez-moi pour un devis personnalisé et gratuit. Je vous réponds dans les 24 heures.
>
> **CTA :** Obtenir un devis gratuit →
>
> **Contact :** serviceproprete44@gmail.com · 06 95 90 98 91
>
> **Zone :** Loireauxence · Varades · Ancenis · Saint-Florent-le-Vieil et alentours

---

## 7. SEO local & métadonnées

### 7.1 Métadonnées (à placer dans `app/layout.tsx`)

```typescript
export const metadata = {
  title: 'Service Pro\'Preté | Nettoyage professionnel — Loireauxence, Loire-Atlantique',
  description: 'Entreprise de nettoyage professionnel basée à Loireauxence (44). Entretien de locaux, vitrerie, remise en état après travaux. Devis gratuit sous 24h.',
  keywords: [
    'nettoyage professionnel Loire-Atlantique',
    'entreprise nettoyage Loireauxence',
    'entretien locaux Varades',
    'vitrerie professionnelle 44',
    'remise en état après travaux',
    'nettoyage bureaux Ancenis',
  ],
  openGraph: {
    title: 'Service Pro\'Preté — Nettoyage professionnel en Loire-Atlantique',
    description: 'Entretien de locaux, vitrerie et remise en état. Basée à Loireauxence. Devis gratuit.',
    url: 'https://www.serviceproprete.fr',
    siteName: 'Service Pro\'Preté',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

### 7.2 Schema.org (données structurées locales)

À ajouter comme script JSON-LD dans le `<head>` :

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Service Pro'Preté",
  "description": "Entreprise de nettoyage professionnel basée à Loireauxence, Loire-Atlantique",
  "telephone": "+33695909891",
  "email": "serviceproprete44@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Loireauxence",
    "addressRegion": "Pays de la Loire",
    "postalCode": "44370",
    "addressCountry": "FR"
  },
  "areaServed": [
    "Loireauxence", "Varades", "Ancenis", "Saint-Florent-le-Vieil"
  ],
  "serviceType": [
    "Nettoyage de locaux professionnels",
    "Vitrerie",
    "Remise en état après travaux"
  ],
  "priceRange": "Sur devis"
}
```

### 7.3 Balises alt des images

Chaque image doit avoir un attribut `alt` descriptif pour le SEO :

| Image | Alt recommandé |
|---|---|
| Photo fondatrice | "Fondatrice de Service Pro'Preté, Loireauxence" |
| Avant salle de bain | "Salle de bain avant nettoyage professionnel" |
| Après salle de bain | "Salle de bain après nettoyage Service Pro'Preté" |
| Monobrosse | "Monobrosse autolaveuse professionnelle Service Pro'Preté" |
| Vitrine avant | "Vitrine commerciale avant nettoyage Loire-Atlantique" |

---

## 8. Checklist de lancement

### Phase 1 — Génération (Jour 1)

- [ ] Préparer et optimiser tous les assets (images, vidéos, logo)
- [ ] Créer un compte v0.dev (gratuit)
- [ ] Exécuter les 6 prompts dans l'ordre
- [ ] Exporter le projet Next.js depuis v0
- [ ] Créer un repo GitHub et pousser le code

### Phase 2 — Intégration des vrais contenus (Jour 2)

- [ ] Remplacer tous les placeholders par les vraies images
- [ ] Intégrer les URLs YouTube pour les vidéos
- [ ] Copier-coller le copywriting final section par section
- [ ] Vérifier tous les liens (email, téléphone en `tel:`)
- [ ] Tester le bouton CTA (doit ouvrir le client mail)
- [ ] Ajouter le logo SVG réel

### Phase 3 — SEO & technique (Jour 3)

- [ ] Ajouter les métadonnées dans `layout.tsx`
- [ ] Intégrer le JSON-LD Schema.org
- [ ] Ajouter le favicon
- [ ] Vérifier les balises `alt` de toutes les images
- [ ] Créer `robots.txt` et `sitemap.xml`
- [ ] Tester la performance avec Lighthouse (cible : score > 85)

### Phase 4 — Tests & déploiement (Jour 4)

- [ ] Test complet sur mobile iOS (Safari)
- [ ] Test complet sur mobile Android (Chrome)
- [ ] Test sur desktop Chrome, Firefox, Safari
- [ ] Vérifier le CTA sticky mobile
- [ ] Vérifier que les vidéos se chargent
- [ ] Déployer sur Vercel (connecter le repo GitHub)
- [ ] Configurer le nom de domaine (si disponible)
- [ ] Test final post-déploiement sur l'URL réelle

### Checklist qualité finale

- [ ] Le CTA `Obtenir un devis` apparaît exactement 3 fois (hero, CTA section, sticky mobile)
- [ ] Aucun lien ne quitte la page sauf email et téléphone
- [ ] Toutes les images sont en WebP et < 200 Ko
- [ ] Le numéro de téléphone est cliquable (`tel:+33695909891`)
- [ ] L'email est cliquable (`mailto:serviceproprete44@gmail.com`)
- [ ] Le site charge en moins de 3 secondes sur 4G

---

## 9. Évolutions futures

Ces éléments ne sont pas nécessaires au lancement mais peuvent être ajoutés après :

### Court terme (1-3 mois)

- **Formulaire de contact intégré** : Remplacer le lien email par un vrai formulaire (Formspree ou Resend — gratuits). Permet de capter les demandes sans quitter la page.
- **Témoignages clients** : Ajouter une section avis dès les premières prestations. Format : citation + prénom + type de prestation.
- **Google My Business** : Créer/revendiquer la fiche GMB pour apparaître sur Google Maps.

### Moyen terme (3-6 mois)

- **Galerie avant/après enrichie** : Slider interactif `react-compare-image` avec plus de photos.
- **Section FAQ** : Répondre aux objections courantes (zone d'intervention, matériel, fréquence, tarifs).
- **Analytics** : Intégrer Plausible Analytics (léger, sans cookie, RGPD natif) pour mesurer les clics sur le CTA.

### Long terme

- **Page dédiée par service** : Une page `/vitrerie`, `/remise-en-etat`, `/entretien-locaux` pour le SEO longue traîne.
- **Blog local** : Articles courts sur l'entretien des locaux pour le référencement naturel.

---

*Document créé pour Service Pro'Preté — Loireauxence, Loire-Atlantique*
*Palette marine #2B2E6E · Lavande #9B9FD4 · Stack : v0.dev + Next.js + Vercel*