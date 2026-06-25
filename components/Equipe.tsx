"use client";

import Image from "next/image";
import { motion, Reveal, stagger, fadeUp } from "@/components/motion";
import { equipe } from "@/lib/data";

export default function Equipe() {
  return (
    <section id="equipe" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Notre équipe
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Des praticiens diplômés et passionnés
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Une équipe pluridisciplinaire pour vous accompagner à chaque étape.
          </p>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {equipe.map((p) => (
            <motion.li
              key={p.nom}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.photo}
                  alt={`Portrait de ${p.nom}, ${p.specialite}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {p.nom}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal">
                  {p.specialite}
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.bio}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
