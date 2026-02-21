import { Building2, UtensilsCrossed, UserCheck, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const specializations = [
  { icon: Building2, title: "Small Business Accounting" },
  { icon: UtensilsCrossed, title: "Accounting for Restaurants" },
  { icon: UserCheck, title: "Self Employed Individuals" },
  { icon: Rocket, title: "Accounting for Startups" },
];

const WhyChooseUs = () => (
  <section className="bg-card py-16 md:py-24">
    <div className="container">
      <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Why Clients Choose MyCloud Advisor
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center font-body text-muted-foreground leading-relaxed">
        The majority of our clients stay with us long-term due to our availability, transparent pricing and quality of service in addition to our evolving knowledge of tax laws.
      </p>
      <div className="mt-8 text-center">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
          Find Out More
        </Button>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specializations.map((s) => (
          <div
            key={s.title}
            className="group flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-secondary hover:shadow-card"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <s.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
            >
              How we help <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
