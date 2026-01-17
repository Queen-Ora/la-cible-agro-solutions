import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

import aboutImage from "@/assets/about-farm.jpg";
import founderImage from "@/assets/founder-apelete.jpg";

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                À propos de nous
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Qui sommes-nous ?
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                La Cible SARL est un cabinet de conseil spécialisé en agrobusiness, 
                fondé en 2021 par <strong className="text-foreground">Apélété</strong>. 
                Notre mission est d'accompagner les entrepreneurs agricoles, les investisseurs 
                et les porteurs de projets vers la réussite de leurs exploitations agro-pastorales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Avec une présence internationale couvrant l'Afrique, l'Europe, l'Asie 
                et les États-Unis, nous avons accompagné plus de 3 000 clients dans 
                la création et la gestion de fermes rentables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage}
                  alt="Vue aérienne de fermes agricoles en Afrique"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Notre histoire"
            title="Une vision née de la passion"
            description="Depuis 2021, La Cible SARL s'engage à transformer le paysage agricole africain."
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-soft"
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                En 2021, <strong className="text-foreground">Apélété</strong>, 
                entrepreneur visionnaire et passionné d'agrobusiness, fonde La Cible SARL 
                avec une conviction forte : l'agriculture africaine possède un potentiel 
                immense qui ne demande qu'à être exploité de manière professionnelle et durable.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fort de son expérience et de sa connaissance approfondie du secteur 
                agro-pastoral, Apélété a créé un cabinet capable d'offrir un accompagnement 
                complet : de la consultation initiale à la gestion opérationnelle des fermes, 
                en passant par la formation et le conseil stratégique.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aujourd'hui, La Cible SARL est fière d'avoir accompagné plus de 3 000 clients 
                à travers quatre continents, contribuant ainsi au développement d'une agriculture 
                moderne, rentable et respectueuse de l'environnement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Notre Mission",
                description:
                  "Accompagner les entrepreneurs agricoles vers la réussite en leur offrant une expertise de qualité et un accompagnement personnalisé dans la création et la gestion de fermes agro-pastorales rentables.",
              },
              {
                icon: Eye,
                title: "Notre Vision",
                description:
                  "Devenir le partenaire de référence en conseil agrobusiness à l'échelle internationale, en contribuant à la modernisation et à la professionnalisation du secteur agricole.",
              },
              {
                icon: Heart,
                title: "Nos Valeurs",
                description:
                  "Excellence, intégrité, innovation et engagement envers nos clients. Nous croyons en une agriculture durable qui profite aux communautés locales et préserve l'environnement.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Le Fondateur
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Apélété
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Entrepreneur visionnaire et expert reconnu en agrobusiness, Apélété est 
                le fondateur et directeur général de La Cible SARL. Sa passion pour 
                l'agriculture et son engagement envers le développement du secteur 
                agro-pastoral l'ont conduit à créer ce cabinet en 2021.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fort de son expérience internationale et de sa connaissance approfondie 
                des marchés agricoles, il a guidé plus de 3 000 clients vers le succès. 
                Son approche pragmatique et sa vision innovante font de lui un leader 
                respecté dans le domaine de l'agrobusiness.
              </p>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  Présence sur 4 continents : Afrique, Europe, Asie, Amérique
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={founderImage}
                    alt="Apélété - Fondateur de La Cible SARL"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-medium">
                  <span className="font-semibold">Fondateur & CEO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Rejoignez les 3 000+ clients qui nous font confiance
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Découvrez comment nous pouvons vous accompagner dans la réussite 
              de votre projet agro-pastoral.
            </p>
            <Button asChild size="lg" className="btn-accent rounded-full">
              <Link to="/appointment">
                Prendre un rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
