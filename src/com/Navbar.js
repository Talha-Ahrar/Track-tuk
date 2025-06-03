import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    // { name: 'Pricing', href: '/pricing' },
    // { name: 'Tracking', href: '/tracking' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Company Name */}
            <div className="flex-shrink-0 flex items-center group">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div> */}
                {/* <div className="relative bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-full"> */}
                   <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                {/* </div> */}
              </div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent tracking-tight">
                  TRACK TUK
                </div>
                {/* <div className="text-xs text-slate-600 -mt-1">
                  Professional Delivery
                </div> */}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Phone className="h-4 w-4 text-indigo-600" />
                <span>+971507994912</span>
              </div>
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-3 space-y-2 border-t border-slate-200 mt-3">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4 text-indigo-600" />
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span>info@tracktuk.ae</span>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-3 rounded-full text-base font-bold transition-colors hover:from-indigo-600 hover:to-indigo-700 shadow-lg">
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;