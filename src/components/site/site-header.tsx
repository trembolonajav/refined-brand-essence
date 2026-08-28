import { useEffect, useState } from "react";

import { Logo } from "@/components/site/brand";
import { contato } from "@/components/site/data";

export const navegacao = [
  { label: "O escritório", href: "#escritorio" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Sócios", href: "#socios" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-background/10 bg-primary/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 lg:px-12 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <a href="#top" aria-label="Ribeiro Avelar Advogados">
          <Logo
            variant="horizontal"
            on="dark"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-11 lg:h-13"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <a
          href={contato.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={`eyebrow hidden items-center justify-center bg-accent px-7 text-accent-foreground transition-all duration-500 hover:bg-accent-soft lg:inline-flex ${
            scrolled ? "py-3" : "py-3.5"
          }`}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
