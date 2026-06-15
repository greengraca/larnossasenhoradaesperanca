import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "A Nossa Casa",
  description:
    "Galeria de fotografias do Lar Familiar Nossa Senhora da Esperança: exteriores e envolvente, espaços comuns e quartos do nosso lar de idosos em Roliça.",
  path: "/a-nossa-casa",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
