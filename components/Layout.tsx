
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Star, Facebook, Instagram, ChevronRight, MessageCircle } from 'lucide-react';
import { GMBData } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  data: GMBData;
}

export const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header info */}
      {/* Top Header removed as requested */}

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img src="/logo/calmtooth-logo.png" alt="CalmTooth Logo" className="h-10 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium hover:text-[#00898F] transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#00898F]' 
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${data.phone?.replace(/[^0-9]/g, '') || ''}`} 
              target="_blank" 
              className="bg-[#00898F] hover:bg-[#00767a] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle size={18}/> WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b absolute top-full left-0 w-full p-4 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium px-4 py-2 rounded-lg ${location.pathname === link.path ? 'bg-teal-50 text-[#00898F]' : 'text-slate-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${data.phone?.replace(/[^0-9]/g, '') || ''}`}
              target="_blank"
              className="bg-[#00898F] text-white text-center py-3 rounded-lg font-bold flex justify-center items-center gap-2"
            >
              <MessageCircle size={20}/> Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Google Map Section */}
      <section className="w-full h-96 bg-slate-100">
        <iframe 
          title="CalmTooth Location"
          src="https://maps.google.com/maps?q=Plot%201083%2C%20AMAC%20Plaza%2C%20Herbert%20Macaulay%20Way%2C%20Wuse%20Zone%204%2C%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Practice Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo/calmtooth-logo.png" alt="CalmTooth Logo" className="h-10 object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Redefining dental care with a focus on peace, comfort, and professional excellence. Your smile deserves the best.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/drdanafolabi/" target="_blank" className="p-2 bg-slate-900 rounded-full hover:bg-[#00898F] transition text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-2">Treatments</h4>
            <ul className="space-y-3">
              {data.services?.slice(0, 5).map(service => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 hover:text-teal-400 flex items-center gap-2 group text-sm">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition"/>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-2">Clinic Hours</h4>
            <ul className="space-y-3">
              {data.hours?.map((h, i) => (
                <li key={i} className="flex justify-between text-slate-400 text-xs">
                  <span>{h.day}</span>
                  <span className={h.isClosed ? 'text-red-400 font-semibold' : 'text-slate-200 font-medium'}>
                    {h.isClosed ? 'Closed' : `${h.open} - ${h.close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold border-b border-slate-800 pb-2">Abuja Location</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#00898F] flex-shrink-0"/>
                <p className="text-slate-400 text-xs">{data.address || ''}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-[#00898F] flex-shrink-0"/>
                <p className="text-slate-400 text-xs font-semibold">{data.phone || ''}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900">
                <Link to="/contact" className="inline-block w-full text-center py-3 bg-[#00898F] hover:bg-[#00767a] text-white rounded-lg font-semibold transition text-sm">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} CalmTooth Dental Clinic, Abuja. Excellence in Oral Health.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
