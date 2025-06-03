import React from 'react';
import { 
  Truck, Clock, Shield, Package, 
  Building, Users, Zap, Globe,
  CheckCircle, ArrowRight, Star
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Express Delivery",
      description: "Same-day delivery within Dubai and UAE",
      features: ["30-minute delivery in Dubai", "Real-time updates", "Professional riders", "Insurance coverage"],
      popular: true
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Business Solutions",
      description: "Tailored services for restaurants and e-commerce",
      features: ["Dedicated fleet management", "Custom service plans", "API integration", "24/7 customer support"],
      popular: false
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "UAE-Wide Coverage",
      description: "Inter-emirate delivery services",
      features: ["All 7 emirates covered", "Scheduled deliveries", "Bulk order handling", "Corporate accounts"],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Food Delivery",
      description: "Hot food delivery with insulated bags"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Documents",
      description: "Confidential document delivery"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Scheduled Pickup",
      description: "Pre-planned delivery services"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bulk Orders",
      description: "Multiple package handling"
    }
  ];

  const process = [
    { step: "01", title: "Book Online", description: "Place your order through our platform" },
    { step: "02", title: "Pickup", description: "Our rider collects your package" },
    { step: "03", title: "In Transit", description: "Package is on its way to destination" },
    { step: "04", title: "Delivered", description: "Safe delivery to destination" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-8">
              <span className="bg-slate-50 text-slate-600 px-6 py-3 rounded-full text-sm font-light shadow-sm border border-slate-200">
                Professional Motorcycle Delivery Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-6">
              Our <span className="text-indigo-600 font-light">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              Professional motorcycle delivery services across the UAE, designed to meet all your logistics needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Core Services</h2>
            <p className="text-xl text-slate-500 font-light">Choose the service that fits your delivery needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className={`relative p-10 rounded-3xl border transition-all duration-300 hover:shadow-sm ${
                service.popular 
                  ? 'border-indigo-200 bg-white shadow-sm' 
                  : 'border-slate-200 bg-white hover:border-indigo-200'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-normal shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-indigo-600 mb-8">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-light text-slate-700 mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 font-light leading-relaxed">{service.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-4" />
                      <span className="text-slate-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <p className="text-xl text-slate-500 font-light">Specialized solutions for specific needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-100">
                <div className="text-indigo-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light text-slate-700 mb-3">{service.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      {/* <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">How It Works</h2>
            <p className="text-xl text-slate-500 font-light">Simple and efficient delivery process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center text-white font-light text-xl shadow-sm">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-600 w-8 h-8" />
                  )}
                </div>
                <h3 className="text-xl font-light text-slate-700 mb-3">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-slate-500 font-light leading-relaxed">
            Contact us today to discuss your delivery requirements and learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-normal transition-all duration-300 shadow-sm">
                Contact Us
              </button>
            </a>
            <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-10 py-5 rounded-full font-normal transition-all duration-300 shadow-sm">
              Call +971507994912
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;