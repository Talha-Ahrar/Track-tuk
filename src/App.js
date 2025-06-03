import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Truck, Clock, Shield, ChevronRight, Building } from 'lucide-react';
import { useState } from 'react';

import Navbar from './com/Navbar'
import About from './com/About'
import Contact from './com/Contact'
import Home from './com/Home'
import Services from './com/Services'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
    <footer className="bg-gradient-to-br from-slate-100 to-slate-50 border-t-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              TRACK TUK
            </h3>
            <p className="text-slate-700 text-lg">
              Professional delivery service in Dubai, U.A.E
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:TRACKTUK@OUTLOOK.SA" 
                className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 mr-3 text-indigo-600 group-hover:text-indigo-700" />
                TRACKTUK@OUTLOOK.SA
              </a>
              <a 
                href="tel:+971507994912" 
                className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors duration-300 group"
              >
                <Phone className="h-5 w-5 mr-3 text-indigo-600 group-hover:text-indigo-700" />
                +971507994912
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              Address
            </h4>
            <div className="flex items-start text-slate-600">
              <Building className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-indigo-600" />
              <span>
                Motor city, Detroit House,<br />
                Office 304 floor 3rd,<br />
                Dubai, U.A.E
              </span>
            </div>
          </div>
        </div>
        
        {/* Developer Attribution */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500">
              © {new Date().getFullYear()} TRACK TUK. All rights reserved.
            </div>
            <div className="text-slate-500">
              Developed by{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 cursor-pointer">
                Beta Pixel Studio
              </span>
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