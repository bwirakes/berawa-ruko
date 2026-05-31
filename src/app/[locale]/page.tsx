import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Opportunity from '@/components/Opportunity'
import Location from '@/components/Location'
import CurrentProgress from '@/components/CurrentProgress'
import TenantPotential from '@/components/TenantPotential'
import Investment from '@/components/Investment'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { SITE_URL, PROPERTY } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: PROPERTY.name,
      url: SITE_URL,
      logo: `${SITE_URL}/Icon_Gold.png`,
      email: PROPERTY.email,
      telephone: PROPERTY.phone,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PROPERTY.phone,
        contactType: 'leasing',
        areaServed: 'ID',
        availableLanguage: ['en', 'id'],
      },
    },
    {
      '@type': 'RealEstateListing',
      '@id': `${SITE_URL}/#listing`,
      url: SITE_URL,
      name: `${PROPERTY.name} — ${PROPERTY.tagline}`,
      description:
        'Completed, move-in ready commercial units (90, 100 and 135 sqm) for lease at Jl. Pantai Berawa 1053, Canggu, Bali. Floor-to-ceiling glass, on-site parking, striking modern architecture — steps from premier hotels and Finn\'s & Atlas Beach Club. Available now.',
      datePosted: '2026-05-01',
      image: [
        `${SITE_URL}/og-image.jpg`,
        `${SITE_URL}/exterior-front.webp`,
        `${SITE_URL}/interior-open.webp`,
      ],
      provider: { '@id': `${SITE_URL}/#organization` },
      about: {
        '@type': 'Place',
        name: PROPERTY.name,
        telephone: PROPERTY.phone,
        photo: `${SITE_URL}/og-image.jpg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: PROPERTY.street,
          addressLocality: PROPERTY.locality,
          addressRegion: PROPERTY.region,
          postalCode: PROPERTY.postalCode,
          addressCountry: PROPERTY.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: PROPERTY.lat,
          longitude: PROPERTY.lng,
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'On-site parking', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Floor-to-ceiling glass frontage', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Move-in ready', value: true },
        ],
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Opportunity />
      <CurrentProgress />
      <Gallery />
      <TenantPotential />
      <Location />
      <Investment />
      <Contact />
      <Footer />
    </div>
  )
}
