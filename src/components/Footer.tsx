import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => (
  <footer id="contact">
    {/* CTA Band */}
    <div className="bg-hero py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-primary-foreground/70">
          Book a free consultation and discover how MyCloud Advisor can help your business thrive.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-10 py-6 shadow-lg"
        >
          Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>

    {/* Footer links */}
    <div className="bg-primary py-14">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#" className="font-display text-2xl font-bold text-primary-foreground">
              MyCloud <span className="text-gradient-gold">Advisor</span>
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/60">
              Professional tax, accounting & bookkeeping services for small businesses, individuals and corporations across Canada.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Our Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-primary-foreground/60 transition-colors hover:text-secondary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground">Contact</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="tel:4167072874" className="flex items-center gap-3 font-body text-sm text-primary-foreground/60 transition-colors hover:text-secondary">
                  <Phone className="h-4 w-4 text-secondary" /> 416-707-2874
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 text-secondary" /> info@mycloudadvisor.ca
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" /> Toronto & Mississauga, ON
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} MyCloud Advisor. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
