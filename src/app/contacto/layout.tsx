import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacte o Lar Familiar Nossa Senhora da Esperança em Roliça. Marque uma visita, conheça o horário e fale connosco por telefone ou email.",
  path: "/contacto",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
