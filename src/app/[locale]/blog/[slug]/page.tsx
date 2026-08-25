import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LandHeader from '@/components/land/LandHeader'
import landStyles from '@/components/land/LandPage.module.css'
import styles from '@/components/land/LandBlog.module.css'
import { blogArticles, getArticle } from '@/lib/blog'
import { asSiteLocale, landCopy } from '@/lib/land'
import { SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params
  const locale = asSiteLocale(raw)
  const article = getArticle(slug)
  if (!article) return {}
  const title = article.title[locale]
  const description = article.dek[locale]
  return {
    title: { absolute: `${title} — BERAWA 25` }, description,
    alternates: { canonical: `/${locale}/blog/${slug}`, languages: { en: `/en/blog/${slug}`, id: `/id/blog/${slug}`, 'x-default': `/en/blog/${slug}` } },
    openGraph: { title, description, url: `/${locale}/blog/${slug}`, type: 'article', publishedTime: article.published, modifiedTime: article.updated, locale: locale === 'id' ? 'id_ID' : 'en_US', images: ['/og-image.jpg'] },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params
  const locale = asSiteLocale(raw)
  const article = getArticle(slug)
  if (!article) notFound()
  const c = landCopy[locale]
  const jsonLd = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'BlogPosting', headline: article.title[locale], description: article.dek[locale], datePublished: article.published, dateModified: article.updated, inLanguage: locale, mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`, author: { '@type': 'Organization', name: 'BERAWA 1053' }, publisher: { '@type': 'Organization', name: 'BERAWA 1053', logo: { '@type': 'ImageObject', url: `${SITE_URL}/Icon_Gold.png` } }, image: `${SITE_URL}/og-image.jpg`, citation: article.sources.map((source) => source.url) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'BERAWA 25', item: `${SITE_URL}/${locale}/land` }, { '@type': 'ListItem', position: 2, name: c.blog, item: `${SITE_URL}/${locale}/blog` }, { '@type': 'ListItem', position: 3, name: article.title[locale], item: `${SITE_URL}/${locale}/blog/${slug}` }] },
    ],
  }
  const max = article.series ? Math.max(...article.series.map((item) => item.value)) : 1

  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className={landStyles.page}><LandHeader locale={locale} labels={c.nav} sectionBase={`/${locale}/land`} /></div><div className={styles.headerSpace} />
    <main>
      <header className={styles.articleHero}><div className={styles.wrap}><span className={styles.utility}>{article.eyebrow[locale]}</span><h1 className={styles.display}>{article.title[locale]}</h1><p className={styles.dek}>{article.dek[locale]}</p><div className={`${styles.meta} ${styles.utility}`}><span>{article.published}</span><span>{article.readMinutes} min</span><span>{locale === 'id' ? 'Sumber primer' : 'Primary sources'}</span></div><Link className={styles.back} href={`/${locale}/blog`}>← {locale === 'id' ? 'Semua catatan pasar' : 'All market notes'}</Link></div></header>
      <div className={`${styles.wrap} ${styles.articleBody}`}>
        <aside className={`${styles.aside} ${styles.utility}`}><p>{locale === 'id' ? 'Diterbitkan' : 'Published'}<br />{article.published}</p><p>{locale === 'id' ? 'Diperbarui' : 'Updated'}<br />{article.updated}</p><a href="#sources">{locale === 'id' ? 'Lihat sumber' : 'View sources'} ↓</a></aside>
        <article className={styles.body}>
          {article.series && <figure className={styles.chart} aria-label={locale === 'id' ? 'Grafik kunjungan wisatawan asing langsung ke Bali per tahun' : 'Chart of direct foreign arrivals to Bali by year'}>{article.series.map((item) => <div className={styles.barItem} key={item.year}><span className={`${styles.barValue} ${styles.utility}`}>{item.label}</span><span className={styles.bar} style={{ height: `${Math.max(2, item.value / max * 180)}px` }} /><span className={`${styles.barYear} ${styles.utility}`}>{item.year}</span></div>)}<figcaption className={`${styles.chartNote} ${styles.utility}`}>{locale === 'id' ? 'Kunjungan langsung wisatawan asing ke Bali. Sumber: BPS Bali. Tahun 2021 = 51.' : 'Direct foreign arrivals to Bali. Source: BPS Bali. 2021 = 51.'}</figcaption></figure>}
          {article.sections[locale].map((section) => <section key={section.heading}><h2 className={styles.display}>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <div className={styles.caveat}><strong>{locale === 'id' ? 'Batas penggunaan data' : 'Use this data carefully'}</strong><p>{locale === 'id' ? 'Data tingkat Bali atau Kabupaten Badung tidak membuktikan jumlah pengunjung, nilai sewa, penjualan penyewa atau kenaikan harga pada bidang BERAWA 1053.' : 'Bali- or Badung-level data does not prove footfall, rent, tenant sales or price appreciation for the BERAWA 1053 parcel.'}</p></div>
          <section className={styles.sources} id="sources"><h2>{locale === 'id' ? 'Sumber' : 'Sources'}</h2><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section>
        </article>
      </div>
    </main>
    <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerGrid}`}><Link href={`/${locale}/land`}>BERAWA 25</Link><Link href={`/${locale}/blog`}>{c.blog}</Link></div></footer>
  </div>
}
