import { GitHubSearchResponse, SearchFilters } from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

class GitHubService {
  private async request<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Gitsplore-App',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  }

  async searchRepositories(
    query: string,
    filters: SearchFilters,
    page: number = 1,
    perPage: number = 30
  ): Promise<GitHubSearchResponse> {
    const searchQuery = this.buildSearchQuery(query, filters);
    const endpoint = `/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=${filters.sort}&order=${filters.order}&page=${page}&per_page=${perPage}`;
    
    return this.request<GitHubSearchResponse>(endpoint);
  }

  private buildSearchQuery(query: string, filters: SearchFilters): string {
    let searchQuery = query || 'stars:>1';

    if (filters.language) {
      searchQuery += ` language:${filters.language}`;
    }

    if (filters.minStars > 0) {
      searchQuery += ` stars:>=${filters.minStars}`;
    }

    return searchQuery;
  }

  async getTrendingRepositories(language?: string): Promise<GitHubSearchResponse> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const dateString = oneWeekAgo.toISOString().split('T')[0];

    let query = `created:>${dateString} stars:>10`;
    if (language) {
      query += ` language:${language}`;
    }

    const endpoint = `/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`;
    return this.request<GitHubSearchResponse>(endpoint);
  }
}

export const githubService = new GitHubService();