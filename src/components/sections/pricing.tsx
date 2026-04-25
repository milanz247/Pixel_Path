"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Check, Star, Zap, TrendingUp, Crown, AlertCircle } from "lucide-react";

const packages = [
  {
    name: "Starter Growth",
    price: "45,000",
    icon: Zap,
    tagline: "Start your digital presence",
    description:
      "Perfect for clinics just starting their digital presence and want to build a professional foundation.",
    features: [
      "8 Reels + 8 Posts / month",
      "Professional captions",
      "Basic Meta Ads management",
      "Monthly content planning",
      "Posting support",
      "Monthly performance summary",
    ],
    bestFor: "Clinics just starting their digital presence.",
    recommended: false,
    gradient: "from-emerald-500/10 via-emerald-400/5 to-transparent",
    accentColor: "text-emerald-500",
    borderAccent: "hover:border-emerald-300",
    iconBg: "bg-emerald-50",
    checkBg: "bg-emerald-50",
    checkColor: "text-emerald-500",
  },
  {
    name: "Growth Plus",
    price: "55,000",
    icon: TrendingUp,
    tagline: "Consistent & professional growth",
    description:
      "A balanced package for clinics that want consistent growth with content strategy and active ad support.",
    features: [
      "10 Reels + 12 Posts / month",
      "Content strategy planning",
      "Meta Ads + Story guidance",
      "Community engagement",
      "Monthly optimization",
      "Posting support",
      "Monthly performance report",
    ],
    bestFor: "Clinics wanting consistent, reliable growth.",
    recommended: true,
    gradient: "from-gold/15 via-gold/5 to-transparent",
    accentColor: "text-gold",
    borderAccent: "border-gold/40 hover:border-gold",
    iconBg: "bg-gold/10",
    checkBg: "bg-gold/15",
    checkColor: "text-gold-dark",
  },
  {
    name: "Premium Brand Growth",
    price: "65,000",
    icon: Crown,
    tagline: "Dominate your market",
    description:
      "For clinics that want premium brand positioning, advanced strategy, and the highest-tier content & advertising system.",
    features: [
      "12 Reels + 15 Posts / month",
      "Advanced content strategy",
      "Priority coordination",
      "Meta Ads + advanced optimization",
      "Detailed monthly report with improvement ideas",
      "Google Ads consultation",
      "Brand positioning support",
    ],
    bestFor: "Clinics wanting premium positioning & market dominance.",
    recommended: false,
    gradient: "from-purple-500/10 via-purple-400/5 to-transparent",
    accentColor: "text-purple-500",
    borderAccent: "hover:border-purple-300",
    iconBg: "bg-purple-50",
    checkBg: "bg-purple-50",
    checkColor: "text-purple-500",
  },
];

export function PricingSection() {
  return (
    <SectionWrapper background="cream" id="pricing">
      {/* Section header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">
            Social Media & Meta Ads{" "}
            <span className="text-gold-gradient">Packages for Clinics</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Monthly packages designed to help your clinic grow with professional
            content, smart strategy, and Meta Ads — all managed for you.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-12 items-stretch">
        {packages.map((pkg, index) => {
          const Icon = pkg.icon;
          return (
            <div
              key={index}
              className={`animate-on-scroll animate-on-scroll-delay-${index + 1} relative group`}
            >
              {/* Recommended badge */}
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <div className="gold-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-gold/25 flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" />
                    Recommended
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-2xl border ${
                  pkg.recommended
                    ? pkg.borderAccent
                    : `border-light-border ${pkg.borderAccent}`
                } transition-all duration-500 overflow-hidden ${
                  pkg.recommended
                    ? "shadow-xl shadow-gold/8 scale-[1.02] lg:scale-105"
                    : "shadow-md hover:shadow-xl"
                } hover:-translate-y-1`}
              >
                {/* Top gradient glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${pkg.gradient} pointer-events-none`}
                />

                {/* Card content */}
                <div className="relative p-5 md:p-7">
                  {/* Icon and name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${pkg.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${pkg.accentColor}`} />
                    </div>
                    <div>
                      <h3
                        className="text-lg md:text-xl font-bold text-navy"
                        style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                      >
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-warm-gray">{pkg.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-light-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-medium text-warm-gray">LKR</span>
                      <span
                        className={`text-3xl md:text-4xl font-bold ${
                          pkg.recommended ? "text-gold-gradient" : "text-navy"
                        }`}
                        style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                      >
                        {pkg.price}
                      </span>
                      <span className="text-sm text-warm-gray font-medium">/ month</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-md mb-5 text-xs md:text-sm">{pkg.description}</p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5">
                        <div
                          className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.checkBg}`}
                        >
                          <Check
                            className={`w-2.5 h-2.5 md:w-3 md:h-3 ${pkg.checkColor}`}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-xs md:text-sm text-navy-600 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Best for */}
                  <div
                    className={`rounded-xl p-3 md:p-4 mb-5 ${
                      pkg.recommended
                        ? "bg-gold/5 border border-gold/10"
                        : "bg-cream border border-cream-dark"
                    }`}
                  >
                    <p className="text-xs font-semibold text-navy mb-1">Perfect for:</p>
                    <p className="text-xs md:text-sm text-warm-gray leading-relaxed">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <WhatsAppButton
                    className={`w-full justify-center whitespace-nowrap ${
                      pkg.recommended ? "!text-base" : "!text-sm"
                    }`}
                    label="Get Your Free Clinic Audit"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Important note */}
      <div className="animate-on-scroll max-w-2xl mx-auto">
        <div className="flex items-start gap-3 bg-white rounded-xl p-4 md:p-5 border border-light-border shadow-sm">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
          </div>
          <div>
            <p
              className="text-sm md:text-base font-semibold text-navy mb-1"
              style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
            >
              Important Note
            </p>
            <p className="text-xs md:text-sm text-warm-gray leading-relaxed">
              Meta Ads management is included in all packages. Ad budget is
              separate and paid directly by you. We only charge for management &
              optimization.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
