# Rapport SEO — Vericore

Document de synthèse à destination du client.
Livraison technique du 04 août 2026.

---

## Résumé

Le site vericore.be est **techniquement prêt pour le référencement naturel**. Toute la partie qui dépend du code, de l'infrastructure et de la structuration du contenu est en place et déployée en production. Les prochaines étapes dépendent de données business et d'actions marketing qui, par nature, ne peuvent pas être réalisées par un développeur seul.

---

## Livrables techniques (dans le périmètre dev)

### SEO on-page & structure

| Livrable | Description | Statut |
|---|---|---|
| Prérendering statique | 37 pages HTML pré-générées au build. Googlebot voit le contenu complet dès la première requête, sans exécuter de JavaScript. | ✅ |
| Contenu unique par service | 8 pages services (rénovation, électricité, plomberie, chauffage, climatisation, menuiserie, peinture, carrelage) avec du vocabulaire métier spécifique (RGIE, Cerga, F-Gaz, SPEC, DTU…) pour éviter la pénalité "duplicate content". | ✅ |
| Contenu unique par commune | 19 pages communes de la Région bruxelloise avec typologie du bâti local et quartiers réels référencés. | ✅ |
| Schémas JSON-LD | LocalBusiness, Service, FAQPage, BreadcrumbList, Article (blog), WebPage. Permet l'affichage de rich snippets dans les résultats Google (étoiles, FAQ dépliable, fil d'ariane). | ✅ |
| Sitemap XML | 37 URLs déclarées + 28 balises image pour Google Image Search. | ✅ |
| robots.txt | Configuration propre, sans blocage des paramètres d'attribution (utm). | ✅ |
| hreflang | Balises FR-BE / NL-BE / EN / x-default pour le SEO multilingue. | ✅ |
| Open Graph & Twitter Cards | 10 balises par page pour les aperçus riches sur Facebook, LinkedIn, WhatsApp, Twitter/X. | ✅ |
| Canonical URLs | Chaque page déclare son URL canonique pour éviter le contenu dupliqué. | ✅ |

### Performance & mobile

| Livrable | Description | Statut |
|---|---|---|
| Code splitting | Bundle JavaScript initial réduit de 597 KB à 411 KB (-31 %). Chaque page charge uniquement ce dont elle a besoin. | ✅ |
| Font loading optimisé | Chargement des polices Google en parallèle du HTML (au lieu de bloquer le rendu via @import CSS). | ✅ |
| Web manifest & favicons | Site installable en PWA, favicons 192/512 pour mobile. | ✅ |
| Cache assets | Headers de cache long pour les assets hashés, cache court pour les HTML. Configurés dans `.htaccess`. | ✅ |
| Compression gzip | Activée sur tous les assets textuels via `.htaccess`. | ✅ |

### Infrastructure & outillage

| Livrable | Description | Statut |
|---|---|---|
| Configuration SPA fallback | Fichiers pour Netlify (`_redirects`), Vercel (`vercel.json`) et Apache (`.htaccess`) pour router les URLs correctement. | ✅ |
| Script de déploiement FTP | Automatisation de la mise en ligne (rebuild + upload FTP en 1 commande). Prêt pour l'auto-deploy futur. | ✅ |
| Sécurité | Headers de sécurité HTTP (X-Content-Type-Options, X-Frame-Options, Referrer-Policy). | ✅ |

### Actions Google effectuées

| Action | Description | Statut |
|---|---|---|
| Google Search Console — vérification | Domain property vérifiée via DNS TXT record. | ✅ |
| Sitemap soumis à GSC | Prêt à être crawlé par Google. | ✅ |
| Bing Webmaster Tools | Site importé depuis GSC. | ✅ |
| Sitemap soumis à Bing | Idem pour l'index Bing (source ChatGPT/Copilot). | ✅ |
| Demandes d'indexation manuelles | Homepage + 4 pages critiques poussées manuellement dans GSC pour accélérer le premier passage Googlebot. | ✅ |

---

## Preuves techniques vérifiables

N'importe qui peut vérifier ces éléments dès maintenant :

- **Contenu vu par Google** :
  `curl -A "Googlebot" https://vericore.be/renovation-schaerbeek` → renvoie le HTML complet avec H1, texte, JSON-LD.
