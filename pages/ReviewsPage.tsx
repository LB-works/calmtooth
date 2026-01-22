
import React, { useState } from 'react';
import { Star, Filter, Search } from 'lucide-react';
import { GMBData } from '../types';

export const ReviewsPage: React.FC<{ data: GMBData }> = ({ data }) => {
  const [filter, setFilter] = useState<number | 'all'>('all');

  const filteredReviews = data.reviews.filter(r => {
    return filter === 'all' || r.rating === filter;
  });

  return (
    <div>
      <section className="bg-teal-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/reviews-hero.png" className="w-full h-full object-cover opacity-15" alt="Office Background"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Stories</h1>
            <p className="text-xl text-teal-200 font-light">Honest feedback from our community across Abuja and the FCT.</p>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          {/* Filters removed as requested */}
          <div className="mb-12"></div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.length > 0 ? filteredReviews.map(review => (
              <div key={review.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.profilePhoto || `https://ui-avatars.com/api/?name=${review.author}&background=0D9488&color=fff`} 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                      alt={review.author}
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.round(review.rating))].map((_, i) => <Star key={i} size={14} fill="currentColor"/>)}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic text-sm">"{review.text}"</p>
                <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="bg-teal-100 text-teal-600 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Verified Abuja Patient</span>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-24 text-center text-slate-400 text-xl font-medium">
                No patient stories found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
