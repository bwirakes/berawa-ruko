'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Download, Eye, X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const floorPlans = [
    {
      size: "135 sqm",
      image: "/first-floor-resto.png",
      description: "Premium flagship space for high-end retail or restaurants"
    },
    {
      size: "90 sqm",
      image: "/second-floor-1.png",
      description: "2nd Floor Exclusive Boutique"
    },
    {
      size: "100 sqm",
      image: "/first-floor-interior.png",
      description: "2nd Floor Exclusive Retail"
    }
  ];

  const propertyImages = [
    {
      src: "/main-view.png",
      title: "Exterior View",
      description: "Modern architecture with distinctive green roof"
    },
    {
      src: "/berawa-property-2.png",
      title: "Interior Space",
      description: "Floor-to-ceiling windows with excellent natural light"
    },
    {
      src: "/premier-floor.png",
      title: "Premier Floor",
      description: "Premium commercial space with high-end finishes"
    },
    {
      src: "/second-floor.png",
      title: "Second Floor",
      description: "Flexible retail space with excellent visibility"
    }
  ];

  return (
    <section id="gallery" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            Explore<br />
            <span className="font-medium text-brand-gold">the Space</span>
          </h2>
          <p className="text-lg text-brand-black/75 max-w-2xl mx-auto leading-relaxed font-light">
            Detailed floor plans and high-resolution renderings of your future commercial space
          </p>
        </div>

        {/* Floor Plans */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="font-light text-brand-forest-green text-sm tracking-wide uppercase">
              Available Floor Plans
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <div key={index} className="bg-brand-white border border-brand-gold overflow-hidden hover:shadow-sm transition-shadow duration-300">
                <div className="relative group">
                  <Image 
                    src={plan.image}
                    alt={`Floor plan ${plan.size}`}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover cursor-pointer"
                    onClick={() => setSelectedImage(plan.image)}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-brand-white" />
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h4 className="font-light text-brand-forest-green mb-4 text-sm tracking-wide uppercase">
                    {plan.size}
                  </h4>
                  <p className="text-brand-black text-sm leading-relaxed mb-6 font-light">
                    {plan.description}
                  </p>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/BERAWA - COMMERCIAL.pdf';
                      link.download = `Berawa-Commercial-Floor-Plan-${plan.size}.pdf`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="border border-brand-gold text-brand-forest-green px-6 py-3 text-xs font-light tracking-wide uppercase hover:bg-brand-gold hover:text-brand-white transition-colors duration-200 flex items-center mx-auto"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property Gallery */}
        <div>
          <div className="text-center mb-16">
            <h3 className="font-light text-brand-forest-green text-sm tracking-wide uppercase">
              Property Gallery
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden cursor-pointer border border-brand-gold"
                   onClick={() => setSelectedImage(image.src)}>
                <Image 
                  src={image.src}
                  alt={image.title}
                  width={1260}
                  height={750}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-brand-white">
                    <h4 className="font-light mb-1 text-sm tracking-wide uppercase">{image.title}</h4>
                    <p className="text-xs opacity-90 font-light">{image.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-8 h-8 text-brand-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-brand-black/90 z-50 flex items-center justify-center p-6"
               onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <button 
                className="absolute -top-12 right-0 text-brand-white hover:text-brand-gold"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <Image 
                src={selectedImage}
                alt="Selected view"
                width={1260}
                height={750}
                className="max-w-full max-h-full object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;