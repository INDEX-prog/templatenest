"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, bundle } from "@/lib/products";
import type { Product } from "@/lib/products";

interface PurchaseDetails {
  products: Product[];
  isBundle: boolean;
  email?: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState<boolean>(true);
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetails | null>(null);

  useEffect(() => {
    // In production, you would verify the session with Stripe
    // and fetch the actual purchase details
    const fetchPurchaseDetails = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo purposes, showing all products
      setPurchaseDetails({
        products: products,
        isBundle: true,
        email: "client@example.com",
      });
      setLoading(false);
    };

    if (sessionId) {
      fetchPurchaseDetails();
    } else {
      // Demo mode without session
      setPurchaseDetails({
        products: products,
        isBundle: true,
      });
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
          <svg
            className="w-8 h-8 text-primary animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
        <p className="text-lg text-muted">Chargement de votre commande...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Merci pour votre achat !
        </h1>
        <p className="text-lg text-muted">
          Votre paiement a été confirmé. Vos templates sont prêts à être
          téléchargés.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="font-display text-xl font-semibold text-foreground mb-6">
          Vos téléchargements
        </h2>

        <div className="space-y-4">
          {purchaseDetails?.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted">{product.category}</p>
                </div>
              </div>
              <a
                href={product.downloadUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Télécharger
              </a>
            </div>
          ))}
        </div>

        {purchaseDetails?.isBundle && (
          <div className="mt-6 p-4 bg-accent/10 rounded-xl">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-foreground">
                <strong>Pack Complet</strong> — Vous avez économisé 12€ en
                achetant le bundle !
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8">
        <h2 className="font-display text-lg font-semibold text-foreground mb-4">
          Prochaines étapes
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <h3 className="font-semibold text-foreground">
                Téléchargez vos fichiers
              </h3>
              <p className="text-sm text-muted">
                Cliquez sur les boutons ci-dessus pour télécharger chaque
                template.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <h3 className="font-semibold text-foreground">
                Personnalisez selon vos besoins
              </h3>
              <p className="text-sm text-muted">
                Chaque template est accompagné d'un guide d'utilisation pour
                vous aider.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <h3 className="font-semibold text-foreground">
                Lancez votre activité
              </h3>
              <p className="text-sm text-muted">
                Utilisez ces outils pour impressionner vos premiers clients !
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-foreground bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Retour à l'accueil
        </Link>
        <a
          href="mailto:support@templatenest.com"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
        >
          Besoin d'aide ?
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                  <svg
                    className="w-8 h-8 text-primary animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                </div>
                <p className="text-lg text-muted">Chargement...</p>
              </div>
            }
          >
            <SuccessContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
