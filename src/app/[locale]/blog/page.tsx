import type { Metadata } from 'next'
import Link from 'next/link'
import LandHeader from '@/components/land/LandHeader'
import landStyles from '@/components/land/LandPage.module.css'
import styles from '@/components/land/LandBlog.module.css'
import { blogArticles } from '@/lib/blog'
import { asSiteLocale, landCopy } from '@/lib/land'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params
  const locale = asSiteLocale(raw)
  const title = locale === 'id' ? 'Catatan Pasar Bali & Berawa — BERAWA 25' : 'Bali & Berawa Market Notes — BERAWA 25'
  const description = locale === 'id' ? 'Analisis pertumbuhan berbasis data resmi untuk operator yang mengevaluasi keputusan komersial jangka panjang di Berawa.' : 'Source-backed growth analysis for operators evaluating a long-term commercial decision in Berawa.'
  return { title: { absolute: title }, description, alternates: { canonical: `/${locale}/blog`, languages: { en: '/en/blog', id: '/id/blog', 'x-default': '/en/blog' } }, openGraph: { title, description, url: `/${locale}/blog`, type: 'website', locale: locale === 'id' ? 'id_ID' : 'en_US' } }
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale = asSiteLocale(raw)
  const c = landCopy[locale]
  return <div className={styles.page}>
    <div className={landStyles.page}><LandHeader locale={locale} labels={c.nav} sectionBase={`/${locale}/land`} /></div><div className={styles.headerSpace} />
    <main>
      <section className={styles.hero}><div className={styles.wrap}><span className={styles.utility}>{locale === 'id' ? 'Catatan pasar · Data resmi' : 'Market notes · Official data'}</span><h1 className={styles.display}>{locale === 'id' ? 'Pertumbuhan, dengan konteks.' : 'Growth, with context.'}</h1><p>{locale === 'id' ? 'Tulisan untuk keputusan jangka panjang: sumber bertanggal, perhitungan transparan dan batasan yang dinyatakan jelas.' : 'Long-term decision material with dated sources, transparent calculations and clearly stated limits.'}</p></div></section>
      <div className={`${styles.wrap} ${styles.indexGrid}`}>{blogArticles.map((article) => <Link className={styles.card} href={`/${locale}/blog/${article.slug}`} key={article.slug}><span className={styles.utility}>{article.eyebrow[locale]}</span><h2>{article.title[locale]}</h2><p>{article.dek[locale]}</p><span className={`${styles.cardFooter} ${styles.utility}`}><span>{article.readMinutes} min</span><span>{c.readArticle} →</span></span></Link>)}</div>
    </main>
    <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerGrid}`}><Link href={`/${locale}/land`}>BERAWA 25</Link><span className={styles.utility}>© {new Date().getFullYear()} · {c.footer}</span></div></footer>
  </div>
}
