import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const title = 'BERAWA 1053 — Premium Commercial Space for Rent in Berawa, Canggu'
const description =
  'Move-in ready commercial units (90–135 sqm) for lease in Berawa, Canggu — Bali\'s most in-demand strip. Steps from Finn\'s & Atlas Beach Club and premier hotels. Available now — only 3 units left. Book a viewing.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | BERAWA 1053',
  },
  description,
  keywords: [
    'Berawa commercial property for rent',
    'Canggu retail space for rent',
    'Bali commercial space for lease',
    'ruko Berawa disewakan',
    'Canggu shop for rent',
    'retail space Canggu',
    'office space Berawa',
    'restaurant space Canggu',
    'wellness studio Bali',
    'BERAWA 1053',
  ],
  authors: [{ name: 'BERAWA 1053' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: 'BERAWA 1053',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BERAWA 1053 — premium commercial building for rent in Berawa, Canggu, Bali',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/Icon_Gold.png',
    apple: '/Icon_Gold.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <GoogleTagManager gtmId="GTM-NSR2LHFL" />
        <GoogleAnalytics gaId="G-8JDJNTD4Z5" />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
