import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stephanie-francois-osteopathe.fr"),
  title: "Ostéopathe à Lille – Stéphanie François",
  description: "Stéphanie François, ostéopathe à Lille. Consultations adultes, femmes enceintes, nourrissons, sportifs. Cabinet avenue de Bretagne, entre Canteleu et Bois-Blanc. Prendre rendez-vous en ligne.",
  keywords: [
    "ostéopathe",
    "Lille",
    "Stéphanie François",
    "ostéopathie",
    "cabinet ostéopathie",
    "ostéopathe",
    "Lille",
    "Hauts-de-France",
    "femme enceinte",
    "nourrisson",
    "sportif",
    "senior",
    "Doctolib",
    "prise de rendez-vous",
  ],
  authors: [{ name: "Stéphanie François" }],
  creator: "Stéphanie François",
  publisher: "Stéphanie François",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.stephanie-francois-osteopathe.fr",
    siteName: "Stéphanie François, Ostéopathe",
    title: "Ostéopathe à Lille – Stéphanie François",
    description: "Stéphanie François, ostéopathe à Lille. Consultations adultes, femmes enceintes, nourrissons, sportifs. Cabinet avenue de Bretagne.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stéphanie François, Ostéopathe à Lille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostéopathe à Lille – Stéphanie François",
    description: "Stéphanie François, ostéopathe à Lille. Consultations adultes, femmes enceintes, nourrissons, sportifs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.stephanie-francois-osteopathe.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen" style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
        <Footer />
        <CTASticky />
      </body>
    </html>
  );
}
