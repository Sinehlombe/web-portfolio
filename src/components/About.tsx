import React from 'react';
import { portfolioData } from '../data';
import { Award, BookOpen, Heart, Target, GraduationCap, Calendar, Cpu, Database, Code } from 'lucide-react';

export default function About() {
  const { personalInfo, interests, goals } = portfolioData;

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      {/* Detailed Description About Me */}
      <div className="bg-[#0d1117] border border-[#30363d] p-6 rounded-md">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          <span className="text-brand-green mr-2">#</span> About Me
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm Onwaba Nobhitywana, a passionate AI & Full-Stack Engineer with almost 3 years of experience crafting intelligent systems and scalable applications. My expertise spans the full development lifecycle, from ideation to deployment, with a focus on leveraging artificial intelligence to solve complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a Cum Laude graduate from Walter Sisulu University, I combine strong academic foundations with practical industry experience. My work focuses on building end-to-end solutions that integrate AI technologies with robust full-stack architectures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in creating intelligent applications that leverage machine learning models, cloud infrastructure, and modern web technologies to deliver exceptional user experiences and business value.
            </p>
          </div>
          
          {/* Developer.py Code Snippet */}
          <div className="bg-[#161b22] p-5 rounded-md border border-[#30363d] hover-lift animated-border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="text-xs text-gray-500 ml-2 font-mono">developer.py</span>
            </div>
            <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
              <code>{`class Developer:
  def __init__(self):
    self.name = "${personalInfo.name.split(' ')[0]}"
    self.role = "AI Engineer"
    self.stack = [
      "Python", "React",
      "FastAPI", "Cloud"
    ]
    
  def code(self):
    return "Building intelligent systems..."
    
  def specialize(self):
    return "AI & Full-Stack"}`}</code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Personal Interests and Goals */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Interests */}
        <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
            <Heart className="h-5 w-5 text-brand-green mr-2" />
            Personal Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests?.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#161b22] text-gray-300 text-sm rounded-full border border-[#30363d] hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        {/* Goals */}
        <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
            <Target className="h-5 w-5 text-brand-green mr-2" />
            Professional Goals
          </h3>
          <ul className="space-y-2">
            {goals?.map((goal, index) => (
              <li key={index} className="flex items-start text-sm text-gray-300">
                <span className="text-brand-green mr-2 mt-1">▸</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
