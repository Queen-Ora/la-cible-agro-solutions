import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Compass, Tractor, GraduationCap, LucideIcon, CheckCircle, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { servicesData, Service } from "@/data/servicesData";



import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceConseil from "@/assets/service-conseil.jpg";
import serviceFerme from "@/assets/service-ferme.jpg";
import serviceFormation from "@/assets/service-formation.jpg";
import bannerBgServices from "@/assets/banner-bg-services.jpg";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Compass,
  Tractor,
  GraduationCap,
};

const serviceImages: Record<string, string> = {
  "service-consultation.jpg": serviceConsultation,
  "service-conseil.jpg": serviceConseil,
  "service-ferme.jpg": serviceFerme,
  "service-formation.jpg": serviceFormation,
};

const ServiceDetailCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = iconMap[service.icon] || MessageSquare;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        index > 0 ? "mt-16 lg:mt-24" : ""
      }`}
    >
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={serviceImages[service.image]}
            alt={service.title}
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>
      </div>

      <div className={isReversed ? "lg:order-1" : ""}>
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          {service.longDescription}
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Expertise reconnue",
            "Accompagnement personnalisé",
            "Résultats mesurables",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="btn-primary rounded-full">
            <Link to="/appointment">
              Demander ce service
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <PaymentDropdown variant="service" />
          {service.pdfFile && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={service.pdfFile} download target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 w-4 h-4" />
                {service.pdfLabel || "Télécharger PDF"}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgServices}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Nos expertises
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nos services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La Cible SARL vous propose une gamme complète de services pour 
              accompagner votre projet agricole de la conception à la réussite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {servicesData.map((service, index) => (
            <ServiceDetailCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>


      {/* Process Section */}
      <section className="section-padding bg-muted relative overflow-hidden">
        {/* Decorative background */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.08, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
        
        <div className="container-custom relative z-10">
          <SectionTitle
            subtitle="Notre processus"
            title="Comment nous travaillons"
            description="Un accompagnement structuré pour garantir le succès de votre projet."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Évaluation initiale de votre projet et de vos objectifs.",
              },
              {
                step: "02",
                title: "Analyse",
                description: "Étude approfondie de faisabilité et recommandations.",
              },
              {
                step: "03",
                title: "Mise en œuvre",
                description: "Accompagnement dans la réalisation de votre projet.",
              },
              {
                step: "04",
                title: "Suivi",
                description: "Support continu pour optimiser vos résultats.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group"
              >
                <div className="bg-card rounded-xl p-6 shadow-soft h-full relative overflow-hidden">
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <motion.div 
                    className="font-serif text-4xl font-bold text-primary/20 mb-4 relative z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 relative z-10 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                </div>
                {index < 3 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contactez-nous pour discuter de vos besoins spécifiques. 
              Notre équipe d'experts est à votre écoute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent rounded-full">
                <Link to="/appointment">
                  Prendre un rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
