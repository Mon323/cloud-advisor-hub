import { Building2, UtensilsCrossed, UserCheck, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const specializations = [
  { icon: Building2, title: "Small Business Accounting", desc: "Tailored solutions for growing businesses" },
  { icon: UtensilsCrossed, title: "Accounting for Restaurants", desc: "Industry-specific financial management" },
  { icon: UserCheck, title: "Self Employed Individuals", desc: "Maximize deductions & minimize taxes" },
  { icon: Rocket, title: "Accounting for Startups", desc: "Financial foundations for new ventures" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-card py-20 md:py-28">
      <div className="container">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Clients Choose<br className="hidden md:block" /> MyCloud Advisor
          </h2>
          <p className="mt-5 font-body text-lg text-muted-foreground leading-relaxed">
            The majority of our clients stay with us long-term due to our availability, transparent pricing and quality of service in addition to our evolving knowledge of tax laws.
          </p>
          <Button className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
            Find Out More
          </Button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specializations.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-secondary hover:shadow-card-hover hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120 + 400}ms` }}
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-secondary/10">
                <s.icon className="h-10 w-10 text-primary transition-colors group-hover:text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all hover:gap-3"
              >
                How we help <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
