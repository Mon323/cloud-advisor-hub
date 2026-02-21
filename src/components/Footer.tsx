import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-hero py-16">
    <div className="container">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <a href="#" className="font-display text-2xl font-bold text-primary-foreground">
            MyCloud <span className="text-gradient-gold">Advisor</span>
          </a>
          <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/70">
            Professional tax, accounting & bookkeeping services for small businesses, individuals and corporations across Canada.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {["Home", "Our Services", "About Us", "Contact Us"].map((l) => (
              <li key={l}>
                <a href="#" className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-secondary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground">Contact</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
              <Phone className="h-4 w-4 text-secondary" /> 416-707-2874
            </li>
            <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4 text-secondary" /> info@mycloudadvisor.ca
            </li>
            <li className="flex items-start gap-3 font-body text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4 mt-0.5 text-secondary" /> Toronto & Mississauga, ON
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center font-body text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} MyCloud Advisor. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
