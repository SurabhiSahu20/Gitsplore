import React from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { useRepositories } from '../../hooks/useRepositories';
import { useSearchStore } from '../../store/useSearchStore';
import { useThemeStore } from '../../store/useThemeStore';
import { SearchBar } from '../search/SearchBar';
import { SearchFilters } from '../search/SearchFilters';
import { RepositoryGrid } from '../repository/RepositoryGrid';

export const SearchSection: React.FC = () => {
  const { query, filters } = useSearchStore();
  const { isDark } = useThemeStore();
  const { data, isLoading, error } = useRepositories(query, filters, query.length > 0);

  return (
    <section id="explore" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <SearchIcon className={`w-8 h-8 mr-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Explore Repositories</h2>
            <Filter className={`w-8 h-8 ml-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
          </div>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Search through millions of repositories with advanced filtering and sorting options
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <SearchBar />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <SearchFilters />
        </motion.div>

        {/* Results */}
        {query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {error && (
              <div className="text-center py-12">
                <div className={`text-lg mb-2 ${isDark ? 'text-red-400' : 'text-red-500'}`}>Search failed</div>
                <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>Please try again with different terms</p>
              </div>
            )}

            {data && (
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Search Results for "{query}"
                  </h3>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    {data.total_count.toLocaleString()} repositories found
                  </div>
                </div>
              </div>
            )}

            <RepositoryGrid 
              repositories={data?.items || []} 
              isLoading={isLoading} 
            />
          </motion.div>
        )}

        {!query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Ready to explore?</h3>
            <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>Enter a search term above to discover amazing repositories</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};