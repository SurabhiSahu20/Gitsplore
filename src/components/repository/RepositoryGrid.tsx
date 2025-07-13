import React from 'react';
import { motion } from 'framer-motion';
import { GitHubRepository } from '../../types/github';
import { useThemeStore } from '../../store/useThemeStore';
import { RepositoryCard } from './RepositoryCard';

interface RepositoryGridProps {
  repositories: GitHubRepository[];
  isLoading?: boolean;
}

export const RepositoryGrid: React.FC<RepositoryGridProps> = ({ 
  repositories, 
  isLoading = false 
}) => {
  const { isDark } = useThemeStore();
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`backdrop-blur-sm border rounded-xl p-6 animate-pulse ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800' 
                : 'bg-white/70 border-slate-200'
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
              <div className="flex-1">
                <div className={`h-4 rounded w-3/4 mb-2 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
                <div className={`h-3 rounded w-1/2 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className={`h-3 rounded ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
              <div className={`h-3 rounded w-5/6 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
            </div>
            <div className="flex space-x-2 mb-4">
              <div className={`h-5 rounded w-16 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
              <div className={`h-5 rounded w-20 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
            </div>
            <div className="flex justify-between items-center">
              <div className={`h-4 rounded w-24 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
              <div className={`h-4 rounded w-20 ${isDark ? 'bg-gray-700' : 'bg-slate-300'}`} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">🔍</div>
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>No repositories found</h3>
        <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>Try adjusting your search terms or filters</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repository, index) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
          index={index}
        />
      ))}
    </div>
  );
};