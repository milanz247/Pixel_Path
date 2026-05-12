import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Check, Bot } from "lucide-react";

const includedItems = [
  "Facebook Messenger automation",
  "WhatsApp lead flow setup",
  "FAQ auto-replies",
  "Treatment inquiry qualification",
  "Appointment booking flow",
  "Follow-up message sequence",
  "Lead tagging and segmentation",
  "Meta Ads + chatbot connection",
];

export function ClinicAutomationSection() {
  return (
    <SectionWrapper background="cream-dark" id="clinic-lead-automation" divider={false}>
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A7A4A]/20 bg-white/70 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#1A7A4A]">
              <Bot className="w-4 h-4" />
              Clinic Lead Automation System
            </div>

            <h2 className="mt-5 text-[32px] md:text-[40px] font-bold text-neutral-charcoal leading-tight font-heading max-w-2xl">
              AI Chatbot & WhatsApp Lead Automation for Clinics
            </h2>

            <p className="mt-4 text-[18px] md:text-[20px] text-[#1A7A4A] font-semibold leading-relaxed max-w-3xl">
              Turn your Facebook, Instagram, and WhatsApp inquiries into organized, qualified leads — without losing patients in the inbox.
            </p>

            <div className="mt-6 space-y-4 max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-warm-gray">
              <p>
                Many clinics receive messages from ads, but most leads are not handled properly. We set up smart Messenger and WhatsApp automation systems that reply faster, ask the right questions, qualify patients, and guide them toward booking a consultation.
              </p>
              <p>
                This helps your clinic save time, reduce missed inquiries, and improve the chance of turning messages into real appointments.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-[18px] md:text-[20px] font-bold text-neutral-charcoal mb-4 font-heading">
                What&apos;s Included
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includedItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-light-border bg-white px-4 py-3 shadow-sm">
                    <Check className="w-4 h-4 text-[#1A7A4A] mt-0.5 shrink-0" />
                    <span className="text-[14px] md:text-[15px] text-neutral-charcoal leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#D6E8DD] bg-white p-6 md:p-7 shadow-sm">
              <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#1A7A4A] mb-2">
                Best CTA
              </p>
              <p className="text-[18px] md:text-[20px] font-semibold text-neutral-charcoal leading-relaxed">
                Want to stop losing leads from your inbox? Let's build your clinic automation system.
              </p>
              <div className="mt-5">
                <WhatsAppButton size="large" label="Build My Clinic Automation System" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}