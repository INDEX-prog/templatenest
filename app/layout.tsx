import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TemplateNest — Instant templates for creators & freelancers",
  description:
    "Des templates professionnels prêts à l'emploi pour freelances. Notion, CV, landing pages. À partir de 9€. Téléchargement instantané.",
  keywords: [
    "templates",
    "freelance",
    "notion",
    "cv",
    "landing page",
    "créateurs",
  ],
  openGraph: {
    title: "TemplateNest — Instant templates for creators & freelancers",
    description:
      "Des templates professionnels prêts à l'emploi pour freelances. À partir de 9€.",
    type: "website",
    locale: "fr_FR",
    siteName: "TemplateNest",
  },
  twitter: {
    card: "summary_large_image",
    title: "TemplateNest — Templates pro pour freelances",
    description: "Notion, CV, landing pages. À partir de 9€. Livraison instantanée.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
