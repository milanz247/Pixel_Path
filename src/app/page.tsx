import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { DreamOutcomeSection } from "@/components/sections/dream-outcome";
import { SolutionSection } from "@/components/sections/solution";
import { ServicesSection } from "@/components/sections/services";
import { WhyPixelPathSection } from "@/components/sections/why-pixel-path";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FitFilterSection } from "@/components/sections/fit-filter";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { RiskReversalSection } from "@/components/sections/risk-reversal";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { StickyWhatsApp } from "@/components/ui/sticky-whatsapp";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <PainSection />
      <DreamOutcomeSection />
      <SolutionSection />
      <ServicesSection />
      <WhyPixelPathSection />
      <SocialProofSection />
      <FitFilterSection />
      <HowItWorksSection />
      <RiskReversalSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
