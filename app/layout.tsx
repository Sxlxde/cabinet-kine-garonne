import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabinet Kiné Garonne — Masseurs-Kinésithérapeutes à Toulouse",
  description:
    "Cabinet de kinésithérapie à Toulouse. Rééducation, kiné du sport, massage thérapeutique et soins à domicile. Prenez rendez-vous en ligne.",
  metadataBase: new URL("https://cabinet-kine-garonne.example"),
  openGraph: {
    title: "Cabinet Kiné Garonne — Kinésithérapie à Toulouse",
    description:
      "Retrouvez le mouvement, sans douleur. Cabinet de kinésithérapie conventionné à Toulouse.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Kiné Garonne",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
