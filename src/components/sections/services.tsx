import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { LayoutGrid, PenTool, Target, Search, FileText, GitBranch, Sparkles } from "lucide-react";

const services = [
  { icon: LayoutGrid, title: "Social Media Management", description: "We manage your clinic page properly so it looks active, trusted, and professional.", color: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: PenTool, title: "Content Creation", description: "We create content that helps people understand your clinic, your treatments, and why they should trust you.", color: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: Target, title: "Meta Ads", description: "We run ads to bring more patient inquiries from the right audience on Facebook and Instagram.", color: "bg-rose-50", iconColor: "text-rose-500" },
  { icon: Search, title: "Google Ads", description: "We help your clinic appear when people search for services like yours on Google.", color: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: FileText, title: "Landing Pages", description: "We build pages that turn visitors into WhatsApp messages and real patient inquiries.", color: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: GitBranch, title: "Marketing Funnels", description: "We connect your content, ads, and message flow so the whole system works together.", color: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: Sparkles, title: "AI-Powered Workflows", description: "We use AI tools to improve speed, consistency, and smarter marketing work behind the scenes.", color: "bg-indigo-50", iconColor: "text-indigo-500" },
];

export function ServicesSection() {
  return (
    <SectionWrapper background="white" id="services">
      <div className="text-center mb-8 md:mb-16">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">Everything Your Clinic Needs in <span className="text-gold-gradient">One Growth System</span></h2>
          <p className="body-lg max-w-2xl mx-auto">We do not just make posts and leave. We build one connected system that helps your clinic get attention, build trust, and turn that into patient inquiries.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-6">
        {services.slice(0, 6).map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 5)} premium-card group`}>
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${service.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>{service.title}</h3>
              <p className="body-md">{service.description}</p>
            </div>
          );
        })}
      </div>
      <div className="animate-on-scroll max-w-md mx-auto mb-8 md:mb-12">
        <div className="premium-card group text-center">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${services[6].color} flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform`}>
            <Sparkles className={`w-5 h-5 md:w-6 md:h-6 ${services[6].iconColor}`} />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>{services[6].title}</h3>
          <p className="body-md">{services[6].description}</p>
        </div>
      </div>
      <div className="animate-on-scroll text-center">
        <p className="text-base md:text-lg font-semibold text-navy mb-6 md:mb-8" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>So instead of doing many random things, your clinic gets one proper growth system.</p>
        <WhatsAppButton />
      </div>
    </SectionWrapper>
  );
}
