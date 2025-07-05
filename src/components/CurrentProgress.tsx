'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const CurrentProgress = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const progressImages = [
    {
      id: 1,
      image: "/WhatsApp Image 2025-07-01 at 08.46.11.jpeg",
      timestamp: "July 1, 2025 - 08:37",
      description: "Site preparation and material delivery in progress"
    },
    {
      id: 2,
      image: "/WhatsApp Image 2025-07-01 at 08.46.12 (1).jpeg",
      timestamp: "July 1, 2025 - 08:40",
      description: "Foundation excavation and concrete work underway"
    },
    {
      id: 3,
      image: "/WhatsApp Image 2025-07-01 at 08.46.12.jpeg",
      timestamp: "July 1, 2025 - 08:40",
      description: "Structural framework and column installation"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === progressImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? progressImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="current-progress" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            Current Progress
          </h2>
          <p className="text-brand-black/75 text-lg font-light max-w-2xl mx-auto">
            Stay updated with the latest construction milestones and development progress
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-brand-white border border-brand-gold shadow-sm overflow-hidden">
          {/* Image Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {progressImages.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={`Construction progress - ${item.timestamp}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority={item.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                  
                  {/* Timestamp Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-brand-white/95 backdrop-blur-sm border border-brand-gold/20 p-6 max-w-md">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-brand-gold mr-3" />
                        <span className="text-brand-gold font-light text-sm tracking-wide uppercase">
                          {item.timestamp}
                        </span>
                      </div>
                      <p className="text-brand-forest-green font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-white/90 hover:bg-brand-white border border-brand-gold/20 hover:border-brand-gold flex items-center justify-center transition-all duration-300 hover:shadow-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-brand-forest-green" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-white/90 hover:bg-brand-white border border-brand-gold/20 hover:border-brand-gold flex items-center justify-center transition-all duration-300 hover:shadow-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-brand-forest-green" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          {progressImages.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 md:w-24 md:h-24 border-2 transition-all duration-300 overflow-hidden group ${
                index === currentIndex 
                  ? 'border-brand-gold shadow-sm' 
                  : 'border-brand-gold/20 hover:border-brand-gold/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={item.image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 80px, 96px"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'bg-brand-gold/20' : 'bg-brand-black/20 group-hover:bg-brand-black/10'
              }`} />
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {progressImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-gold' 
                  : 'bg-brand-gold/30 hover:bg-brand-gold/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentProgress 