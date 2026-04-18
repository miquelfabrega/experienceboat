import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/layout/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.experienceboat.es"),
  title: {
    template: "%s | Experience Boat",
    default: "Experience Boat — Location de bateau à Roses, Costa Brava",
  },
  description:
    "Location de bateau à Roses, Costa Brava. Sans permis, avec skipper, ou avec votre propre permis. Réservez en ligne.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "HwDacjJjju5zK-InNStcqz9-hq7g-UulLiO4A08kEgY",
  },
  openGraph: {
    type: "website",
    siteName: "Experience Boat",
    locale: "fr_FR",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Experience Boat — Location de bateau à Roses, Costa Brava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/hero-1.jpg"],
  },
};

export default function FrRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="fr">{children}</RootShell>;
}
