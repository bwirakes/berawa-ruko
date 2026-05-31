// Central place for site-wide constants used by SEO metadata, JSON-LD,
// sitemap and robots. Update SITE_URL to your production domain.
export const SITE_URL = 'https://berawa-commercial-property.vercel.app';

export const PROPERTY = {
  name: 'BERAWA 1053',
  tagline: 'Premium Commercial Space for Rent in Berawa, Canggu',
  street: 'Jl. Pantai Berawa 1053',
  locality: 'Canggu',
  region: 'Bali',
  postalCode: '80361',
  country: 'ID',
  lat: -8.661955,
  lng: 115.139195,
  phone: '+6281385828138',
  whatsapp: '6281385828138',
  email: 'info@berawastores.com',
} as const;

export const locales = ['en', 'id'] as const;
