import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-accent/20 via-card to-accent-2/10 p-10 md:p-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Prêt à illuminer votre marque ?
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Décrivez votre projet — on vous répond sous 24 h ouvrées.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3 text-muted">
                <Mail className="h-4 w-4 text-accent" />
                hello@lume-studio.demo
              </p>
              <p className="flex items-center gap-3 text-muted">
                <MapPin className="h-4 w-4 text-accent" />
                Tunis · Remote worldwide
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              placeholder="Votre nom"
              className="w-full rounded-xl border border-border bg-bg/80 px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-xl border border-border bg-bg/80 px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <textarea
              placeholder="Parlez-nous de votre projet…"
              rows={4}
              className="w-full resize-none rounded-xl border border-border bg-bg/80 px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <button
              type="button"
              className="w-full rounded-full bg-fg py-3 text-sm font-medium text-bg transition hover:bg-fg/90"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
