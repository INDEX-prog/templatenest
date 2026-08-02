export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceId: string;
  category: string;
  features: string[];
  images: string[];
  downloadUrl: string;
}

export const products: Product[] = [
  {
    id: "notion-client-tracker",
    name: "Notion Client Tracker",
    slug: "notion-client-tracker",
    description:
      "Gérez vos clients, projets et factures dans un seul dashboard Notion. Parfait pour les freelances qui débutent.",
    price: 9,
    priceId: "price_notion_tracker",
    category: "Notion",
    features: [
      "Dashboard client complet",
      "Suivi des projets en cours",
      "Gestion des factures",
      "Templates de propositions",
      "Vue calendrier intégrée",
    ],
    images: [
      "https://picsum.photos/seed/notion-dash-1/800/600",
      "https://picsum.photos/seed/notion-dash-2/800/600",
      "https://picsum.photos/seed/notion-dash-3/800/600",
    ],
    downloadUrl: "/downloads/notion-client-tracker.zip",
  },
  {
    id: "freelancer-cv",
    name: "CV Freelancer Pro",
    slug: "freelancer-cv",
    description:
      "Un CV moderne et minimaliste qui met en valeur vos compétences. Format Figma + PDF éditable.",
    price: 9,
    priceId: "price_freelancer_cv",
    category: "CV",
    features: [
      "Design moderne et épuré",
      "Fichier Figma éditable",
      "Version PDF prête à l'emploi",
      "3 variations de couleurs",
      "Compatible ATS",
    ],
    images: [
      "https://picsum.photos/seed/cv-design-1/800/600",
      "https://picsum.photos/seed/cv-design-2/800/600",
      "https://picsum.photos/seed/cv-design-3/800/600",
    ],
    downloadUrl: "/downloads/freelancer-cv.zip",
  },
  {
    id: "landing-page-template",
    name: "Landing Page Starter",
    slug: "landing-page-template",
    description:
      "Template HTML/CSS responsive pour créer une landing page professionnelle en quelques minutes.",
    price: 9,
    priceId: "price_landing_page",
    category: "Web",
    features: [
      "Code HTML/CSS propre",
      "100% responsive mobile",
      "Sections modulables",
      "Formulaire de contact intégré",
      "Guide de personnalisation",
    ],
    images: [
      "https://picsum.photos/seed/landing-page-1/800/600",
      "https://picsum.photos/seed/landing-page-2/800/600",
      "https://picsum.photos/seed/landing-page-3/800/600",
    ],
    downloadUrl: "/downloads/landing-page-template.zip",
  },
];

export const bundle = {
  id: "complete-bundle",
  name: "Pack Complet Freelancer",
  description:
    "Les 3 templates essentiels pour démarrer votre activité freelance. Économisez 12€.",
  price: 15,
  originalPrice: 27,
  priceId: "price_complete_bundle",
  products: products,
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
