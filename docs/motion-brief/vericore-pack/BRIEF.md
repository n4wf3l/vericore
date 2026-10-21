# VERICORE — « RÉSEAU 24/7 » · Brief de démo motion

> **Pour Claude Code — à lire en entier avant d'écrire une ligne.** Construis le site dans l'ordre du §14. **Arrête-toi au checkpoint ⏸ après le hero** : lance `npm run dev -- --host`, donne l'URL LAN (`http://192.168.x.x:5173`) pour que je teste sur téléphone, et attends mon feu vert avant la suite. Chaque nombre de ce document est une consigne, pas une suggestion.

---

## 0. Contexte, objectif, hors périmètre

**Client :** Vericore SRL — « Vericore Multiservices · interventions et dépannage ». Entreprise de maintenance technique et rénovation, tous corps d'état, basée Rue Esseghem 43, 1090 Jette (Bruxelles). Cibles : syndics, gestionnaires d'immeubles, entreprises, propriétaires. Urgences 24/7.

**Ce qu'on construit :** une **démo pitch one-page**, séparée du site live vericore.be, à envoyer au gérant sous forme de lien qu'il ouvrira **sur son téléphone**. Elle doit prouver qu'un site Vericore peut ressembler à un projet de studio (niveau Awwwards / Godly) tout en restant un outil de conversion : appel, WhatsApp, demande de devis.

**Hébergement :** Vercel (comme le site actuel), projet séparé `vericore-reseau-demo`.

**Hors périmètre :**
- Les 152 pages SEO service × commune, le blog, les pages légales, la page Garanties, le recrutement : **rien de tout ça dans la démo.**
- Le néerlandais : FR par défaut + EN seulement. NL arrive à la signature (les traductions existent dans le repo live `src/i18n/locales/nl`).
- Pas d'envoi réel de formulaire (pas de Web3Forms) : le bon d'intervention compose un message WhatsApp pré-rempli.
- Ne touche pas au repo `Vericore` live. Nouveau dossier, nouveau repo.

---

## 1. Concept et direction artistique

### 1.1 La métaphore

**Le site est une installation : deux tubes, un rouge (eau chaude) et un bleu (eau froide), courent sur toute la page comme une colonne montante. Chaque section est un raccord serti. Et le site est piloté comme leur centrale d'intervention : chaque demande est un ticket qui passe de « reçue » à « clôturée ».**

Pourquoi c'est *à eux* et à personne d'autre : les deux couleurs de leur logo, **rouge `#CB0617` et marine `#063563`**, sont exactement les couleurs du code chaud/froid de leurs propres réseaux PEX / multicouche (photo `pex-hot-cold.webp` : gaines rouges et bleues, raccords en laiton, bagues de sertissage vertes). Leur promesse centrale est « **interlocuteur unique** », « tout est raccordé ». Et leur différenciateur opérationnel, c'est le **suivi tracé** : prise en charge → planification → intervention en cours → clôture, statuts rouge / orange / vert, reporting avant / pendant / après.

### 1.2 Faits de marque → éléments du site

| Fait réel (source) | Devient |
|---|---|
| Logo : carré rouge + V blanc, VERICORE en capitales larges marine, MULTISERVICES rouge, **filet rouge**, « interventions et dépannage » en bas de casse espacée | Typo display Montserrat 900 capitales géantes ; le filet rouge devient le séparateur universel (2px, `--rouge`) ; le bas de casse espacé devient le style des sous-titres |
| Rouge + marine = chaud + froid (photo PEX) | **Le Réseau** : 2 tubes annelés qui descendent toute la page (§7.1) |
| Raccords laiton + bagues vertes serties | **Le Sertissage** : chaque section « clac » quand le tube l'atteint (§7.2) ; le vert `#399D21` = statut OK |
| Gaines annelées (corrugated) | Texture des tubes : nervures en pointillé sur le trait |
| Numéro imprimé en énorme au dos des sweats et sur les camionnettes | Le **numéro de téléphone est un élément de layout**, en 10–13vw, comme un dos de sweat (hero + footer) |
| Plateforme interne : notification à chaque étape, statuts rouge/orange/vert | **Le Ticket** : bon d'intervention avec stepper à palettes (§7.3) |
| « Sous 1h dans un rayon de 10 km autour de Jette · sous 50 min autour d'Uccle » (FAQ du site) | Carte épinglée de Bruxelles, rayons d'intervention tracés (§8.4) |
| 19 communes desservies | Le réseau se ramifie depuis Jette vers les 19 communes |
| Abonnements Bronze / Silver / Gold / Premium | Calibres de tube **Ø16 / Ø20 / Ø26 / Ø32** (diamètres multicouche réels) : la section du tube grossit avec la formule |
| Stock standardisé embarqué dans chaque camionnette | Micro-mention dans le parcours d'intervention (« résolution dès la première visite ») |
| « Travail professionnel, propre et soigné » (Pack Sérénité) | Outro : on ferme la vanne, le réseau se vide, « Chantier terminé. Chantier propre. » |
| Hors heures de bureau, l'urgence reste ouverte | Statut live : « Bureau fermé — urgences ouvertes » |

### 1.3 Les 4 motions signature
1. **RÉSEAU** — deux tubes scrubés au scroll sur toute la hauteur du document, tête du tube toujours à 70 % du viewport.
2. **SERTISSAGE** — mâchoires de pince à sertir qui claquent sur un raccord ; impact, bague qui passe au vert.
3. **TICKET** — bon d'intervention dont les statuts basculent en palettes mécaniques (mono), LED rouge → orange → vert.
4. **MITIGEUR** — le sélecteur FR/EN est une manette de mitigeur (rotation ±32°) ; en hover sur desktop, le curseur est un point de mesure.

### 1.4 Ton du motion
**Hydraulique et mécanique.** Le fluide coule en continu et sans à-coups (linéaire, lent). Les pièces métalliques, elles, sont **sèches, lourdes, précises** : départs lents, arrêts nets, un seul petit rebond d'impact, jamais d'élastique mou. Rien ne flotte, rien ne « pop ». On doit sentir l'outil, pas l'animation.

---

## 2. Règles anti-« site IA »

