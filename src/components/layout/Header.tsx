import React from 'react';
import { motion } from 'framer-motion';
import { Github, Moon, Sun, Sparkles } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        isDark 
          ? 'bg-gray-950/80 border-gray-800' 
          : 'bg-white/80 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Github className={`w-8 h-8 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <Sparkles className={`w-4 h-4 absolute -top-1 -right-1 animate-pulse ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-indigo-400 to-cyan-400' 
                  : 'from-indigo-600 to-cyan-600'
              }`}>
                Gitsplore
              </h1>
              <p className={`text-xs -mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                Explore the Universe
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('explore')}
              className={`transition-colors hover:scale-105 ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Explore
            </button>
            <button 
              onClick={() => scrollToSection('trending')}
              className={`transition-colors hover:scale-105 ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trending
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:scale-105 ${
              isDark 
                ? 'text-gray-300 hover:text-white' 
                : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </button>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};