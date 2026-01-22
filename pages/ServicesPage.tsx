
import React from 'react';
import { ShieldCheck, Sparkles, Smile, Activity, Check, Heart, UserCheck } from 'lucide-react';
import { GMBData } from '../types';

export const ServicesPage: React.FC<{ data: GMBData }> = ({ data }) => {
  const serviceDetails = [
    {
      title: "Scaling & Polishing",
      icon: <Activity className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Comprehensive cleaning to remove plaque and tartar, essential for maintaining gum health in Abuja's climate.",
      features: ["Deep Cleaning", "Gum Assessment", "Stain Removal", "Oral Hygiene Education"]
    },
    {
      title: "Orthodontics",
      icon: <Smile className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Braces and Invisalign treatments to correct alignment and give you the confidence of a perfect smile.",
      features: ["Metal Braces", "Clear Aligners", "Retainers", "Initial Consultation"]
    },
    {
      title: "Crowns & Bridges",
      icon: <ShieldCheck className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Restorative solutions that look natural and provide the strength needed for a functional bite.",
      features: ["Porcelain Crowns", "Dental Bridges", "Custom Color Matching", "Durable Materials"]
    },
    {
      title: "Root Canal Therapy",
      icon: <Heart className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Painless procedures to save your natural teeth from infection and prevent further damage.",
      features: ["Digital Imaging", "Pain Management", "Expert Endodontics", "Follow-up Care"]
    },
    {
      title: "Teeth Whitening",
      icon: <Sparkles className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Professional whitening treatments to brighten your smile several shades in just one visit.",
      features: ["In-Office Treatment", "Take-Home Kits", "Safe Procedures", "Instant Results"]
    },
    {
      title: "Dental Implants",
      icon: <UserCheck className="text-[#00898F] group-hover:text-white transition-colors" />,
      desc: "Permanent replacement for missing teeth that look, feel, and function like natural teeth.",
      features: ["Single Implants", "Multi-Tooth Replacement", "Surgical Precision", "Lifetime Solution"]
    }
  ];

  return (
    <div>
      <section className="bg-teal-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.images.interior[0]} className="w-full h-full object-cover opacity-10" alt="Office Background"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-teal-200 max-w-2xl font-light">From preventive hygiene to complex oral surgery, we offer a full range of services at our Wuse Zone 4 clinic.</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceDetails.map((s, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check size={14} className="text-teal-500"/> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Leading Dental Technology in Abuja</h2>
            <p className="text-lg text-slate-600 mb-8">The practice is characterized by a modern and welcoming atmosphere, designed to put patients at ease from the moment you arrive.</p>
            {/* Technology list removed as requested */}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="/images/services-tech.png" className="rounded-2xl w-full max-w-sm aspect-square object-cover shadow-xl rotate-3 hover:rotate-0 transition-all" alt="Happy Patient at CalmTooth"/>
          </div>
        </div>
      </section>
    </div>
  );
};
