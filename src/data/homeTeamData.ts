export interface HomeTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export const homeTeamData: HomeTeamMember[] = [
  {
    id: "apelete",
    name: "Apélété AGBODJAN",
    role: "Fondateur & Directeur Général",
    image: "/placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "kokou",
    name: "Kokou MENSAH",
    role: "Responsable Conseil",
    image: "/placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "ama",
    name: "Ama ADADE",
    role: "Responsable Formation",
    image: "/placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "komi",
    name: "Komi AKLESSO",
    role: "Expert Agronome",
    image: "/placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "akossiwa",
    name: "Akossiwa DZIFA",
    role: "Chargée de Projet",
    image: "/placeholder.svg",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
];
