const quotes = [
  {
    text: "Un travail remarquable — notre taux de conversion a doublé en un mois.",
    author: "Sarah B.",
    role: "Fondatrice, startup SaaS",
  },
  {
    text: "Design moderne, livraison rapide. Exactement l'image qu'on voulait.",
    author: "Karim M.",
    role: "Directeur, agence immo",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote
              key={q.author}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <p className="font-[family-name:var(--font-serif)] text-2xl italic leading-relaxed md:text-3xl">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="font-medium">{q.author}</p>
                <p className="text-sm text-muted">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
