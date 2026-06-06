import { Code2, Layers, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identité & branding",
    text: "Logo, charte graphique et univers visuel cohérent sur tous les supports.",
  },
  {
    icon: Layers,
    title: "UI/UX design",
    text: "Maquettes Figma, prototypes interactifs et parcours utilisateur optimisés.",
  },
  {
    icon: Code2,
    title: "Développement web",
    text: "Sites rapides avec Next.js, animations soignées et SEO technique.",
  },
  {
    icon: Zap,
    title: "Landing pages",
    text: "Pages de conversion qui vendent — hero, preuve sociale, CTA clairs.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Ce qu&apos;on fait <span className="text-accent">mieux</span>
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="glass rounded-2xl p-8 transition hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
