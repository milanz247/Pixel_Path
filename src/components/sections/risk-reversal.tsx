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
    <SectionWrapper background="offwhite" id="risk-reversal" divider>
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
            Simple to Start. Low Risk.
          </h2>
          <p className="text-[16px] text-[#4B5563] max-w-2xl mx-auto mb-10">
            We know many clinic owners want to be careful before spending on marketing. That is why we keep the starting process simple.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          {bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="animate-on-scroll bg-white rounded-xl p-5 flex items-start gap-4 border border-[#E5E5E0] shadow-sm transform transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-[#E8F5EE] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#1A7A4A]" />
                </div>
                <p className="text-[15px] font-medium text-[#1C1C1E] text-left leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
