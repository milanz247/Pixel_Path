import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Star, TrendingUp, MessageCircle } from "lucide-react";

const proofCards = [
  { clinic: "Smile Care Dental", location: "Colombo", result: "From a weak online presence to 35+ patient inquiries in 45 days.", detail: "Better inquiry quality. Less wasted time.", icon: TrendingUp, iconBg: "bg-emerald-50", iconColor: "text-emerald-500" },
  { clinic: "Glow Skin Clinic", location: "Kandy", result: "Stronger clinic image online and more serious consultation messages.", detail: "Patients now come prepared and ready for treatment.", icon: Star, iconBg: "bg-amber-50", iconColor: "text-amber-500" },
  { clinic: "Aura Aesthetics", location: "Nugegoda", result: "Better lead quality and better inquiry flow for the front desk.", detail: "Front desk no longer wastes time on price shoppers.", icon: MessageCircle, iconBg: "bg-blue-50", iconColor: "text-blue-500" },
];

const testimonial = {
  quote: "Before working with Pixel Path, our page looked weak and inconsistent. Now our clinic looks more professional and we are getting better patient inquiries from more serious people.",
  author: "Clinic Owner",
  clinic: "Dental Clinic, Colombo",
};

export function SocialProofSection() {
  return (
    <SectionWrapper background="white" id="social-proof">
      <div className="animate-on-scroll text-center mb-8 md:mb-16">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">Real Proof, <span className="text-gold-gradient">Not Empty Promises</span></h2>
        <p className="body-lg max-w-2xl mx-auto">See how clinics like yours are getting better results with Pixel Path.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-12">
        {proofCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} premium-card`}>
              <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 ${card.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-navy">{card.clinic}</p>
                  <p className="text-[10px] md:text-xs text-warm-gray">{card.location}</p>
                </div>
              </div>
              <p className="text-sm md:text-base font-medium text-navy mb-1.5 md:mb-2">{card.result}</p>
              <p className="text-xs md:text-sm text-warm-gray">{card.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Testimonial */}
      <div className="animate-on-scroll max-w-2xl mx-auto">
        <div className="bg-cream rounded-xl md:rounded-2xl p-5 md:p-10 relative">
          <svg className="absolute top-4 left-4 md:top-8 md:left-8 w-7 h-7 md:w-10 md:h-10 text-gold/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="relative">
            <p className="text-base md:text-xl text-navy leading-relaxed mb-4 md:mb-6 pl-0 md:pl-8 pt-4 md:pt-6" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-2.5 md:gap-3 pl-0 md:pl-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-[10px] md:text-sm font-bold text-gold-dark">CO</span>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold text-navy">{testimonial.author}</p>
                <p className="text-[10px] md:text-xs text-warm-gray">{testimonial.clinic}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
