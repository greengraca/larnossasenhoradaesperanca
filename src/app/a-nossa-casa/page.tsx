"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Photo = { src: string; w: number; h: number; cat: string; alt: string };

const sections = [
  {
    id: "exteriores",
    title: "Exteriores & Envolvente",
    desc: "A casa, os jardins, a piscina e a paisagem serena que nos rodeia no coração da Roliça.",
  },
  {
    id: "comuns",
    title: "Espaços Comuns",
    desc: "Salas de convívio, refeitório e a nossa capela — os lugares onde a vida acontece em conjunto.",
  },
  {
    id: "quartos",
    title: "Quartos",
    desc: "Espaços privados, confortáveis e luminosos, pensados para o descanso e a privacidade de cada residente.",
  },
];

const photos: Photo[] = [
  // Exteriores & Envolvente
  { src: "4424", w: 1600, h: 1067, cat: "exteriores", alt: "Fachada e jardim do lar" },
  { src: "4425", w: 1600, h: 1067, cat: "exteriores", alt: "Entrada principal do lar" },
  { src: "4427", w: 1600, h: 1067, cat: "exteriores", alt: "Espaço de refeições ao ar livre" },
  { src: "4432", w: 1600, h: 1067, cat: "exteriores", alt: "Alpendre e exterior do edifício" },
  { src: "4434", w: 1600, h: 1067, cat: "exteriores", alt: "Acessos exteriores do lar" },
  { src: "4440", w: 1600, h: 1067, cat: "exteriores", alt: "Zona de churrasco e convívio exterior" },
  { src: "4443", w: 1600, h: 1067, cat: "exteriores", alt: "Piscina do lar" },
  { src: "4444", w: 1600, h: 1067, cat: "exteriores", alt: "Piscina e jardim envolvente" },
  { src: "4447", w: 1600, h: 1067, cat: "exteriores", alt: "Zona da piscina" },
  { src: "4451", w: 1600, h: 1067, cat: "exteriores", alt: "Vista sobre a região da Roliça" },
  { src: "4453", w: 1600, h: 1067, cat: "exteriores", alt: "Jardim e envolvente natural" },
  { src: "4466", w: 1600, h: 1067, cat: "exteriores", alt: "Vista exterior do edifício" },
  // Espaços Comuns
  { src: "4457", w: 1600, h: 1067, cat: "comuns", alt: "Hall de entrada" },
  { src: "4470", w: 1600, h: 1067, cat: "comuns", alt: "Sala de estar luminosa" },
  { src: "4477", w: 1600, h: 1067, cat: "comuns", alt: "Sala de atividades" },
  { src: "4479", w: 1600, h: 1067, cat: "comuns", alt: "Detalhe decorativo de uma sala comum" },
  { src: "4482", w: 1600, h: 1067, cat: "comuns", alt: "Sala de refeições" },
  { src: "4504", w: 1067, h: 1600, cat: "comuns", alt: "Capela do lar" },
  { src: "4505", w: 1600, h: 1067, cat: "comuns", alt: "Capela do lar" },
  { src: "4508", w: 1600, h: 1067, cat: "comuns", alt: "Sala de convívio" },
  { src: "4509", w: 1600, h: 1067, cat: "comuns", alt: "Sala de convívio com acesso ao jardim" },
  { src: "4514", w: 1600, h: 1067, cat: "comuns", alt: "Sala de estar comum" },
  { src: "4518", w: 1600, h: 1067, cat: "comuns", alt: "Salão comum" },
  // Quartos
  { src: "4485", w: 1600, h: 1067, cat: "quartos", alt: "Quarto individual" },
  { src: "4487", w: 1600, h: 1067, cat: "quartos", alt: "Quarto com vista para o jardim" },
  { src: "4489", w: 1600, h: 1067, cat: "quartos", alt: "Quarto duplo" },
  { src: "4490", w: 1600, h: 1067, cat: "quartos", alt: "Quarto confortável" },
  { src: "4492", w: 1600, h: 1067, cat: "quartos", alt: "Quarto com duas camas" },
  { src: "4494", w: 1600, h: 1067, cat: "quartos", alt: "Quarto privado" },
  { src: "4496", w: 1600, h: 1073, cat: "quartos", alt: "Quarto individual luminoso" },
  { src: "4499", w: 1600, h: 1067, cat: "quartos", alt: "Quarto com duas camas" },
  { src: "4501", w: 1600, h: 1067, cat: "quartos", alt: "Quarto privado" },
  { src: "4502", w: 1600, h: 1067, cat: "quartos", alt: "Quarto duplo" },
];

