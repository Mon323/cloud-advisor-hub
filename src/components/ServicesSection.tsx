import { FileText, BookOpen, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Tax Services",
    description: "MyCloud Advisor offers personal and business tax services to help you maximize your returns.",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description: "Make wise business decisions with accurate and up-to-date financial records.",
  },
  {
    icon: TrendingUp,
    title: "Advisory Services",
    description: "Move your business forward with financial strategies and effective planning.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    description: "We'll assess your company's financial performance and position objectively.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-section-alt py-16 md:py-24">
    <div className="container">
      <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-secondary">
        Personalized Accounting Services
      </p>
      <h2 className="mt-2 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
        Our Services
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-lg bg-card p-8 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
            >
              View Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
