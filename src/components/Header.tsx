'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale, useTranslations } from '@/lib/translations'
import { trackButtonClick } from '@/lib/analytics'

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-forest-green/95 backdrop-blur-md shadow-sm border-b border-brand-gold/20' : 'bg-brand-forest-green'
    }`}>
      <aside
        className="border-b border-brand-gold/30 bg-brand-black text-brand-white"
        aria-label={locale === 'id' ? 'Pengumuman lahan tersedia' : 'Land availability announcement'}
      >
        <div className="max-w-7xl mx-auto min-h-11 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3">
          <p className="min-w-0 text-[11px] sm:text-xs lg:text-sm leading-tight tracking-wide">
            <span className="sm:hidden">
              {locale === 'id' ? 'Lahan 2.500 m² tersedia' : '2,500 m² land available'}
            </span>
            <span className="hidden sm:inline">
              <strong className="mr-3 text-brand-gold text-[10px] font-semibold tracking-[0.18em] uppercase">
                {locale === 'id' ? 'Lahan juga tersedia' : 'Land also available'}
              </strong>
              <span className="text-brand-white/90">
                {locale === 'id'
                  ? 'Lahan 2.500 m² di sebelah · masa sewa 30 tahun.'
                  : '2,500 m² next door · available on a 30-year lease.'}
              </span>
            </span>
          </p>
          <Link
            href={`/${locale}/land`}
            onClick={() => trackButtonClick('land_announcement', 'header')}
            className="group inline-flex min-h-11 shrink-0 items-center px-1 text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-brand-gold hover:text-brand-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            <span className="sm:hidden">{locale === 'id' ? 'Lihat lahan' : 'View land'}</span>
            <span className="hidden sm:inline">{locale === 'id' ? 'Lihat lahan' : 'Explore the land'}</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </aside>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 justify-between items-center py-5 sm:py-6">
          <div className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <Image 
              src="/Icon_Gold.png" 
              alt="Berawa 1053 Logo" 
              width={64}
              height={64}
              className="h-11 w-11 shrink-0 object-contain sm:h-16 sm:w-16"
            />
            <div className="whitespace-nowrap font-serif text-base font-medium tracking-tight text-brand-gold sm:text-2xl">
              BERAWA 1053
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-8">
            <button 
              onClick={() => scrollToSection('opportunity')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {t('Header.opportunity')}
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {t('Header.location')}
            </button>
            <button 
              onClick={() => scrollToSection('potential')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {t('Header.potential')}
            </button>
            <button 
              onClick={() => scrollToSection('investment')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {t('Header.business')}
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {t('Header.gallery')}
            </button>
            <Link
              href={`/${locale}/land`}
              className="text-brand-gold hover:text-brand-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
            >
              {locale === 'id' ? 'Lahan 25 Are' : '25-Are Land'}
            </Link>
          </nav>

          <div className="hidden xl:flex items-center space-x-4">
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-black text-brand-white px-8 py-3 text-sm font-light tracking-wide uppercase hover:bg-brand-gold transition-colors duration-300"
            >
              {t('Header.contact')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-2 flex shrink-0 items-center gap-1 sm:gap-4">
            <LanguageSwitcher />
            <button
              className="p-2 sm:p-3 sm:-mr-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-brand-white" /> : <Menu className="w-6 h-6 text-brand-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-brand-forest-green/95 backdrop-blur-md border-t border-brand-gold/20">
            <div className="px-2 pt-2 pb-6 space-y-1">
              <button 
                onClick={() => scrollToSection('opportunity')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                {t('Header.opportunity')}
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                {t('Header.location')}
              </button>
              <button 
                onClick={() => scrollToSection('potential')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                {t('Header.potential')}
              </button>
              <button 
                onClick={() => scrollToSection('investment')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                {t('Header.business')}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                {t('Header.gallery')}
              </button>
              <Link
                href={`/${locale}/land`}
                className="block px-4 py-3 text-brand-gold hover:text-brand-white w-full text-left text-sm font-medium tracking-wide uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {locale === 'id' ? 'Lahan 25 Are' : '25-Are Land'}
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block bg-brand-black text-brand-white px-4 py-3 mx-4 mt-4 text-center text-sm font-light tracking-wide uppercase hover:bg-brand-gold"
              >
                {t('Header.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
