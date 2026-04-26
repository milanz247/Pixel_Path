"use client";

import { MessageCircle, Check, ArrowRight, TrendingUp } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 bg-white"
      id="hero"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Mobile Right Side Image (Stack above fold on mobile) */}
          <div className="w-full lg:hidden relative animate-on-scroll hero-stagger-1">
            <div className="bg-[#F8F8F6] rounded-xl p-6 md:p-8 border border-[#E5E5E0] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A7A4A] opacity-5 rounded-bl-[100px] pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E8F5EE] flex items-center justify-center text-[#1A7A4A]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-[#4B5563] font-medium">Average Client Result</div>
                  <div className="text-2xl font-bold text-[#1C1C1E]">127 Inquiries</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-[#E5E5E0] rounded-full w-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#1A7A4A] rounded-full" />
                </div>
                <div className="text-xs text-[#4B5563] text-right">in 90 days</div>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col justify-center">
            
            {/* Small label */}
            <div className="hero-stagger-1 mb-6">
              <span className="inline-block text-[13px] font-semibold uppercase tracking-wider py-1 px-3 rounded text-[#1A7A4A] bg-[#E8F5EE]">
                Clinic Growth Marketing
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-stagger-2 mb-6 text-[40px] sm:text-[46px] md:text-[52px] font-bold text-[#1C1C1E] leading-[1.1] tracking-tight font-heading">
              Turn Your Clinic&apos;s Social Media Into a <span className="text-[#1A7A4A]">Patient Inquiry System</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-stagger-3 text-base text-[#4B5563] leading-relaxed mb-10 max-w-[500px]">
              We help clinics attract more patient inquiries through strategy, content, Meta ads, and WhatsApp lead campaigns — all managed in one clear system. <strong className="text-[#1C1C1E] font-medium">Clinics we work with average 40+ new patient inquiries per month.</strong>
            </p>

            {/* CTAs */}
            <div className="hero-stagger-4 flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#1A7A4A] hover:bg-[#145e39] text-white py-3.5 px-8 rounded-lg font-medium transition-colors"
                id="hero-cta-button"
              >
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent hover:bg-[#F8F8F6] text-[#1C1C1E] border border-[#E5E5E0] py-3.5 px-8 rounded-lg font-medium transition-colors"
              >
                See Packages
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-stagger-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-[#4B5563]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1A7A4A]" />
                <span>No upfront payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1A7A4A]" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#1A7A4A]" />
                <span>Free audit first</span>
              </div>
            </div>

          </div>

          {/* Desktop Right Side Image */}
          <div className="hidden lg:block w-full lg:w-[45%] xl:w-[40%] relative animate-on-scroll hero-stagger-3">
            <div className="bg-[#F8F8F6] rounded-xl p-8 lg:p-10 border border-[#E5E5E0] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1A7A4A] opacity-5 rounded-bl-[150px] pointer-events-none" />
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-[#E5E5E0] mb-6 transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5EE] flex items-center justify-center text-[#1A7A4A]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1C1C1E]">WhatsApp Inquiry</div>
                    <div className="text-xs text-[#4B5563]">Just now</div>
                  </div>
                </div>
                <div className="text-sm text-[#1C1C1E] bg-[#F8F8F6] p-3 rounded-md">
                  "Hi, I'd like to book an appointment for a consultation. Do you have slots tomorrow?"
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-lg border border-[#E5E5E0] shadow-sm transform rotate-1 hover:rotate-0 transition-transform">
                <div className="w-14 h-14 rounded-full bg-[#E8F5EE] flex items-center justify-center text-[#1A7A4A]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-[#4B5563] font-medium">Verified Results</div>
                  <div className="text-[28px] font-bold text-[#1A7A4A] leading-tight">127 Inquiries</div>
                  <div className="text-xs text-[#4B5563]">generated in 90 days</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}