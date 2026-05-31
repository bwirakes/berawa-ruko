'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Building2, Car, Sun, Users, Eye, X } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

const Opportunity = () => {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const keyFeatures = [
    {
      icon: Building2,
      title: t('Opportunity.features.architecture.title'),
      description: t('Opportunity.features.architecture.description'),
    },
    {
      icon: Sun,
      title: t('Opportunity.features.light.title'),
      description: t('Opportunity.features.light.description'),
    },
    {
      icon: Car,
      title: t('Opportunity.features.parking.title'),
      description: t('Opportunity.features.parking.description'),
    },
    {
      icon: Users,
      title: t('Opportunity.features.visibility.title'),
      description: t('Opportunity.features.visibility.description'),
    },
  ];

  return (
    <section id="opportunity" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
                {t('Opportunity.title_part1')}<br />
                <span className="font-medium text-brand-gold">{t('Opportunity.title_part2')}</span>
              </h2>
              <p className="text-lg text-brand-black leading-relaxed max-w-lg font-light">
                {t('Opportunity.description')}
              </p>
            </div>

            {/* Available Spaces */}
            <div className="space-y-8">
              <h3 className="text-xl font-light text-brand-forest-green tracking-wide uppercase text-sm">
                {t('Opportunity.availableSpaces.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">90 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">{t('Opportunity.availableSpaces.unit1')}</p>
                </div>
                
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">100 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">{t('Opportunity.availableSpaces.unit2')}</p>
                </div>
                
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">135 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">{t('Opportunity.availableSpaces.unit3')}</p>
                </div>
              </div>
              <p className="text-brand-black/70 text-sm font-light">{t('Common.leaseTerms')}</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="space-y-12">
            <div className="aspect-[4/5] overflow-hidden border-4 border-brand-gold relative group cursor-pointer"
                 onClick={() => setSelectedImage("/opportunity-facade.webp")}>
              <Image
                src="/opportunity-facade.webp"
                alt="BERAWA 1053 facade — the signature peaked canopy roof over exposed brick and concrete"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-12 h-12 text-brand-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Selling Points */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-sm font-light tracking-wide uppercase text-brand-forest-green mb-6">
              {t('Opportunity.keyFeatures.title')}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center bg-brand-gold/5 p-8 border border-brand-gold">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-brand-gold">
                    <Icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">{feature.title}</h4>
                  <p className="text-brand-black text-sm leading-relaxed font-light">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-brand-black/90 z-50 flex items-center justify-center p-6"
               onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl max-h-full animate-in fade-in duration-300">
              <button 
                className="absolute -top-12 right-0 text-brand-white hover:text-brand-gold transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-8 h-8" />
              </button>
              <Image 
                src={selectedImage}
                alt={t('Opportunity.modal.alt')}
                width={1200}
                height={1500}
                className="max-w-full max-h-full object-contain border-4 border-brand-gold animate-in zoom-in duration-300"
                sizes="90vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Opportunity;