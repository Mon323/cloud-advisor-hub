import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-primary md:text-2xl">
          MyCloud <span className="text-gradient-gold">Advisor</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:4167072874" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4 text-secondary" />
            416-707-2874
          </a>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            Request a Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm font-medium text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:4167072874" className="mt-2 flex items-center gap-2 py-3 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4 text-secondary" />
            416-707-2874
          </a>
          <Button className="mt-2 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            Request a Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
