'use client'

import React from 'react'
import Image from 'next/image'
import { TrendingUp, Award, Globe, Star } from 'lucide-react'

const Investment = () => {
  const accolades = [
    {
      publication: "Forbes",
      year: "2019",
      title: "World's Top 4 Places to Live & Invest",
      logo: "/forbes-logo.png"
    },
    {
      publication: "Time Magazine",
      year: "2020",
      title: "World's Best Islands",
      logo: "/Time_Magazine_logo.svg.png"
    },
    {
      publication: "DestinAsian",
      year: "2021",
      title: "Best Island in the World",
      logo: "/destinasian-logo.webp"
    },
    {
      publication: "Lonely Planet",
      year: "2022",
      title: "Top Tourist Destination",
      logo: "/lonelyplanet.webp"
    }
  ];

  return (
    <section id="investment" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            More Than a Location,<br />
            <span className="font-medium text-brand-gold">It's a Smart Business Decision</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="relative">
            <Image 
              src="https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Canggu lifestyle"
              width={1260}
              height={945}
              className="w-full aspect-[4/3] object-cover border border-brand-gold"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="border-l-2 border-brand-gold pl-6 bg-brand-maroon/5 p-6">
                <div className="w-12 h-12 border border-brand-gold flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-light text-brand-forest-green mb-3 text-sm tracking-wide uppercase">
                  Consistent Growth
                </h3>
                <p className="text-brand-black leading-relaxed font-light">
                  Canggu's reputation as a "surf-town, laid-back, hipster atmosphere" 
                  continues to attract high volumes of domestic and international tourists, 
                  driving steady commercial demand.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-6 bg-brand-deep-sea-blue/5 p-6">
                <div className="w-12 h-12 border border-brand-gold flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-light text-brand-forest-green mb-3 text-sm tracking-wide uppercase">
                  International Recognition
                </h3>
                <p className="text-brand-black leading-relaxed font-light">
                  Global publications consistently rank Bali and Canggu among the world's 
                  top destinations for living, investing, and business opportunities.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-6 bg-brand-gold/5 p-6">
                <div className="w-12 h-12 border border-brand-gold flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-light text-brand-forest-green mb-3 text-sm tracking-wide uppercase">
                  Thriving Community
                </h3>
                <p className="text-brand-black leading-relaxed font-light">
                  A unique blend of local culture and international businesses creates 
                  an ecosystem perfect for diverse commercial ventures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accolades */}
        <div className="bg-brand-white border border-brand-gold p-12 shadow-sm">
          <h3 className="font-light text-brand-forest-green mb-12 text-center text-sm tracking-wide uppercase">
            World-Class Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accolades.map((accolade, index) => {
              const bgColors = ['bg-brand-maroon/5', 'bg-brand-gold/5', 'bg-brand-deep-sea-blue/5', 'bg-brand-forest-green/5'];
              return (
                <div key={index} className={`text-center p-6 border border-brand-gold/20 ${bgColors[index]}`}>
                  <div className="h-12 mb-4 flex items-center justify-center">
                    <Image 
                      src={accolade.logo}
                      alt={`${accolade.publication} logo`}
                      width={120}
                      height={48}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="font-light text-brand-forest-green text-sm mb-2 tracking-wide uppercase">
                    {accolade.publication}
                  </div>
                  <div className="text-brand-gold font-light mb-3">
                    {accolade.year}
                  </div>
                  <div className="text-brand-black text-sm leading-relaxed font-light">
                    {accolade.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;