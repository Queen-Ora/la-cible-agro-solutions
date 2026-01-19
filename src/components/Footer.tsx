import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Column */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <img src="/src/assets/header-logo.png" alt="" className="w-6 h-6" />
              </div>
              <span className="font-serif text-lg font-bold text-foreground">
                La Cible <span className="text-xs text-muted-foreground">SARL</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Leader en création et en gestion de fermes agro-pastorales rentables.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold mb-3 text-foreground">Liens rapides</h4>
            <nav className="flex flex-col gap-1.5">
              {[
                { to: "/", label: "Accueil" },
                { to: "/about", label: "Qui sommes-nous" },
                { to: "/services", label: "Nos services" },
                { to: "/team", label: "Notre équipe" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-3 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+22800000000" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span>+228 00 00 00 00</span>
              </a>
              <a href="mailto:contact@lacible-sarl.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs">
                <Mail className="w-3.5 h-3.5" />
                <span>contact@lacible-sarl.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Lomé, Togo</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-3 text-foreground">Suivez-nous</h4>
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-2">
              Afrique • Europe • Asie • États-Unis
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© 2021 - {new Date().getFullYear()} La Cible SARL. Tous droits réservés.</p>
          <p>Fondé par <span className="text-foreground font-medium">Apélété</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
