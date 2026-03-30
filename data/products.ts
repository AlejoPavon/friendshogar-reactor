export type ProductCategory = 'espaldares' | 'bauleras' | 'almohadas' | 'colchones' | 'bases';

export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ProductCategory;
  sizes?: ProductSize[];
  isCustomOnly?: boolean;
  isOutOfStock?: boolean;
  tags?: string[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  espaldares: 'Espaldares',
  bauleras: 'Bauleras',
  almohadas: 'Almohadas',
  colchones: 'Colchones',
  bases: 'Bases de Sommier',
};

// ─── Espaldares ──────────────────────────────────────────────

const espaldarSizes: ProductSize[] = [
  { label: '0.80/0.90/1.00m', price: 50000 },
  { label: '1.40m', price: 60000 },
  { label: '1.60m', price: 70000 },
  { label: '1.80m', price: 80000 },
  { label: '2.00m', price: 90000 },
];

const espaldares: Product[] = [
  {
    id: 'esp-1',
    title: 'Espaldar Rombo Negro',
    description: 'Espaldar negro de tela ecocuero con tachas, tipo rombo.',
    imageUrl: '/images/images/espaldares/1.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['rombo', 'negro', 'ecocuero'],
  },
  {
    id: 'esp-2',
    title: 'Espaldar Square Grey',
    description: 'Espaldar cuadrado con tela rustica gris, con tachas, patas largas.',
    imageUrl: '/images/images/espaldares/2.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['cuadrado', 'gris', 'rustica'],
  },
  {
    id: 'esp-3',
    title: 'Espaldar Rombo Rojo',
    description: 'Espaldar tipo rombo, rojo con tachas.',
    imageUrl: '/images/images/espaldares/3.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['rombo', 'rojo'],
  },
  {
    id: 'esp-4',
    title: 'Espaldar Blue Square',
    description: 'Espaldar azul tela rustica, tipo cuadrado.',
    imageUrl: '/images/images/espaldares/4.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['cuadrado', 'azul', 'rustica'],
  },
  {
    id: 'esp-5',
    title: 'Espaldar Canelón Grey',
    description: 'Espaldar tela ecocuero gris, tipo canelon.',
    imageUrl: '/images/images/espaldares/5.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['canelon', 'gris', 'ecocuero'],
  },
  {
    id: 'esp-6',
    title: 'Espaldar Dark Grey Rombo',
    description: 'Espaldar tela ecocuero gris obscuro, tipo rombo.',
    imageUrl: '/images/images/espaldares/6.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['rombo', 'gris', 'ecocuero'],
  },
  {
    id: 'esp-7',
    title: 'Espaldar Bordo Rombo',
    description: 'Espaldar tela eco cuero bordo, tipo rombo.',
    imageUrl: '/images/images/espaldares/7.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['rombo', 'bordo', 'ecocuero'],
  },
  {
    id: 'esp-8',
    title: 'Espaldar Rustik Square',
    description: 'Espaldar tela rustica tipo cuadrado.',
    imageUrl: '/images/images/espaldares/8.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    tags: ['cuadrado', 'rustica'],
  },
  {
    id: 'esp-9',
    title: 'Espaldar Grey Premium',
    description: 'Espaldar gris con tela rustica, diseño exclusivo.',
    imageUrl: '/images/images/espaldares/9.png',
    category: 'espaldares',
    sizes: espaldarSizes,
    isCustomOnly: true,
    tags: ['premium', 'gris', 'rustica', 'exclusivo'],
  },
];

// ─── Bauleras ────────────────────────────────────────────────

const bauleraSizes: ProductSize[] = [
  { label: '0.80m', price: 50000 },
  { label: '1.00m', price: 60000 },
  { label: '1.40m', price: 70000 },
];

const bauleras: Product[] = [
  {
    id: 'bau-1',
    title: 'Baulera Pana Clásica',
    description: 'Baulera tapizada en pana premium con apertura hidráulica. Ideal para almacenamiento.',
    imageUrl: '/images/images/espaldares/1.png',
    category: 'bauleras',
    sizes: bauleraSizes,
    isOutOfStock: true,
    tags: ['pana', 'clasica', 'almacenamiento'],
  },
  {
    id: 'bau-2',
    title: 'Baulera Ecocuero Negra',
    description: 'Baulera en ecocuero negro, estructura reforzada con apertura lateral.',
    imageUrl: '/images/images/espaldares/2.png',
    category: 'bauleras',
    sizes: bauleraSizes,
    isOutOfStock: true,
    tags: ['ecocuero', 'negro', 'reforzada'],
  },
  {
    id: 'bau-3',
    title: 'Baulera Rústica Beige',
    description: 'Baulera tapizada en tela rústica beige, acabado artesanal.',
    imageUrl: '/images/images/espaldares/3.png',
    category: 'bauleras',
    sizes: bauleraSizes,
    isOutOfStock: true,
    tags: ['rustica', 'beige', 'artesanal'],
  },
];

// ─── Almohadas ───────────────────────────────────────────────

