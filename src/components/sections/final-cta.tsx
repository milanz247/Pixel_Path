import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MessageSquare, Search, BarChart3, FileText } from "lucide-react";

const benefits = [
  { icon: Search, text: "Your current social presence analysis" },
  { icon: BarChart3, text: "What inquiries you're missing" },
  { icon: FileText, text: "Custom growth plan (no obligation)" },
];

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden" id="final-cta">
      <div
        className="relative py-16 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
          <div>
            {/* Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl gold-gradient flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-gold/20">
              <MessageSquare className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>

            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}
            >
              Ready to Get More{" "}
              <span className="text-gold-gradient">Patient Inquiries?</span>
            </h2>

            <p className="text-sm md:text-lg text-slate-300 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
              Get your Free Clinic Audit — we&apos;ll review your current presence
              and show you exactly what&apos;s missing and how to fix it.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-gold" />
                    <span className="text-xs md:text-sm text-slate-300">{b.text}</span>
                  </div>
                );
              })}
            </div>

            <WhatsAppButton size="large" label="Get Your Free Clinic Audit" />

            <p className="text-xs md:text-sm text-slate-400 mt-4 md:mt-6">
              Fast reply during 9 AM – 6 PM (Mon–Sat). No pressure. No long form.
              Just direct answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
