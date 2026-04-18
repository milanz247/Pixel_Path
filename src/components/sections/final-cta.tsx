import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 md:py-20" id="final-cta">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #D4A853 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      </div>
      {/* Gold accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5 md:mb-8 shadow-lg shadow-gold/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-7 md:h-7">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <h2 className="heading-lg mb-4 md:mb-6" style={{ color: "white" }}>
            If You Want More Patient Inquiries, Start with a Simple{" "}
            <span className="text-gold-light">WhatsApp Chat</span>
          </h2>

          <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Your clinic does not need more random posting. It needs better trust, better visibility, and a better system to turn attention into patient inquiries. If you want that, send us a WhatsApp message.
          </p>

          <WhatsAppButton size="large" />

          <p className="text-xs md:text-sm text-white/50 mt-4 md:mt-5">
            Fast reply during working hours. No pressure. No long form.
          </p>
        </div>
      </div>
    </section>
  );
}
