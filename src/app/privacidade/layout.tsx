import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Política de privacidade e proteção de dados pessoais (RGPD) do website do Lar Familiar Nossa Senhora da Esperança.",
  path: "/privacidade",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
