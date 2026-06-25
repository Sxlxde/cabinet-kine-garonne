import { MapPin, Phone, Clock, Globe, Mail, MessageCircle } from "lucide-react";
import { cabinet, navLinks } from "@/lib/data";

const socials = [
  { icon: Globe, label: "Site web", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: MessageCircle, label: "Messagerie", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div>
          <p className="font-display text-lg font-bold text-white">
            Cabinet Kiné <span className="text-teal-light">Garonne</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">{cabinet.sousTitre}</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-teal"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Liens de pied de page">
          <h3 className="font-display font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-teal-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coordonnées */}
        <div>
          <h3 className="font-display font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal-light" aria-hidden="true" />
              {cabinet.adresse}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-teal-light" aria-hidden="true" />
              <a href={cabinet.telHref} className="transition-colors hover:text-teal-light">
                {cabinet.tel}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={18} className="mt-0.5 shrink-0 text-teal-light" aria-hidden="true" />
              {cabinet.horaires}
            </li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h3 className="font-display font-semibold text-white">Informations</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-teal-light">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-teal-light">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="#accueil" className="transition-colors hover:text-teal-light">
                Retour en haut
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {cabinet.nom} · Site vitrine fictif —
        démonstration portfolio.
      </div>
    </footer>
  );
}
