import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/layout/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.experienceboat.es"),
  title: {
    template: "%s | Experience Boat",
    default: "Experience Boat — Lloguer d'embarcacions a Roses, Costa Brava",
  },
  description:
    "Lloguer d'embarcacions a Roses, Costa Brava. Sense llicència, amb patró o amb llicència pròpia. Reserva en línia.",
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
    locale: "ca_ES",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Experience Boat — Lloguer d'embarcacions a Roses, Costa Brava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/hero-1.jpg"],
  },
};

export default function CaRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="ca">{children}</RootShell>;
}
