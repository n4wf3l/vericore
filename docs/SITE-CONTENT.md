# Vericore SRL — Inventaire complet du contenu du site

> Source : site de production **https://vericore.be** + code source (branche `main`)
> Date d'extraction : 2026-10-21
> Objectif : document de référence pour la refonte complète du design du site.
> Langues disponibles sur le site : **FR (principale)**, **NL**, **EN**. Ce document regroupe le contenu FR ; les équivalents NL/EN existent dans [src/i18n/locales/](../src/i18n/locales/) et [src/data/serviceContent.ts](../src/data/serviceContent.ts) / [src/data/communeContent.ts](../src/data/communeContent.ts).

---

## Table des matières

1. [Identité de l'entreprise](#1-identité-de-lentreprise)
2. [Inventaire des photos & assets](#2-inventaire-des-photos--assets)
3. [Chrome UI (navigation, CTA, badges)](#3-chrome-ui-navigation-cta-badges)
4. [Section Hero](#4-section-hero)
5. [Section À propos](#5-section-à-propos)
6. [Section Expertises (7 cartes)](#6-section-expertises-7-cartes)
7. [Section Services (11 services généraux)](#7-section-services-11-services-généraux)
8. [Pages Services dédiées (8 métiers)](#8-pages-services-dédiées-8-métiers)
9. [Abonnements maintenance (5 formules)](#9-abonnements-maintenance-5-formules)
10. [Projets / Réalisations](#10-projets--réalisations)
11. [Partenaires](#11-partenaires)
12. [Pourquoi Vericore](#12-pourquoi-vericore)
13. [Témoignages](#13-témoignages)
14. [FAQ (14 Q&A)](#14-faq-14-qa)
15. [Contact & Recrutement](#15-contact--recrutement)
16. [Pages communales (18 communes)](#16-pages-communales-18-communes)
17. [Articles de blog](#17-articles-de-blog)
18. [Garanties & assurances](#18-garanties--assurances)
19. [Footer & mentions légales](#19-footer--mentions-légales)
20. [SEO & zones desservies](#20-seo--zones-desservies)
21. [Pages & routes du site](#21-pages--routes-du-site)

---

## 1. Identité de l'entreprise

| Champ | Valeur |
|---|---|
| Nom | **Vericore SRL** |
| Slogan | *Votre partenaire de confiance pour tous vos travaux à Bruxelles* |
| Tagline courte | Maintenance & Rénovation |
| Description | Entreprise générale de construction et rénovation à Bruxelles. Expert en électricité, plomberie, chauffage, menuiserie et tous corps d'état. Service 24/7, devis gratuit. |
| Email | contact@vericore.be |
| Téléphone | +32 496 84 73 74 |
| WhatsApp | +32 496 84 73 74 |
| Adresse | Rue Esseghem 43, 1090 Jette, Belgique |
| TVA | BE1005.585.934 |
| Année de création | 2020 |
| Géo | 50.8788 N, 4.3287 E |
| Horaires | Lun–Ven 08:00–18:00 · Sam 09:00–15:00 · Urgence 24/7 |
| Fourchette prix | €€ |
| Site | https://vericore.be |
| Réseaux (déclarés en SEO) | facebook.com/vericore · linkedin.com/company/vericore · instagram.com/vericore |

---

## 2. Inventaire des photos & assets

### Logos & identité ([src/assets/](../src/assets/))

| Fichier | Usage | Format |
|---|---|---|
| `logo.svg` | Logo vectoriel principal (header, footer) | SVG, 874 o |
| `logo.jpeg` | Logo bitmap (OG image, favicon fallback) | JPEG, 77 Ko |
| `icon..png` | Icône app / favicon alternatif | PNG, 101 Ko |

### Photos produit ([public/](../public/))

| Fichier | Dimension approx. | Taille | Usage sur le site |
|---|---|---|---|
| `bg-camions.png` | Grand format | 2,2 Mo | **Fond du Hero (homepage)** — camionnettes Vericore |
| `bg-worker.png` | Grand format | 2,1 Mo | Fond secondaire + article blog *10 erreurs rénovation* |
| `bureaux.png` | Standard | 1,0 Mo | Visuel bureaux (section About / partenariats) |
| `installation-maintenance.png` | Standard | 3,3 Mo | Projet #1 Plomberie PEX/multicouche + article *Coût rénovation* |
| `plafonnage.png` | Standard | 1,7 Mo | Projet #2 Plafonnage, finitions intérieures |
| `conformite-electrique.png` | Standard | 2,0 Mo | Projet #3 Mise aux normes RGIE + article *RGIE* |
| `plomberie.png` | Standard | 1,9 Mo | Projet #4 Raccordements sanitaires |
| `chaudiere.png` | Standard | 1,8 Mo | Projet #5 Chaudière / chauffage |
| `eclairage.png` | Standard | 2,1 Mo | Projet #6 Éclairage & luminaires |
| `parlophone.png` | Standard | 7,7 Mo (à optimiser) | Projet interphonie / parlophones |
| `the-good-kat.png` | Logo client | 19 Ko | Partenaire *GoodKat Take Away* |
| `chez-ragusana.png` | Logo client | 715 Ko | Partenaire *Chez Ragusana* |
| `og-image.jpg` | 1200×630 | 77 Ko | Open Graph (partage social) |
| `favicon.png` | 32×32 | 101 Ko | Favicon du navigateur |

> **Note de refonte** : plusieurs PNG dépassent 2 Mo. Prévoir conversion WebP/AVIF (le composant `OptimizedImage` existe déjà) et compression < 400 Ko par image à format identique.

---

## 3. Chrome UI (navigation, CTA, badges)

### Marque / Common

- **Nom affiché** : Vericore
- **Tagline** : Maintenance & Rénovation
- **Téléphone** : +32 496 84 73 74
- **Email** : contact@vericore.be
- **Adresse courte** : Rue Esseghem 43, 1090 Jette
- **Ville** : Bruxelles, Belgique

### Boutons globaux (CTA)

| Clé | Libellé FR |
|---|---|
| contact | Nous contacter |
| quote | Devis gratuit |
| whatsapp | WhatsApp 24/7 |
| urgent | Urgence 24/7 |
| learnMore | En savoir plus |
| sendMessage / submit | Envoyer |
| callUs | Appelez-nous |
| back | Retour |

### Navigation principale

Accueil · À propos · Expertises · Services · Abonnements · Projets · Témoignages · FAQ · Contact · Langue (FR / NL / EN)

### Barre mobile sticky

- Actions rapides : **Urgence 24/7**, **Demander un devis**, **Abonnements**
- Trust strip : Assuré · Certifié · Devis clair · 24/7
- Message WhatsApp pré-rempli : *"Bonjour, je vous contacte après avoir visité votre site web."*

---

## 4. Section Hero

- **Image de fond** : `/bg-camions.png`
- **Overlay** : dégradé slate-950 (gauche → droite, plus opaque sur mobile)

### Badges (3 pastilles)

1. Intervention 24h/7 *(icône Clock)*
2. Basé à Bruxelles · Déplacements Belgique *(icône MapPin)*
3. Conforme & Assuré *(icône Shield — masqué mobile)*

### Titre (H1)

> **Maintenance technique & _rénovation_ de bâtiments**

### Sous-titre

> Services professionnels de maintenance et rénovation pour syndics, entreprises et propriétaires à Bruxelles et en Belgique. Intervention rapide, qualité garantie.

### Trust points (desktop uniquement)

- Multi-technique : électricité, plomberie, HVAC, rénovation
- Réactivité 24h/7 pour urgences techniques
- Partenaire syndics & gestionnaires immobiliers
- Reporting détaillé + traçabilité

### CTA

- **Primaire** : Demandez votre devis → `#contact`
- **Secondaire** : Nos services (ouvre WhatsApp)

### Micro-réassurance

> Devis sous 24h • Prix transparents • Sans engagement

### Carte contact rapide (desktop uniquement)

- Badge rouge pulsant : **Urgence 24/7**
- Titre : *Besoin d'une intervention rapide ?*
- CTA téléphone en gros : +32 496 84 73 74
- Bouton WhatsApp vert
- Même micro-réassurance

---

## 5. Section À propos

- **Sous-titre** : À propos
- **Titre (H2)** : Votre Partenaire Technique de Confiance
- **Description** : *Une approche méthodique pour la maintenance et la valorisation de votre patrimoine immobilier*

### Mission (3 paragraphes)

1. Chez **Vericore**, nous ne nous contentons pas d'intervenir sur des équipements. Nous accompagnons propriétaires, syndics et gestionnaires dans la sécurisation et l'optimisation de leur patrimoine bâti. Notre mission : **vous libérer des contraintes techniques** pour que vous vous concentriez sur l'essentiel.
2. Grâce à notre expertise multi-technique et notre approche préventive, nous transformons la maintenance réactive en **gestion proactive**. Chaque intervention est tracée, chaque recommandation documentée, chaque décision éclairée.
3. Que vous gériez une copropriété, un parc immobilier d'entreprise ou votre bien personnel, nous sommes votre **interlocuteur unique** pour tous vos besoins techniques — avec la rigueur et la réactivité que vous attendez.

### Chip : *Syndics • Entreprises • Propriétaires*

### Notre Méthode (4 étapes)

| Étape | Titre | Description |
|---|---|---|
| 1 | Diagnostic & Priorisation | Analyse technique et identification des urgences |
| 2 | Intervention & Sécurisation | Exécution conforme avec matériel certifié |
| 3 | Reporting & Traçabilité | Documentation complète et validation client |
| 4 | Suivi & Optimisation | Recommandations préventives et planification |

### Engagements sociaux & humains

**Titre** : Nos Engagements Sociaux & Humains
**Sous-titre** : *Une entreprise performante est aussi une entreprise responsable*

- **Emplois locaux et formation continue** : création d'opportunités et insertion
- **Égalité des chances** : recrutement sans distinction d'origine, convictions, genre ou orientation
- **Environnement inclusif** : cadre de travail basé sur la compétence, la motivation et la volonté de progresser
- **Culture d'entreprise solide** : cet engagement humain contribue à la qualité de service

### Proof chips (preuves)

- SLA Garanti
- Conformité RGIE/NIT
- Interlocuteur Unique
- Historique Digitalisé

---

## 6. Section Expertises (7 cartes)

- **Sous-titre** : Nos expertises
- **Titre** : Une approche professionnelle pensée pour la gestion immobilière
- **Hints** : *Survolez une carte pour voir les détails* (desktop) / *Touchez une carte pour voir les détails* (mobile)
- **CTA** : Besoin d'un accompagnement sur mesure ? → **Discutons de votre projet**

| # | Titre | Teaser | Icône |
|---|---|---|---|
| 1 | Processus d'intervention 24h/7 | Un processus clair et réactif pour la continuité de service | Clock |
| 2 | Gestion des urgences techniques | Disponibilité 24h/7 pour les incidents critiques | AlertTriangle |
| 3 | Organisation logistique & stock embarqué | Stock standardisé pour réduire les délais d'intervention | Truck |
| 4 | Référencement technique des sites | Dossier technique détaillé pour chaque site sous contrat | FileText |
| 5 | Reporting & suivi des interventions | Transparence totale et traçabilité complète | BarChart3 |
| 6 | Reporting digital & suivi en temps réel | Plateforme de gestion pour un suivi optimal | Smartphone |
| 7 | Contrats de maintenance & accompagnement long terme | Partenariat technique de référence pour votre patrimoine | FileSignature |

### Descriptions complètes

**1. Processus d'intervention 24h/7** — Nous avons mis en place un processus d'intervention clair et réactif afin d'assurer la **continuité de service** pour les bâtiments que nous gérons. Chaque demande est analysée immédiatement, priorisée selon son niveau d'urgence et orientée vers l'équipe la plus adaptée. Nos techniciens interviennent avec les informations techniques essentielles du site, ce qui permet une **prise en charge rapide** et efficace dès l'arrivée sur place. Notre objectif : limiter l'impact pour les occupants, **sécuriser les installations** et rétablir le fonctionnement normal dans les meilleurs délais.

**2. Gestion des urgences techniques** — Les pannes critiques ne préviennent pas. C'est pourquoi nous assurons une **disponibilité 24h/7** pour les incidents nécessitant une **action immédiate** : fuites d'eau, coupures électriques, défaillances HVAC, infiltrations, accès bloqués ou problèmes de sécurité. Nos équipes sont formées pour intervenir en situation sensible, sécuriser temporairement ou définitivement les installations et coordonner les suites nécessaires si des travaux complémentaires sont requis. La **rapidité**, la maîtrise et la **fiabilité** sont au cœur de notre gestion des urgences.

**3. Organisation logistique & stock embarqué** — Afin de réduire au maximum les **délais d'intervention**, chacune de nos camionnettes est équipée d'un stock standardisé de pièces et de consommables techniques couvrant les pannes les plus fréquentes. Ce stock est défini selon nos protocoles internes et contrôlé régulièrement afin de garantir une disponibilité immédiate sur site, sans dépendre d'un approvisionnement de dernière minute. Cette organisation logistique nous permet d'augmenter notre taux de **résolution dès la première visite**, de limiter les interruptions et d'**optimiser les coûts** pour nos clients.

**4. Référencement technique des sites** — Pour chaque immeuble ou site sous contrat, nous constituons un **dossier technique détaillé** : plans, équipements installés, composants sensibles, historiques d'intervention et particularités du bâtiment. Ce référencement nous permet d'anticiper les besoins, de préparer les interventions en amont et d'envoyer la bonne équipe avec le matériel adapté. Résultat : moins d'imprévus, des **interventions plus rapides** et une **gestion technique maîtrisée** sur le long terme.

**5. Reporting & suivi des interventions** — Chaque intervention fait l'objet d'un compte-rendu précis : description du problème, actions réalisées, pièces remplacées, recommandations et éventuelles opérations futures à prévoir. Ce suivi garantit une **transparence totale** et permet aux gestionnaires d'immeubles de disposer d'une **vision claire** de l'état technique de leur patrimoine. Nous privilégions une relation durable fondée sur la **traçabilité**, la communication et l'anticipation.

**6. Reporting digital & suivi en temps réel** — Chaque demande d'intervention est enregistrée dans notre **plateforme interne** de gestion technique. Le client est automatiquement notifié par e-mail à chaque étape clé : prise en charge de la demande, planification, intervention en cours et clôture. Un accès dédié permet de consulter l'état d'avancement, l'historique des interventions et les rapports techniques associés. Ce système garantit une **transparence totale**, une **traçabilité complète** et une communication fluide entre nos équipes et les gestionnaires de sites.

**7. Contrats de maintenance & accompagnement long terme** — Au-delà des interventions ponctuelles, nous proposons des **contrats de maintenance** sur mesure adaptés aux besoins des immeubles résidentiels, bureaux, commerces et sites industriels. Ces contrats incluent des visites préventives, des contrôles réguliers, une priorisation des urgences, une gestion budgétaire maîtrisée et un interlocuteur dédié. Notre ambition : devenir le **partenaire technique** de référence de nos clients et protéger durablement la **valeur de leur patrimoine** immobilier.

---

## 7. Section Services (11 services généraux)

| ID | Titre | Catégorie | Description | Icône |
|---|---|---|---|---|
| maintenance | Maintenance & Entretien de Bâtiment | maintenance | Service complet de maintenance préventive et curative pour tous types de bâtiments | Wrench |
| renovation | Rénovation Intérieure | renovation | Rénovation complète d'espaces résidentiels et professionnels | Home |
| electricite | Électricité | maintenance | Installation, réparation et mise aux normes électriques | Zap |
| plomberie | Plomberie | maintenance | Plomberie générale, dépannage et installation sanitaire | Droplets |
| ventilation | Ventilation & VMC | maintenance | Installation et maintenance de systèmes de ventilation | Wind |
| reparations | Réparations Générales | maintenance | Interventions tous corps d'état pour vos réparations | Hammer |
| amenagement | Aménagement Intérieur | renovation | Cloisons, plafonnage, carrelage et finitions | Layers |
| suivi | Suivi de Chantiers | specialty | Coordination et gestion de vos projets de rénovation | ClipboardCheck |
| facade | Nettoyage Façade & Toiture | specialty | Entretien extérieur haute pression et sécurisé | Building2 |
| peinture | Peinture | renovation | Peinture intérieure et extérieure professionnelle | PaintBucket |
| sanitaire | Sanitaire | renovation | Installation et rénovation de salles de bains | Bath |

---

## 8. Pages Services dédiées (8 métiers)

Chaque page suit la structure : **Hero (sous-titre + badges confiance) → About (titre + 3 paragraphes) → Pour qui (3 profils) → Processus (4 étapes) → Facteurs de prix (4) → FAQ (5 Q&A)**. Les slugs URL varient par langue (SEO).

### Slugs par langue

| Service | FR | NL | EN |
|---|---|---|---|
| Rénovation | `renovation` | `renovatie` | `renovation` |
| Électricité | `electricien` | `elektricien` | `electrician` |
| Plomberie | `plombier` | `loodgieter` | `plumber` |
| Chauffage | `chauffagiste` | `verwarmingsinstallateur` | `heating` |
| Climatisation | `climatisation` | `airco-installateur` | `air-conditioning` |
| Menuiserie | `menuisier` | `schrijnwerker` | `carpenter` |
| Peinture | `peintre` | `schilder` | `painter` |
| Carrelage | `carreleur` | `tegelzetter` | `tiler` |

### 8.1 Rénovation

**Hero** : *Rénovation complète ou partielle à Bruxelles : coordination tous corps d'état, gestion de chantier centralisée et respect des délais annoncés.*

**Trust badges** : Intervention 24/7 · Garantie décennale · Devis gratuit sous 24h · Toute la Région bruxelloise

**About titre** : *Rénovation clé en main à Bruxelles*

**Description** :
1. Vericore prend en charge des projets de rénovation de toutes envergures à Bruxelles : appartements, maisons unifamiliales, plateaux de bureaux et parties communes d'immeubles. Notre approche pluridisciplinaire couvre gros œuvre, plâtrerie, électricité, sanitaire, chauffage et finitions, ce qui vous évite de multiplier les intervenants.
2. Chaque chantier commence par un diagnostic sur place, un relevé métré et une analyse des contraintes structurelles et techniques. Nous établissons un planning coordonné entre les corps de métier avec un seul chef de chantier comme interlocuteur pour toute la durée du projet.
3. Nous respectons les normes en vigueur en Région bruxelloise (RGPT, RGIE, PEB) et gérons les démarches administratives : permis d'urbanisme, déclarations préalables, contrôles obligatoires. Tous nos travaux sont couverts par la garantie décennale conformément à la législation belge.

**Pour qui** :
- *Propriétaires occupants* — Rénovation complète ou pièce par pièce, en site occupé ou vide, coordination totale.
- *Investisseurs & bailleurs* — Remise en état entre locataires, mise en conformité PEB, valorisation avant revente.
- *Syndics & copropriétés* — Rénovation de parties communes, façades, cages d'escaliers, avec devis contradictoires.

**Processus** :
1. **Visite technique** — Diagnostic sur place, relevé métré, analyse des contraintes structurelles.
2. **Devis détaillé** — Chiffrage lot par lot, planning coordonné et échéancier de paiement clair.
3. **Chantier coordonné** — Un chef de chantier centralise les corps de métier et le contrôle qualité.
4. **Réception & garantie** — Levée des réserves, remise du dossier technique et garantie décennale.

**Facteurs de prix** :
- Surface et typologie (appartement, maison, immeuble)
- Ampleur des travaux (rafraîchissement vs reprise structurelle)
- Niveau de finitions (standard / milieu / premium)
- Contraintes du site (étages sans ascenseur, accès, site occupé)

**FAQ** :
- *Quel est le délai moyen pour une rénovation complète d'appartement ?* → 8 à 12 semaines pour 80–100 m², permis, matériaux et finitions compris.
- *Faut-il un permis d'urbanisme ?* → Dépend des travaux. Changement d'affectation, extensions, modif façade = permis. Conseil dès la 1re visite.
- *Peut-on habiter pendant les travaux ?* → Envisageable pour rénovations partielles, par zones pour limiter la gêne.
- *Comment se passe la coordination ?* → Un chef de chantier Vericore centralise planning, matériaux et qualité. Un seul interlocuteur.
- *Travaillez-vous avec un architecte ?* → Oui, collaboration régulière, mise en relation si besoin.

### 8.2 Électricité

**Hero** : *Installations et mises en conformité RGIE à Bruxelles : tableaux, circuits, éclairage, domotique. Techniciens certifiés et contrôle par organisme agréé.*

**Trust badges** : Dépannage sous 60 min · Certification RGIE · Devis gratuit · Toute la Région bruxelloise

**About titre** : *Électricien professionnel à Bruxelles*

**Description** : (3 paragraphes résumés)
- Installation, rénovation et dépannage résidentiel et tertiaire. Tableaux divisionnaires, circuits domestiques, LED, prises spécialisées, ventilation, domotique.
- Respect du RGIE et du nouveau Livre 1 (depuis 2020). Préparation du dossier pour contrôle Vinçotte / BTV / AIB.
- Urgences (coupure générale, disjoncteur en boucle, odeur de brûlé) : sous 60 min en journée, 24h/7 pour les cas critiques.

**Pour qui** : Particuliers · Syndics d'immeubles · Commerces & bureaux

**Processus** : Audit d'installation → Devis avec plan → Pose et raccordement → Contrôle RGIE

**Facteurs de prix** : État de l'installation existante · Nombre de points électriques · Passage des gaines (encastré/apparent) · Équipements spécifiques (domotique, borne, PV, tableau connecté)

**FAQ** :
- *Quand une mise en conformité RGIE est-elle obligatoire ?* → Vente, extension, ou tous les 25 ans pour installations < 1981.
- *Prix remplacement tableau ?* → 1 200 € à 3 500 €.
- *Urgence nuit/week-end ?* → Oui, 24/7 pour coupures, courts-circuits, défauts d'isolement.
- *Contrôle organisme agréé ?* → Oui, planification + dossier + présence lors du contrôle.
- *Bornes de recharge ?* → Oui, 3,7 à 22 kW en résidentiel et copropriété.

### 8.3 Plomberie

**Hero** : *Dépannage plomberie 24/7 et installations sanitaires à Bruxelles. Fuites, canalisations, chauffe-eau, salles de bain : intervention rapide et devis clair.*

**Trust badges** : Urgence sous 45 min · Prix annoncé avant travaux · Devis gratuit · Toute la Région bruxelloise

**About** : *Plombier professionnel à Bruxelles*

- Dépannages urgence, installations neuves, rénovations complètes. Fuites, canalisations bouchées, chauffe-eau, adoucisseurs, salles de bain, cuisines.
- Urgence : technicien sous **45 min semaine / 60 min soir & week-end**. Diagnostic + prix avant travaux.
- Rénovations SDB : évacuations, cuivre/multicouche, mitigeurs, sanitaires, coord. carreleur & électricien.

**Pour qui** : Particuliers · Copropriétés · HORECA & commerces

**Processus** : Diagnostic sur place → Devis avant travaux → Réparation ou pose → Remise en état

**Facteurs de prix** : Nature de l'urgence · Accessibilité de la fuite · Matériaux (cuivre, multicouche, PER, PVC, fonte) · Horaire d'intervention

**FAQ** :
- *Délai urgence fuite ?* → 45 min semaine, 60 min soir/week-end.
- *Prix débouchage ?* → À partir de 120 € HTVA.
- *Détection fuites encastrées sans casser ?* → Oui, acoustique + caméra thermique.
- *Rénovation SDB clé en main ?* → Oui, 2 à 3 semaines.
- *Garantie ?* → Oui, RC + garantie pièces et main-d'œuvre.

### 8.4 Chauffage

**Hero** : *Installation, entretien et dépannage de chaudières à Bruxelles : gaz, mazout, pompes à chaleur. Entretien annuel obligatoire et certificats officiels.*

**Trust badges** : Techniciens Cerga/G1 · Certificats officiels · Devis gratuit · Toute la Région bruxelloise

**About** : *Chauffagiste agréé à Bruxelles*

- Chaudières murales gaz condensation, mazout, PAC air/eau et air/air, chauffage au sol, radiateurs.
- Techniciens agréés Cerga (gaz) et G1/G2. Entretien annuel obligatoire + certificat officiel.
- Conseil primes **Homegrade / Renolution** pour remplacement.

**Pour qui** : Propriétaires occupants · Bailleurs · Syndics

**Processus** : Étude thermique → Sélection matériel → Installation & mise en service → Entretien annuel

**Facteurs de prix** : Type de générateur · Puissance · Complexité de la pose · Émetteurs

**FAQ** :
- *Entretien obligatoire ?* → Oui : mazout annuel, gaz tous les 2 ans.
- *Primes PAC ?* → Renolution 2026 jusqu'à 60 % selon revenus.
- *Chaudière à remplacer ?* → > 15 ans + pannes récurrentes → remplacement rentable.
- *Urgence hiver ?* → Oui, 24/7 pendant la période de chauffe (oct–avr).
- *Prix chaudière gaz condensation posée ?* → 3 500 € à 6 500 €.

### 8.5 Climatisation

**Hero** : *Climatisation résidentielle et tertiaire à Bruxelles : monosplit, multisplit, gainable. Systèmes réversibles pour chauffer en hiver et rafraîchir en été.*

**Trust badges** : Fluides frigorigènes agréés · Certification F-Gaz · Devis gratuit · Toute la Région bruxelloise

**About** : *Installateur climatisation à Bruxelles*

- Split mural, cassette plafond, gainable, multizone. Modèles réversibles (rafraîchissement + PAC air/air mi-saison).
- Certification F-Gaz. Étude puissance frigorifique selon orientation, vitrages, isolation.
- Entretien annuel : filtres, charge, désinfection échangeur.

**Pour qui** : Particuliers · Bureaux & commerces · HORECA

**Processus** : Bilan thermique → Choix des unités → Installation certifiée F-Gaz → Contrat d'entretien

**Facteurs de prix** : Nombre d'unités intérieures · Puissance frigorifique · Distance groupe/unité · Type d'unités

**FAQ** :
- *Autorisation unité extérieure ?* → Déclaration possible selon commune (visible depuis voirie).
- *Remplace chauffage ?* → Jusqu'à ~5 °C extérieur. En dessous, appoint utile.
- *Bruit intérieur ?* → Jusqu'à 19 dB(A), moins qu'un chuchotement.
- *Entretien annuel ?* → Oui : filtres, charge, désinfection.
- *Prix salon 30 m² ?* → Monosplit 3,5 kW : 1 800 € à 2 800 € TVAC.

### 8.6 Menuiserie

**Hero** : *Menuiserie sur mesure à Bruxelles : portes intérieures, dressings, bibliothèques, cuisines et agencement bois. Fabrication en atelier, pose soignée.*

**Trust badges** : Fabrication atelier · Bois certifié FSC/PEFC · Devis gratuit · Toute la Région bruxelloise

**About** : *Menuisier sur mesure à Bruxelles*

- Dressings, bibliothèques encastrées, tête de lit, meubles TV, cuisines, rangements sous escalier.
- Fabrication en atelier partenaire : mélaminé, MDF laqué, plaqué chêne, noyer, frêne.
- Pose chez le client en 1 à 3 jours, calfeutrement, plinthes. FSC/PEFC sur demande.

**Pour qui** : Particuliers · Architectes d'intérieur · Commerces & bureaux

**Processus** : Prise de mesures → Conception 3D → Fabrication atelier → Pose et finitions

**Facteurs de prix** : Type de matériau · Complexité du projet · Quincaillerie · Finitions

**FAQ** :
- *Délai devis → pose dressing ?* → 4 à 6 semaines.
- *Modifs après validation ?* → Possibles jusqu'au BPP signé.
- *Bois massif ou panneau ?* → Les deux selon l'usage.
- *LED intégrées ?* → Oui, rubans, spots, détecteurs.
- *Garantie ?* → 2 ans fabrication + quincaillerie.

### 8.7 Peinture

**Hero** : *Peinture intérieure et façades à Bruxelles : murs, plafonds, boiseries, papiers peints. Peintures écologiques, protection soignée, finitions propres.*

**Trust badges** : Peintures écologiques dispo · Protection meubles & sols · Devis gratuit · Toute la Région bruxelloise

**About** : *Peintre professionnel à Bruxelles*

- Intérieur et extérieur : murs, plafonds, boiseries, portes, radiateurs, façades, pièces techniques.
- Peintures à faible COV, références écologiques belges pour chambres d'enfants.
- Protection systématique (bâches, plastique, adhésifs pro), nettoyage complet en fin de chantier.

**Pour qui** : Particuliers · Bailleurs · Copropriétés

**Processus** : Préparation des supports → Choix des teintes → Application → Réception & nettoyage

**Facteurs de prix** : État initial des supports · Nombre de couches · Type de peinture · Hauteur sous plafond

**FAQ** :
- *Prix au m² ?* → 22 à 45 €/m² TVAC 6 %.
- *Délai appartement 80 m² ?* → 5 à 8 jours ouvrés.
- *Sans solvant pour enfants ?* → Oui, gamme COV très faible.
- *Habiter pendant travaux ?* → Oui, pièce par pièce.
- *Façades extérieures ?* → Oui, avec échafaudage, traitement mousses/algues/micro-fissures.

### 8.8 Carrelage

**Hero** : *Pose de carrelage sol et mur à Bruxelles : salles de bain, cuisines, terrasses, grands formats. Pose à la colle ou double encollage selon le support.*

**Trust badges** : Pose grand format · Étanchéité pièces humides · Devis gratuit · Toute la Région bruxelloise

**About** : *Carreleur professionnel à Bruxelles*

- Salles de bain, cuisines, halls, terrasses, pièces techniques. Formats classiques et grands formats jusqu'à 120×260 cm en double encollage.
- Ragréage, SPEC pour pièces humides, respect des DTU.
- Joints barbotine époxy ou ciment. Coordination plombier/électricien pour SDB complète.

**Pour qui** : Particuliers · Bailleurs · Commerces & HORECA

**Processus** : Préparation du support → Étanchéité SPEC → Pose calepinée → Jointoiement & finitions

**Facteurs de prix** : Format du carrelage · Type de pose · Préparation support · Étanchéité pièces humides

**FAQ** :
- *Prix pose au m² ?* → 45 à 90 €/m² TVAC 6 %.
- *Grand format 120×260 ?* → Oui, double encollage, support parfaitement plan.
- *Déposer l'ancien ?* → Pas systématique si sain, plan, bien collé.
- *Douche à l'italienne ?* → Oui, caniveau linéaire ou siphon, pente calculée, SPEC.
- *Délai SDB complète ?* → 2 à 3 semaines.

---

## 9. Abonnements maintenance (5 formules)

**Sous-titre & titre** : *Nos abonnements de maintenance*

**Intro** : Nous proposons plusieurs formules d'abonnement adaptées à la taille des bâtiments, aux équipements présents et au niveau de service souhaité. Chaque contrat est établi après analyse préalable du site, sur base de photos et d'une visite technique afin de définir une offre précise et adaptée. **Les tarifs ci-dessous sont donnés à titre indicatif.**

### 9.1 Bronze — Entretien & Prévention

- **Icône** : Award · **Couleur** : amber
- **Idéal pour** : Petits immeubles, commerces, propriétaires uniques
- **Tagline** : *Idéal pour petits immeubles, commerces, propriétaires uniques*
- **Prix** : **200 à 350 € / mois** · *Tarif indicatif — ajustable après analyse sur photos et contrôle sur place*
- **Inclus** :
  - 1 à 2 visites préventives par an
  - Contrôle des installations principales
  - Rapport annuel
  - 2 interventions correctives incluses (max. 2h chacune)
  - Délai d'intervention standard
  - Tarif préférentiel au-delà du quota

### 9.2 Silver — Maintenance Active

- **Icône** : Gem · **Couleur** : slate
- **Idéal pour** : Immeubles résidentiels, copropriétés moyennes
- **Tagline** : *Suivi régulier et interventions prioritaires*
- **Prix** : **400 à 700 € / mois** · *Fourchette indicative — prix ajusté après audit technique et visite sur site*
- **Inclus** :
  - 3 à 4 visites préventives par an
  - Hotline technique
  - 4 interventions incluses (max. 2h chacune)
  - Délai d'intervention accéléré
  - Rapport trimestriel
  - Historique technique du site
  - Tarif réduit hors forfait

### 9.3 Gold — Gestion Technique Complète

- **Icône** : Crown · **Couleur** : yellow
- **Idéal pour** : Immeubles de bureaux, sites multi-équipements
- **Tagline** : *Prise en charge globale et suivi approfondi*
- **Prix** : **800 à 1 300 € / mois** · *Selon surface, équipements et criticité — validation finale après contrôle technique sur place*
- **Inclus** :
  - 6 à 8 visites préventives par an
  - Priorité 24/7
  - 8 à 12 interventions incluses
  - Technicien référent dédié
  - Référencement technique complet
  - Reporting mensuel détaillé
  - Budget annuel prévisionnel
  - Coordination technique multi-corps d'état

### 9.4 Premium — Partenaire Technique Dédié

- **Icône** : Sparkles · **Couleur** : primary (brand)
- **Idéal pour** : Grands sites, patrimoines complexes
- **Tagline** : *Accompagnement stratégique sur-mesure*
- **Prix** : **Sur devis** · *Généralement à partir de 1 600 € / mois — après audit complet et définition précise du périmètre*
- **Inclus** :
  - Quota mensuel d'heures incluses
  - Astreinte renforcée 24/7
  - Plan pluriannuel de maintenance
  - Audit annuel approfondi
  - Interlocuteur unique dédié
  - SLA contractuels garantis
  - Reporting exécutif mensuel
  - Pilotage stratégique et conseil

### 9.5 Pack Sérénité Habitat — Particuliers

- **Icône** : Home · **Couleur** : green
- **Idéal pour** : Propriétaires, locataires, particuliers
- **Tagline** : *La tranquillité d'esprit pour votre habitation, toute l'année.*
- **Prix** : **9,99 € / mois** · *Sans engagement — résiliable à tout moment*
- **Inclus** :
  - Check-up complet de l'habitation — inspection préventive régulière
  - –20 % sur toutes les interventions (grille tarifaire transparente)
  - Gestion administrative en cas de sinistre (assurances, suivi chantier)
  - Archivage client sécurisé (historique technique, suivi rapide)
  - Un seul responsable technique — interlocuteur unique tous corps de métier
  - Travail professionnel, propre et soigné
  - Déplacement gratuit lors des interventions

### Info panels sous les abonnements

**Modalités d'intervention** — Nous intervenons aussi bien dans le cadre d'un abonnement de maintenance que pour des demandes ponctuelles. Les interventions à l'acte sont planifiées selon nos disponibilités opérationnelles et bénéficient du même niveau d'exigence technique et de qualité. Les clients sous contrat disposent de créneaux dédiés et de délais d'intervention garantis contractuellement.

**Conditions & fonctionnement** :
- Les tarifs sont indicatifs et définis définitivement après analyse technique du site.
- Une visite sur place est systématiquement réalisée avant la signature du contrat.
- Les interventions ponctuelles restent possibles sans abonnement, sous réserve de disponibilité.
- Les travaux importants, rénovations, remplacements majeurs et fournitures font l'objet de devis séparés.
- Toute intervention dépassant le volume inclus dans l'abonnement est facturée selon le tarif contractuel préférentiel.

**CTA** : Demander un devis / audit technique · WhatsApp 24/7

---

## 10. Projets / Réalisations

- **Sous-titre** : Nos réalisations · **Titre** : Projets Récents
- **Footer** : *Nous réalisons également l'installation & maintenance de réseaux sanitaires (PEX / multicouche) et bien plus encore.*
- **CTA** : Demander un projet similaire
- **Catégories** : Plomberie · Finitions · Électricité · Chauffage

| # | Titre | Catégorie | Image | Localisation |
|---|---|---|---|---|
| 1 | Installation de systèmes d'interphonie & parlophones | Électricité | `/parlophone.png` | Bruxelles |
| 2 | Plafonnage, réparations de plafonds & finitions intérieures | Finitions | `/plafonnage.png` | Schaerbeek |
| 3 | Mise en conformité électrique & installation de tableaux (RGIE) | Électricité | `/conformite-electrique.png` | Bruxelles-Ville |
| 4 | Plomberie & raccordements sanitaires (installation, réparation, étanchéité) | Plomberie | `/plomberie.png` | Anderlecht |
| 5 | Chaudière / Chauffage – Entretien, dépannage & réglages (ECS + chauffage) | Chauffage | `/chaudiere.png` | Etterbeek |
| 6 | Éclairage & luminaires – Installation, remplacement & mise aux normes | Électricité | `/eclairage.png` | Uccle |

### Descriptions longues (version du dataset `content.ts` — légèrement différente de i18n/fr)

- **Projet 1 (version alt — réseaux sanitaires PEX/multicouche)** : Mise en place d'un réseau de distribution eau chaude (rouge) et eau froide (bleu) avec raccords sertis et dérivations sécurisées. Vericore assure l'installation, la mise en conformité, les réparations de fuites, ainsi que l'optimisation des réseaux (débits, équilibrage, réduction des pertes). Image : `/installation-maintenance.png`.
- **Projet 2 (plafonnage)** : Intervention de remise en état et préparation de plafond : réparation, renforcement, rebouchage, ponçage et mise à niveau avant peinture ou finition.
- **Projet 3 (tableaux RGIE)** : Installation, rénovation et remise aux normes de tableaux électriques, disjoncteurs, différentiels, répartition des circuits, repérage et organisation du câblage pour une installation fiable et conforme au RGIE.
- **Projet 4 (plomberie sanitaire)** : Raccordements sous évier et sanitaires, remplacement de flexibles, siphons, évacuations, correction de fuites, sécurisation des vannes, vérification d'étanchéité.
- **Projet 5 (chaudière)** : Maintenance et dépannage de chaudières murales : contrôle de sécurité, réglage de température, optimisation du rendement, purge, raccordements chauffage + ECS.
- **Projet 6 (éclairage)** : Pose et remplacement de suspensions, appliques, points lumineux, raccordement propre, vérification des circuits, modernisation LED.
- **Projet alternatif (interphonie — i18n)** : Câblage, configuration postes intérieurs/extérieurs, vidéo HD, intégration contrôle d'accès, filaire ou IP, gestion smartphone.

---

## 11. Partenaires

- **Sous-titre** : Nos partenariats
- **Titre** : Des Partenaires de Confiance
- **Description** : *Nous collaborons avec des partenaires et fournisseurs reconnus pour garantir qualité, conformité et réactivité.*
- **Hint** : *Survolez pour voir les logos en couleur*

| Partenaire | Logo |
|---|---|
| GoodKat Take Away | `/the-good-kat.png` |
| Chez Ragusana | `/chez-ragusana.png` |

---

## 12. Pourquoi Vericore

- **Sous-titre** : Pourquoi choisir Vericore
- **Titre** : Votre Partenaire de Confiance
- **Description** : Une expertise reconnue et un engagement qualité pour tous vos projets de maintenance et rénovation.

### 6 raisons

| Titre | Description |
|---|---|
| Réactivité 24/7 | Service d'urgence disponible jour et nuit. Intervention rapide pour tous vos dépannages. |
| Qualité Garantie | Travaux conformes aux normes belges. Garantie sur toutes nos prestations. |
| Entreprise enregistrée | TVA BE1005.585.934. Assurance responsabilité civile professionnelle. |
| Équipe Qualifiée | Professionnels expérimentés et formés. Respect des règles de sécurité. |
| Prix Transparents | Devis détaillé gratuit. Pas de frais cachés, tarification claire. |
| Satisfaction Client | À l'écoute de vos besoins. Suivi personnalisé de chaque projet. |

### Processus en 5 étapes

**Titre** : Notre Processus en 5 Étapes
**Description** : *De la première prise de contact à la réception finale, nous vous accompagnons à chaque étape.*

1. **Contact** — Appelez-nous ou remplissez le formulaire. Nous vous recontactons sous 24h.
2. **Visite & Devis** — Visite technique gratuite. Devis détaillé avec planning et budget.
3. **Planification** — Organisation des travaux selon vos disponibilités. Équipe dédiée.
4. **Réalisation** — Exécution soignée dans les délais. Communication régulière.
5. **Réception** — Vérification finale avec vous. Garantie et suivi après-vente.

**CTA** : *Prêt à commencer votre projet ?* → **Contactez-nous maintenant**

---

## 13. Témoignages

Dataset `content.ts` (4 témoignages 5★). *Note : non affichés par défaut sur la homepage actuelle, utilisables en refonte.*

| Nom | Lieu | Note | Service | Avis |
|---|---|---|---|---|
| Sophie Dubois | Ixelles | 5/5 | Rénovation salle de bain | Service impeccable et rapide. L'équipe de Vericore a rénové notre salle de bain en respectant les délais. Très professionnels ! |
| Marc Lefebvre | Schaerbeek | 5/5 | Plomberie urgence | Intervention d'urgence un dimanche pour une fuite. Réactivité exceptionnelle et prix transparent. Je recommande vivement. |
| Laura Van den Berg | Etterbeek | 5/5 | Rénovation complète | Rénovation complète de notre appartement. Excellent suivi de chantier, finitions de haute qualité. Équipe très à l'écoute. |
| Ahmed El Amrani | Anderlecht | 5/5 | Maintenance immeuble | Très satisfait du service de maintenance. Travail conforme aux normes, prix transparent et suivi régulier. Parfait pour notre syndic. |

---

## 14. FAQ (14 Q&A)

- **Sous-titre** : Questions fréquentes · **Titre** : Vous Avez des Questions ?
- **Note bas de section** : *Vous ne trouvez pas votre réponse ? Notre équipe est disponible pour répondre à toutes vos questions*

| # | Question | Réponse |
|---|---|---|
| 1 | Intervenez-vous sans abonnement ? | Oui. Nous réalisons également des interventions ponctuelles, sans contrat de maintenance. Ces demandes sont planifiées selon nos disponibilités opérationnelles et bénéficient du même niveau d'exigence technique et de qualité. |
| 2 | Proposez-vous des interventions d'urgence ? | Oui. Une permanence technique est assurée 24h/24 et 7j/7 pour les situations critiques. |
| 3 | En combien de temps pouvez-vous intervenir ? | Pour les urgences : **Sous 1h** dans un rayon de 10 km autour de Jette (Bruxelles) • **Sous 50 minutes** dans un rayon de 10 km autour d'Uccle. Pour les interventions non urgentes : dans un délai de **24 à 72h**. |
| 4 | Les prix affichés sont-ils définitifs ? | Non. Les montants indiqués sont donnés à titre indicatif. Ils peuvent évoluer en fonction de la superficie du site, de la complexité technique, des équipements présents et après audit technique. |
| 5 | Une visite sur place est-elle obligatoire ? | Oui. Une visite technique est systématiquement réalisée afin d'établir un devis précis et équitable. Les premières estimations peuvent se faire sur photos, mais le contrôle final est toujours sur site. |
| 6 | Que comprend un contrat de maintenance ? | Chaque abonnement précise : nombre de visites préventives, nombre d'interventions incluses, délais, avantages tarifaires, outils de suivi. Les gros travaux font l'objet de devis séparés. |
| 7 | Y a-t-il un engagement minimum ? | Nous recommandons un engagement initial de **12 mois**. Un ajustement de formule est possible après 6 mois. |
| 8 | Que se passe-t-il si je dépasse le quota inclus ? | Les interventions supplémentaires sont facturées séparément avec un **tarif préférentiel** réservé aux clients sous contrat. |
| 9 | Travaillez-vous avec les syndics et gestionnaires d'immeubles ? | Oui. Nous accompagnons quotidiennement syndics, gestionnaires, entreprises et investisseurs immobiliers. |
| 10 | Dans quelles zones intervenez-vous ? | Nous intervenons dans toute la Belgique, avec des bases opérationnelles à Bruxelles. |
| 11 | Êtes-vous assurés et certifiés ? | Oui. Nos équipes sont couvertes par les assurances professionnelles obligatoires et travaillent dans le respect des normes belges. |
| 12 | Comment suivre une intervention ? | Chaque intervention est suivie via notifications e-mail ou WhatsApp. Plateforme client dédiée en développement (statuts rouge/orange/vert, historique, rapports). |
| 13 | Disposez-vous de stock et de véhicules équipés ? | Oui. Chaque véhicule a un **stock standardisé** de pièces courantes. Stockage dédié sur site possible pour les grands sites. |
| 14 | Réalisez-vous un reporting détaillé ? | Oui. Reporting **avant / pendant / après** intervention, avec photos et recommandations techniques. |

### FAQ supplémentaires exposées en Schema FAQPage (homepage SEO)

- *Dans quelles zones Vericore intervient-il ?* → 19 communes de la Région bruxelloise + communes limitrophes du Brabant flamand et wallon.
- *Interventions d'urgence 24/7 ?* → Oui, plomberie, électricité, chauffage. 45 à 90 minutes selon gravité et horaire.
- *Comment obtenir un devis ?* → Téléphone, WhatsApp ou formulaire. Visite technique gratuite + devis détaillé sous 24h.
- *Travail avec syndics ?* → Oui, parties communes, entretiens périodiques, travaux votés en AG, devis contradictoires, rapports.
- *Travaux garantis ?* → Garantie décennale conforme à la législation belge + RC professionnelle.

---

## 15. Contact & Recrutement

### 15.1 Section Contact

- **Sous-titre** : Contactez-nous
- **Titre** : Demandez Votre Devis Gratuit
- **Onglets** : Contacter · Recrutement

### Formulaire de contact

**Titre** : Remplissez le formulaire

Champs :
- Nom & Prénom (placeholder : *Jean Dupont*)
- Téléphone (placeholder : *+32 4XX XX XX XX*)
- Email (placeholder : *jean@exemple.be*)
- Type de demande : **Devis · Urgence 24/7 · Contrat maintenance · Autre**
- Adresse du site (placeholder : *Rue de la Loi 100, 1000 Bruxelles*)
- Message (placeholder : *Décrivez votre besoin...*)

**Validations** : champ obligatoire, email invalide, téléphone invalide, message min. 10 caractères, type à sélectionner.

**États** :
- Envoi en cours : *Envoi en cours...*
- Succès : **Message envoyé !** / *Nous vous répondrons dans les plus brefs délais.*
- Erreur : *Une erreur est survenue. Veuillez réessayer ou nous contacter directement.*

**Boutons** : Envoyer · WhatsApp 24/7 (message : *"Bonjour, je vous contacte après avoir visité votre site web."*)

### Autres moyens de contact

- **Titre** : Autres moyens de contact
- **Description** : *Vous préférez nous contacter directement ? Utilisez l'un de ces moyens.*
- Téléphone · Email · Adresse · Disponibilité (24h/7 pour urgences)

**Bloc urgence** : *Besoin urgent ? Contactez-nous via WhatsApp pour une intervention rapide 24h/7* → **Ouvrir WhatsApp**

### 15.2 Section Recrutement

- **Titre** : Postulez chez Vericore

**Panneau info** :
- Titre : Rejoignez l'équipe Vericore
- Sous-titre : *Nous recherchons des profils techniques motivés pour renforcer notre équipe.*
- Profils recherchés : Technicien polyvalent, Électricien, Plombier, HVAC/Ventilation, Chef d'équipe
- Mode : CDI / Sous-traitance selon profils
- Zone : Bruxelles & Belgique
- Note : *Une section carrières plus complète (annonces, suivi de candidatures…) sera développée progressivement.*

**Formulaire** :
- Poste / Domaine : Technicien polyvalent · Électricien · Plombier / Sanitaire · HVAC / Ventilation · Peintre / Finitions · Chef d'équipe · Candidature spontanée
- Disponibilité : Immédiate · 2 semaines · 1 mois · Autre
- Années d'expérience : 0–2 · 3–5 · 6–10 · 10+
- Nom & Prénom, Email, Téléphone
- CV : *Cliquez pour télécharger votre CV* (PDF, DOC, DOCX)
- Message / Présentation (placeholder : *Présentez votre parcours, vos compétences et votre motivation...*)
- Bouton : **Envoyer la candidature** (fallback : *Envoyer par email*)
- Objet email : *Candidature* · Corps : *Bonjour, Veuillez trouver ci-joint ma candidature.*
- Succès : **Candidature envoyée !** / *Nous étudierons votre profil et vous recontacterons rapidement.*

---

## 16. Pages communales (18 communes)

Chaque page suit la structure : **Hero commune → Services locaux (6 liens) → Pourquoi Vericore ici → Quartiers desservis → CTA final**.

**Labels de section (FR)** :
- Nos services à {commune}
- Pourquoi choisir Vericore à {commune} ?
- Quartiers de {commune} où nous intervenons
- 4 pastilles réassurance : **Proximité** (Interventions rapides partout à {commune}) · **Expertise** (+10 ans d'expérience à Bruxelles) · **Disponibilité** (Service 24/7 pour urgences) · **Garantie** (Garantie décennale sur tous travaux)
- CTA final : *Besoin de travaux à {commune} ?* / *Devis gratuit sous 24h • Intervention rapide • Garantie décennale* · **Demander un devis** / **WhatsApp**

**Service links (icon + nom + description)** :
- 🏗️ Rénovation complète — Rénovation de maisons et appartements
- ⚡ Électricité — Installation et dépannage électrique
- 🔧 Plomberie — Plomberie et sanitaire
- 🔥 Chauffage — Installation et entretien chauffage
- 🪵 Menuiserie — Menuiserie intérieure et extérieure
- 🎨 Peinture — Peinture intérieure et extérieure

### Contenu détaillé par commune (FR)

#### Bruxelles-Ville
- **Typologie** : Typologies très variées : maisons de maître du Sablon et des Marolles, immeubles Art Nouveau et Art Déco de la Ceinture, appartements modernes du quartier Nord, logements sociaux à Laeken.
- **Quartiers** : Sablon · Marolles · Quartier européen · Quartier Nord · Laeken · Neder-Over-Heembeek · Haren
- **Note locale** : Nombreux biens en zone de protection Urban.brussels — avis de la Commission Royale des Monuments et Sites.
- **Contexte chantier** : Chantiers étroits en zone piétonne, permis de stationnement à obtenir 15 jours à l'avance, coordination avec les commerces en RDC.

#### Anderlecht
- **Typologie** : Grands ensembles d'après-guerre à Cureghem, maisons ouvrières autour du canal, lotissements pavillonnaires plus au sud.
- **Quartiers** : Cureghem · Erasme · Neerpede · Bizet · Abattoir · Parc Astrid · Aurore
- **Contexte** : Maisons ouvrières avec plomberie fonte, vieux tableaux Bakelite, humidité ascensionnelle.

#### Auderghem
- **Typologie** : Résidentiel, parc immobilier années 60-80, appartements, villas, copropriétés récentes autour d'Herrmann-Debroux.
- **Quartiers** : Herrmann-Debroux · Val Duchesse · Blankedelle · Rouge-Cloître · Sainte-Anne
- **Contexte** : Installations fin de vie à Herrmann-Debroux (tableau, chauffage collectif, VMC, sanitaires).

#### Berchem-Sainte-Agathe
- **Typologie** : Pavillonnaire années 30, quelques immeubles récents.
- **Quartiers** : Centre · Selder · Kasterlinden · Hunderenveld
- **Contexte** : Isolation intérieure, remplacement simple vitrage, refonte chauffage condensation/PAC.

#### Etterbeek
- **Typologie** : Immeubles bourgeois début XXe, proximité institutions européennes.
- **Quartiers** : Cinquantenaire · Quartier européen · Square Marie-Louise · Chasse · Jourdan
- **Note locale** : Forte densité d'expatriés, chantiers gérés à distance, reporting régulier.
- **Contexte** : Art Déco autour du Cinquantenaire — moulures/cheminées/parquets d'origine à préserver.

#### Evere
- **Typologie** : Résidentiel varié, immeubles années 60-70, pavillons, quartier Da Vinci récent.
- **Quartiers** : Centre · Conscience · Parc Roi Baudouin · Da Vinci · Picardie · Paduwa
- **Contexte** : Tableaux Bakelite d'origine, chaudières mazout à convertir (primes Renolution).

#### Forest
- **Typologie** : Maisons de maître Saint-Antoine, immeubles ouvriers bas, lofts Wiels.
- **Quartiers** : Saint-Antoine · Wiels · Altitude 100 · Bas-Forest · Van Volxem
- **Contexte** : Cages d'escalier étroites, logistique renforcée, bâchage soigné.

#### Ganshoren
- **Typologie** : Petite commune résidentielle, pavillonnaire 1930-60.
- **Quartiers** : Centre · Basilique · Villas · Rusatira
- **Contexte** : Pavillons combinant toiture, isolation combles et remplacement chaudière atmosphérique.

#### Ixelles
- **Typologie** : Maisons de maître Art Nouveau/Déco, grands appartements bourgeois, immeubles étudiants près de l'ULB.
- **Quartiers** : Flagey · Châtelain · Bailli · Matonge · ULB · Etangs d'Ixelles · Berkendael
- **Note locale** : Biens classés ou zones protégées — permis pour façades/châssis/toitures.
- **Contexte** : Art Nouveau classé Flagey/Châtelain — demandes de permis avec avis Monuments et Sites.

#### Jette
- **Typologie** : Résidentiel autour du King Baudouin Park, quartiers proches UZ Brussel, zones commerçantes.
- **Quartiers** : Centre · Miroir · UZ Brussel · King Baudouin Park · Esseghem
- **Contexte** : Copropriétés autour UZ Brussel — RGIE parties communes, remplacement colonnes fonte.

#### Koekelberg
- **Typologie** : Petite commune dense autour de la Basilique, immeubles anciens à rénover.
- **Quartiers** : Basilique · Centre · Simonis
- **Contexte** : Refonte complète fréquente — électricité, plomberie fonte → multicouche, régulation chauffage.

#### Molenbeek-Saint-Jean
- **Typologie** : Résidentiel historique + quartiers ouvriers canal + anciens sites industriels reconvertis.
- **Quartiers** : Canal · Historique · Duchesse · Karreveld · Machtens · Osseghem
- **Contexte** : Maisons ouvrières du canal : humidité ascensionnelle, vieilles chapes à reprendre, diagnostic humidité systématique.

#### Saint-Gilles
- **Typologie** : Maisons de maître Art Nouveau, immeubles bourgeois Parvis, ambiance cosmopolite.
- **Quartiers** : Parvis · Barrière · Ma Campagne · Bethlehem · Louise
- **Note locale** : Forte concentration Art Nouveau — restauration + mise aux normes énergétiques.
- **Contexte** : Intérieurs Art Nouveau Parvis — restauration mosaïques, vitraux, plafonds décorés avec restaurateur spécialisé.

#### Saint-Josse-ten-Noode
- **Typologie** : Commune dense, bâti ancien, immeubles à appartements, maisons de rangée.
- **Quartiers** : Botanique · Nord · Squares · Madou
- **Contexte** : Mise en conformité incendie (portes coupe-feu, gaines), refonte électrique complète parties communes.

#### Schaerbeek
- **Typologie** : Grande diversité — maisons de maître Dailly, bourgeois Meiser, quartiers populaires Nord, cité-jardin Terdelt.
- **Quartiers** : Helmet · Terdelt · Azalée · Dailly · Liedts · Voltaire · Meiser · Josaphat
- **Contexte** : Maisons de maître Dailly — parquets massifs à décaper, cheminées d'origine, coordination menuisier d'art.

#### Uccle
- **Typologie** : Résidentiel haut de gamme — villas Art Déco, maisons modernistes, copropriétés récentes.
- **Quartiers** : Dieweg · Observatoire · Calevoet · Stalle · Wolvendael · Fort-Jaco · Prince d'Orange
- **Note locale** : Fort potentiel d'écorénovation — isolation extérieure, PAC, photovoltaïque, primes Renolution maximales.
- **Contexte** : Villas Art Déco/modernistes se prêtent à l'écorénovation : isolation extérieure, PAC air/eau efficaces sur grandes surfaces.

#### Watermael-Boitsfort
- **Typologie** : Très vert, cités-jardins classées, villas en lisière de forêt.
- **Quartiers** : Coin du Balai · Boitsfort · Watermael · Cité-Jardin Le Logis · Cité-Jardin Floréal
- **Note locale** : Cités-jardins classées — interventions extérieures encadrées, coordination Urban.brussels.
- **Contexte** : Le Logis / Floréal — accord préalable Urban.brussels, respect strict gabarit/couleurs/matériaux d'origine, délai administratif à anticiper.

#### Woluwe-Saint-Lambert
- **Typologie** : Résidentielle aisée, parc années 60-80, petits immeubles bourgeois, pavillons, copropriétés modernes autour de Roodebeek/Tomberg.
- **Quartiers** : Tomberg · Roodebeek · Woluwe Shopping · Kraainem · Georges Henri
- **Contexte** : Petits immeubles Tomberg — chaudières collectives vieillissantes, installations électriques d'origine, projets pilotés par syndic (vote AG).

#### Woluwe-Saint-Pierre
- **Typologie** : Une des communes les plus aisées — villas Stockel, appartements haut de gamme, propriétés avec jardins.
- **Quartiers** : Stockel · Parmentier · Val des Seigneurs · Chant d'Oiseau · Montgomery
- **Contexte** : Villas Stockel — finitions premium (chêne massif, carrelage 120×260, cuisines sur mesure, domotique intégrée).

---

## 17. Articles de blog

### 17.1 Combien coûte une rénovation complète à Bruxelles en 2026 ?

- **Slug** : `/blog/cout-renovation-bruxelles-2026/`
- **Catégorie** : renovation
- **Tags** : prix, budget, rénovation, bruxelles, devis
- **Image** : `/installation-maintenance.png`
- **Alt image** : Chantier de rénovation à Bruxelles
- **Date** : 2026-02-01
- **Temps de lecture** : 12 min
- **SEO title** : Prix Rénovation Bruxelles 2026 - Guide Complet Budget & Coûts
- **SEO description** : Découvrez les prix réels d'une rénovation à Bruxelles en 2026. Budgets par m², exemples concrets, primes disponibles. Devis gratuit sous 24h.
- **Services liés** : renovation, electricite, plomberie, chauffage
- **Communes liées** : Schaerbeek, Evere, Uccle, Ixelles

**Résumé** : Guide complet des prix pour rénover maison/appartement à Bruxelles. Budgets par m², répartition des postes, primes Renolution, conseils concrets.

**Points clés** :
- Fourchettes : légère 250–500 €/m² · moyenne 500–900 €/m² · lourde 900–1 500 €/m² · premium 1 500–2 500 €/m²+.
- Répartition postes : gros œuvre 15-25%, électricité 8-12%, plomberie 8-12%, chauffage 10-15%, isolation 8-15%, menuiseries 8-12%, sols/carrelage 8-12%, peinture 6-10%, cuisine 5-15%.
- Facteurs d'explosion : accès (étage sans ascenseur, permis stationnement ~350-450 €/5j à BXL-Ville), humidité ascensionnelle (60-120 €/ml), plomb/amiante (60-150 €/m²), permis d'urbanisme (4-12 mois), biens classés (3-6 mois administratif).
- Primes Renolution 2026 : isolation 15-100 €/m², chauffage 1 500-5 000 €, toiture 40-100 €/m², humidité 20-40 €/ml, VMC double flux 500-3 500 €. Jusqu'à 60 % du coût selon revenus.
- Conseils : 3 devis contradictoires · marge 10-15 % imprévus · 1 entrepreneur général (-10 à -15 %) · négocier basse saison janvier-février (-5 à -10 %) · demander primes AVANT travaux.

### 17.2 Mise aux normes électrique RGIE à Bruxelles : le guide complet 2026

- **Slug** : `/blog/electricite-mise-aux-normes-rgie-bruxelles/`
- **Catégorie** : electricite
- **Tags** : électricité, RGIE, normes, sécurité, conformité
- **Image** : `/conformite-electrique.png`
- **Alt image** : Tableau électrique aux normes RGIE
- **Date** : 2026-01-28
- **Temps de lecture** : 10 min
- **SEO title** : Mise aux Normes RGIE Bruxelles 2026 - Prix, Délais & Conformité
- **SEO description** : Guide complet sur la mise aux normes électrique RGIE à Bruxelles. Prix, délais, obligations légales. Électriciens certifiés, devis gratuit.
- **Services liés** : electricite · **Communes liées** : Schaerbeek, Evere, Ixelles, Etterbeek

**Points clés** :
- RGIE Livre 1 depuis juin 2020 — logements résidentiels basse tension.
- Contrôle obligatoire : vente (PV < 1 an, mise en conformité sous 18 mois après l'acte), installations < 1981 (changement propriétaire ou 25 ans), modification substantielle, nouvelle construction.
- Organismes agréés : **Vinçotte · BTV · AIB · SGS**.
- Points vérifiés : documentation technique (schéma unifilaire), tableau divisionnaire, mise à la terre (< 30 Ω), circuits, points d'utilisation (min. 5 prises séjour > 20 m², 3 par chambre).
- **Tarifs 2026** : contrôle appart. 100-160 € · maison 160-300 € · après modifs 80-150 €. Remplacement tableau 1 200-3 500 €. Refonte appart 80 m² 6 000-12 000 €. Maison 130 m² 10 000-20 000 €.
- Erreurs fréquentes : tableau Bakélite, prise sans terre SDB, rallonge permanente, multiprise cascade, section câble insuffisante, absence schéma, terre non mesurée.
- Primes Renolution : borne recharge 800 €, PV + renforcement 1 500 €, GEB domotique 1 000 €.

### 17.3 10 erreurs à éviter lors d'une rénovation à Bruxelles

- **Slug** : `/blog/10-erreurs-renovation-eviter/`
- **Catégorie** : conseils
- **Tags** : conseils, rénovation, erreurs, guide
- **Image** : `/bg-worker.png`
- **Alt image** : Erreurs courantes en rénovation
- **Date** : 2026-01-25
- **Temps de lecture** : 12 min
- **SEO title** : 10 Erreurs Rénovation à Éviter Bruxelles - Guide Expert 2026
- **SEO description** : Les 10 erreurs les plus fréquentes en rénovation et comment les éviter. Conseils d'experts pour réussir votre projet à Bruxelles.
- **Services liés** : renovation, electricite, plomberie · **Communes liées** : Bruxelles, Schaerbeek, Uccle, Ixelles

**Les 10 erreurs** :
1. Sous-estimer le budget total → marge 10-15 % min.
2. Négliger les démarches administratives (permis urbanisme, déclaration préalable, Monuments et Sites).
3. Choisir systématiquement le moins-disant — vérifier détail par lot, assurances, BCE.
4. Ignorer l'humidité avant tout le reste — diagnostic 200-400 €, injection 60-120 €/ml.
5. Économiser sur électricité ou plomberie — coût de rattrapage ×3 à 5.
6. Ignorer la performance énergétique (PEB, isolation 15-25 % du budget).
7. Sous-estimer les délais réels : rafraîchissement 2-4 sem · moyenne 8-14 sem · lourde 5-8 mois · maison complète 8-14 mois.
8. Multiplier les intervenants séparés — retards en cascade, rejets responsabilité.
9. Bâcler les finitions **ou** sur-investir dans le visible au détriment de l'invisible.
10. Se passer d'un professionnel pour piloter — auto-rénovation = +15 à 25 % en coût réel.

### Auteur unique

- **Nom** : Équipe Vericore
- **Rôle** : Rédaction Vericore
- **Bio** : Contenu rédigé par l'équipe Vericore, entreprise de maintenance et rénovation de bâtiments à Bruxelles.

---

## 18. Garanties & assurances

Page dédiée [`/garanties`](../src/pages/GuaranteesPage.tsx).

- **H1** : Nos garanties et assurances
- **Intro Hero** : *Votre tranquillité d'esprit est notre priorité. Découvrez toutes les garanties et assurances qui protègent vos travaux.*

### 4 blocs garanties

| Icône | Titre | Description | Détails |
|---|---|---|---|
| Shield | **Garantie décennale** | Tous nos travaux de construction et de gros œuvre sont couverts par une garantie décennale obligatoire, vous protégeant pendant 10 ans contre les vices cachés et malfaçons. | Protection pendant 10 ans · Couverture des vices cachés · Assurance auprès d'un organisme agréé · Attestation fournie pour chaque chantier |
| CheckCircle2 | **Assurance responsabilité civile** | Notre assurance RC professionnelle couvre tous les dommages éventuels causés lors de nos interventions. | Couverture jusqu'à 2 500 000 € · Protection des biens et personnes · Valable sur tous nos chantiers · Attestation disponible sur demande |
| Award | **Certifications professionnelles** | Nos techniciens sont certifiés et formés aux dernières normes belges et européennes. | Électriciens certifiés (RGIE) · Techniciens chauffage agréés · Formation continue obligatoire · Respect des normes PEB |
| FileText | **Garantie de parfait achèvement** | Pendant 1 an après la fin des travaux, nous intervenons gratuitement pour corriger tout défaut. | Intervention gratuite pendant 1 an · Correction de tous défauts · Réactivité garantie sous 48h · Pas de franchise |

### Certifications & agréations

| Nom | Numéro | Description |
|---|---|---|
| Enregistrement BCE | **BE1005.585.934** | Entreprise enregistrée à la Banque-Carrefour des Entreprises |
| Agréation RGIE | RGIE-123456 *(placeholder)* | Agréation pour installations électriques |
| Assurance décennale | DEC-789012 *(placeholder)* | Police d'assurance décennale active |

### Processus de réclamation (4 étapes)

1. **Constatation** — Dès que vous constatez un problème, contactez-nous par téléphone, email ou WhatsApp.
2. **Évaluation** — Notre équipe intervient sous 48h pour évaluer le problème.
3. **Intervention** — Si couvert par la garantie, intervention gratuite.
4. **Suivi** — Suivi jusqu'à résolution complète.

**CTA bas de page** : *Questions sur nos garanties ?* / *Notre équipe est disponible pour répondre à toutes vos questions* → **Appelez-nous** / **Envoyez un email**

---

## 19. Footer & mentions légales

### Bloc À propos

- **Titre** : À Propos
- **Sous-titre** : Maintenance & Rénovation
- **Description** : *Vericore SRL est votre partenaire de confiance pour la maintenance technique et la rénovation de bâtiments en Belgique.*

### Blocs de liens

- **Liens Rapides** : Accueil · À propos · Expertises · Services · Abonnements · FAQ · Contact
- **Services** : (reprend les 8 pages métier)
- **Contact** : Téléphone · Email · Adresse · Disponible 24h/7 · WhatsApp disponible

### Mentions légales / footer bottom

- **TVA** : BE1005.585.934
- **Copyright** : © {année} Vericore SRL. Tous droits réservés.
- **Liens** : Mentions légales · Politique de confidentialité

### Page légale (route dédiée)

Les mentions légales et la politique de confidentialité sont servies par [`src/pages/LegalPage.tsx`](../src/pages/LegalPage.tsx). Les contenus sont rendus par `react-markdown` à partir des exports du fichier.

---

## 20. SEO & zones desservies

### Zones d'intervention déclarées

Région de Bruxelles-Capitale (19 communes) · Brabant flamand · Brabant wallon.

**Liste exhaustive des communes avec page dédiée** :

Anderlecht · Auderghem · Berchem-Sainte-Agathe · Bruxelles · Etterbeek · Evere · Forest · Ganshoren · Ixelles · Jette · Koekelberg · Molenbeek-Saint-Jean · Saint-Gilles · Saint-Josse-ten-Noode · Schaerbeek · Uccle · Watermael-Boitsfort · Woluwe-Saint-Lambert · Woluwe-Saint-Pierre

### Mots-clés par défaut

rénovation Bruxelles · construction Bruxelles · électricien Bruxelles · plombier Bruxelles · chauffagiste Bruxelles · entreprise générale Bruxelles · travaux tous corps d'état

### Patterns de titres SEO

- **Service page** FR : *{Service} {Ville} - Devis Gratuit 24h | Vericore SRL*
- **Service page** NL : *{Service} {Ville} - Gratis offerte 24u | Vericore SRL*
- **Service page** EN : *{Service} {Ville} - Free quote within 24h | Vericore SRL*
- **Commune page** FR : *Rénovation {Commune} - Tous travaux | Vericore SRL*

### Open Graph

- **Image** : `/og-image.jpg` (1200×630)
- **Alt** : *Vericore - Entreprise de rénovation à Bruxelles*
- **Type** : website

### Schémas JSON-LD

LocalBusiness · WebPage · FAQPage · Article · HowTo · Service

---

## 21. Pages & routes du site

| Route | Fichier | Contenu |
|---|---|---|
| `/` | [HomePage.tsx](../src/pages/HomePage.tsx) | Hero + About + Plans + WhyVericore + Contact + Partners |
| `/expertises` | ExpertisesPage.tsx | 7 cartes d'expertise détaillées |
| `/projets` | ProjectsPage.tsx | 6 projets avec filtres |
| `/faq` | FAQPage.tsx | 14 questions |
| `/blog` | BlogPage.tsx | 3 articles (search + filtres) |
| `/blog/:slug` | BlogPostPage.tsx | Article complet markdown |
| `/garanties` | GuaranteesPage.tsx | Décennale + RC + certifications |
| `/mentions-legales` | LegalPage.tsx | Mentions légales + privacy |
| `/{slug-service}-{commune}` | ServicePage.tsx | Page SEO service × commune (8 × 19 = 152 pages) |
| `/renovation-{commune}` | CommunePage.tsx | Page SEO par commune (19 pages) |
| `/google-business` | GoogleBusinessPage.tsx | Fiche de redirection Google My Business |
| `/*` | NotFoundPage.tsx | 404 custom |

**Multilangue** : Toutes les routes existent aussi en `/nl/*` et `/en/*` avec slugs localisés.

**Fichiers techniques SEO** : [`public/sitemap.xml`](../public/sitemap.xml) · [`public/robots.txt`](../public/robots.txt) · [`public/site.webmanifest`](../public/site.webmanifest) · [`public/_redirects`](../public/_redirects) · [`public/.htaccess`](../public/.htaccess)

---

## Annexe — Notes pour la refonte du design

**Points saillants déjà repérés** :

1. **Images lourdes** : plusieurs PNG > 2 Mo (`bg-camions.png`, `bg-worker.png`, `installation-maintenance.png`, `parlophone.png` à 7,7 Mo). Prévoir pipeline WebP/AVIF.
2. **Palette actuelle** : *primary* (brand) + accents amber (Bronze), slate (Silver), yellow (Gold), green (Sérénité). Garder la hiérarchie si on garde les abonnements.
3. **Dualité "pro vs particuliers"** : le site parle à la fois aux syndics/entreprises (abonnements Bronze → Premium) et aux particuliers (Pack Sérénité 9,99 €). La refonte peut clarifier les 2 parcours.
4. **Témoignages** présents dans le dataset mais pas affichés sur la home actuelle — à réintégrer potentiellement.
5. **Multilangue** : FR / NL / EN avec splash de choix de langue + i18next + hreflang. Toute refonte doit préserver cette structure.
6. **Formulaires** : Web3Forms côté client. Validation Zod + react-hook-form. Reproduire les mêmes règles.
7. **SEO local** : canonical avec trailing slash, 152 pages service × commune générées. Garder cette matrice au moment du redesign ou documenter clairement si on la réduit.
8. **Icônes** : Lucide React partout. Simple à conserver dans un design system.
9. **CTA récurrents** : *Devis gratuit sous 24h* · *WhatsApp 24/7* · *Urgence 24/7* — tagline tri-partie à conserver dans la refonte.
10. **Numéro WhatsApp** : lien `wa.me/32496847374` avec message pré-rempli — à garder.
