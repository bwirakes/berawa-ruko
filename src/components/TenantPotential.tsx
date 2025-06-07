'use client'

import React from 'react'
import Image from 'next/image'
import { Store, Heart, Users, Scissors, Coffee, Briefcase } from 'lucide-react'

const TenantPotential = () => {
  const tenantTypes = [
    {
      icon: Store,
      title: "Boutique Retail Shops",
      description: "High-end fashion, local crafts, and unique lifestyle products",
      image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    },
    {
      icon: Heart,
      title: "Yoga/Pilates Studio",
      description: "Wellness and fitness spaces for the health-conscious community",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    },
    {
      icon: Briefcase,
      title: "Modern Office Space",
      description: "Co-working hubs and private offices for digital nomads",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    },
    {
      icon: Users,
      title: "High-end Beauty Salon",
      description: "Premium beauty and grooming services for discerning clients",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    },
    {
      icon: Scissors,
      title: "Stylish Barbershop",
      description: "Contemporary grooming experiences for the modern gentleman",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    },
    {
      icon: Coffee,
      title: "Specialty Coffee Shop",
      description: "Artisanal coffee culture meeting point for locals and tourists",
      image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="potential" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            A Blank Canvas<br />
            <span className="font-medium text-brand-gold">for Diverse Businesses</span>
          </h2>
          <p className="text-lg text-brand-black/75 max-w-2xl mx-auto leading-relaxed font-light">
            Discover the diverse business opportunities that thrive in Berawa's 
            vibrant commercial ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tenantTypes.map((tenant, index) => {
            const IconComponent = tenant.icon;
            return (
              <div key={index} className="group bg-brand-white border border-brand-gold overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image 
                    src={tenant.image}
                    alt={tenant.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 border border-brand-white/50 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-brand-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">
                    {tenant.title}
                  </h3>
                  <p className="text-brand-black text-sm leading-relaxed font-light">
                    {tenant.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Updated CTA with consistent brand styling */}
        <div className="bg-brand-white p-12 text-center border border-brand-gold shadow-sm">
          <h3 className="font-serif text-3xl font-light mb-6 text-brand-forest-green">
            Ready to Start Your Business Journey?
          </h3>
          <p className="text-lg mb-8 text-brand-black max-w-md mx-auto font-light">
            Join the thriving community of successful businesses in Berawa
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-gold text-brand-white px-12 py-4 text-sm font-medium tracking-wide uppercase hover:bg-brand-maroon transition-all duration-300 transform hover:scale-105 border-2 border-brand-gold hover:border-brand-maroon shadow-lg"
          >
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default TenantPotential;