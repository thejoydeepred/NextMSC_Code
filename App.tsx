
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { ResultDisplay } from './components/ResultDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { fetchNextMscContent } from './services/geminiService';
import type { SearchResult, ApiError } from './types';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      setError('Please enter a topic to search for.');
      return;
    }
    
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const searchResult = await fetchNextMscContent(query);
      setResult(searchResult);
    } catch (e) {
      const apiError = e as ApiError;
      setError(apiError.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <Header />
        <main>
          <SearchForm
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
          
          {error && (
            <div className="mt-8 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              <p>{error}</p>
            </div>
          )}

          {isLoading && <LoadingSpinner />}
          
          {result && !isLoading && <ResultDisplay result={result} />}

          {!isLoading && !result && !error && (
             <div className="mt-12 text-center text-slate-500">
                <p>Enter a topic to get the latest insights from NextMSC.com.</p>
                <p className="text-sm mt-2">e.g., "latest news", "summary of their recent blog on AI", or "reports on cloud computing"</p>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
