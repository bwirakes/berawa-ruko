import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-forest-green text-brand-white py-12">
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
              Premium commercial spaces in the heart of Berawa, Canggu. 
              Your gateway to success in Bali's most vibrant business district.
            </p>
          </div>
          
          <div>
            <h3 className="font-light text-brand-white mb-6 text-sm tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#opportunity" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">The Opportunity</a></li>
              <li><a href="#location" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">Location</a></li>
              <li><a href="#potential" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">Tenant Potential</a></li>
              <li><a href="#investment" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">Investment</a></li>
              <li><a href="#gallery" className="text-brand-white/75 hover:text-brand-gold transition-colors text-sm font-light">Gallery</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 mt-8 pt-6 text-center">
          <p className="text-brand-white/50 text-sm font-light">
            © 2024 Berawa 1053. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;