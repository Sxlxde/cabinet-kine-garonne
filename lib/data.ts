import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Dumbbell,
  Wind,
  HandHeart,
  Droplets,
  Home,
} from "lucide-react";

/* ── Infos cabinet ─────────────────────────────────────────── */
export const cabinet = {
  nom: "Cabinet Kiné Garonne",
  sousTitre: "Masseurs-Kinésithérapeutes à Toulouse",
  adresse: "12 allée des Tilleuls, 31000 Toulouse",
  tel: "05 61 00 00 00",
  telHref: "tel:+33561000000",
  horaires: "Lun au Ven, 8h à 19h (fermé le week-end)",
  doctolib: "https://www.doctolib.fr/",
} as const;

/* ── Navigation (ancres) ───────────────────────────────────── */
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Soins", href: "#soins" },
  { label: "Équipe", href: "#equipe" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
] as const;

/* ── Soins / Prestations ───────────────────────────────────── */
export type Soin = {
  icon: LucideIcon;
  titre: string;
  description: string;
};

export const soins: Soin[] = [
  {
    icon: Activity,
    titre: "Rééducation",
    description:
      "Rééducation post-opératoire et traumatologique pour retrouver mobilité et force en toute sécurité.",
  },
  {
    icon: Dumbbell,
    titre: "Kiné du sport",
    description:
      "Préparation, prévention des blessures et reprise progressive adaptée à votre discipline.",
  },
  {
    icon: Wind,
    titre: "Kiné respiratoire",
    description:
      "Désencombrement et rééducation respiratoire pour adultes, enfants et nourrissons.",
  },
  {
    icon: HandHeart,
    titre: "Massage thérapeutique",
    description:
      "Massages décontracturants ciblés pour soulager tensions, douleurs et raideurs musculaires.",
  },
  {
    icon: Droplets,
    titre: "Drainage lymphatique",
    description:
      "Drainage manuel doux pour réduire œdèmes et favoriser la circulation après chirurgie.",
  },
  {
    icon: Home,
    titre: "Soins à domicile",
    description:
      "Prise en charge à votre domicile pour les patients à mobilité réduite, sur l'agglomération.",
  },
];

/* ── Points forts (À propos) ───────────────────────────────── */
export const pointsForts: string[] = [
  "Bilan personnalisé à chaque première séance",
  "Plateau technique moderne et matériel récent",
  "Approche pluridisciplinaire et suivi continu",
  "Cabinet conventionné, tiers payant possible",
  "Accès PMR et parking à proximité",
];

/* ── Stats (compteurs animés) ──────────────────────────────── */
export type Stat = {
  valeur: number;
  suffixe?: string;
  decimales?: number;
  label: string;
};

export const stats: Stat[] = [
  { valeur: 15, suffixe: " ans", label: "d'expérience" },
  { valeur: 3000, suffixe: "+", label: "patients suivis" },
  { valeur: 4.9, suffixe: "/5", decimales: 1, label: "note moyenne" },
  { valeur: 6, label: "soins spécialisés" },
];

/* ── Équipe ────────────────────────────────────────────────── */
export type Praticien = {
  nom: string;
  specialite: string;
  bio: string;
  photo: string;
};

export const equipe: Praticien[] = [
  {
    nom: "Camille Laurent",
    specialite: "Kiné du sport & rééducation",
    bio: "Diplômée d'État, 12 ans d'expérience auprès de sportifs amateurs et professionnels.",
    photo: "/equipe-camille.jpg",
  },
  {
    nom: "Thomas Mercier",
    specialite: "Rééducation & traumatologie",
    bio: "Spécialiste de la récupération post-opératoire et du suivi des pathologies chroniques.",
    photo: "/equipe-thomas.jpg",
  },
  {
    nom: "Sophie Nguyen",
    specialite: "Kiné respiratoire & drainage",
    bio: "Experte en kinésithérapie respiratoire pédiatrique et drainage lymphatique manuel.",
    photo: "/equipe-sophie.jpg",
  },
];

/* ── Avis patients ─────────────────────────────────────────── */
export type Avis = {
  note: number;
  citation: string;
  nom: string;
};

export const avis: Avis[] = [
  {
    note: 5,
    citation:
      "Rééducation de l'épaule après une capsulite. Camille a été patiente et précise, j'ai récupéré toute l'amplitude en trois mois.",
    nom: "Julien M.",
  },
  {
    note: 5,
    citation:
      "Je cours en semi-marathon et je venais pour une tendinite. Bilan sérieux, exercices adaptés, et surtout des conseils pour éviter la récidive.",
    nom: "Nadia B.",
  },
  {
    note: 5,
    citation:
      "Bloqué par une lombalgie depuis des mois, je pouvais à peine me baisser. Après le suivi ici, je revis au quotidien.",
    nom: "Thomas D.",
  },
  {
    note: 5,
    citation:
      "Séances de kiné respiratoire pour mon fils de 4 ans. L'équipe sait mettre les enfants en confiance, mon petit y allait sans pleurer.",
    nom: "Sophie L.",
  },
  {
    note: 5,
    citation:
      "Suites d'une prothèse de hanche. Prise en charge rassurante et progressive, je remarche sans canne bien plus tôt que prévu.",
    nom: "Marie-Claire V.",
  },
  {
    note: 4,
    citation:
      "J'accompagne ma mère de 82 ans pour sa rééducation à l'équilibre. Beaucoup de douceur et de pédagogie, elle attend ses rendez-vous.",
    nom: "Antoine R.",
  },
];

/* ── Bandeau confiance ─────────────────────────────────────── */
export const confiance: string[] = [
  "Réservation Doctolib",
  "Cabinet conventionné Sécu",
  "Accès PMR",
  "Tiers payant",
];
