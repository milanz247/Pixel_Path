import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ShieldCheck, Unlock, FileText, Wrench } from "lucide-react";

const bullets = [
  { icon: ShieldCheck, text: "No big upfront payment" },
  { icon: Unlock, text: "No long-term lock-in" },
  { icon: FileText, text: "Clear work plan before we begin" },
  { icon: Wrench, text: "If we do not deliver the agreed work properly, we will fix it at no extra charge" },
];

export function RiskReversalSection() {
  return (
    <SectionWrapper background="cream" id="risk-reversal">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">Simple to Start. <span className="text-gold-gradient">Low Risk</span> for Your Clinic.</h2>
          <p className="body-lg mb-6 md:mb-10">We know many clinic owners want to be careful before spending on marketing. That is why we keep the starting process simple.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-2xl mx-auto">
          {bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-lg md:rounded-xl p-3.5 md:p-5 flex items-start gap-3 md:gap-4 border border-light-border`}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-sage flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                </div>
                <p className="text-xs md:text-base font-medium text-navy text-left">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
