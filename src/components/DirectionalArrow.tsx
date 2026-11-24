import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface DirectionalArrowProps {
  lang: Language;
  className?: string;
  size?: number;
}

export const DirectionalArrow: React.FC<DirectionalArrowProps> = ({
  lang,
  className = '',
  size = 15,
}) => {
  const Icon = lang === 'ar' ? ArrowLeft : ArrowRight;
  return (
    <Icon
      size={size}
      strokeWidth={1.35}
      className={`inline-block shrink-0 transition-transform duration-500 ease-out ${
        lang === 'ar'
          ? 'group-hover:-translate-x-1'
          : 'group-hover:translate-x-1'
      } ${className}`}
      aria-hidden="true"
    />
  );
};
