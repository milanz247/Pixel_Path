import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Crosshair, Heart, BarChart3, FileCheck, Cpu } from "lucide-react";

const reasons = [
  { icon: Crosshair, title: "Clinic-Focused Marketing", desc: "We do not work with every type of business. We focus on clinics and understand how patients think." },
  { icon: Heart, title: "Trust-Building Content", desc: "We create content designed to build trust, not just fill your feed with random posts." },
  { icon: BarChart3, title: "Lead Generation", desc: "Our ads and pages are built to bring patient inquiries, not just likes and comments." },
  { icon: FileCheck, title: "Landing Pages That Convert", desc: "We build simple pages that turn visitors into WhatsApp messages for your clinic." },
  { icon: Cpu, title: "AI-Powered Support", desc: "We use AI tools behind the scenes to make the work faster, smarter, and more consistent." },
];

export function WhyPixelPathSection() {
  return (
    <SectionWrapper background="offwhite" id="why-pixel-path" divider={false}>
      <div className="animate-on-scroll text-center mb-10 md:mb-16">
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
          Why Clinics Choose <span className="text-[#1A7A4A]">Pixel Path</span>
        </h2>
        <p className="text-base text-[#4B5563] max-w-2xl mx-auto">
          There are many people offering social media services. But most do not understand clinic marketing properly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        {reasons.slice(0, 3).map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#1A7A4A]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#1C1C1E] font-heading mb-2">{r.title}</h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed">{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        {reasons.slice(3).map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#1A7A4A]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#1C1C1E] font-heading mb-2">{r.title}</h3>
              <p className="text-[14px] text-[#4B5563] leading-relaxed">{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="animate-on-scroll text-center mt-8 md:mt-12 bg-white py-6 px-4 rounded-xl border border-[#E5E5E0] shadow-sm max-w-3xl mx-auto">
        <p className="text-[16px] md:text-[18px] font-semibold text-[#1C1C1E] font-heading">
          Our goal is not to make your page look busy. Our goal is to help your clinic grow.
        </p>
      </div>
    </SectionWrapper>
  );
}
