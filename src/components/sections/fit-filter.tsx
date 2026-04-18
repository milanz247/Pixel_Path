import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Check, X } from "lucide-react";

const forList = [
  "Dental clinics in Sri Lanka",
  "Skin clinics in Sri Lanka",
  "Aesthetic clinics in Sri Lanka",
  "Clinic owners who want more patient inquiries",
  "Clinics with weak or inconsistent social media",
  "Teams that want a proper marketing system",
  "Owners ready to invest in real growth",
];

const notForList = [
  "Clinics looking only for the cheapest package",
  "People who only want a few random posts",
  "Owners expecting serious results from a tiny budget",
  "Teams that do not follow up on leads properly",
  "People comparing only on price",
];

export function FitFilterSection() {
  return (
    <SectionWrapper background="cream-dark" id="fit-filter">
      <div className="animate-on-scroll text-center mb-8 md:mb-16">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">Is This <span className="text-gold-gradient">Right for You?</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
        {/* FOR */}
        <div className="animate-on-scroll animate-on-scroll-delay-1">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 h-full border border-emerald-100">
            <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-navy" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Who This Is For</h3>
            </div>
            <div className="space-y-2.5 md:space-y-3.5">
              {forList.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-500" />
                  </div>
                  <p className="text-xs md:text-base text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NOT FOR */}
        <div className="animate-on-scroll animate-on-scroll-delay-2">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 h-full border border-red-100">
            <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-soft flex items-center justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-navy" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Who This Is Not For</h3>
            </div>
            <div className="space-y-2.5 md:space-y-3.5">
              {notForList.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-400" />
                  </div>
                  <p className="text-xs md:text-base text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-on-scroll text-center mt-6 md:mt-10">
        <p className="text-sm md:text-lg font-semibold text-navy" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Pixel Path is for serious clinic owners who want better inquiries and less wasted time.</p>
      </div>
    </SectionWrapper>
  );
}
