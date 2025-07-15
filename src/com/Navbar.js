import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X,MonitorSmartphone, Phone, Mail, Network, Zap, Globe, Target, Code, Layers, Cpu, Wifi, Radio } from 'lucide-react';

const NetworkParticle = ({ delay = 0, x = 0, y = 0, size = 2 }) => (
  <div 
    className="absolute rounded-full bg-[#0090d1] animate-pulse"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
      boxShadow: `0 0 ${size * 4}px rgba(0, 144, 209, 0.6)`
    }}
  />
);

const DataLine = ({ startX, startY, endX, endY, delay = 0 }) => {
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  
  return (
    <div
      className="absolute h-px bg-gradient-to-r from-transparent via-[#0090d1] to-transparent opacity-60"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${length}%`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 0',
        animation: `dataFlow 3s infinite linear`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Services', href: '/services', icon: Code },
    { name: 'About', href: '/about', icon: Layers },
    { name: 'Contact', href: '/contact', icon: Target },
    // { name: 'Portfolio', href: '/portfolio', icon: MonitorSmartphone }

  ];

  return (
    <>
      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0; }
        }
        
        @keyframes networkPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.6;
            box-shadow: 0 0 5px rgba(0, 144, 209, 0.4);
          }
          50% { 
            transform: scale(1.5); 
            opacity: 1;
            box-shadow: 0 0 20px rgba(0, 144, 209, 0.8);
          }
        }
        
        @keyframes hoverGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(0, 144, 209, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 144, 209, 0.6); }
        }
        
        @keyframes scanLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .nav-background {
          background: ${scrolled 
            ? 'linear-gradient(135deg, rgba(33, 65, 101, 0.95) 0%, rgba(0, 144, 209, 0.85) 100%)'
            : 'rgba(255, 255, 255, 0.95)'
          };
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${scrolled ? 'rgba(0, 144, 209, 0.3)' : 'rgba(33, 65, 101, 0.2)'};
          transition: all 0.3s ease;
        }
        
        .logo-container {
          background: ${scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
          border-radius: ${scrolled ? '8px' : '0px'};
          padding: ${scrolled ? '8px' : '0px'};
          transition: all 0.3s ease;
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          color: ${scrolled ? 'rgba(255, 255, 255, 0.9)' : '#214165'};
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 144, 209, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .nav-link:hover::before {
          left: 100%;
        }
        
        .nav-link:hover {
          color: #0090d1;
          transform: translateY(-2px);
          text-shadow: 0 0 10px rgba(0, 144, 209, 0.5);
        }
        
        .logo-glow:hover {
          filter: drop-shadow(0 0 15px rgba(0, 144, 209, 0.6));
          transform: scale(1.05);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #214165 0%, #0090d1 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: scanLine 2s infinite;
        }
        
        .cta-button:hover {
          background: linear-gradient(135deg, #0090d1 0%, #214165 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 144, 209, 0.4);
        }
        
        .mobile-menu {
          background: linear-gradient(180deg, rgba(33, 65, 101, 0.95) 0%, rgba(0, 144, 209, 0.9) 100%);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0, 144, 209, 0.3);
        }
        
        .network-node {
          animation: networkPulse 2s infinite ease-in-out;
        }
        
        .brand-text {
          color: ${scrolled ? '#ffffff' : '#214165'};
          font-weight: bold;
          transition: color 0.3s ease;
          text-shadow: ${scrolled ? '0 0 10px rgba(0, 144, 209, 0.5)' : 'none'};
        }
         nav * {
  cursor: default !important;
}

      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 nav-background`}>
        {/* Network Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {/* Network Particles */}
          <NetworkParticle delay={0} x={10} y={30} size={2} />
          <NetworkParticle delay={0.5} x={25} y={20} size={3} />
          <NetworkParticle delay={1} x={45} y={40} size={2} />
          <NetworkParticle delay={1.5} x={65} y={25} size={3} />
          <NetworkParticle delay={2} x={80} y={35} size={2} />
          <NetworkParticle delay={2.5} x={90} y={20} size={3} />
          
          {/* Data Connections */}
          <DataLine startX={10} startY={30} endX={25} endY={20} delay={0} />
          <DataLine startX={25} startY={20} endX={45} endY={40} delay={0.5} />
          <DataLine startX={45} startY={40} endX={65} endY={25} delay={1} />
          <DataLine startX={65} startY={25} endX={80} endY={35} delay={1.5} />
          <DataLine startX={80} startY={35} endX={90} endY={20} delay={2} />
          
          {/* Floating Network Elements */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#0090d1] rounded-full network-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="logo-container logo-glow transition-all duration-300 relative">
                <img 
                  src="/HIDM hz.png" 
                  alt="HIDM Solutions" 
                  className="h-10 w-auto"
                  style={{ aspectRatio: '500/193' }}
                />
                {/* Network indicator */}
                <div className={`absolute -top-1 -right-1 w-2 h-2 bg-[#0090d1] rounded-full network-node ${
                  scrolled ? '-translate-y-1 translate-x-1' : ''
                }`}></div>
              </div>
              
              <div className="hidden sm:block">
                <div className="text-lg font-bold brand-text">
                  HIDM SOLUTIONS
                </div>
                <div className={`text-xs font-medium flex items-center gap-2 ${
                  scrolled ? 'text-white/80' : 'text-[#214165]/70'
                }`}>
                  <Radio className="w-3 h-3 text-[#0090d1] animate-pulse" />
                 High Innovation
for Digital & Marketing
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 text-sm px-3 py-2 rounded-lg border transition-all duration-300 ${
                scrolled 
                  ? 'text-white/90 border-white/30 bg-white/10' 
                  : 'text-[#214165] border-[#214165]/30 bg-[#214165]/5'
              }`}>
                <Phone className="h-4 w-4 text-[#0090d1]" />
                <span>+971505409782</span>
              </div>
              
              {/* <button className="cta-button text-white px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 group">
                <Zap className="w-4 h-4 group-hover:animate-pulse" />
                Get Quote
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-white/90 hover:bg-white/10' 
                  : 'text-[#214165] hover:bg-[#214165]/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 group-hover:animate-pulse" />
                  {item.name}
                </a>
              ))}

              {/* Mobile Contact */}
              <div className="pt-4 space-y-3 border-t border-white/20">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white/90">
                  <Phone className="h-5 w-5 text-[#0090d1]" />
                  <span>+971505409782</span>
                </div>
                
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white/90">
                  <Mail className="h-5 w-5 text-[#0090d1]" />
                  <span>info@hidmsolutions.com</span>
                </div>
                
                <button className="w-full cta-button text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;