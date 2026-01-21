import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { teamData, TeamMember } from "@/data/teamData";
import TeamCarousel from "@/components/home/TeamCarousel";

import founderImage from "@/assets/founder-apelete.jpg";
import bannerBgTeam from "@/assets/banner-bg-team.jpg";

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const isFounder = member.isFounder;

  if (isFounder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="lg:col-span-2 bg-card rounded-2xl overflow-hidden shadow-elevated"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <motion.div 
            className="h-64 md:h-auto overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={founderImage}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 w-fit"
            >
              Fondateur
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-3xl font-bold text-foreground mb-2"
            >
              {member.name}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary font-medium mb-4"
            >
              {member.role}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              {member.bio}
            </motion.p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card rounded-xl p-6 shadow-soft group cursor-pointer"
    >
      <motion.div 
        className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Users className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
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
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgTeam}
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
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3"
            >
              Notre force
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Notre équipe
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Une équipe d'experts passionnés, dirigée par Apélété, engagée à 
              accompagner votre réussite en agrobusiness.
            </motion.p>
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

      {/* Team Carousel */}
      <TeamCarousel />

      {/* Team Section */}
      <section className="section-padding bg-muted relative overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 text-primary"
        >
          <Sparkles className="w-40 h-40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 text-accent"
        >
          <Sparkles className="w-32 h-32" />
        </motion.div>

        <div className="container-custom relative z-10">
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-4 h-4 rounded-full bg-primary mx-auto mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 w-64 h-64 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-0 bottom-0 w-64 h-64 bg-background rounded-full blur-3xl"
        />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
            >
              Travaillez avec nos experts
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 mb-8"
            >
              Notre équipe est prête à vous accompagner dans votre projet agro-pastoral.
              Prenez rendez-vous dès aujourd'hui.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild size="lg" className="btn-accent rounded-full">
                <Link to="/appointment">
                  Prendre un rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Team;
