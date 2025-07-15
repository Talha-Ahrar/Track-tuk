import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleanedValue = value.replace(/[^\d+]/g, '');
      setFormData({ ...formData, [name]: cleanedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
      to_email: 'info@hidmsolutions.com'
    };

    emailjs.send('service_f9wyhqd', 'template_8ilri2p', templateParams, 'id6lABOGrtV2_o1sS')
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Try again later.');
      });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        .form-glow {
          transition: all 0.3s ease;
        }
        .form-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 144, 209, 0.4);
          cursor: default;
        }
        .floating-bg {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(0,144,209,0.15) 0%, transparent 60%);
          animation: floatBg 10s infinite ease-in-out;
          z-index: 0;
        }
        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10%, 10%); }
        }
      `}</style>

      <div className="floating-bg"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-[#214165] mb-4">
          Get in Touch
        </h1>
        <p className="text-center text-[#214165]/70 mb-12">
          Have a question or want to discuss your project? Fill out the form below and we'll get back to you.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg grid gap-6 md:grid-cols-2 border border-[#0090d1]/20 form-glow"
        >
          <div className="relative">
            <label className="block text-sm text-[#214165] mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border border-[#0090d1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090d1] bg-white"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-[#214165] mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-3 border border-[#0090d1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090d1] bg-white"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-[#214165] mb-2">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+971505409782"
              className="w-full px-4 py-3 border border-[#0090d1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090d1] bg-white"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-[#214165] mb-2">Subject</label>
            <select 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#0090d1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090d1] bg-white"
              required
            >
              <option value="">Select a subject</option>
              <option value="web">Website Development</option>
              <option value="marketing">Marketing Services</option>
              <option value="ads">Sponsored Ads & Videos</option>
              <option value="social">Social Media Strategy</option>
              <option value="seo">SEO & Google Maps</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="relative col-span-2">
            <label className="block text-sm text-[#214165] mb-2">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="5"
              className="w-full px-4 py-3 border border-[#0090d1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090d1] bg-white"
              required
            ></textarea>
          </div>

          <div className="col-span-2 text-center">
            <button 
              type="submit"
              className="cta-button bg-[#0090d1] hover:bg-[#007bb0] px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-16 text-center text-[#214165] text-sm">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-[#0090d1]" /> +971505409782
          </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-[#0090d1]" /> info@hidmsolutions.com
          </div>
          <div className="flex justify-center items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#0090d1]" /> Detroir House, Office 304, 3rd Floor, Motor City, Dubai UAE
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};

export default Contact;
