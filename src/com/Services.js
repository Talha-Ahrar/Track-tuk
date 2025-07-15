import React, { useState, useEffect, useRef } from 'react';
import { 
  Laptop, ThumbsUp, Users, Code, 
  Briefcase, Globe, Zap, Shield,
  CheckCircle, ArrowRight, Phone, Mail, 
  Video, Camera, Mic, Star, Search,
  MapPin, User, Award, Target, 
  Palette, TrendingUp, MessageSquare,
  Network, Database, Cloud, Cpu
} from 'lucide-react';

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

const Services = () => {
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

  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Professional Website Development",
      description: "Create stunning, multilingual websites tailored to your brand with cutting-edge technology.",
      features: [
        "Responsive design across all devices", 
        "Advanced SEO optimization", 
        "Multi-language support (Arabic, English, etc.)", 
        "Lightning-fast performance",
        "CMS integration & admin panels",
        "E-commerce functionality"
      ],
      popular: true,
      tech: ["React", "Next.js", "WordPress", "Shopify"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing Excellence",
      description: "Comprehensive digital marketing strategies that drive real results and business growth.",
      features: [
        "Professional sponsored ad campaigns", 
        "Daily/weekly social media posting", 
        "Organic search optimization", 
        "Google Maps & review management",
        "Multi-platform advertising",
        "Analytics & performance tracking"
      ],
      popular: false,
      tech: ["Google Ads", "Facebook Ads", "Instagram", "LinkedIn"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video & Creative Production",
      description: "High-quality video production and creative content that captures your brand essence.",
      features: [
        "Marketing video creation", 
        "Product photography & filming", 
        "Professional voiceover services", 
        "Multi-dialect audio support",
        "Brand logo design",
        "Creative content strategy"
      ],
      popular: false,
      tech: ["Adobe Suite", "Final Cut Pro", "Canon", "Sony"]
    }
  ];

  const additionalServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity Design",
      description: "Professional logo design and complete brand identity systems that make you stand out."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Review Management",
      description: "Build positive online reputation across Google Maps and all social media platforms."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Organic Growth",
      description: "Strategic posting in relevant groups and pages for maximum organic reach."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Complete social media strategy with consistent posting and engagement."
    }
  ];

  const founders = [
    {
      name: "Talha",
      role: "Co-Founder & Web Development Expert",
      expertise: "Full-stack development, system architecture, and business operations management",
      icon: <Code className="w-8 h-8" />
    },
    {
      name: "Saad", 
      role: "Co-Founder & Digital Marketing Expert",
      expertise: "Digital marketing strategies, project acquisition, and client relationship management",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const networkNodes = [
    { x: 15, y: 25, delay: 0, size: 6 },
    { x: 35, y: 20, delay: 0.5, size: 4 },
    { x: 55, y: 30, delay: 1, size: 8 },
    { x: 75, y: 15, delay: 1.5, size: 5 },
    { x: 85, y: 35, delay: 2, size: 6 },
    { x: 25, y: 65, delay: 0.8, size: 7 },
    { x: 45, y: 70, delay: 1.3, size: 5 },
    { x: 65, y: 75, delay: 1.8, size: 6 },
    { x: 50, y: 45, delay: 1.2, size: 10 },
  ];

  const connections = [
    { x1: 15, y1: 25, x2: 35, y2: 20, delay: 0 },
    { x1: 35, y1: 20, x2: 50, y2: 45, delay: 0.3 },
    { x1: 50, y1: 45, x2: 55, y2: 30, delay: 0.6 },
    { x1: 55, y1: 30, x2: 75, y2: 15, delay: 0.9 },
    { x1: 75, y1: 15, x2: 85, y2: 35, delay: 1.2 },
    { x1: 25, y1: 65, x2: 45, y2: 70, delay: 0.4 },
    { x1: 45, y1: 70, x2: 50, y2: 45, delay: 0.7 },
    { x1: 50, y1: 45, x2: 65, y2: 75, delay: 1.0 },
  ];

  const floatingIcons = [
    { Icon: Video, x: 20, y: 40, delay: 0 },
    { Icon: Camera, x: 80, y: 50, delay: 1 },
    { Icon: Mic, x: 30, y: 80, delay: 2 },
    { Icon: Globe, x: 70, y: 25, delay: 0.5 },
    { Icon: Target, x: 60, y: 60, delay: 1.5 },
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
        
        @keyframes matrixRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
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
          {networkNodes.map((node, index) => (
            <NetworkNode key={`node-${index}`} {...node} />
          ))}
          
          {connections.map((connection, index) => (
            <NetworkConnection key={`connection-${index}`} {...connection} />
          ))}
          
          {floatingIcons.map((icon, index) => (
            <FloatingIcon key={`icon-${index}`} {...icon} />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
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

        <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">High Innovation in Development & Marketing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Our <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
              HIDM Solutions delivers innovative, scalable digital services that transform your business presence and drive measurable growth.
            </p>
          </div>

          {/* Company Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dubai Office</h3>
              <p className="text-sm text-white/80">Detroit House, Office 304<br/>Motor City, Dubai UAE</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Direct Contact</h3>
              <p className="text-sm text-white/80">+971505409782<br/>Available 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-white/80">2 Co-Founders<br/>Specialized Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Core Services</h2>
            <p className="text-xl text-slate-500 font-light">Comprehensive digital solutions designed for business transformation</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:border-[#0090d1] group ${
                service.popular 
                  ? 'border-[#0090d1]/40 bg-white shadow-lg transform hover:scale-105' 
                  : 'border-slate-200 bg-white hover:shadow-xl'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-[#0090d1] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-700 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">{service.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0090d1] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <button className="w-full bg-gradient-to-r from-[#214165] to-[#0090d1] hover:from-[#0090d1] hover:to-[#214165] text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Meet Our Founders</h2>
            <p className="text-xl text-slate-500 font-light">Expert leadership driving innovation and results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="text-[#0090d1] mb-6">
                  {founder.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-2">{founder.name}</h3>
                <h4 className="text-[#0090d1] font-medium mb-4">{founder.role}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{founder.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Additional Services</h2>
            <p className="text-xl text-slate-500 font-light">Comprehensive support services that enhance your digital presence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-300 border border-slate-100">
                <div className="text-[#0090d1] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-3">{service.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 md:py-32 bg-gradient-to-r from-[#214165] to-[#0090d1] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Contact HIDM Solutions today and discover how our expertise in web development and digital marketing can accelerate your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="tel:+971505409782" className="group">
              <button className="bg-white text-[#214165] hover:bg-cyan-50 px-10 py-5 rounded-full font-semibold transition-all duration-300 shadow-lg flex items-center gap-3 hover:scale-105">
                <Phone className="w-5 h-5" />
                Call +971505409782
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="mailto:info@hidmsolutions.com" className="group">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#214165] px-10 py-5 rounded-full font-semibold transition-all duration-300 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                info@hidmsolutions.com
              </button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Visit Our Dubai Office</span>
            </div>
            <p className="text-white/90">Detroit House, Office 304 (3rd Floor)<br/>Motor City, Dubai, UAE</p>
            <a 
              href="https://maps.app.goo.gl/d6GbSJgtc6b9yXKX7?g_st=awb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View on Google Maps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;