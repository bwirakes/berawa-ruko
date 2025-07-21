import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'id'] as const;
export const defaultLocale = 'en' as const;

// @ts-ignore - Known issue with next-intl types in this version
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 