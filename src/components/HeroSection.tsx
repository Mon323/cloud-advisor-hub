import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "200+", label: "5-Star Reviews" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Clients Served" },
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Professional accounting team" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 font-body text-sm font-semibold uppercase tracking-widest text-secondary"
        >
          Tax, Accounting & Bookkeeping
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
        >
          Services For Small Businesses, Individuals & Corporations{" "}
          <span className="text-gradient-gold">Across Canada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 font-body text-lg leading-relaxed text-primary-foreground/80"
        >
          Our business is taking care of your business. Trusted by hundreds of clients in Toronto, Mississauga, Brampton, and throughout Ontario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-4 space-y-2"
        >
          {["Free Consultation", "Transparent Pricing", "Award-Winning Service"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span className="font-body text-sm font-medium">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 shadow-lg"
          >
            Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6"
          >
            Our Services
          </Button>
        </motion.div>
      </div>
    </div>

    {/* Stats bar */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border"
    >
      <div className="container flex flex-wrap items-center justify-center gap-8 py-6 md:gap-16 md:py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
            <p className="mt-1 font-body text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
