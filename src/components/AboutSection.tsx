import { Button } from "@/components/ui/button";

const AboutSection = () => (
  <section id="about" className="bg-section-alt py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Professional Tax & Accounting Services In Toronto & Mississauga
        </h2>
        <p className="mt-6 font-body leading-relaxed text-muted-foreground">
          A Professional Accountant (PA) in Toronto that helps people and businesses grow. MyCloud Advisor is a PA Firm specializing in a wide range of services including but not limited to corporate tax returns, financial statements, tax filing, international and real estate tax and advisory services. We help small businesses as well as multinational organizations better manage their money and become more successful.
        </p>
        <p className="mt-4 font-body leading-relaxed text-muted-foreground">
          We have clients in Brampton, Toronto, Barrie, Mississauga, and throughout Ontario. We take pride in using state of the art technology to build strong client relationships and exceed your expectations.
        </p>
        <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
