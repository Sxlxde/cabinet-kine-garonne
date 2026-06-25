"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { stats, type Stat } from "@/lib/data";

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(stat.valeur.toFixed(stat.decimales ?? 0));
      return;
    }
    const controls = animate(mv, stat.valeur, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) =>
        setDisplay(
          v.toLocaleString("fr-FR", {
            minimumFractionDigits: stat.decimales ?? 0,
            maximumFractionDigits: stat.decimales ?? 0,
          })
        ),
    });
    return () => controls.stop();
  }, [inView, reduce, mv, stat]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {stat.suffixe}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-teal py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              <Counter stat={stat} />
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
