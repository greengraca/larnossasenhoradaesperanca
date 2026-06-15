import type { Metadata } from "next";

export const SITE = {
  name: "Lar Familiar Nossa Senhora da Esperança",
  shortName: "N. S. da Esperança",
  // NOTE: domain a confirmar — atualizar aqui propaga para todo o SEO/embeds.
  url: "https://larnossasradaesperanca.pt",
  description:
    "Lar de idosos em Roliça com ambiente familiar e humanizado: cuidados de saúde, atividades, terapia ocupacional e nutrição própria. Líder na arte de cuidar.",
  locale: "pt_PT",
  ogImage: "/og.jpg",
} as const;

type PageMeta = { title: string; description: string; path: string };

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SITE.ogImage],
    },
  };
}
