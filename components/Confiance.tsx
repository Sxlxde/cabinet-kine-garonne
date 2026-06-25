import { ShieldCheck, Accessibility, CalendarCheck, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion";

const items = [
  { icon: CalendarCheck, label: "Réservation Doctolib" },
  { icon: ShieldCheck, label: "Cabinet conventionné Sécu" },
  { icon: Accessibility, label: "Accès PMR" },
  { icon: Wallet, label: "Tiers payant possible" },
];

export default function Confiance() {
  return (
    <section className="border-y border-teal-light/20 bg-white py-6">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-ink-soft">
            <Icon size={22} className="text-teal" aria-hidden="true" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
