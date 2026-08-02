import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Prêt à démarrer votre activité ?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Obtenez les trois templates essentiels pour seulement 15€ et commencez
          à travailler avec vos premiers clients dès aujourd'hui.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Acheter le pack complet
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
          </Link>
          <Link
            href="#templates"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
          >
            Voir les templates
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <svg
              className="w-5 h-5"
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
            Pas d'abonnement
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <svg
              className="w-5 h-5"
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
            Livraison instantanée
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <svg
              className="w-5 h-5"
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
            Usage commercial inclus
          </div>
        </div>
      </div>
    </section>
  );
}
