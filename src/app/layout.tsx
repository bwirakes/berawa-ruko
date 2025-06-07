import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Berawa Commercial Property - Premier Retail Space for Rent',
  description: 'An unparalleled rental opportunity for retail, wellness, and office spaces in Bali\'s most vibrant neighborhood. Located in the heart of Berawa, Canggu.',
  keywords: 'Berawa, Canggu, Bali, commercial property, retail space, office space, wellness space, property rental',
  authors: [{ name: 'Berawa Commercial Property' }],
  openGraph: {
    title: 'Berawa Commercial Property - Premier Retail Space for Rent',
    description: 'An unparalleled rental opportunity for retail, wellness, and office spaces in Bali\'s most vibrant neighborhood.',
    url: 'https://berawa-commercial-property.vercel.app',
    siteName: 'Berawa Commercial Property',
    images: [
      {
        url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
        width: 1260,
        height: 750,
        alt: 'Berawa Commercial Property',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berawa Commercial Property - Premier Retail Space for Rent',
    description: 'An unparalleled rental opportunity for retail, wellness, and office spaces in Bali\'s most vibrant neighborhood.',
    images: ['https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg'],
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
  verification: {
    google: 'your-google-verification-code',
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
        {children}
      </body>
    </html>
  )
} 