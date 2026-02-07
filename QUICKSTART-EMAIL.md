# 🚀 Configuration Rapide - Envoi d'Emails (5 min)

## ✅ Ce qui est déjà fait

Les formulaires sont **100% fonctionnels** et prêts à envoyer des emails. Il ne reste que **2 étapes** :

---

## 📋 Étape 1 : Obtenir votre clé Web3Forms (2 min)

1. **Allez sur** → [https://web3forms.com](https://web3forms.com)
2. **Cliquez sur** → "Get Started for Free"
3. **Inscrivez-vous avec** → `contact@vericore.be`
4. **Confirmez votre email** (vérifiez vos spams)
5. **Copiez votre Access Key** depuis le dashboard

> 💡 C'est **100% gratuit** (250 emails/mois) et **aucune carte bancaire** n'est requise

---

## 🔧 Étape 2 : Configurer la clé (3 min)

### En local (pour tester)

Ouvrez `.env.local` et remplacez :

```bash
VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
```

Par votre vraie clé :

```bash
VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Sur Hostinger (production)

Dans l'interface Hostinger → Variables d'environnement :

| Variable | Valeur |
|----------|--------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Votre clé copiée |
| `VITE_EMAIL_TO` | `contact@vericore.be` |

---

## 🎉 C'est tout !

### Test en local
```bash
npm run dev
# Allez sur http://localhost:3000/#contact
# Testez le formulaire
```

### Test en production
```bash
npm run build
# Déployez sur Hostinger
# Testez sur https://vericore.be/#contact
```

---

## 📧 Ce qui fonctionne

✅ **Formulaire de contact**
- Validation complète
- États de chargement
- Messages d'erreur
- Multilingue (FR/EN/NL)

✅ **Formulaire de recrutement**
- Upload de CV (PDF/DOC/DOCX)
- Tous les champs validés
- Email avec pièce jointe
- Multilingue (FR/EN/NL)

---

## ❓ Problème ?

Consultez le guide complet : [`docs/EMAIL-SETUP.md`](docs/EMAIL-SETUP.md)

---

**⚡ Temps total : 5 minutes max !**
