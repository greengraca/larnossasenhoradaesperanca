"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stethoscope, Users, Apple, HeartHandshake, Sparkles, Car, Flower2, Waves } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const mainServices = [
    {
        step: "01",
        title: "Cuidados Médicos",
        desc: "A nossa equipa clínica e de enfermagem está disponível 24 horas por dia, assegurando gestão rigorosa da medicação, acompanhamento de patologias crónicas e resposta imediata a qualquer necessidade de saúde. Cada residente beneficia de um plano individual de cuidados médicos, garantindo não só a sua estabilidade clínica, mas também o seu conforto e dignidade constantes.",
        icon: Stethoscope,
        bgColor: "bg-sage/10",
        svg: (
            <svg viewBox="0 0 800 400" className="w-full h-full text-sage opacity-40">
                <path
                    d="M0 200 h 200 l 40 -80 l 60 200 l 80 -280 l 60 160 h 360"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="waveform-path"
                    style={{ strokeDasharray: "1600", strokeDashoffset: "1600" }}
                />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Atividades e Bem-Estar",
        desc: "O envelhecimento ativo é um pilar da nossa filosofia. Desenvolvemos programas diários adaptados, focados na estimulação cognitiva e manutenção da mobilidade. Promovemos momentos de partilha social, trabalhos manuais e acesso aos nossos jardins terapêuticos, assegurando que o brilho no olhar se mantém vivo. Uma mente sã acompanhada de um coração alegre fazem a diferença.",
        icon: Users,
        bgColor: "bg-rose/10",
        svg: (
            <svg viewBox="0 0 800 400" className="w-full h-full text-rose opacity-30">
                <g className="concentric-circles origin-center">
                    <circle cx="400" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 15" />
                    <circle cx="400" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10" className="reverse-spin" />
                    <circle cx="400" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                </g>
            </svg>
        ),
    },
    {
        step: "03",
        title: "Nutrição e Alimentação",
        desc: "Acreditamos que a alimentação é um dos grandes prazeres da vida e um elemento fundamental para a saúde. As nossas refeições são confecionadas nas nossas instalações, privilegiando ingredientes frescos e locais. Oferecemos planos alimentares totalmente personalizados por nutricionistas, respeitando restrições dietéticas e preferências individuais, num ambiente de convívio familiar à mesa.",
        icon: Apple,
        bgColor: "bg-stone/10",
        svg: (
            <svg viewBox="0 0 800 400" className="w-full h-full text-stone opacity-40">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <line x1="0" y1="0" x2="800" y2="0" stroke="currentColor" strokeWidth="4" className="scanner-line" opacity="0.6" />
            </svg>
        ),
    },
];

const additionalServices = [
    { icon: HeartHandshake, title: "Apoio Psicossocial", desc: "Acompanhamento emocional contínuo para residentes e famílias." },
    { icon: Sparkles, title: "Higiene Pessoal e Imagem", desc: "Cuidados diários assistidos, serviço de cabeleireiro e estética disponíveis." },
    { icon: Car, title: "Transporte e Acompanhamento", desc: "Transporte adaptado para consultas e passeios com apoio de um profissional." },
    { icon: Flower2, title: "Espaços Verdes e Ar Livre", desc: "Jardins seguros e tranquilos desenhados para a mobilidade reduzida." },
    { icon: Waves, title: "Lavandaria Própria", desc: "Tratamento meticuloso de roupa pessoal e de cama nas nossas instalações." },
    { icon: Users, title: "Animação Sociocultural", desc: "Festividades, celebrações e atividades enriquecedoras com a comunidade." },
];

export default function Servicos() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance
            gsap.from(".hero-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
            });

            // SVG Animations loop
            gsap.to(".waveform-path", {
                strokeDashoffset: 0,
                duration: 3,
                ease: "linear",
                repeat: -1,
            });

            gsap.to(".concentric-circles", {
                rotation: 360,
                duration: 20,
                ease: "linear",
                repeat: -1,
                transformOrigin: "center center",
            });

            gsap.to(".reverse-spin", {
                rotation: -360,
                duration: 15,
                ease: "linear",
                repeat: -1,
                transformOrigin: "center center",
            });

            gsap.to(".scanner-line", {
                y: 400,
                duration: 4,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
            });

            // Stacking Cards Logic
            const cards = cardsRef.current;
            cards.forEach((card, i) => {
                if (!card) return;

                // Pin each card
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    endTrigger: ".stack-container",
                    end: "bottom bottom",
                });

                // Effect on the card underneath when a new card arrives
                if (i < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        filter: "blur(8px)",
                        opacity: 0.6,
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                        },
                    });
                }
            });

            // Additional Services Reveal
            gsap.from(".add-service-card", {
                scrollTrigger: {
                    trigger: ".additional-services",
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col w-full min-h-screen">

            {/* Hero Section */}
            <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-sage/20 flex justify-center overflow-hidden">
                {/* Subtle texture for hero instead of image */}
                <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none bg-[url('https://images.unsplash.com/photo-1596489395232-fb94e5ec442e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-6">
                    <h1 className="hero-text font-serif text-5xl md:text-7xl text-charcoal leading-tight">
                        Os Nossos <span className="text-sage italic">Serviços</span>
                    </h1>
                    <p className="hero-text font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl">
                        Uma abordagem holística onde cada detalhe é desenhado para promover a qualidade de vida, autonomia e bem-estar total.
                    </p>
                </div>
            </section>

            {/* Stacking Cards Section */}
            <section className="stack-container relative w-full bg-charcoal pb-4">
                {mainServices.map((service, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el;
                        }}
                        className={`w-full h-screen sticky top-0 flex items-center justify-center p-6 md:p-12 ${service.bgColor} backdrop-blur-3xl border-b border-cream/10`}
                    >
                        {/* Background SVG Animation */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                            {service.svg}
                        </div>

                        {/* Content Box */}
                        <div className="relative z-10 w-full max-w-5xl bg-cream/95 backdrop-blur-md p-10 md:p-16 lg:p-20 rounded-[2.5rem] shadow-2xl flex flex-col gap-8 md:gap-12 border border-stone/20">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-stone/5 flex items-center justify-center border border-stone/10 shadow-sm text-rose">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">{service.title}</h2>
                                </div>
                                <span className="font-mono text-5xl md:text-6xl lg:text-8xl font-medium text-stone/20 lg:-mt-10 lg:-mr-4 tracking-tighter">
                                    {service.step}
                                </span>
                            </div>

                            <p className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed max-w-3xl">
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Additional Services Grid */}
            <section className="additional-services relative w-full py-24 md:py-32 px-6 md:px-12 bg-cream flex justify-center z-10 -mt-4 rounded-t-[3rem]">
                <div className="w-full max-w-6xl flex flex-col items-center">
                    <h2 className="font-serif text-4xl text-charcoal mb-4 text-center">Serviços Complementares</h2>
                    <p className="font-sans text-charcoal/60 text-center max-w-2xl mb-16">
                        Pequenos detalhes de conforto que garantem uma estadia livre de preocupações para toda a família.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {additionalServices.map((srv, i) => (
                            <div key={i} className="add-service-card bg-stone/5 p-8 rounded-[2rem] border border-stone/10 hover:border-stone/30 hover:bg-stone/10 transition-colors flex flex-col gap-4">
                                <srv.icon className="w-6 h-6 text-rose" />
                                <h3 className="font-serif text-2xl text-charcoal">{srv.title}</h3>
                                <p className="font-sans text-charcoal/70 text-sm leading-relaxed">{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
