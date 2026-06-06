export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/work/hero.jpg"
            alt="Équipe créative au travail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
            <p className="font-[family-name:var(--font-serif)] text-3xl italic leading-snug text-fg md:text-4xl">
              &ldquo;Le détail fait la différence entre un site et une
              expérience.&rdquo;
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent-2">
            Le studio
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Une équipe passionnée par le beau et le fonctionnel
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Lume imagine des interfaces qui respirent l&apos;élégance — typographie
            forte, espaces généreux, micro-interactions subtiles.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Une approche qui allie <strong className="text-fg">design haut de gamme</strong>{" "}
            et développement soigné, pour des marques qui veulent se démarquer.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Figma", "Next.js", "Tailwind", "Framer", "Vercel"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
