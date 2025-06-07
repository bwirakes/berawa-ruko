'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Building2, Car, Sun, Users, Eye, X } from 'lucide-react'

const Opportunity = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="opportunity" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
                A Place for Your Vision<br />
                <span className="font-medium text-brand-gold">to Flourish</span>
              </h2>
              <p className="text-lg text-brand-black leading-relaxed max-w-lg font-light">
                Discover a premier rental location where modern architecture meets 
                strategic positioning in Berawa's thriving commercial heart. Opening November 2025.
              </p>
            </div>

            {/* Available Spaces */}
            <div className="space-y-8">
              <h3 className="text-xl font-light text-brand-forest-green tracking-wide uppercase text-sm">
                Available Spaces
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">90 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">2nd Floor Exclusive Boutique</p>
                </div>
                
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">100 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">2nd Floor Exclusive Retail</p>
                </div>
                
                <div className="border-l-4 border-brand-gold pl-8 py-6 bg-brand-gold/5">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-4xl font-light text-brand-forest-green">135 sqm</span>
                    <Building2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <p className="text-brand-black font-light">Premium space for flagship stores or restaurants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="space-y-12">
            <div className="aspect-[4/5] overflow-hidden border-4 border-brand-gold relative group cursor-pointer"
                 onClick={() => setSelectedImage("/berawa-property-2.png")}>
              <Image 
                src="/berawa-property-2.png"
                alt="Berawa commercial property"
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
              Key Features
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center bg-brand-gold/5 p-8 border border-brand-gold">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-brand-gold">
                <Building2 className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">Modern Architecture</h4>
              <p className="text-brand-black text-sm leading-relaxed font-light">Two-story building with distinctive green roof and contemporary design</p>
            </div>
            
            <div className="text-center bg-brand-gold/5 p-8 border border-brand-gold">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-brand-gold">
                <Sun className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">Natural Light</h4>
              <p className="text-brand-black text-sm leading-relaxed font-light">Floor-to-ceiling glass windows offering excellent visibility</p>
            </div>
            
            <div className="text-center bg-brand-gold/5 p-8 border border-brand-gold">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-brand-gold">
                <Car className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">Ample Parking</h4>
              <p className="text-brand-black text-sm leading-relaxed font-light">On-site parking for cars and motorcycles</p>
            </div>
            
            <div className="text-center bg-brand-gold/5 p-8 border border-brand-gold">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-brand-gold">
                <Users className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">High Visibility</h4>
              <p className="text-brand-black text-sm leading-relaxed font-light">Prime street-facing location with maximum exposure</p>
            </div>
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
                alt="Berawa commercial property - full view"
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