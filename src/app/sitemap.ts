import type { MetadataRoute } from "next";
import { SITE } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.8, changeFrequency: "yearly" },
    { path: "/servicos", priority: 0.8, changeFrequency: "yearly" },
    { path: "/a-nossa-casa", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contacto", priority: 0.9, changeFrequency: "yearly" },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
