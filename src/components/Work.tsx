import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Reserve",
    type: "SaaS · Réservations",
    image: "/work/reserve.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Terra Boutique",
    type: "E-commerce",
    image: "/work/terra.jpg",
    span: "",
  },
  {
    title: "Nova Finance",
    type: "Fintech app",
    image: "/work/nova.jpg",
    span: "",
  },
  {
    title: "Maison Lina",
    type: "Branding",
    image: "/work/lina.jpg",
    span: "md:col-span-2",
  },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Sélection
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl italic md:text-5xl">
              Projets récents
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Chaque projet allie stratégie, esthétique et performance — pensé pour
            convertir et marquer les esprits.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${p.span}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
              <div className="relative flex min-h-[200px] flex-col justify-end p-6 md:min-h-[240px]">
                <p className="text-xs uppercase tracking-wider text-fg/80">{p.type}</p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/50 opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
