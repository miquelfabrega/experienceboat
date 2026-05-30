import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/layout/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.experienceboat.es"),
  title: {
    template: "%s | Experience Boat",
    default: "Experience Boat — Boat rental in Roses, Costa Brava",
  },
  description:
    "Boat rental in Roses, Costa Brava. Without licence, with skipper, or with your own licence. Book online.",
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
    locale: "en_GB",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Experience Boat — Boat rental in Roses, Costa Brava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/hero-1.jpg"],
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
