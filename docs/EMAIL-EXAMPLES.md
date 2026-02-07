# 🎬 Exemple d'Utilisation - Web3Forms

## 🔍 Aperçu du Code

### Structure de l'Email (Contact)

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    subject: `[Vericore] Nouveau message de ${data.name} - ${data.requestType}`,
    from_name: data.name,
    email: data.email,
    phone: data.phone,
    type: data.requestType,
    address: data.siteAddress || 'Non spécifié',
    message: data.message,
    to_email: import.meta.env.VITE_EMAIL_TO,
  }),
});
```

### Structure de l'Email (Recrutement avec CV)

```typescript
const formData = new FormData();
formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
formData.append('subject', `[Vericore - Recrutement] ${data.position} - ${data.name}`);
formData.append('from_name', data.name);
formData.append('email', data.email);
formData.append('phone', data.phone);
formData.append('position', data.position);
formData.append('availability', data.availability);
formData.append('experience', data.experience);
formData.append('message', data.message);
formData.append('to_email', import.meta.env.VITE_EMAIL_TO);

// Pièce jointe
if (selectedFile) {
  formData.append('attachment', selectedFile);
}

const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: formData, // Pas de Content-Type header (multipart/form-data auto)
});
```

---

## 📧 Exemples d'Emails Reçus

### Email de Contact

```
De: Jean Dupont via Web3Forms <noreply@web3forms.com>
À: contact@vericore.be
Sujet: [Vericore] Nouveau message de Jean Dupont - Devis

Bonjour,

Vous avez reçu un nouveau message depuis votre site web:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom: Jean Dupont
Email: jean.dupont@example.be
Téléphone: +32 470 12 34 56
Type de demande: Devis
Adresse du site: Avenue Louise 123, 1050 Bruxelles

Message:
Bonjour, je souhaiterais obtenir un devis pour la rénovation 
électrique complète de mon appartement. 3 chambres, salon, cuisine. 
Disponible pour une visite la semaine prochaine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ce message a été envoyé depuis: https://vericore.be
IP: 91.182.xxx.xxx
Date: 07/02/2026 14:23:45

Répondre directement à: jean.dupont@example.be
```

### Email de Recrutement (avec CV)

```
De: Sophie Martin via Web3Forms <noreply@web3forms.com>
À: contact@vericore.be
Sujet: [Vericore - Recrutement] Électricien - Sophie Martin

Bonjour,

Vous avez reçu une nouvelle candidature:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom: Sophie Martin
Email: sophie.martin@example.be
Téléphone: +32 485 67 89 01
Poste: Électricien
Disponibilité: 2 semaines
Expérience: 3-5 ans

Présentation:
Bonjour,

Je suis électricienne certifiée avec 4 ans d'expérience en installation 
et maintenance électrique résidentielle et commerciale. Actuellement à 
la recherche de nouvelles opportunités, je suis particulièrement 
intéressée par vos projets de rénovation à Bruxelles.

Compétences principales:
- Installation électrique complète
- Mise aux normes RGIE
- Dépannage et maintenance
- Domotique et systèmes connectés

Disponible pour un entretien à votre convenance.

Cordialement,
Sophie Martin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📎 Pièce jointe: CV_Sophie_Martin.pdf (234 KB)

Ce message a été envoyé depuis: https://vericore.be
IP: 91.182.xxx.xxx
Date: 07/02/2026 15:47:22

Répondre directement à: sophie.martin@example.be
```

---

## 🧪 Test en Console Développeur

Pour tester l'envoi sans interface:

```javascript
// Ouvrez la console (F12) sur votre site
const testContact = async () => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'VOTRE_CLÉ_ICI',
      subject: '[Test] Message de test',
      from_name: 'Test User',
      email: 'test@example.com',
      message: 'Ceci est un test',
      to_email: 'contact@vericore.be'
    })
  });
  
  const result = await response.json();
  console.log('Résultat:', result);
};

testContact();
```

**Réponse attendue:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## 🎯 Scénarios de Test Recommandés

### 1. Test Formulaire Contact - Succès
```
Nom: Jean Test
Email: test@example.com
Téléphone: +32 123 456 789
Type: Devis
Adresse: Rue Test 1, 1000 Bruxelles
Message: Ceci est un test

✅ Attendu: Email reçu sous 30 secondes
```

### 2. Test Formulaire Contact - Validation
```
Nom: (vide)
Email: email-invalide
Téléphone: abc
Message: (moins de 10 caractères)

