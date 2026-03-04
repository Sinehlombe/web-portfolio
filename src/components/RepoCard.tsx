import React from 'react';
import { Star, GitFork, Circle } from 'lucide-react';

interface RepoProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  topics: string[];
}

export default function RepoCard({ name, description, language, stars, forks, updated, url, topics }: RepoProps) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md w-full hover:border-brand-neon transition-colors">
      <div className="flex justify-between items-start">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-[#58a6ff] hover:underline mb-2 block">
          {name}
        </a>
        <span className="text-xs border border-[#30363d] text-[#8b949e] px-2 py-0.5 rounded-full">Public</span>
      </div>
      <p className="text-[#8b949e] text-sm mb-4 h-10 overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.slice(0, 3).map((topic) => (
          <span key={topic} className="px-2 py-0.5 text-xs rounded-full bg-[#121d2f] text-[#58a6ff] border border-[rgba(56,139,253,0.15)]">
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-[#8b949e]">
        <div className="flex items-center gap-1">
          <Circle className="w-3 h-3 fill-brand-green text-brand-green" />
          <span>{language}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
          <Star className="w-4 h-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
          <GitFork className="w-4 h-4" />
          <span>{forks}</span>
        </div>
        <div className="ml-auto">
          Updated {updated}
        </div>
      </div>
    </div>
  );
}
