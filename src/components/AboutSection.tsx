import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImg from "@/assets/about-meeting.jpg";
import skylineImg from "@/assets/toronto-skyline.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="bg-section-alt py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className={`grid gap-12 items-center md:grid-cols-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="MyCloud Advisor consultation" className="w-full h-auto object-cover" />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-6 -right-6 w-40 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-card hidden md:block">
              <img src={skylineImg} alt="Toronto skyline" className="w-full h-full object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/20 -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-secondary">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Professional Tax & Accounting Services In Toronto & Mississauga
            </h2>
            <p className="mt-5 font-body leading-relaxed text-muted-foreground">
              A Professional Accountant (PA) in Toronto that helps people and businesses grow. MyCloud Advisor is a PA Firm specializing in a wide range of services including corporate tax returns, financial statements, tax filing, international and real estate tax and advisory services.
            </p>
            <p className="mt-4 font-body leading-relaxed text-muted-foreground">
              We help small businesses as well as multinational organizations better manage their money. We have clients in Brampton, Toronto, Barrie, Mississauga, and throughout Ontario — using state of the art technology to build strong client relationships.
            </p>
            <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
