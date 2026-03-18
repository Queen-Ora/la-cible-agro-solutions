import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, CheckCircle, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import heroFormation from "@/assets/hero-formation.jpg";
import serviceFormation from "@/assets/service-formation.jpg";

const formations = [
  {
    title: "Techniques agricoles modernes",
    description: "Maîtrisez les méthodes de culture et d'élevage les plus performantes pour maximiser vos rendements.",
    points: ["Agriculture de précision", "Gestion intégrée des cultures", "Techniques d'irrigation avancées"],
    icon: BookOpen,
  },
  {
    title: "Gestion financière agricole",
    description: "Apprenez à gérer efficacement les finances de votre exploitation pour assurer sa pérennité.",
    points: ["Business plan agricole", "Gestion de trésorerie", "Accès aux financements"],
    icon: Award,
  },
  {
    title: "Marketing et commercialisation",
    description: "Développez vos compétences en commercialisation de produits agricoles sur les marchés locaux et internationaux.",
    points: ["Étude de marché", "Stratégies de vente", "Export et logistique"],
    icon: Users,
  },
];

const Formations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFormation} alt="Formations en agrobusiness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="http://agrobusinessafrique2026.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 hover:bg-accent/30 transition-colors cursor-pointer">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium text-sm">Conférence-Paris 2026</span>
            </a>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nos Formations
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Développez vos compétences en agrobusiness grâce à nos programmes de formation complets dispensés par des experts du domaine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                subtitle="Excellence académique"
                title="Des formations adaptées à vos besoins"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                La Cible SARL vous propose des programmes de formation complets pour développer vos compétences et maîtriser les meilleures pratiques en agrobusiness. Nos formations couvrent tous les aspects de l'agriculture moderne et de l'élevage.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dispensées par des experts du domaine, nos formations vous préparent à réussir dans le secteur agro-pastoral, que vous soyez débutant ou professionnel souhaitant se perfectionner.
              </p>
              <Button asChild className="btn-primary rounded-full">
                <Link to="/appointment">
                  S'inscrire à une formation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-elevated"
            >
              <img src={serviceFormation} alt="Formation en agrobusiness" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <SectionTitle
            subtitle="Nos programmes"
            title="Catalogue des formations"
            description="Choisissez parmi nos programmes de formation conçus pour répondre aux défis actuels du secteur agro-pastoral."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {formations.map((formation, index) => {
              const Icon = formation.icon;
              return (
                <motion.div
                  key={formation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{formation.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{formation.description}</p>
                  <ul className="space-y-2">
                    {formation.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Prêt à développer vos compétences ?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Contactez-nous pour en savoir plus sur nos formations et trouver le programme qui vous convient.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" className="rounded-full px-8">
                <Link to="/appointment">Prendre rendez-vous</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Formations;
