'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-forest-green/95 backdrop-blur-md shadow-sm border-b border-brand-gold/20' : 'bg-brand-forest-green'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Icon_Gold.png" 
              alt="Berawa 1053 Logo" 
              width={64}
              height={64}
              className="object-contain"
            />
            <div className="font-serif text-2xl font-medium tracking-tight text-brand-gold">
              BERAWA 1053
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('opportunity')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              Opportunity
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('potential')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              Potential
            </button>
            <button 
              onClick={() => scrollToSection('investment')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              Investment
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-brand-white hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              Gallery
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-black text-brand-white px-8 py-3 text-sm font-light tracking-wide uppercase hover:bg-brand-gold transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-brand-white" /> : <Menu className="w-6 h-6 text-brand-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-forest-green/95 backdrop-blur-md border-t border-brand-gold/20">
            <div className="px-2 pt-2 pb-6 space-y-1">
              <button 
                onClick={() => scrollToSection('opportunity')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                Opportunity
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('potential')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                Potential
              </button>
              <button 
                onClick={() => scrollToSection('investment')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                Investment
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block px-4 py-3 text-brand-white hover:text-brand-gold w-full text-left text-sm font-light tracking-wide uppercase"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block bg-brand-black text-brand-white px-4 py-3 mx-4 mt-4 text-center text-sm font-light tracking-wide uppercase hover:bg-brand-gold"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;