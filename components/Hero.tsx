"use client";

import Image from "next/image";
import { Star, CalendarCheck, ArrowDown } from "lucide-react";
import { motion } from "@/components/motion";
import { cabinet } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-white pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Formes organiques décoratives */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-light/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Retrouvez le mouvement,{" "}
            <span className="text-teal">sans douleur</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Un cabinet de kinésithérapie moderne à Toulouse. Une équipe à votre
            écoute pour une rééducation sur-mesure, dans un cadre apaisant.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={cabinet.doctolib}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Prendre rendez-vous
            </a>
            <a
              href="#soins"
              className="inline-flex items-center gap-2 rounded-full border-2 border-teal/20 bg-white px-6 py-3.5 text-base font-semibold text-teal transition-colors hover:border-teal hover:bg-cream"
            >
              Découvrir les soins
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Badge de confiance */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-ink-soft">
              <span className="font-bold text-ink">4,9/5</span>, plus de 800
              avis patients
            </p>
          </div>
        </motion.div>

        {/* Visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/hero-kine.jpg"
              alt="Kinésithérapeute réalisant un massage thérapeutique sur un patient au cabinet"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