- **Rich snippets** : [Google Rich Results Test](https://search.google.com/test/rich-results?url=https://vericore.be/renovation-schaerbeek) → schémas détectés (LocalBusiness, Service, FAQPage, Breadcrumb).
- **Sitemap accessible** : https://vericore.be/sitemap.xml
- **Robots** : https://vericore.be/robots.txt
- **Performance** : [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https://vericore.be)
- **Aperçu social** : [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/?q=https://vericore.be)

---

## Impact attendu

Avant cette livraison :
- Une seule page indexée par Google (`site:vericore.be` → 1 résultat)
- Homepage servie comme un `<div>` vide à Googlebot
- Sitemap déclarant 30+ URLs qui retournaient 404
- Aucun ranking organique sauf sur "vericore" (nom de marque)

Après cette livraison :
- 37 pages indexables avec contenu unique
- Sitemap propre reflétant la structure réelle
- Rich snippets éligibles (FAQ, LocalBusiness, Breadcrumb)
- Base solide pour ranker sur des requêtes concurrentielles (rénovation Bruxelles, plombier Bruxelles, etc.)

Le premier gain visible se mesurera **dans 2 à 6 semaines** dans Google Search Console (indexation progressive + premières impressions).

---

## Hors périmètre développeur

Les éléments suivants sont **essentiels au SEO** mais dépendent de données business ou d'actions marketing/opérationnelles. Ils ne peuvent pas être livrés par un développeur seul.

### Actions dépendant du client

| Élément | Pourquoi seul le client peut le faire |
|---|---|
| **Google Business Profile** | Nécessite une adresse physique vérifiée (Google envoie une carte postale au siège), un numéro de téléphone professionnel réel, des horaires exacts et des photos originales de l'entreprise et de ses réalisations. |
| **Contenu réel des pages** | Les templates actuels utilisent du vocabulaire métier générique. Certaines affirmations (certifications RGIE, Cerga, F-Gaz, décennale) doivent être **validées ou corrigées** par le client selon la réalité de ses certifications. |
| **Photos de chantiers** | 10 à 15 photos originales sont nécessaires pour Google Business Profile, la page projets et l'og-image des partages sociaux. Nécessitent l'autorisation du client final. |
| **Témoignages clients** | Nécessite l'accord des clients réels (nom, commune, avis) — impossible à inventer sans risque de faux avis (sanctionné par Google). |
| **Attestations** | Copies des certifications réelles (RGIE, Cerga, F-Gaz, décennale, TVA) à uploader dans la page "Garanties" pour le E-E-A-T Google. |
| **Articles de blog** | Les 3 URLs blog déclarées dans le sitemap nécessitent des articles réels de 1000-1500 mots factuellement exacts. Peuvent être rédigés par le client, un consultant SEO ou un rédacteur commandé (150-300 €/article). |
| **Données de contact réelles** | Adresse, téléphone, WhatsApp, TVA, GPS du siège. Actuellement des placeholders dans le code, à remplacer par les vraies valeurs. |

### Actions dépendant d'un consultant SEO stratégique

| Élément | Description |
|---|---|
| **Recherche de mots-clés** | Analyse concurrentielle, ciblage de requêtes à fort volume ou longue traîne. |
| **Netlinking / acquisition de backlinks** | Inscription dans annuaires belges (TrustUp, PagesDor, BlueBook), partenariats syndics, articles invités. |
| **Suivi de rankings** | Outil type Ahrefs / Semrush / Sistrix pour suivre l'évolution des positions. |
| **Optimisation continue du contenu** | Réécriture selon performance mesurée dans GSC après quelques semaines. |
| **Configuration GA4** | Événements de conversion (appel, WhatsApp, formulaire), audience, segments. |

### Actions dépendant d'un designer

| Élément | Description |
|---|---|
| **Vraie og-image branded** | Image 1200×630 spécifique aux partages sociaux (actuellement placeholder = logo). |
| **Favicons multi-tailles** | Actuellement un seul PNG servi à toutes les tailles. Optimal : `favicon.ico` + `apple-touch-icon` dédiés. |

---

## Périmètre & responsabilités — clarification

Un projet SEO impliqué trois rôles distincts :

1. **Développeur SEO on-page** (mon périmètre) : structure HTML, contenu structuré, performance, schémas, prérendering, déploiement, configuration Search Console technique.
2. **Consultant SEO stratégique** : stratégie mots-clés, netlinking, tracking rankings, optimisation continue basée sur les données GSC / GA4.
3. **Business owner / client** : données réelles de l'entreprise, photos, témoignages, attestations, décisions produits, budget marketing.

Les trois rôles sont complémentaires. Aucun ne peut se substituer aux deux autres.

---

## Documents liés

- [CLIENT-REQUEST.md](CLIENT-REQUEST.md) — liste détaillée des éléments à obtenir du client avec email prêt à envoyer
- [DEPLOYMENT.md](DEPLOYMENT.md) — guide technique de déploiement
- [SEO-IMPLEMENTATION.md](SEO-IMPLEMENTATION.md) — détails techniques de l'implémentation

---

## Contact & suivi

Pour toute demande relative à l'infrastructure (ajout d'un DNS record demandé par un consultant SEO tiers, redéploiement, modification technique), me contacter directement avec les paramètres exacts :

- Type d'enregistrement DNS (TXT, CNAME, MX, A…)
- Nom / hôte
- Valeur exacte
- Contexte (à quel outil ou vérification cela correspond)

Je valide qu'il n'y a pas de conflit avec la configuration en place et j'accompagne la mise en production.
