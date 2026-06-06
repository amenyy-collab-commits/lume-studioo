import Link from "next/link";

const links = [
  { href: "#work", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Studio" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Lume<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-fg/90"
        >
          Démarrer un projet
        </a>
      </div>
    </header>
  );
}
