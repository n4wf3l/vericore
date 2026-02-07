// Test script pour Web3Forms
// Usage: node scripts/test-email.mjs

const ACCESS_KEY = process.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
const EMAIL_TO = process.env.VITE_EMAIL_TO || 'contact@vericore.be';

const testContactForm = async () => {
  console.log('🧪 Test du formulaire de contact...\n');
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: '[Vericore - TEST] Message de test depuis script',
        from_name: 'Test Script',
        email: 'test@vericore.be',
        phone: '+32 123 456 789',
        type: 'Test',
        address: 'Test Address',
        message: 'Ceci est un email de test automatique pour vérifier la configuration.',
        to_email: EMAIL_TO,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Email envoyé avec succès!');
      console.log(`📧 Destinataire: ${EMAIL_TO}`);
      console.log(`🔑 Access Key: ${ACCESS_KEY.substring(0, 8)}...`);
      console.log('\n✉️  Vérifiez votre boîte email (et les spams!)');
    } else {
      console.error('❌ Erreur lors de l\'envoi:');
      console.error(result.message);
      
      if (result.message?.includes('Access key')) {
        console.log('\n💡 Solution: Vérifiez votre VITE_WEB3FORMS_ACCESS_KEY dans .env.local');
      }
    }
  } catch (error) {
    console.error('❌ Erreur réseau:', error.message);
    console.log('\n💡 Vérifiez votre connexion internet');
  }
};

const testRecruitmentForm = async () => {
  console.log('\n🧪 Test du formulaire de recrutement...\n');
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: '[Vericore - Recrutement TEST] Électricien - Test Script',
        from_name: 'Test Candidat',
        email: 'candidat@vericore.be',
        phone: '+32 485 67 89 01',
        position: 'Électricien',
        availability: 'Immédiate',
        experience: '3-5 ans',
        message: 'Ceci est une candidature de test automatique.',
        to_email: EMAIL_TO,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Email de recrutement envoyé avec succès!');
      console.log(`📧 Destinataire: ${EMAIL_TO}`);
      console.log('\n✉️  Vérifiez votre boîte email (et les spams!)');
    } else {
      console.error('❌ Erreur lors de l\'envoi:');
      console.error(result.message);
    }
  } catch (error) {
    console.error('❌ Erreur réseau:', error.message);
  }
};

// Configuration check
const checkConfig = () => {
  console.log('🔧 Vérification de la configuration...\n');
  
  if (ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
    console.log('⚠️  VITE_WEB3FORMS_ACCESS_KEY n\'est pas configuré!');
    console.log('\n📋 Instructions:');
    console.log('1. Allez sur https://web3forms.com');
    console.log('2. Créez un compte et obtenez votre Access Key');
    console.log('3. Ajoutez-la dans .env.local:');
    console.log('   VITE_WEB3FORMS_ACCESS_KEY=votre-clé-ici');
    console.log('\n4. Relancez ce script\n');
    return false;
  }
  
  console.log(`✅ Access Key configurée: ${ACCESS_KEY.substring(0, 8)}...`);
  console.log(`✅ Email destinataire: ${EMAIL_TO}`);
  console.log('');
  return true;
};

// Main
const main = async () => {
  console.log('═══════════════════════════════════════════');
  console.log('    Web3Forms - Script de Test Email');
  console.log('═══════════════════════════════════════════\n');
  
  if (!checkConfig()) {
    process.exit(1);
  }
  
  await testContactForm();
  
  // Attendre 2s entre les tests
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await testRecruitmentForm();
  
  console.log('\n═══════════════════════════════════════════');
  console.log('  ✅ Tests terminés!');
  console.log('═══════════════════════════════════════════\n');
};

main().catch(console.error);
