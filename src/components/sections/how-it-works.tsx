import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ClipboardCheck, Map, Settings } from "lucide-react";

const steps = [
  { num: "01", icon: ClipboardCheck, title: "We Check Your Current Marketing", desc: "We review your page, content, ads, and current situation to see what is missing." },
  { num: "02", icon: Map, title: "We Build a Simple Growth Plan", desc: "We create a clear plan for content, ads, landing pages, and the best way to bring more patient inquiries." },
  { num: "03", icon: Settings, title: "We Manage the System for You", desc: "We handle the work and improve it so your clinic can focus on patients." },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper background="white" id="how-it-works">
      <div className="animate-on-scroll text-center mb-8 md:mb-16">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">How <span className="text-gold-gradient">We Work</span></h2>
        <p className="body-lg max-w-xl mx-auto">Simple, clear, and designed to save your time.</p>
      </div>

      <div className="max-w-3xl mx-auto mb-8 md:mb-12">
        {/* Mobile: vertical stack, Desktop: horizontal 3-col */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0`}>
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl gold-gradient flex items-center justify-center md:mb-5 shadow-lg shadow-gold/20 flex-shrink-0">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <span className="text-[10px] md:text-xs font-bold text-gold-dark uppercase tracking-widest mb-1 md:mb-2 block" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>Step {step.num}</span>
                  <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>{step.title}</h3>
                  <p className="body-md text-sm">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="animate-on-scroll text-center">
        <p className="text-base md:text-lg font-semibold text-navy mb-6 md:mb-8" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>You focus on the clinic. We focus on helping more right patients find you.</p>
        <WhatsAppButton />
      </div>
    </SectionWrapper>
  );
}
