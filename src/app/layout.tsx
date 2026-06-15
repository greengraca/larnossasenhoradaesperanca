import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Outfit, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { SITE } from "@/lib/metadata";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Lar de Idosos em Roliça`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "lar de idosos",
    "lar de idosos Roliça",
    "residência sénior",
    "cuidados séniores",
    "lar Bombarral",
    "terceira idade",
    "casa de repouso Oeste",
    "Nossa Senhora da Esperança",
  ],
  category: "healthcare",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} | Lar de Idosos em Roliça`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Lar de Idosos em Roliça`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2C2825",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/og.jpg`,
  telephone: "+351913835271",
  email: "instantedeternura@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Condessa Maria Delgada 58",
    addressLocality: "Roliça",
    postalCode: "2540-624",
    addressRegion: "Leiria",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.30068,
    longitude: -9.19062,
  },
  areaServed: ["Roliça", "Bombarral", "Óbidos", "Caldas da Rainha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`scroll-smooth ${cormorantGaramond.variable} ${inter.variable} ${outfit.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans text-charcoal bg-cream min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <svg
          className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <Navbar />
        <main className="flex-1 flex flex-col relative">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
