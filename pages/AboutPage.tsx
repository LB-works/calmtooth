
import React from 'react';
import { GMBData } from '../types';
import { Heart, Award, Shield, Users } from 'lucide-react';

export const AboutPage: React.FC<{ data: GMBData }> = ({ data }) => {
  const stats = [
    { label: "Clinic in Abuja", value: "Wuse 2" },
    { label: "Patient Care", value: "100%" },
  ];

  return (
    <div>
      <section className="bg-teal-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/about-hero.png" className="w-full h-full object-cover opacity-15" alt="Office Background"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About CalmTooth</h1>
          <p className="text-xl text-teal-200 max-w-2xl font-light">A dentist clinic dedicated entirely to patient peace of mind and painless care.</p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Dentistry Redefined for Abuja</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              At CalmTooth, we remove the fear from the dentist chair. Our goal is to make every Abuja resident feel as relaxed as they would in their own living room.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {data.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="border-l-4 border-[#00898F] pl-6">
                  <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-[#00898F] rounded-3xl absolute -bottom-8 -right-8 w-full h-full -z-10"></div>
            <img src="/images/about-clinic.png" alt="CalmTooth Dental Procedure" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl"/>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">The CalmTooth Advantage</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Calming Tech", icon: <Award className="text-[#00898F] group-hover:text-white transition-colors" size={32}/>, desc: "Silent drills and modern painless techniques." },
            { title: "Gentle Care", icon: <Heart className="text-[#00898F] group-hover:text-white transition-colors" size={32}/>, desc: "A patient-first approach to reduce all dental anxiety." },
            { title: "Professional", icon: <Users className="text-[#00898F] group-hover:text-white transition-colors" size={32}/>, desc: "Top-rated professional with decades of experience." },
            { title: "Easy Access", icon: <Shield className="text-[#00898F] group-hover:text-white transition-colors" size={32}/>, desc: "Located centrally in Wuse 2 for your convenience." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00898F] transition-colors">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
