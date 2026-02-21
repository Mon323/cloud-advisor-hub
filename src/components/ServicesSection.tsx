import { FileText, BookOpen, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: FileText,
    title: "Tax Services",
    description: "MyCloud Advisor offers personal and business tax services to help you maximize your returns.",
    color: "from-primary to-primary/80",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description: "Make wise business decisions with accurate and up-to-date financial records.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: TrendingUp,
    title: "Advisory Services",
    description: "Move your business forward with financial strategies and effective planning.",
    color: "from-primary to-primary/80",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    description: "We'll assess your company's financial performance and position objectively.",
    color: "from-secondary to-secondary/80",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="bg-section-alt py-20 md:py-28">
      <div className="container">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-secondary">
            Personalized Accounting Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Comprehensive financial solutions tailored to your unique needs
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120 + 300}ms` }}
            >
              {/* Accent top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color}`}>
                <s.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-all hover:gap-3"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
