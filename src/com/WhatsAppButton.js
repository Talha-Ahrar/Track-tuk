import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "971505409782";
    const message = "Hello! I'm interested in HIDM Solutions services.";
    const encodedMsg = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed right-6 bottom-24 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="relative group">
        {/* Main WhatsApp Button */}
      <button
  onClick={handleWhatsAppClick}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={`
    w-16 h-16 rounded-full bg-green-600 
    flex items-center justify-center text-white 
    shadow-lg hover:bg-green-500 transition-all duration-300 
    active:scale-95 cursor-pointer z-50
  `}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-current"
  >
    <path d="M16 .1C7.2.1.1 7.3.1 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.3 5 2 7.7 2C24.8 31.8 32 24.6 32 16S24.8.1 16 .1zm0 29.1c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.7 21 3 18.6 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 13-13 13zm7.1-9.6c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.7.1-1.9-.9-3.2-2.3-4.2-4-.2-.4 0-.6.2-.8.2-.2.5-.6.7-.9.2-.3.2-.5.1-.8-.1-.2-.8-2-1.1-2.8-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6 0 1.5 1.1 3 1.3 3.2.2.3 2.1 3.3 5.1 4.6.7.3 1.2.5 1.7.7.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3s-.4-.2-.8-.4z"/>
  </svg>
</button>


        {/* Tooltip */}
        <div className={`
          absolute right-full top-1/2 transform -translate-y-1/2 mr-2 
          bg-slate-900 text-white text-sm px-3 py-2 rounded shadow 
          transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-green-400" />
            <span>Chat on WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
