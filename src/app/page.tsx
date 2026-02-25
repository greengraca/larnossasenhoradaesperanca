"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HeartPulse, Palmtree, Utensils, Clock, HeartHandshake, ShieldCheck, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const philRef = useRef<HTMLDivElement>(null);
  const q1Ref = useRef<HTMLParagraphElement>(null);
  const q2Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Hero text reveal
    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.5,
    });

    // Philosophy ScrollTrigger
    gsap.from(q1Ref.current, {
      scrollTrigger: {
        trigger: philRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(q2Ref.current, {
      scrollTrigger: {
        trigger: philRef.current,
        start: "top 50%",
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    // Services staggered reveal
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[100dvh] min-h-[600px] flex items-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden bg-charcoal">
        <img
          src="https://images.unsplash.com/photo-1576765974102-b756026ecee3?q=80&w=2938&auto=format&fit=crop"
          alt="Ambiente acolhedor e familiar"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6">
          <h1 className="hero-text font-serif text-5xl md:text-7xl lg:text-8xl text-cream max-w-4xl leading-[1.1]">
            Onde a dignidade encontra uma nova <span className="italic">família</span>
          </h1>
          <p className="hero-text font-sans text-xl md:text-2xl text-rose font-medium mt-2">
            Líder na arte de cuidar.
          </p>
          <div className="hero-text mt-6">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-rose text-cream font-sans font-medium px-8 py-3.5 rounded-[1.5rem] overflow-hidden group hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative"
            >
              <span className="relative z-10">Marcar Visita</span>
              <div className="absolute inset-0 bg-stone scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight Strip */}
      <section ref={servicesRef} className="relative w-full px-6 md:px-12 py-24 md:py-32 bg-cream flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: HeartPulse, title: "Cuidados Médicos", desc: "Acompanhamento clínico e enfermagem disponível 24 horas por dia." },
            { icon: Palmtree, title: "Atividades e Bem-Estar", desc: "Programas diários de estimulação cognitiva, física e social." },
            { icon: Utensils, title: "Nutrição e Alimentação", desc: "Planos alimentares personalizados e confecionados localmente com rigor." }
          ].map((srv, i) => (
            <div key={i} className="service-card h-full">
              <Link
                href="/servicos"
                className="group w-full h-full bg-stone/5 p-8 rounded-[2rem] border border-stone/10 hover:border-stone/30 hover:bg-stone/10 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col gap-6 cursor-pointer"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-cream flex items-center justify-center text-sage group-hover:text-rose transition-colors duration-300 shadow-sm border border-stone/10">
                  <srv.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{srv.title}</h3>
                  <p className="font-sans text-charcoal/70 leading-relaxed text-sm md:text-base">{srv.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative w-full px-6 py-12 bg-stone flex justify-center border-y border-stone/20 overflow-hidden">
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Clock, label: "Atendimento 24h" },
            { icon: HeartHandshake, label: "Ambiente Familiar" },
            { icon: ShieldCheck, label: "Equipa Especializada" },
            { icon: MapPin, label: "Localização em Roliça" }
          ].map((trust, i) => (
            <div key={i} className="flex items-center gap-3 text-cream/90">
              <trust.icon className="w-5 h-5 text-cream/70" />
              <span className="font-sans font-medium tracking-wide text-sm">{trust.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Manifesto Section */}
      <section ref={philRef} className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-charcoal overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=2600"
            alt="Textura de fundo"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale"
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-16">
          <p ref={q1Ref} className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream/60 max-w-2xl">
            &quot;A maioria vê o envelhecimento como um desafio a gerir.&quot;
          </p>
          <p ref={q2Ref} className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream leading-[1.15] lg:leading-[1.1] ml-auto text-right max-w-4xl">
            &quot;Nós vemos cada história de vida como uma <span className="text-rose italic">arte</span> a honrar.&quot;
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-cream flex justify-center text-center">
        <div className="w-full max-w-3xl flex flex-col items-center gap-10 bg-stone p-10 md:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516086745152-19e49c7161b0?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <h2 className="font-serif text-4xl md:text-5xl text-cream">Venha conhecer a nossa casa</h2>
            <p className="font-sans text-cream/80 max-w-lg mb-4">
              Estamos disponíveis para o receber e mostrar-lhe o ambiente familiar que nos distingue.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-mono text-sm tracking-tight text-cream/90 mb-4">
              <a href="tel:913844028" className="hover:text-rose transition-colors">913 844 028</a>
              <span className="hidden md:block opacity-30">|</span>
              <a href="tel:918299532" className="hover:text-rose transition-colors">918 299 532</a>
              <span className="hidden md:block opacity-30">|</span>
              <a href="tel:913787535" className="hover:text-rose transition-colors">913 787 535</a>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-cream text-charcoal font-sans font-medium px-8 py-3.5 rounded-[1.5rem] overflow-hidden group/btn hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative mt-2"
            >
              <span className="relative z-10 group-hover/btn:text-cream transition-colors duration-300">Enviar Mensagem</span>
              <div className="absolute inset-0 bg-rose scale-y-0 origin-bottom group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
            </Link>

            <p className="font-mono text-xs text-cream/50 mt-6 tracking-widest uppercase">
              Horário de Visitas: 10h–19h
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
