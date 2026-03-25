export interface Espaldar {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isCustomOnly?: boolean;
}

export const sizes = [
  { label: "0.80/0.90/1.00m", price: 50000 },
  { label: "1.40m", price: 60000 },
  { label: "1.60m", price: 70000 },
  { label: "1.80m", price: 80000 },
  { label: "2.00m", price: 90000 },
];

export const espaldares: Espaldar[] = [
  {
    id: 1,
    title: "Espaldar Rombo Negro",
    description: "Espaldar negro de tela ecocuero con tachas, tipo rombo.",
    imageUrl: "/images/images/espaldares/1.png",
  },
  {
    id: 2,
    title: "Espaldar Square Grey",
    description: "Espaldar cuadrado con tela rustica gris, con tachas, patas largas.",
    imageUrl: "/images/images/espaldares/2.png",
  },
  {
    id: 3,
    title: "Espaldar Rombo Rojo",
    description: "Espaldar tipo rombo, rojo con tachas.",
    imageUrl: "/images/images/espaldares/3.png",
  },
  {
    id: 4,
    title: "Espaldar Blue Square",
    description: "Espaldar azul tela rustica, tipo cuadrado.",
    imageUrl: "/images/images/espaldares/4.png",
  },
  {
    id: 5,
    title: "Espaldar Canelón Grey",
    description: "Espaldar tela ecocuero gris, tipo canelon.",
    imageUrl: "/images/images/espaldares/5.png",
  },
  {
    id: 6,
    title: "Espaldar Dark Grey Rombo",
    description: "Espaldar tela ecocuero gris obscuro, tipo rombo.",
    imageUrl: "/images/images/espaldares/6.png",
  },
  {
    id: 7,
    title: "Espaldar Bordo Rombo",
    description: "Espaldar tela eco cuero bordo, tipo rombo.",
    imageUrl: "/images/images/espaldares/7.png",
  },
  {
    id: 8,
    title: "Espaldar Rustik Square",
    description: "Espaldar tela rustica tipo cuadrado.",
    imageUrl: "/images/images/espaldares/8.png",
  },
  {
    id: 9,
    title: "Espaldar Grey Premium",
    description: "Espaldar gris con tela rustica, diseño exclusivo.",
    imageUrl: "/images/images/espaldares/9.png",
    isCustomOnly: true,
  },
];
