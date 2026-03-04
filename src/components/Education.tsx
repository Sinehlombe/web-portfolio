import { portfolioData } from '../data';
import { BookOpen, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
        {/* header area replicated from WorkExamples for visual impact */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Academic Credentials
        </h1>
        <h2 className="text-2xl text-brand-green mb-3">
          Education & Qualifications
        </h2>
        <div className="text-gray-300 mb-6 border-l-2 border-brand-green pl-4">
          A timeline of formal education highlighting key degrees, honors and coursework
        </div>
      </div>

      <div className="relative ml-3 space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8 hover-lift animated-border bg-[#0d1117] border border-[#30363d] rounded-md p-6"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#30363d] border-2 border-[#0d1117] group-hover:bg-brand-green transition-all duration-300"></div>

            <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-base font-bold text-white hover:text-brand-green transition-colors cursor-pointer">
                {edu.degree}
              </h4>
              <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">
                {edu.period}
              </span>
            </div>

            <div className="text-sm text-gray-400 mb-1 flex items-center">
              <BookOpen className="h-3 w-3 mr-1.5" />
              {edu.institution}
            </div>

            {edu.score && (
              <div className="text-sm text-gray-400 mb-2">
                Score: {edu.score}
              </div>
            )}
            {edu.awarded && (
              <div className="text-sm text-gray-400 mb-2">
                Awarded: {edu.awarded}
              </div>
            )}

            {/* Achievements */}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mb-2">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Award className="h-3 w-3 mr-1" />
                  Achievements
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {edu.achievements.map((ach, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Relevant coursework */}
            {edu.relevant_coursework && edu.relevant_coursework.length > 0 && (
              <div className="mb-2">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Relevant Coursework
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  {edu.relevant_coursework.map((course, cIndex) => (
                    <li key={cIndex} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Section with metric cards */}
      <div className="mt-8 pt-6 border-t border-[#30363d]">
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
          <span className="text-brand-green mr-2">#</span> Academic Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
            <div className="text-2xl font-bold text-brand-green mb-1">{education.length}</div>
            <div className="text-sm text-gray-400">Credentials Earned</div>
          </div>
          <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
            <div className="text-2xl font-bold text-brand-green mb-1">{education.filter(e => e.achievements?.includes('Cum Laude Graduate')).length}</div>
            <div className="text-sm text-gray-400">Cum Laude Honors</div>
          </div>
          <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
            <div className="text-2xl font-bold text-brand-green mb-1">{education.reduce((sum, e) => sum + (e.relevant_coursework?.length || 0), 0)}</div>
            <div className="text-sm text-gray-400">Courses Listed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
