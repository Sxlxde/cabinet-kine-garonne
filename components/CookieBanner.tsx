"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "kg-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "refused") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Consentement aux cookies"
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-2xl border border-teal-light/40 bg-white/95 p-4 shadow-card backdrop-blur sm:inset-x-auto sm:right-4 sm:bottom-4 sm:p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              Ce site utilise des cookies pour mesurer l&apos;audience et
              améliorer votre navigation. Vous pouvez accepter ou refuser.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("refused")}
                className="rounded-full border border-teal/25 px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-teal hover:text-teal"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
