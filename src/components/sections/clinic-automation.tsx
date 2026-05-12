"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Check, Bot, MessageCircle, Zap, Users, Calendar } from "lucide-react";

const includedItems = [
  { label: "Facebook Messenger automation", icon: MessageCircle },
  { label: "WhatsApp lead flow setup", icon: Zap },
  { label: "FAQ auto-replies", icon: MessageCircle },
  { label: "Treatment inquiry qualification", icon: Users },
  { label: "Appointment booking flow", icon: Calendar },
  { label: "Follow-up message sequence", icon: MessageCircle },
  { label: "Lead tagging and segmentation", icon: Users },
  { label: "Meta Ads + chatbot connection", icon: Zap },
];

const stats = [
  { value: "3×", label: "Faster response" },
  { value: "80%", label: "Fewer missed leads" },
  { value: "24/7", label: "Always on" },
];

export function ClinicAutomationSection() {
  return (
    <SectionWrapper background="cream-dark" id="clinic-lead-automation" divider={false}>
      <div className="py-14 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-1 sm:px-3 md:px-4">

          {/* ── Header block ── */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A7A4A]/20 bg-[#1A7A4A]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1A7A4A]">
              <Bot className="w-3.5 h-3.5" />
              Clinic Lead Automation System
            </div>

            <h2 className="mt-5 text-[30px] sm:text-[34px] md:text-[46px] lg:text-[58px] font-bold text-neutral-charcoal leading-[1.12] font-heading max-w-3xl tracking-tight">
              Stop losing patients{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1A7A4A]">in your inbox.</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full bg-[#1A7A4A]/15"
                  aria-hidden
                />
              </span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-warm-gray max-w-2xl">
              We build smart Messenger and WhatsApp automation systems that reply
              instantly, qualify patients, and guide them toward booking — so your
              team never has to chase a cold lead again.
            </p>
          </div>

          {/* ── Stat row ── */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-on-scroll">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-[#1A7A4A]/15 bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-[22px] font-bold text-[#1A7A4A] leading-none font-heading">
                  {value}
                </span>
                <span className="text-[13px] text-warm-gray leading-tight">{label}</span>
              </div>
            ))}
          </div>

          {/* ── Two-column body ── */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-7 md:gap-10 items-start animate-on-scroll">

            {/* Left — included items */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A7A4A] mb-5">
                What&apos;s Included
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {includedItems.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-3 rounded-xl border border-light-border bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:border-[#1A7A4A]/30 hover:shadow-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1A7A4A]/8 transition-colors group-hover:bg-[#1A7A4A]/15">
                      <Icon className="w-3.5 h-3.5 text-[#1A7A4A]" />
                    </span>
                    <span className="text-[13.5px] md:text-[14px] text-neutral-charcoal leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA card (upgraded) */}
            <div className="lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-3xl bg-[#1A7A4A] p-5 sm:p-6 md:p-8 shadow-xl">

                {/* decorative circles */}
                <span
                  className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5"
                  aria-hidden
                />

                <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 mb-3">
                  Ready to get started?
                </p>

                <h3 className="relative text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white leading-snug font-heading">
                  Build your clinic automation system today.
                </h3>

                <p className="relative mt-3 text-[13px] sm:text-[14px] text-white/75 leading-relaxed">
                  Turn Facebook, Instagram, and WhatsApp inquiries into organized,
                  qualified appointments — automatically.
                </p>

                {/* trust signals */}
                <ul className="relative mt-5 space-y-2">
                  {[
                    "Setup in 5–7 business days",
                    "Works with your existing Meta Ads",
                    "No monthly software fee",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-[13px] text-white/80">
                      <Check className="w-3.5 h-3.5 shrink-0 text-white" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6">
                  <WhatsAppButton
                    size="large"
                    label="Build My Automation System"
                    className="w-full justify-center"
                  />
                </div>

                <p className="relative mt-3 text-center text-[11px] text-white/45">
                  Free consultation · No commitment
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}