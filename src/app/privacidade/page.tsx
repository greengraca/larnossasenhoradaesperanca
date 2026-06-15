import Link from "next/link";

// NOTA: Texto-base de RGPD, alinhado com os dados da entidade responsável.
// Recomenda-se uma revisão jurídica final antes da publicação definitiva.

const sections = [
  {
    title: "1. Responsável pelo tratamento",
    body: [
      "O responsável pelo tratamento dos seus dados pessoais é a Instante de Ternura Unipessoal, Lda. (NIF 510933203), entidade que explora o Lar Familiar Nossa Senhora da Esperança, com morada na Rua Condessa Maria Delgada 58, 2540-624 Roliça, Portugal.",
      "Para qualquer questão relacionada com proteção de dados, pode contactar-nos através do email instantedeternura@gmail.com ou dos telefones 913 835 271 e 262 608 326.",
    ],
  },
  {
    title: "2. Âmbito desta política",
    body: [
      "Esta política aplica-se aos dados pessoais recolhidos através deste website. O tratamento de dados dos residentes e das suas famílias, no âmbito da prestação de cuidados, rege-se por documentação própria, disponibilizada diretamente pelo Lar.",
    ],
  },
  {
    title: "3. Que dados recolhemos",
    body: [
      "Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto — nome, número de telefone, endereço de email e o conteúdo da mensagem.",
      "O website não recolhe dados de saúde nem cria perfis dos visitantes. O fornecimento destes dados é facultativo, mas necessário para podermos responder ao seu pedido.",
    ],
  },
  {
    title: "4. Finalidade do tratamento",
    body: [
      "Os dados destinam-se exclusivamente a responder ao seu pedido de contacto, marcação de visita ou esclarecimento de dúvidas. Não são utilizados para marketing nem partilhados com terceiros para esse fim.",
    ],
  },
  {
    title: "5. Fundamento legal",
    body: [
      "O tratamento assenta no seu consentimento, manifestado no envio do formulário (artigo 6.º, n.º 1, alínea a, do RGPD), e no interesse legítimo do Lar em responder a contactos e pedidos de informação (alínea f).",
      "Pode retirar o seu consentimento a qualquer momento, sem que isso afete a licitude do tratamento efetuado anteriormente.",
    ],
  },
  {
    title: "6. Conservação dos dados",
    body: [
      "Conservamos os dados apenas durante o período necessário para responder ao seu pedido e cumprir eventuais obrigações legais, sendo depois eliminados de forma segura.",
      "As mensagens enviadas através do formulário são processadas pelo serviço Web3Forms, que as elimina automaticamente no prazo de 30 dias.",
    ],
  },
  {
    title: "7. Subcontratantes e transferências internacionais",
    body: [
      "O envio do formulário é processado pela Web3Forms, que reencaminha a mensagem para o email do Lar. Não vendemos nem cedemos os seus dados a terceiros.",
      "A Web3Forms processa e armazena temporariamente os dados em servidores localizados nos Estados Unidos da América (infraestrutura Amazon Web Services), com encriptação. Esta operação implica uma transferência dos seus dados para fora do Espaço Económico Europeu; ao enviar o formulário, autoriza essa transferência (artigo 49.º, n.º 1, alínea a, do RGPD).",
    ],
  },
  {
    title: "8. Os seus direitos",
    body: [
      "Tem o direito de aceder, retificar, apagar, limitar ou opor-se ao tratamento dos seus dados, bem como o direito à portabilidade e a retirar o consentimento a qualquer momento.",
      "Para exercer estes direitos, contacte-nos através de instantedeternura@gmail.com. Tem ainda o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.",
    ],
  },
  {
    title: "9. Decisões automatizadas",
    body: [
      "Não tomamos decisões automatizadas nem efetuamos definição de perfis (profiling) com base nos seus dados pessoais.",
    ],
  },
  {
    title: "10. Cookies",
    body: [
      "Este website utiliza apenas cookies e armazenamento local essenciais ao seu funcionamento e à memorização das suas preferências de consentimento. Pode geri-las a qualquer momento através do banner de cookies.",
    ],
  },
  {
    title: "11. Segurança",
    body: [
      "Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso, perda ou divulgação não autorizados.",
    ],
  },
  {
    title: "12. Alterações a esta política",
    body: [
      "Esta política poderá ser atualizada periodicamente. Qualquer alteração será publicada nesta página, com indicação da respetiva data de atualização.",
    ],
  },
];

export default function Privacidade() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="relative w-full pt-40 pb-12 md:pt-48 md:pb-16 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col gap-5">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose">RGPD</span>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight">
            Política de Privacidade
          </h1>
          <p className="font-sans text-charcoal/60 text-base md:text-lg leading-relaxed">
            A sua privacidade é importante para nós. Esta página explica como tratamos os dados
            pessoais que nos confia através deste website.
          </p>
          <p className="font-mono text-xs text-charcoal/40 tracking-widest uppercase">
            Última atualização: junho de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative w-full pb-24 md:pb-32 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col gap-10 md:gap-12">
          {sections.map((s) => (
            <div key={s.title} className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="font-sans text-charcoal/70 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="pt-8 border-t border-stone/15">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-rose text-cream font-sans font-medium px-8 py-3.5 rounded-[1.5rem] hover:scale-[1.03] transition-transform duration-300"
            >
              Falar connosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
