import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Clock, Shield, 
  ChevronRight, Package, Star, Users, CheckCircle, 
  Map, MessageSquare, Building, ArrowDown,
  Award, Target, Zap, Globe, Phone, Mail, Bike
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('individuals');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const stats = [
    { number: "100+", label: "Professional Motorcycle Drivers", icon: <Bike className="w-6 h-6" /> },
    { number: "5000+", label: "Monthly Deliveries", icon: <Package className="w-6 h-6" /> },
    { number: "99%", label: "On-Time Delivery", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Service Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const features = [
    { 
      icon: <Clock className="w-8 h-8" />,
      title: "Punctual Delivery", 
      description: "We understand time is crucial. Our commitment to punctual delivery sets us apart in the UAE market." 
    },
    { 
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable & Trustworthy", 
      description: "Trusted by major delivery companies like TALABAT, NOON, DELIVERO, CAREEM, SMAIL, and ARAMEX." 
    },
    { 
      icon: <Zap className="w-8 h-8" />,
      title: "Professional Service", 
      description: "Every delivery is handled with utmost care and attention to detail by our professional riders." 
    },
    { 
      icon: <Globe className="w-8 h-8" />,
      title: "UAE Coverage", 
      description: "Our team of skilled motorcycle drivers represents various nationalities, bringing global expertise." 
    }
  ];



  const partners = [
    { name: 'Talabat', bgColor: 'bg-orange-500' },
     { name: 'Smiles', bgColor: 'bg-blue-500' },
         { name: 'Deliveroo', bgColor: 'bg-teal-500' },
             { name: 'Careem', bgColor: 'bg-green-500' },
    { name: 'Noon', bgColor: 'bg-yellow-400' },


   
    { name: 'Aramex', bgColor: 'bg-red-500' }
  ];
  const services = [
    {
      title: "Motorcycle Delivery Service",
      description: "Professional motorcycle delivery services for businesses across Dubai and UAE",
      features: ["Skilled motorcycle drivers", "Professional handling", "Punctual delivery", "Insurance coverage"]
    },
    {
      title: "Business Solutions",
      description: "Dedicated motorcycle and driver solutions for delivery companies",
      features: ["TALABAT partnerships", "NOON delivery solutions", "DELIVERO services", "CAREEM support"]
    },
    {
      title: "Fleet Management",
      description: "Complete motorcycle courier solutions with professional drivers",
      features: ["Trained drivers", "Various nationalities", "Quality assurance", "Scalable solutions"]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Dubai Restaurant Group",
      text: "TRACK TUK has revolutionized our food delivery. Their reliability is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Startup",
      text: "Professional service that grows with our business. Highly recommended!",
      rating: 5
    },
    {
      name: "Mohamed Hassan",
      company: "Local Business Owner",
      text: "Fast, reliable, and trustworthy. They deliver much more than promised.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-[100dvh] flex items-center bg-slate-50 overflow-hidden">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className={`relative w-full max-w-7xl mx-auto px-4 py-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div className="inline-block">
                <span className="bg-white text-slate-600 px-6 py-3 rounded-full text-sm font-normal shadow-sm border border-slate-200">
                  Professional Motorcycle Delivery Service in Dubai, UAE
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight">
                <span className="text-indigo-600 font-normal block">TRACK TUK</span>
                <span className="text-slate-700">Professional</span>
                <span className="text-slate-700 block">Motorcycle Delivery</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light italic">
                "We deliver much more than we promised, one ride at a time"
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
                We provide reliable and trustworthy motorcycle delivery services and provide motorcycles with drivers for delivery companies within the UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="/contact"
                  className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-normal transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="/contact" 
                  className="group bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-8 py-4 rounded-full inline-flex items-center text-lg font-normal transition-all duration-300 shadow-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 opacity-20 blur-3xl rounded-full" />
              <div className="relative z-10 bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-center">
                  <Bike className="w-32 h-32 mx-auto text-indigo-600 mb-6" />
                  <h3 className="text-2xl font-light text-slate-700 mb-3">Ready to Deliver</h3>
                  <p className="text-slate-500 font-light">Professional motorcycle riders • Secure handling • Punctual delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-100">
                <div className="inline-block p-4 rounded-full bg-white mb-6 shadow-sm">
                  <div className="text-indigo-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-extralight text-slate-700 mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-500 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Why Choose TRACK TUK</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Professional motorcycle delivery solutions that exceed expectations</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-10 rounded-3xl bg-white hover:shadow-sm transition-all duration-500 border border-slate-100">
                <div className="text-indigo-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-light text-slate-700 mb-4">{feature.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Our Services</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Comprehensive motorcycle delivery solutions for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-10 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-100">
                <h3 className="text-2xl font-light text-slate-700 mb-6">{service.title}</h3>
                <p className="text-slate-500 mb-8 font-light leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-4" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

 <div className="bg-slate-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-wide">Trusted Partners</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-70 font-light">
            We proudly serve major delivery companies across the UAE, providing reliable motorcycle delivery solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`${partner.bgColor} backdrop-blur-sm rounded-2xl p-6 text-center font-bold text-lg hover:scale-110 hover:rotate-3 transition-all duration-500 border border-white/10 shadow-lg hover:shadow-2xl text-white transform-gpu hover:-translate-y-2 hover:brightness-110`}
                style={{
                  background: `linear-gradient(135deg, ${partner.bgColor.replace('bg-', '')}, ${partner.bgColor.replace('bg-', '').replace('-500', '-600')})`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <span className="drop-shadow-lg">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Testimonials Section */}
      <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-500 font-light">Trusted by businesses across the UAE</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl hover:shadow-sm transition-all duration-300 border border-slate-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-indigo-600 fill-current" />
                  ))}
                </div>
                <p className="text-slate-500 mb-8 italic font-light leading-relaxed text-lg">"{testimonial.text}"</p>
                <div>
                  <div className="font-light text-slate-700 text-lg">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm font-light">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-8">Ready to Experience Professional Motorcycle Delivery?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-slate-500 font-light leading-relaxed">
            Join hundreds of satisfied customers who trust TRACK TUK for reliable motorcycle delivery services across the UAE
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full inline-flex items-center text-lg font-normal transition-all duration-300 group shadow-sm"
            >
              Get Quote Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact" 
              className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-10 py-5 rounded-full inline-flex items-center text-lg font-normal transition-all duration-300 shadow-sm"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;