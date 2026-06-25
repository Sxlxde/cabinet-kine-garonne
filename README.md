# Cabinet Kiné Garonne — Site vitrine

Site vitrine **one-page** fictif pour un cabinet de kinésithérapie à Toulouse.
Démo portfolio. 100 % statique, aucun backend.

## Stack

- **Next.js 16** (App Router, TypeScript strict)
- **Tailwind CSS v4** (config via `@theme` dans `app/globals.css`)
- **Framer Motion** (animations au scroll, compteurs, hover)
- **lucide-react** (icônes SVG)
- Polices via `next/font` : **Poppins** (titres) + **Inter** (corps)

## Lancer

```bash
npm install
npm run dev      # http://localhost:3000 (ou 3001 si 3000 occupé)
npm run build    # build production
npm start        # servir le build
```

## Où modifier le contenu

Tout le contenu éditorial est centralisé et typé dans **`lib/data.ts`** :

| Constante      | Contenu                                            |
| -------------- | -------------------------------------------------- |
| `cabinet`      | Nom, adresse, tél, horaires, lien Doctolib         |
| `navLinks`     | Liens d'ancre du header                            |
| `soins`        | Les 6 prestations (icône + titre + description)    |
| `pointsForts`  | Checklist section « À propos »                      |
| `stats`        | Les 4 compteurs animés                             |
| `equipe`       | Les praticiens (nom, spécialité, bio, photo)       |
| `avis`         | Les témoignages patients                           |

Les images praticiens/hero pointent vers Unsplash (placeholders).
Domaine autorisé dans `next.config.ts` (`images.remotePatterns`).

## Structure

```
app/
  layout.tsx        # fonts, metadata SEO + Open Graph, lang="fr"
  page.tsx          # assemble les sections + skip-link a11y
  globals.css       # theme Tailwind v4, couleurs, smooth scroll, reduced-motion
components/
  motion.tsx        # helpers Framer Motion (Reveal, variants partages)
  Header.tsx        # sticky transparent->blanc au scroll, burger mobile
  Hero.tsx          # titre, CTA, visuel, badge avis
  Confiance.tsx     # bandeau mentions
  Soins.tsx         # grille 6 prestations
  Apropos.tsx       # approche + checklist
  Stats.tsx         # 4 compteurs animes
  Equipe.tsx        # 3 praticiens
  Avis.tsx          # 3 temoignages
  Contact.tsx       # coordonnees + Google Maps embed
  CtaFinal.tsx      # bandeau teal pleine largeur
  Footer.tsx        # coordonnees, liens, legal
lib/
  data.ts           # toutes les donnees du site
```

## Notes design

Palette douce médicale : teal `#0E7C7B`, accent `#90D4CE`, fond `#F4FAF9`,
texte `#1A2E2D`. Cards `rounded-2xl`, ombres douces, espace blanc généreux.

Accessibilité : balises sémantiques, `alt` sur images, focus visible,
`prefers-reduced-motion` respecté, skip-link clavier, contrastes AA.
