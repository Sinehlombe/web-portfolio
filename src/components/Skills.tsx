import React from 'react';
import { portfolioData, skillLevels } from '../data';
import { Code2, Database, Layout, Brain, Server, Terminal, Star, Calendar } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Languages", icon: <Code2 />, skills: skills.languages },
    { title: "Frontend", icon: <Layout />, skills: skills.frontend },
    { title: "Backend", icon: <Server />, skills: skills.backend },
    { title: "AI & ML", icon: <Brain />, skills: skills.ai_ml },
    { title: "Databases", icon: <Database />, skills: skills.databases },
    { title: "Cloud & DevOps", icon: <Terminal />, skills: skills.cloud },
  ];

  const getLevelColor = (skillName: string) => {
    // Mark React as Expert, others as Intermediate
    if (skillName === 'React.js') {
      return 'text-green-400';
    }
    return 'text-blue-400';
  };

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
         <span className="text-brand-green mr-2">#</span> Technical Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md hover:border-brand-green transition-all group hover-lift animated-border">
            <div className="flex items-center mb-3">
              <div className="text-gray-400 mr-2 group-hover:text-brand-green transition-colors">
                {React.cloneElement(category.icon as React.ReactElement, { size: 20 })}
              </div>
              <h4 className="text-sm font-semibold text-white">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => {
                const skillName = typeof skill === 'string' ? skill : skill.name;
                const levelClass = getLevelColor(skillName);
                return (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 bg-[#161b22] text-sm rounded-full border border-[#30363d] hover:border-brand-green transition-colors ${levelClass}`}
                  >
                    {skillName}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Simple Skills Summary */}
      <div className="mt-6 p-4 bg-[#161b22] border border-[#30363d] rounded-md">
        <p className="text-gray-300 text-sm leading-relaxed">
          My technical expertise spans full-stack development, AI/ML engineering, and cloud technologies. 
          I specialize in building intelligent applications that leverage AI for enhanced functionality and business value.
        </p>
      </div>
    </div>
  );
}
