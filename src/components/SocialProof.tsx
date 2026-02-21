import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => (
  <section className="bg-card py-16 md:py-24">
    <div className="container text-center">
      <div className="flex items-center justify-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
        ))}
      </div>
      <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
        MyCloud Advisor is a Highly Rated PA Firm in Toronto
      </h2>
      <p className="mx-auto mt-4 max-w-3xl font-body text-muted-foreground leading-relaxed">
        With over <span className="font-semibold text-foreground">200 5-star reviews</span> on Google, MyCloud Advisor has also won awards on Clutch 2 years in a row, featured in the Toronto Star and is one of the Best Companies for 2022 on "Three Best Rated".
      </p>
      <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
        Contact Us
      </Button>
    </div>
  </section>
);

export default SocialProof;
