import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone, Mail, Building } from 'lucide-react';
import Navbar from './com/Navbar';
import About from './com/About';
import Contact from './com/Contact';
import Home from './com/Home';
import Services from './com/Services';
import Portfolio from './com/Portfolio'; // ✅ New Page

import WhatsAppButton from './com/WhatsAppButton';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-50">
        <Navbar />
        <main className="flex-grow">
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} /> {/* ✅ New Page */}
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <footer className="bg-gradient-to-br from-white to-slate-100 border-t border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#0090d1] rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-[#0090d1] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#0090d1] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-[#0090d1] rounded-full animate-pulse"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0090d1] to-[#214165] bg-clip-text text-transparent">
                  HIDM Solutions
                </h3>
                <p className="text-slate-700 text-lg">
                  High Innovation in Development & Marketing. We offer web development, marketing videos, sponsored ads, logos, filming, voiceovers, and SEO.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold bg-gradient-to-r from-[#0090d1] to-[#214165] bg-clip-text text-transparent">
                  Contact
                </h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@hidmsolutions.com" 
                    className="flex items-center text-slate-600 hover:text-[#0090d1] transition-colors duration-300 group"
                  >
                    <Mail className="h-5 w-5 mr-3 text-[#0090d1] group-hover:text-[#214165]" />
                    info@hidmsolutions.com
                  </a>
                  <a 
                    href="tel:+971505409782" 
                    className="flex items-center text-slate-600 hover:text-[#0090d1] transition-colors duration-300 group"
                  >
                    <Phone className="h-5 w-5 mr-3 text-[#0090d1] group-hover:text-[#214165]" />
                    +971505409782
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold bg-gradient-to-r from-[#0090d1] to-[#214165] bg-clip-text text-transparent">
                  Address
                </h4>
                <div className="flex items-start text-slate-600">
                  <Building className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-[#0090d1]" />
                  <span>
                    Detroir House, Office 304, 3rd Floor,<br />
                    Motor City, Dubai, UAE<br />
                    <a
                      className="text-[#0090d1] underline hover:text-[#214165]"
                      href="https://maps.app.goo.gl/d6GbSJgtc6b9yXKX7?g_st=awb"
                      target="_blank" rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-slate-500">
                  © {new Date().getFullYear()} HIDM Solutions. All rights reserved.
                </div>
                <div className="text-slate-500">
                  Services: Websites, Marketing Videos, Sponsored Ads, Logos, Filming, Voiceovers, Social Media, Reviews, SEO.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
