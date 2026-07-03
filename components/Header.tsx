"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cabinet, navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#accueil");

  /* Fond du header au scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy : souligne la section visible */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Bloque le scroll quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-card backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:grid md:grid-cols-[1fr_auto_1fr]"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#accueil"
          onClick={() => setActive("#accueil")}
          className="flex items-center md:justify-self-start"
          aria-label="Cabinet Kiné Garonne, retour à l'accueil"
        >
          <Image
            src="/KG-removebg-preview.png"
            alt="Cabinet Kiné Garonne"
            width={48}
            height={48}
            priority
            className="h-11 w-auto object-contain sm:h-12"
          />
          <span className="ml-2 hidden font-display text-lg font-bold text-teal sm:inline">
            Cabinet Kiné <span className="text-teal-light">Garonne</span>
          </span>
        </a>

        {/* Nav desktop centrée */}
        <ul className="hidden items-center gap-8 md:flex md:justify-center">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive ? "text-teal" : "text-ink-soft hover:text-teal"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-teal"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop + burger mobile */}
        <div className="flex items-center justify-end gap-2 md:justify-self-end">
          <div className="hidden md:block">
            <a
              href={cabinet.doctolib}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Prendre RDV
            </a>
          </div>

          {/* Burger animé */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-ink/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-20 z-40 border-t border-teal-light/30 bg-white px-5 py-5 shadow-card md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => {
                        setActive(l.href);
                        setOpen(false);
                      }}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        active === l.href
                          ? "bg-cream text-teal"
                          : "text-ink hover:bg-cream hover:text-teal"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={cabinet.doctolib}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-base font-semibold text-white"
              >
                <CalendarCheck size={20} aria-hidden="true" />
                Prendre rendez-vous
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
