import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Sparkles } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

export const Footer: React.FC = () => {
  const { isDark } = useThemeStore();
  
  return (
    <footer className={`border-t py-12 ${
      isDark 
        ? 'bg-gray-950/80 border-gray-800' 
        : 'bg-slate-50/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="relative">
                <Github className={`w-8 h-8 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <Sparkles className={`w-4 h-4 absolute -top-1 -right-1 animate-pulse ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  isDark 
                    ? 'from-indigo-400 to-cyan-400' 
                    : 'from-indigo-600 to-cyan-600'
                }`}>
                  Gitsplore
                </h3>
                <p className={`text-xs -mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Explore the Universe</p>
              </div>
            </motion.div>
            <p className={`mb-4 max-w-md ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Next-generation GitHub repository explorer built with modern web technologies. 
              Discover, analyze, and connect with the open-source community.
            </p>
            <div className={`flex items-center text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              <span>Made with</span>
              <Heart className={`w-4 h-4 mx-1 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
              <span>by developers, for developers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Explore</h4>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('trending');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  Trending Repos
                </button>
              </li>
              <li>
                <a href="#explore" className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}>
                  Search Repositories
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}>
                  Popular Languages
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}>
                  Open Source Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Resources</h4>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              <li>
                <a 
                  href="https://docs.github.com/en/rest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  GitHub API
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('explore');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  Documentation
                </button>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}>
                  API Status
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                }`}>
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between ${
          isDark ? 'border-gray-800' : 'border-slate-200'
        }`}>
          <div className={`text-sm mb-4 md:mb-0 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            © 2024 Gitsplore. Built with React, TypeScript, and the GitHub API.
          </div>
          <div className={`flex items-center space-x-6 text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            <a href="#" className={`transition-colors ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}>Privacy</a>
            <a href="#" className={`transition-colors ${
              isDark ? 'hover:text-white' : 'hover:text-slate-900'
            }`}>Terms</a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors flex items-center ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              }`}
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
