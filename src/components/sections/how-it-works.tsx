import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ClipboardCheck, Target, TrendingUp, Handshake } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Free Clinic Review",
    desc: "We review your current presence. You get a clear assessment — no obligation.",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Custom Strategy",
    desc: "We design a system for your specific treatments with clear monthly goals.",
    icon: Target,
  },
  {
    num: "03",
    title: "System Launch",
    desc: "We handle content and ads. You just handle the new patient messages.",
    icon: TrendingUp,
  },
  {
    num: "04",
    title: "Monthly Growth",
    desc: "Every month we track which ads brought patients and optimize the budget.",
    icon: Handshake,
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper background="white" id="how-it-works" divider>
      <div className="animate-on-scroll text-center mb-12 md:mb-16">
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
          How We Work
        </h2>
        <p className="text-base text-[#4B5563] max-w-xl mx-auto">
          Simple, clear, and designed to save your time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-10 md:mb-12 relative">
        {/* Desktop Dashed line connector */}
        <div className="hidden lg:block absolute top-[88px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#E5E5E0] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="animate-on-scroll bg-[#F8F8F6] rounded-xl p-6 lg:p-8 flex flex-col relative border border-[#E5E5E0] shadow-sm transform transition-transform hover:-translate-y-1"
              >
                {/* Number Pill */}
                <div className="absolute top-4 left-4 bg-white border border-[#E5E5E0] text-[#1A7A4A] font-bold text-xs rounded-full px-2.5 py-1 font-heading">
                  {step.num}
                </div>

                <div className="flex flex-col items-center text-center mt-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#E8F5EE] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1A7A4A]" />
                  </div>

                  <h3 className="text-[18px] font-bold text-[#1C1C1E] font-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#4B5563] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="animate-on-scroll text-center">
        <p className="text-[16px] md:text-[18px] font-medium text-[#1C1C1E]">
          You focus on the clinic. We focus on bringing the right patients to you.
        </p>
      </div>
    </SectionWrapper>
  );
}