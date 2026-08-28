import { createFileRoute } from "@tanstack/react-router";
import { Building2, Home as HomeIcon, Plane, Users } from "lucide-react";

import { Logo } from "@/components/site/brand";
import { SiteHeader, navegacao } from "@/components/site/site-header";
import { areas, contato, diferenciais, etapas } from "@/components/site/data";
import duplaHero from "@/assets/dupla-institucional.png.asset.json";
import duplaMesa from "@/assets/dupla-mesa.png.asset.json";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const iconesArea = {
  plane: Plane,
  building: Building2,
  home: HomeIcon,
  users: Users,
};

function WhatsAppButton({
  tone = "gold",
  href = contato.whatsappHref,
  children,
}: {
  tone?: "gold" | "outline-light" | "outline-dark";
  href?: string;
  children: React.ReactNode;
}) {
  const styles = {
    gold: "bg-accent text-accent-foreground hover:bg-accent-soft",
    "outline-light":
      "border border-background/40 text-background hover:border-accent hover:text-accent",
    "outline-dark": "border border-primary/30 text-primary hover:border-accent hover:text-accent",
  }[tone];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`eyebrow inline-flex items-center justify-center px-8 py-4 transition-colors duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}

const socios = [
  {
    foto: sociaRetrato.url,
    nome: "Maíra Costa Ribeiro",
    cargo: "Advogada · OAB/GO 64.762",
    bio: "Atuação em direito empresarial, societário e planejamento patrimonial, com foco em estruturação e prevenção de conflitos.",
  },
  {
    foto: socioRetrato.url,
    nome: "Lucas Uilly de Matos Avelar",
    cargo: "Direito migratório e imobiliário",
    bio: "Conduz operações imobiliárias, processos migratórios e a estruturação de rotinas do escritório, do primeiro contato ao acompanhamento do caso.",
  },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero — foto full-bleed com véu verde */}
      <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden bg-primary text-background lg:min-h-[88vh]">
        <img
          src={duplaHero.url}
          alt="Maíra Costa Ribeiro e Lucas Avelar, sócios do escritório Ribeiro Avelar"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[85%_center] lg:object-[100%_center]"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary from-30% via-primary/75 via-52% to-transparent to-72%" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-primary/70 to-transparent" />


        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-20 lg:px-12 lg:pt-40 lg:pb-28">
          <div className="max-w-xl">
            <div className="absolute -top-2 left-6 hidden h-20 w-20 border-l border-t border-accent/50 lg:block" />
            <span className="eyebrow text-accent">Advocacia · Goiânia</span>
            <h1 className="mt-8 font-display text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Estratégia jurídica
              <br />
              para decisões que
              <br />
              <em className="not-italic text-accent-soft">exigem segurança.</em>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-background/75">
              Assessoria jurídica de alto padrão, com análise técnica rigorosa, discrição e
              clareza na comunicação. Uma sociedade conduzida a quatro mãos.
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
        </div>
      </section>


      {/* Escritório — marfim */}
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

            <dl className="mt-12 grid gap-10 border-t border-border pt-9 sm:grid-cols-3">
              <div>
                <dt className="font-display text-6xl leading-none text-primary lg:text-7xl">
                  12<span className="text-accent">+</span>
                </dt>
                <dd className="mt-4 text-sm leading-snug text-muted-foreground">
                  anos de experiência combinada
                </dd>
              </div>
              <div>
                <dt className="font-display text-6xl leading-none text-primary lg:text-7xl">
                  4
                </dt>
                <dd className="mt-4 text-sm leading-snug text-muted-foreground">
                  áreas de especialidade
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl leading-tight text-primary">
                  Atendimento direto
                </dt>
                <dd className="mt-4 text-sm leading-snug text-muted-foreground">
                  pelos sócios, em todas as etapas
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Áreas — areia quente */}
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

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => {
              const Icone = iconesArea[area.icone];
              return (
                <article
                  key={area.titulo}
                  className="group border border-primary/12 bg-background p-8 transition-colors duration-300 hover:border-accent/60"
                >
                  <Icone className="h-7 w-7 text-accent" strokeWidth={1} />
                  <h3 className="mt-8 font-display text-[1.75rem] font-medium leading-snug tracking-tight text-primary">
                    {area.titulo}
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {area.texto}
                  </p>
                  <span className="mt-8 block h-px w-8 bg-accent/60 transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sócios — marfim */}
      <section id="socios" className="border-y border-border bg-muted">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Sócios</span>
            <span className="rule-gold mt-5" />
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Quem conduz o escritório.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:gap-16">
            {socios.map((socio) => (
              <article key={socio.nome}>
                <img
                  src={socio.foto}
                  alt={`${socio.nome} — Ribeiro Avelar Advogados`}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                />
                <h3 className="mt-8 font-display text-3xl leading-tight text-primary">
                  {socio.nome}
                </h3>
                <p className="eyebrow mt-3 text-accent">{socio.cargo}</p>
                <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {socio.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento — verde */}
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
              <li key={etapa.numero} className="border-t border-background/20 pt-8 lg:pr-8">
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

          <div className="mt-20 border-t border-background/20 pt-16">
            <span className="eyebrow text-accent">Diferenciais</span>
            <ul className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
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
      </section>

      {/* Contato — verde profundo */}
      <section id="contato" className="bg-primary-soft text-background">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
          <div>
            <span className="eyebrow text-accent">Contato</span>
            <h2 className="mt-7 font-display text-4xl leading-tight lg:text-5xl">
              Vamos conversar sobre
              <br />o seu caso.
            </h2>
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-background/70">
              O primeiro contato é reservado e sem compromisso. Respondemos em até um dia
              útil.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppButton>WhatsApp Maíra</WhatsAppButton>
              <WhatsAppButton tone="outline-light" href={contato.whatsappSecundarioHref}>
                WhatsApp Lucas
              </WhatsAppButton>
            </div>
          </div>

          <dl className="grid gap-px self-start border-t border-background/20">
            {[
              ["WhatsApp · Maíra", contato.whatsappLabel],
              ["WhatsApp · Lucas", contato.whatsappSecundarioLabel],
              ["E-mail", contato.email],
              ["Endereço", `${contato.endereco} — ${contato.cidade}`],
              ["Horário", contato.horario],
            ].map(([label, valor]) => (
              <div
                key={label}
                className="flex flex-wrap items-baseline justify-between gap-4 border-b border-background/15 py-6"
              >
                <dt className="eyebrow text-background/60">{label}</dt>
                <dd className="text-[0.95rem] text-background">{valor}</dd>
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
                <li>{contato.whatsappSecundarioLabel}</li>
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
