"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <div className={`fixed top-8 left-0 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
            <nav
                className={`pointer-events-auto flex flex-col w-full max-w-6xl transition-all duration-500 overflow-hidden relative ${isScrolled || isMobileMenuOpen
                    ? "bg-cream/95 backdrop-blur-2xl border border-stone/20 shadow-xl shadow-charcoal/5"
                    : "bg-transparent border-transparent"
                    } rounded-[2rem] md:rounded-full`}
            >
                <div className="flex items-center justify-between w-full px-6 lg:px-8 py-3.5">
                    <div className="w-auto md:w-1/3 flex justify-start items-center">
                        <Link href="/" className="group flex flex-col shrink-0">
                            <span className={`font-serif text-xl sm:text-2xl font-medium tracking-wide transition-colors duration-300 drop-shadow-sm group-hover:-translate-y-[1px] ${!isScrolled && pathname === '/' && !isMobileMenuOpen ? "text-cream" : "text-charcoal"}`}>
                                Nossa Senhora da Esperança
                            </span>
                        </Link>
                    </div>

                    <div className="w-1/3 hidden md:flex items-center justify-center gap-6 lg:gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            const isHomeTop = !isScrolled && pathname === '/' && !isMobileMenuOpen;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-sm font-sans font-medium hover:-translate-y-[1px] transition-all duration-300 ${isActive ? "text-rose" : (isHomeTop ? "text-cream/90 hover:text-cream drop-shadow-md" : "text-charcoal/80 hover:text-charcoal")}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="w-auto md:w-1/3 flex justify-end items-center gap-4">
                        <Link
                            href="/contacto"
                            className={`hidden md:inline-flex items-center justify-center font-sans font-medium text-sm px-6 py-2.5 lg:px-8 lg:py-3 rounded-full overflow-hidden group hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative ${(!isScrolled && pathname === '/' && !isMobileMenuOpen) ? 'bg-cream text-charcoal' : 'bg-rose text-cream'}`}
                        >
                            <span className="relative z-10 transition-colors duration-300">Marcar Visita</span>
                            <div className={`absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 ${(!isScrolled && pathname === '/' && !isMobileMenuOpen) ? 'bg-rose' : 'bg-stone'}`} />
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full shrink-0 transition-colors duration-300 ${(!isScrolled && pathname === '/' && !isMobileMenuOpen) ? 'bg-cream/20 text-cream hover:bg-cream/30' : 'bg-stone/10 text-charcoal hover:bg-stone/20'}`}
                        >
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[1.5px]' : 'mb-1'}`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1.5px]' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 pb-8 pt-4' : 'max-h-0 opacity-0 py-0'}`}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-lg font-serif font-medium transition-colors duration-300 ${isActive ? "text-rose" : "text-charcoal/80 hover:text-charcoal"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contacto"
                        className="mt-4 inline-flex items-center justify-center bg-rose text-cream font-sans font-medium text-sm px-8 py-3 rounded-full overflow-hidden group hover:scale-[1.03] transition-transform duration-300 relative"
                    >
                        <span className="relative z-10">Marcar Visita</span>
                        <div className="absolute inset-0 bg-stone scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 z-0" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
