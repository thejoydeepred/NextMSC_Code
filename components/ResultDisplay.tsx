import React from 'react';
import type { SearchResult } from '../types';
import { LinkIcon } from './icons';

interface ResultDisplayProps {
  result: SearchResult;
}

// Helper component defined outside ResultDisplay to avoid re-creation on re-renders
const SourceLink: React.FC<{ source: { uri: string; title: string } }> = ({ source }) => (
    <a
        href={source.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors duration-200 group"
    >
        <LinkIcon className="w-5 h-5 mt-1 text-slate-500 group-hover:text-cyan-400 shrink-0" />
        <div>
            <p className="font-medium text-cyan-400 group-hover:underline">
                {source.title || 'Untitled Source'}
            </p>
            <p className="text-xs text-slate-500 truncate">{source.uri}</p>
        </div>
    </a>
);


export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const formattedText = result.text
    .split('\n')
    .map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph}
      </p>
    ));

  const validSources = result.sources.filter(s => s.web?.uri && s.web.uri.includes('nextmsc.com'));

  return (
    <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-slate-100">AI Summary</h2>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        {formattedText}
      </div>

      {validSources.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-700">
          <h3 className="text-xl font-semibold mb-4 text-slate-200">Sources from NextMSC.com</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {validSources.map((source, index) =>
              source.web ? <SourceLink key={index} source={source.web} /> : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};
