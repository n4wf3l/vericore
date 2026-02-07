import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Plan } from '../data/plans';

interface PlanCardProps {
  plan: Plan;
  isActive: boolean;
  position: 'prev' | 'current' | 'next';
}

const accentColors = {
  amber: {
    border: 'border-t-4 border-t-amber-600',
    bg: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-800 border border-amber-200',
    icon: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700 text-white'
  },
  slate: {
    border: 'border-t-4 border-t-slate-500',
    bg: 'bg-slate-50',
    badge: 'bg-slate-100 text-slate-800 border border-slate-200',
    icon: 'text-slate-600',
    button: 'bg-slate-600 hover:bg-slate-700 text-white'
  },
  yellow: {
    border: 'border-t-4 border-t-yellow-500',
    bg: 'bg-yellow-50',
    badge: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    icon: 'text-yellow-600',
    button: 'bg-yellow-600 hover:bg-yellow-700 text-white'
  },
  primary: {
    border: 'border-t-4 border-t-primary-600',
    bg: 'bg-primary-50',
    badge: 'bg-primary-100 text-primary-800 border border-primary-200',
    icon: 'text-primary-600',
    button: 'bg-primary-600 hover:bg-primary-700 text-white'
  }
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, isActive, position: _position }) => {
  const { t } = useTranslation();
  const colors = accentColors[plan.accentColor as keyof typeof accentColors] || accentColors.primary;

  return (
    <div
      className={`
        relative w-full bg-white
        border border-slate-200 rounded-2xl shadow-lg overflow-hidden
        transition-all duration-300
        ${isActive ? 'shadow-2xl' : 'shadow-md'}
        ${colors.border}
      `}
    >
      {/* Header */}
      <div className={`${colors.bg} px-6 py-6 border-b border-slate-200`}>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <plan.icon className={`w-6 h-6 ${colors.icon}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
            {plan.badge}
          </span>
        </div>
        <p className="text-sm text-gray-700 leading-snug">
          {plan.tagline}
        </p>
      </div>

      {/* Features */}
      <div className="px-6 py-6">
        <div className="space-y-2.5">
          {plan.features.slice(0, 6).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-gray-700 leading-tight">{feature}</span>
            </div>
          ))}
          {plan.features.length > 6 && (
            <p className="text-xs text-gray-500 italic mt-3">+ {plan.features.length - 6} {t('plans.moreFeatures')}</p>
          )}
        </div>
      </div>

      {/* Price Bar */}
      <div className="bg-gray-50 border-t border-slate-200 px-6 py-5">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
            <p className="text-xs text-gray-500 mt-1 max-w-xs leading-tight">
              {plan.priceNote}
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className={`w-full inline-block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${colors.button} shadow-sm hover:shadow-md`}
        >
          {t('plans.cta')}
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
