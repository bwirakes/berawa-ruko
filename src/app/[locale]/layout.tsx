import type { Metadata } from 'next';
import { TranslationProvider } from '@/lib/translations';
import { notFound } from 'next/navigation';

const supportedLocales = ['en', 'id'] as const;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

const meta = {
  en: {
    title: 'BERAWA 1053 — Premium Commercial Space for Rent in Berawa, Canggu',
    description:
      "Move-in ready commercial units (90–135 sqm) for lease in Berawa, Canggu — Bali's most in-demand strip. Steps from Finn's & Atlas Beach Club. Available now — only 3 units left.",
  },
  id: {
    title: 'BERAWA 1053 — Ruko & Ruang Komersial Disewakan di Berawa, Canggu',
    description:
      'Unit komersial siap pakai (90–135 m²) disewakan di Berawa, Canggu — kawasan paling diminati di Bali. Dekat Finn\'s & Atlas Beach Club. Tersedia sekarang — hanya tersisa 3 unit.',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as (typeof supportedLocales)[number])) {
    notFound();
  }
  const m = meta[locale as 'en' | 'id'] ?? meta.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        id: '/id',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${locale}`,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as (typeof supportedLocales)[number])) {
    notFound();
  }

  return (
    <TranslationProvider locale={locale as 'en' | 'id'}>
      {children}
    </TranslationProvider>
  );
}
