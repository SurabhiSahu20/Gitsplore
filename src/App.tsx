import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useThemeStore } from './store/useThemeStore';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SearchSection } from './components/sections/SearchSection';
import { TrendingSection } from './components/sections/TrendingSection';
import { AboutSection } from './components/sections/AboutSection';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

function App() {
  const { isDark } = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white' 
          : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
      }`}>
        <Header />
        <main>
          <HeroSection />
          <SearchSection />
          <TrendingSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
