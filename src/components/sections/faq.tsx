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
    question:
      "We already have a social media page. Why are we still not getting enough inquiries?",
    answer: `Most clinics have a page but lack a system. Here's why it's not working:

• Random posts — no consistency, so your audience ignores you
• No active ads — organic reach alone is not enough anymore
• No content strategy — you're posting entertainment, not trust-building content
• No lead follow-up system — inquiries come and go unanswered

Solution: A proper marketing system brings you the right type of inquiries, consistently. Not just likes and comments.`,
  },
  {
    question: "Will this bring only people asking for price?",
    answer: `Short answer: No. Our campaigns are designed to attract serious patients, not price shoppers.

Here's how:
• We target specific audiences (age, location, interests — and exclude bargain hunters)
• Our content is educational — showing treatment info, not "cheapest price" posts
• We use trust-building posts (credentials, testimonials, before-after results)
• Landing pages ask treatment-related questions, not price — so you filter out the wrong people

Result: You get serious patients who are ready for a consultation, not just price comparisons.`,
  },
  {
    question: "How much Meta Ads budget do I need?",
    answer: `It depends on your clinic type and location. Here's a general guide:

• Minimum: LKR 5,000–10,000/week (LKR 20,000–40,000/month)
• Recommended: LKR 15,000–25,000/week (LKR 60,000–100,000/month)
• Aggressive growth: LKR 30,000+/week

Based on your clinic type and location, we'll recommend the best budget split. You pay the ad budget directly — we manage & optimize it daily for the best results.`,
  },
  {
    question: "Will this take too much of my time?",
    answer: `Not at all. Here's your total time commitment:

• Weekly status updates — 5 min WhatsApp chat
• Monthly review call — 30 minutes
• Approve content once per week — 10 minutes

That's it. You focus on your clinic and treating patients. We handle the entire marketing system — content, ads, posting, and optimization.`,
  },
  {
    question: "Do I need to make a big upfront payment?",
    answer: `No. Here's how our payment works:

✅ No large upfront payment required
✅ Month-to-month billing (no lock-in contract)
✅ Clear deliverables agreed before we start
✅ If we don't deliver the agreed work, we fix it at no extra charge

It's a trust-based model. You pay your package amount, we deliver the work. Simple.`,
  },
];

export function FAQSection() {
  return (
    <SectionWrapper background="white" id="faq">
      <div className="animate-on-scroll text-center mb-8 md:mb-14">
        <div className="premium-divider mx-auto mb-4 md:mb-6" />
        <h2 className="heading-lg mb-3 md:mb-5">
          Frequently Asked{" "}
          <span className="text-gold-gradient">Questions</span>
        </h2>
      </div>

      <div className="animate-on-scroll max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-cream/50 border border-light-border rounded-xl md:rounded-2xl px-4 md:px-6 overflow-hidden transition-all hover:shadow-sm hover:border-gold/20"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-navy py-4 md:py-5 hover:no-underline [&[data-state=open]]:text-gold-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-sm text-warm-gray leading-relaxed pb-4 md:pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