✅ Attendu: Messages d'erreur de validation
```

### 3. Test Recrutement - Avec CV
```
Nom: Sophie Test
Email: sophie@example.com
Téléphone: +32 485 67 89 01
Poste: Électricien
Disponibilité: Immédiate
Expérience: 3-5 ans
CV: Fichier PDF de 500 KB
Message: Je postule pour le poste

✅ Attendu: Email avec pièce jointe reçu
```

### 4. Test Recrutement - CV Trop Gros
```
CV: Fichier > 5 MB

✅ Attendu: Erreur ou upload lent (Web3Forms limite: 5 MB)
```

### 5. Test États de Chargement
```
1. Cliquer sur "Envoyer"
2. Observer le bouton devient:
   - Désactivé (cursor-not-allowed)
   - Gris (bg-gray-400)
   - Spinner animé visible
   - Texte "Envoi en cours..."

✅ Attendu: UI responsive pendant l'envoi
```

### 6. Test Multilingue
```
1. Changer langue: FR → EN → NL
2. Vérifier traductions:
   - Labels des champs
   - Messages d'erreur
   - Boutons
   - Success message

✅ Attendu: Tout traduit correctement
```

---

## 🐛 Tests d'Erreur

### 1. Clé Invalide
```bash
# .env.local
VITE_WEB3FORMS_ACCESS_KEY=invalid-key-123
```

**Résultat attendu:**
```json
{
  "success": false,
  "message": "Access key not found"
}
```

**UI:** Message d'erreur affiché en rouge

### 2. Email Destinataire Vide
```bash
VITE_EMAIL_TO=
```

**Résultat:** Email envoyé à l'email par défaut de Web3Forms

### 3. Réseau Hors Ligne
**Résultat attendu:**
- Timeout après 30s
- Message d'erreur: "Network error" ou "Failed to fetch"
- UI affiche le message d'erreur

---

## 📊 Analytics Web3Forms

Dans votre dashboard Web3Forms, vous verrez:

```
╔════════════════════════════════════════╗
║  Email Statistics                      ║
╠════════════════════════════════════════╣
║  📧 Emails sent today:        23       ║
║  📊 Emails this month:        187/250  ║
║  ✅ Delivery rate:            98.6%    ║
║  ⚡ Average delivery time:    2.3s     ║
║                                        ║
║  Top sources:                          ║
║  • vericore.be             120 emails  ║
║  • localhost:3000          67 emails   ║
╚════════════════════════════════════════╝
```

---

## 🔔 Notifications

### Auto-Réponse (Configurable)

Vous pouvez configurer une auto-réponse dans Web3Forms:

```
Sujet: Confirmation de réception - Vericore

Bonjour {name},

Nous avons bien reçu votre message et vous remercions de l'intérêt 
que vous portez à Vericore.

Notre équipe vous répondra dans les plus brefs délais, généralement 
sous 24h ouvrées.

Pour toute urgence, contactez-nous au +32 (0)3 96 84 73 74.

Cordialement,
L'équipe Vericore

---
Ceci est un message automatique, merci de ne pas y répondre.
```

---

## 🎓 Bonnes Pratiques

### 1. Tester en Local Avant Production
```bash
# Toujours tester avec une vraie clé Web3Forms
npm run dev
# Soumettre test → vérifier email reçu
```

### 2. Monitorer les Envois
- Vérifiez régulièrement le dashboard Web3Forms
- Surveillez le quota (250/mois en gratuit)
- Activez les alertes email (95% du quota)

### 3. Gérer les Spams
- Ajoutez `noreply@web3forms.com` aux contacts
- Créez un filtre email si nécessaire
- Utilisez les labels Gmail pour organiser

### 4. Backup des Soumissions
Web3Forms garde 90 jours d'historique:
- Exportez CSV mensuellement
- Sauvegardez les CV importants
- Archivez les candidatures

---

## 🚀 Upgrade Options

Si vous dépassez 250 emails/mois:

| Plan | Prix | Emails | Features |
|------|------|--------|----------|
| Free | $0 | 250/mois | Basique |
| Starter | $2.99 | 1000/mois | + Auto-response |
| Pro | $9.99 | 5000/mois | + Custom domain |
| Business | $29.99 | 25000/mois | + Priority support |

---

**✨ L'implémentation est complète et prête à l'emploi !**
