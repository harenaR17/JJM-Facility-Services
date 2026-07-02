import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Service Pro'Preté | Nettoyage professionnel — Loireauxence, Loire-Atlantique",
  description:
    "Entreprise de nettoyage professionnel basée à Loireauxence (44). Entretien de locaux, vitrerie, remise en état après travaux. Devis gratuit sous 24h.",
  metadataBase: new URL('https://vercel.app'),
  icons: {
    icon: 'https://niy5kmpsgn.ufs.sh/f/Ae47L81N5E0P4Z5uhdWezwyf2bjKd9Lun5HDkCxgtETcelQJ',
    apple: 'https://niy5kmpsgn.ufs.sh/f/Ae47L81N5E0P4Z5uhdWezwyf2bjKd9Lun5HDkCxgtETcelQJ',
  },
  openGraph: {
    title: "Service Pro'Preté | Nettoyage professionnel",
    description:
      "Nettoyage professionnel pour entreprises et commerces en Loire-Atlantique — entretien régulier, vitrerie, remise en état après travaux.",
    locale: 'fr_FR',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Service Pro'Preté",
  description:
    'Entreprise de nettoyage professionnel en Loire-Atlantique. Entretien de locaux, vitrerie, remise en état.',
  telephone: '+33695909891',
  email: 'serviceproprete44@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Loireauxence',
    addressLocality: 'Loireauxence',
    postalCode: '44370',
    addressCountry: 'FR',
  },
  areaServed: [
    'Loireauxence',
    'Varades',
    'Ancenis',
    'Saint-Florent-le-Vieil',
    'Loire-Atlantique',
  ],
  priceRange: '€€',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
