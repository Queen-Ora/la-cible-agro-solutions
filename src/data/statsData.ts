export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const statsData: Stat[] = [
  {
    id: "clients",
    value: "+3000",
    label: "Clients accompagnés",
    description: "Entrepreneurs et investisseurs guidés vers le succès"
  },
  {
    id: "presence",
    value: "4",
    label: "Continents",
    description: "Afrique, Europe, Asie et Amérique"
  },
  {
    id: "experience",
    value: "2021",
    label: "Depuis",
    description: "Cabinet officiellement enregistré"
  },
  {
    id: "projets",
    value: "500+",
    label: "Projets réalisés",
    description: "Fermes créées et accompagnées"
  }
];
