import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Clock } from 'lucide-react';
import { useSearchStore } from '../../store/useSearchStore';
import { useThemeStore } from '../../store/useThemeStore';

export const SearchBar: React.FC = () => {
  const { query, recentSearches, setQuery, addRecentSearch, clearRecentSearches } = useSearchStore();
  const { isDark } = useThemeStore();
  const [isFocused, setIsFocused] = useState(false);
  const [localQuery, setLocalQuery] = useState(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setQuery(localQuery.trim());
      addRecentSearch(localQuery.trim());
      setIsFocused(false);
    }
  };

  const handleRecentSearch = (search: string) => {
    setLocalQuery(search);
    setQuery(search);
    setIsFocused(false);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused
              ? isDark 
                ? '0 0 0 2px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.2)'
                : '0 0 0 2px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.1)'
              : isDark 
                ? '0 0 0 1px rgba(75, 85, 99, 0.3)'
                : '0 0 0 1px rgba(148, 163, 184, 0.3)',
          }}
          className={`relative backdrop-blur-sm rounded-xl border overflow-hidden ${
            isDark 
              ? 'bg-gray-900/50 border-gray-700' 
              : 'bg-white/70 border-slate-300'
          }`}
        >
          <div className="flex items-center">
            <Search className={`w-5 h-5 ml-4 ${isDark ? 'text-gray-400' : 'text-slate-500'}`} />
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search repositories... (e.g., 'react', 'machine learning', 'blockchain')"
              className={`w-full px-4 py-4 bg-transparent focus:outline-none ${
                isDark 
                  ? 'text-white placeholder-gray-400' 
                  : 'text-slate-900 placeholder-slate-500'
              }`}
            />
            {localQuery && (
              <button
                type="button"
                onClick={() => {
                  setLocalQuery('');
                  setQuery('');
                }}
                className={`p-2 transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </form>

      {/* Recent Searches Dropdown */}
      {isFocused && recentSearches.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-full mt-2 w-full backdrop-blur-sm border rounded-xl shadow-xl z-50 ${
            isDark 
              ? 'bg-gray-900/95 border-gray-700' 
              : 'bg-white/95 border-slate-300'
          }`}
        >
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm flex items-center ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                <Clock className="w-4 h-4 mr-1" />
                Recent Searches
              </span>
              <button
                onClick={clearRecentSearches}
                className={`text-xs transition-colors ${
                  isDark 
                    ? 'text-gray-500 hover:text-gray-300' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Clear
              </button>
            </div>
            <div className="space-y-1">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearch(search)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:bg-gray-800' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};