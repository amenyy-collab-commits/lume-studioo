import { ArrowDownRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20 md:pt-36">
      <div className="glow-orb left-1/4 top-20 h-72 w-72 bg-accent/30" />
      <div
        className="glow-orb right-1/4 top-40 h-96 w-96 bg-accent-2/20"
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-fade-up animation-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent-2" />
          Studio digital · Branding & web
        </p>

        <h1 className="animate-fade-up animation-delay-2 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.25rem]">
          On transforme vos idées en{" "}
          <span className="font-[family-name:var(--font-serif)] font-normal italic gradient-text">
            expériences
          </span>{" "}
          mémorables.
        </h1>

        <p className="animate-fade-up animation-delay-3 mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Branding, interfaces et sites web sur-mesure pour marques ambitieuses.
          Design audacieux, code impeccable.
        </p>

        <div className="animate-fade-up animation-delay-4 mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:bg-accent/90"
          >
            Voir nos réalisations
            <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition hover:border-accent/50"
          >
            Parlons de votre projet
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { n: "48+", l: "Projets livrés" },
            { n: "12", l: "Pays clients" },
            { n: "6", l: "Années d'expérience" },
            { n: "98%", l: "Clients satisfaits" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-semibold md:text-4xl">{s.n}</p>
              <p className="mt-1 text-sm text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
