const items = [
  "Branding",
  "UI/UX",
  "Sites web",
  "E-commerce",
  "Motion",
  "Design system",
  "Next.js",
  "Identité visuelle",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-muted">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-12">
            {item}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
