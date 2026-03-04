import React from 'react';
import RepoCard from './RepoCard';
import { portfolioData } from '../data';

export default function RepositoryList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">Popular Repositories</h2>
        <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-brand-green text-sm hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.repositories.map((repo, index) => (
          <RepoCard key={index} {...repo} />
        ))}
      </div>
    </div>
  );
}
