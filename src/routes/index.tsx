import { createFileRoute } from "@tanstack/react-router";

import { Logo } from "@/components/site/brand";
import { areas, contato, diferenciais, etapas } from "@/components/site/data";
import heroFoto from "@/assets/socio-hero.png.asset.json";
import duplaMesa from "@/assets/dupla-mesa.png.asset.json";
import duplaInstitucional from "@/assets/dupla-institucional.png.asset.json";
import sociaRetrato from "@/assets/socia-retrato.png.asset.json";
import socioRetrato from "@/assets/socio-retrato.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ribeiro Avelar Advogados | Goiânia" },
      {
        name: "description",
        content:
          "Advocacia empresarial, imobiliária, sucessória e migratória em Goiânia. Estratégia jurídica para decisões que exigem segurança.",
      },
      { property: "og:title", content: "Ribeiro Avelar Advogados | Goiânia" },
      {
        property: "og:description",
        content:
          "Advocacia empresarial, imobiliária, sucessória e migratória. Atendimento conduzido diretamente pelos sócios.",
      },
    ],
  }),
  component: Home,
});

const navegacao = [
  { label: "O escritório", href: "#escritorio" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Sócios", href: "#socios" },
  { label: "Contato", href: "#contato" },
];

function WhatsAppButton({
  tone = "gold",
  children,
}: {
  tone?: "gold" | "outline-light" | "outline-dark";
  children: React.ReactNode;
}) {
  const styles = {
    gold: "bg-accent text-accent-foreground hover:bg-accent-soft",
    "outline-light": "border border-background/40 text-background hover:border-accent hover:text-accent",
    "outline-dark": "border border-primary/30 text-primary hover:border-accent hover:text-accent",
  }[tone];

  return (
    <a
      href={contato.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`eyebrow inline-flex items-center justify-center px-8 py-4 transition-colors duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 lg:px-12">
          <Logo variant="horizontal" on="dark" className="h-9 w-auto lg:h-11" />
          <nav className="hidden items-center gap-9 lg:flex">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="eyebrow text-background/75 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <WhatsAppButton tone="outline-light">WhatsApp</WhatsAppButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-background">
        <div className="mx-auto grid max-w-[1400px] items-end gap-12 px-6 pt-36 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pt-44 lg:pb-24">
          <div>
            <span className="eyebrow text-accent">Advocacia · Goiânia</span>
            <h1 className="mt-8 font-display text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Estratégia jurídica
              <br />
              para decisões que
              <br />
              <em className="not-italic text-accent-soft">exigem segurança.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-background/70">
              Um escritório de estrutura enxuta e atuação sênior. Cada caso é conduzido
              diretamente pelos sócios, com análise técnica, discrição e clareza na
              comunicação.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton>Falar com o escritório</WhatsAppButton>
              <a
                href="#areas"
                className="eyebrow inline-flex items-center justify-center border border-background/25 px-8 py-4 text-background/80 transition-colors hover:border-accent hover:text-accent"
              >
                Áreas de atuação
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 border-t border-l border-accent/50 lg:block" />
            <img
              src={heroFoto.url}
              alt="Sócio do escritório Ribeiro Avelar em ambiente corporativo"
              className="relative aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
              loading="eager"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 border-b border-r border-accent/50 lg:block" />
          </div>
        </div>

        <div className="border-t border-background/12">
          <div className="mx-auto grid max-w-[1400px] gap-px px-6 sm:grid-cols-3 lg:px-12">
            {[
              ["Atuação sênior", "Casos conduzidos pelos próprios sócios"],
              ["Análise preventiva", "Risco mapeado antes da decisão"],
              ["Presencial e remoto", "Goiânia e atendimento em todo o Brasil"],
            ].map(([titulo, texto]) => (
              <div key={titulo} className="py-8 sm:px-8 sm:first:pl-0">
                <p className="eyebrow text-accent">{titulo}</p>
                <p className="mt-3 text-sm text-background/65">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escritório */}
      <section id="escritorio" className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
          <div className="relative">
            <img
              src={duplaMesa.url}
              alt="Sócios do Ribeiro Avelar analisando documentos"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <Logo
              variant="monogram"
              on="dark"
              className="absolute -bottom-8 right-6 hidden h-24 w-auto bg-primary p-5 lg:block"
            />
          </div>
          <div className="lg:pt-6">
            <span className="eyebrow text-muted-foreground">O escritório</span>
            <span className="rule-gold mt-5" />
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Rigor técnico, linguagem clara
              <br />e presença constante.
            </h2>
            <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              O Ribeiro Avelar nasceu da convicção de que assessoria jurídica de alto
              padrão não é volume de processos: é profundidade. Trabalhamos com um número
              limitado de clientes para garantir análise cuidadosa, prazos respeitados e
              interlocução direta.
            </p>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              Atuamos preventivamente sempre que possível e, quando o litígio é
              inevitável, com estratégia definida desde o primeiro dia.
            </p>

            <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-3">
              {[
                ["+12", "anos de atuação combinada"],
                ["4", "áreas de especialidade"],
                ["100%", "casos acompanhados pelos sócios"],
              ].map(([n, l]) => (
                <div key={l} className="pt-7">
                  <dt className="font-display text-4xl text-primary">{n}</dt>
                  <dd className="eyebrow mt-3 text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Áreas de atuação</span>
            <span className="rule-gold mt-5" />
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Especialidades concentradas,
              <br />
              não generalismo.
            </h2>
          </div>

          <div className="mt-16 grid gap-px border-t border-primary/15 lg:grid-cols-2">
            {areas.map((area, i) => (
              <article
                key={area.titulo}
                className="group border-b border-primary/15 py-10 lg:px-10 lg:first:pl-0 lg:odd:pl-0 lg:even:border-l lg:even:border-l-primary/15"
              >
                <div className="flex items-baseline gap-6">
                  <span className="eyebrow text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-primary lg:text-3xl">
                      {area.titulo}
                    </h3>
                    <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                      {area.texto}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section id="atendimento" className="bg-primary text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Como conduzimos</span>
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Um método previsível
              <br />
              do primeiro contato à conclusão.
            </h2>
          </div>

          <ol className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((etapa) => (
              <li
                key={etapa.numero}
                className="border-t border-background/20 pt-8 lg:pr-8"
              >
                <span className="font-display text-3xl text-accent">{etapa.numero}</span>
                <h3 className="mt-6 text-base tracking-wide text-background">
                  {etapa.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/65">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-14 border-t border-background/20 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <img
              src={duplaInstitucional.url}
              alt="Equipe do escritório Ribeiro Avelar"
              className="aspect-[16/11] w-full object-cover"
              loading="lazy"
            />
            <div>
              <span className="eyebrow text-accent">Diferenciais</span>
              <ul className="mt-8 space-y-5">
                {diferenciais.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 border-b border-background/12 pb-5 text-[0.95rem] text-background/80"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sócios */}
      <section id="socios" className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Sócios</span>
            <span className="rule-gold mt-5" />
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Quem conduz o seu caso.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:gap-16">
            {[
              {
                foto: sociaRetrato.url,
                nome: "Dra. Ribeiro",
                cargo: "Sócia fundadora",
                oab: "OAB/GO 00.000",
                bio: "Atuação em direito empresarial, societário e planejamento patrimonial, com foco em estruturação e prevenção de conflitos.",
              },
              {
                foto: socioRetrato.url,
                nome: "Dr. Avelar",
                cargo: "Sócio fundador",
                oab: "OAB/GO 00.000",
                bio: "Atuação em direito imobiliário, sucessório e migratório, conduzindo operações e negociações de alto valor.",
              },
            ].map((socio) => (
              <article key={socio.nome}>
                <img
                  src={socio.foto}
                  alt={`${socio.nome}, ${socio.cargo} do Ribeiro Avelar Advogados`}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                />
                <h3 className="mt-8 font-display text-3xl text-primary">{socio.nome}</h3>
                <p className="eyebrow mt-3 text-accent">
                  {socio.cargo} · {socio.oab}
                </p>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {socio.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-secondary">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <span className="eyebrow text-muted-foreground">Contato</span>
            <span className="rule-gold mt-5" />
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Vamos conversar sobre
              <br />o seu caso.
            </h2>
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
              O primeiro contato é reservado e sem compromisso. Respondemos em até um dia
              útil.
            </p>
            <div className="mt-10">
              <WhatsAppButton>Falar pelo WhatsApp</WhatsAppButton>
            </div>
          </div>

          <dl className="grid gap-px self-start border-t border-primary/15">
            {[
              ["WhatsApp", contato.whatsappLabel],
              ["Telefone", contato.telefone],
              ["E-mail", contato.email],
              ["Endereço", `${contato.endereco} — ${contato.cidade}`],
              ["Horário", contato.horario],
            ].map(([label, valor]) => (
              <div
                key={label}
                className="flex flex-wrap items-baseline justify-between gap-4 border-b border-primary/15 py-6"
              >
                <dt className="eyebrow text-muted-foreground">{label}</dt>
                <dd className="text-[0.95rem] text-primary">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-primary text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Logo variant="stacked" on="dark" className="h-28 w-auto" />
            </div>
            <div>
              <p className="eyebrow text-accent">Navegação</p>
              <ul className="mt-6 space-y-3">
                {navegacao.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-background/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-accent">Contato</p>
              <ul className="mt-6 space-y-3 text-sm text-background/70">
                <li>{contato.whatsappLabel}</li>
                <li>{contato.email}</li>
                <li>{contato.endereco}</li>
                <li>{contato.cidade}</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-8">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} Ribeiro Avelar Advogados. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-background/50">
              Conteúdo meramente informativo — Provimento 205/2021 OAB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
