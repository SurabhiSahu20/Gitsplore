export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  open_issues_count: number;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
    type: string;
  };
  license: {
    name: string;
    spdx_id: string;
  } | null;
}

export interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepository[];
}

export interface SearchFilters {
  language: string;
  sort: 'stars' | 'forks' | 'updated' | 'created';
  order: 'desc' | 'asc';
  minStars: number;
}