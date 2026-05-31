'use client';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslations } from '@/lib/translations';

const WHATSAPP_HREF =
  'https://wa.me/6281385828138?text=' +
  encodeURIComponent("Hi, I'm interested in leasing a unit at Berawa 1053. Could you share the rates and availability?");

const Contact = () => {
  const t = useTranslations();

  return (
    <section id="contact" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            {t('Contact.subtitle')}<br />
            <span className="font-medium text-brand-gold">{t('Contact.title')}</span>
          </h2>
          <p className="text-lg text-brand-black/75 max-w-2xl mx-auto leading-relaxed font-light">
            {t('Contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="font-light text-brand-forest-green mb-8 text-sm tracking-wide uppercase">
                {t('Contact.title')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-brand-gold flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">{t('Contact.phoneLabel')}</p>
                    <a href="tel:+6281385828138" className="text-brand-black hover:text-brand-gold transition-colors font-light">
                      +62 813-8582-8138
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-brand-gold flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">{t('Contact.emailLabel')}</p>
                    <a href="mailto:info@berawastores.com" className="text-brand-black hover:text-brand-gold transition-colors font-light">
                      info@berawastores.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-brand-gold flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">{t('Contact.locationLabel')}</p>
                    <p className="text-brand-black font-light">{t('Contact.address')}</p>
                    <p className="text-brand-black/75 text-sm font-light">{t('Contact.area')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-brand-gold p-8 bg-brand-gold/5">
              <h4 className="font-light text-brand-forest-green mb-6 text-sm tracking-wide uppercase">
                {t('Contact.whyBerawa.title')}
              </h4>
              <ul className="space-y-3 text-brand-black text-sm font-light">
                <li>• {t('Contact.whyBerawa.point1')}</li>
                <li>• {t('Contact.whyBerawa.point2')}</li>
                <li>• {t('Contact.whyBerawa.point3')}</li>
                <li>• {t('Contact.whyBerawa.point4')}</li>
                <li>• {t('Contact.whyBerawa.point5')}</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-brand-white p-12 border border-brand-gold shadow-sm">
            <h3 className="font-light text-brand-forest-green mb-8 text-sm tracking-wide uppercase">
              {t('Contact.directContact.title')}
            </h3>
            
            <div className="text-center">
              <p className="text-brand-black mb-8 leading-relaxed font-light">
                {t('Contact.directContact.description')}
              </p>
              
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-gold text-brand-black py-4 px-6 text-sm font-semibold tracking-wide uppercase flex items-center justify-center hover:bg-brand-maroon hover:text-brand-white transition-all duration-300 mb-4 border-2 border-brand-gold hover:border-brand-maroon transform hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-3" />
                {t('Contact.directContact.button')}
              </a>

              <p className="text-brand-black/70 text-sm font-light mb-8 leading-relaxed">
                {t('Contact.replyNote')}
              </p>

              <div className="pt-8 border-t border-brand-gold/20">
                <h4 className="font-light text-brand-forest-green mb-6 text-sm tracking-wide uppercase">
                  {t('Contact.availableSpaces.title')}
                </h4>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-brand-gold/20 bg-brand-maroon/5 px-4">
                    <span className="text-brand-black font-light">90 sqm</span>
                    <span className="font-light text-brand-forest-green">{t('Contact.availableSpaces.unit1')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-gold/20 bg-brand-gold/5 px-4">
                    <span className="text-brand-black font-light">100 sqm</span>
                    <span className="font-light text-brand-forest-green">{t('Contact.availableSpaces.unit2')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-brand-deep-sea-blue/5 px-4">
                    <span className="text-brand-black font-light">135 sqm</span>
                    <span className="font-light text-brand-forest-green">{t('Contact.availableSpaces.unit3')}</span>
                  </div>
                </div>
                <p className="text-brand-black/70 text-sm font-light mt-6 text-center">
                  {t('Common.leaseTerms')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;