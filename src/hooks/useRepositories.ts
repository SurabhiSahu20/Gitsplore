import { useQuery } from '@tanstack/react-query';
import { githubService } from '../services/github';
import { SearchFilters } from '../types/github';

export const useRepositories = (query: string, filters: SearchFilters, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['repositories', query, filters],
    queryFn: () => githubService.searchRepositories(query, filters),
    enabled: enabled && query.length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export const useTrendingRepositories = (language?: string) => {
  return useQuery({
    queryKey: ['trending', language],
    queryFn: () => githubService.getTrendingRepositories(language),
    staleTime: 30 * 60 * 1000, // 30 minutes
    retry: 2,
  });
};