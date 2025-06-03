import React from 'react';
import { Users, Target, Heart, Award, Map, TrendingUp, Clock, Shield, Zap, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Punctuality",
      description: "We understand time is crucial. Our commitment to punctual delivery sets us apart in the UAE market."
    },
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: "Customer Care",
      description: "Every delivery is handled with utmost care and attention to detail by our professional riders."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery across the UAE."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Reliability",
      description: "Trusted by major delivery companies like TALABAT, NOON, DELIVERO, CAREEM, SMAIL, and ARAMEX."
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Innovation",
      description: "Revolutionizing delivery services with sophisticated tracking systems and modern solutions."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Diversity",
      description: "Our team of skilled motorcycle drivers represents various nationalities, bringing global expertise."
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-8">
              <span className="bg-slate-50 text-slate-600 px-6 py-3 rounded-full text-sm font-light shadow-sm border border-slate-200">
                About TRACK TUK
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-6">
              Our <span className="text-indigo-600 font-light">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              We provide reliable and trustworthy delivery services and provide motorcycles with drivers for delivery companies within the UAE.
            </p>
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-100 rounded-3xl opacity-50"></div>
              <div className="relative aspect-[3/4] w-full max-h-[600px] overflow-hidden rounded-3xl shadow-sm border border-slate-200">
                <img 
                  src="/Ceo.jpg" 
                  alt="CEO Abdullah Khamis Abdullah Al Ashiq" 
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-3xl opacity-50"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-8">
                Message from our <span className="text-indigo-600 font-light">CEO</span>
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                "As CEO of Track Tuk, I am proud to lead a team of dedicated professionals committed to providing the best delivery services in the UAE. As a citizen of the country, and with my membership in the Mohammed bin Rashid Al Maktoum Foundation and his support for young Emiratis, he provides us with the foundation for innovation."
              </p>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                "Our mission is to connect businesses and customers through fast and reliable delivery solutions, and to provide motorcycles with drivers for all delivery companies within the UAE."
              </p>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                "We started with a simple vision: to revolutionize the way we provide bikes and scooters to delivery companies like TALABAT, NOON, DELIVERO, CAREEM, SMAIL, and ARAMEX in the UAE. Today, with our team of 100 skilled motorcycle drivers of various nationalities and a sophisticated tracking system, we are turning that vision into reality. Our goal is to provide 3,000 drivers within a year."
              </p>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                "Our commitment to sustainability, reliability, and customer satisfaction drives everything we do. In addition to our leadership in the UAE's delivery industry, we deliver much more than we promised, one ride at a time."
              </p>
              <div className="pt-6">
                <p className="font-light text-xl text-slate-700">Abdullah Khamis Abdullah Al Ashiq</p>
                <p className="text-slate-500 font-light">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-100">
              <Target className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-light text-slate-700 mb-6">Our Mission</h3>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                To provide the fastest, most reliable, and professional delivery service in the UAE, while maintaining the highest standards of customer service and connecting businesses with customers through innovative motorcycle delivery solutions.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-slate-100">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-light text-slate-700 mb-6">Our Vision</h3>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                To become the leading motorcycle delivery service provider in the UAE, expanding from 100 to 3,000 skilled drivers within a year, and setting new standards in urban delivery solutions across all emirates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-6">Our Values</h2>
            <p className="text-xl text-slate-500 font-light">The principles that guide us every day across the UAE</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl hover:shadow-sm transition-all duration-300 border border-slate-100 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-light text-slate-700 mb-4">{value.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      {/* <div className="bg-slate-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extralight mb-8">Trusted Partners</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-70 font-light leading-relaxed">
              We proudly serve major delivery companies across the UAE, providing reliable motorcycle delivery solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {['TALABAT', 'NOON', 'DELIVERO', 'CAREEM', 'SMAIL', 'ARAMEX'].map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center font-light text-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Service Area */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight text-slate-700 mb-8">
                Our Service <span className="text-indigo-600 font-light">Area</span>
              </h2>
              <p className="mb-6 text-slate-500 font-light leading-relaxed text-lg">
                Based in Dubai, we provide comprehensive coverage across all emirates of the UAE, ensuring quick and efficient deliveries no matter your location.
              </p>
              <p className="mb-8 text-slate-500 font-light leading-relaxed text-lg">
                Our strategic location at Motor City allows us to reach any point in Dubai and the UAE efficiently, making us the ideal choice for time-sensitive deliveries.
              </p>
              <div className="flex items-start text-slate-600 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <Map className="h-6 w-6 mr-4 text-indigo-600 mt-1" />
                <span className="font-light leading-relaxed">Motor city, Detroit House, Office 304 floor 3rd, Dubai, U.A.E</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 opacity-20 blur-3xl rounded-full"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-32 h-32 mx-auto text-indigo-600 mb-6" />
                    <p className="text-xl font-light text-slate-700 mb-2">UAE Coverage</p>
                    <p className="text-slate-500 font-light">All Emirates Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;