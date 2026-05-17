import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/layout/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://experienceboat.es"),
  title: {
    template: "%s | Experience Boat",
    default: "Experience Boat — Alquiler de barcos en Roses, Costa Brava",
  },
  description:
    "Alquiler de barcos en Roses, Costa Brava. Sin licencia, con patrón o con licencia propia. Reserva online.",
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
    locale: "es_ES",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Experience Boat — Alquiler de barcos en Roses, Costa Brava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/hero-1.jpg"],
  },
};

export default function EsRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es">{children}</RootShell>;
}
