import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Search, Users, Shield, Clock, TrendingUp } from "lucide-react";

const outcomes = [
  { icon: Search, text: "Get more patient inquiries from the right audience" },
  { icon: Users, text: "Attract better-quality messages from serious people" },
  { icon: Shield, text: "Look more trusted and professional online" },
  { icon: Clock, text: "Save your time — stop managing everything yourself" },
  { icon: TrendingUp, text: "Grow your clinic without doing all the marketing work" },
];

export function DreamOutcomeSection() {
  return (
    <SectionWrapper background="white" id="dream-outcome">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div>
          <div className="animate-on-scroll">
            <div className="premium-divider mb-4 md:mb-6" />
            <h2 className="heading-lg mb-3 md:mb-5">
              What Most Clinic Owners <span className="text-gold-gradient">Really Want</span>
            </h2>
            <p className="body-lg mb-6 md:mb-8">
              You do not need more random marketing. You need a system that brings the right patients to your clinic — consistently.
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div key={index} className={`animate-on-scroll animate-on-scroll-delay-${index + 1} flex items-start gap-3 md:gap-4`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-gold-dark" />
                  </div>
                  <p className="text-sm md:text-lg text-navy font-medium leading-relaxed">{outcome.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="animate-on-scroll">
          <div className="relative">
            <div className="bg-cream rounded-2xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gold" />
                  <span className="text-[10px] md:text-sm font-semibold text-gold-dark uppercase tracking-wider" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>The Outcome</span>
                </div>
                <p className="text-xl md:text-3xl font-bold text-navy leading-snug mb-4 md:mb-6" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
                  A clinic that patients find, trust, and message — <span className="text-gold-gradient">without you doing all the work.</span>
                </p>
                <p className="body-md">That is what good marketing should do for your clinic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
