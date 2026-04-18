import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { AlertTriangle, Clock, MessageSquareOff, Eye, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: Eye, title: "Weak Online Presence", description: "Your clinic page looks weak, inactive, or outdated — and people notice that before they ever message you." },
  { icon: TrendingDown, title: "Posting Without Results", description: "You post sometimes, but still do not get enough patient inquiries. Random content does not build trust." },
  { icon: MessageSquareOff, title: "Low-Quality Messages", description: "Many messages are just people asking price and disappearing. No serious consultation inquiries." },
  { icon: Clock, title: "No Time for Marketing", description: "You do not have time to manage content, ads, and follow-up properly. Marketing falls behind." },
  { icon: AlertTriangle, title: "Quality Not Showing Online", description: "Your clinic may be good, but your online presence does not show that quality to potential patients." },
];

export function PainSection() {
  return (
    <SectionWrapper background="cream" id="pain">
      <div className="text-center mb-8 md:mb-16">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">
            Is This What Is Happening in{" "}
            <span className="text-gold-gradient">Your Clinic</span> Right Now?
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            You may be doing very good work in your clinic. But if your marketing is weak, random, or inconsistent, the right people may never trust you enough to message.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-12">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div key={index} className={`animate-on-scroll animate-on-scroll-delay-${index + 1} premium-card group`}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-rose-soft flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-navy mb-1.5 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
                {point.title}
              </h3>
              <p className="body-md">{point.description}</p>
            </div>
          );
        })}
      </div>

      <div className="animate-on-scroll text-center">
        <p className="text-base md:text-xl font-semibold text-navy mb-6 md:mb-8" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
          Too much effort. Too little trust. Too many weak inquiries.
        </p>
        <WhatsAppButton />
      </div>
    </SectionWrapper>
  );
}
