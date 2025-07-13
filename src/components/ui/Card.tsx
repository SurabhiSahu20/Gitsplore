import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { useThemeStore } from '../../store/useThemeStore';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
}) => {
  const { isDark } = useThemeStore();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      className={clsx(
        isDark 
          ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300'
          : 'bg-white/70 backdrop-blur-sm border border-slate-200 rounded-xl p-6 transition-all duration-300 shadow-sm',
        hover && (isDark 
          ? 'hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
          : 'hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-200/20'),
        glow && (isDark 
          ? 'shadow-lg shadow-cyan-500/20'
          : 'shadow-lg shadow-cyan-200/30'),
        className
      )}
    >
      {children}
    </motion.div>
  );
};