export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  isFounder?: boolean;
}

export const teamData: TeamMember[] = [
  {
    id: "apelete",
    name: "Apélété",
    role: "Fondateur & Directeur Général",
    bio: "Entrepreneur visionnaire et expert en agrobusiness, Apélété a fondé La Cible SARL en 2021 avec une mission claire : accompagner les entrepreneurs agricoles vers la réussite. Fort de son expérience internationale et de sa connaissance approfondie du secteur agro-pastoral, il a guidé plus de 3 000 clients à travers l'Afrique, l'Europe, l'Asie et les États-Unis. Sa vision : démocratiser l'accès à une expertise agricole de qualité et contribuer au développement durable du secteur.",
    image: "founder-apelete.jpg",
    isFounder: true
  },
  {
    id: "equipe-conseil",
    name: "Équipe Conseil",
    role: "Consultants Seniors",
    bio: "Notre équipe de consultants seniors rassemble des professionnels expérimentés en agronomie, gestion d'entreprise et développement rural. Chaque membre apporte une expertise unique pour offrir un accompagnement complet à nos clients.",
    isFounder: false
  },
  {
    id: "equipe-formation",
    name: "Équipe Formation",
    role: "Formateurs Experts",
    bio: "Nos formateurs sont des praticiens chevronnés qui allient théorie et pratique. Ils transmettent leurs connaissances avec passion et adaptent leurs méthodes pédagogiques aux besoins spécifiques de chaque apprenant.",
    isFounder: false
  },
  {
    id: "equipe-terrain",
    name: "Équipe Terrain",
    role: "Superviseurs de Projets",
    bio: "Présents sur le terrain, nos superviseurs assurent le suivi opérationnel des projets de création et de gestion de fermes. Leur expertise technique garantit la mise en œuvre réussie de chaque projet.",
    isFounder: false
  }
];
