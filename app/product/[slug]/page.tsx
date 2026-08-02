"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);

  useEffect(() => {
    const foundProduct = getProductBySlug(slug);
    setProduct(foundProduct || null);
    setIsLoading(false);
  }, [slug]);

  const handleCheckout = async () => {
    if (!product) return;
    setCheckoutLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceType: "single",
          productId: product.id,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl animate-pulse" />
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 rounded-lg w-1/3 animate-pulse" />
                <div className="h-12 bg-gray-100 rounded-lg w-2/3 animate-pulse" />
                <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Produit non trouvé
            </h1>
            <p className="text-muted mb-6">
              Ce template n'existe pas ou a été retiré.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li>
                <Link href="/#templates" className="text-muted hover:text-foreground transition-colors">
                  Templates
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="text-foreground font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-4">
                <Image
                  src={product.images[currentImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImage
                          ? "border-primary"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                {product.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-display font-bold text-foreground">
                  {product.price}€
                </span>
                <span className="text-muted">TTC</span>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-display font-semibold text-foreground">
                  Ce qui est inclus :
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {checkoutLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 animate-spin"
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
                      Chargement...
                    </span>
                  ) : (
                    <>
                      Acheter maintenant — {product.price}€
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <Link
                  href="/#pricing"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-foreground bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Voir le pack complet — 15€
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg
                    className="w-5 h-5 text-primary"
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
                  Téléchargement instantané
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Paiement sécurisé Stripe
                </div>
              </div>
            </div>
          </div>

          {otherProducts.length > 0 && (
            <section className="mt-20 pt-16 border-t border-gray-200">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Autres templates
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="flex gap-6 p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
                  >
                    <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-muted mb-2">
                        {p.category}
                      </span>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted mt-1">{p.price}€</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
