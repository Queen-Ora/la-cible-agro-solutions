import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { teamData, TeamMember } from "@/data/teamData";

import founderImage from "@/assets/founder-apelete.jpg";

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const isFounder = member.isFounder;

  if (isFounder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="lg:col-span-2 bg-card rounded-2xl overflow-hidden shadow-elevated"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto">
            <img
              src={founderImage}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              Fondateur
            </span>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-4">{member.role}</p>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 shadow-soft"
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-1">
        {member.name}
      </h3>
      <p className="text-primary text-sm font-medium text-center mb-4">
        {member.role}
      </p>
      <p className="text-muted-foreground text-sm text-center leading-relaxed">
        {member.bio}
      </p>
    </motion.div>
  );
};

const Team = () => {
  const founder = teamData.find((m) => m.isFounder);
  const otherMembers = teamData.filter((m) => !m.isFounder);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Notre force
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Notre équipe
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une équipe d'experts passionnés, dirigée par Apélété, engagée à 
              accompagner votre réussite en agrobusiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {founder && <TeamMemberCard member={founder} index={0} />}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionTitle
            subtitle="Les équipes"
            title="Des professionnels à votre service"
            description="Nos différentes équipes travaillent en synergie pour vous offrir un accompagnement complet."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {otherMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Ce qui nous unit"
            title="Nos valeurs d'équipe"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque projet que nous entreprenons.",
              },
              {
                title: "Intégrité",
                description: "Honnêteté et transparence sont au cœur de nos relations.",
              },
              {
                title: "Innovation",
                description: "Nous adoptons les dernières pratiques pour des résultats optimaux.",
              },
              {
                title: "Engagement",
                description: "Votre succès est notre priorité absolue.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
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
              Travaillez avec nos experts
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Notre équipe est prête à vous accompagner dans votre projet agro-pastoral.
              Prenez rendez-vous dès aujourd'hui.
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

export default Team;
