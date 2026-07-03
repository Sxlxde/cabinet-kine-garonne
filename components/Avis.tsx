"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion";
import { avis } from "@/lib/data";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return perView;
}

export default function Avis() {
  const perView = usePerView();
  const pages = Math.ceil(avis.length / perView);
  const [[page, dir], setState] = useState<[number, number]>([0, 0]);

  /* Reclampe la page quand le nombre de colonnes change */
  useEffect(() => {
    setState(([p]) => [Math.min(p, pages - 1), 0]);
  }, [pages]);

  const go = (step: number) =>
    setState(([p]) => [(p + step + pages) % pages, step]);

  const start = page * perView;
  const items = avis.slice(start, start + perView);

  return (
    <section id="avis" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Avis patients
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Ils nous ont fait confiance
          </h2>
        </Reveal>

        <div className="mt-14 flex items-center gap-3 sm:gap-5">
          {/* Flèche gauche (desktop) */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Avis précédents"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-white text-teal shadow-card transition-colors hover:bg-cream sm:inline-flex"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Groupe d'avis */}
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
                className="grid touch-pan-y gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {items.map((a) => (
                  <figure
                    key={a.nom + a.citation.slice(0, 12)}
                    className="flex h-full flex-col rounded-2xl border border-teal-light/30 bg-cream p-7"
                  >
                    <Quote
                      size={32}
                      className="text-teal-light/60"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-2 flex gap-0.5"
                      aria-label={`Note : ${a.note} sur 5`}
                    >
                      {Array.from({ length: a.note }).map((_, s) => (
                        <Star
                          key={s}
                          size={17}
                          className="fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                      « {a.citation} »
                    </blockquote>
                    <figcaption className="mt-5 font-semibold text-ink-soft">
                      {a.nom}
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flèche droite (desktop) */}
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Avis suivants"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-white text-teal shadow-card transition-colors hover:bg-cream sm:inline-flex"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Contrôles mobile + points indicateurs */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Avis précédents"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/20 bg-white text-teal shadow-card sm:hidden"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Pages d'avis">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setState(([p]) => [i, i > p ? 1 : -1])}
                aria-label={`Page d'avis ${i + 1}`}
                aria-selected={i === page}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-teal" : "w-2.5 bg-teal/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Avis suivants"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/20 bg-white text-teal shadow-card sm:hidden"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
