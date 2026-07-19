'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from '@/lib/translations';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-brand-forest-green text-brand-white pt-12 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/Icon_Gold.png" 
                alt="Berawa 1053 Logo" 
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="font-serif text-2xl font-medium tracking-tight text-brand-gold">
                BERAWA 1053
              </div>
            </div>
            <p className="text-brand-white/75 mb-6 max-w-md leading-relaxed font-light">
              {t('Footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-light text-brand-white mb-6 text-sm tracking-wide uppercase">{t('Footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><a href="#opportunity" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{t('Header.opportunity')}</a></li>
              <li><a href="#location" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{t('Header.location')}</a></li>
              <li><a href="#potential" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{t('Header.potential')}</a></li>
              <li><a href="#investment" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{t('Header.business')}</a></li>
              <li><a href="#gallery" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{t('Header.gallery')}</a></li>
              <li><Link href={`/${locale}/land`} className="text-brand-gold hover:text-brand-white transition-colors text-sm font-medium">{locale === 'id' ? 'Sewa Lahan 25 Are' : '25-Are Land Lease'}</Link></li>
              <li><Link href={`/${locale}/blog`} className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">{locale === 'id' ? 'Catatan Pasar' : 'Market Notes'}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 mt-8 pt-6 text-center">
          <p className="text-brand-white/50 text-sm font-light">
            © {new Date().getFullYear()} BERAWA 1053. {t('Footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
