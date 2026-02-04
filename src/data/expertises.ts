import { 
  Clock, 
  AlertTriangle, 
  Truck, 
  FileText, 
  BarChart3,
  Smartphone, 
  FileSignature,
  type LucideIcon
} from 'lucide-react';

export interface Expertise {
  id: string;
  title: string;
  teaser: string;
  description: string;
  icon: LucideIcon;
}

export const expertises: Expertise[] = [
  {
    id: 'intervention-247',
    title: 'Processus d\'intervention 24h/7',
    teaser: 'Un processus clair et réactif pour la continuité de service',
    description: 'Nous avons mis en place un processus d\'intervention clair et réactif afin d\'assurer la <strong>continuité de service</strong> pour les bâtiments que nous gérons. Chaque demande est analysée immédiatement, priorisée selon son niveau d\'urgence et orientée vers l\'équipe la plus adaptée. Nos techniciens interviennent avec les informations techniques essentielles du site, ce qui permet une <strong>prise en charge rapide</strong> et efficace dès l\'arrivée sur place. Notre objectif : limiter l\'impact pour les occupants, <strong>sécuriser les installations</strong> et rétablir le fonctionnement normal dans les meilleurs délais.',
    icon: Clock
  },
  {
    id: 'gestion-urgences',
    title: 'Gestion des urgences techniques',
    teaser: 'Disponibilité 24h/7 pour les incidents critiques',
    description: 'Les pannes critiques ne préviennent pas. C\'est pourquoi nous assurons une <strong>disponibilité 24h/7</strong> pour les incidents nécessitant une <strong>action immédiate</strong> : fuites d\'eau, coupures électriques, défaillances HVAC, infiltrations, accès bloqués ou problèmes de sécurité. Nos équipes sont formées pour intervenir en situation sensible, sécuriser temporairement ou définitivement les installations et coordonner les suites nécessaires si des travaux complémentaires sont requis. La <strong>rapidité</strong>, la maîtrise et la <strong>fiabilité</strong> sont au cœur de notre gestion des urgences.',
    icon: AlertTriangle
  },
  {
    id: 'logistique-stock',
    title: 'Organisation logistique & stock embarqué',
    teaser: 'Stock standardisé pour réduire les délais d\'intervention',
    description: 'Afin de réduire au maximum les <strong>délais d\'intervention</strong>, chacune de nos camionnettes est équipée d\'un stock standardisé de pièces et de consommables techniques couvrant les pannes les plus fréquentes. Ce stock est défini selon nos protocoles internes et contrôlé régulièrement afin de garantir une disponibilité immédiate sur site, sans dépendre d\'un approvisionnement de dernière minute. Cette organisation logistique nous permet d\'augmenter notre taux de <strong>résolution dès la première visite</strong>, de limiter les interruptions et d\'<strong>optimiser les coûts</strong> pour nos clients.',
    icon: Truck
  },
  {
    id: 'referencement-technique',
    title: 'Référencement technique des sites',
    teaser: 'Dossier technique détaillé pour chaque site sous contrat',
    description: 'Pour chaque immeuble ou site sous contrat, nous constituons un <strong>dossier technique détaillé</strong> : plans, équipements installés, composants sensibles, historiques d\'intervention et particularités du bâtiment. Ce référencement nous permet d\'anticiper les besoins, de préparer les interventions en amont et d\'envoyer la bonne équipe avec le matériel adapté. Résultat : moins d\'imprévus, des <strong>interventions plus rapides</strong> et une <strong>gestion technique maîtrisée</strong> sur le long terme.',
    icon: FileText
  },
  {
    id: 'reporting-suivi',
    title: 'Reporting & suivi des interventions',
    teaser: 'Transparence totale et traçabilité complète',
    description: 'Chaque intervention fait l\'objet d\'un compte-rendu précis : description du problème, actions réalisées, pièces remplacées, recommandations et éventuelles opérations futures à prévoir. Ce suivi garantit une <strong>transparence totale</strong> et permet aux gestionnaires d\'immeubles de disposer d\'une <strong>vision claire</strong> de l\'état technique de leur patrimoine. Nous privilégions une relation durable fondée sur la <strong>traçabilité</strong>, la communication et l\'anticipation.',
    icon: BarChart3
  },
  {
    id: 'reporting-digital',
    title: 'Reporting digital & suivi en temps réel',
    teaser: 'Plateforme de gestion pour un suivi optimal',
    description: 'Chaque demande d\'intervention est enregistrée dans notre <strong>plateforme interne</strong> de gestion technique. Le client est automatiquement notifié par e-mail à chaque étape clé : prise en charge de la demande, planification, intervention en cours et clôture. Un accès dédié permet de consulter l\'état d\'avancement, l\'historique des interventions et les rapports techniques associés. Ce système garantit une <strong>transparence totale</strong>, une <strong>traçabilité complète</strong> et une communication fluide entre nos équipes et les gestionnaires de sites.',
    icon: Smartphone
  },
  {
    id: 'contrats-maintenance',
    title: 'Contrats de maintenance & accompagnement long terme',
    teaser: 'Partenariat technique de référence pour votre patrimoine',
    description: 'Au-delà des interventions ponctuelles, nous proposons des <strong>contrats de maintenance</strong> sur mesure adaptés aux besoins des immeubles résidentiels, bureaux, commerces et sites industriels. Ces contrats incluent des visites préventives, des contrôles réguliers, une priorisation des urgences, une gestion budgétaire maîtrisée et un interlocuteur dédié. Notre ambition : devenir le <strong>partenaire technique</strong> de référence de nos clients et protéger durablement la <strong>valeur de leur patrimoine</strong> immobilier.',
    icon: FileSignature
  }
];
