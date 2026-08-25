'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

const WHATSAPP_HREF =
  "https://wa.me/6281385828138?text=" +
  encodeURIComponent("Hi, I'm interested in leasing a unit at Berawa 1053. Could you share the rates and availability?")
const WHATSAPP_VIEWING_HREF =
  "https://wa.me/6281385828138?text=" +
  encodeURIComponent("Hi, I'd like to book a viewing of Berawa 1053. When are you available?")

const Hero = () => {
  const t = useTranslations();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-white">
      {/* Hero viewport: background image + centered, naturally-growing content */}
      <div className="relative min-h-screen">
        <Image
          src="/hero-exterior.webp"
          alt="BERAWA 1053 commercial building for rent in Berawa, Canggu — modern brick-and-concrete architecture with a peaked canopy roof"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay to ensure text and CTA visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/45 to-brand-black/55"></div>

        {/* Centered content — grows with content instead of overflowing */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-40 pb-16 text-center text-white [text-shadow:_0_2px_16px_rgba(0,0,0,0.45)]">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Availability badge */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase shadow-lg [text-shadow:none]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-forest-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-forest-green"></span>
                </span>
                {t('Hero.badge')}
              </span>
            </div>

            {/* Header */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 leading-tight text-white">
              {t('Hero.title')}
              <span className="block mt-2 sm:mt-3 font-medium text-brand-gold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                {t('Hero.subtitle')}
              </span>
            </h1>

            {/* Subheader */}
            <p className="text-base sm:text-lg lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light text-white/90">
              {t('Hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center [text-shadow:none]">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-gold text-brand-black px-10 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-brand-maroon hover:text-brand-white transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-brand-gold hover:border-brand-maroon flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t('Hero.inquire')}
              </a>

              <a
                href={WHATSAPP_VIEWING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border-2 border-brand-white text-brand-white px-10 py-4 text-sm font-medium tracking-wide uppercase hover:bg-brand-white hover:text-brand-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center"
              >
                {t('Hero.viewing')}
              </a>
            </div>
          </div>
        </div>

        {/* Property details overlay — hidden on mobile to avoid overlapping the CTAs */}
        <div className="hidden md:block absolute bottom-8 left-8 text-brand-white z-10 [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)]">
          <p className="text-sm font-light tracking-wide uppercase opacity-80 mb-2">Jl. Pantai Berawa 1053</p>
          <p className="text-lg font-light">Berawa, Canggu, Bali</p>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('opportunity')}
          className="hidden sm:block absolute bottom-6 left-1/2 transform -translate-x-1/2 text-brand-white/90 animate-float z-20"
          aria-label="Scroll to details"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-brand-white px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">3</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">{t('Hero.stats.units')}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">90-135</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">{t('Hero.stats.sqm')}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">100m</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">{t('Hero.stats.hotels')}</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">5min</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">{t('Hero.stats.beach')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
