import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ServicesSection } from "@/components/sections/services";
import { PricingSection } from "@/components/sections/pricing";
import { SocialProofSection } from "@/components/sections/social-proof";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { RiskReversalSection } from "@/components/sections/risk-reversal";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { StickyWhatsApp } from "@/components/ui/sticky-whatsapp";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      {/* <PainSection /> */}
      <ServicesSection />
      <PricingSection />
      <SocialProofSection />
      <HowItWorksSection />
      <RiskReversalSection />
      <FAQSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
