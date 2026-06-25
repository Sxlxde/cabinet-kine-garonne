"use client";

import { CalendarCheck } from "lucide-react";
import { motion } from "@/components/motion";
import { cabinet } from "@/lib/data";

export default function CtaFinal() {
  return (
    <section className="bg-teal-dark py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-5 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Prêt à retrouver le mouvement ?
        </h2>
        <p className="mt-4 text-lg text-teal-light">
          Prenez rendez-vous en quelques clics. Notre équipe vous accueille du
          lundi au vendredi.
        </p>
        <a
          href={cabinet.doctolib}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-teal shadow-soft transition-transform hover:scale-105"
        >
          <CalendarCheck size={22} aria-hidden="true" />
          Prendre rendez-vous
        </a>
      </motion.div>
    </section>
  );
}
