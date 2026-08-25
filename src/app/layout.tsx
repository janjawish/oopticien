import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/data/site";
import "./globals.css";
import "./layout-fixes.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://oopticien.fr"),
  applicationName: site.name,
  title: { default: "O’Opticien — Opticien à Mantes-la-Jolie", template: "%s — O’Opticien" },
  description: site.description,
  keywords: ["opticien Mantes-la-Jolie", "lunettes de vue", "lunettes de soleil", "lentilles"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "O’Opticien — Opticien à Mantes-la-Jolie",
    description: site.description,
    images: [{ url: "/images/collections/hero.jpg", width: 1200, height: 1500, alt: "Sélection de lunettes O’Opticien" }],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#f2eee5", colorScheme: "light" };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: site.name,
  legalName: "OOPTICIEN",
  url: "https://oopticien.fr",
  telephone: site.phoneHref,
  email: site.email,
  taxID: "98783482700014",
  vatID: "FR69987834827",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.9886578, longitude: 1.7179499 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Saturday"], opens: "10:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "14:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "12:00" },
  ],
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">Aller au contenu</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
