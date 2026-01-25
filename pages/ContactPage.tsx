
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { GMBData } from '../types';

export const ContactPage: React.FC<{ data: GMBData }> = ({ data }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: data.services[0] || ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = encodeURIComponent(
      `*New Appointment Request* \n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n\n` +
      `_Sent from CalmTooth Website_`
    );

    // Redirect to WhatsApp (using provided real clinic number)
    // We strip non-numeric characters for the URL
    const cleanPhone = data.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-teal-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/contact-hero.png" className="w-full h-full object-cover opacity-15" alt="Office Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact CalmTooth</h1>
          <p className="text-xl text-teal-200 max-w-2xl mx-auto font-light">Your stress-free dental journey starts at our Wuse 2 clinic.</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-[#00898F] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Abuja Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{data.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-[#00898F] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600 text-sm">{data.phone}</p>
                    <a href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`} className="text-[#00898F] text-xs font-bold flex items-center gap-1 mt-1">
                      <MessageCircle size={14} /> Message on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-[#00898F] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm">hello@calmtooth.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Opening Hours</h3>
              <ul className="space-y-4">
                {data.hours.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm font-medium">
                    <span className="text-slate-500">{h.day}</span>
                    <span className={h.isClosed ? 'text-red-500 font-bold' : 'text-slate-900'}>{h.isClosed ? 'Closed' : `${h.open} - ${h.close}`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} className="text-[#00898F]" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thanks for starting your request. You should now be redirected to WhatsApp to complete your message.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#00898F] font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Request an Appointment</h2>
                  <p className="text-slate-500 mb-10">Select a service and tell us when you'd like to visit.</p>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00898F] outline-none transition font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00898F] outline-none transition font-medium text-slate-900 placeholder:text-slate-400"
                        placeholder="+234..."
                        required
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Treatment Interested In</label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00898F] outline-none transition cursor-pointer font-medium text-slate-900 text-left flex items-center justify-between"
                        >
                          <span>{formData.service}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[#00898F] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-64 overflow-y-auto">
                            {data.services.map((s, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, service: s });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left font-medium transition-colors ${formData.service === s
                                    ? 'bg-slate-100 text-slate-900'
                                    : 'text-slate-700 hover:bg-slate-50'
                                  }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <button className="w-full bg-[#00898F] hover:bg-[#00767a] text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95">
                        Request Appointment <Send size={20} />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
