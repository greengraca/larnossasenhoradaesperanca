import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Serviços",
  description:
    "Atividades de vida diária, animação e terapia ocupacional, cuidados de saúde e serviços complementares — cozinha própria, fisioterapia e mais — em Roliça.",
  path: "/servicos",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
