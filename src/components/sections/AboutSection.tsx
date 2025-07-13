import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Zap, 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  Star, 
  GitFork,
  Code,
  Sparkles
} from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';
import { Card } from '../ui/Card';

export const AboutSection: React.FC = () => {
  const { isDark } = useThemeStore();

  const features = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'Advanced search with intelligent filtering and real-time suggestions',
      color: isDark ? 'text-cyan-400' : 'text-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Trending Insights',
      description: 'Discover what\'s hot in the developer community this week',
      color: isDark ? 'text-green-400' : 'text-green-600'
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Filter by language, stars, forks, and activity with precision',
      color: isDark ? 'text-purple-400' : 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with intelligent caching and prefetching',
      color: isDark ? 'text-yellow-400' : 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Explore contributor networks and community engagement metrics',
      color: isDark ? 'text-indigo-400' : 'text-indigo-600'
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'Built by developers, for developers with modern tech stack',
      color: isDark ? 'text-orange-400' : 'text-orange-600'
    }
  ];

  const stats = [
    { label: 'Repositories Indexed', value: '100M+', icon: '📚' },
    { label: 'Languages Supported', value: '500+', icon: '💻' },
    { label: 'Developers Connected', value: '50M+', icon: '👥' },
    { label: 'Search Queries/Day', value: '1M+', icon: '🔍' }
  ];

  const techStack = [
    { name: 'React 18', description: 'Modern React with concurrent features' },
    { name: 'TypeScript', description: 'Type-safe development experience' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Framer Motion', description: 'Production-ready motion library' },
    { name: 'Tanstack Query', description: 'Powerful data synchronization' },
    { name: 'Zustand', description: 'Lightweight state management' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className={`w-8 h-8 mr-3 animate-pulse ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              About Gitsplore
            </h2>
            <Github className={`w-8 h-8 ml-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
          </div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Gitsplore reimagines GitHub exploration with a cosmic-inspired interface that makes 
            discovering open-source projects an engaging and visually stunning experience.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="text-center p-8 md:p-12" glow>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Mission
            </h3>
            <p className={`text-lg leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              To transform how developers discover, explore, and connect with open-source projects. 
              We believe that finding the right repository should be as exciting as the code itself, 
              combining powerful search capabilities with an interface that inspires creativity and exploration.
            </p>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Powerful Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                  <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h4>
                  <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark 
                    ? 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Built with Modern Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/30 border-gray-800 hover:border-indigo-500/50' 
                    : 'bg-white/50 border-slate-200 hover:border-indigo-300'
                }`}
              >
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {tech.name}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="p-8 md:p-12" glow>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to Explore?
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              Join thousands of developers who use Gitsplore to discover their next favorite project, 
              contribute to open source, and stay connected with the latest trends in technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('explore');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:from-indigo-600 hover:to-cyan-600 shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:from-indigo-700 hover:to-cyan-700 shadow-lg hover:shadow-xl'
                }`}
              >
                <Search className="w-5 h-5 inline mr-2" />
                Start Exploring
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-xl font-semibold border transition-all duration-300 ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white' 
                    : 'border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-slate-900'
                }`}
              >
                <Github className="w-5 h-5 inline mr-2" />
                View on GitHub
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};