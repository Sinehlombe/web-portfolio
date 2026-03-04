import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import { MapPin, Link as LinkIcon, Mail, Building, Code, Award, Calendar, Github } from 'lucide-react';

/* Shows profile image, bio, contact info, skills, and achievements
 */
export default function ProfileSidebar() {
  const { personalInfo } = portfolioData;
  
  // track if profile image loads successfully
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = '/profile.jpeg';
  
  // Check if image exists and update state accordingly
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className="w-full md:w-1/4 md:-mt-8 mb-8 md:mb-0">
      <div className="relative group fade-in stagger-1">
        <div className="w-full aspect-square rounded-full border border-[#30363d] bg-[#0d1117] overflow-hidden shadow-lg md:w-full md:h-auto max-w-[296px] mx-auto md:mx-0 hover-lift">
          
            <div className="w-full h-full bg-[#0d1117] flex items-center justify-center border-2 border-brand-green rounded-full overflow-hidden">
              {imageLoaded ? (
                <img 
                  src="/profile.jpeg" 
                  alt={`${personalInfo.name} profile`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl text-gray-500 font-bold">
                  {personalInfo.username.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
        </div>
        
      </div>

      <div className="mt-4 px-3 md:px-0 fade-in stagger-2">
        <h1 className="text-2xl font-bold text-white leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-gray-400 font-light leading-tight">
          {personalInfo.username}
        </p>
      </div>

      <div className="mt-4 mb-4 px-3 md:px-0 fade-in stagger-2">
        <p className="text-white text-[16px]">
          {personalInfo.bio}
        </p>
      </div>

      <div className="mt-4 mb-6 px-3 md:px-0">
        <button className="w-full bg-[#21262d] border border-[#30363d] text-gray-200 font-semibold py-2 px-4 rounded-md text-sm hover:bg-[#30363d] hover:text-white hover:border-gray-500 transition-colors shadow-sm flex items-center justify-center">
          <Github className="h-4 w-4 mr-2" />
          View GitHub Profile
        </button>
      </div>

      <div className="space-y-2 text-sm text-white px-3 md:px-0 mb-6">
         <div className="flex items-center bg-[#0d1117] p-2 rounded-md border border-[#30363d]">
            <Building className="h-4 w-4 mr-2 text-brand-green" />
            <span className="font-medium">{personalInfo.availability}</span>
        </div>
        <div className="flex items-center bg-[#0d1117] p-2 rounded-md border border-[#30363d]">
            <MapPin className="h-4 w-4 mr-2 text-brand-green" />
            <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center bg-[#0d1117] p-2 rounded-md border border-[#30363d]">
             <Mail className="h-4 w-4 mr-2 text-brand-green" />
             <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-green truncate transition-colors">{personalInfo.email}</a>
        </div>
        <div className="flex items-center bg-[#0d1117] p-2 rounded-md border border-[#30363d]">
            <LinkIcon className="h-4 w-4 mr-2 text-brand-green" />
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green truncate transition-colors">LinkedIn Profile</a>
        </div>
        <div className="flex items-center bg-[#0d1117] p-2 rounded-md border border-[#30363d]">
            <Code className="h-4 w-4 mr-2 text-brand-green" />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green truncate transition-colors">GitHub Profile</a>
        </div>
      </div>
      
      {/* Skills Highlights */}
      <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 mb-6 mx-3 md:mx-0">
        <h3 className="font-bold text-white mb-3 flex items-center">
          <Code className="h-4 w-4 mr-2 text-brand-green" />
          Top Skills
        </h3>
        <div className="space-y-2">
          {[
            { name: "Python", level: "Advanced" },
            { name: "React.js", level: "Advanced" },
            { name: "FastAPI", level: "Advanced" },
            { name: "AI/ML", level: "Beginner" },
            { name: "Supabase", level: "Beginner" }
          ].map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-300">{skill.name}</span>
              <span className="text-xs px-2 py-0.5 bg-[#161b22] text-brand-green rounded-full border border-[#30363d]">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Achievements */}
      <div className="mt-6 pt-6 border-t border-[#30363d] px-3 md:px-0">
        <h3 className="font-bold text-white mb-3 flex items-center">
          <Award className="h-4 w-4 mr-2 text-brand-green" />
          Achievements
        </h3>
        <div className="flex space-x-2">
            <div className="w-14 h-14 rounded-full bg-[#0d1117] flex items-center justify-center text-xl border border-brand-green shadow-sm" title="Pull Shark - 100+ PRs merged">🦈</div>
            <div className="w-14 h-14 rounded-full bg-[#0d1117] flex items-center justify-center text-xl border border-brand-green shadow-sm" title="YOLO - Merged PR on first try">🚀</div>
            <div className="w-14 h-14 rounded-full bg-[#0d1117] flex items-center justify-center text-xl border border-brand-green shadow-sm" title="Quickdraw - Fast reviewer">🤠</div>
            <div className="w-14 h-14 rounded-full bg-[#0d1117] flex items-center justify-center text-xl border border-brand-green shadow-sm" title="Pair Extraordinaire - Collaborative coding">👥</div>
        </div>
        
        {/* Recent Activity */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            Recent Activity
          </h4>
          <div className="text-xs text-gray-400 space-y-1">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span>Pushed to Medical-Agent</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              <span>Advanved API WebTask Management</span>
            </div>
            
              
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
