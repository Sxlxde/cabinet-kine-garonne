"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* Variants partagés : fade-in + slide-up au scroll */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* Wrapper réutilisable : anime à l'entrée dans le viewport (une seule fois) */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export { motion };
