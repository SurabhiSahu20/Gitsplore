import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Eye, Calendar, ExternalLink, User } from 'lucide-react';
import { GitHubRepository } from '../../types/github';
import { useThemeStore } from '../../store/useThemeStore';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface RepositoryCardProps {
  repository: GitHubRepository;
  index: number;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository, index }) => {
  const { isDark } = useThemeStore();
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      Go: '#00ADD8',
      Rust: '#dea584',
      'C++': '#f34b7d',
      'C#': '#239120',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
    };
    return colors[language || ''] || '#6b7280';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              className={`w-10 h-10 rounded-full border-2 transition-colors ${
                isDark 
                  ? 'border-gray-700 group-hover:border-indigo-500' 
                  : 'border-slate-300 group-hover:border-indigo-400'
              }`}
            />
            <div className="min-w-0 flex-1">
              <h3 className={`text-lg font-semibold truncate transition-colors ${
                isDark 
                  ? 'text-white group-hover:text-indigo-400' 
                  : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {repository.name}
              </h3>
              <p className={`text-sm flex items-center ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                <User className="w-3 h-3 mr-1" />
                {repository.owner.login}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(repository.html_url, '_blank')}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
          {repository.description || 'No description available'}
        </p>

        {/* Topics */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {repository.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="default" className="text-xs">
                {topic}
              </Badge>
            ))}
            {repository.topics.length > 3 && (
              <Badge variant="default" className="text-xs">
                +{repository.topics.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Stats */}
        <div className={`flex items-center justify-between text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
              <span>{formatNumber(repository.stargazers_count)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} />
              <span>{formatNumber(repository.forks_count)}</span>
            </div>
            {repository.open_issues_count > 0 && (
              <div className="flex items-center space-x-1">
                <Eye className={`w-4 h-4 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />
                <span>{repository.open_issues_count}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-gray-800' : 'border-slate-200'}`}>
          <div className="flex items-center space-x-3">
            {repository.language && (
              <div className="flex items-center space-x-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(repository.language) }}
                />
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{repository.language}</span>
              </div>
            )}
            {repository.license && (
              <Badge variant="default" className="text-xs">
                {repository.license.spdx_id}
              </Badge>
            )}
          </div>
          <div className={`flex items-center text-xs ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(repository.updated_at)}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};