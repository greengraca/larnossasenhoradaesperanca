import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Sobre Nós",
  description:
    "Conheça a história, a missão e os valores do Lar Familiar Nossa Senhora da Esperança — um lar de idosos em Roliça focado na dignidade e no ambiente familiar.",
  path: "/sobre",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
