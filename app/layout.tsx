import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabinet Kiné Garonne, kinésithérapeutes à Toulouse",
  description:
    "Cabinet de kinésithérapie à Toulouse. Rééducation, kiné du sport, massage thérapeutique et soins à domicile. Prenez rendez-vous en ligne.",
  metadataBase: new URL("https://cabinet-kine-garonne.example"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cabinet Kiné Garonne, kinésithérapie à Toulouse",
    description:
      "Retrouvez le mouvement, sans douleur. Cabinet de kinésithérapie conventionné à Toulouse.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Kiné Garonne",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cabinet Kiné Garonne",
  description:
    "Cabinet de kinésithérapie à Toulouse : rééducation, kiné du sport, kiné respiratoire, massage thérapeutique et soins à domicile.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 allée des Tilleuls",
    postalCode: "31000",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  telephone: "+33561000000",
  areaServed: "Toulouse et son agglomération",
  openingHours: "Mo-Fr 08:00-19:00",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