**Interdit dans ce projet :**
- Hero centré avec blob en dégradé, glassmorphism, la photo de camionnettes en fond + overlay sombre (c'est exactement le site actuel).
- Rangée de 3 cartes « features », grilles icône + titre + texte, icônes Lucide en tête de carte (Lucide = uniquement des pictos utilitaires : téléphone, flèche, fermer).
- Carrousel de témoignages. **Aucun témoignage** : ceux du dataset ne sont pas vérifiés.
- Dégradés violet→bleu, et le bleu ciel `#0ea5e9` du faux `logo.svg` du repo live.
- Emojis (y compris les 🏗️⚡🔧 des pages communes du site actuel).
- Inter / Roboto / Poppins. Titres « Bienvenue chez Vericore », « Découvrez nos services », « Pourquoi nous choisir ? ».
- Fade-up identique sur tout. Parallaxe générique. `hover: scale(1.05)`.
- `rounded-2xl` partout : rayon max **2px** (le métal et les bons papier sont droits), sauf les tubes et les bagues, qui sont ronds par nature. Pas d'ombre portée décorative.
- Sections centrées, symétriques, même hauteur.
- Lorem ipsum, chiffres inventés (« +500 clients », « 98 % satisfaits »), « +10 ans d'expérience » (contradictoire avec la création en 2020).

**Obligatoire :**
- Wordmark/titres géants (15–30vw), coupés, qui débordent du bord ou passent sous les tubes.
- Grille cassée, asymétrique, au moins une inversion couleur pleine page (section Urgence en rouge plein).
- Composants propres à la marque : ticket, bon d'intervention autocopiant, tampon de conformité, raccord, calibre de tube, vanne.
- Les 4 motions signature ci-dessus comme systèmes réutilisables.
- Une scène épinglée au milieu (carte des 19 communes).
- Un outro mémorable (vanne + wordmark géant + numéro).
- Copy dans leur voix (pro, direct, rassurant) avec leurs vraies formules : « interlocuteur unique », « Devis sous 24h • Prix transparents • Sans engagement », « interventions et dépannage ».

**Jamais :** afficher la photo `DO-NOT-SHIP-van-fleet-wrong-phone` (le numéro peint sur les camionnettes est faux), une image avec filigrane, une note/avis, un numéro d'agréation (RGIE-123456 et DEC-789012 sont des placeholders du site live).

---

## 3. Stack

- **Vite + React 18 + TypeScript** (strict).
- **Tailwind CSS v4** (`@tailwindcss/vite`), tokens dans `@theme` (§4). Pas de `tailwind.config.js`.
- **GSAP 3 + ScrollTrigger** via `@gsap/react` (`useGSAP`) pour tout ce qui est scrubé et toutes les timelines.
- **Motion** (`motion/react`) uniquement pour les springs d'UI (mitigeur, curseur, bouton magnétique, accordéons).
- **Lenis** pour le smooth scroll **desktop uniquement** (`(pointer: fine) and (min-width: 1024px)`), branché sur `gsap.ticker` ; `lenis.on('scroll', ScrollTrigger.update)`.
- **Polices auto-hébergées** : `@fontsource-variable/montserrat` (vérifié v5.3.0) et `@fontsource-variable/jetbrains-mono` (vérifié v5.3.0). Avant d'importer, fais `npm pack @fontsource-variable/montserrat --dry-run` et confirme que `index.css` et `wght.css` existent ; importe `wght.css`.
- **lucide-react** : uniquement `Phone`, `MessageCircle`, `ArrowUpRight`, `X`, `Plus`, `Minus`.
- **i18n maison** : `src/i18n/{fr,en}.ts` + `useT()` ; langue dans `localStorage` (clé `vc-lang`) dans un `try/catch` ; `<html lang>` mis à jour.
- **Interdit :** UI kits (shadcn, MUI…), React Router (une seule page), Swiper/Embla, jQuery, Three.js, Lottie.
- Dev : `@playwright/test` pour la boucle QA (§13).

---

## 4. Design tokens

### 4.1 Couleurs (échantillonnées sur le logo et la photo PEX)

| Token | Hex | Source | Usage | Part de surface |
|---|---|---|---|---|
| `--marine` | `#063563` | lettres VERICORE | fonds sombres, texte principal sur clair | 30 % |
| `--encre` | `#041A31` | marine assombri | fond outro, ombre interne des tubes | 8 % |
| `--rouge` | `#CB0617` | carré du logo | tube chaud, filets, section Urgence, CTA primaire | 15 % |
| `--rouge-vif` | `#E50822` | icône app | rouge sur fond marine (pas de texte) | 2 % |
| `--froid` | `#0744B6` | gaine bleue PEX | tube froid sur fond clair | 3 % |
| `--froid-vif` | `#4F86F0` | dérivé | tube froid sur fond marine/encre | 1 % |
| `--platre` | `#F3F1EA` | dérivé du fond logo | fond principal clair (papier/plâtre) | 33 % |
| `--blanc` | `#FEFEFC` | fond du logo | bons, tickets, texte sur sombre | 5 % |
| `--beton` | `#BBA893` | dalle de la photo PEX | grain, lignes de cote, texte tertiaire **sur encre uniquement** | 1 % |
| `--laiton` | `#BE8E67` | raccords | corps des raccords en T | <1 % |
| `--sertis` | `#399D21` | bagues de sertissage | bague sertie, statut « clôturée » / « ouvert » | <1 % |
| `--orange` | `#E58A00` | dérivé statut | statut « en cours » uniquement | <1 % |

**Contrastes (texte) :** blanc sur marine 12,6:1 ✓ · marine sur plâtre 11,5:1 ✓ · blanc sur rouge 5,9:1 ✓ (texte ≥ 16px) · marine sur rouge 2,1:1 ✗ **jamais** · rouge sur marine ✗ **jamais en texte** · béton sur encre 7,4:1 ✓. Vérifie chaque paire avec un script (`wcag-contrast`) dans la QA.

### 4.2 Typographie

| Rôle | Police | Graisse / réglages | Taille | Notes |
|---|---|---|---|---|
| Display / wordmark | Montserrat Variable | 900, capitales, `letter-spacing: -0.035em`, `line-height: .82` | `clamp(4rem, 26vw, 30rem)` | Le wordmark logo est un Montserrat ExtraBold : on le réécrit en vrai texte plutôt que d'agrandir le tracé (les bords du JPEG source sont abîmés) |
| Titres H2 | Montserrat Variable | 800, capitales, `-0.02em`, `lh .9` | `clamp(2.6rem, 9vw, 8.5rem)` | |
| Sous-titre « logo » | Montserrat Variable | 600, **bas de casse**, `letter-spacing: .08em` | `clamp(1rem, 1.6vw, 1.4rem)` | Écho direct de « interventions et dépannage » |
| Texte courant | Montserrat Variable | 450, `lh 1.5` | 16px mobile / 18px desktop | max 62ch |
| Technique / repérage | JetBrains Mono Variable | 500, capitales, `letter-spacing: .12em` | 11–13px | Étiquettes de tableau, n° de ticket, horodatages, cotes |
| Palettes du ticket | JetBrains Mono Variable | 700, capitales, `tabular-nums` | 14–18px | |

Justification : Montserrat est la police de leur logo, et la mono est celle des étiquettes de repérage d'un tableau électrique. Le contraste de taille est extrême : 26vw contre 11px.

### 4.3 Espacement et grille
- Base 4px. Gouttière latérale : **16px** (<640), **32px** (640–1023), **4vw** (≥1024).
- Grille desktop : 12 colonnes, gouttière 24px ; **la colonne 1 est réservée au réseau** (tubes) sur toute la page. Le contenu vit en colonnes 2–12, souvent asymétrique (2–8 / 9–12, 3–12, 2–6 + 8–12).
- Mobile : les tubes occupent une bande de **34px à gauche** (x = 10 et 26px) ; le contenu commence à **48px**, pas 16px.
- Rythme vertical : sections de hauteurs volontairement inégales (110vh, 60vh, 300vh épinglée, 80vh…).

### 4.4 Texture
- **Grain béton** : un SVG `feTurbulence` (baseFrequency .9, numOctaves 2) en `background-image` data-URI, opacité **0.06** sur plâtre et **0.08** sur encre. Statique.
- **Lignes de cote** : traits 1px `--marine` à 10 % d'opacité, avec petites flèches et cotes en mono (« 1090 », « Ø20 », « 24/7 ») le long de certains titres, comme sur un plan technique.
- Pas d'autre texture. Pas de photo floutée en fond.

### 4.5 Tokens motion
```ts
export const ease = {
  flow:  'none',                       // fluide dans les tubes
  pipe:  'power2.inOut',               // tracé des tubes en temps (hero)
  metal: 'power4.in',                  // mâchoires qui se ferment
  settle:'back.out(1.6)',              // un seul rebond d'impact
  reveal:'expo.out',                   // masques de texte
  flap:  'steps(1)',                   // palettes
};
export const dur = { crimp: .14, impact: .22, flap: .06, reveal: .9, branch: .5 };
export const spring = {
  lever:  { type: 'spring', stiffness: 520, damping: 28, mass: .6 },  // mitigeur
  cursor: { type: 'spring', stiffness: 900, damping: 50, mass: .3 },
  magnet: { type: 'spring', stiffness: 300, damping: 18 },
};
```

---

## 5. Assets

```
vericore-pack/
  BRIEF.md
  brand/
    vericore-mark.svg              carré rouge + V blanc, reconstruit géométriquement (307×338, proportions du logo)
    vericore-mark-mono.svg         idem en currentColor, V évidé
    vericore-v.svg                 le V seul, currentColor (sert de « raccord » au hero)
    vericore-lockup-trace.svg      logo complet vectorisé depuis le JPEG (couleurs d'origine) — usage ≤ 320px de large uniquement
    vericore-lockup-mono-trace.svg idem currentColor
    vericore-lockup-reversed-trace.svg  rouge vif + blanc, pour fond marine
  images/                          toutes en 1536×1024 (+ variante -768 pour mobile), WebP
    pex-hot-cold.webp / -768       gaines PEX rouge/bleu, raccords en T sertis sur dalle — LA photo de la DA
    pex-fitting-detail.webp        recadrage 700×600 sur les deux T (bagues vertes, laiton)
    tableau-rgie.webp / -768       tableau divisionnaire câblé, disjoncteurs Hager
    tech-hoodie-drill.webp / -768  technicien de dos, sweat VERICORE + numéro, visse un panneau
    tech-hoodie-ceiling.webp / -768 technicien de dos, sweat, perce un plafond
    boiler-wall.webp / -768        chaudière murale blanche, afficheur 55°
    lights-pendant.webp / -768     suspensions industrielles + ampoules filament, mur d'affiches
    plumbing-sink.webp / -768      raccords cuivre sous évier, évacuations
    partner-goodkat.webp           logo client GoodKat Take Away (465×320)
    partner-ragusana.webp          logo client Chez Ragusana (600×600)
  video/                           VIDE — aucune vidéo fournie (voir §15)
  reference/                       NE JAMAIS COPIER DANS LE PROJET
    logo-original.jpeg             logo source 1520×704
    logo-trace-parts/              sous-tracés bruts (mark, wordmark)
    DO-NOT-SHIP-van-fleet-wrong-phone.webp     flotte de camionnettes : le numéro peint est « +32 4 96 86 73 74 » (faux) → image générée, inutilisable
    DO-NOT-SHIP-intercom-gemini-watermark.webp parlophone : filigrane ✦ Gemini + logo tiers
    DO-NOT-SHIP-office-foreign-logo.webp       bureaux : logo « maison » d'une autre marque
```

**Règles photo :**
- Les photos font 1536×1024 maximum, et leur provenance est à confirmer : plusieurs semblent générées.
- Elles ne sont **jamais** affichées plus large que **48vw desktop / 100vw mobile**, et toujours **traitées en duotone marine/plâtre** (filtre SVG `feColorMatrix` + `feComponentTransfer`) sauf `pex-*`, qui garde ses vraies couleurs : c'est le seul moment de couleur photographique du site.
- Elles ne sont **jamais** légendées « nos réalisations » : la légende est le métier (« PLOMBERIE · RÉSEAUX SANITAIRES »).
- `-768` pour `<640px` via `srcset` ; `loading="lazy"` partout sauf le hero ; `decoding="async"`.
- Copie `brand/` et `images/` dans `public/brand` et `public/images` du projet. `reference/` reste dehors.

---

## 6. Plan de page (one-page, ancres)

| # | Section | id | Hauteur desktop / mobile | Fond |
|---|---|---|---|---|
| 0 | Barre maquette | — | 32px fixe | encre |
| 1 | **Raccordement** (hero) | `#top` | 100vh / 100svh | plâtre |
| 2 | **Urgence 24/7** | `#urgence` | 90vh / auto | **rouge plein** |
| 3 | **Le réseau — 8 métiers** | `#metiers` | auto | plâtre |
| 4 | **Raccordé à 19 communes** (épinglée) | `#zone` | 300vh / 240vh | marine |
| 5 | **Parcours d'une intervention** | `#suivi` | 260vh sticky / auto | plâtre |
| 6 | **Contrats — calibres** | `#contrats` | auto | encre |
| 7 | **Conformité** (tampons + partenaires) | `#conformite` | 60vh | plâtre |
| 8 | **Bon d'intervention** (contact) | `#devis` | auto | marine |
| 9 | **Fermeture de vanne** (outro / footer) | `#fin` | 100vh | encre → rouge |

Nav : pas de menu hamburger. Barre haute fixe de 56px : `vericore-mark.svg` (28px) à gauche, au centre le statut live (§7.5) en mono, à droite le mitigeur FR/EN et un bouton rond rouge `Phone` (44×44). Sur desktop, des liens d'ancre en mono 11px s'ajoutent (`MÉTIERS · ZONE · SUIVI · CONTRATS · DEVIS`), préfixés de leur repère (`D01`… voir §8.3).

---

## 7. Systèmes de motion (modules réutilisables)

Règles communes : une seule boucle rAF (`gsap.ticker`). On n'anime **que** `transform`, `opacity`, `clip-path`, `stroke-dashoffset`. Tout est créé dans `useGSAP` avec `scope` et nettoyé. `prefers-reduced-motion: reduce` est lu par un hook `useReducedMotion()` (Motion) et chaque module définit son fallback ci-dessous.

### 7.1 `Reseau` — les deux tubes (src/motion/Reseau.tsx)

**Anatomie :** un `<svg>` en `position:absolute; inset:0` dans le wrapper `<main>` (hauteur = document), `pointer-events:none`, `z-index: 5` (au-dessus des fonds, sous le texte des titres géants qui passent par-dessus en `mix-blend-mode: multiply` sur plâtre). Deux chemins parallèles, **chaud** puis **froid**.

**Géométrie :**
- Desktop : chaud à `x = 4vw + 12px`, froid à `x = 4vw + 40px`. Épaisseur du trait **14px**. Mobile : x = **10px** et **26px**, épaisseur **8px**.
- Le chemin est calculé au runtime à partir des ancres `[data-fitting]` de chaque section (`getBoundingClientRect().top + scrollY`). Il est vertical et décrit un **coude à 90°** (rayon 24px desktop, 12px mobile) quand une section demande une dérivation. Il est recalculé par un `ResizeObserver` sur `<main>`, avec un debounce de 150ms, puis `ScrollTrigger.refresh()`.
- Dans le hero, les tubes ne sont pas encore verticaux : ils arrivent horizontalement des bords (§8.1) puis plongent vers la gouttière gauche sous le hero (courbe de Bézier, `C` sur 30vh).

**Rendu de chaque tube (4 couches, même `d`) :**
1. Corps : `stroke: var(--rouge)` / `var(--froid)` (sur fond sombre : `--rouge-vif` / `--froid-vif`), `stroke-linecap: round`.
2. Nervures (gaine annelée) : même largeur, `stroke: rgba(0,0,0,.20)`, `stroke-dasharray: 1.5 3.5`.
3. Reflet : largeur 30 %, décalé de `-0.25 × épaisseur` en x via un second path parallèle, `stroke: rgba(255,255,255,.22)`.
4. Flux : largeur 40 %, `stroke: rgba(255,255,255,.35)`, `stroke-dasharray: 24 220`, `stroke-dashoffset` animé de 0 à −244 en **1.8s** (chaud) / **2.2s** (froid), `ease: none`, en boucle. Il ne tourne que si le tube est dans le viewport (`IntersectionObserver`) et que l'onglet est visible.

**Scrub (la tête du tube suit le lecteur) :**
- Au mount, on échantillonne le chemin tous les 8px avec `getPointAtLength` pour construire une table `y → length` (monotone).
- À chaque update : `headY = scrollY + 0.70 × innerHeight` ; `L = lookup(headY)` ; couches 1–3 : `strokeDasharray = total`, `strokeDashoffset = total − L`. Le froid a **40px de retard** (`L − 40`) : on voit deux fluides qui ne coulent pas exactement ensemble.
- Lissage : `L` affiché = `lerp(Lprev, L, 0.18)` par tick (inertie hydraulique), sauf si |ΔL| > 1500 (saut d'ancre), auquel cas on snappe.

**Dérivations :** chaque `[data-fitting]` peut avoir `data-branch="right"`. Un `<path>` horizontal part du tube **chaud** vers le titre de la section (longueur = distance jusqu'à `x` du titre − 16px). Il est **scrubé** par ScrollTrigger `start: "top 75%"`, `end: "top 55%"`, `scrub: 0.4`, avec `dashoffset` de `len` à 0.

**Mobile :** même système et même lookup, mais **pas de couche reflet**, flux en **2.6s**, dérivations limitées à 56px (un simple « piquage » vers le titre).

**Reduced motion :** les tubes sont dessinés entièrement et statiques, sans flux. Les raccords sont déjà sertis (vert).

### 7.2 `Sertissage` — le raccord qui claque (src/motion/Sertissage.tsx)

**Anatomie (SVG, 64×64 desktop / 40×40 mobile, centré sur le tube chaud à l'ancre) :** un corps en T `--laiton` (rect 28×18, rayon 2), deux bagues (anneaux 6px) **grises `#9AA3AD`** au départ, et deux mâchoires (formes en U, `--encre`), écartées de ±18px.

**Déclenchement :** la tête du tube (`headY`) dépasse `fittingY`. Joué une fois en avant ; il est réarmé si l'ancre repasse 200px sous la tête (scroll arrière).

**Timeline (gsap.timeline) :**
| t (ms) | Action |
|---|---|
| 0 | mâchoires `opacity 0→1` (40ms), en position ±18px |
| 40–180 | mâchoires `x: ±18 → 0`, **140ms `power4.in`** (lent puis sec) |
| 180 | **impact** : groupe raccord `scale 1 → 0.94`, 1 frame ; `x` tremble `[2,−2,1,0]px` sur 90ms |
| 180–400 | `scale 0.94 → 1`, `back.out(1.6)` (le seul rebond) ; bagues `fill: gris → --sertis` (palier, pas de fondu) |
| 260–480 | mâchoires `x: 0 → ±22`, `opacity → 0`, `power2.out` |
| 180–420 | anneau d'onde : cercle `stroke --sertis`, r 10→34, opacité .6→0 |

Son : non (démo sur téléphone, autoplay audio interdit). Vibration : `navigator.vibrate?.(12)` à l'impact **uniquement** sur l'action CTA « Envoyer le bon » (geste utilisateur), jamais au scroll.

**Reduced motion :** bagues vertes d'emblée, pas de mâchoires.

### 7.3 `Ticket` — bon d'intervention à palettes (src/components/Ticket.tsx + src/motion/Flap.tsx)

**Anatomie :** carte `--blanc`, 320×auto desktop / 100 % − 64px mobile, rayon 2px, **bord supérieur perforé** (mask radial de trous de 6px tous les 12px). En tête : en-tête mono `BON D'INTERVENTION`, n° `VC-26-0417`, étiquette **`SIMULATION`** (fond `--orange`, texte encre, toujours visible). Champs en mono 12px : OBJET, COMMUNE, CORPS DE MÉTIER, puis un **stepper de 4 statuts** sur une ligne : LED 10px + libellé palette.

**`Flap` (texte à palettes) :** chaque caractère est un `<span>` de largeur fixe (`1ch`, `tabular-nums`). Pour passer de A à B : chaque case parcourt l'alphabet `" ABCDEFGHIJKLMNOPQRSTUVWXYZÉÈ0123456789:-·/"` du caractère courant jusqu'à la cible, à **60ms par pas**, avec un **décalage de 18ms par colonne** et un maximum de **10 pas** (au-delà, on saute). Pendant chaque pas, la moitié haute fait `rotateX 0 → −90°` (perspective 300px), `steps(1)`. Mobile : identique (c'est du texte, c'est léger). Reduced motion : swap direct.

**Cycle de statut (LED) :** `REÇUE` (LED `--rouge`) → `PLANIFIÉE` (`--orange`) → `EN ROUTE` (`--orange`, LED qui pulse à 1.2s) → `CLÔTURÉE` (`--sertis`) + ligne « RAPPORT AVANT / PENDANT / APRÈS ENVOYÉ ». Horodatages : 08:02 · 08:05 · 08:11 · 09:24 (exemple illustratif, sous le libellé SIMULATION).
- **Hero :** le cycle tourne en autonomie, **2400ms par statut**, pause de 3000ms sur CLÔTURÉE, puis le ticket « se détache » (translateY −8px, rotate −1.5° → −4°, opacity → 0, 400ms) et un nouveau ticket arrive avec un autre objet. Rotation des objets : `FUITE SOUS ÉVIER · JETTE · PLOMBERIE` → `DISJONCTEUR QUI SAUTE · SCHAERBEEK · ÉLECTRICITÉ` → `PLUS D'EAU CHAUDE · UCCLE · CHAUFFAGE` → `INFILTRATION PLAFOND · IXELLES · TOITURE / FAÇADE`. Les n° s'incrémentent (0417, 0418…).
- **Section Suivi (§8.5) :** même composant, mais le statut est **scrubé** par le scroll (pas temporisé).
- Idle : pause quand le ticket est hors viewport ou l'onglet caché.

### 7.4 `Mitigeur` — sélecteur de langue (src/components/Mitigeur.tsx)
Une manette de 44×44 : une base circulaire `--marine` et un levier (rect 6×22, rayon 3) `--blanc`. On lit FR à gauche, EN à droite, en mono 10px. Au clic ou au tap, le levier tourne de **−32° (FR)** à **+32° (EN)**, `spring.lever`. Le texte change au moment où le levier passe 0°, à mi-course, via `onUpdate`. Tous les textes `Flap`/`Scramble` visibles rejouent leur transition vers la nouvelle langue ; le reste swappe sans animation. Il est focusable et pilotable aux flèches ←/→, avec `role="switch"` et `aria-checked`, et l'`aria-label` vaut « Langue : français ». Reduced motion : rotation instantanée.

### 7.5 Détails transverses
- **Statut live (`useBrusselsStatus`)** : `Intl.DateTimeFormat('fr-BE', { timeZone: 'Europe/Brussels', … })`, recalculé toutes les 30s.
  - Lun–ven 08:00–18:00 et sam 09:00–15:00 → LED `--sertis` « BUREAU OUVERT · JUSQU'À 18:00 » (ou 15:00).
  - Sinon → LED `--orange` « BUREAU FERMÉ · URGENCES 24/7 OUVERTES ».
  - L'heure s'affiche en mono `HH:MM`, avec les deux-points qui clignotent à 1Hz (opacity, `steps(1)`).
- **Curseur (desktop, `pointer: fine`)** : un point de mesure (anneau 18px, stroke 1.5px `--marine`, point central 3px) suit la souris avec `spring.cursor`, en `mix-blend-mode: difference` et blanc sur fond sombre. Sur un lien ou un bouton : l'anneau passe à 44px et affiche une étiquette mono 9px (`APPELER`, `OUVRIR`, `ENVOYER`). Le curseur natif est caché seulement sur `<main>` ; il reste sur les champs de formulaire.
- **CTA magnétiques** (bouton téléphone, WhatsApp) : attraction dans un rayon de **90px**, déplacement max **10px**, `spring.magnet`. Désactivé au tactile.
- **Révélation de titres** : masque `clip-path: inset(100% 0 0 0) → inset(0)` par ligne (le texte est découpé en lignes par un splitter maison, pas SplitText payant), `ease.reveal`, **scrubé** sur `start "top 85%"`, `end "top 50%"`. Ce n'est pas un fade-up : rien ne bouge, le texte est « dévoilé ».
- **Chargement** : voir la timeline du hero §8.1.

---

## 8. Sections

Breakpoints : **S** < 640 · **M** 640–1023 · **L** ≥ 1024.

### 8.0 Barre maquette
Barre fixe en haut de 32px (sticky au-dessus de la nav), fond `--encre`, texte mono 10px `--beton` : « MAQUETTE NON OFFICIELLE · PROPOSITION DE [VOTRE NOM] · [VOTRE CONTACT] ». Une croix la masque pour la session (`sessionStorage`, try/catch). La nav passe alors à `top: 0`.

### 8.1 Raccordement — hero (`#top`)

**Layout L (1440×900) :**
- Fond plâtre + grain.
- **Wordmark « VERICORE »** en Montserrat 900, `font-size: 24vw`, couleur `--marine`, aligné en bas à `bottom: 9vh`. Il commence à `left: 6vw` et **déborde à droite d'environ 12vw** (coupé par `overflow:hidden`).
- Sous le wordmark, à `left: 6vw` : le filet rouge (2px, 46vw) puis « interventions et dépannage » en sous-titre logo (600, bas de casse, `.08em`).
- Les **tubes** arrivent à `y = 38vh` : le chaud depuis le bord gauche, le froid depuis le bord droit, jusqu'au centre (`x = 50vw`). Là, `vericore-v.svg` (rouge, 13vw de haut) est le **raccord** : le V est le T.
- Colonne gauche haute (col. 2–7, `top: 14vh`) :
  - kicker mono « INTERVENTIONS ET DÉPANNAGE · BRUXELLES · 24/7 » ;
  - H1 sur 2 lignes en H2-style (800, 6.2vw) : « Un seul appel. / Tous les corps de métier. » ;
  - sous-texte (450, 18px, 44ch) ;
  - micro-réassurance mono « DEVIS SOUS 24H • PRIX TRANSPARENTS • SANS ENGAGEMENT ».
- Colonne droite (col. 9–12, `top: 12vh`) : le **numéro** « +32 496 84 73 74 » en Montserrat 800, `font-size: 3.6vw`, `letter-spacing: -0.01em`, avec au-dessus le libellé mono « URGENCES 24/7 ». C'est un lien `tel:+32496847374`. Dessous : 2 CTA (rouge plein « Appeler maintenant », contour marine « WhatsApp 24/7 »).
- **Ticket** (§7.3) posé en bas à droite (`right: 4vw; bottom: 30vh`), `rotate(-1.5deg)`, **par-dessus** le wordmark (z 10), avec une ombre interdite → à la place, un 1px `--marine` à 15 %.

**Layout M :** wordmark 30vw. Colonnes empilées (H1 puis numéro), ticket sous le numéro, aligné à droite, largeur 300px. Tubes à y = 30vh.

**Layout S (390×844) — spécifié, pas « simplifié » :**
- Barre maquette 32px + nav 56px.
- Kicker mono (10px), puis H1 en 800 `11.5vw` sur 3 lignes (« Un seul appel. / Tous les corps / de métier. »), `left: 48px`.
- Tubes : ils entrent par les bords à `y = 46svh` et se rejoignent sous le V (`vericore-v.svg`, 22vw, centré).
- Wordmark « VERICORE » en 900 `31vw`, en bas, **qui déborde de 18vw à droite** ; on ne lit que « VERICO » + un bout de R, et c'est voulu.
- Le **numéro** est en pleine largeur sous le H1, en Montserrat 800 `9.4vw`, souligné du filet rouge : un seul tap ouvre l'appel.
- Ticket : réduit à une **bande** de 64px collée au bas du hero (en-tête n° + statut palette + LED), pas la carte complète.
- Les CTA collent en bas de l'écran **après** le hero (§8.10).

**Timeline de chargement (après `document.fonts.ready`, max 400ms d'attente) :**

| t (ms) | L / M | S |
|---|---|---|
| 0 | fond plâtre, barre maquette, nav (opacity 0) | idem |
| 0–400 | lignes de cote 1px dessinées (dashoffset), `power2.out` | idem, 2 lignes au lieu de 5 |
| 200–950 | tube chaud gauche→centre, froid droite→centre, `pipe` (`power2.inOut`), le froid démarre 60ms après | 200–850 |
| 950–1090 | **Sertissage** sur le V (§7.2) : les mâchoires se ferment | 850–990 |
| 1090 | impact : V `scale .94→1`, bagues vertes, onde ; le flux démarre dans les tubes | 990 |
| 1000–1700 | « VERICORE » : chaque lettre révélée par `clip-path inset(100% 0 0 0)→0`, stagger **45ms**, `expo.out` 700ms | 900–1500, stagger 35ms |
| 1400–1800 | filet rouge `scaleX 0→1` (origine gauche), 400ms `power3.inOut` | 1300–1650 |
| 1550–1950 | « interventions et dépannage » : lettres opacity 0→1, stagger 12ms | 1450–1800 |
| 1200–1900 | kicker (scramble 400ms), H1 révélé par ligne (stagger 90ms) | 1100–1800 |
| 1700–2100 | numéro : chiffres en **Flap** depuis « 00 000 00 00 00 » | 1600–2000 |
| 1900–2300 | ticket : `y 40→0`, `rotate −6°→−1.5°`, `power3.out` 400ms, puis statut REÇUE en palette | bande ticket `y 64→0` |
| 2200 | nav opacity 0→1 (300ms) ; cycle ticket démarre | idem |

Rejeu : la timeline ne joue qu'au premier chargement de la session (`sessionStorage vc-intro`). Ensuite, état final direct, avec juste le sertissage (300ms).

**Scroll dans le hero** (scrub, `start "top top"`, `end "bottom top"`) :
- « VERICORE » se décale de `x: 0 → −10vw`.
- Le V monte de `y: 0 → −8vh` et `rotate 0 → −4°`.
- Les deux tubes, au centre, se courbent vers le bas puis vers la gouttière gauche (c'est le début du `Reseau`).
- Le ticket se décale de `y: 0 → −14vh` (parallaxe **liée au contenu**, une seule fois).

**Idle :** flux des tubes, cycle du ticket, clignement de l'heure. Rien d'autre.

### 8.2 Urgence 24/7 (`#urgence`) — inversion rouge plein
- Fond `--rouge` pleine page. Les tubes passent en `--blanc` (chaud) et `--marine` (froid) dans cette section : on change la couleur des couches par `clip-path` sur une copie du SVG limitée à la section.
- **« 24/7 »** en Montserrat 900, `30vw` L / `44vw` S, `--blanc`, coupé en bas par la section suivante (le bas des chiffres se perd sous le plâtre). En `mix-blend-mode: difference` par-dessus `tech-hoodie-drill.webp` (duotone encre/rouge, 40vw, posée en col. 7–12) : là où le « 7 » traverse le sweat, les couleurs s'inversent.
- Colonne gauche (col. 2–6) : H2 « Les pannes critiques ne préviennent pas. » (leur phrase), puis le statut live en grand mono (18px) : « IL EST 23:14 À BRUXELLES. BUREAU FERMÉ — URGENCES OUVERTES. »
- **Tableau des symptômes** (composant `SymptomBoard`, pas une liste à puces) : 6 lignes mono, `symptôme ············ corps de métier`, avec un point de conduite pointillé, et pour chaque ligne une LED + un repère (`U01…U06`). Au tap/hover, la ligne s'allume en blanc plein, texte rouge.
  - ÇA FUIT → PLOMBERIE
  - ÇA DISJONCTE → ÉLECTRICITÉ
  - PLUS DE CHAUFFAGE → CHAUFFAGE
  - ÇA S'INFILTRE → TOITURE / FAÇADE
  - ACCÈS BLOQUÉ → SERRURES & ACCÈS
  - VENTILATION / HVAC HS → VENTILATION
- Délais : bloc mono « SOUS 1H · 10 KM AUTOUR DE JETTE » / « SOUS 50 MIN · 10 KM AUTOUR D'UCCLE » (source : FAQ du site, // TODO confirmer avec le gérant).
- CTA : bouton blanc texte rouge « Appeler l'urgence » (`tel:`), magnétique, + lien WhatsApp.
- Entrée de section : le rouge arrive par un **`clip-path: inset(0 0 100% 0) → inset(0)`** scrubé (`start "top bottom"`, `end "top 40%"`). Le rouge monte comme un niveau d'eau, avec un bord **ondulé** : un mask SVG sinusoïdal d'amplitude 10px qui se déplace de 0 à −200px pendant le scrub.
- **S :** « 24/7 » au-dessus, photo en dessous à 100vw et 52vw de haut, tableau des symptômes en pleine largeur (lignes de 52px, cibles tactiles ≥ 44px).
- Reduced motion : section pleine sans montée.

### 8.3 Le réseau — 8 métiers (`#metiers`)
- `data-fitting` + `data-branch="right"` : le tube chaud pique vers le H2.
- H2 : « Un réseau. Huit métiers. » + sous-titre logo « un seul interlocuteur pour tout le bâtiment ».
- **Liste de dérivations** (pas de cartes) : 8 lignes pleine largeur de 96px (L) / 72px (S), séparées par le filet rouge à 30 %. Chaque ligne :
  - à gauche, le repère mono `D01`… ;
  - au centre, le nom en Montserrat 800 `5.2vw` L / `8.5vw` S ;
  - à droite (L seulement), un fait mono (délai ou prix, §10) ;
  - une petite **dérivation** du tube qui pique jusqu'au repère, scrubée ligne par ligne (stagger via `start "top 80%" + i×2%`).
- Hover (L) : le nom glisse de `x: 0 → 24px` (240ms `power3.out`) et une vignette photo duotone (`*-768.webp`, 280×186) apparaît **collée au curseur** avec `spring.cursor` et un masque `clip-path` qui s'ouvre (180ms). Il n'y a de photo que pour : Plomberie (`plumbing-sink`), Électricité (`tableau-rgie`), Chauffage (`boiler-wall`), Rénovation (`tech-hoodie-ceiling`), Peinture/Éclairage → `lights-pendant`. Pas de photo inventée pour les autres.
- Clic ou tap : la ligne **s'ouvre** en accordéon (hauteur animée par Motion `layout`, 380ms) et révèle :
  - la phrase hero du métier (§9) ;
  - 3 badges en **étiquettes de repérage** (mono, bord 1px, sans arrondi) ;
  - le fait prix/délai avec la mention « indicatif » ;
  - un CTA « Demander ce métier » qui pré-remplit le bon (§8.8).
  Une seule ligne est ouverte à la fois.
- **S :** pas de vignette au hover. Dans l'accordéon ouvert, la photo s'affiche à 100 % de la largeur du contenu, en duotone.
- Reduced motion : pas de glissement, accordéon instantané.

### 8.4 Raccordé à 19 communes — scène épinglée (`#zone`)
- Fond `--marine`, tubes en `--rouge-vif` / `--froid-vif`.
- **Données carte :** limites des 19 communes de la Région de Bruxelles-Capitale depuis une source open data (UrbIS / datastore.brussels ou Statbel — **vérifie la licence et ajoute l'attribution en mono 9px sous la carte**). Simplifie avec `mapshaper` (`-simplify 8% keep-shapes`). Projette en équirectangulaire local (`x = (lon − 4.24) × 70.3`, `y = (50.92 − lat) × 111.32`, en km, puis mise à l'échelle sur un viewBox `0 0 1000 1000`). Sors `src/data/communes.geo.ts` (≤ 40 KB) avec `{ id, nom, path, centroid }`. Aucun iframe Google Maps, aucune tuile.
- Base Jette : 50.8788 N, 4.3287 E (donnée du site). Base Uccle : **non fournie**, utilise le centroïde de la commune d'Uccle avec la mention « position approximative » (// TODO adresse réelle).
- **Pin** : `ScrollTrigger` `pin: true`, `start "top top"`, `end "+=300%"` (L/M) / `"+=240%"` (S), `scrub: 0.6`. La progression `p` va de 0 à 1 :

| p | Ce qui se passe | Texte (col. gauche L, bas d'écran S) |
|---|---|---|
| 0–0.12 | contours des 19 communes tracés (`dashoffset`, stagger), 1px `--blanc` à 25 % | « Notre base : Rue Esseghem 43, Jette. » |
| 0.12–0.20 | Jette se remplit en `--rouge` ; un raccord se **sertit** sur son centroïde (§7.2, joué une fois) | — |
| 0.20–0.62 | **le réseau pousse** : depuis Jette, un tube chaud (3px) part vers le centroïde de chaque commune en Bézier, dans l'ordre de distance. Chaque commune atteinte se remplit en `--blanc` à 10 % et son nom apparaît en mono 9px. Compteur mono en haut à droite : `01/19` → `19/19` (Flap) | « Raccordé à 19 communes. » |
| 0.62–0.80 | cercle de **10 km** autour de Jette (rayon = 10 × échelle), `stroke --sertis`, dessiné, avec l'étiquette « SOUS 1H » ; puis cercle autour d'Uccle, « SOUS 50 MIN » | « Urgence : sous 1h autour de Jette, sous 50 min autour d'Uccle. » |
| 0.80–1 | zoom arrière (`scale 1 → .86`) ; légende « + BRABANT FLAMAND · BRABANT WALLON · TOUTE LA BELGIQUE SUR DEVIS » | « Et au-delà, partout en Belgique. » |

- Layout L : carte en col. 6–12 (min(80vh, 50vw)), texte en col. 2–5, H2 « Raccordé à 19 communes. » en 800 `7vw`. Layout S : la carte prend 100vw × 100vw en haut et le texte change en bas (crossfade 200ms par palier) ; noms des communes masqués (trop petits), sauf Jette et Uccle.
- Reduced motion : pas de pin ; carte finale statique + les 3 textes empilés.

### 8.5 Parcours d'une intervention (`#suivi`)
- H2 : « Chaque intervention laisse une trace. »
- **L :** 2 colonnes. Le **Ticket** (§7.3) est sticky en col. 2–6 (`top: 18vh`). Les 4 étapes défilent en col. 8–12 (chacune 60vh). La position de scroll pilote le statut : `ScrollTrigger` par étape, `start "top 60%"`, `onEnter`/`onEnterBack` → `Flap` vers le statut ; la LED change de couleur.
  1. **REÇUE — Prise en charge.** Chaque demande est analysée immédiatement et priorisée selon l'urgence.
  2. **PLANIFIÉE — Planification.** La bonne équipe, avec les informations techniques du site et le stock standardisé à bord.
  3. **EN ROUTE / EN COURS — Intervention.** Sécurisation, réparation, notification à chaque étape.
  4. **CLÔTURÉE — Rapport.** Avant / pendant / après, photos, pièces remplacées, recommandations.
- Sous l'étape 4 : un **comparateur avant / pendant / après** avec 3 onglets mono et un trait vertical draggable (`clip-path`). **Pas d'image avant/après disponible** → il affiche **3 vignettes « EN ATTENTE DE PHOTOS CHANTIER »** (cadre pointillé, mono). C'est volontaire et honnête (// TODO photos réelles du gérant).
- **S :** le ticket est sticky en haut (`top: 88px`, version compacte, 96px de haut) et les étapes défilent dessous ; mêmes déclencheurs.
- Reduced motion : 4 tickets statiques, un par étape.

### 8.6 Contrats — calibres (`#contrats`)
- Fond `--encre`, tubes `--rouge-vif` / `--froid-vif`.
- H2 : « Abonnements de maintenance. » + sous-titre logo « choisissez votre section ».
- **Pro — 4 calibres** : 4 « fiches contrat » en **cartes empilées sticky** (L : `top: 14vh + i×28px`, chaque carte 72vh). Chaque fiche :
  - une **coupe de tube** SVG (deux cercles concentriques laiton/marine) dont le **diamètre visuel** suit le calibre : Ø16 → 56px, Ø20 → 70px, Ø26 → 91px, Ø32 → 112px (L ; ×0.7 en S), avec la cote mono en regard (`Ø16`) ;
  - nom en 800 `6vw` (« BRONZE ») + nom long en sous-titre logo ;
  - « idéal pour » ;
  - prix en Montserrat 800 + mention indicative en mono ;
  - la liste « inclus » en mono 13px avec des **repères `+`** ;
  - un CTA « Demander un audit technique ».
- Animation : quand une fiche se pose sur la précédente, la coupe de tube **se remplit** du centre (le fluide arrive, `scale 0→1` du disque intérieur, scrubé) et la précédente se décale de `scale .96` et `opacity .6`.
- **Particuliers** : après les 4 fiches, rupture de ton. Une fiche **plâtre** horizontale (pas sticky) « Pack Sérénité Habitat » avec le prix **9,99 €/mois** en 900 `14vw` et la mention « sans engagement — résiliable à tout moment ». Cadre en bon détachable (bord perforé à gauche).
- Bloc conditions (mono 12px, 2 colonnes L) : les 5 conditions (§10).
- **S :** les fiches sont empilées sticky aussi (`top: 96px + i×16px`, 78svh), coupe de tube en haut à droite.
- Reduced motion : fiches empilées normalement, disques pleins.

### 8.7 Conformité (`#conformite`)
- **Tampons** (pas des badges) : 4 tampons ronds de 120px (L) / 96px (S) en `--rouge`, texte circulaire SVG `textPath` en mono, légèrement de travers (rotation −8° à +6°), texture d'encre via un `feTurbulence` en mask.
  - « ENTREPRISE ENREGISTRÉE · BCE BE1005.585.934 »
  - « INTERLOCUTEUR UNIQUE · TOUS CORPS D'ÉTAT »
  - « DEVIS GRATUIT · SOUS 24H »
  - « INTERVENTION 24/7 · URGENCES »
  Les mentions RGIE / décennale / RC 2 500 000 € ne sont affichées **que** si le gérant fournit les attestations (// TODO).
- Entrée : chaque tampon est « appliqué » (`scale 1.25 → 1`, `opacity 0 → .92`, 180ms `power4.in`, puis 1 frame de flou 1px → 0), déclenché à `top 70%`, stagger 120ms.
- **Partenaires** : une ligne de registre mono « ILS NOUS FONT CONFIANCE » suivie des deux logos (GoodKat Take Away, Chez Ragusana) en niveaux de gris, 64px de haut. Ils repassent en couleur au hover (desktop) ou quand ils sont dans le viewport (mobile). **Pas de marquee** avec deux logos.

### 8.8 Bon d'intervention — contact (`#devis`)
- Fond `--marine`. H2 en `--blanc` : « Remplissez le bon. On s'occupe du reste. »
- **Le formulaire est un bon autocopiant** : carte `--blanc`, bord perforé en haut, n° pré-imprimé `VC-26-____`, champs en lignes à remplir (bordure basse 1px seulement, labels mono 10px au-dessus). Rayon 0.
  - Champs : Nom & prénom · Téléphone · Email (optionnel) · Type (4 cases à cocher dessinées : Devis · Urgence 24/7 · Contrat maintenance · Autre) · Adresse du site · Message.
  - Validation : la même que le site live (obligatoires, téléphone belge, message ≥ 10 caractères). Erreurs en mono `--rouge` sous la ligne.
- **Envoi (démo)** : le bouton « Envoyer le bon » compose un message WhatsApp avec les champs et ouvre `https://wa.me/32496847374?text=…` (encodé). Rien n'est envoyé à un serveur. Une note mono sous le bouton : « Démo : le bon s'ouvre dans WhatsApp. »
- **Geste de clôture** (avant l'ouverture de WhatsApp, 900ms au total) :
  1. **Sertissage** sur le bouton (§7.2), `navigator.vibrate(12)`.
  2. La feuille du dessus se **déchire** le long de la perforation et part en haut à droite (`rotate 0→9°`, `x +30vw`, `y −40vh`, 600ms `power2.in`).
  3. Dessous apparaît le **double jaune** (`#F6E27A` à 85 %, seule autre teinte autorisée, réservée à ce double) avec les mêmes champs en encre bleue à 70 % et le tampon « REÇUE » en Flap.
- À côté du bon (L, col. 9–12) : un bloc mono avec téléphone, WhatsApp, email `contact@vericore.be`, adresse, horaires et statut live.
- **S :** bon en pleine largeur, champs de 52px, le bouton d'envoi collant en bas du formulaire.
- Reduced motion : pas de déchirure ; le double apparaît en fondu de 150ms.

### 8.9 Fermeture de vanne — outro (`#fin`)
- Fond `--encre`. Les deux tubes arrivent sur une **vanne quart de tour** (SVG 140px, poignée `--rouge`), centrée en col. 2–4 (L) ou en haut (S).
- **Geste :** au scroll (scrub `start "top 60%"`, `end "top 10%"`) ou par drag/tap sur la poignée, la poignée tourne de **0° → 90°**. Au fil de la rotation, le flux ralentit (la durée de la boucle passe de 1.8s → ∞ : `timeScale 1 → 0`) puis s'arrête ; les tubes se « vident » (le corps passe à 35 % d'opacité depuis le bas, scrubé).
- Puis, à 100 % : le fond passe de `--encre` à `--rouge` par un `clip-path circle()` qui part de la vanne (r 0 → 150 %), 700ms `expo.inOut` (déclenché, pas scrubé). Apparaît « Chantier terminé. Chantier propre. » en sous-titre logo blanc.
- **Wordmark géant** « VERICORE » en Montserrat 900, `29vw`, `--blanc`, qui sort par le bas de l'écran (on ne voit que les 70 % hauts des lettres). Le **numéro** « +32 496 84 73 74 » en 800 `7vw` par-dessus, en `mix-blend-mode: difference`.
- Pied mono 11px : Vericore SRL · Rue Esseghem 43, 1090 Jette · TVA BE1005.585.934 · contact@vericore.be · Lun–ven 08:00–18:00 · Sam 09:00–15:00 · Urgences 24/7 · « Maquette non officielle ». Pas de liens réseaux sociaux tant que les comptes ne sont pas vérifiés (// TODO).
- Reduced motion : vanne fermée, fond rouge, pas de transition.

### 8.10 Barre d'action mobile (S uniquement)
Après le hero (quand `#top` sort du viewport), une barre de 64px apparaît en bas, collée à l'écran (`translateY 100% → 0`, 300ms `power3.out`), fond `--encre`, avec 3 cibles :
- « APPELER » (rouge plein, 50 % de la largeur) ;
- « WHATSAPP » ;
- « DEVIS » (ancre `#devis`).

Elle se cache quand `#devis` est visible. Prévois `padding-bottom: env(safe-area-inset-bottom)`.

### 8.11 Changement de langue
Le mitigeur (§7.4) déclenche le swap. Les textes en `Flap` (numéro de ticket, statuts, compteur 19/19, statut live) rejouent leur animation. Les titres changent **sans** animation, pour ne pas rejouer le scrub. On met à jour `document.title`, `<meta name="description">` et `<html lang>`. Les longueurs FR/EN diffèrent : vérifie qu'aucune ligne du H1 ne casse différemment au point de chevaucher le ticket (QA §13).

---

## 9. Dictionnaire FR / EN

`src/i18n/fr.ts` et `en.ts` exportent la même forme (`typeof fr`).

```ts
export const fr = {
  meta: {
    title: 'Vericore — Maintenance & dépannage tous corps d’état à Bruxelles · 24/7',
    description: 'Électricité, plomberie, chauffage, rénovation. Un seul interlocuteur pour syndics, entreprises et propriétaires. Urgences 24/7 depuis Jette.',
  },
  mockup: { bar: 'Maquette non officielle · Proposition de [VOTRE NOM] · [VOTRE CONTACT]', close: 'Masquer' },
  nav: { metiers: 'Métiers', zone: 'Zone', suivi: 'Suivi', contrats: 'Contrats', devis: 'Devis', call: 'Appeler', lang: 'Langue : français' },
  status: {
    open: (h: string) => `Bureau ouvert · jusqu’à ${h}`,
    closed: 'Bureau fermé · urgences 24/7 ouvertes',
    now: (t: string) => `Il est ${t} à Bruxelles.`,
  },
  hero: {
    kicker: 'Interventions et dépannage · Bruxelles · 24/7',
    h1: ['Un seul appel.', 'Tous les corps de métier.'],
    sub: 'Électricité, plomberie, chauffage, rénovation. Pour syndics, entreprises et propriétaires, depuis Jette et partout en Belgique.',
    micro: 'Devis sous 24h • Prix transparents • Sans engagement',
    phoneLabel: 'Urgences 24/7',
    ctaCall: 'Appeler maintenant',
    ctaWa: 'WhatsApp 24/7',
    tagline: 'interventions et dépannage',
  },
  ticket: {
    title: 'Bon d’intervention', sim: 'Simulation', no: 'N°',
    fields: { object: 'Objet', commune: 'Commune', trade: 'Corps de métier' },
    steps: ['Reçue', 'Planifiée', 'En route', 'Clôturée'],
    report: 'Rapport avant / pendant / après envoyé',
    demo: [
      { object: 'Fuite sous évier', commune: 'Jette', trade: 'Plomberie' },
      { object: 'Disjoncteur qui saute', commune: 'Schaerbeek', trade: 'Électricité' },
      { object: 'Plus d’eau chaude', commune: 'Uccle', trade: 'Chauffage' },
      { object: 'Infiltration plafond', commune: 'Ixelles', trade: 'Toiture / façade' },
    ],
  },
  urgence: {
    h2: 'Les pannes critiques ne préviennent pas.',
    board: [
      ['Ça fuit', 'Plomberie'], ['Ça disjoncte', 'Électricité'], ['Plus de chauffage', 'Chauffage'],
      ['Ça s’infiltre', 'Toiture / façade'], ['Accès bloqué', 'Serrures & accès'], ['Ventilation / HVAC HS', 'Ventilation'],
    ],
    delays: ['Sous 1h · 10 km autour de Jette', 'Sous 50 min · 10 km autour d’Uccle'],
    cta: 'Appeler l’urgence',
  },
  metiers: {
    h2: 'Un réseau. Huit métiers.',
    sub: 'un seul interlocuteur pour tout le bâtiment',
    indicative: 'indicatif',
    ask: 'Demander ce métier',
  },
  zone: {
    h2: 'Raccordé à 19 communes.',
    steps: [
      'Notre base : Rue Esseghem 43, Jette.',
      'Raccordé à 19 communes.',
      'Urgence : sous 1h autour de Jette, sous 50 min autour d’Uccle.',
      'Et au-delà, partout en Belgique.',
    ],
    r1: 'Sous 1h', r2: 'Sous 50 min', approx: 'position approximative',
    beyond: '+ Brabant flamand · Brabant wallon · toute la Belgique sur devis',
  },
  suivi: {
    h2: 'Chaque intervention laisse une trace.',
    steps: [
      { k: 'Reçue', t: 'Prise en charge', d: 'Chaque demande est analysée immédiatement et priorisée selon son niveau d’urgence.' },
      { k: 'Planifiée', t: 'Planification', d: 'La bonne équipe part avec les informations techniques du site et un stock standardisé à bord, pour régler un maximum dès la première visite.' },
      { k: 'En cours', t: 'Intervention', d: 'Sécurisation, réparation, et une notification à chaque étape clé.' },
      { k: 'Clôturée', t: 'Rapport', d: 'Avant, pendant, après : photos, pièces remplacées, recommandations. Tout est tracé.' },
    ],
    tabs: ['Avant', 'Pendant', 'Après'],
    pending: 'En attente de photos chantier',
  },
  contrats: {
    h2: 'Abonnements de maintenance.',
    sub: 'choisissez votre section',
    from: 'à partir de', perMonth: '/ mois', onQuote: 'Sur devis',
    idealFor: 'Idéal pour', included: 'Inclus',
    cta: 'Demander un audit technique',
    particuliers: 'Pour votre maison',
    conditionsTitle: 'Conditions & fonctionnement',
  },
  conformite: { partners: 'Ils nous font confiance' },
  devis: {
    h2: 'Remplissez le bon. On s’occupe du reste.',
    fields: { name: 'Nom & prénom', phone: 'Téléphone', email: 'Email (optionnel)', type: 'Type de demande', address: 'Adresse du site', message: 'Votre besoin' },
    placeholders: { name: 'Jean Dupont', phone: '+32 4XX XX XX XX', email: 'jean@exemple.be', address: 'Rue de la Loi 100, 1000 Bruxelles', message: 'Décrivez votre besoin…' },
    types: ['Devis', 'Urgence 24/7', 'Contrat maintenance', 'Autre'],
    errors: { required: 'Champ obligatoire', phone: 'Téléphone invalide', email: 'Email invalide', message: 'Au moins 10 caractères', type: 'Choisissez un type' },
    submit: 'Envoyer le bon',
    demoNote: 'Démo : le bon s’ouvre dans WhatsApp.',
    copy: 'Votre double',
    received: 'Reçue',
    waIntro: 'Bonjour, je vous contacte après avoir visité votre site web.',
    other: 'Autres moyens de contact',
  },
  fin: {
    done: 'Chantier terminé. Chantier propre.',
    hours: 'Lun–ven 08:00–18:00 · Sam 09:00–15:00 · Urgences 24/7',
    unofficial: 'Maquette non officielle',
  },
  mobileBar: { call: 'Appeler', wa: 'WhatsApp', quote: 'Devis' },
};

export const en: typeof fr = {
  meta: {
    title: 'Vericore — Building maintenance & repairs in Brussels · 24/7',
    description: 'Electrical, plumbing, heating, renovation. One contact for property managers, businesses and owners. 24/7 emergencies from Jette.',
  },
  mockup: { bar: 'Unofficial mockup · Proposal by [VOTRE NOM] · [VOTRE CONTACT]', close: 'Hide' },
  nav: { metiers: 'Trades', zone: 'Area', suivi: 'Tracking', contrats: 'Contracts', devis: 'Quote', call: 'Call', lang: 'Language: English' },
  status: {
    open: (h: string) => `Office open · until ${h}`,
    closed: 'Office closed · 24/7 emergencies open',
    now: (t: string) => `It’s ${t} in Brussels.`,
  },
  hero: {
    kicker: 'Call-outs and repairs · Brussels · 24/7',
    h1: ['One call.', 'Every trade.'],
    sub: 'Electrical, plumbing, heating, renovation. For property managers, businesses and owners, from Jette and across Belgium.',
    micro: 'Quote within 24h • Transparent prices • No commitment',
    phoneLabel: '24/7 emergencies',
    ctaCall: 'Call now',
    ctaWa: 'WhatsApp 24/7',
    tagline: 'call-outs and repairs',
  },
  ticket: {
    title: 'Work order', sim: 'Simulation', no: 'No.',
    fields: { object: 'Issue', commune: 'Area', trade: 'Trade' },
    steps: ['Received', 'Scheduled', 'On the way', 'Closed'],
    report: 'Before / during / after report sent',
    demo: [
      { object: 'Leak under the sink', commune: 'Jette', trade: 'Plumbing' },
      { object: 'Breaker keeps tripping', commune: 'Schaerbeek', trade: 'Electrical' },
      { object: 'No hot water', commune: 'Uccle', trade: 'Heating' },
      { object: 'Ceiling leak', commune: 'Ixelles', trade: 'Roof / facade' },
    ],
  },
  urgence: {
    h2: 'Critical failures don’t warn you.',
    board: [
      ['It’s leaking', 'Plumbing'], ['It keeps tripping', 'Electrical'], ['No heating', 'Heating'],
      ['Water’s coming in', 'Roof / facade'], ['Locked out', 'Locks & access'], ['Ventilation / HVAC down', 'Ventilation'],
    ],
    delays: ['Within 1h · 10 km around Jette', 'Within 50 min · 10 km around Uccle'],
    cta: 'Call emergency line',
  },
  metiers: {
    h2: 'One network. Eight trades.',
    sub: 'one contact for the whole building',
    indicative: 'indicative',
    ask: 'Request this trade',
  },
  zone: {
    h2: 'Connected to 19 municipalities.',
    steps: [
      'Our base: Rue Esseghem 43, Jette.',
      'Connected to 19 municipalities.',
      'Emergencies: within 1h around Jette, within 50 min around Uccle.',
      'And beyond, anywhere in Belgium.',
    ],
    r1: 'Within 1h', r2: 'Within 50 min', approx: 'approximate location',
    beyond: '+ Flemish Brabant · Walloon Brabant · rest of Belgium on quote',
  },
  suivi: {
    h2: 'Every job leaves a trail.',
    steps: [
      { k: 'Received', t: 'Intake', d: 'Every request is assessed straight away and prioritised by urgency.' },
      { k: 'Scheduled', t: 'Scheduling', d: 'The right team leaves with the site’s technical file and standard stock on board, to fix as much as possible on the first visit.' },
      { k: 'In progress', t: 'On site', d: 'Make safe, repair, and a notification at every key step.' },
      { k: 'Closed', t: 'Report', d: 'Before, during, after: photos, parts replaced, recommendations. Everything is on record.' },
    ],
    tabs: ['Before', 'During', 'After'],
    pending: 'Awaiting site photos',
  },
  contrats: {
    h2: 'Maintenance contracts.',
    sub: 'choose your pipe size',
    from: 'from', perMonth: '/ month', onQuote: 'On quote',
    idealFor: 'Best for', included: 'Included',
    cta: 'Request a technical audit',
    particuliers: 'For your home',
    conditionsTitle: 'Terms & how it works',
  },
  conformite: { partners: 'They trust us' },
  devis: {
    h2: 'Fill in the work order. We’ll handle the rest.',
    fields: { name: 'Full name', phone: 'Phone', email: 'Email (optional)', type: 'Request type', address: 'Site address', message: 'What you need' },
    placeholders: { name: 'Jane Doe', phone: '+32 4XX XX XX XX', email: 'jane@example.be', address: 'Rue de la Loi 100, 1000 Brussels', message: 'Describe what you need…' },
    types: ['Quote', '24/7 emergency', 'Maintenance contract', 'Other'],
    errors: { required: 'Required', phone: 'Invalid phone number', email: 'Invalid email', message: 'At least 10 characters', type: 'Pick a type' },
    submit: 'Send the work order',
    demoNote: 'Demo: the work order opens in WhatsApp.',
    copy: 'Your copy',
    received: 'Received',
    waIntro: 'Hello, I’m contacting you after visiting your website.',
    other: 'Other ways to reach us',
  },
  fin: {
    done: 'Job done. Site left clean.',
    hours: 'Mon–Fri 08:00–18:00 · Sat 09:00–15:00 · 24/7 emergencies',
    unofficial: 'Unofficial mockup',
  },
  mobileBar: { call: 'Call', wa: 'WhatsApp', quote: 'Quote' },
};
```

Les textes des métiers, contrats et conditions sont dans les données (§10), avec un champ `{ fr, en }`.

---

## 10. Données typées (`src/data/*.ts`)

Source : contenu actuel de vericore.be (`docs/SITE-CONTENT.md` du repo live). **Tous les prix sont indicatifs et à faire valider par le gérant** (ils étaient déjà listés « à valider » dans `docs/CLIENT-REQUEST.md`).

```ts
// src/data/business.ts
export const business = {
  name: 'Vericore SRL',
  brand: 'Vericore Multiservices',
  phone: '+32 496 84 73 74', tel: '+32496847374', wa: '32496847374',
  email: 'contact@vericore.be',
  address: { street: 'Rue Esseghem 43', zip: '1090', city: 'Jette', region: 'Bruxelles' },
  vat: 'BE1005.585.934',            // TODO confirmer (introuvable en recherche publique)
  geo: { jette: { lat: 50.8788, lon: 4.3287 }, uccle: null as null | { lat: number; lon: number } }, // TODO adresse base Uccle
  hours: { weekdays: ['08:00', '18:00'], saturday: ['09:00', '15:00'], sunday: null, emergency: '24/7' },
  founded: 2020,                    // TODO confirmer
  socials: null,                    // TODO : facebook/linkedin/instagram déclarés en SEO mais non vérifiés
  partners: [
    { name: 'GoodKat Take Away', logo: '/images/partner-goodkat.webp' },
    { name: 'Chez Ragusana', logo: '/images/partner-ragusana.webp' },
  ],
} as const;
```

```ts
// src/data/metiers.ts
type L = { fr: string; en: string };
export type Metier = { id: string; code: string; name: L; hero: L; badges: L[]; fact: L; photo?: string };
export const metiers: Metier[] = [
  { id: 'plomberie', code: 'D01', photo: 'plumbing-sink',
    name: { fr: 'Plomberie', en: 'Plumbing' },
    hero: { fr: 'Fuites, canalisations, chauffe-eau, salles de bain : intervention rapide et devis clair.', en: 'Leaks, drains, water heaters, bathrooms: fast call-outs and a clear quote.' },
    badges: [{ fr: 'Urgence sous 45 min', en: 'Emergency within 45 min' }, { fr: 'Prix annoncé avant travaux', en: 'Price agreed before work' }, { fr: 'Détection sans casser', en: 'Non-invasive leak detection' }],
    fact: { fr: 'Débouchage à partir de 120 € HTVA', en: 'Drain unblocking from €120 excl. VAT' } },
  { id: 'electricite', code: 'D02', photo: 'tableau-rgie',
    name: { fr: 'Électricité', en: 'Electrical' },
    hero: { fr: 'Installations et mises en conformité RGIE : tableaux, circuits, éclairage, domotique.', en: 'RGIE-compliant installs and upgrades: boards, circuits, lighting, home automation.' },
    badges: [{ fr: 'Dépannage sous 60 min', en: 'Call-out within 60 min' }, { fr: 'Contrôle par organisme agréé', en: 'Inspection by approved body' }, { fr: 'Bornes 3,7 à 22 kW', en: 'EV chargers 3.7–22 kW' }],
    fact: { fr: 'Remplacement de tableau : 1 200 – 3 500 €', en: 'Board replacement: €1,200–3,500' } },
  { id: 'chauffage', code: 'D03', photo: 'boiler-wall',
    name: { fr: 'Chauffage', en: 'Heating' },
    hero: { fr: 'Chaudières gaz, mazout, pompes à chaleur : installation, entretien, dépannage.', en: 'Gas and oil boilers, heat pumps: installation, servicing, repairs.' },
    badges: [{ fr: 'Certificats officiels', en: 'Official certificates' }, { fr: 'Urgence 24/7 d’octobre à avril', en: '24/7 emergencies Oct–Apr' }, { fr: 'Conseil primes Renolution', en: 'Renolution grant advice' }],
    fact: { fr: 'Chaudière gaz condensation posée : 3 500 – 6 500 €', en: 'Condensing gas boiler fitted: €3,500–6,500' } },
  { id: 'climatisation', code: 'D04',
    name: { fr: 'Climatisation', en: 'Air conditioning' },
    hero: { fr: 'Monosplit, multisplit, gainable. Réversible : chaud l’hiver, frais l’été.', en: 'Single-split, multi-split, ducted. Reversible: warm in winter, cool in summer.' },
    badges: [{ fr: 'Certification F-Gaz', en: 'F-Gas certified' }, { fr: 'Jusqu’à 19 dB(A)', en: 'Down to 19 dB(A)' }, { fr: 'Contrat d’entretien', en: 'Service contract' }],
    fact: { fr: 'Monosplit 3,5 kW (salon 30 m²) : 1 800 – 2 800 € TVAC', en: '3.5 kW single-split (30 m² room): €1,800–2,800 incl. VAT' } },
  { id: 'renovation', code: 'D05', photo: 'tech-hoodie-ceiling',
    name: { fr: 'Rénovation', en: 'Renovation' },
    hero: { fr: 'Rénovation complète ou partielle : un seul chef de chantier pour tous les corps d’état.', en: 'Full or partial renovation: one site manager for every trade.' },
    badges: [{ fr: 'Chiffrage lot par lot', en: 'Itemised quote' }, { fr: 'Démarches et permis', en: 'Permits handled' }, { fr: 'Toute la Région bruxelloise', en: 'All of Brussels-Capital' }],
    fact: { fr: 'Appartement 80–100 m² : 8 à 12 semaines', en: '80–100 m² flat: 8 to 12 weeks' } },
  { id: 'menuiserie', code: 'D06',
    name: { fr: 'Menuiserie', en: 'Carpentry' },
    hero: { fr: 'Sur mesure : portes, dressings, bibliothèques, cuisines. Fabrication en atelier, pose soignée.', en: 'Made to measure: doors, wardrobes, shelving, kitchens. Workshop-built, carefully fitted.' },
    badges: [{ fr: 'Conception 3D', en: '3D design' }, { fr: 'Bois FSC/PEFC sur demande', en: 'FSC/PEFC wood on request' }, { fr: 'Pose en 1 à 3 jours', en: 'Fitted in 1–3 days' }],
    fact: { fr: 'Dressing : 4 à 6 semaines du devis à la pose', en: 'Wardrobe: 4–6 weeks from quote to fitting' } },
  { id: 'peinture', code: 'D07', photo: 'lights-pendant',
    name: { fr: 'Peinture', en: 'Painting' },
    hero: { fr: 'Murs, plafonds, boiseries, façades. Peintures à faible COV, protection soignée, finitions propres.', en: 'Walls, ceilings, woodwork, facades. Low-VOC paints, careful protection, clean finish.' },
    badges: [{ fr: 'Protection meubles & sols', en: 'Furniture & floors protected' }, { fr: 'Pièce par pièce', en: 'Room by room' }, { fr: 'Façades avec échafaudage', en: 'Facades with scaffolding' }],
    fact: { fr: '22 – 45 €/m² TVAC 6 %', en: '€22–45/m² incl. 6% VAT' } },
  { id: 'carrelage', code: 'D08',
    name: { fr: 'Carrelage', en: 'Tiling' },
    hero: { fr: 'Sols et murs, salles de bain, terrasses, grands formats jusqu’à 120×260 cm.', en: 'Floors and walls, bathrooms, terraces, large formats up to 120×260 cm.' },
    badges: [{ fr: 'Étanchéité pièces humides', en: 'Wet-room waterproofing' }, { fr: 'Douche à l’italienne', en: 'Walk-in showers' }, { fr: 'Joints époxy ou ciment', en: 'Epoxy or cement grout' }],
    fact: { fr: '45 – 90 €/m² TVAC 6 %', en: '€45–90/m² incl. 6% VAT' } },
];
```

```ts
// src/data/contrats.ts
export type Contrat = { id: string; calibre: 16 | 20 | 26 | 32; name: L; long: L; idealFor: L; price: { min?: number; max?: number; from?: number; onQuote?: boolean }; note: L; included: L[] };
export const contrats: Contrat[] = [
  { id: 'bronze', calibre: 16, name: { fr: 'Bronze', en: 'Bronze' }, long: { fr: 'Entretien & prévention', en: 'Upkeep & prevention' },
    idealFor: { fr: 'Petits immeubles, commerces, propriétaires uniques', en: 'Small buildings, shops, single owners' },
    price: { min: 200, max: 350 }, note: { fr: 'Tarif indicatif — ajustable après analyse sur photos et contrôle sur place', en: 'Indicative — adjusted after photo review and site visit' },
    included: [
      { fr: '1 à 2 visites préventives par an', en: '1–2 preventive visits a year' },
      { fr: 'Contrôle des installations principales', en: 'Main systems check' },
      { fr: 'Rapport annuel', en: 'Annual report' },
      { fr: '2 interventions correctives incluses (max. 2h chacune)', en: '2 corrective call-outs included (max. 2h each)' },
      { fr: 'Délai d’intervention standard', en: 'Standard response time' },
      { fr: 'Tarif préférentiel au-delà du quota', en: 'Preferential rate beyond quota' },
    ] },
  { id: 'silver', calibre: 20, name: { fr: 'Silver', en: 'Silver' }, long: { fr: 'Maintenance active', en: 'Active maintenance' },
    idealFor: { fr: 'Immeubles résidentiels, copropriétés moyennes', en: 'Residential buildings, mid-size co-ownerships' },
    price: { min: 400, max: 700 }, note: { fr: 'Fourchette indicative — prix ajusté après audit technique et visite sur site', en: 'Indicative range — adjusted after technical audit and site visit' },
    included: [
      { fr: '3 à 4 visites préventives par an', en: '3–4 preventive visits a year' },
      { fr: 'Hotline technique', en: 'Technical hotline' },
      { fr: '4 interventions incluses (max. 2h chacune)', en: '4 call-outs included (max. 2h each)' },
      { fr: 'Délai d’intervention accéléré', en: 'Faster response time' },
      { fr: 'Rapport trimestriel', en: 'Quarterly report' },
      { fr: 'Historique technique du site', en: 'Site technical history' },
      { fr: 'Tarif réduit hors forfait', en: 'Reduced rate outside plan' },
    ] },
  { id: 'gold', calibre: 26, name: { fr: 'Gold', en: 'Gold' }, long: { fr: 'Gestion technique complète', en: 'Full technical management' },
    idealFor: { fr: 'Immeubles de bureaux, sites multi-équipements', en: 'Office buildings, multi-system sites' },
    price: { min: 800, max: 1300 }, note: { fr: 'Selon surface, équipements et criticité — validation finale après contrôle technique sur place', en: 'Depends on size, systems and criticality — confirmed after on-site check' },
    included: [
      { fr: '6 à 8 visites préventives par an', en: '6–8 preventive visits a year' },
      { fr: 'Priorité 24/7', en: '24/7 priority' },
      { fr: '8 à 12 interventions incluses', en: '8–12 call-outs included' },
      { fr: 'Technicien référent dédié', en: 'Dedicated lead technician' },
      { fr: 'Référencement technique complet', en: 'Full technical site file' },
      { fr: 'Reporting mensuel détaillé', en: 'Detailed monthly reporting' },
      { fr: 'Budget annuel prévisionnel', en: 'Annual forecast budget' },
      { fr: 'Coordination technique multi-corps d’état', en: 'Multi-trade coordination' },
    ] },
  { id: 'premium', calibre: 32, name: { fr: 'Premium', en: 'Premium' }, long: { fr: 'Partenaire technique dédié', en: 'Dedicated technical partner' },
    idealFor: { fr: 'Grands sites, patrimoines complexes', en: 'Large sites, complex portfolios' },
    price: { from: 1600, onQuote: true }, note: { fr: 'Sur devis — généralement à partir de 1 600 € / mois, après audit complet', en: 'On quote — usually from €1,600 / month, after a full audit' },
    included: [
      { fr: 'Quota mensuel d’heures incluses', en: 'Monthly hours included' },
      { fr: 'Astreinte renforcée 24/7', en: 'Reinforced 24/7 on-call' },
      { fr: 'Plan pluriannuel de maintenance', en: 'Multi-year maintenance plan' },
      { fr: 'Audit annuel approfondi', en: 'In-depth annual audit' },
      { fr: 'Interlocuteur unique dédié', en: 'Single dedicated contact' },
      { fr: 'SLA contractuels garantis', en: 'Contractual SLAs' },
      { fr: 'Reporting exécutif mensuel', en: 'Monthly executive reporting' },
      { fr: 'Pilotage stratégique et conseil', en: 'Strategic steering & advice' },
    ] },
];

export const serenite = {
  name: { fr: 'Pack Sérénité Habitat', en: 'Home Peace-of-Mind Pack' },
  tagline: { fr: 'La tranquillité d’esprit pour votre habitation, toute l’année.', en: 'Peace of mind for your home, all year round.' },
  idealFor: { fr: 'Propriétaires, locataires, particuliers', en: 'Owners, tenants, households' },
  price: 9.99, note: { fr: 'Sans engagement — résiliable à tout moment', en: 'No commitment — cancel anytime' },
  included: [
    { fr: 'Check-up complet de l’habitation', en: 'Full home check-up' },
    { fr: '–20 % sur toutes les interventions', en: '–20% on all call-outs' },
    { fr: 'Gestion administrative en cas de sinistre', en: 'Claims paperwork handled' },
    { fr: 'Archivage client sécurisé', en: 'Secure service history' },
    { fr: 'Un seul responsable technique', en: 'One technical lead' },
    { fr: 'Travail professionnel, propre et soigné', en: 'Professional, clean, careful work' },
    { fr: 'Déplacement gratuit lors des interventions', en: 'Free travel on call-outs' },
  ],
};

export const conditions: L[] = [
  { fr: 'Les tarifs sont indicatifs et définis après analyse technique du site.', en: 'Prices are indicative and set after a technical site review.' },
  { fr: 'Une visite sur place est systématiquement réalisée avant la signature du contrat.', en: 'A site visit always happens before the contract is signed.' },
  { fr: 'Les interventions ponctuelles restent possibles sans abonnement, selon disponibilité.', en: 'One-off call-outs remain possible without a contract, subject to availability.' },
  { fr: 'Les travaux importants, rénovations, remplacements majeurs et fournitures font l’objet de devis séparés.', en: 'Major works, renovations, replacements and supplies are quoted separately.' },
  { fr: 'Toute intervention au-delà du volume inclus est facturée au tarif contractuel préférentiel.', en: 'Call-outs beyond the included volume are billed at the preferential contract rate.' },
];
```

```ts
// src/data/communes.ts  (ordre d'affichage ; géométrie dans communes.geo.ts, §8.4)
export const communes = ['Anderlecht','Auderghem','Berchem-Sainte-Agathe','Bruxelles','Etterbeek','Evere','Forest','Ganshoren','Ixelles','Jette','Koekelberg','Molenbeek-Saint-Jean','Saint-Gilles','Saint-Josse-ten-Noode','Schaerbeek','Uccle','Watermael-Boitsfort','Woluwe-Saint-Lambert','Woluwe-Saint-Pierre'] as const;
```

> Note : le site live parle de « 19 communes » et en liste bien 19 (Bruxelles-Ville compris). Le contenu « +10 ans d'expérience » des pages communes n'est **pas** repris (création en 2020).

---

## 11. Honnêteté de la maquette

- Barre maquette (§8.0) avec `[VOTRE NOM] · [VOTRE CONTACT]` — **à remplacer par l'utilisateur avant envoi**, jamais par Claude Code.
- **noindex à 3 endroits :**
  1. `<meta name="robots" content="noindex, nofollow">` dans `index.html` ;
  2. `public/robots.txt` : `User-agent: *` + `Disallow: /` ;
  3. l'en-tête `X-Robots-Tag: noindex, nofollow` dans `vercel.json` (§15).
- Aucun avis, note, témoignage, compteur de clients, numéro d'agréation, logo de certification.
- Le ticket du hero et de la section Suivi est étiqueté **SIMULATION** en permanence.
- Pas d'iframe Google Maps (RGPD) : la carte est un SVG maison.
- Pas d'analytics, pas de cookies → pas de bannière.
- Les prix portent tous la mention « indicatif ».
- Chaque `// TODO` du code est listé dans `TODO.md` à la racine du projet, généré à la fin (grep).

---

## 12. Accessibilité et performance

- **Lighthouse mobile :** Performance ≥ 85, Accessibilité ≥ 95, Bonnes pratiques ≥ 95. Mesure avec `npx lighthouse http://localhost:4173 --preset=perf --form-factor=mobile` sur `npm run preview`.
- **Budget JS :** ≤ 170 KB gzip au total (React ~45, GSAP+ST ~45, Motion ~35, Lenis ~5, app ~40). Lenis est chargé en dynamique (`import()`) seulement sur desktop. Les données de la carte sont chargées en dynamique quand `#zone` approche (`rootMargin: 600px`).
- **Polices :** 2 fichiers variables WOFF2 en `preload` (Montserrat latin, JetBrains Mono latin), `font-display: swap`, `size-adjust` ajusté sur un fallback Arial pour limiter le CLS.
- **LCP :** le H1 (texte), pas une image. CLS < 0.05 : réserve toutes les hauteurs (hero 100svh, ticket et carte dimensionnés).
- **Vidéos :** aucune. Si le gérant en fournit plus tard : `muted playsinline loop preload="none"`, lecture seulement dans le viewport.
- **Sémantique :** `header`, `main`, une `section` par section avec `aria-labelledby`, un seul `h1`. Les SVG décoratifs (tubes, raccords, cotes) ont `aria-hidden="true"`. Les textes en Flap ont un `aria-label` avec la valeur finale, et l'animation est `aria-hidden`. Les accordéons portent `aria-expanded` et `aria-controls`. Le formulaire a des `label` réels et des erreurs liées par `aria-describedby`. Le focus est visible : contour 2px `--rouge-vif`, décalé de 3px.
- **Clavier :** tout est opérable (mitigeur, accordéons, vanne : flèches ou Entrée ferment la vanne).
- **Reduced motion :** chaque fallback du §7–8 est implémenté, plus un test Playwright avec `reducedMotion: 'reduce'`.
- **Cibles tactiles** ≥ 44×44px.

---

## 13. Boucle de QA visuelle (obligatoire à chaque checkpoint)

Script `scripts/qa.ts` (Playwright) contre `npm run preview` :
1. Captures **390×844** (iPhone 13, `isMobile`, `hasTouch`) et **1440×900**, pleine page **et** viewport, après la fin de l'intro (attends `window.__introDone === true`, flag posé par la timeline).
2. Captures à des positions de scroll clés : 0, chaque section, et dans `#zone` à p = 0.1 / 0.4 / 0.7 / 0.95.
3. Une **vidéo** du hero (Playwright `recordVideo`, 4s, 390×844) et sa conversion en GIF (`ffmpeg -i hero.webm -vf "fps=15,scale=390:-1" hero.gif`).
4. Mêmes captures en FR et en EN, et en reduced motion.
5. Sortie dans `qa/<checkpoint>/`.

Puis **regarde les images** et vérifie, en le notant dans `qa/<checkpoint>/notes.md` :
- La palette est respectée : rouge et marine dominants, aucun bleu ciel, aucun dégradé.
- Le wordmark déborde vraiment et est coupé.
- Les tubes ne passent jamais **sur** un texte de paragraphe (seulement sous les titres géants).
- Aucune rangée de cartes identiques, aucune icône en tête de bloc, rien de centré-symétrique par défaut.
- Le numéro de téléphone se lit en un coup d'œil sur mobile.
- Le ticket et l'étiquette SIMULATION sont visibles.
- Pas de débordement horizontal (`document.documentElement.scrollWidth === innerWidth`).
- Le contraste des paires de texte est bon (script).

Si une capture « ressemble à un template », corrige **avant** de continuer et refais la capture.

---

## 14. Structure du projet et ordre de construction

```
vericore-reseau-demo/
  index.html
  vercel.json
  package.json
  public/
    brand/  images/   (copiés depuis le pack)
    robots.txt
    favicon.svg       (= brand/vericore-mark.svg)
  scripts/qa.ts
  src/
    main.tsx  App.tsx  styles.css   (@import "tailwindcss"; @theme {...})
    i18n/  fr.ts  en.ts  index.tsx (provider + useT)
    data/  business.ts  metiers.ts  contrats.ts  communes.ts  communes.geo.ts
    motion/  tokens.ts  ticker.ts  lenis.ts  Reseau.tsx  Sertissage.tsx  Flap.tsx  reveal.ts  useBrusselsStatus.ts
    components/  MockupBar  Nav  Mitigeur  Cursor  Magnetic  Ticket  SymptomBoard  Tampon  CoupeTube  Vanne  BonIntervention  MobileBar  Duotone
    sections/  Hero  Urgence  Metiers  Zone  Suivi  Contrats  Conformite  Devis  Fin
```

**Ordre :**
1. Scaffold (Vite React TS, Tailwind v4, deps, polices vérifiées), tokens `@theme`, i18n, données, `vercel.json` + `robots.txt` + meta noindex.
2. `ticker.ts` (gsap.ticker unique), `lenis.ts` (desktop only), `reveal.ts`, `Flap`, `Sertissage`.
3. MockupBar, Nav, Mitigeur, statut live.
4. **Hero** complet : layout S/M/L, timeline de chargement, scroll du hero, ticket qui tourne.
5. Boucle QA §13 sur le hero.

**⏸ CHECKPOINT HERO** — `npm run dev -- --host`, donne l'URL LAN, montre les captures 390 et 1440 + le GIF. **Attends mon OK.**

6. `Reseau` sur toute la page (avec des sections vides de hauteur correcte), dérivations, raccords.
7. Urgence → Métiers → Zone (données carte, licence) → Suivi → Contrats → Conformité → Devis → Fin → MobileBar.
8. Curseur, magnétiques, reduced motion partout.
9. QA §13 complète, Lighthouse, budget JS, `TODO.md`.
10. Déploiement de prévisualisation Vercel (§15).

**Done quand :**
- [ ] Les 9 sections sont présentes, FR/EN complets, sans texte en dur hors i18n/data.
- [ ] Les 4 motions signature fonctionnent en S, M et L, avec leurs fallbacks reduced motion.
- [ ] Le réseau suit le scroll sans saut ni décalage après redimensionnement ou rotation d'écran.
- [ ] La scène épinglée marche sur iOS Safari (pas de saut de barre d'adresse : utilise `svh` et `ScrollTrigger.normalizeScroll(false)`, `ignoreMobileResize: true`).
- [ ] Lighthouse mobile ≥ 85 / 95 / 95 ; JS ≤ 170 KB gzip ; aucun débordement horizontal.
- [ ] noindex aux 3 endroits ; barre maquette ; SIMULATION visible ; aucune donnée inventée.
- [ ] Aucun fichier de `reference/` dans `public/`.
- [ ] `TODO.md` à jour.

---

## 15. Déploiement Vercel

`vercel.json` :
```json
{
  "cleanUrls": true,
  "headers": [
    { "source": "/(.*)", "headers": [
      { "key": "X-Robots-Tag", "value": "noindex, nofollow" },
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]},
    { "source": "/assets/(.*)", "headers": [
      { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
    ]},
    { "source": "/images/(.*)", "headers": [
      { "key": "Cache-Control", "value": "public, max-age=604800" }
    ]}
  ]
}
```

`package.json` :
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "qa": "tsx scripts/qa.ts",
  "deploy": "npm run build && vercel deploy --prod --yes"
}
```
Première fois : `npm i -g vercel`, `vercel login`, puis `vercel link` (nouveau projet `vericore-reseau-demo`, **pas** celui du site live). Vérifie après déploiement : `curl -I https://<url>/ | grep -i x-robots` doit renvoyer `noindex`.

**Test iOS Safari obligatoire** avant d'envoyer le lien : scène épinglée, sticky des contrats, `tel:` et `wa.me`, barre d'action mobile avec la safe area.

**Quand le gérant signe :**
- [ ] Retirer le noindex (3 endroits) et la barre maquette ; retirer « Maquette non officielle » du footer.
- [ ] Brancher sur le domaine `vericore.be` (et décider : remplacer le site live ou fusionner dans le repo existant **en gardant** les 152 pages SEO service × commune, les hreflang et les URLs actuelles, pour ne pas perdre le référencement).
- [ ] Ajouter le **néerlandais** (traductions existantes dans le repo live).
- [ ] Remplacer l'envoi WhatsApp du bon par le vrai formulaire (Web3Forms, validation Zod, mêmes règles que le live).
- [ ] Obtenir : **logo vectoriel d'origine** (SVG/AI), **vraies photos de chantier** (avant/après) ≥ 2400px, **rushes vidéo** (camionnettes, techniciens au travail, sertissage d'un raccord PEX en gros plan → candidat idéal pour un scrub vidéo dans le hero), photo de la façade Rue Esseghem.
- [ ] Confirmer : TVA BE1005.585.934, année de création, adresse et existence de la base d'Uccle, délais « sous 1h / 50 min », vrai 24/7, prix indicatifs, assurances et numéros (RGIE, décennale, RC), comptes réseaux sociaux.
- [ ] Recueillir de vrais avis (Google Business Profile) avant d'afficher quoi que ce soit.
- [ ] JSON-LD `LocalBusiness` (+ `Service`, `FAQPage`) avec les données confirmées.
- [ ] Repasser `TODO.md` à zéro.
