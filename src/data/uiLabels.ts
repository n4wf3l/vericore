import type { Lang } from './serviceContent';

export interface ServicePageLabels {
  cta: {
    devisShort: string;
    devisLong: string;
    whatsappShort: string;
    whatsappLong: string;
  };
  sections: {
    forWho: string;
    areasCovered: (city: string) => string;
    process: string;
    pricing: string;
    faq: string;
    finalCta: (service: string, city: string) => string;
    finalCtaSubtitle: string;
    finalCtaDevis: string;
    finalCtaWhatsapp: string;
  };
}

export interface CommunePageLabels {
  cta: {
    devis: string;
    whatsapp: string;
  };
  sections: {
    ourServices: (city: string) => string;
    whyUs: (city: string) => string;
    neighborhoods: (city: string) => string;
    proximity: string;
    proximityDesc: (city: string) => string;
    expertise: string;
    expertiseDesc: string;
    availability: string;
    availabilityDesc: string;
    warranty: string;
    warrantyDesc: string;
    finalCta: (city: string) => string;
    finalCtaSubtitle: string;
    finalCtaDevis: string;
    finalCtaWhatsapp: string;
    serviceLinks: { name: string; icon: string; description: string; linkPrefix: string }[];
  };
}

const SERVICE_LABELS: Record<Lang, ServicePageLabels> = {
  fr: {
    cta: {
      devisShort: 'Devis Gratuit 24h',
      devisLong: 'Devis Gratuit sous 24h',
      whatsappShort: 'WhatsApp 24/7',
      whatsappLong: 'Contactez-nous sur WhatsApp',
    },
    sections: {
      forWho: 'Pour qui ?',
      areasCovered: (city) => `Zones couvertes à ${city}`,
      process: 'Notre processus en 4 étapes',
      pricing: 'Facteurs influençant le prix',
      faq: 'Questions fréquentes',
      finalCta: (service, city) => `Besoin de ${service} à ${city} ?`,
      finalCtaSubtitle: 'Devis gratuit sous 24h • Intervention rapide • Garantie décennale',
      finalCtaDevis: 'Demander un devis gratuit',
      finalCtaWhatsapp: 'WhatsApp 24/7',
    },
  },
  nl: {
    cta: {
      devisShort: 'Gratis offerte 24u',
      devisLong: 'Gratis offerte binnen 24u',
      whatsappShort: 'WhatsApp 24/7',
      whatsappLong: 'Contacteer ons via WhatsApp',
    },
    sections: {
      forWho: 'Voor wie?',
      areasCovered: (city) => `Zones bediend in ${city}`,
      process: 'Ons proces in 4 stappen',
      pricing: 'Prijsbepalende factoren',
      faq: 'Veelgestelde vragen',
      finalCta: (service, city) => `${service} nodig in ${city}?`,
      finalCtaSubtitle: 'Gratis offerte binnen 24u • Snelle interventie • Tienjarige garantie',
      finalCtaDevis: 'Gratis offerte aanvragen',
      finalCtaWhatsapp: 'WhatsApp 24/7',
    },
  },
  en: {
    cta: {
      devisShort: 'Free quote 24h',
      devisLong: 'Free quote within 24h',
      whatsappShort: 'WhatsApp 24/7',
      whatsappLong: 'Contact us on WhatsApp',
    },
    sections: {
      forWho: 'For whom?',
      areasCovered: (city) => `Areas covered in ${city}`,
      process: 'Our 4-step process',
      pricing: 'Factors affecting the price',
      faq: 'Frequently asked questions',
      finalCta: (service, city) => `Need ${service} in ${city}?`,
      finalCtaSubtitle: 'Free quote within 24h • Quick response • 10-year warranty',
      finalCtaDevis: 'Request a free quote',
      finalCtaWhatsapp: 'WhatsApp 24/7',
    },
  },
};

