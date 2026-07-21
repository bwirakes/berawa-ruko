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
    { label: '4 bidang', sizes: ['7', '6', '6', '6'], widths: [26.90, 23.70, 24.35, 25.05], reserve: 'Tiga bidang 6 are; bidang barat menerima sisa 7 are.', note: 'Empat bidang · target 6 are.' },
    { label: '5 bidang', sizes: ['5', '5', '5', '5', '5'], widths: [19.14, 19.54, 19.97, 20.43, 20.92], reserve: 'Lima bidang 5 are membagi seluruh 25 are.', note: 'Lima bidang · target 5 are.' },
    { label: '6 bidang', sizes: ['5', '4', '4', '4', '4', '4'], widths: [19.14, 15.60, 15.87, 16.16, 16.46, 16.78], reserve: 'Lima bidang 4 are; bidang barat menerima sisa 5 are.', note: 'Enam bidang · target 4 are.' },
  ] : [
    { label: '4 plots', sizes: ['7', '6', '6', '6'], widths: [26.90, 23.70, 24.35, 25.05], reserve: 'Three 6-are plots; the western plot takes the 7-are remainder.', note: 'Four plots · 6-are target.' },
    { label: '5 plots', sizes: ['5', '5', '5', '5', '5'], widths: [19.14, 19.54, 19.97, 20.43, 20.92], reserve: 'Five 5-are plots divide the full 25 are.', note: 'Five plots · 5-are target.' },
    { label: '6 plots', sizes: ['5', '4', '4', '4', '4', '4'], widths: [19.14, 15.60, 15.87, 16.16, 16.46, 16.78], reserve: 'Five 4-are plots; the western plot takes the 5-are remainder.', note: 'Six plots · 4-are target.' },
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
            <div className={styles.sectionHead}><span className={styles.utility}>{locale === 'id' ? 'Pilihan bidang' : 'Plot options'}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Pilih bidang Anda.' : 'Choose your plot.'}<span className={styles.titleAccent}>{locale === 'id' ? '4, 5 atau 6 are.' : '4, 5 or 6 are.'}</span></h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Sewa seluruh 25 are atau pilih bidang yang lebih kecil. Bidang barat tanpa jalan menerima sisa luas.' : 'Lease the full 25 are or choose a smaller plot. The road-free western plot takes the remainder.'}</p></div></div>
            <div className={styles.plotGrid}>{plotOptions.map((option) => <article className={styles.plotCard} key={option.label}><span className={styles.utility}>{option.label}</span><div className={styles.plotDiagram} style={{ gridTemplateColumns: option.widths.map((width) => `${width}fr`).join(' ') }}><span className={styles.plotFull}><strong>{option.sizes[0]}</strong><small>are</small></span><div className={styles.plotRoad}><span>{locale === 'id' ? 'Utara · usulan jalan 3 m' : 'North · proposed 3 m road'}</span></div><div className={styles.plotCells}>{option.sizes.slice(1).map((size, index) => <span key={`${size}-${index + 1}`} style={{ flexGrow: option.widths[index + 1] }}><strong>{size}</strong><small>are</small></span>)}</div></div><h3>{option.note}</h3><p>{option.reserve}</p></article>)}</div>
            <p className={styles.planNote}>{locale === 'id' ? 'Luas bidang adalah pembagian bruto dari total 25 are. Lebar relatif mengikuti bentuk garis Google satelit. Luas jalan, batas legal dan luas bersih harus dikonfirmasi melalui survei kadastral sebelum kontrak.' : 'Plot labels are gross divisions of the 25-are total. Relative widths follow the traced Google satellite outline. Road area, legal boundaries and net areas require cadastral survey before contract.'}</p>
          </div>
        </section>

        <section className={styles.section} id="site">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}><span className={styles.utility}>{locale === 'id' ? 'Lahan' : 'The site'}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Lihat lahannya.' : 'See the land.'}<span className={styles.titleAccent}>{locale === 'id' ? 'Pahami lokasinya.' : 'Understand the setting.'}</span></h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Tampilan satelit indikatif menunjukkan lahan 25 are, usulan akses utara, dan hubungannya dengan Jalan Pantai Berawa.' : 'The indicative satellite view shows the 25-are holding, proposed north access, and its relationship to Jalan Pantai Berawa.'}</p></div></div>
            <figure className={styles.mapFigure} aria-describedby="site-map-caption">
              <div className={styles.mapImageWrap}>
                <Image src="/land/berawa-25-satellite.png" alt={locale === 'id' ? 'Peta satelit Berawa dengan area sekitar 25 are yang ditandai secara indikatif di sebelah barat Jalan Pantai Berawa' : 'Satellite map of Berawa with an approximately 25-are area highlighted west of Jalan Pantai Berawa for indicative location only'} fill sizes="(max-width: 768px) 100vw, 1280px" />
                <div className={styles.northRoadMap} aria-hidden="true" />
                <div className={styles.northRoadLabel}>{locale === 'id' ? 'Usulan jalan 3 m · utara' : 'Proposed 3 m road · north'}</div>
                <div className={styles.siteMarker}><MapPin aria-hidden="true" /><span><strong>{c.mapSiteLabel}</strong><small>{c.mapSiteMeta}</small></span></div>
              </div>
              <figcaption id="site-map-caption" className={styles.mapCaption}><LandPlot aria-hidden="true" /><span>{c.parcelDisclaimer} {locale === 'id' ? 'Jalan 3 m adalah konsep akses di sisi utara, bukan bukti hak jalan atau ukuran legal.' : 'The 3 m road is a north-edge access concept, not evidence of a legal right of way or surveyed width.'} <em>Map imagery © Google.</em></span></figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.locationSection} id="location">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}><span className={styles.utility}>{locale === 'id' ? 'Sekitar' : 'Nearby'}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Di lingkungan yang tepat.' : 'In good company.'}<span className={styles.titleAccent}>{locale === 'id' ? 'Di koridor utama Berawa.' : 'On Berawa’s main corridor.'}</span></h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Mosto berada di sebelah, dengan destinasi kuliner dan gaya hidup Berawa di sepanjang koridor yang sama.' : 'Mosto is next door, with established Berawa dining and lifestyle destinations along the same corridor.'}</p></div></div>
            <div className={styles.nearbyGrid}>{nearby.map(({ name, meta, href, image }) => <a className={styles.nearbyCard} href={href} target="_blank" rel="noopener noreferrer" key={name}><span className={styles.nearbyImage}><Image src={image} alt={`${name} in Berawa`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></span><span className={styles.nearbyCopy}><span><strong>{name}</strong><p>{meta}</p></span><span aria-hidden="true">↗</span></span></a>)}</div>
            <p className={styles.sourceNote}>{locale === 'id' ? 'Foto berasal dari situs resmi masing-masing bisnis untuk konsep lokasi ini. Minta izin penggunaan sebelum publikasi komersial.' : 'Photos are sourced from each business’s official website for this location concept. Confirm image permissions before commercial publication.'}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.deal}`}>
          <div className={styles.wrap}><div className={styles.sectionHead}><span className={styles.utility}>{c.termsLabel}</span><div><h2 className={`${styles.sectionTitle} ${styles.display}`}>{locale === 'id' ? 'Mulai dari struktur yang jelas.' : 'Start with a clear structure.'}<span className={styles.titleAccent}>{locale === 'id' ? 'Selesaikan detail bersama.' : 'Shape the details together.'}</span></h2><p className={styles.sectionIntro}>{locale === 'id' ? 'Empat hal utama untuk memulai pembicaraan sewa sebelum uji tuntas dan kontrak.' : 'Four practical starting points for the lease conversation, before due diligence and contract.'}</p></div></div><div className={styles.dealContent}><div className={styles.terms}>{c.terms.map(([label, body], index) => { const Icon = termIcons[index]; return <div className={styles.term} key={label}><span className={styles.iconFrame}><Icon aria-hidden="true" /></span><div><span className={styles.utility}>{label}</span><p>{body}</p></div></div> })}</div><p className={`${styles.disclaimer} ${styles.utility}`}>{c.disclaimer}</p></div></div>
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
