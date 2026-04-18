"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  { q: "We already have a social media page. Why are we still not getting enough inquiries?", a: "A page alone is not enough. Many clinics post without a clear plan for trust, inquiries, and follow-up. We help turn your page into a proper growth system that actually brings patient inquiries." },
  { q: "Will this bring only people asking for price?", a: "That usually happens when the message, ad, page, or follow-up is weak. Our goal is not just to bring more messages. It is to improve the quality of inquiries too, so you get serious patients." },
  { q: "How much budget do I need?", a: "There is no one number for every clinic. It depends on your clinic type, area, and goals. If your budget is too low to do this properly, we will tell you honestly." },
  { q: "Will this take too much of my time?", a: "No. That is one of the main reasons clinics work with us. We handle the marketing work so you do not have to manage everything yourself." },
  { q: "Do I need to make a big upfront payment?", a: "No. We keep the start simple and low risk. You do not need a heavy upfront commitment to see if this is the right fit." },
];

export function FAQSection() {
  return (
    <SectionWrapper background="white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="animate-on-scroll text-center mb-8 md:mb-12">
          <div className="premium-divider mx-auto mb-4 md:mb-6" />
          <h2 className="heading-lg mb-3 md:mb-5">Frequently Asked <span className="text-gold-gradient">Questions</span></h2>
        </div>
        <div className="animate-on-scroll">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-light-border">
                <AccordionTrigger className="py-3.5 md:py-5 text-sm md:text-lg font-medium text-navy hover:no-underline text-left" style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="body-md pb-3 md:pb-4">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  );
}
