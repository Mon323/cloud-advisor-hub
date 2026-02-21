import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const awards = [
  { name: "Google Reviews", detail: "200+ 5-Star" },
  { name: "Clutch Award", detail: "2 Years in a Row" },
  { name: "Toronto Star", detail: "Featured" },
  { name: "Three Best Rated", detail: "Best 2022" },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-card py-20 md:py-28">
      <div className={`container transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center justify-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-7 w-7 fill-secondary text-secondary" />
          ))}
        </div>
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          MyCloud Advisor is a Highly Rated<br className="hidden md:block" /> PA Firm in Toronto
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center font-body text-lg text-muted-foreground leading-relaxed">
          With over <span className="font-semibold text-foreground">200 5-star reviews</span> on Google, MyCloud Advisor has also won awards on Clutch 2 years in a row, featured in the Toronto Star and is one of the Best Companies for 2022 on "Three Best Rated".
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {awards.map((a, i) => (
            <div
              key={a.name}
              className={`rounded-xl border border-border bg-muted/30 p-6 text-center transition-all duration-700 delay-${i * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <p className="font-display text-lg font-bold text-foreground">{a.detail}</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{a.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
