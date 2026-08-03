# Éléments à demander au client (Vericore)

Ce document liste tout ce qui bloque le lancement SEO et qui dépend du client.
À envoyer en UN seul message consolidé — ne pas fragmenter en 15 demandes séparées.

---

## 1. Accès aux comptes Google (via délégation, pas de mot de passe)

Le client garde ses accès, il te délègue le rôle admin/utilisateur.

- [ ] **Google Search Console** — délégation via https://search.google.com/search-console/users
  Rôle demandé : *Propriétaire* ou *Utilisateur avec autorisation totale*
- [ ] **Google Business Profile** — délégation via https://business.google.com
  Rôle demandé : *Gérant* (Manager)
- [ ] **Google Analytics 4** — délégation via https://analytics.google.com
  Rôle demandé : *Éditeur* (Editor)
  Si aucun compte GA4 n'existe : demander l'autorisation de le créer sur son domaine
- [ ] **Google Tag Manager** (optionnel mais recommandé)

Adresse email à ajouter : `[TON_EMAIL_PRO]`

---

## 2. Données factuelles à valider

Les fichiers contiennent actuellement des placeholders. À confirmer :

| Champ | Valeur actuelle | À valider |
|---|---|---|
| Adresse | Avenue Louise 123, 1050 Bruxelles | ✏️ Vraie adresse ? |
| Téléphone principal | +32 2 123 45 67 | ✏️ Vrai numéro ? |
| WhatsApp | +32 470 12 34 56 | ✏️ Vrai numéro ? |
| Email | contact@vericore.be | ✅ Confirmer |
| TVA | BE0123.456.789 | ✏️ Vrai numéro TVA ? |
| Année de fondation | 2020 | ✏️ Confirmer |
| Horaires | Lu-Ve 8h-18h, Sa 9h-15h | ✏️ Confirmer |
| Coordonnées GPS | 50.8503 / 4.3517 (centre Bruxelles) | ✏️ GPS de leur siège ? |
| Zones réellement couvertes | 19 communes bruxelloises | ✏️ Confirmer / retirer les non-couvertes |
| Certifications réelles | RGIE, Cerga, F-Gaz mentionnées dans contenu | ✏️ Confirmer possession + numéros |

Fichier à mettre à jour : [src/config/seo.config.ts](../src/config/seo.config.ts)

---

## 3. Contenu à obtenir (impact SEO majeur)

### 3.1. Photos (impératif — Google Business + galerie)

- [ ] **10-15 photos de vrais chantiers** (avant/après si possible)
- [ ] **5 photos d'équipe** (véhicules floqués, techniciens au travail)
- [ ] **Photo du siège** (façade + intérieur bureau)
- [ ] **Logo vectoriel** (SVG ou AI) — actuellement JPEG uniquement
- [ ] **Photo pour og-image.jpg** (1200x630, branding + baseline)

Résolution minimum : 1600×1200 px. Droits confirmés par écrit.

### 3.2. Témoignages clients

- [ ] **10-20 témoignages** avec :
  - Nom du client (ou initiales si RGPD)
  - Commune de résidence
  - Type de travaux
  - Note (/5)
  - Photo du chantier ou du client si accord

À injecter comme `AggregateRating` schema + section testimonials du site.

### 3.3. Certifications & assurances

Pour renforcer E-E-A-T (Google évalue l'expertise réelle) :

- [ ] Attestation garantie décennale (photo/scan)
- [ ] Numéro RGIE (électriciens)
- [ ] Numéro Cerga (chauffagistes gaz)
- [ ] Certification F-Gaz (climatisation)
- [ ] Numéro d'entreprise BCE
- [ ] Attestation TVA
- [ ] Assurance RC professionnelle

Ces éléments alimentent la page [Garanties](../src/pages/GuaranteesPage.tsx).

### 3.4. Blog — 3 articles à écrire OU commander

Actuellement 3 articles sont référencés dans le sitemap :
- `/blog/cout-renovation-bruxelles-2026`
- `/blog/electricite-mise-aux-normes-rgie-bruxelles`
- `/blog/10-erreurs-renovation-eviter`

Chaque article doit faire **1000-1500 mots** et être **factuellement exact**.
Deux options :
- Le client rédige (nécessite validation qualité SEO)
- Faire appel à un rédacteur SEO spécialisé (~150-300 €/article)

---

## 4. Décisions à faire valider

- [ ] **Langues à activer** : FR / NL / EN — quelles versions maintenues activement ?
- [ ] **Fourchettes de prix** citées dans le contenu (chaudière 3500-6500€, peinture 22-45€/m²…) — cohérent avec leurs tarifs ?
- [ ] **Délais d'intervention** (urgence sous 45-60 min, devis sous 24h) — engagements tenus ?
- [ ] **Zones à retirer/ajouter** — travaillent-ils vraiment jusqu'à Nyon, Lausanne, ou seulement Région bruxelloise ?
- [ ] **Périmètre du service 24/7** — vrai 24/7 ou heures étendues ?

Ces engagements finiront dans la structure de la page. Un déni ultérieur est problématique.

---

## 5. Actions du client une fois les accès reçus

Une fois toi ajouté aux comptes Google, tu peux enchaîner :

1. Soumettre le sitemap `https://www.vericore.be/sitemap.xml` dans GSC
2. Configurer Google Business Profile avec la vraie fiche
3. Vérifier le domaine dans GSC (via DNS ou fichier HTML)
4. Activer GA4 avec le vrai ID de mesure
5. Créer les événements de conversion (contact, WhatsApp, appel)

---

## Format d'email suggéré au client

> Bonjour [Nom],
>
> Pour lancer la partie SEO du site Vericore, j'ai besoin des éléments suivants :
>
> **Accès Google** (délégation via ton compte, tu gardes ton contrôle) :
> - Search Console → ajoute-moi comme propriétaire : https://search.google.com/search-console/users
> - Business Profile → ajoute-moi comme gérant : https://business.google.com
> - Analytics → ajoute-moi comme éditeur : https://analytics.google.com
>
> Email à ajouter : `[TON_EMAIL]`
>
> **Données à confirmer** (voir tableau en PJ)
>
> **Contenu à fournir** : photos chantiers, témoignages, attestations
>
> Sans ces éléments, le SEO ne peut pas décoller. Peux-tu me les envoyer d'ici [date] ?
>
> Merci,
> [Toi]
