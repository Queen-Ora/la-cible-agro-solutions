import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { servicesData } from "@/data/servicesData";
import { statsData } from "@/data/statsData";

import heroImage from "@/assets/hero-farm.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceConseil from "@/assets/service-conseil.jpg";
import serviceFerme from "@/assets/service-ferme.jpg";
import serviceFormation from "@/assets/service-formation.jpg";

const serviceImages: Record<string, string> = {
  "service-consultation.jpg": serviceConsultation,
  "service-conseil.jpg": serviceConseil,
  "service-ferme.jpg": serviceFerme,
  "service-formation.jpg": serviceFormation,
};

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Ferme agro-pastorale africaine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
                Cabinet de conseil en agrobusiness • Depuis 2021
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6"
            >
              La Cible SARL, leader en création et en gestion de{" "}
              <span className="text-accent">fermes agro-pastorales rentables</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed"
            >
              Fondé par Apélété, notre cabinet accompagne les entrepreneurs agricoles 
              vers la réussite. Plus de 3 000 clients nous font confiance à travers 
              l'Afrique, l'Europe, l'Asie et les États-Unis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="btn-accent rounded-full text-base px-8">
                <Link to="/services">
                  Découvrir nos services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Link to="/appointment">Prendre un rendez-vous</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-background/50"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Qui sommes-nous
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Votre partenaire de confiance en agrobusiness
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fondé en 2021 par Apélété, La Cible SARL est un cabinet spécialisé dans 
                le conseil, la création et la gestion de fermes agro-pastorales rentables. 
                Notre expertise couvre l'ensemble du continent africain et s'étend à 
                l'international.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Expertise reconnue en agrobusiness",
                  "Accompagnement personnalisé",
                  "Présence internationale",
                  "Plus de 3 000 clients satisfaits",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-primary rounded-full">
                <Link to="/about">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={serviceFormation}
                  alt="Formation en agrobusiness"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-elevated">
                <div className="font-serif text-3xl font-bold">+3000</div>
                <div className="text-sm text-primary-foreground/80">Clients accompagnés</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionTitle
            subtitle="Nos services"
            title="Des solutions adaptées à vos besoins"
            description="Découvrez notre gamme complète de services pour accompagner votre projet agricole de la conception à la réussite."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                imageUrl={serviceImages[service.image]}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="btn-primary rounded-full">
              <Link to="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Prêt à lancer votre projet agro-pastoral ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Prenez rendez-vous avec nos experts et bénéficiez d'un accompagnement 
              personnalisé pour concrétiser votre vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-accent rounded-full text-base px-8">
                <Link to="/appointment">
                  Prendre un rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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

export default Home;
