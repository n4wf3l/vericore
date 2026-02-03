export interface Plan {
  id: string;
  name: string;
  badge: string;
  emoji: string;
  color: string;
  tagline: string;
  ideal: string;
  features: string[];
  price: string;
  priceNote: string;
}

export const plans: Plan[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    badge: 'Entretien & Prévention',
    emoji: '🟤',
    color: 'from-amber-900/20 to-amber-800/10',
    tagline: 'Idéal pour petits immeubles, commerces, propriétaires uniques',
    ideal: 'Petits immeubles, commerces, propriétaires uniques',
    features: [
      '1 à 2 visites préventives par an',
      'Contrôle des installations principales',
      'Rapport annuel',
      '2 interventions correctives incluses (max. 2h chacune)',
      'Délai d\'intervention standard',
      'Tarif préférentiel au-delà du quota'
    ],
    price: '200 à 350 € / mois',
    priceNote: 'Tarif indicatif — ajustable après analyse sur photos et contrôle sur place'
  },
  {
    id: 'silver',
    name: 'Silver',
    badge: 'Maintenance Active',
    emoji: '⚪',
    color: 'from-slate-400/20 to-slate-300/10',
    tagline: 'Suivi régulier et interventions prioritaires',
    ideal: 'Immeubles résidentiels, copropriétés moyennes',
    features: [
      '3 à 4 visites préventives par an',
      'Hotline technique',
      '4 interventions incluses (max. 2h chacune)',
      'Délai d\'intervention accéléré',
      'Rapport trimestriel',
      'Historique technique du site',
      'Tarif réduit hors forfait'
    ],
    price: '400 à 700 € / mois',
    priceNote: 'Fourchette indicative — prix ajusté après audit technique et visite sur site'
  },
  {
    id: 'gold',
    name: 'Gold',
    badge: 'Gestion Technique Complète',
    emoji: '🟡',
    color: 'from-yellow-500/20 to-yellow-400/10',
    tagline: 'Prise en charge globale et suivi approfondi',
    ideal: 'Immeubles de bureaux, sites multi-équipements',
    features: [
      '6 à 8 visites préventives par an',
      'Priorité 24/7',
      '8 à 12 interventions incluses',
      'Technicien référent dédié',
      'Référencement technique complet',
      'Reporting mensuel détaillé',
      'Budget annuel prévisionnel',
      'Coordination technique multi-corps d\'état'
    ],
    price: '800 à 1 300 € / mois',
    priceNote: 'Selon surface, équipements et criticité — validation finale après contrôle technique sur place'
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Partenaire Technique Dédié',
    emoji: '🔴',
    color: 'from-red-600/20 to-red-500/10',
    tagline: 'Accompagnement stratégique sur-mesure',
    ideal: 'Grands sites, patrimoines complexes',
    features: [
      'Quota mensuel d\'heures incluses',
      'Astreinte renforcée 24/7',
      'Plan pluriannuel de maintenance',
      'Audit annuel approfondi',
      'Interlocuteur unique dédié',
      'SLA contractuels garantis',
      'Reporting exécutif mensuel',
      'Pilotage stratégique et conseil'
    ],
    price: 'Sur devis',
    priceNote: 'Généralement à partir de 1 600 € / mois — après audit complet et définition précise du périmètre'
  }
];
