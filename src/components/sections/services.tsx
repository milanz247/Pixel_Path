import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  LayoutGrid,
  PenTool,
  Target,
  Search,
  FileText,
  MessageSquare,
  Check,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Social Media Management",
    features: [
      "Professional content calendar",
      "8–15 Reels/month (trending, educational)",
      "12–15 Posts/month (trust-building)",
      "Consistent posting schedule",
      "Community engagement",
    ],
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook & IG)",
    features: [
      "Targeted audience setup",
      "Ad creative design & testing",
      "Daily monitoring & optimization",
      "Lead generation campaigns",
      "Budget management",
    ],
  },
  {
    icon: Search,
    title: "Google Ads & Search",
    features: [
      "Appear when patients search local",
      "Google Local Services Ads",
      "Search campaigns for treatments",
    ],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    features: [
      "WhatsApp lead capture pages",
      "Treatment-specific pages",
      "Lead funnels (awareness → inquiry)",
    ],
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    features: [
      "Monthly planning & themes",
      "Educational content",
      "Before-after showcases",
      "Patient testimonials",
      "Doctor credentials display",
    ],
  },
  {
    icon: MessageSquare,
    title: "Clinic Lead Automation System",
    features: [
      "AI Chatbot & WhatsApp Lead Automation for Clinics",
      "Facebook Messenger automation",
      "WhatsApp lead flow setup",
      "FAQ auto-replies",
      "Treatment inquiry qualification",
      "Appointment booking flow",
      "Follow-up message sequence",
      "Lead tagging and segmentation",
    ],
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper background="white" id="services">
      <div className="text-center mb-10 md:mb-16">
        <div className="animate-on-scroll">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
            Complete Marketing System
          </h2>
          <p className="text-base text-[#4B5563] max-w-2xl mx-auto">
            You treat patients. We manage your entire marketing system — content,
            ads, landing pages, and lead automation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-[#1A7A4A]" />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1C1C1E] font-heading leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="space-y-3.5 flex-1">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 group">
                    <Check
                      className="w-4 h-4 text-[#1A7A4A] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[14px] leading-relaxed text-[#4B5563]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="animate-on-scroll text-center bg-[#F8F8F6] py-6 px-4 rounded-xl border border-[#E5E5E0]">
        <p className="text-[16px] md:text-[18px] font-semibold text-[#1C1C1E]">
          One system. Everything connected. Your clinic grows while you focus on patients.
        </p>
      </div>
    </SectionWrapper>
  );
} 