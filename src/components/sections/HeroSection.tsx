import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Search } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export const HeroSection: React.FC = () => {
  const { isDark } = useThemeStore();
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-cyan-900/20' 
          : 'bg-gradient-to-br from-indigo-100/30 via-purple-50/20 to-cyan-100/30'
      }`} />
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-indigo-500/10' : 'bg-indigo-300/20'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-300/20'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className={`w-8 h-8 mr-3 animate-pulse ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
            <span className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Next-Generation GitHub Explorer</span>
            <Sparkles className={`w-8 h-8 ml-3 animate-pulse ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-white via-indigo-200 to-cyan-200' 
                : 'from-slate-900 via-indigo-700 to-cyan-700'
            }`}>
              Explore the
            </span>
            <br />
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-indigo-400 via-purple-400 to-cyan-400' 
                : 'from-indigo-600 via-purple-600 to-cyan-600'
            }`}>
              GitHub Universe
            </span>
          </h1>

          <p className={`text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Discover, analyze, and connect with the most innovative open-source projects. 
            Experience GitHub exploration like never before with our cosmic-powered interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-0.5 rounded-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500' 
                  : 'bg-gradient-to-r from-indigo-600 to-cyan-600'
              }`}
            >
              <div className={`px-8 py-4 rounded-xl flex items-center space-x-2 ${
                isDark ? 'bg-gray-950' : 'bg-white'
              }`}>
                <Search className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Start Exploring Below</span>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                isDark 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Rocket className="w-5 h-5" />
              <span>Powered by GitHub API</span>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Repositories Indexed', value: '100M+', icon: '📚' },
              { label: 'Languages Supported', value: '500+', icon: '💻' },
              { label: 'Developers Connected', value: '50M+', icon: '👥' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};