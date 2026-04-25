import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ClipboardCheck, Map, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardCheck,
    title: "Free Clinic Review",
    desc: "We review your Facebook page, Instagram, and Google presence. What's working? What's missing? You get a clear assessment — no obligation.",
  },
  {
    num: "02",
    icon: Map,
    title: "Custom Growth Plan",
    desc: "We build a plan tailored to your clinic — monthly content themes, ad strategy (audience, budget, placement), landing page plan, timeline & milestones.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "We Execute, You Focus",
    desc: "We handle content creation & posting, ad management & daily monitoring, lead follow-up system setup, and monthly reporting. You focus on patient care.",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Results & Optimization",
    desc: "Monthly review: How many inquiries came in? Which ads worked best? Which content got engagement? What to improve next month? Constant optimization.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper background="white" id="how-it-works">
      <div className="animate-on-scroll text-center mb-8 md:mb-16">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">
          How <span className="text-gold-gradient">We Work</span>
        </h2>
        <p className="body-lg max-w-xl mx-auto">
          Simple, clear, and designed to save your time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} relative bg-cream rounded-xl md:rounded-2xl p-5 md:p-7 group hover:shadow-lg transition-all`}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gold-gradient flex items-center justify-center shadow-md shadow-gold/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <span
                      className="text-[10px] md:text-xs font-bold text-gold-dark uppercase tracking-widest block"
                      style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                    >
                      Step {step.num}
                    </span>
                    <h3
                      className="text-sm md:text-lg font-semibold text-navy"
                      style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="body-md text-xs md:text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="animate-on-scroll text-center">
        <p
          className="text-base md:text-lg font-semibold text-navy mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
        >
          You focus on the clinic. We focus on bringing the right patients to you.
        </p>
        <WhatsAppButton label="Get Your Free Clinic Audit" />
      </div>
    </SectionWrapper>
  );
}
