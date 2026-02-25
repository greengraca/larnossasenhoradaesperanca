"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Home as HomeIcon, Star, Sun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
    { year: "2010", title: "O Início do Sonho", desc: "Abertura das portas com a visão de criar um lar que fosse verdadeiramente uma extensão da família." },
    { year: "2015", title: "Expansão dos Cuidados", desc: "Integração de equipa médica 24h e modernização das instalações para maior conforto." },
    { year: "2020", title: "Reconhecimento de Excelência", desc: "Distinguido pelas práticas humanizadas no cuidado sénior na região Oeste." },
    { year: "2024", title: "Renovação e Futuro", desc: "Atualização de todos os espaços de bem-estar com foco na sustentabilidade e terapias avançadas." }
];

const values = [
    { icon: Heart, title: "Dignidade", desc: "Tratamos cada residente com o respeito e reverência que a sua história de vida merece." },
    { icon: HomeIcon, title: "Família", desc: "Cultivamos um ambiente acolhedor onde os afetos são tão importantes quanto a saúde." },
    { icon: Star, title: "Profissionalismo", desc: "O nosso rigor clínico garante segurança, confiança e paz de espírito em todos os momentos." },
    { icon: Sun, title: "Esperança", desc: "Acreditamos que cada dia é uma oportunidade para sorrir, aprender e partilhar." }
];

const team = [
    { name: "Dra. Maria Helena", role: "Diretora Técnica", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop" },
    { name: "Enf. João Silva", role: "Enfermeiro Chefe", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop" },
    { name: "Sofia Mendes", role: "Animadora Sociocultural", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop" },
    { name: "Rita Costa", role: "Nutricionista Clínica", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" }
];

export default function Sobre() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
            });

            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            });

            gsap.from(".value-card", {
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            gsap.from(".team-member", {
                scrollTrigger: {
                    trigger: ".team-grid",
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col w-full min-h-screen">

            {/* Mission Hero */}
            <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-cream flex justify-center">
                <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8">
                    <h1 className="hero-text font-serif text-5xl md:text-7xl text-charcoal leading-tight">
                        A nossa missão é <span className="text-rose italic">cuidar</span> de quem sempre cuidou de nós.
                    </h1>
                    <p className="hero-text font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl leading-relaxed">
                        No Lar Familiar Nossa Senhora da Esperança, acreditamos que envelhecer com dignidade exige mais do que excelência clínica — exige um ambiente familiar, afeto genuíno e um profundo respeito por cada história de vida.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-stone/5 flex justify-center">
                <div className="w-full max-w-4xl flex flex-col">
                    <h2 className="font-serif text-4xl text-charcoal mb-16 text-center">A Nossa História</h2>

                    <div className="relative flex flex-col gap-12 md:gap-0">
                        {/* Center line for desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone/20 -translate-x-1/2" />

                        {timeline.map((item, i) => (
                            <div key={i} className={`timeline-item relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-rose rounded-full z-10 shadow-[0_0_0_8px_rgba(245,240,232,1)]" />

                                {/* Desktop Empty Space */}
                                <div className="hidden md:block w-5/12" />

                                {/* Content */}
                                <div className="w-full md:w-5/12 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-stone/10 md:my-8 shadow-sm">
                                    <span className="font-mono text-rose text-sm font-medium tracking-widest">{item.year}</span>
                                    <h3 className="font-serif text-2xl text-charcoal mt-2 mb-4">{item.title}</h3>
                                    <p className="font-sans text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-cream flex justify-center">
                <div className="w-full max-w-6xl flex flex-col items-center">
                    <h2 className="font-serif text-4xl text-charcoal mb-16 text-center">Os Nossos Valores</h2>

                    <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {values.map((v, i) => (
                            <div key={i} className="value-card bg-stone p-8 rounded-[2rem] text-cream flex flex-col gap-6">
                                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                                    <v.icon className="w-5 h-5 text-cream" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                                    <p className="font-sans text-cream/70 text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-stone/5 flex justify-center">
                <div className="w-full max-w-6xl flex flex-col items-center">
                    <h2 className="font-serif text-4xl text-charcoal mb-4 text-center">A Nossa Equipa</h2>
                    <p className="font-sans text-charcoal/60 text-center max-w-2xl mb-16">
                        Profissionais dedicados, movidos pela vocação de cuidar e garantir o bem-estar absoluto de todos os nossos residentes.
                    </p>

                    <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {team.map((member, i) => (
                            <div key={i} className="team-member group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-stone/10 isolate">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent z-10" />

                                {/* Content info */}
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl text-cream">{member.name}</h3>
                                    <p className="font-sans text-rose text-sm font-medium mt-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
