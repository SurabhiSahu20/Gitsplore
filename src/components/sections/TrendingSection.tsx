import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Flame } from 'lucide-react';
import { useTrendingRepositories } from '../../hooks/useRepositories';
import { useThemeStore } from '../../store/useThemeStore';
import { RepositoryGrid } from '../repository/RepositoryGrid';
import { Button } from '../ui/Button';

const TRENDING_LANGUAGES = [
  { name: 'All', value: '' },
  { name: 'JavaScript', value: 'JavaScript' },
  { name: 'TypeScript', value: 'TypeScript' },
  { name: 'Python', value: 'Python' },
  { name: 'Go', value: 'Go' },
  { name: 'Rust', value: 'Rust' },
];

export const TrendingSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { isDark } = useThemeStore();
  const { data, isLoading, error } = useTrendingRepositories(selectedLanguage || undefined);

  return (
    <section id="trending" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Flame className={`w-8 h-8 mr-3 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Trending This Week</h2>
            <TrendingUp className={`w-8 h-8 ml-3 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
          </div>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Discover the hottest repositories that are gaining momentum in the developer community
          </p>
        </motion.div>

        {/* Language Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {TRENDING_LANGUAGES.map((lang) => (
            <Button
              key={lang.value}
              variant={selectedLanguage === lang.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage(lang.value)}
              className="transition-all duration-200"
            >
              {lang.name}
            </Button>
          ))}
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-red-400 text-lg mb-2">Failed to load trending repositories</div>
            <p className="text-gray-400">Please try again later</p>
          </motion.div>
        )}

        {/* Results */}
        {data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`flex items-center space-x-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                <Calendar className="w-4 h-4" />
                <span>Last 7 days</span>
                {selectedLanguage && (
                  <>
                    <span>•</span>
                    <span>{selectedLanguage}</span>
                  </>
                )}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                <div className={`text-lg mb-2 ${isDark ? 'text-red-400' : 'text-red-500'}`}>Failed to load trending repositories</div>
                <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>Please try again later</p>
              </div>
            </div>
            
            <RepositoryGrid repositories={data.items} isLoading={isLoading} />
          </motion.div>
        )}

        {isLoading && <RepositoryGrid repositories={[]} isLoading={true} />}
      </div>
    </section>
  );
};