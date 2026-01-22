import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "consultation",
    name: "Consultation",
    price: "50 000",
    period: "FCFA / séance",
    description: "Idéal pour un premier échange et des conseils ponctuels.",
    features: [
      "Séance de 1 heure",
      "Analyse de votre projet",
      "Conseils personnalisés",
      "Recommandations écrites",
    ],
  },
  {
    id: "accompagnement",
    name: "Accompagnement",
    price: "250 000",
    period: "FCFA / mois",
    description: "Un suivi régulier pour structurer votre projet agricole.",
    features: [
      "4 séances par mois",
      "Étude de faisabilité",
      "Plan d'affaires",
      "Suivi mensuel",
      "Support par email",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Projet Clé en Main",
    price: "Sur devis",
    period: "",
    description: "Solution complète de la conception à la réalisation.",
    features: [
      "Accompagnement complet",
      "Création de ferme",
      "Formation du personnel",
      "Suivi sur 12 mois",
      "Support prioritaire 24/7",
      "Garantie de résultats",
    ],
  },
];

const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 ${
        plan.popular ? "border-2 border-primary ring-4 ring-primary/10" : "border border-border"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
            Populaire
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          {plan.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="font-serif text-4xl font-bold text-primary">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-muted-foreground text-sm">{plan.period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={`w-full rounded-full ${
          plan.popular ? "btn-primary" : "btn-secondary"
        }`}
      >
        <Link to="/appointment">
          Réserver
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <SectionTitle
          subtitle="Nos tarifs"
          title="Des formules adaptées à vos besoins"
          description="Choisissez l'offre qui correspond le mieux à votre projet et bénéficiez d'un accompagnement sur mesure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Tous les prix sont en FCFA. Contactez-nous pour des offres personnalisées.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
