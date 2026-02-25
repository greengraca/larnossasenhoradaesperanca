import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Outfit, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
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
  title: "Lar Familiar Nossa Senhora da Esperança | Líder na Arte de Cuidar",
  description: "O Lar Familiar Nossa Senhora da Esperança, em Roliça, é uma residência sénior de excelência que valoriza o ambiente familiar, dignidade e cuidados 24h.",
  openGraph: {
    title: "Lar Familiar Nossa Senhora da Esperança | Líder na Arte de Cuidar",
    description: "O Lar Familiar Nossa Senhora da Esperança, em Roliça, é uma residência sénior de excelência que valoriza o ambiente familiar, dignidade e cuidados 24h.",
    url: "https://www.larfamiliarnossasenhoradaesperanca.pt",
    siteName: "Lar Familiar Nossa Senhora da Esperança",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`scroll-smooth ${cormorantGaramond.variable} ${inter.variable} ${outfit.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans text-charcoal bg-cream min-h-screen flex flex-col antialiased">
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
