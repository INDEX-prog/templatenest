import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">
                TemplateNest
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Des templates professionnels prêts à l'emploi pour les freelances
              qui veulent démarrer rapidement.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Produits</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/product/notion-client-tracker"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Notion Client Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/product/freelancer-cv"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  CV Freelancer Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/product/landing-page-template"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Landing Page Starter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Liens</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#templates"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} TemplateNest. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Paiement sécurisé par</span>
            <svg
              className="h-6 text-gray-400"
              viewBox="0 0 60 25"
              fill="currentColor"
            >
              <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a12.56 12.56 0 0 1-4.74.91c-4.05 0-6.83-2.08-6.83-7.08 0-4.1 2.53-7.14 6.19-7.14 3.77 0 6.3 2.95 6.3 7.05 0 .5-.04.94-.11 1.34zm-4.45-5.22c-1.44 0-2.33 1.13-2.33 2.67h4.57c0-1.54-.82-2.67-2.24-2.67zM33.74 20.4H29V6.38h4.74v2.08c.99-1.64 2.6-2.44 4.4-2.44 3.02 0 4.76 2.18 4.76 5.67V20.4h-4.74v-7.62c0-1.8-.71-2.7-2.12-2.7-1.34 0-2.3.96-2.3 2.64v7.68zm-11.75 0h-4.74V6.38h4.74v2.08c.99-1.64 2.6-2.44 4.4-2.44 3.02 0 4.76 2.18 4.76 5.67V20.4h-4.74v-7.62c0-1.8-.71-2.7-2.12-2.7-1.34 0-2.3.96-2.3 2.64v7.68zM5.46 20.4H.72V6.38h4.74v14.02zm-2.37-15.86a2.74 2.74 0 1 1 0-5.48 2.74 2.74 0 0 1 0 5.48z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
