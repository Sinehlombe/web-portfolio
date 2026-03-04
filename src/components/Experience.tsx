import React from 'react';
import { portfolioData } from '../data';
import { Briefcase, Code, Award, Users } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
       <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
         <span className="text-brand-green mr-2">#</span> Work Experience
      </h3>
      
      <div className="relative border-l border-[#30363d] ml-3 space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 hover-lift">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#30363d] border-2 border-[#0d1117] group-hover:bg-brand-green transition-all duration-300"></div>

            <div className="mb-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-base font-bold text-white hover:text-brand-green transition-colors cursor-pointer">
                {exp.role}
              </h4>
              <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">{exp.period}</span>
            </div>
            
            <div className="text-sm text-gray-400 mb-3 flex items-center">
              <Briefcase className="h-3 w-3 mr-1.5" />
              {exp.company}
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {exp.description}
            </p>
            
            {/* Technologies used */}
            {exp.technologies && (
              <div className="mb-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Code className="h-3 w-3 mr-1" />
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-[#161b22] text-gray-300 text-xs rounded-full border border-[#30363d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Key Achievements */}
            {exp.achievements && (
              <div className="mb-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Award className="h-3 w-3 mr-1" />
                  Key Achievements
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Projects */}
            {exp.projects && (
              <div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Users className="h-3 w-3 mr-1" />
                  Key Projects
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.projects.map((project, projIndex) => (
                    <span
                      key={projIndex}
                      className="px-2 py-0.5 bg-[#0d1117] text-gray-300 text-xs rounded border border-[#30363d] hover:border-brand-green hover:text-brand-green transition-colors cursor-pointer"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Summary Section */}
      <div className="mt-8 p-4 bg-[#161b22] border border-[#30363d] rounded-md">
        <h4 className="text-white font-semibold mb-2 flex items-center">
          <span className="text-brand-green mr-2">#</span> Professional Summary
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          With {experience.length}+ years of professional experience, I've successfully delivered 
          scalable backend architectures, AI-powered solutions, and full-stack applications. 
          My expertise spans cloud migration, machine learning integration, and modern web development 
          practices. I thrive in collaborative environments and consistently deliver high-quality, 
          production-ready solutions.
        </p>
      </div>
    </div>
  );
}
