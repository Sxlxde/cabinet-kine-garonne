"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats, type Stat } from "@/lib/data";

function format(value: number, stat: Stat) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: stat.decimales ?? 0,
    maximumFractionDigits: stat.decimales ?? 0,
  });
}

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(stat.valeur);
      return;
    }
    let raf = 0;
    const duration = 1600;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(stat.valeur * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(stat.valeur);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, reduce, stat.valeur]);

  return (
    <span className="tabular-nums">
      {format(value, stat)}
      {stat.suffixe}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-teal py-16 md:py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 lg:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              <Counter stat={stat} start={inView} />
            </p>
            <p className="mt-2 text-sm font-medium text-teal-light">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
