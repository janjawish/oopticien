export const site = {
  name: "O’Opticien",
  shortName: "Oopticien",
  description:
    "Opticien indépendant à Mantes-la-Jolie : lunettes de vue et solaires, lentilles, contrôle de la vision, ajustages et réparations.",
  address: {
    street: "20 rue Porte aux Saints",
    postalCode: "78200",
    city: "Mantes-la-Jolie",
    full: "20 rue Porte aux Saints, 78200 Mantes-la-Jolie",
  },
  phone: "01 34 77 23 97",
  phoneHref: "+33134772397",
  email: "contact.oopticien@gmail.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=OOPTICIEN%2020%20rue%20Porte%20aux%20Saints%2078200%20Mantes-la-Jolie",
  socials: {
    instagram: "https://www.instagram.com/oopticien78200/",
    tiktok: "https://www.tiktok.com/@oopticien_78",
    snapchat: "https://www.snapchat.com/oopticien78200",
  },
  hours: [
    { days: "Lundi", time: "Fermé" },
    { days: "Mardi — jeudi", time: "10h–13h · 14h–19h" },
    { days: "Vendredi", time: "10h–12h · 14h–19h" },
    { days: "Samedi", time: "10h–13h · 14h–19h" },
    { days: "Dimanche", time: "Fermé" },
  ],
} as const;

export const brands = ["Ray-Ban", "Gucci", "Chanel", "Vogue", "Cartier", "Persol"];

export const services = [
  {
    number: "01",
    title: "Contrôle de la vision",
    text: "Un contrôle rapide et précis, réalisé en boutique par un opticien diplômé.",
  },
  {
    number: "02",
    title: "Lunettes & lentilles",
    text: "Montures de vue, solaires et lentilles de contact, avec un conseil adapté à vos usages.",
  },
  {
    number: "03",
    title: "Ajustages & réparations",
    text: "Réglages, entretien courant et réparations rapides sont réalisés sur place.",
  },
  {
    number: "04",
    title: "Tiers payant",
    text: "La boutique prend en charge le tiers payant avec les principales mutuelles.",
  },
];

export const reviews = [
  {
    quote: "Équipe à l’écoute, patiente, très bon conseil. Je recommande fortement.",
    author: "Amelle Bairouq",
  },
  {
    quote: "Super réactif et très sérieux. Mention spéciale à Younes.",
    author: "Marwane El Manjri",
  },
  {
    quote: "Très bons conseils et boutique moderne.",
    author: "Sihème El Hachimy",
  },
];

export const collections = [
  {
    title: "Solaires",
    eyebrow: "Lumière & protection",
    text: "Des lignes franches, des verres enveloppants ou des formes plus discrètes à essayer en boutique.",
    image: "/images/collections/solaire-noire.jpg",
    alt: "Monture solaire noire présentée en boutique O’Opticien",
  },
  {
    title: "Vue",
    eyebrow: "Au quotidien",
    text: "Une sélection pour trouver le bon équilibre entre confort, proportions et personnalité.",
    image: "/images/collections/vue-ecaille.jpg",
    alt: "Monture de vue écaille issue de la sélection O’Opticien",
  },
  {
    title: "Enfants",
    eyebrow: "Pour les plus jeunes",
    text: "Des montures adaptées au rythme des enfants, choisies avec eux et ajustées avec attention.",
    image: "/images/collections/enfant.jpg",
    alt: "Monture pour enfant disponible chez O’Opticien",
  },
] as const;

export const navigation = [
  { href: "/collections", label: "Collections" },
  { href: "/services", label: "Services" },
  { href: "/boutique", label: "La boutique" },
  { href: "/contact", label: "Contact" },
] as const;
