import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Star, GitFork, Calendar, TrendingUp } from 'lucide-react';
import { useSearchStore } from '../../store/useSearchStore';
import { useThemeStore } from '../../store/useThemeStore';
import { Button } from '../ui/Button';

const LANGUAGES = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'C#',
  'PHP', 'Ruby', 'Swift', 'Kotlin', 'Dart', 'Scala', 'R', 'Shell'
];

export const SearchFilters: React.FC = () => {
  const { filters, setFilters } = useSearchStore();
  const { isDark } = useThemeStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`backdrop-blur-sm border rounded-xl p-6 ${
        isDark 
          ? 'bg-gray-900/30 border-gray-800' 
          : 'bg-white/50 border-slate-200'
      }`}
    >
      <div className="flex items-center mb-4">
        <Filter className={`w-5 h-5 mr-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Language Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Language
          </label>
          <select
            value={filters.language}
            onChange={(e) => setFilters({ language: e.target.value })}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            <option value="">All Languages</option>
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Sort By
          </label>
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ sort: e.target.value as any })}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            <option value="stars">
              ⭐ Stars
            </option>
            <option value="forks">
              🍴 Forks
            </option>
            <option value="updated">
              📅 Recently Updated
            </option>
            <option value="created">
              🆕 Recently Created
            </option>
          </select>
        </div>

        {/* Order */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Order
          </label>
          <select
            value={filters.order}
            onChange={(e) => setFilters({ order: e.target.value as any })}
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>

        {/* Minimum Stars */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Min Stars
          </label>
          <input
            type="number"
            value={filters.minStars}
            onChange={(e) => setFilters({ minStars: parseInt(e.target.value) || 0 })}
            min="0"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-slate-300 text-slate-900'
            }`}
            placeholder="0"
          />
        </div>
      </div>

      {/* Quick Filter Buttons */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilters({ minStars: 1000, sort: 'stars' })}
          className={isDark ? 'text-yellow-400 hover:bg-yellow-500/10' : 'text-yellow-600 hover:bg-yellow-100'}
        >
          <Star className="w-4 h-4 mr-1" />
          Popular (1K+ stars)
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilters({ minStars: 100, sort: 'forks' })}
          className={isDark ? 'text-cyan-400 hover:bg-cyan-500/10' : 'text-cyan-600 hover:bg-cyan-100'}
        >
          <GitFork className="w-4 h-4 mr-1" />
          Active (100+ forks)
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilters({ sort: 'updated', order: 'desc' })}
          className={isDark ? 'text-green-400 hover:bg-green-500/10' : 'text-green-600 hover:bg-green-100'}
        >
          <Calendar className="w-4 h-4 mr-1" />
          Recently Updated
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilters({ sort: 'created', order: 'desc', minStars: 50 })}
          className={isDark ? 'text-purple-400 hover:bg-purple-500/10' : 'text-purple-600 hover:bg-purple-100'}
        >
          <TrendingUp className="w-4 h-4 mr-1" />
          Trending New
        </Button>
      </div>
    </motion.div>
  );
};