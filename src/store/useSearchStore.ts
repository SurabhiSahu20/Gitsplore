import { create } from 'zustand';
import { SearchFilters } from '../types/github';

interface SearchState {
  query: string;
  filters: SearchFilters;
  recentSearches: string[];
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  addRecentSearch: (search: string) => void;
  clearRecentSearches: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  filters: {
    language: '',
    sort: 'stars',
    order: 'desc',
    minStars: 0,
  },
  recentSearches: [],
  setQuery: (query: string) => set({ query }),
  setFilters: (newFilters: Partial<SearchFilters>) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  addRecentSearch: (search: string) => {
    const { recentSearches } = get();
    if (search && !recentSearches.includes(search)) {
      set({
        recentSearches: [search, ...recentSearches.slice(0, 4)],
      });
    }
  },
  clearRecentSearches: () => set({ recentSearches: [] }),
}));