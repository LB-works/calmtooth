import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Sparkles,
  Clock,
  ArrowRight,
  Star,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GMBData } from "../types";

export const Home: React.FC<{ data: GMBData }> = ({ data }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = data.reviews?.slice(0, 6) || [];

  const [containerHeight, setContainerHeight] = useState<number>(350);
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  // Update container height based on current review
  useEffect(() => {
    if (reviewRefs.current[currentReviewIndex]) {
      const height = reviewRefs.current[currentReviewIndex]?.offsetHeight;
      if (height) setContainerHeight(height);
    }
  }, [currentReviewIndex, reviews]);

  // Update height on window resize
  useEffect(() => {
    const handleResize = () => {
      if (reviewRefs.current[currentReviewIndex]) {
        const height = reviewRefs.current[currentReviewIndex]?.offsetHeight;
        if (height) setContainerHeight(height);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentReviewIndex]);

  const workExamples = [
    {
      title: "Smile Correction",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Teeth Whitening",
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Precision Braces",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Dental Implants",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={data.images?.cover || ''}
            alt="CalmTooth Dental Clinic Abuja"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-[#00898F]/30 border border-teal-400/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md">
            <span className="text-sm font-bold tracking-wide uppercase">
              Dental Excellence in Abuja
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Relax. Your Smile is{" "}
            <span className="text-[#00898F]">Safe with Us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the future of stress-free dentistry at CalmTooth. We
            combine world-class skill with a focus on patient peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={`https://wa.me/${data.phone?.replace(/[^0-9]/g, "") || ''}`}
              target="_blank"
              className="bg-[#00898F] hover:bg-[#00767a] text-white px-10 py-4 rounded-full text-lg font-bold transition shadow-2xl flex items-center justify-center gap-2 group hover:-translate-y-1"
            >
              <MessageCircle size={24} /> Book on WhatsApp
            </a>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-bold transition"
            >
              Our Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="pt-24 pb-24 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/2025-11-28.webp"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#00898F] font-bold uppercase tracking-widest text-sm mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              Why Abuja Chooses CalmTooth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services?.slice(0, 4).map((service, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00898F] mb-6 group-hover:bg-[#00898F] group-hover:text-white transition-colors">
                  {idx === 0 && <Shield size={28} />}
                  {idx === 1 && <Sparkles size={28} />}
                  {idx === 2 && <Heart size={28} />}
                  {idx === 3 && <Clock size={28} />}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">
                  {service}
                </h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Tailored dental solutions using the most gentle techniques in
                  Abuja.
                </p>
                <Link
                  to="/services"
                  className="text-[#00898F] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statistics */}
      <section className="py-12 bg-[#00898F] text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5.0</div>
            <p className="text-teal-200 text-sm uppercase tracking-wide">
              Google Rating
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Abuja</div>
            <p className="text-teal-200 text-sm uppercase tracking-wide">
              Wuse 2 Clinic
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-teal-200 text-sm uppercase tracking-wide">
              Support
            </p>
          </div>
        </div>
      </section>

      {/* Meet The Doctor Section */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-teal-100 rounded-[3rem] rotate-3 transform translate-y-4"></div>
            {data.images?.staff && data.images.staff.length > 1 ? (
              <img
                src={data.images.staff[1]}
                alt="Dr. Dan Afolabi - Lead Specialist"
                className="relative z-10 w-full h-[500px] object-cover object-top rounded-[3rem] shadow-2xl"
              />
            ) : (
              <div className="relative z-10 w-full h-[500px] bg-slate-200 rounded-[3rem] flex items-center justify-center text-slate-400">
                Doctor Image Unavailable
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[#00898F] font-bold uppercase tracking-widest text-sm mb-4">
              Meet Your Doctor
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
               Dr. Dan Afolabi
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our mission is simple: to change the way you feel about the
              dentist. I've dedicated my career to mastering not just clinical
              excellence, but the art of patient comfort.
            </p>

          </div>
        </div>
      </section>

      {/* Sliding Reviews */}
      <section className="pt-8 pb-16 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#00898F] font-bold uppercase tracking-widest text-sm mb-4">
                Patient Stories
              </h2>
              <h3 className="text-4xl font-bold text-slate-900">
                What Our Patients Say
              </h3>
            </div>
          </div>

          <div 
            className="relative w-full transition-[height] duration-500 ease-in-out"
            style={{ height: `${containerHeight}px` }}
          >
            {reviews?.map((review, idx) => (
              <div
                key={review.id}
                ref={(el) => (reviewRefs.current[idx] = el)}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                  idx === currentReviewIndex
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-full opacity-0 scale-95"
                }`}
                style={{
                  visibility: idx === currentReviewIndex ? "visible" : "hidden",
                }}
              >
                <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 max-w-4xl mx-auto shadow-sm">
                  <div className="flex text-yellow-400 gap-1 mb-8">
                    {[...Array(Math.round(review.rating))].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-10 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-5">
                    <img
                      src={review.profilePhoto}
                      className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                      alt={review.author}
                    />
                    <div>
                      <h5 className="font-bold text-slate-900 text-lg">
                        {review.author}
                      </h5>
                      <p className="text-sm text-slate-500">
                        {review.date} • Verified Abuja Patient
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Results Gallery */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#00898F] font-bold uppercase tracking-widest text-sm mb-4">
              Real Transformations
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              Clinical Results
            </h3>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Real smiles from our clinic.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {data.images?.clinicalResults?.map((img, idx) => (
                <div 
                  key={idx} 
                  className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-lg"
                >
                  <img src={img} alt={`Clinical Result ${idx + 1}`} className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#00898F] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Step into the CalmTooth Experience
            </h3>
            <p className="text-xl text-teal-100 mb-12">
              Your search for a professional, painless dentist in Abuja ends
              here. Start your journey today.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href={`https://wa.me/${data.phone?.replace(/[^0-9]/g, "") || ''}`}
                target="_blank"
                className="bg-white text-[#00898F] px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${data.phone}`}
                className="flex items-center justify-center gap-3 bg-teal-800 hover:bg-teal-900 px-12 py-5 rounded-full text-xl font-bold transition"
              >
                <Phone size={24} /> {data.phone || ''}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
