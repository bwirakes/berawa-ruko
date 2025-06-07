'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin, Clock, Waves, Car, Coffee, Dumbbell } from 'lucide-react'

const Location = () => {
  const proximityData = [
    {
      icon: MapPin,
      distance: "100m",
      title: "Premium Hotels & Residences",
      description: "The Komu, Tui Blue, and Magnum Berawa"
    },
    {
      icon: Waves,
      distance: "500m",
      title: "World-Famous Beach Clubs",
      description: "Finn's Beach Club and Atlas Beach Club"
    },
    {
      icon: Clock,
      distance: "15min",
      title: "Walk to Beach",
      description: "Direct access to pristine Berawa Beach"
    },
    {
      icon: Car,
      distance: "36-60min",
      title: "Airport Access",
      description: "Three alternative routes to avoid congestion"
    }
  ];

  const cangguAttractions = [
    {
      image: "https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beach Clubs"
    },
    {
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Rice Paddy Restaurants"
    },
    {
      image: "https://images.pexels.com/photos/1472862/pexels-photo-1472862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Yoga Studios"
    },
    {
      image: "https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Spas & Wellness"
    },
    {
      image: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Surfers & Sunsets"
    },
    {
      image: "https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Specialty Coffee"
    }
  ];

  return (
    <section id="location" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            Positioned for Success:<br />
            <span className="font-medium text-brand-gold">High Foot Traffic & Unmatched Convenience</span>
          </h2>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-brand-white border border-brand-gold p-8 mb-20 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">
              Prime Location
            </h3>
            <p className="text-brand-black mb-2 font-light">Jl. Pantai Berawa 1053</p>
            <p className="text-brand-black/75 text-sm font-light">Berawa, Canggu, Bali</p>
          </div>
          
          <div className="w-full h-96 overflow-hidden rounded-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.5194298973284!2d115.1391947678212!3d-8.661955358478858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1749287882975!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Berawa Commercial Property Location"
            />
          </div>
        </div>

        {/* Proximity Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {proximityData.map((item, index) => {
            const IconComponent = item.icon;
            const bgColors = ['bg-brand-maroon/5', 'bg-brand-gold/5', 'bg-brand-deep-sea-blue/5', 'bg-brand-forest-green/5'];
            return (
              <div key={index} className={`bg-brand-white border border-brand-gold p-8 text-center hover:shadow-sm transition-shadow duration-300 ${bgColors[index % bgColors.length]}`}>
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-brand-gold">
                  <IconComponent className="w-8 h-8 text-brand-gold" />
                </div>
                <div className="text-4xl font-light text-brand-forest-green mb-4">{item.distance}</div>
                <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">{item.title}</h4>
                <p className="text-brand-black text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* What's at Canggu */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl font-light text-brand-forest-green mb-6">
              What's at Canggu?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cangguAttractions.map((attraction, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative overflow-hidden mb-4 aspect-square border border-brand-gold/20">
                  <Image 
                    src={attraction.image}
                    alt={attraction.title}
                    width={1260}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/20 transition-colors duration-300"></div>
                </div>
                <h4 className="font-light text-brand-forest-green text-sm tracking-wide uppercase">{attraction.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;