# Configuration de l'envoi d'emails avec Web3Forms

## 📧 Présentation

Les formulaires de contact et de recrutement utilisent **Web3Forms**, un service gratuit et simple pour l'envoi d'emails depuis des sites statiques.

### ✨ Avantages
- ✅ **Gratuit** jusqu'à 250 emails/mois
- ✅ **Aucune carte bancaire** requise
- ✅ **Sans backend** - fonctionne directement côté client
- ✅ **Support des pièces jointes** - idéal pour les CV
- ✅ **Notifications par email** - vous recevez les soumissions directement
- ✅ **Spam protection** intégré

---

## 🚀 Configuration (5 minutes)

### 1. Créer un compte Web3Forms

1. Allez sur [https://web3forms.com](https://web3forms.com)
2. Cliquez sur **"Get Started for Free"**
3. Inscrivez-vous avec votre email professionnel (`contact@vericore.be`)
4. Confirmez votre email

### 2. Obtenir votre Access Key

1. Une fois connecté, allez dans le **Dashboard**
2. Cliquez sur **"Create New Form"**
3. Copiez votre **Access Key** (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 3. Configurer les variables d'environnement

#### Pour le développement local (`.env.local`)

```bash
# Remplacez YOUR_ACCESS_KEY_HERE par votre clé
VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VITE_EMAIL_TO=contact@vericore.be
```

#### Pour la production (`.env` ou `.env.production`)

```bash
# Utilisez la même clé ou créez-en une séparée pour la production
VITE_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VITE_EMAIL_TO=contact@vericore.be
```

#### Pour Hostinger (Variables d'environnement)

Dans l'interface Hostinger, ajoutez ces variables:

| Nom de la variable | Valeur |
|-------------------|--------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Votre clé Web3Forms |
| `VITE_EMAIL_TO` | `contact@vericore.be` |

---

## 🧪 Test des formulaires

### Test en local

1. Assurez-vous que `.env.local` contient votre Access Key
2. Redémarrez le serveur de développement:
   ```bash
   npm run dev
   ```
3. Testez les formulaires:
   - **Formulaire de contact**: `http://localhost:3000/#contact`
   - **Formulaire de recrutement**: `http://localhost:3000/#contact` → onglet "Recrutement"

### Test en production

Après déploiement sur Hostinger:
1. Allez sur `https://vericore.be/#contact`
2. Remplissez et soumettez un formulaire de test
3. Vérifiez que vous recevez l'email à `contact@vericore.be`

---

## 📋 Fonctionnalités implémentées

### Formulaire de Contact
- ✅ Validation des champs (nom, email, téléphone, message)
- ✅ Types de demande (devis, urgence, maintenance, autre)
- ✅ Adresse du site (optionnel)
- ✅ État de chargement pendant l'envoi
- ✅ Message de succès
- ✅ Gestion des erreurs
- ✅ Multilingue (FR/EN/NL)

### Formulaire de Recrutement
- ✅ Informations candidat (nom, email, téléphone)
- ✅ Poste recherché (technicien, électricien, plombier, etc.)
- ✅ Disponibilité et expérience
- ✅ **Upload de CV** (PDF, DOC, DOCX)
- ✅ Message de présentation
- ✅ État de chargement pendant l'envoi
- ✅ Message de succès
- ✅ Gestion des erreurs
- ✅ Multilingue (FR/EN/NL)

---

## 📧 Format des emails reçus

### Email de contact
```
Sujet: [Vericore] Nouveau message de Jean Dupont - Devis

De: Jean Dupont (jean@example.be)
Téléphone: +32 123 456 789
Type de demande: Devis
Adresse du site: Rue de la Loi 100, 1000 Bruxelles

Message:
Je souhaite obtenir un devis pour...
```

### Email de recrutement
```
Sujet: [Vericore - Recrutement] Électricien - Jean Dupont

De: Jean Dupont (jean@example.be)
Téléphone: +32 123 456 789
Poste: Électricien
Disponibilité: 2 semaines
Expérience: 3-5 ans

Pièce jointe: CV_Jean_Dupont.pdf

Message:
Bonjour, je suis électricien avec 4 ans d'expérience...
```

---

## ⚙️ Configuration avancée (optionnel)

### Dashboard Web3Forms

Dans votre dashboard Web3Forms, vous pouvez:
- **Personnaliser l'email de notification**
- **Ajouter plusieurs destinataires**
- **Configurer des auto-réponses**
- **Voir les statistiques d'envoi**
- **Télécharger l'historique des soumissions**

### Limites du plan gratuit

- 📊 **250 emails/mois** gratuits
- 📎 **5 MB max** par pièce jointe
- 🔒 **Spam protection** automatique
- 📈 **Statistiques basiques** incluses

**Besoin de plus?** Plans payants à partir de $2.99/mois pour 1000 emails.

---

## 🔧 Dépannage

### L'email n'est pas reçu

1. **Vérifiez votre Access Key**
   - Elle doit être valide et active dans Web3Forms
   - Format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

2. **Vérifiez vos variables d'environnement**
   ```bash
   # En local
   npm run dev
   # Vérifiez dans la console: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
   ```

3. **Vérifiez vos spams**
   - Les emails Web3Forms peuvent arriver dans les spams
   - Ajoutez `noreply@web3forms.com` à vos contacts

4. **Console du navigateur**
   - Ouvrez les DevTools (F12)
   - Vérifiez les erreurs dans l'onglet Console

### Erreur "Access key not found"

Votre clé Web3Forms n'est pas configurée ou est incorrecte:
```bash
# .env.local ou .env
VITE_WEB3FORMS_ACCESS_KEY=VOTRE_VRAIE_CLÉ_ICI
```

### Le CV ne s'envoie pas

Web3Forms supporte les pièces jointes jusqu'à 5 MB:
- Vérifiez la taille du fichier
- Formats acceptés: PDF, DOC, DOCX
- Si le fichier est trop gros, demandez au candidat de l'envoyer par email

---

## 🔐 Sécurité

### Bonnes pratiques

✅ **NE PAS** commiter `.env.local` ou `.env` dans Git  
✅ **Utiliser** `.env.example` pour documenter les variables  
✅ **Configurer** les variables sur Hostinger via l'interface  
✅ **Vérifier** que `.gitignore` contient `.env*`  

### Variables sensibles

Les variables `VITE_*` sont **publiques** (visibles côté client):
- C'est normal pour Web3Forms (la clé est côté client)
- Web3Forms protège contre les abus avec rate limiting
- Pas besoin de cacher la clé côté serveur

---

## 📞 Support

### Web3Forms
- Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Support: [https://web3forms.com/contact](https://web3forms.com/contact)

### Vericore
Si vous rencontrez des problèmes avec l'implémentation:
1. Vérifiez ce guide
2. Consultez la console du navigateur
3. Testez en local avant de déployer

---

## ✅ Checklist de déploiement

Avant de déployer en production:

- [ ] Compte Web3Forms créé et email confirmé
- [ ] Access Key copiée du dashboard
- [ ] Variable `VITE_WEB3FORMS_ACCESS_KEY` configurée sur Hostinger
- [ ] Variable `VITE_EMAIL_TO` = `contact@vericore.be` configurée
- [ ] Test du formulaire de contact en local ✓
- [ ] Test du formulaire de recrutement en local ✓
- [ ] Test avec upload de CV ✓
- [ ] Email de test reçu à `contact@vericore.be` ✓
- [ ] `noreply@web3forms.com` ajouté aux contacts (éviter spams)
- [ ] Déploiement sur Hostinger
- [ ] Test post-déploiement en production

---

**🎉 C'est tout! Vos formulaires sont maintenant opérationnels.**
