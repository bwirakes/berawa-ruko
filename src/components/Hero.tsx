'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

      return (
    <section className="relative min-h-screen flex flex-col bg-brand-white">
      {/* Property Image Section with Header, Subheader and CTA Overlay */}
      <div className="relative h-screen pt-20">
        <Image 
          src="/berawa-property.png"
          alt="Berawa Commercial Property"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay to ensure text and CTA visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-brand-black/30 to-brand-black/40"></div>
        
        {/* Header, Subheader and CTA Overlay - Centered on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 lg:px-8">
          <div className="text-center text-white max-w-6xl mx-auto">
            <div className="animate-fade-in">
              {/* Header */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 leading-tight text-white">
                Premier Retail Space for Rent<br />
                <span className="font-medium text-brand-gold">in the Heart of Berawa</span>
              </h1>
              
              {/* Subheader */}
              <h2 className="text-xl lg:text-2xl xl:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed font-light text-white/90">
                Coming November 2025, An unparalleled rental opportunity for retail, wellness, and office spaces 
                in Bali's most vibrant neighborhood
              </h2>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-brand-gold text-brand-white px-10 py-4 text-sm font-medium tracking-wide uppercase hover:bg-brand-maroon transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-brand-gold hover:border-brand-maroon"
                >
                  Inquire Now
                </button>
                
                <button 
                  onClick={() => scrollToSection('location')}
                  className="bg-transparent border-2 border-brand-white text-brand-white px-10 py-4 text-sm font-medium tracking-wide uppercase hover:bg-brand-white hover:text-brand-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Explore Location
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Property details overlay */}
        <div className="absolute bottom-8 left-8 text-brand-white z-10">
          <p className="text-sm font-light tracking-wide uppercase opacity-75 mb-2">Jl. Pantai Berawa 1053</p>
          <p className="text-lg font-light">Berawa, Canggu, Bali</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-brand-white px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">3</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">Units Available</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">90-135</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">Square Meters</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">100m</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">From Premier Hotels</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl lg:text-4xl font-light mb-2 text-brand-gold">5min</div>
              <div className="text-xs tracking-wide uppercase text-brand-black/60">Walk to Finn's & Atlas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('opportunity')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brand-forest-green animate-float z-20"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;