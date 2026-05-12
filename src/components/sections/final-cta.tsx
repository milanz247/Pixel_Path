import { getWhatsAppLink } from "@/components/ui/whatsapp-button";
import { MessageSquare, Search, BarChart3, FileText, ArrowRight } from "lucide-react";

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
            "linear-gradient(135deg, #0B0C10 0%, #0F1A14 50%, #0B0C10 100%)",
        }}
      >
        {/* Subtle glow */}
        <div className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-[#1A7A4A] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
          <div>
            {/* Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-[#1A7A4A] flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-[#1A7A4A]/20">
              <MessageSquare className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-heading">
              Ready to Get More{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20C969] to-[#1A7A4A]">
                Patient Inquiries?
              </span>
            </h2>

            <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
              Get your Free Clinic Audit — we&apos;ll review your current presence
              and show you exactly what&apos;s missing and how to fix it.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#20C969]" />
                    <span className="text-xs md:text-sm text-white/60">{b.text}</span>
                  </div>
                );
              })}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-[#1A7A4A] hover:bg-[#15603A] text-white py-4 px-10 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#1A7A4A]"
            >
              Get Your Free Clinic Audit
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs md:text-sm text-white/40 mt-4 md:mt-6">
              Fast reply during 9 AM – 6 PM (Mon–Sat). No pressure. No long form.
              Just direct answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
