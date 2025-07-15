import React from 'react';
import { Briefcase, Users, Award, Lightbulb, Target, Globe, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 py-16 px-6 md:px-12">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#0090d1] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#0090d1] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#0090d1] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#0090d1] rounded-full animate-ping"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0090d1] to-[#214165] bg-clip-text text-transparent">
          About HIDM Solutions
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          HIDM Solutions stands for High Innovation in Development & Marketing. We specialize in delivering digital excellence by combining modern web development, result-oriented marketing strategies, and creative content production. Our approach focuses on innovation, quality, and measurable success for each of our clients.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="space-y-4">
            <Briefcase className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-slate-600">
              To empower businesses with innovative digital tools and engaging marketing campaigns that drive growth, visibility, and brand recognition.
            </p>
          </div>

          <div className="space-y-4">
            <Users className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
            <h3 className="text-xl font-semibold">Our Team</h3>
            <p className="text-slate-600">
              A collective of developers, designers, content creators, and strategists, each bringing unique strengths to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <Award className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="text-slate-600">
              Innovation, integrity, commitment, and client success are the core principles that drive every project we undertake.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="space-y-4">
            <Lightbulb className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
            <h3 className="text-xl font-semibold">Creative Services</h3>
            <p className="text-slate-600">
              From logo design and brand identity to professional video ads, we bring your vision to life with creativity and precision.
            </p>
          </div>

          <div className="space-y-4">
            <Target className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
            <h3 className="text-xl font-semibold">Marketing with Impact</h3>
            <p className="text-slate-600">
              Sponsored ads, organic social strategies, voiceovers in any language, and viral content creation — all tailored for maximum engagement.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
          <Globe className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
          <h3 className="text-2xl font-semibold">Serving Worldwide</h3>
          <p className="text-slate-600">
            Based in Dubai, UAE, HIDM Solutions partners with clients across the globe, offering multilingual websites, cross-platform support, and localized digital marketing campaigns.
          </p>
        </div>

        <div className="mt-20 text-center">
          <Activity className="h-10 w-10 text-[#0090d1] mx-auto animate-pulse" />
          <p className="text-sm text-slate-500 mt-2">
            Let’s innovate together. Contact us today and elevate your digital presence with HIDM Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
