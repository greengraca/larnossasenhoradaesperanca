import Link from "next/link";

// NOTA: Texto-base de RGPD para revisão jurídica. Os campos entre [parênteses]
// devem ser confirmados pelo Lar (denominação social, NIF, encarregado de dados).

const sections = [
  {
    title: "1. Responsável pelo tratamento",
    body: [
      "O responsável pelo tratamento dos seus dados pessoais é o Lar Familiar Nossa Senhora da Esperança [denominação social e NIF a confirmar], com morada na Rua Condessa Maria Delgada 58, 2540-624 Roliça, Portugal.",
      "Para qualquer questão relacionada com a proteção de dados, pode contactar-nos através do email instantedeternura@gmail.com ou dos telefones 913 835 271 e 262 608 326.",
    ],
  },
  {
    title: "2. Que dados recolhemos",
    body: [
      "Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto do website — nomeadamente nome, número de telefone, endereço de email e o conteúdo da mensagem.",
      "Não recolhemos dados sensíveis através do website nem utilizamos perfis automatizados de visitantes.",
    ],
  },
  {
    title: "3. Finalidade do tratamento",
    body: [
      "Os dados recolhidos destinam-se exclusivamente a dar resposta ao seu pedido de contacto, marcação de visita ou esclarecimento de dúvidas. Não são utilizados para marketing nem partilhados com terceiros para esse fim.",
    ],
  },
  {
    title: "4. Fundamento legal",
    body: [
      "O tratamento dos seus dados assenta no seu consentimento, manifestado no momento do envio do formulário, e no interesse legítimo do Lar em responder a contactos e pedidos de informação, ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD).",
    ],
  },
  {
    title: "5. Conservação dos dados",
    body: [
      "Os dados são conservados apenas durante o período necessário para dar resposta ao seu pedido e cumprir eventuais obrigações legais aplicáveis, sendo posteriormente eliminados de forma segura.",
    ],
  },
  {
    title: "6. Partilha e subcontratantes",
    body: [
      "O envio do formulário é processado através de um serviço de entrega de email (Web3Forms), que reencaminha a sua mensagem para o email do Lar. Não vendemos nem cedemos os seus dados a terceiros.",
    ],
  },
  {
    title: "7. Os seus direitos",
    body: [
      "Enquanto titular dos dados, tem o direito de aceder, retificar, apagar, limitar ou opor-se ao tratamento dos seus dados, bem como o direito à portabilidade e a retirar o consentimento a qualquer momento.",
      "Para exercer estes direitos, contacte-nos através de instantedeternura@gmail.com. Tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).",
    ],
  },
  {
    title: "8. Cookies",
    body: [
      "Este website utiliza apenas cookies essenciais ao seu funcionamento e à memorização das suas preferências de consentimento. Pode gerir as suas preferências a qualquer momento através do banner de cookies.",
    ],
  },
  {
    title: "9. Segurança",
    body: [
      "Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso, perda ou divulgação não autorizados.",
    ],
  },
  {
    title: "10. Alterações a esta política",
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
