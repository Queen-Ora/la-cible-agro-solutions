export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Kodjo AMOUZOU",
    role: "Entrepreneur Agricole",
    company: "Ferme Espoir",
    image: "/placeholder.svg",
    content: "Grâce à La Cible SARL, j'ai pu structurer mon projet de ferme avicole et obtenir un rendement exceptionnel dès la première année. L'accompagnement personnalisé a fait toute la différence.",
    rating: 5,
  },
  {
    id: "2",
    name: "Afi KPEGBA",
    role: "Investisseuse",
    company: "AgroInvest Togo",
    image: "/placeholder.svg",
    content: "Une équipe professionnelle et dévouée. Leurs conseils m'ont permis de diversifier mes investissements agricoles avec succès. Je recommande vivement leurs services.",
    rating: 5,
  },
  {
    id: "3",
    name: "Messan HOUNKPE",
    role: "Éleveur",
    image: "/placeholder.svg",
    content: "La formation en élevage de poulets de chair que j'ai suivie m'a ouvert les yeux sur les bonnes pratiques. Aujourd'hui, mon exploitation est rentable et bien gérée.",
    rating: 5,
  },
  {
    id: "4",
    name: "Adjoa LAWSON",
    role: "Agricultrice",
    company: "Bio Légumes",
    image: "/placeholder.svg",
    content: "L'étude de faisabilité réalisée par La Cible m'a évité de nombreuses erreurs. Leur expertise du terrain togolais est inégalée. Merci pour tout !",
    rating: 5,
  },
  {
    id: "5",
    name: "Edem TOGBUI",
    role: "Consultant Agricole",
    image: "/placeholder.svg",
    content: "En tant que professionnel du secteur, je reconnais la qualité du travail de La Cible SARL. Leur approche méthodique et leur connaissance du marché sont exemplaires.",
    rating: 5,
  },
];
