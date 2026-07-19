import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarRange,
  CircleDotDashed,
  FileText,
  FolderKey,
  HandCoins,
  LandPlot,
  MapPin,
  Ruler,
} from 'lucide-react'
import LandEnquiry from '@/components/land/LandEnquiry'
import LandHeader from '@/components/land/LandHeader'
import styles from '@/components/land/LandPage.module.css'
import { asSiteLocale, landCopy } from '@/lib/land'
import { PROPERTY, SITE_URL } from '@/lib/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = asSiteLocale(rawLocale)
  const isId = locale === 'id'
  const title = isId ? 'BERAWA 25 — Sewa Lahan Komersial 30 Tahun di Berawa' : 'BERAWA 25 — 30-Year Commercial Land Lease in Berawa'
  const description = isId
    ? 'Peluang sewa lahan 25 are (2.500 m²) selama 30 tahun di BERAWA 1053, dekat Mosto di koridor Jalan Pantai Berawa, Bali.'
    : 'A 25-are (2,500 sqm), 30-year commercial land lease opportunity at BERAWA 1053, near Mosto on the Jalan Pantai Berawa corridor, Bali.'
  return {
    title: { absolute: title }, description,
    alternates: { canonical: `/${locale}/land`, languages: { en: '/en/land', id: '/id/land', 'x-default': '/en/land' } },
    openGraph: { title, description, url: `/${locale}/land`, locale: isId ? 'id_ID' : 'en_US', type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BERAWA 1053 commercial address in Berawa, Bali' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  }
}

export default async function LandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  const locale = asSiteLocale(rawLocale)
  const c = landCopy[locale]
  const factIcons = [Ruler, CalendarRange, MapPin, CircleDotDashed]
  const termIcons = [CalendarRange, LandPlot, HandCoins, FolderKey]
  const plotOptions = locale === 'id' ? [
    { label: '4 bidang', sizes: ['6', '6', '6', '6'], reserve: '1 are untuk akses / servis bersama', note: 'Empat bidang yang lebih besar untuk operator utama.' },
    { label: '5 bidang', sizes: ['5', '5', '5', '5', '5'], reserve: '25 are terbagi rata', note: 'Ukuran seimbang untuk campuran penyewa.' },
    { label: '6 bidang', sizes: ['4', '4', '4', '4', '4', '5'], reserve: 'Total 25 are', note: 'Lebih banyak bidang dengan titik masuk lebih kecil.' },
  ] : [
    { label: '4 plots', sizes: ['6', '6', '6', '6'], reserve: '1 are held for shared access / services', note: 'Four larger plots for anchor operators.' },
    { label: '5 plots', sizes: ['5', '5', '5', '5', '5'], reserve: '25 are divided evenly', note: 'Balanced sizes for a mixed tenant line-up.' },
    { label: '6 plots', sizes: ['4', '4', '4', '4', '4', '5'], reserve: '25 are in total', note: 'More plots with a smaller entry size.' },
  ]
  const nearby = locale === 'id' ? [
    { name: 'Mosto', meta: 'Jl. Pantai Berawa No. 8 · di sebelah lokasi', href: 'https://mostobali.com/', image: '/land/businesses/mosto.webp' },
    { name: 'Milk & Madu', meta: 'Jl. Pantai Berawa No. 52 · kafe lingkungan', href: 'https://milkandmadu.com/contact-us/', image: '/land/businesses/milk-and-madu.webp' },
    { name: 'BAKED. Berawa', meta: 'Jl. Raya Semat, Gg. Kupu-kupu No. 1 · bakery', href: 'https://baked.co.id/pages/new-location', image: '/land/businesses/baked-berawa.webp' },
    { name: 'Tamora Gallery', meta: 'Pusat belanja, kuliner dan gaya hidup Berawa', href: 'https://thetamora.com/tamora/', image: '/land/businesses/tamora.webp' },
    { name: 'FINNS Beach Club', meta: 'Jalan Pantai Berawa · tepi Pantai Berawa', href: 'https://finnsbeachclub.com/location/', image: '/land/businesses/finns.webp' },
    { name: 'Atlas Beach Fest', meta: 'Jl. Pantai Berawa No. 88 · tepi pantai', href: 'https://atlasbeachfest.com/beach-club/about', image: '/land/businesses/atlas.webp' },
  ] : [
    { name: 'Mosto', meta: 'Jl. Pantai Berawa No. 8 · next to the site', href: 'https://mostobali.com/', image: '/land/businesses/mosto.webp' },
    { name: 'Milk & Madu', meta: 'Jl. Pantai Berawa No. 52 · neighbourhood café', href: 'https://milkandmadu.com/contact-us/', image: '/land/businesses/milk-and-madu.webp' },
    { name: 'BAKED. Berawa', meta: 'Jl. Raya Semat, Gg. Kupu-kupu No. 1 · bakery', href: 'https://baked.co.id/pages/new-location', image: '/land/businesses/baked-berawa.webp' },
    { name: 'Tamora Gallery', meta: 'Berawa retail, dining and lifestyle arcade', href: 'https://thetamora.com/tamora/', image: '/land/businesses/tamora.webp' },
    { name: 'FINNS Beach Club', meta: 'Jalan Pantai Berawa · Berawa beachfront', href: 'https://finnsbeachclub.com/location/', image: '/land/businesses/finns.webp' },
    { name: 'Atlas Beach Fest', meta: 'Jl. Pantai Berawa No. 88 · beachfront', href: 'https://atlasbeachfest.com/beach-club/about', image: '/land/businesses/atlas.webp' },
  ]
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'RealEstateListing',
    name: locale === 'id' ? 'BERAWA 25 — Sewa Lahan 30 Tahun' : 'BERAWA 25 — 30-Year Land Lease',
    url: `${SITE_URL}/${locale}/land`,
    description: c.hero,
    image: [`${SITE_URL}/hero-exterior.webp`, `${SITE_URL}/exterior-front.webp`],
    datePosted: '2026-07-18',
    provider: { '@type': 'Organization', name: PROPERTY.name, url: SITE_URL, telephone: PROPERTY.phone, email: PROPERTY.email },
    about: {
      '@type': 'Place', name: 'BERAWA 1053 land opportunity',
      address: { '@type': 'PostalAddress', streetAddress: PROPERTY.street, addressLocality: PROPERTY.locality, addressRegion: PROPERTY.region, postalCode: PROPERTY.postalCode, addressCountry: PROPERTY.country },
      geo: { '@type': 'GeoCoordinates', latitude: PROPERTY.lat, longitude: PROPERTY.lng },
      additionalProperty: [{ '@type': 'PropertyValue', name: 'Land area', value: 2500, unitCode: 'MTK' }, { '@type': 'PropertyValue', name: 'Lease term', value: 30, unitText: 'years' }],
    },
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandHeader locale={locale} labels={c.nav} />
      <main>
        <section className={styles.hero} aria-labelledby="land-title">
          <Image className={styles.heroImage} src="/land/bali-coast-hero.jpg" alt="Bali west coast at sunset, used as regional lifestyle imagery" fill priority sizes="100vw" />
          <div className={styles.heroShade} />
          <div className={`${styles.wrap} ${styles.heroContent}`}>
            <div className={`${styles.kicker} ${styles.utility}`}><FileText aria-hidden="true" />{c.kicker}</div>
            <h1 id="land-title" className={`${styles.heroTitle} ${styles.display}`}>{locale === 'id' ? 'Lahan untuk disewa' : 'Land for lease'}<em>{locale === 'id' ? 'di pusat Berawa' : 'in the heart of Berawa'}</em></h1>
            <div className={styles.heroBottom}>
              <p className={styles.heroCopy}>{c.hero}</p>
              <div className={styles.heroActions}>
                <a className={`${styles.button} ${styles.primaryButton}`} href="#enquire">{c.primary}</a>
                <a className={`${styles.button} ${styles.ghostButton}`} href="#possibilities">{c.explore} ↓</a>
              </div>
            </div>
            <p className={styles.photoCredit}>Bali coast · Photo: Sergey Chuprin / Unsplash</p>
          </div>
        </section>

        <div className={styles.facts}><div className={`${styles.wrap} ${styles.factsGrid}`}>
          {c.facts.map(([label, value], index) => { const Icon = factIcons[index]; return <div className={styles.fact} key={label}><span className={styles.iconFrame}><Icon aria-hidden="true" /></span><span className={styles.utility}>{label}</span><strong>{value}</strong></div> })}
        </div></div>

        <section className={`${styles.section} ${styles.plotSection}`} id="possibilities">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}><span className={styles.utility}>{locale === 'id' ? 'Pilihan pembagian' : 'Plot options'}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Pilih bidang 4 sampai 6 are.' : 'Choose plots from 4 to 6 are.'}</h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Tiga skenario awal untuk menyewa sebagian atau seluruh lahan.' : 'Three starting layouts for leasing part or all of the land.'}</p></div></div>
            <div className={styles.plotGrid}>{plotOptions.map((option) => <article className={styles.plotCard} key={option.label}><span className={styles.utility}>{option.label}</span><div className={styles.plotDiagram}>{option.sizes.map((size, index) => <span key={`${size}-${index}`}><strong>{size}</strong><small>are</small></span>)}</div><h3>{option.note}</h3><p>{option.reserve}</p></article>)}</div>
            <p className={styles.planNote}>{locale === 'id' ? 'Konsep awal saja. Ukuran akhir, jalur akses, sempadan dan utilitas harus mengikuti survei serta persetujuan pemilik.' : 'Planning concepts only. Final areas, access, setbacks and services depend on survey and owner approval.'}</p>
          </div>
        </section>

        <section className={styles.section} id="site">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}><span className={styles.utility}>{c.siteLabel}</span><h2 className={`${styles.sectionTitle} ${styles.display}`}>{c.siteTitle}</h2></div>
            <figure className={styles.mapFigure} aria-describedby="site-map-caption">
              <div className={styles.mapImageWrap}>
                <Image src="/land/berawa-25-satellite.png" alt={locale === 'id' ? 'Peta satelit Berawa dengan area sekitar 25 are yang ditandai secara indikatif di sebelah barat Jalan Pantai Berawa' : 'Satellite map of Berawa with an approximately 25-are area highlighted west of Jalan Pantai Berawa for indicative location only'} fill sizes="(max-width: 768px) 100vw, 1280px" />
                <div className={styles.siteMarker}><MapPin aria-hidden="true" /><span><strong>{c.mapSiteLabel}</strong><small>{c.mapSiteMeta}</small></span></div>
              </div>
              <figcaption id="site-map-caption" className={styles.mapCaption}><LandPlot aria-hidden="true" /><span>{c.parcelDisclaimer} <em>Map imagery © Google.</em></span></figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.locationSection} id="location">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}><span className={styles.utility}>{locale === 'id' ? 'Lokasi sekitar' : 'Nearby'}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Satu koridor dengan destinasi utama Berawa.' : 'On the same corridor as Berawa landmarks.'}</h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Alamat di bawah diverifikasi dari situs resmi masing-masing tempat. Waktu perjalanan berubah mengikuti lalu lintas.' : 'The addresses below come from each venue’s official website. Travel times vary with traffic.'}</p></div></div>
            <div className={styles.nearbyGrid}>{nearby.map(({ name, meta, href, image }) => <a className={styles.nearbyCard} href={href} target="_blank" rel="noopener noreferrer" key={name}><span className={styles.nearbyImage}><Image src={image} alt={`${name} in Berawa`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></span><span className={styles.nearbyCopy}><span><strong>{name}</strong><p>{meta}</p></span><span aria-hidden="true">↗</span></span></a>)}</div>
            <p className={styles.sourceNote}>{locale === 'id' ? 'Foto berasal dari situs resmi masing-masing bisnis untuk konsep lokasi ini. Minta izin penggunaan sebelum publikasi komersial.' : 'Photos are sourced from each business’s official website for this location concept. Confirm image permissions before commercial publication.'}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.deal}`}>
          <div className={`${styles.wrap} ${styles.dealGrid}`}><div><span className={styles.utility}>{c.termsLabel}</span><h2 className={`${styles.sectionTitle} ${styles.display}`}>{c.termsTitle}</h2></div><div><div className={styles.terms}>{c.terms.map(([label, body], index) => { const Icon = termIcons[index]; return <div className={styles.term} key={label}><span className={styles.iconFrame}><Icon aria-hidden="true" /></span><div><span className={styles.utility}>{label}</span><p>{body}</p></div></div> })}</div><p className={`${styles.disclaimer} ${styles.utility}`}>{c.disclaimer}</p></div></div>
        </section>

        <section className={styles.enquiry} id="enquire">
          <div className={styles.enquiryImage}><Image src="/exterior-angle.webp" alt="Exterior of the completed BERAWA 1053 commercial building" fill sizes="(max-width: 1000px) 100vw, 45vw" /></div>
          <div className={styles.enquiryCopy}><span className={styles.utility}>{c.formLabel}</span><h2 className={`${styles.sectionTitle} ${styles.display}`}>{c.formTitle}</h2><p>{c.formBody}</p><LandEnquiry locale={locale} fields={c.fields} send={c.send} email={c.email} note={c.formNote} /></div>
        </section>
      </main>

      <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerGrid}`}><div><Link className={styles.brand} href={`/${locale}/land`}><Image src="/Icon_Gold.png" alt="" width={72} height={48} className={styles.brandLogo} /><span className={styles.brandText}>BERAWA 1053<small>{locale === 'id' ? 'Lahan 25 are' : '25-are land'}</small></span></Link><p>{c.footer}</p></div><div className={`${styles.footerLinks} ${styles.utility}`}><Link href={`/${locale}`}>{c.shops}</Link><Link href={`/${locale}/blog`}>{c.blog}</Link><span>© {new Date().getFullYear()}</span></div></div></footer>
    </div>
  )
}
