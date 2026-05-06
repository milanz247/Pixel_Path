"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";
import { Check, Star, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Starter Growth",
    price: "45,000",
    description: "Perfect for clinics just starting their digital presence.",
    features: [
      "8 Reels + 8 Posts",
      "Professional captions",
      "Basic Meta Ads management",
      "Monthly content planning",
      "Posting support",
      "Performance summary",
    ],
    addons: ["Extra photo shoot: +15k", "Custom branding pack: +20k"],
    recommended: false,
  },
  {
    name: "Growth Plus",
    price: "55,000",
    description: "A balanced package for clinics that want consistent growth.",
    features: [
      "10 Reels + 12 Posts",
      "Content strategy planning",
      "Meta Ads + Story guidance",
      "Community engagement",
      "Monthly optimization",
      "Monthly performance report",
    ],
    addons: ["Google Ads: +15k", "Website maintenance: +10k"],
    recommended: true,
  },
  {
    name: "Premium Brand",
    price: "65,000",
    description: "For clinics that want premium brand positioning & dominance.",
    features: [
      "12 Reels + 15 Posts",
      "Advanced content strategy",
      "Priority coordination",
      "Meta Ads + advanced optimization",
      "Detailed report with ideas",
      "Google Ads consultation",
    ],
    addons: ["SEO Audit: +Offer", "Video production: Custom"],
    recommended: false,
  },
];

export function PricingSection() {
  const [openAddons, setOpenAddons] = useState<number | null>(null);

  const toggleAddon = (index: number) => {
    if (openAddons === index) setOpenAddons(null);
    else setOpenAddons(index);
  };

  return (
    <SectionWrapper background="white" id="pricing" divider={false}>
      <div className="text-center mb-12 md:mb-16">
        <div className="animate-on-scroll">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
            Social Media & Meta Ads Packages
          </h2>
          <p className="text-base text-[#4B5563] max-w-2xl mx-auto">
            Monthly packages designed to help your clinic grow with professional
            content, smart strategy, and Meta Ads.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, index) => {
          const isDark = pkg.recommended;
          return (
            <div
              key={index}
              className={`animate-on-scroll relative rounded-2xl border p-6 lg:p-8 flex flex-col transition-all duration-300 ${
                isDark
                  ? "bg-[#1C1C1E] border-[#1C1C1E] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-100 md:scale-105 z-10"
                  : "bg-white border-[#E5E5E0] text-[#1C1C1E] shadow-sm hover:shadow-lg transform translate-y-0 md:translate-y-4"
              }`}
            >
              {isDark && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1A7A4A] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-[#F5A623] text-[#F5A623]" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-[20px] font-bold mb-2 font-heading ${isDark ? "text-white" : "text-[#1C1C1E]"}`}>{pkg.name}</h3>
                <p className={`text-[14px] leading-relaxed ${isDark ? "text-white/70" : "text-[#4B5563]"}`}>{pkg.description}</p>
              </div>

              <div className={`mb-6 pb-6 border-b border-opacity-30 ${isDark ? "border-white/20" : "border-[#E5E5E0]"}`}>
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-semibold ${isDark ? "text-white/60" : "text-[#4B5563]"}`}>LKR</span>
                  <span className={`text-[36px] font-black tracking-tight font-heading ${isDark ? "text-white" : "text-[#1C1C1E]"}`}>{pkg.price}</span>
                  <span className={`text-sm font-medium ${isDark ? "text-white/60" : "text-[#4B5563]"}`}>/month</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? "text-[#20C969]" : "text-[#1A7A4A]"}`} />
                      <span className={`text-[14px] leading-relaxed font-medium ${isDark ? "text-white/90" : "text-[#4B5563]"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add-ons Collapsible */}
              <div className="mt-auto pt-4">
                <button
                  onClick={() => toggleAddon(index)}
                  className={`flex items-center gap-2 text-[13px] font-bold transition-colors ${
                    isDark ? "text-white/60 hover:text-white" : "text-[#4B5563] hover:text-[#1A7A4A]"
                  }`}
                >
                  <Plus className={`w-4 h-4 transition-transform ${openAddons === index ? "rotate-45" : ""}`} />
                  Add extras
                </button>
                {openAddons === index && (
                  <div className={`mt-4 p-4 rounded-xl text-[13px] font-medium border ${isDark ? "bg-white/5 border-white/10" : "bg-[#F8F8F6] border-[#E5E5E0]"}`}>
                    <ul className="space-y-2">
                      {pkg.addons.map((addon, aIndex) => (
                        <li key={aIndex} className={isDark ? "text-white/80" : "text-[#4B5563]"}>• {addon}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="animate-on-scroll text-center flex flex-col items-center justify-center pt-8">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 bg-[#1A7A4A] hover:bg-[#15603A] text-white py-4 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_-4px_rgba(26,122,74,0.4)]"
        >
          Chat on WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-[13px] font-medium text-[#4B5563] mt-4">
          Meta Ads budget is separate and paid directly to platforms.
        </p>
      </div>
    </SectionWrapper>
  );
}
                