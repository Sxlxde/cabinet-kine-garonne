import {
  ShieldCheck,
  Accessibility,
  CalendarCheck,
  Wallet,
} from "lucide-react";

const items = [
  { icon: CalendarCheck, label: "Réservation Doctolib" },
  { icon: ShieldCheck, label: "Cabinet conventionné Sécu" },
  { icon: Accessibility, label: "Accès PMR" },
  { icon: Wallet, label: "Tiers payant possible" },
];

/* Une séquence : items séparés par un astérisque. Dupliquée pour boucler sans trou. */
function Track() {
  return (
    <div
      className="flex shrink-0 items-center gap-x-8 pr-8 sm:gap-x-12 sm:pr-12"
      aria-hidden="true"
    >
      {items.map(({ icon: Icon, label }, i) => (
        <div key={i} className="flex items-center gap-x-8 sm:gap-x-12">
          <div className="flex items-center gap-2.5 text-ink-soft">
            <Icon size={20} className="shrink-0 text-teal" aria-hidden="true" />
            <span className="whitespace-nowrap text-sm font-medium">
              {label}
            </span>
          </div>
          <span
            className="flex select-none items-center text-teal-light/70"
            aria-hidden="true"
          >
            &bull;
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Confiance() {
  return (
    <section
      className="border-y border-teal-light/20 bg-white py-5"
      aria-label="Nos engagements"
    >
      {/* Liste accessible (lue par les lecteurs d'écran, masquée visuellement) */}
      <ul className="sr-only">
        {items.map((it) => (
          <li key={it.label}>{it.label}</li>
        ))}
      </ul>

      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
