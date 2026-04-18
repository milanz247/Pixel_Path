import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white" id="hero">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] gold-gradient" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-6 pb-12 md:pt-16 md:pb-24">
        {/* Logo / Brand */}
        <div className="mb-8 md:mb-16">
          <a href="#hero" className="inline-flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xs md:text-sm font-[var(--font-outfit)]">
                PP
              </span>
            </div>
            <span
              className="text-lg md:text-xl font-semibold text-navy tracking-tight"
              style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
            >
              Pixel Path
            </span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Copy — always first on mobile */}
          <div>
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 bg-cream rounded-full px-3 md:px-4 py-1.5 mb-4 md:mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-navy-600">
                For Clinics in Sri Lanka
              </span>
            </div>

            <h1 className="heading-xl mb-4 md:mb-6">
              Get More Patient Inquiries{" "}
              <span className="text-gold-gradient">for Your Clinic</span>
            </h1>

            <p className="body-lg mb-6 md:mb-8 max-w-xl text-sm md:text-lg">
              We help dental clinics, skin clinics, and aesthetic clinics in Sri
              Lanka get more patient inquiries through better social media, ads,
              content, and simple marketing systems that actually work.
            </p>

            <div className="mb-3 md:mb-5">
              <WhatsAppButton size="large" />
            </div>

            <p className="text-xs md:text-sm text-warm-gray mb-6 md:mb-8">
              No long form. Just send us a message about your clinic.
            </p>

            {/* Filter line */}
            <div className="flex items-center gap-2 pt-3 md:pt-4 border-t border-light-border">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gold flex-shrink-0"
              >
                <path
                  d="M8 1L10.163 5.279L15 6.056L11.5 9.274L12.326 14L8 11.779L3.674 14L4.5 9.274L1 6.056L5.837 5.279L8 1Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium text-navy-600">
                Best for clinic owners who want real growth, not cheap posting.
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl md:shadow-2xl shadow-navy/10">
              <Image
                src="/hero-clinic.png"
                alt="Premium modern clinic interior with reception area"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-3 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-xl p-3 md:p-4 shadow-lg md:shadow-xl shadow-navy/8 border border-light-border">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sage flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-5 md:h-5"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-warm-gray">Patient Inquiries</p>
                  <p
                    className="text-base md:text-lg font-bold text-navy"
                    style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                  >
                    +127%
                  </p>
                </div>
              </div>
            </div>

            {/* Floating trust card — hidden on small mobile */}
            <div className="hidden sm:block absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-white rounded-xl p-2.5 md:p-3 shadow-lg md:shadow-xl shadow-navy/8 border border-light-border">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-white flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] font-bold text-gold-dark">D</span>
                  </div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-sage border-2 border-white flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] font-bold text-green-700">S</span>
                  </div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] font-bold text-blue-600">A</span>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-navy-600">
                  Trusted by Clinics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
