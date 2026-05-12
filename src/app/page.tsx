import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ServicesSection } from "@/components/sections/services";
import { SocialProofSection } from "@/components/sections/social-proof";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyPixelPathSection } from "@/components/sections/why-pixel-path";
import { PricingSection } from "@/components/sections/pricing";
import { ClinicAutomationSection } from "@/components/sections/clinic-automation";
import { RiskReversalSection } from "@/components/sections/risk-reversal";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { StickyWhatsApp } from "@/components/ui/sticky-whatsapp";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      {/* <PainSection /> */}
      <ServicesSection />
      <SocialProofSection />
      {/* <HowItWorksSection /> */}
      <WhyPixelPathSection />
      <PricingSection />
      <ClinicAutomationSection />
      <RiskReversalSection />
      <FAQSection />
      {/* <FinalCTASection /> */}
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
