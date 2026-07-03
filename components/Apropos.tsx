import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { pointsForts } from "@/lib/data";

export default function Apropos() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/approche-soin.jpg"
              alt="Mains d'un soignant accompagnant un patient, approche humaine du cabinet"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Notre approche
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Une médecine du mouvement, humaine et personnalisée
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Au Cabinet Kiné Garonne, chaque patient est unique. Nous prenons le
            temps d&apos;écouter, de comprendre et de construire un plan de soin
            sur-mesure, en privilégiant toujours votre autonomie et votre
            confort.
          </p>

          <ul className="mt-7 space-y-3">
            {pointsForts.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-ink-soft">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
