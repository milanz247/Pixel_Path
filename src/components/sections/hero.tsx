"use client";

import { MessageCircle, Check, ArrowRight, TrendingUp } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32 bg-[#0B0C10]"
      id="hero"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1A7A4A] opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#1A7A4A] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1140px] px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Mobile Right Side Image (Stack above fold on mobile) */}
          <div className="w-full lg:hidden relative animate-on-scroll hero-stagger-1">
            <div className="bg-[#1C1C1E]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A7A4A] opacity-20 rounded-bl-[100px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1A7A4A]/20 flex items-center justify-center text-[#20C969]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-medium">Average Client Result</div>
                  <div className="text-2xl font-bold text-white">94 Qualified Patient Leads</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#20C969] rounded-full shadow-[0_0_10px_#20C969]" />
                </div>
                <div className="text-xs text-white/50 text-right">in 30 days</div>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col justify-center">
            
            {/* Small label */}
            <div className="hero-stagger-1 mb-6">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full text-[#20C969] bg-[#1A7A4A]/10 border border-[#1A7A4A]/20 backdrop-blur-sm">
                Sri Lanka's Premium Clinic Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-stagger-2 mb-6 text-[32px] sm:text-[42px] md:text-[56px] font-bold text-white leading-[1.05] tracking-tight font-heading">
              Turn Your Clinic's Social Media Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20C969] to-[#1A7A4A]">Patient Inquiry System.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-stagger-3 text-[16px] md:text-[18px] text-white/70 leading-relaxed mb-10 max-w-[520px]">
              We help local clinics attract serious patient inquiries through high-converting Meta Ads and WhatsApp funnels. <strong className="text-white font-semibold">Clinics we work with average 40+ new patient inquiries per month.</strong>
            </p>

            {/* CTAs */}
            <div className="hero-stagger-4 flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#1A7A4A] hover:bg-[#15603A] text-white py-4 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#1A7A4A]"
                id="hero-cta-button"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 py-4 px-8 rounded-xl font-semibold transition-all hover:border-white/40"
              >
                See Packages
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-stagger-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-white/50">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A7A4A]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#20C969]" />
                </div>
                <span>No upfront payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A7A4A]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#20C969]" />
                </div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1A7A4A]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#20C969]" />
                </div>
                <span>Free audit first</span>
              </div>
            </div>

          </div>

          {/* Desktop Right Side Image */}
          <div className="hidden lg:block w-full lg:w-[45%] xl:w-[40%] relative animate-on-scroll hero-stagger-3">
            <div className="bg-[#1C1C1E]/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1A7A4A] opacity-20 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/10 mb-6 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#20C969]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">WhatsApp Inquiry</div>
                    <div className="text-xs text-[#20C969]">Just now</div>
                  </div>
                </div>
                <div className="text-[13px] text-white/80 bg-black/40 p-4 rounded-lg leading-relaxed">
                  "Hi, I'd like to book an appointment for a consultation. Do you have slots tomorrow?"
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transform rotate-2 hover:rotate-0 transition-transform cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-[#1A7A4A]/20 flex items-center justify-center text-[#20C969] group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-medium">Verified Results</div>
                  <div className="text-[32px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20C969] to-white leading-tight">94 Qualified Patient Leads</div>
                  <div className="text-xs text-[#20C969] font-medium tracking-wide">GENERATED IN 30 DAYS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}