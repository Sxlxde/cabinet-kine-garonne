"use client";

import { Star, Quote } from "lucide-react";
import { motion, Reveal, stagger, fadeUp } from "@/components/motion";
import { avis } from "@/lib/data";

export default function Avis() {
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

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {avis.map((a, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="relative rounded-2xl border border-teal-light/30 bg-cream p-7"
            >
              <Quote
                size={36}
                className="absolute right-6 top-6 text-teal-light/50"
                aria-hidden="true"
              />
              <div
                className="flex gap-0.5"
                aria-label={`Note : ${a.note} sur 5`}
              >
                {Array.from({ length: a.note }).map((_, s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-ink">
                « {a.citation} »
              </blockquote>
              <p className="mt-5 font-semibold text-ink-soft">— {a.nom}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
