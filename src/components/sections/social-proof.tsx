"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";
import { Star, ArrowRight, Quote } from "lucide-react";

export function SocialProofSection() {
  const baseTestimonials = [
    {
      stat: "42 new inquiries in 4 weeks",
      quote: "Within our first month, our chat was flooded with actual patients wanting to book consults, not just random likes.",
      author: "Dr. Sarah — Colombo Dental Clinic"
    },
    {
      stat: "85 new leads in 6 weeks",
      quote: "Our Instagram now has real engagement. We shifted to a proper content strategy, and appointment bookings jumped up.",
      author: "Dr. Rashmi — Skin Care Clinic, Colombo"
    },
    {
      stat: "110+ inquiries in 90 days",
      quote: "We stopped randomly posting when we had time. Pixel Path handled everything, bringing consistent daily WhatsApp messages.",
      author: "Dr. Kamal — Aesthetic Clinic, Galle"
    },
    {
      stat: "64 appointments in 8 weeks",
      quote: "The Meta Ads ROI is incredible. They target the exact demography we need for our premium aesthetic treatments.",
      author: "Dr. Ayesha — DermaCare, Kandy"
    },
    {
      stat: "55% increase in month 1",
      quote: "We didn't believe social media could bring in high-paying patients until they rebuilt our Meta ad structure.",
      author: "Dr. Perera — Smile Plus Dental"
    }
  ];

  // Duplicate items twice so it loops seamlessly to infinity
  const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

  return (
    <SectionWrapper background="offwhite" id="social-proof" divider={false}>
      <div className="text-center mb-10 md:mb-14 relative z-10 w-full overflow-hidden">
        <div className="animate-on-scroll">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>
            <span className="text-[#1C1C1E] font-bold text-sm ml-2 font-heading tracking-wide">
              <span className="text-[#1A7A4A]">GOOGLE</span> REVIEWS
            </span>
          </div>

          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
            Verified Clinic Results
          </h2>
        </div>
      </div>

      {/* Infinite Auto-scrolling Marquee */}
      <div className="relative w-[100vw] left-1/2 right-1/2 -mx-[50vw] overflow-hidden -mt-4 py-10 pointer-events-auto">
        {/* Soft edge blur masks for the marquee */}
        <div className="absolute top-0 left-0 bottom-0 w-[5vw] sm:w-[15vw] bg-gradient-to-r from-[#F8F8F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-[5vw] sm:w-[15vw] bg-gradient-to-l from-[#F8F8F6] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee gap-6 items-stretch pl-[15vw]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white rounded-2xl p-8 border border-[#E5E5E0] shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default group"
            >
              <div className="inline-block bg-[#E8F5EE] text-[#1A7A4A] px-4 py-2 rounded-xl text-sm font-bold mb-6 self-start group-hover:bg-[#1A7A4A] group-hover:text-white transition-colors">
                {t.stat}
              </div>

              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#1A7A4A] opacity-10 group-hover:opacity-20 transition-opacity" />
              </div>

              <p className="text-[16px] text-[#4B5563] leading-relaxed mb-8 font-medium flex-1">
                "{t.quote}"
              </p>

              <div className="pt-6 border-t border-[#E5E5E0]">
                <p className="text-[15px] font-bold text-[#1C1C1E] font-heading">
                  {t.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-on-scroll text-center flex justify-center mt-8 relative z-10">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 bg-[#1A7A4A] hover:bg-[#15603A] text-white py-4 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_-4px_rgba(26,122,74,0.4)]"
        >
          Book Your Free Audit
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </SectionWrapper>
  );
}
