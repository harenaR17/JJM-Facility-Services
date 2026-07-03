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
  title: 'JJM Facility Services | Commercial Cleaning — Cleveland & Middleburg Heights, OH',
  description:
    'Family-owned commercial cleaning company serving Cleveland and Middleburg Heights, OH since 2015. Janitorial services, carpet & floor care, window washing, post-construction cleanup. Free quote.',
  metadataBase: new URL('https://vercel.app'),
  icons: {
    icon: 'https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUlWc0SjQgsYJlfkie2dTVHAUXw9rBNC1Iq6G5',
    apple: 'https://n51uo9rgjr.ufs.sh/f/xhCD5dlGNvuUlWc0SjQgsYJlfkie2dTVHAUXw9rBNC1Iq6G5',
  },
  openGraph: {
    title: 'JJM Facility Services | Commercial Cleaning Cleveland, OH',
    description:
      'Reliable commercial cleaning for offices, medical facilities, schools, and industrial spaces across the Cleveland area — janitorial, carpet care, window washing.',
    locale: 'en_US',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JJM Facility Services',
  description:
    'Family-owned commercial cleaning company serving Cleveland and Middleburg Heights, OH. Janitorial services, carpet & floor care, window washing, post-construction cleanup.',
  telephone: '+14405321475',
  email: 'info@jjmfacilityservices.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7017 Pearl Rd, Ste 1E',
    addressLocality: 'Middleburg Heights',
    addressRegion: 'OH',
    postalCode: '44130',
    addressCountry: 'US',
  },
  areaServed: [
    'Cleveland',
    'Middleburg Heights',
    'Berea',
    'Strongsville',
    'Ohio',
  ],
  openingHours: 'Mo-Fr 08:00-17:00',
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
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
