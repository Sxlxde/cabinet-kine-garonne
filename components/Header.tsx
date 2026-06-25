"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { cabinet, navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-card backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="font-display text-lg font-bold text-teal sm:text-xl"
        >
          Cabinet Kiné <span className="text-teal-light">Garonne</span>
        </a>

        {/* Nav desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-teal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="border-t border-teal-light/30 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-cream hover:text-teal"
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
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-base font-semibold text-white"
          >
            <CalendarCheck size={20} aria-hidden="true" />
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
