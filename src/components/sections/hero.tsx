import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-20" id="hero">
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

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-6 pb-12 md:pt-12 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 bg-cream rounded-full px-3 md:px-4 py-1.5 mb-4 md:mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-navy-600">
                For Clinics in Sri Lanka
              </span>
            </div>

            <h1 className="heading-xl mb-4 md:mb-6">
              We Bring More Patients to Your Clinic —{" "}
              <span className="text-gold-gradient">Consistently</span>
            </h1>

            <p className="body-lg mb-6 md:mb-8 max-w-xl text-sm md:text-lg">
              Your clinic is great — your marketing is the problem. We build a
              complete system that gets you 25–40% more serious patient inquiries
              per month using Facebook & Instagram ads, smart content, and Google
              search campaigns.
            </p>

            <div className="mb-3 md:mb-5">
              <WhatsAppButton size="large" label="Get Your Free Clinic Audit" />
            </div>

            <p className="text-xs md:text-sm text-warm-gray mb-6 md:mb-8">
              No long form. Just send us a message about your clinic.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-3 md:pt-4 border-t border-light-border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs md:text-sm font-medium text-navy-600">No lock-in contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs md:text-sm font-medium text-navy-600">Results in 30 days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs md:text-sm font-medium text-navy-600">Clinic-only focus</span>
              </div>
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

            {/* Floating trust card */}
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
                  Dental · Skin · Aesthetic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
