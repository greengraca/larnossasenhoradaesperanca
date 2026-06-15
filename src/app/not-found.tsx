import Link from "next/link";

const quickLinks = [
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "A Nossa Casa", path: "/a-nossa-casa" },
  { name: "Contacto", path: "/contacto" },
];

export default function NotFound() {
  return (
    <section className="relative w-full min-h-[78vh] pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-cream flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center text-center gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose">Erro 404</span>

        <h1 className="font-serif text-8xl md:text-9xl text-charcoal leading-none">
          4<span className="italic text-rose">0</span>4
        </h1>

        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          Página não encontrada
        </h2>

        <p className="font-sans text-charcoal/70 max-w-md leading-relaxed">
          A página que procura não existe ou foi movida. Mas a porta da nossa casa
          continua aberta.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-rose text-cream font-sans font-medium px-8 py-3.5 rounded-[1.5rem] overflow-hidden group hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative mt-2"
        >
          <span className="relative z-10">Voltar ao início</span>
          <div className="absolute inset-0 bg-stone scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 pt-8 border-t border-stone/15 w-full max-w-md">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-sans text-sm text-charcoal/60 hover:text-rose hover:-translate-y-[1px] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
