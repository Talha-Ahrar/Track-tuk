import React from 'react';
import { Image, MonitorSmartphone } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0090d1] to-[#214165] bg-clip-text text-transparent">
          Our Portfolio
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Take a look at some of the successful projects we've launched, including websites, mobile apps, marketing campaigns, and branding assets.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-4 text-left">
            <MonitorSmartphone className="h-8 w-8 text-[#0090d1] animate-pulse" />
            <h3 className="text-xl font-semibold">Responsive Websites</h3>
            <p className="text-slate-600">
              Designed and developed for seamless experience across desktop, tablet, and mobile. Our websites are fast, secure, and SEO-optimized.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <Image className="h-8 w-8 text-[#0090d1] animate-pulse" />
            <h3 className="text-xl font-semibold">Branding & Creative</h3>
            <p className="text-slate-600">
              Logos, UI/UX design, social banners, promotional videos — all created with a brand-first mindset to stand out in the digital crowd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
