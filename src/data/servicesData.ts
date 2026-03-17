export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  pdfFile?: string;
  pdfLabel?: string;
  keyPerks: string[];
}

export const servicesData: Service[] = [
  {
    id: "consultations",
    title: "Consultations",
    description:
      "Bénéficiez de l'expertise de nos consultants pour évaluer vos projets agro-pastoraux et définir les meilleures stratégies de développement.",
    longDescription:
      "Nos consultations personnalisées vous permettent d'obtenir une analyse approfondie de votre projet agricole. Nous évaluons la faisabilité, identifions les opportunités et les risques, et vous proposons des recommandations concrètes pour maximiser votre rentabilité.",
    icon: "MessageSquare",
    image: "service-consultation.jpg",
    pdfFile: "/documents/brochure-consultations.pdf",
    pdfLabel: "Brochure Consultations",
    keyPerks: ["Expertise reconnue", "Accompagnement personnalise", "Résultats mesurables"],
  },
  {
    id: "conseils-orientation",
    title: "Services conseils et orientation",
    description:
      "Un accompagnement stratégique pour orienter vos décisions d'investissement et optimiser la gestion de vos exploitations agricoles.",
    longDescription:
      "Notre service conseil vous guide dans toutes les étapes de votre projet. De l'analyse de marché à la planification financière, nous vous aidons à prendre des décisions éclairées pour assurer le succès de votre entreprise agricole.",
    icon: "Compass",
    image: "service-conseil.jpg",
    pdfFile: "/documents/guide-conseils-orientation.pdf",
    pdfLabel: "Guide Conseils & Orientation",
    keyPerks: ["Diagnostic de l'exploitation agricole", "Orientation vers les filières rentables", "Suivi technique des exploitations"]
  },
  {
    id: "creation-gestion-fermes",
    title: "Création et gestion de fermes",
    description:
      "De la conception à l'exploitation, nous vous accompagnons dans la création et la gestion efficace de fermes agro-pastorales rentables.",
    longDescription:
      "Nous prenons en charge l'intégralité du processus de création de votre ferme : étude de faisabilité, choix du terrain, conception des infrastructures, sélection des cultures et du cheptel, mise en place des systèmes de gestion, et suivi opérationnel.",
    icon: "Tractor",
    image: "service-ferme.jpg",
    pdfFile: "/documents/guide-creation-fermes.pdf",
    pdfLabel: "Guide Création de Fermes",
    keyPerks: ["Choix du site et acquisition des terrains", "Planification et aménagement de fermes", "Gestion de l'exploitation"]
  },
  {
    id: "formations-expertise",
    title: "Formations et expertise en agrobusiness",
    description:
      "Des programmes de formation complets pour développer vos compétences et maîtriser les meilleures pratiques en agrobusiness.",
    longDescription:
      "Nos formations couvrent tous les aspects de l'agrobusiness moderne : techniques agricoles, gestion financière, marketing agricole, technologies innovantes. Dispensées par des experts du domaine, elles vous préparent à réussir dans le secteur agro-pastoral.",
    icon: "GraduationCap",
    image: "service-formation.jpg",
    pdfFile: "/documents/catalogue-formations.pdf",
    pdfLabel: "Catalogue des Formations",
    keyPerks: ["Formation en ligne sur l'agrobusiness", "Formation en présentiel dans nos fermes", "Renforcement des capacités de votre équipe chez vous"]
  },
];
