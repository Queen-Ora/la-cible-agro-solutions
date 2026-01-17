import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-secondary-foreground">
                  La Cible
                </span>
                <span className="text-xs text-secondary-foreground/70 -mt-1">
                  SARL
                </span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Leader en création et en gestion de fermes agro-pastorales rentables. 
              Votre partenaire de confiance depuis 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Liens rapides</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                Accueil
              </Link>
              <Link to="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                Qui sommes-nous
              </Link>
              <Link to="/services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                Nos services
              </Link>
              <Link to="/team" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                Notre équipe
              </Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                Nous contacter
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+22800000000" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+228 00 00 00 00</span>
              </a>
              <a href="mailto:contact@lacible-sarl.com" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@lacible-sarl.com</span>
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Lomé, Togo<br />Afrique de l'Ouest</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Suivez-nous</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-secondary-foreground/60 text-xs">
              Présence internationale :<br />
              Afrique • Europe • Asie • États-Unis
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © 2021 - {new Date().getFullYear()} La Cible SARL. Tous droits réservés.
            </p>
            <p className="text-secondary-foreground/60 text-sm">
              Fondé par <span className="text-secondary-foreground font-medium">Apélété</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
