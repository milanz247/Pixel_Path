import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  LayoutGrid,
  PenTool,
  Target,
  Search,
  FileText,
  BarChart3,
  Check,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Social Media Management",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    features: [
      "Professional content calendar",
      "8–15 Reels/month (trending, educational, before-after)",
      "12–15 Posts/month (trust-building, treatment info)",
      "Consistent posting schedule",
      "Community engagement",
    ],
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    features: [
      "Targeted audience setup (age, location, interests)",
      "Ad creative design & testing",
      "Daily monitoring & optimization",
      "Lead generation campaigns",
      "Budget management (separate budget)",
    ],
  },
  {
    icon: Search,
    title: "Google Ads & Search",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    features: [
      "Appear when patients search \"clinic near me\"",
      "Google Local Services Ads",
      "Search campaigns for treatments",
    ],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500",
    features: [
      "WhatsApp lead capture pages",
      "Treatment-specific pages",
      "Lead funnels (awareness → interest → inquiry)",
    ],
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    features: [
      "Monthly planning & themes",
      "Educational content (treatment info)",
      "Before-after showcases",
      "Patient testimonials",
      "Doctor credentials display",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    features: [
      "Monthly reports with metrics",
      "Inquiry source tracking",
      "ROI analysis",
      "Monthly optimization",
    ],
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper background="white" id="services">
      <div className="text-center mb-8 md:mb-16">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">
            Complete Marketing System —{" "}
            <span className="text-gold-gradient">One Unified System</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            You treat patients. We manage your entire marketing system — content,
            ads, landing pages, and performance tracking — all connected, all
            optimized.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 5)} premium-card group h-full`}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-5 h-5 md:w-5.5 md:h-5.5 ${service.iconColor}`} />
                </div>
                <h3
                  className="text-sm md:text-base font-semibold text-navy"
                  style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                >
                  {service.title}
                </h3>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check
                      className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-xs md:text-sm text-warm-gray leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="animate-on-scroll text-center">
        <p
          className="text-base md:text-lg font-semibold text-navy mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
        >
          One system. Everything connected. Your clinic grows while you focus on
          patients.
        </p>
        <WhatsAppButton label="Get Your Free Clinic Audit" />
      </div>
    </SectionWrapper>
  );
}
