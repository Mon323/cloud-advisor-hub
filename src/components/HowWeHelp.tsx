import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Scale, ShieldCheck } from "lucide-react";

const HowWeHelp = () => {
  const { ref: ref1, isVisible: vis1 } = useScrollAnimation();
  const { ref: ref2, isVisible: vis2 } = useScrollAnimation();

  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container space-y-24">
        {/* Section 1 */}
        <div ref={ref1} className={`grid gap-12 items-center md:grid-cols-2 transition-all duration-700 ${vis1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
              <Briefcase className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              How a Professional Tax Accounting Firm Helps Small Business
            </h2>
            <p className="mt-5 font-body leading-relaxed text-muted-foreground">
              As a Professional Accounting (PA) Firm, we do more than simply fill out your tax forms. Our team helps you maintain focus on your business instead of non-wealth generating tasks like bookkeeping.
            </p>
            <p className="mt-3 font-body leading-relaxed text-muted-foreground">
              We offer tax strategies that help you grow your business while minimizing your tax burden. Tax rules change frequently — a Professional Accounting Firm can take away all your tax uncertainties while ensuring compliance.
            </p>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Contact Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "100%", label: "Tax Compliant" },
              { val: "24/7", label: "Support Available" },
              { val: "15+", label: "Industries Served" },
              { val: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-muted/30 p-6 text-center">
                <p className="font-display text-2xl font-bold text-primary">{stat.val}</p>
                <p className="mt-1 font-body text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div ref={ref2} className={`grid gap-12 items-center md:grid-cols-2 transition-all duration-700 ${vis2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="order-2 md:order-1">
            <div className="rounded-2xl bg-primary p-10 text-primary-foreground">
              <Scale className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold">Compliance & Growth</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-primary-foreground/80">
                A PA will work with you to ensure your business is compliant with tax laws and regulations, help create a business growth strategy, and network with others in your industry.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <span className="font-body text-sm font-medium">CRA Compliant</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Why Hire a Professional Accountant (PA) Firm for Your Business?
            </h2>
            <p className="mt-5 font-body leading-relaxed text-muted-foreground">
              Looking at the number of startups that fail to make it past the first year, it has become apparent that most businesses do not understand the benefit of working with a PA. With a deep understanding of financial data, a PA will work with you to ensure compliance and help create a growth strategy.
            </p>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
