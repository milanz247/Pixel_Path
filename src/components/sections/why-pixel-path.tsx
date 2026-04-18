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
    <SectionWrapper background="cream" id="why-pixel-path">
      <div className="animate-on-scroll text-center mb-8 md:mb-16">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">Why Clinics Choose <span className="text-gold-gradient">Pixel Path</span></h2>
        <p className="body-lg max-w-2xl mx-auto">There are many people offering social media services. But most do not understand clinic marketing properly.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-6">
        {reasons.slice(0, 3).map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} premium-card`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-cream-dark flex items-center justify-center mb-3 md:mb-4"><Icon className="w-5 h-5 md:w-6 md:h-6 text-gold-dark" /></div>
              <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>{r.title}</h3>
              <p className="body-md">{r.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-2xl mx-auto">
        {reasons.slice(3).map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 4} premium-card`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-cream-dark flex items-center justify-center mb-3 md:mb-4"><Icon className="w-5 h-5 md:w-6 md:h-6 text-gold-dark" /></div>
              <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>{r.title}</h3>
              <p className="body-md">{r.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="animate-on-scroll text-center mt-6 md:mt-10">
        <p className="text-base md:text-lg font-semibold text-navy" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Our goal is not to make your page look busy. Our goal is to help your clinic grow.</p>
      </div>
    </SectionWrapper>
  );
}
