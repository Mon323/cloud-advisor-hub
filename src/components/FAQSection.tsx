import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does a tax accounting firm in Toronto offer?",
    a: "MyCloud Advisor in Toronto offers a complete solution for all your tax and accounting needs including bookkeeping, payroll, tax planning and more. We also offer a free consultation to discuss your personal circumstances to see how we can help you with your business or personal taxes.",
  },
  {
    q: "Does MyCloud Advisor have experience dealing with tax laws in Toronto and Canada?",
    a: "Yes. Our team of qualified professionals stays up-to-date with the latest Canadian tax laws and regulations, ensuring your business remains fully compliant while minimizing your tax burden.",
  },
  {
    q: "How much do you charge for tax accounting services?",
    a: "Our pricing is transparent and competitive. We offer customized packages based on your specific needs. Contact us for a free consultation to discuss pricing.",
  },
  {
    q: "Can you provide references from previous clients in Toronto?",
    a: "Absolutely. We have over 200 five-star Google reviews and numerous satisfied clients across the Greater Toronto Area. We're happy to connect you with references upon request.",
  },
  {
    q: "Does MyCloud Advisor have a team of knowledgeable and qualified tax professionals?",
    a: "Yes. Our team consists of experienced CPAs and tax professionals who are dedicated to providing exceptional service and staying current with industry developments.",
  },
  {
    q: "Do you work with people in the Real Estate or Mortgage industry?",
    a: "Yes, we have extensive experience working with real estate professionals, mortgage brokers, and investors. We understand the unique tax considerations in this industry.",
  },
];

const FAQSection = () => (
  <section className="bg-section-alt py-16 md:py-24">
    <div className="container">
      <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-secondary">
        Frequently Asked Questions
      </p>
      <h2 className="mt-2 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Got Questions? We Have Answers
      </h2>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="font-body text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
