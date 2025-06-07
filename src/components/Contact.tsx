import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-brand-forest-green mb-8 leading-tight">
            Secure Your Premier Commercial Space<br />
            <span className="font-medium text-brand-gold">in Berawa Today</span>
          </h1>
          <p className="text-lg text-brand-black/75 max-w-2xl mx-auto leading-relaxed font-light">
            Don't miss this exceptional opportunity in Berawa's most sought-after commercial development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="font-light text-brand-forest-green mb-8 text-sm tracking-wide uppercase">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-brand-gold flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">Phone</p>
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
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">Email</p>
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
                    <p className="text-brand-black/50 text-sm tracking-wide uppercase mb-1 font-light">Location</p>
                    <p className="text-brand-black font-light">Jl. Pantai Berawa 1053</p>
                    <p className="text-brand-black/75 text-sm font-light">Berawa, Canggu, Bali</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-brand-gold p-8 bg-brand-gold/5">
              <h4 className="font-light text-brand-forest-green mb-6 text-sm tracking-wide uppercase">
                Why Choose Berawa?
              </h4>
              <ul className="space-y-3 text-brand-black text-sm font-light">
                <li>• Prime location with high foot traffic</li>
                <li>• Modern facilities with premium finishes</li>
                <li>• Flexible lease terms for various business types</li>
                <li>• Part of Canggu's thriving commercial ecosystem</li>
                <li>• Excellent ROI potential in growing market</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-brand-white p-12 border border-brand-gold shadow-sm">
            <h3 className="font-light text-brand-forest-green mb-8 text-sm tracking-wide uppercase">
              Contact Us Directly
            </h3>
            
            <div className="text-center">
              <p className="text-brand-black mb-8 leading-relaxed font-light">
                Ready to discuss your commercial space needs? Get in touch with us directly via WhatsApp for immediate assistance.
              </p>
              
              {/* Updated WhatsApp button with brand colors */}
              <a 
                href="https://wa.me/6281385828138?text=I'm interested in the Berawa commercial property"
                className="w-full bg-brand-gold text-brand-white py-4 px-6 text-sm font-medium tracking-wide uppercase flex items-center justify-center hover:bg-brand-maroon transition-all duration-300 mb-8 border-2 border-brand-gold hover:border-brand-maroon transform hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-3" />
                WhatsApp Us Now
              </a>

              <div className="pt-8 border-t border-brand-gold/20">
                <h4 className="font-light text-brand-forest-green mb-6 text-sm tracking-wide uppercase">
                  Available Spaces
                </h4>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-brand-gold/20 bg-brand-maroon/5 px-4">
                    <span className="text-brand-black font-light">90 sqm</span>
                    <span className="font-light text-brand-forest-green">2nd Floor Exclusive Boutique</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-brand-gold/20 bg-brand-gold/5 px-4">
                    <span className="text-brand-black font-light">100 sqm</span>
                    <span className="font-light text-brand-forest-green">2nd Floor Exclusive Retail</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-brand-deep-sea-blue/5 px-4">
                    <span className="text-brand-black font-light">135 sqm</span>
                    <span className="font-light text-brand-forest-green">Premium Flagship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;