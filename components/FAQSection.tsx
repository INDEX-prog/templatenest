"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce qui est inclus dans chaque template ?",
    answer:
      "Chaque template inclut les fichiers sources complets (Notion, Figma, ou HTML/CSS selon le produit), un guide d'utilisation PDF, et toutes les ressources nécessaires pour personnaliser le template à votre image.",
  },
  {
    question: "Puis-je personnaliser les templates ?",
    answer:
      "Oui, tous les templates sont 100% éditables. Vous pouvez modifier les couleurs, les textes, la mise en page et tous les éléments visuels. Aucune compétence technique avancée n'est requise.",
  },
  {
    question: "Quels sont les formats de fichiers fournis ?",
    answer:
      "Le template Notion est partagé via un lien de duplication. Le CV est fourni en Figma + PDF éditable. La landing page est livrée en HTML/CSS avec tous les assets.",
  },
  {
    question: "Comment fonctionne la livraison ?",
    answer:
      "Après paiement via Stripe, vous êtes redirigé vers une page de téléchargement avec accès immédiat à vos fichiers. Vous recevez également un email de confirmation avec le lien de téléchargement.",
  },
  {
    question: "Puis-je utiliser les templates pour mes clients ?",
    answer:
      "Oui, tous nos templates incluent une licence d'usage commercial. Vous pouvez les utiliser pour vos projets personnels et professionnels sans restriction.",
  },
  {
    question: "Proposez-vous des remboursements ?",
    answer:
      "Étant donné la nature numérique de nos produits (téléchargement instantané), nous ne proposons pas de remboursement. N'hésitez pas à consulter les aperçus détaillés avant achat.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted">
            Tout ce que vous devez savoir avant d'acheter.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
