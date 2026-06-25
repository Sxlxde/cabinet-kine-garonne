import { MapPin, Phone, Clock, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cabinet } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Infos pratiques
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Venir au cabinet
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Coordonnées */}
          <Reveal className="flex flex-col justify-center gap-6 rounded-2xl bg-white p-8 shadow-card">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <MapPin size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Adresse</h3>
                <p className="mt-1 text-ink-soft">{cabinet.adresse}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Phone size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">
                  Téléphone
                </h3>
                <a
                  href={cabinet.telHref}
                  className="mt-1 block text-ink-soft transition-colors hover:text-teal"
                >
                  {cabinet.tel}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Clock size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">Horaires</h3>
                <p className="mt-1 text-ink-soft">{cabinet.horaires}</p>
              </div>
            </div>

            <a
              href={cabinet.doctolib}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Prendre rendez-vous
            </a>
          </Reveal>

          {/* Carte */}
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Carte de localisation du cabinet à Toulouse"
              src="https://www.google.com/maps?q=Toulouse,France&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
