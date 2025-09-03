import { TranslationProvider } from '@/lib/translations';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Await the params object
  const {locale} = await params;

  return (
    <html lang={locale}>
      <body>
        <TranslationProvider locale={locale as 'en' | 'id'}>
          {children}
        </TranslationProvider>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
} 