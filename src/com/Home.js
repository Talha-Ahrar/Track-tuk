import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, ChevronRight, Code, Globe, Zap, Users, Target, Cpu, Network, Database, Cloud } from 'lucide-react';

const NetworkNode = ({ x, y, delay = 0, size = 4 }) => (
  <div 
    className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animation: `pulse 2s infinite ${delay}s, glow 3s infinite ${delay}s`,
      boxShadow: '0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.3)'
    }}
  />
);

const NetworkConnection = ({ x1, y1, x2, y2, delay = 0 }) => {
  const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  
  return (
    <div
      className="absolute origin-left bg-gradient-to-r from-cyan-400/60 to-transparent"
      style={{
        left: `${x1}%`,
        top: `${y1}%`,
        width: `${length}%`,
        height: '1px',
        transform: `rotate(${angle}deg)`,
        animation: `connectionFlow 4s infinite ${delay}s`
      }}
    />
  );
};

const FloatingIcon = ({ Icon, x, y, delay = 0 }) => (
  <div 
    className="absolute text-cyan-400/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animation: `float 6s infinite ${delay}s`
    }}
  >
    <Icon size={20} />
  </div>
);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const networkNodes = [
    { x: 10, y: 20, delay: 0, size: 6 },
    { x: 25, y: 15, delay: 0.5, size: 4 },
    { x: 40, y: 25, delay: 1, size: 8 },
    { x: 55, y: 10, delay: 1.5, size: 5 },
    { x: 70, y: 30, delay: 2, size: 6 },
    { x: 85, y: 18, delay: 2.5, size: 4 },
    { x: 15, y: 70, delay: 0.8, size: 7 },
    { x: 35, y: 75, delay: 1.3, size: 5 },
    { x: 60, y: 80, delay: 1.8, size: 6 },
    { x: 80, y: 75, delay: 2.3, size: 4 },
    { x: 45, y: 50, delay: 1.2, size: 10 },
  ];

  const connections = [
    { x1: 10, y1: 20, x2: 25, y2: 15, delay: 0 },
    { x1: 25, y1: 15, x2: 40, y2: 25, delay: 0.3 },
    { x1: 40, y1: 25, x2: 45, y2: 50, delay: 0.6 },
    { x1: 45, y1: 50, x2: 55, y2: 10, delay: 0.9 },
    { x1: 55, y1: 10, x2: 70, y2: 30, delay: 1.2 },
    { x1: 70, y1: 30, x2: 85, y2: 18, delay: 1.5 },
    { x1: 15, y1: 70, x2: 35, y2: 75, delay: 0.4 },
    { x1: 35, y1: 75, x2: 45, y2: 50, delay: 0.7 },
    { x1: 45, y1: 50, x2: 60, y2: 80, delay: 1.0 },
    { x1: 60, y1: 80, x2: 80, y2: 75, delay: 1.3 },
    { x1: 40, y1: 25, x2: 15, y2: 70, delay: 0.5 },
    { x1: 70, y1: 30, x2: 60, y2: 80, delay: 1.1 },
  ];

  const floatingIcons = [
    { Icon: Code, x: 20, y: 40, delay: 0 },
    { Icon: Network, x: 75, y: 45, delay: 1 },
    { Icon: Database, x: 30, y: 60, delay: 2 },
    { Icon: Cloud, x: 65, y: 65, delay: 0.5 },
    { Icon: Cpu, x: 85, y: 55, delay: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.6), 0 0 40px rgba(14, 165, 233, 0.3); }
          50% { box-shadow: 0 0 30px rgba(14, 165, 233, 0.8), 0 0 60px rgba(14, 165, 233, 0.5); }
        }
        
        @keyframes connectionFlow {
          0% { opacity: 0; transform: scaleX(0); }
          50% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-3deg); }
        }
        
        @keyframes dataFlow {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes matrixRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .data-particle {
          animation: dataFlow 8s infinite linear;
        }
        
        .matrix-char {
          animation: matrixRain 10s infinite linear;
          color: rgba(6, 182, 212, 0.3);
          font-family: 'Courier New', monospace;
          font-weight: bold;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #214165 0%, #0090d1 100%);
          position: relative;
          overflow: hidden;
        }
        
        .interactive-glow {
          background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(14, 165, 233, 0.15), 
            rgba(14, 165, 233, 0.05) 40%, 
            transparent 80%);
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center hero-gradient text-white overflow-hidden"
        style={{
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`
        }}
      >
        {/* Interactive Glow Effect */}
        <div className="absolute inset-0 interactive-glow" />
        
        {/* Network Animation Background */}
        <div className="absolute inset-0 opacity-80">
          {/* Network Nodes */}
          {networkNodes.map((node, index) => (
            <NetworkNode key={`node-${index}`} {...node} />
          ))}
          
          {/* Network Connections */}
          {connections.map((connection, index) => (
            <NetworkConnection key={`connection-${index}`} {...connection} />
          ))}
          
          {/* Floating Tech Icons */}
          {floatingIcons.map((icon, index) => (
            <FloatingIcon key={`icon-${index}`} {...icon} />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`matrix-${i}`}
              className="matrix-char absolute text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
            </div>
          ))}
        </div>

        {/* Data Flow Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="data-particle absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 md:space-y-10 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>AI-Powered Digital Solutions</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    High Innovation
                  </span>
                  <span className="text-white/90 font-light block mt-2">
                    for Digital & Marketing
                  </span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl text-white/90 font-light max-w-md mx-auto md:mx-0 leading-relaxed">
                HIDM Solutions leverages cutting-edge technology and human expertise to deliver 
                <span className="text-cyan-200 font-medium"> scalable digital ecosystems</span>, 
                <span className="text-cyan-200 font-medium"> data-driven marketing strategies</span>, and 
                <span className="text-cyan-200 font-medium"> seamless project execution</span>.
              </p>

              {/* Tech Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-white/70">Projects Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm text-white/70">AI Monitoring</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Launch Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:info@hidmsolutions.com"
                  className="group border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full inline-flex items-center text-lg font-medium transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  info@hidmsolutions.com
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Tech Services Card */}
              <div className="relative w-full bg-white/10 border border-white/20 rounded-3xl backdrop-blur-lg shadow-2xl overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-3xl animate-pulse opacity-50"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl m-1 p-8">
                  
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Network className="w-8 h-8 text-cyan-400" />
                      <Cpu className="w-8 h-8 text-blue-400" />
                      <Database className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Tech-Driven Solutions</h2>
                    <p className="text-white/80 font-light">Enterprise-grade digital infrastructure</p>
                  </div>

                  {/* Service Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <Globe className="w-6 h-6 text-cyan-400 mb-2" />
                      <div className="text-sm font-medium">Web Development</div>
                      <div className="text-xs text-white/70">React, Next.js, Cloud</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <Target className="w-6 h-6 text-blue-400 mb-2" />
                      <div className="text-sm font-medium">Digital Marketing</div>
                      <div className="text-xs text-white/70">AI-Powered Analytics</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <Users className="w-6 h-6 text-cyan-300 mb-2" />
                      <div className="text-sm font-medium">Social Media</div>
                      <div className="text-xs text-white/70">Automated Engagement</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <Zap className="w-6 h-6 text-blue-300 mb-2" />
                      <div className="text-sm font-medium">Project Execution</div>
                      <div className="text-xs text-white/70">Delivery Guaranteed</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors group"
                    >
                      Explore Our Tech Stack 
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;