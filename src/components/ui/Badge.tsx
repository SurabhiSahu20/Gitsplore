import React from 'react';
import { clsx } from 'clsx';
import { useThemeStore } from '../../store/useThemeStore';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'language' | 'stars' | 'forks';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const { isDark } = useThemeStore();
  
  const variants = isDark ? {
    default: 'bg-gray-800 text-gray-300 border-gray-700',
    language: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    stars: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    forks: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  } : {
    default: 'bg-slate-100 text-slate-700 border-slate-300',
    language: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    stars: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    forks: 'bg-cyan-100 text-cyan-700 border-cyan-300',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};