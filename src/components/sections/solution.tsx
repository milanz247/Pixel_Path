import { SectionWrapper } from "@/components/ui/section-wrapper";

export function SolutionSection() {
  return (
    <SectionWrapper background="cream" id="solution">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-4 md:mb-6">
            A Simple Growth System <span className="text-gold-gradient">Built for Clinics</span>
          </h2>
        </div>
        <div className="animate-on-scroll animate-on-scroll-delay-1">
          <p className="body-lg mb-4 md:mb-6">Pixel Path is built for clinics, not every kind of business.</p>
          <p className="body-lg mb-4 md:mb-6">
            We understand that clinic marketing is different. People do not choose a clinic just because of nice posts. They choose a clinic when they feel <span className="font-semibold text-navy">trust</span>.
          </p>
          <p className="body-lg mb-4 md:mb-6">
            That is why we help clinics build better trust, better visibility, and better inquiry flow — using content, ads, pages, and simple systems that work together.
          </p>
          <p className="body-md italic text-warm-gray mb-6 md:mb-10">
            Behind the scenes, we also use AI tools to make the work faster, more consistent, and easier to manage.
          </p>
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-sm border border-light-border text-left">
            <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
            <p className="text-sm md:text-base font-semibold text-navy" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
              We help clinics stop doing random marketing and start growing with a proper system.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
