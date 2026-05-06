"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "We already have a social media page. Why are we still not getting enough inquiries?",
    answer: `Most clinics have a page but lack a system. Here's why it's not working:

• Random posts — no consistency, so your audience ignores you
• No active ads — organic reach alone is not enough anymore
• No lead follow-up system — inquiries come and go unanswered

Solution: A proper marketing system brings you the right type of inquiries, consistently.`,
  },
  {
    question: "Does Meta Ads work for clinics in Sri Lanka?",
    answer: `Yes, exceptionally well. Sri Lanka has over 7+ million highly active Facebook & Instagram users. However, generic "boost post" clicks don't work anymore. 

We generate leads for clinics by explicitly targeting high-intent demographics in specific areas (Colombo suburbs, Kandy, Galle, etc.) using custom Meta Ad strategies that bypass the "price shoppers" and attract serious patients.`,
  },
  {
    question: "Can I see results before paying the full monthly fee?",
    answer: `Yes. We believe in earning our keep. 

That's why our process starts with a Free Clinic Audit, followed by a month-to-month commitment. You only pay for management when you see clear patient inquiry growth. You always control the actual ad budget directly on Meta/Google platforms.`,
  },
  {
    question: "How much Meta Ads budget do I need?",
    answer: `It depends on your clinic type and location. 

• Minimum: LKR 20,000–40,000/month
• Recommended: LKR 60,000–100,000/month

You pay the ad budget directly to Meta — we manage & optimize it daily for the best results without taking a percentage cut.`,
  },
  {
    question: "Will this take too much of my time?",
    answer: `Not at all. Here's your total time commitment:

• Weekly status updates — 5 min WhatsApp chat
• Monthly review call — 30 minutes
• Approve content once per week — 10 minutes

You focus on treating patients. We handle the content, ads, posting, and optimization.`,
  },
];

export function FAQSection() {
  return (
    <SectionWrapper background="offwhite" id="faq" divider={false}>
      <div className="animate-on-scroll text-center mb-10 md:mb-14">
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#1C1C1E] mb-4 font-heading leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="animate-on-scroll max-w-3xl mx-auto">
        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-white border border-[#E5E5E0] rounded-xl px-5 overflow-hidden transition-all duration-300 data-[state=open]:shadow-md data-[state=open]:border-[#1A7A4A]/20 faq-item"
            >
              <AccordionTrigger className="text-left text-[16px] md:text-[18px] font-bold text-[#1C1C1E] py-5 hover:no-underline [&[data-state=open]]:text-[#1A7A4A] font-heading">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] md:text-[16px] text-[#4B5563] leading-relaxed pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}