"use client";

import { motion, Reveal, stagger, fadeUp } from "@/components/motion";
import { soins } from "@/lib/data";

export default function Soins() {
  return (
    <section id="soins" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Nos prestations
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Des soins adaptés à chaque patient
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Une prise en charge complète, du bilan initial au retour à
            l&apos;autonomie.
          </p>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {soins.map(({ icon: Icon, titre, description }) => (
            <motion.li
              key={titre}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl bg-white p-7 shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {titre}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
