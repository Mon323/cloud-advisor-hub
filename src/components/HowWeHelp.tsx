import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "How a Professional Tax Accounting Firm Helps Small Business",
    text: "As a Professional Accounting (PA) Firm, we do more than simply fill out your tax forms. Our team is well equipped to answer any tax questions you may have. By partnering with us, we can help you maintain focus on your business instead of non-wealth generating tasks like bookkeeping. One of the biggest ways a Professional Accounting Firm can help is by offering tax strategies that help you grow your business while minimizing your tax burden. Tax rules change frequently, and it is a tough job asking a business owner to keep track of all the changes. A Professional Accounting Firm can take away all your tax uncertainties while ensuring that your business remains tax compliant.",
  },
  {
    title: "Why Hire a Professional Accountant (PA) Firm for Your Business?",
    text: "Looking at the number of startups that fail to make it past the first year of business, and the challenges which the average business faces on a daily basis, it has become apparent that most of these businesses do not understand the benefit of working with a PA. With a deep understanding of financial data, a PA will work with you to ensure your business is compliant with tax laws and regulations. In addition, they can help you create a business growth strategy and even network with other people in your industry where possible.",
  },
];

const HowWeHelp = () => (
  <section className="bg-card py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-4xl space-y-16">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.title}</h2>
            <p className="mt-4 font-body leading-relaxed text-muted-foreground">{s.text}</p>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Contact Us
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeHelp;