const almohadas: Product[] = [
  {
    id: 'alm-1',
    title: 'Almohada Visco Gel Premium',
    description: 'Almohada viscoelástica con gel refrigerante. Ergonómica cervical para un descanso óptimo.',
    imageUrl: '/images/images/espaldares/4.png',
    category: 'almohadas',
    sizes: [
      { label: 'Estándar (70x40)', price: 18900 },
      { label: 'King (80x50)', price: 24500 },
    ],
    isOutOfStock: true,
    tags: ['viscoelastica', 'gel', 'cervical'],
  },
  {
    id: 'alm-2',
    title: 'Almohada Fibra Siliconada',
    description: 'Almohada de fibra siliconada hipoalergénica, suave y esponjosa.',
    imageUrl: '/images/images/espaldares/5.png',
    category: 'almohadas',
    sizes: [
      { label: 'Estándar (70x40)', price: 12500 },
      { label: 'King (80x50)', price: 16800 },
    ],
    isOutOfStock: true,
    tags: ['fibra', 'hipoalergenica', 'suave'],
  },
  {
    id: 'alm-3',
    title: 'Almohada Cervical Ortopédica',
    description: 'Almohada ortopédica con doble onda para alineación cervical perfecta.',
    imageUrl: '/images/images/espaldares/6.png',
    category: 'almohadas',
    sizes: [
      { label: 'Estándar (60x40)', price: 22000 },
    ],
    isOutOfStock: true,
    tags: ['ortopedica', 'cervical', 'ergonomica'],
  },
];

// ─── Colchones ───────────────────────────────────────────────

const colchones: Product[] = [
  {
    id: 'col-1',
    title: 'Colchón Ortho-Density 500',
    description: 'Colchón de espuma alta densidad con soporte ortopédico. Ideal para descanso profundo.',
    imageUrl: '/images/images/espaldares/7.png',
    category: 'colchones',
    sizes: [
      { label: '1 Plaza (0.80x1.90)', price: 124900 },
      { label: '1½ Plaza (1.00x1.90)', price: 149000 },
      { label: '2 Plazas (1.40x1.90)', price: 185500 },
      { label: 'Queen (1.60x2.00)', price: 215000 },
      { label: 'King (2.00x2.00)', price: 275000 },
    ],
    isOutOfStock: true,
    tags: ['ortopedico', 'alta densidad', 'espuma'],
  },
  {
    id: 'col-2',
    title: 'Colchón Resortes Pocket Premium',
    description: 'Colchón de resortes independientes pocket con pillow top. Máxima adaptabilidad.',
    imageUrl: '/images/images/espaldares/8.png',
    category: 'colchones',
    sizes: [
      { label: '1 Plaza (0.80x1.90)', price: 165000 },
      { label: '2 Plazas (1.40x1.90)', price: 225000 },
      { label: 'Queen (1.60x2.00)', price: 295000 },
      { label: 'King (2.00x2.00)', price: 365000 },
    ],
    isOutOfStock: true,
    tags: ['resortes', 'pocket', 'pillow top'],
  },
  {
    id: 'col-3',
    title: 'Colchón Memory Foam Elite',
    description: 'Colchón viscoelástico con capas de memory foam y base de alta densidad.',
    imageUrl: '/images/images/espaldares/9.png',
    category: 'colchones',
    sizes: [
      { label: '2 Plazas (1.40x1.90)', price: 245000 },
      { label: 'Queen (1.60x2.00)', price: 320000 },
      { label: 'King (2.00x2.00)', price: 410000 },
    ],
    isCustomOnly: true,
    isOutOfStock: true,
    tags: ['memory foam', 'viscoelastico', 'premium'],
  },
];

// ─── Bases de Sommier ────────────────────────────────────────

const baseSizes: ProductSize[] = [
  { label: '0.80/0.90/1.00m', price: 50000 },
  { label: '1.40m', price: 65000 },
];

const bases: Product[] = [
  {
    id: 'bas-1',
    title: 'Base Sommier Pana Premium',
    description: 'Base de sommier tapizada en pana premium con patas de madera a rosca.',
    imageUrl: '/images/images/espaldares/1.png',
    category: 'bases',
    sizes: baseSizes,
    isOutOfStock: true,
    tags: ['pana', 'madera', 'premium'],
  },
  {
    id: 'bas-2',
    title: 'Base Sommier Ecocuero',
    description: 'Base de sommier en ecocuero negro con patas cromadas. Diseño moderno.',
    imageUrl: '/images/images/espaldares/2.png',
    category: 'bases',
    sizes: baseSizes,
    isOutOfStock: true,
    tags: ['ecocuero', 'cromadas', 'moderno'],
  },
  {
    id: 'bas-3',
    title: 'Base Sommier Rústica',
    description: 'Base de sommier en tela rústica natural. Acabado artesanal con patas de madera.',
    imageUrl: '/images/images/espaldares/3.png',
    category: 'bases',
    sizes: baseSizes,
    isOutOfStock: true,
    tags: ['rustica', 'madera', 'artesanal'],
  },
];

// ─── Exports ─────────────────────────────────────────────────

export const allProducts: Product[] = [
  ...espaldares,
  ...bauleras,
  ...almohadas,
  ...colchones,
  ...bases,
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getAllProducts(): Product[] {
  return allProducts;
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return allProducts;
  return allProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags?.some((tag) => tag.toLowerCase().includes(q))
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
}

export const allCategories: ProductCategory[] = [
  'espaldares',
  'bauleras',
  'almohadas',
  'colchones',
  'bases',
];
