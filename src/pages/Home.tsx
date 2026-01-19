import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { servicesData } from "@/data/servicesData";
import { statsData } from "@/data/statsData";

import heroImage from "@/assets/hero-farm.jpg";
import heroConsulting from "@/assets/hero-consulting.jpg";
import heroFormation from "@/assets/hero-formation.jpg";
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

// Carousel slides data
const carouselSlides = [
  {
    image: heroImage,
    //badge: "Cabinet de conseil en agrobusiness • Depuis 2021",
    title: "La Cible SARL, leader en création et en gestion de",
    highlight: "fermes agro-pastorales rentables",
    description:
      "De l’idée au terrain, nous accompagnons chaque étape de votre projet agricole.",
      },

  {
    image: heroConsulting,
    badge: "Conseil & Accompagnement personnalisé",
    title: "Un accompagnement expert pour",
    highlight: "transformer votre vision en réalité",
    description:
      "Nos consultants expérimentés vous guident à chaque étape de votre projet agricole, de l'étude de faisabilité jusqu'à la mise en œuvre opérationnelle.",
  },
  {
    image: heroFormation,
    badge: "Formations professionnelles certifiées",
    title: "Développez vos compétences avec",
    highlight: "nos formations en agrobusiness",
    description:
      "Bénéficiez de programmes de formation adaptés à tous les niveaux pour maîtriser les techniques modernes de l'agriculture et de l'élevage.",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    const slideInterval = setInterval(nextSlide, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <main>
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={carouselSlides[currentSlide].image}
              alt="Ferme agro-pastorale africaine"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
                  {carouselSlides[currentSlide].badge}
                </span>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
                  {carouselSlides[currentSlide].title}{" "}
                  <span className="text-accent">{carouselSlides[currentSlide].highlight}</span>
                </h1>

                <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
                  {carouselSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators with Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative flex items-center justify-center"
              aria-label={`Aller à la slide ${index + 1}`}
            >
              <div className="relative w-12 h-1.5 rounded-full bg-background/30 overflow-hidden">
                {currentSlide === index ? (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-accent rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index < currentSlide ? "bg-background/60" : "bg-transparent"
                    }`}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-background/50"
            />
          </div>
        </motion.div>
        */}
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-card border-y border-border">
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
                La Cible SARL est votre partenaire stratégique pour la réussite de vos projets agricoles et agronomiques.
Nous accompagnons les porteurs de projets, exploitants, investisseurs, organisations et institutions dans la conception, la structuration et le développement de projets agricoles rentables, durables et maîtrisés.

Notre rôle est simple : vous aider à prendre les bonnes décisions, au bon moment, en vous apportant une expertise technique et stratégique adaptée à vos objectifs et aux réalités du terrain. De l’idée initiale jusqu’à la mise en œuvre opérationnelle, nous sécurisons chaque étape de votre projet pour réduire les risques et maximiser les résultats.


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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
        
        <div className="container-custom relative z-10">
          <SectionTitle
            subtitle="Nos résultats"
            title="La Cible en chiffres"
            description="Des résultats concrets qui témoignent de notre engagement et de notre expertise dans l'accompagnement de vos projets agricoles."
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={serviceConsultation}
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container-custom relative z-10">
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

      {/* CTA Section - Nous contacter */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroConsulting}
            alt="Nous contacter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="container-custom text-center relative z-10">
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
            <p className="text-primary-foreground/90 text-lg mb-8">
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
                className="rounded-full text-base px-8 bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
