import React from 'react';
import { portfolioData } from '../data';
import { Mail, Download, ExternalLink, Code, Calendar } from 'lucide-react';

/**
 * Hero component for the main landing section
 * Displays personal information, highlights, and call-to-action buttons
 */
export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <div className="mb-8 bg-[#0d1117] border border-[#30363d] rounded-md p-6 hover-lift">
      <div className="flex flex-col md:flex-row gap-8 items-start fade-in stagger-1">
        <div className="flex-1">
          
          <h1 className="text-4xl font-bold text-white mb-3 fade-in stagger-2">
            Welcome to my Digital Garden <span className="text-brand-green ml-2 animate-pulse"></span>
          </h1>
          <h2 className="text-xl text-gray-400 mb-4 font-mono fade-in stagger-3">
            Hi, I'm {personalInfo.name} - {personalInfo.title}
          </h2>
          
          <div className="mb-6 fade-in stagger-4">
            <p className="text-gray-300 mb-4 leading-relaxed border-l-2 border-brand-green pl-4 text-lg">
              {personalInfo.summary}
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed border-l-2 border-brand-green pl-4 text-lg">
              I'm a passionate AI & Full-Stack Engineer with almost 3 years of experience crafting intelligent systems and scalable applications. My expertise spans the full development lifecycle, from ideation to deployment, with a focus on leveraging artificial intelligence to solve complex problems.
            </p>
            
            {/* Highlights Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-brand-green font-bold text-xl">🎓</div>
                <div className="text-xs text-gray-400">Full-stack Engineer</div>
              </div>
              <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-brand-green font-bold text-xl">🏗️</div>
                <div className="text-xs text-gray-400">Backend developer</div>
              </div>
              <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-brand-green font-bold text-xl">🧠</div>
                <div className="text-xs text-gray-400">Multi-Architect Security  Guru</div>
              </div>
              <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-brand-green font-bold text-xl">💻</div>
                <div className="text-xs text-gray-400">AI Advanced</div>
              </div>
            </div>
          </div>
          
          {/* Contribution Activity Section */}
          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-md mb-6 fade-in stagger-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold flex items-center">
                <Calendar className="h-4 w-4 text-brand-green mr-2" />
                Contribution Activity
              </h3>
              <span className="text-xs text-gray-500">Last 12 months</span>
            </div>
            
            <div className="flex items-center justify-center p-4">
              <div className="flex flex-wrap gap-1 max-w-full overflow-x-auto">
                {Array.from({ length: 52 * 7 }).map((_, index) => {
                  const contributionCount = Math.floor(Math.random() * 5); // Random contribution count
                  const colorClasses = [
                    "bg-[#161b22] border-[#30363d]", // No contribution
                    "bg-[#0e4429] border-[#0d2d1d]", // Low
                    "bg-[#006d32] border-[#0d2d1d]", // Medium
                    "bg-[#26a641] border-[#0d2d1d]", // High
                    "bg-[#39d353] border-[#0d2d1d]"  // Highest
                  ];
                  const colorClass = colorClasses[contributionCount];
                  
                  return (
                    <div
                      key={index}
                      className={`w-2 h-2 border rounded-sm ${colorClass} tooltip`}
                      title={`Contribution on day ${index}`}
                    />
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center justify-end text-xs text-gray-500">
              <span className="mr-2">Less</span>
              <div className="flex space-x-1 mr-2">
                <div className="w-2 h-2 bg-[#161b22] border border-[#30363d] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#0e4429] border border-[#0d2d1d] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#006d32] border border-[#0d2d1d] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#26a641] border border-[#0d2d1d] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#39d353] border border-[#0d2d1d] rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
          
          {/* Professional Expertise */}
          <div className="bg-[#0d1117] border border-[#30363d] p-5 rounded-md mb-6 fade-in stagger-5">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-brand-green mr-2">#</span> Professional Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                <div className="text-brand-green text-lg mb-2">🤖</div>
                <h4 className="text-white font-medium mb-1">Full-stack Engineering</h4>
                <p className="text-xs text-gray-400">Creating scalable applications with React, Python, Node.js, and FastAPI</p>
              </div>
              <div className="p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                <div className="text-brand-green text-lg mb-2">🌐</div>
                <h4 className="text-white font-medium mb-1">Backend Architecture & Security</h4>
                <p className="text-xs text-gray-400">Designing secure systems with PostgreSQL, Docker, and CI/CD pipelines</p>
              </div>
              <div className="p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                <div className="text-brand-green text-lg mb-2">☁️</div>
                <h4 className="text-white font-medium mb-1">AI Integration </h4>
                <p className="text-xs text-gray-400">Building intelligent systems with Python, FastAPI, and AI-driven features</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 fade-in stagger-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-brand-green hover:bg-brand-neon rounded-md transition-all border border-black shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-300 bg-[#161b22] hover:bg-[#30363d] rounded-md transition-all border border-[#30363d] hover:border-brand-green hover-lift"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-300 bg-[#161b22] hover:bg-[#30363d] rounded-md transition-all border border-[#30363d] hover:border-brand-green hover-lift"
            >
              <Code className="mr-2 h-4 w-4" />
              GitHub
            </a>
            
            <a
              href="/Onwaba Nobhitywana- Fullstack Engineer.pdf"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-300 bg-[#161b22] hover:bg-[#30363d] rounded-md transition-all border border-[#30363d] hover:border-brand-green hover-lift"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
