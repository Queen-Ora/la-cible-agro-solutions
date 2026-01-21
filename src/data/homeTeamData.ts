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

import teamApelete from "@/assets/team-apelete.jpg";
import teamKokou from "@/assets/team-kokou.jpg";
import teamAma from "@/assets/team-ama.jpg";
import teamKomi from "@/assets/team-komi.jpg";
import teamAkossiwa from "@/assets/team-akossiwa.jpg";

export const homeTeamData: HomeTeamMember[] = [
  {
    id: "apelete",
    name: "Apélété AGBODJAN",
    role: "Fondateur & Directeur Général",
    image: teamApelete,
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
    image: teamKokou,
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "ama",
    name: "Ama ADADE",
    role: "Responsable Formation",
    image: teamAma,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "komi",
    name: "Komi AKLESSO",
    role: "Expert Agronome",
    image: teamKomi,
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "akossiwa",
    name: "Akossiwa DZIFA",
    role: "Chargée de Projet",
    image: teamAkossiwa,
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
];
