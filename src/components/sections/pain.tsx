import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Eye, TrendingDown, MessageSquareOff, Clock, Trophy } from "lucide-react";

const painPoints = [
  {
    icon: Eye,
    problem: "Weak Online Presence",
    result: "Your page looks dead. Without social proof, new patients don't trust you enough to message.",
  },
  {
    icon: TrendingDown,
    problem: "Random Posting",
    result: "Post sometimes, skip sometimes. Your audience ignores you because there's no consistency.",
  },
  {
    icon: MessageSquareOff,
    problem: "Wrong Inquiries",
    result: "\"How much?\" messages all day. Zero serious consultation inquiries that actually convert.",
  },
  {
    icon: Clock,
    problem: "No Time for Marketing",
    result: "You're busy treating patients. Marketing keeps falling behind and you lose to competitors.",
  },
  {
    icon: Trophy,
    problem: "Quality Hidden Online",
    result: "Your clinic might be the best — but your Facebook page doesn't show it. Patients can't tell.",
  },
];

export function PainSection() {
  return (
    <SectionWrapper background="cream" id="pain" nextBackground="none">
      <div className="text-center mb-8 md:mb-14">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">
            Is This Happening in{" "}
            <span className="text-gold-gradient">Your Clinic</span> Right Now?
          </h2>
        </div>
      </div>

      {/* Problem table/grid */}
      <div className="animate-on-scroll max-w-4xl mx-auto mb-6 md:mb-10">
        <div className="space-y-3 md:space-y-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 5)} pain-card bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-light-border flex items-start gap-3 md:gap-5 group hover:shadow-md hover:border-red-100 transition-all cursor-default`}
              >
                <div className="pain-icon w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-rose-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-sm md:text-base font-semibold text-navy mb-1"
                    style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                  >
                    {point.problem}
                  </h3>
                  <p className="text-xs md:text-sm text-warm-gray leading-relaxed">
                    {point.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Result summary */}
      <div className="animate-on-scroll max-w-2xl mx-auto">
        <div className="bg-navy rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
          <p
            className="text-sm md:text-lg font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
          >
            Random posts + Weak presence ={" "}
            <span className="text-gold-light">fewer inquiries, wrong type of patients</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
             