import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { blogArticles } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const languages = { en: `${SITE_URL}/en`, id: `${SITE_URL}/id` }
  return [
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/id`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en/land`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: { languages: { en: `${SITE_URL}/en/land`, id: `${SITE_URL}/id/land` } },
    },
    {
      url: `${SITE_URL}/id/land`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/en/land`, id: `${SITE_URL}/id/land` } },
    },
    ...(['en', 'id'] as const).flatMap((locale) => [
      {
        url: `${SITE_URL}/${locale}/blog`,
        lastModified: new Date('2026-07-18'),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
        alternates: { languages: { en: `${SITE_URL}/en/blog`, id: `${SITE_URL}/id/blog` } },
      },
      ...blogArticles.map((article) => ({
        url: `${SITE_URL}/${locale}/blog/${article.slug}`,
        lastModified: new Date(article.updated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: { languages: { en: `${SITE_URL}/en/blog/${article.slug}`, id: `${SITE_URL}/id/blog/${article.slug}` } },
      })),
    ]),
  ]
}
