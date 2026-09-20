export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  longDescription: string;
  price: number | null;
  colors: string[];
  sizes: string[];
  materials: string[];
  features: string[];
  icon: string;
  customizable: boolean;
  featured?: boolean;
};

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "camisetas", label: "Camisetas" },
  { id: "hoodies", label: "Hoodies" },
  { id: "calentadores", label: "Calentadores" },
  { id: "conjuntos", label: "Conjuntos" },
  { id: "uniformes", label: "Uniformes" },
  { id: "deportiva", label: "Deportiva" },
];

export const products: Product[] = [
  {
    slug: "hoodie-oversize",
    name: "Hoodie Oversize",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie de corte amplio disponible para estampado, bordado o diseño personalizado.",
    longDescription:
      "Un hoodie cómodo y versátil que puedes adaptar a tu estilo, marca o emprendimiento. Selecciona la talla, el color y el tipo de personalización que necesitas.",
    price: 24.99,
    colors: ["#111111", "#f5f5f5", "#475569", "#7f1d1d"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Algodón perchado", "Mezcla algodón-poliéster"],
    features: [
      "Corte amplio tipo oversize",
      "Disponible para estampado y bordado",
      "Colores y tallas configurables",
      "Producción individual o por volumen",
    ],
    icon: "🧥",
    customizable: true,
    featured: true,
  },
  {
    slug: "camiseta-classic",
    name: "Camiseta Classic",
    category: "camisetas",
    categoryLabel: "Camisetas",
    description:
      "Camiseta cómoda para diseños personales, marcas, eventos y emprendimientos.",
    longDescription:
      "Una camiseta clásica pensada como base para estampados, logotipos, ilustraciones y diseños propios. Es adecuada para uso personal, eventos y pedidos empresariales.",
    price: 12.99,
    colors: ["#111111", "#f5f5f5", "#1e3a8a", "#166534"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    materials: ["Algodón", "Poliéster", "Mezcla algodón-poliéster"],
    features: [
      "Corte clásico y cómodo",
      "Compatible con diferentes técnicas de estampado",
      "Disponible en varios colores",
      "Pedidos desde una unidad",
    ],
    icon: "👕",
    customizable: true,
  },
  {
    slug: "calentador-deportivo",
    name: "Calentador Deportivo",
    category: "calentadores",
    categoryLabel: "Calentadores",
    description:
      "Conjunto deportivo configurable por color, tela, talla y detalles personalizados.",
    longDescription:
      "Conjunto diseñado para equipos, academias, instituciones y uso personal. Permite combinar colores e incorporar nombres, números, escudos o logotipos.",
    price: 34.99,
    colors: ["#111111", "#172554", "#881337"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Poliéster deportivo", "Tela antifluido"],
    features: [
      "Chaqueta y pantalón combinables",
      "Personalización con nombres y logotipos",
      "Opciones para equipos deportivos",
      "Colores institucionales configurables",
    ],
    icon: "🏃",
    customizable: true,
    featured: true,
  },
  {
    slug: "uniforme-empresarial",
    name: "Uniforme Empresarial",
    category: "uniformes",
    categoryLabel: "Uniformes",
    description:
      "Uniformes para negocios y empresas con logotipo, nombres y colores corporativos.",
    longDescription:
      "Creamos uniformes de acuerdo con la identidad de cada empresa. La cotización se prepara según el tipo de prenda, material, personalización y cantidad solicitada.",
    price: null,
    colors: ["#111111", "#f5f5f5", "#1e3a8a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    materials: ["Algodón", "Poliéster", "Tela antifluido"],
    features: [
      "Diseño adaptado a la identidad empresarial",
      "Bordado o estampado de logotipos",
      "Nombres y cargos opcionales",
      "Precios especiales para pedidos por volumen",
    ],
    icon: "👔",
    customizable: true,
  },
  {
    slug: "conjunto-street",
    name: "Conjunto Street",
    category: "conjuntos",
    categoryLabel: "Conjuntos",
    description:
      "Conjunto urbano confeccionado para combinar comodidad, estilo y personalización.",
    longDescription:
      "Una propuesta urbana que combina prendas coordinadas y detalles personalizados. Puedes elegir colores, tallas y elementos gráficos para crear un conjunto propio.",
    price: 39.99,
    colors: ["#111111", "#3f3f46", "#78350f"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    materials: ["Algodón perchado", "Mezcla algodón-poliéster"],
    features: [
      "Conjunto superior e inferior",
      "Diseño urbano personalizable",
      "Combinación de colores",
      "Disponible para pedidos individuales y grupales",
    ],
    icon: "✨",
    customizable: true,
  },
  {
    slug: "camiseta-deportiva",
    name: "Camiseta Deportiva",
    category: "deportiva",
    categoryLabel: "Ropa deportiva",
    description:
      "Camiseta ligera para equipos, competencias y actividades deportivas.",
    longDescription:
      "Camiseta pensada para entrenamientos, competencias y equipos. Puede personalizarse con números, nombres, escudos, patrocinadores y combinaciones de colores.",
    price: 16.99,
    colors: ["#dc2626", "#1d4ed8", "#15803d", "#111111"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    materials: ["Poliéster deportivo", "Tela transpirable"],
    features: [
      "Tela ligera para actividad física",
      "Nombres y números personalizados",
      "Logotipos y patrocinadores opcionales",
      "Pedidos para equipos y academias",
    ],
    icon: "🎽",
    customizable: true,
  },
];

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatProductPrice(price: number | null) {
  if (price === null) {
    return "Solicitar cotización";
  }

  return `Desde $${price.toFixed(2)}`;
}