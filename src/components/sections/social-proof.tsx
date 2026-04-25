import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Within three months, our inquiries doubled. We stopped guessing and started getting real, serious patient inquiries consistently.",
    name: "Dr. Sarah",
    clinic: "Colombo Dental Clinic",
    initial: "S",
    color: "bg-gold/15 text-gold-dark",
  },
  {
    quote:
      "Our Instagram now has real engagement. Patients actively follow us, and we get consultation messages every week — not just price shoppers.",
    name: "Dr. Rashmi",
    clinic: "Skin Care Clinic, Colombo",
    initial: "R",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    quote:
      "We stopped random posting and went with a systematic approach. Now we get 8–10 serious patient inquiries every month, consistently.",
    name: "Dr. Kamal",
    clinic: "Aesthetic Clinic, Galle",
    initial: "K",
    color: "bg-blue-50 text-blue-600",
  },
];

export function SocialProofSection() {
  return (
    <SectionWrapper background="cream" id="social-proof">
      <div className="text-center mb-8 md:mb-14">
        <div className="animate-on-scroll">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">
            What Clinics Are{" "}
            <span className="text-gold-gradient">Saying</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`animate-on-scroll animate-on-scroll-delay-${index + 1} bg-white rounded-2xl p-5 md:p-7 border border-light-border shadow-sm hover:shadow-lg transition-all duration-300 group`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-gold fill-gold"
                />
              ))}
            </div>

            {/* Quote mark */}
            <div className="mb-3">
              <Quote className="w-6 h-6 text-gold/30" />
            </div>

            {/* Quote text */}
            <p className="text-sm md:text-base text-navy leading-relaxed mb-5 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-light-border">
              <div
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}
              >
                {t.initial}
              </div>
              <div>
                <p
                  className="text-sm font-semibold text-navy"
                  style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
                >
                  {t.name}
                </p>
                <p className="text-xs text-warm-gray">{t.clinic}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
