import React from 'react';
import { BrainCircuitIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8">
      <div className="flex items-center justify-center gap-4">
        <BrainCircuitIcon className="w-12 h-12 text-cyan-400" />
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 tracking-tight">
          NextMSC Insights
        </h1>
      </div>
      <p className="mt-3 text-lg text-slate-400">
        AI-Powered Summaries and News from NextMSC.com
      </p>
    </header>
  );
};
