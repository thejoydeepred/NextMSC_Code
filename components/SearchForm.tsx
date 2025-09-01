import React from 'react';
import { SearchIcon } from './icons';

interface SearchFormProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ query, setQuery, onSearch, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'latest reports on AI security'"
          className="flex-grow w-full px-5 py-3 text-lg bg-slate-800 border border-slate-700 rounded-full focus:ring-2 focus:ring-cyan-500 focus:outline-none text-slate-100 placeholder-slate-500 transition-shadow duration-300"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors duration-300"
          disabled={isLoading}
        >
          <SearchIcon className="w-5 h-5 mr-2" />
          <span>{isLoading ? 'Searching...' : 'Search'}</span>
        </button>
      </div>
    </form>
  );
};
