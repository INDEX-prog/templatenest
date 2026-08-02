import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section id="templates" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos templates
          </h2>
          <p className="text-lg text-muted">
            Trois templates essentiels pour démarrer votre activité freelance.
            Prêts à l'emploi, éditables et livrés instantanément.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