export default function ANossaCasa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback((dir: number) => {
    setActive((cur) => (cur === null ? cur : (cur + dir + photos.length) % photos.length));
  }, []);

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, go]);

  useGSAP(
    () => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray<HTMLElement>(".section-head").forEach((head) => {
        gsap.from(head, {
          scrollTrigger: { trigger: head, start: "top 85%" },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".gallery-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 92%" },
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen">
      {/* Intro Header */}
      <section className="relative w-full pt-40 md:pt-52 pb-16 md:pb-20 px-6 md:px-12 bg-cream flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center gap-6">
          <span className="hero-text font-mono text-xs uppercase tracking-[0.25em] text-rose">
            Galeria
          </span>
          <h1 className="hero-text font-serif text-5xl md:text-7xl text-charcoal leading-[1.1]">
            A nossa <span className="italic text-rose">casa</span>
          </h1>
          <p className="hero-text font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl leading-relaxed">
            Um olhar pelos espaços que tornam este lar uma verdadeira casa — dos jardins e da
            piscina aos quartos acolhedores e às salas onde nos reunimos todos os dias.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {sections.map((section, si) => {
        const items = photos
          .map((p, i) => ({ ...p, i }))
          .filter((p) => p.cat === section.id);
        return (
          <section
            key={section.id}
            className={`relative w-full py-20 md:py-28 px-6 md:px-12 flex justify-center ${
              si % 2 === 1 ? "bg-stone/5" : "bg-cream"
            }`}
          >
            <div className="w-full max-w-6xl flex flex-col">
              <div className="section-head flex flex-col gap-3 mb-10 md:mb-14 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose">
                  {String(si + 1).padStart(2, "0")} — {items.length} fotografias
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-charcoal">{section.title}</h2>
                <p className="font-sans text-charcoal/60 leading-relaxed">{section.desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {items.map((p) => (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => setActive(p.i)}
                    aria-label={`Ampliar fotografia: ${p.alt}`}
                    className="gallery-item group relative w-full aspect-[3/2] rounded-[1.5rem] overflow-hidden bg-stone/10 isolate cursor-pointer"
                  >
                    <img
                      src={`/images/galeria/${p.src}.jpg`}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream/90 text-charcoal flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-cream flex justify-center text-center">
        <div className="w-full max-w-3xl flex flex-col items-center gap-6 bg-stone p-10 md:p-14 rounded-[2.5rem] shadow-xl">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">Venha conhecer a nossa casa</h2>
          <p className="font-sans text-cream/80 max-w-lg leading-relaxed">
            As fotografias dizem muito, mas nada substitui uma visita. Teremos todo o gosto em
            recebê-lo e mostrar-lhe o ambiente familiar que nos distingue.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-cream text-charcoal font-sans font-medium px-8 py-3.5 rounded-[1.5rem] overflow-hidden group/btn hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative mt-2"
          >
            <span className="relative z-10 group-hover/btn:text-cream transition-colors duration-300">
              Marcar Visita
            </span>
            <div className="absolute inset-0 bg-rose scale-y-0 origin-bottom group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 md:p-10 animate-[fadeIn_0.3s_ease]"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotografias"
        >
          <span className="absolute top-6 left-6 font-mono text-xs tracking-widest text-cream/60">
            {String(active + 1).padStart(2, "0")} / {photos.length}
          </span>

          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center backdrop-blur-md transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Fotografia anterior"
            className="absolute left-3 md:left-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center backdrop-blur-md transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <figure className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/images/galeria/${photos[active].src}.jpg`}
              alt={photos[active].alt}
              className="max-h-[80vh] max-w-[88vw] w-auto h-auto object-contain rounded-[1rem] shadow-2xl"
            />
            <figcaption className="font-sans text-sm text-cream/80">
              {photos[active].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Fotografia seguinte"
            className="absolute right-3 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center backdrop-blur-md transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