const COMMUNE_LABELS: Record<Lang, CommunePageLabels> = {
  fr: {
    cta: {
      devis: 'Devis Gratuit 24h',
      whatsapp: 'WhatsApp 24/7',
    },
    sections: {
      ourServices: (city) => `Nos services à ${city}`,
      whyUs: (city) => `Pourquoi choisir Vericore à ${city} ?`,
      neighborhoods: (city) => `Quartiers de ${city} où nous intervenons`,
      proximity: 'Proximité',
      proximityDesc: (city) => `Interventions rapides partout à ${city}`,
      expertise: 'Expertise',
      expertiseDesc: '+10 ans d\'expérience à Bruxelles',
      availability: 'Disponibilité',
      availabilityDesc: 'Service 24/7 pour urgences',
      warranty: 'Garantie',
      warrantyDesc: 'Garantie décennale sur tous travaux',
      finalCta: (city) => `Besoin de travaux à ${city} ?`,
      finalCtaSubtitle: 'Devis gratuit sous 24h • Intervention rapide • Garantie décennale',
      finalCtaDevis: 'Demander un devis',
      finalCtaWhatsapp: 'WhatsApp',
      serviceLinks: [
        { name: 'Rénovation complète', icon: '🏗️', description: 'Rénovation de maisons et appartements', linkPrefix: 'renovation' },
        { name: 'Électricité', icon: '⚡', description: 'Installation et dépannage électrique', linkPrefix: 'electricite' },
        { name: 'Plomberie', icon: '🔧', description: 'Plomberie et sanitaire', linkPrefix: 'plomberie' },
        { name: 'Chauffage', icon: '🔥', description: 'Installation et entretien chauffage', linkPrefix: 'chauffage' },
        { name: 'Menuiserie', icon: '🪵', description: 'Menuiserie intérieure et extérieure', linkPrefix: 'menuiserie' },
        { name: 'Peinture', icon: '🎨', description: 'Peinture intérieure et extérieure', linkPrefix: 'peinture' },
      ],
    },
  },
  nl: {
    cta: {
      devis: 'Gratis offerte 24u',
      whatsapp: 'WhatsApp 24/7',
    },
    sections: {
      ourServices: (city) => `Onze diensten in ${city}`,
      whyUs: (city) => `Waarom kiezen voor Vericore in ${city}?`,
      neighborhoods: (city) => `Wijken van ${city} waar we actief zijn`,
      proximity: 'Nabijheid',
      proximityDesc: (city) => `Snelle interventies in heel ${city}`,
      expertise: 'Expertise',
      expertiseDesc: 'Meer dan 10 jaar ervaring in Brussel',
      availability: 'Beschikbaarheid',
      availabilityDesc: '24/7 service voor noodgevallen',
      warranty: 'Garantie',
      warrantyDesc: 'Tienjarige garantie op alle werken',
      finalCta: (city) => `Werken nodig in ${city}?`,
      finalCtaSubtitle: 'Gratis offerte binnen 24u • Snelle interventie • Tienjarige garantie',
      finalCtaDevis: 'Offerte aanvragen',
      finalCtaWhatsapp: 'WhatsApp',
      serviceLinks: [
        { name: 'Volledige renovatie', icon: '🏗️', description: 'Renovatie van huizen en appartementen', linkPrefix: 'renovation' },
        { name: 'Elektriciteit', icon: '⚡', description: 'Installatie en depannage', linkPrefix: 'electricite' },
        { name: 'Loodgieterij', icon: '🔧', description: 'Loodgieterij en sanitair', linkPrefix: 'plomberie' },
        { name: 'Verwarming', icon: '🔥', description: 'Installatie en onderhoud verwarming', linkPrefix: 'chauffage' },
        { name: 'Schrijnwerk', icon: '🪵', description: 'Binnen- en buitenschrijnwerk', linkPrefix: 'menuiserie' },
        { name: 'Schilderwerk', icon: '🎨', description: 'Binnen- en buitenschilderwerk', linkPrefix: 'peinture' },
      ],
    },
  },
  en: {
    cta: {
      devis: 'Free quote 24h',
      whatsapp: 'WhatsApp 24/7',
    },
    sections: {
      ourServices: (city) => `Our services in ${city}`,
      whyUs: (city) => `Why choose Vericore in ${city}?`,
      neighborhoods: (city) => `Neighbourhoods of ${city} we serve`,
      proximity: 'Proximity',
      proximityDesc: (city) => `Fast response throughout ${city}`,
      expertise: 'Expertise',
      expertiseDesc: '10+ years of experience in Brussels',
      availability: 'Availability',
      availabilityDesc: '24/7 service for emergencies',
      warranty: 'Warranty',
      warrantyDesc: '10-year warranty on all work',
      finalCta: (city) => `Need work done in ${city}?`,
      finalCtaSubtitle: 'Free quote within 24h • Quick response • 10-year warranty',
      finalCtaDevis: 'Request a quote',
      finalCtaWhatsapp: 'WhatsApp',
      serviceLinks: [
        { name: 'Full renovation', icon: '🏗️', description: 'Renovation of houses and apartments', linkPrefix: 'renovation' },
        { name: 'Electricity', icon: '⚡', description: 'Installation and repair', linkPrefix: 'electricite' },
        { name: 'Plumbing', icon: '🔧', description: 'Plumbing and sanitary', linkPrefix: 'plomberie' },
        { name: 'Heating', icon: '🔥', description: 'Heating installation and maintenance', linkPrefix: 'chauffage' },
        { name: 'Carpentry', icon: '🪵', description: 'Interior and exterior carpentry', linkPrefix: 'menuiserie' },
        { name: 'Painting', icon: '🎨', description: 'Interior and exterior painting', linkPrefix: 'peinture' },
      ],
    },
  },
};

export const getServiceLabels = (lang: Lang): ServicePageLabels => SERVICE_LABELS[lang] ?? SERVICE_LABELS.fr;
export const getCommuneLabels = (lang: Lang): CommunePageLabels => COMMUNE_LABELS[lang] ?? COMMUNE_LABELS.fr;
