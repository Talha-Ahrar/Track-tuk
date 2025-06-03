import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Bike } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate email sending (replace with actual emailjs implementation)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
      setTimeout(() => setStatus(''), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-700 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
               <img src="/logo.png" alt="Logo" className="h-16 w-16 object-contain" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600">TRACK TUK</h1>
            <p className="text-xl text-slate-600 mb-2">Professional Motorcycle Delivery Service</p>
            <p className="text-lg text-slate-500">Dubai, U.A.E</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Get In Touch</h2>
              <p className="text-slate-600 text-lg mb-8">
                Ready to experience professional motorcycle delivery services? Contact us today for reliable delivery solutions across the UAE.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="group flex items-center p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-slate-700 font-semibold mb-1">Phone</h3>
                  <a href="tel:+971507994912" className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">
                    +971 50 799 4912
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-slate-700 font-semibold mb-1">Email</h3>
                  <a href="mailto:TRACKTUK@OUTLOOK.SA" className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">
                    TRACKTUK@OUTLOOK.SA
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="group flex items-start p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300 mt-1">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-slate-700 font-semibold mb-1">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Motor city, Detroit House,<br />
                    Office 304 floor 3rd,<br />
                    Dubai, U.A.E
                  </p>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
              <h3 className="text-indigo-600 font-bold text-lg mb-2">Service Hours</h3>
              <p className="text-slate-700">24/7 Professional Motorcycle Delivery Service</p>
              <p className="text-slate-600 text-sm mt-1">Available across all UAE emirates</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">Send us a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone (Optional)"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your delivery needs..."
                    rows="5"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group shadow-lg hover:shadow-indigo-500/30"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200 animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 animate-fade-in">
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Contact;