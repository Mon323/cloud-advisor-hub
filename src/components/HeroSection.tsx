import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="bg-hero relative overflow-hidden py-20 md:py-32">
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

    <div className="container relative z-10 text-center">
      <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-secondary">
        Tax, Accounting & Bookkeeping
      </p>
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
        Services For Small Businesses, Individuals & Corporations Across Canada
      </h1>
      <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-primary-foreground/80">
        Our business is taking care of your business
      </p>
      <Button
        size="lg"
        className="mt-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6"
      >
        Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

export default HeroSection;
