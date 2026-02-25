import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream mt-24 rounded-t-[3rem] px-6 py-16 md:px-12 md:py-20 flex justify-center">
            <div className="w-full max-w-6xl flex flex-col gap-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 hover:text-white transition-colors duration-300">

                    <div className="flex flex-col gap-4">
                        <h3 className="font-serif text-3xl font-medium tracking-wide">
                            Nossa Senhora da Esperança
                        </h3>
                        <p className="font-sans text-cream/70 text-sm max-w-xs">
                            Líder na arte de cuidar. Um ambiente familiar e humanizado no coração da Roliça.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-sans font-semibold text-rose uppercase tracking-wider text-xs">Menu</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className="font-sans text-sm text-cream/80 hover:text-cream hover:-translate-y-[1px] transition-all w-fit">Início</Link>
                            <Link href="/sobre" className="font-sans text-sm text-cream/80 hover:text-cream hover:-translate-y-[1px] transition-all w-fit">Sobre Nós</Link>
                            <Link href="/servicos" className="font-sans text-sm text-cream/80 hover:text-cream hover:-translate-y-[1px] transition-all w-fit">Serviços</Link>
                            <Link href="/contacto" className="font-sans text-sm text-cream/80 hover:text-cream hover:-translate-y-[1px] transition-all w-fit">Contacto</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-sans font-semibold text-rose uppercase tracking-wider text-xs">Contacto</h4>
                        <div className="flex flex-col gap-3">
                            <a href="tel:913844028" className="flex items-center gap-2 font-sans text-sm text-cream/80 hover:text-cream group w-fit">
                                <Phone className="w-4 h-4 group-hover:text-rose transition-colors" />
                                <span>913 844 028</span>
                            </a>
                            <a href="tel:918299532" className="flex items-center gap-2 font-sans text-sm text-cream/80 hover:text-cream group w-fit">
                                <Phone className="w-4 h-4 group-hover:text-rose transition-colors" />
                                <span>918 299 532</span>
                            </a>
                            <a href="mailto:instantedeternura@gmail.com" className="flex items-center gap-2 font-sans text-sm text-cream/80 hover:text-cream group w-fit">
                                <Mail className="w-4 h-4 group-hover:text-rose transition-colors" />
                                <span>instantedeternura@gmail.com</span>
                            </a>
                            <div className="flex items-start gap-2 font-sans text-sm text-cream/80 w-fit">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                <span>Rua Condessa Maria Delgada 58,<br />Roliça, 2540-624</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-sans font-semibold text-rose uppercase tracking-wider text-xs">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-rose hover:-translate-y-1 transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-rose hover:-translate-y-1 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-6 p-4 rounded-2xl bg-white/5 flex items-center gap-3">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <span className="font-mono text-xs tracking-tight text-cream/90 uppercase">Sistema Operacional 24h</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-xs text-cream/50">
                        &copy; {new Date().getFullYear()} Lar Familiar Nossa Senhora da Esperança. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacidade" className="font-sans text-xs text-cream/50 hover:text-cream transition-colors">
                            Política de Privacidade
                        </Link>
                        <span className="font-sans text-xs text-cream/50">
                            Aviso RGPD
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
