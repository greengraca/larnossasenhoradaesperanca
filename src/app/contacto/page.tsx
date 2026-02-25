"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, CheckCircle } from "lucide-react";

export default function Contacto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        gdpr: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
            });

            gsap.from(".form-element", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.out",
                delay: 0.3,
            });

            gsap.from(".contact-details", {
                x: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.5,
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData((prev) => ({ ...prev, [name]: val }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.gdpr) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", phone: "", email: "", message: "", gdpr: false });

            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div ref={containerRef} className="flex flex-col w-full min-h-screen bg-cream">

            {/* Contact Hero */}
            <section className="relative w-full pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 flex justify-center">
                <div className="w-full max-w-4xl flex flex-col items-center text-center gap-6">
                    <h1 className="hero-text font-serif text-5xl md:text-7xl text-charcoal leading-tight">
                        Estamos aqui para si.
                    </h1>
                    <p className="hero-text font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl">
                        A porta da nossa casa está sempre aberta. Entre em contacto connosco para marcar uma visita, esclarecer dúvidas ou conhecer melhor o nosso ambiente familiar.
                    </p>
                </div>
            </section>

            {/* Two-Column Layout */}
            <section className="relative w-full pb-24 md:pb-32 px-6 md:px-12 flex justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7 bg-white/50 border border-stone/10 p-8 md:p-12 rounded-[2rem] shadow-sm">

                        {isSuccess ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-6 text-sage">
                                <CheckCircle className="w-20 h-20" />
                                <div>
                                    <h3 className="font-serif text-3xl text-charcoal mb-2">Mensagem Enviada!</h3>
                                    <p className="font-sans text-charcoal/70 max-w-sm mx-auto">
                                        Agradecemos o seu contacto. Entraremos em comunicação consigo o mais brevemente possível.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                                <h2 className="form-element font-serif text-3xl text-charcoal mb-2">Envie-nos uma mensagem</h2>

                                <div className="form-element flex flex-col gap-2">
                                    <label htmlFor="name" className="font-sans text-sm font-medium text-charcoal/80">Nome Completo *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 bg-stone/5 border border-stone/20 rounded-xl font-sans text-charcoal outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all"
                                        placeholder="O seu nome completo"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-element flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-sans text-sm font-medium text-charcoal/80">Telefone *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-stone/5 border border-stone/20 rounded-xl font-sans text-charcoal outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all"
                                            placeholder="9xx xxx xxx"
                                        />
                                    </div>

                                    <div className="form-element flex flex-col gap-2">
                                        <label htmlFor="email" className="font-sans text-sm font-medium text-charcoal/80">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-stone/5 border border-stone/20 rounded-xl font-sans text-charcoal outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all"
                                            placeholder="exemplo@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-element flex flex-col gap-2">
                                    <label htmlFor="message" className="font-sans text-sm font-medium text-charcoal/80">Mensagem *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 bg-stone/5 border border-stone/20 rounded-xl font-sans text-charcoal outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all resize-none"
                                        placeholder="Como podemos ajudar?"
                                    />
                                </div>

                                <div className="form-element flex items-start gap-4 mt-2">
                                    <div className="relative flex items-start mt-1">
                                        <input
                                            type="checkbox"
                                            id="gdpr"
                                            name="gdpr"
                                            required
                                            checked={formData.gdpr}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded border-stone/30 text-rose focus:ring-rose accent-rose cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="gdpr" className="font-sans text-sm text-charcoal/70 leading-relaxed cursor-pointer select-none">
                                        Concordo com a Política de Privacidade e autorizo o tratamento dos meus dados pessoais para resposta ao meu pedido.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || !formData.gdpr}
                                    className="form-element inline-flex items-center justify-center gap-2 bg-rose text-cream font-sans font-medium px-8 py-4 rounded-xl mt-4 w-full md:w-auto hover:bg-rose/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? "A enviar..." : (
                                        <>
                                            <span>Enviar Mensagem</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right: Contact Details & Map */}
                    <div className="contact-details lg:col-span-5 flex flex-col gap-10">

                        {/* Info Cards */}
                        <div className="bg-charcoal text-cream p-10 rounded-[2rem] shadow-xl flex flex-col gap-8">
                            <h3 className="font-serif text-3xl heading">Informações</h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-rose shrink-0" />
                                    <div className="font-sans">
                                        <p className="text-sm text-cream/60 mb-1">Morada</p>
                                        <p className="text-base text-cream/90">Rua Condessa Maria Delgada 58<br />Roliça, 2540-624</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-rose shrink-0" />
                                    <div className="font-sans flex flex-col gap-1">
                                        <p className="text-sm text-cream/60">Contactos</p>
                                        <a href="tel:913844028" className="text-base text-cream/90 hover:text-rose transition-colors">913 844 028</a>
                                        <a href="tel:918299532" className="text-base text-cream/90 hover:text-rose transition-colors">918 299 532</a>
                                        <a href="tel:913787535" className="text-base text-cream/90 hover:text-rose transition-colors">913 787 535</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-rose shrink-0" />
                                    <div className="font-sans">
                                        <p className="text-sm text-cream/60 mb-1">Email</p>
                                        <a href="mailto:instantedeternura@gmail.com" className="text-base text-cream/90 hover:text-rose transition-colors break-all">instantedeternura@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-cream/10 mt-2">
                                <p className="font-mono text-sm tracking-widest uppercase text-rose mb-4">Horário de Visitas</p>
                                <p className="font-serif text-2xl text-cream/90">10h00 — 19h00</p>
                                <p className="font-sans text-xs text-cream/50 mt-1">Todos os dias, incluindo fins de semana e feriados.</p>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <a href="#" className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:bg-rose hover:border-transparent transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:bg-rose hover:border-transparent transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-64 md:h-80 lg:h-full lg:min-h-[300px] rounded-[2rem] overflow-hidden shadow-sm border border-stone/10 bg-stone/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.427845012574!2d-9.190623184651336!3d39.300676779509424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f4cd5c57b5387%3A0xe7f87a8b417bd88d!2sR.%20Condessa%20Maria%20Delgada%2058%2C%202540-624%20Roli%C3%A7a!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover grayscale opacity-90 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
