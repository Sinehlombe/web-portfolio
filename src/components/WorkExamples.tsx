import React from 'react';

const WorkExamples = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-6 hover-lift">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              ON Portfolio
            </h1>
            <h2 className="text-2xl text-brand-green mb-3">
              Work Examples
            </h2>
            <div className="text-gray-300 mb-6 border-l-2 border-brand-green pl-4">
              Deep dives into projects that delivered measurable business impact
            </div>
          </div>

          {/* MANDELA LEGACY Examples */}
          <div className="mb-10">
            <div className="text-3xl font-bold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">🏢</span> MANDELA LEGACY
            </div>
            
            {/* Example 1: Backend Architecture & Migration */}
            <div className="mb-6">
              <div className="text-xl text-gray-400 mb-3 border-b border-[#30363d] pb-2">
                Backend Architecture & Migration
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Engineered the migration from a local SQL prototype to a production-grade, self-hosted Supabase backend deployed on Coolify.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">The Challenge</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Legacy local SQL database with scalability limitations</li>
                    <li>Need for production-ready cloud infrastructure</li>
                    <li>Required zero downtime during migration</li>
                  </ul>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">The Solution</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Designed two-layer schema (System & Analytics)</li>
                    <li>Implemented Dockerized deployment on Coolify</li>
                    <li>Executed seamless data migration with rollback strategy</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">2TB</div>
                  <div className="text-xs text-gray-400">Data Migrated</div>
                </div>
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">40%</div>
                  <div className="text-xs text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">60%</div>
                  <div className="text-xs text-gray-400">Performance Boost</div>
                </div>
              </div>
            </div>

            {/* Example 2: Multi-Tenant Database & Security */}
            <div className="mb-6">
              <div className="text-xl text-gray-400 mb-3 border-b border-[#30363d] pb-2">
                Multi-Tenant Database & Security Architecture
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Designed and implemented a PostgreSQL-centric multi-tenant architecture with robust security measures.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Security Implementation</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Row-Level Security (RLS) with 90-95% coverage</li>
                    <li>Database-level tenant isolation</li>
                    <li>Auditable access control mechanisms</li>
                  </ul>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Architecture Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Eliminated cross-tenant data exposure</li>
                    <li>Consistent authorization boundaries</li>
                    <li>Scalable tenant onboarding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example 3: Data Pipeline & Validation */}
            <div>
              <div className="text-xl text-gray-400 mb-3 border-b border-[#30363d] pb-2">
                Data Pipeline & Validation
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Built automated end-to-end Python ETL pipelines with comprehensive validation and monitoring.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Pipeline Features</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Excel and API data ingestion</li>
                    <li>Automated data cleansing rules</li>
                    <li>Real-time audit logging</li>
                  </ul>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Impact Metrics</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>30% reduction in data inconsistencies</li>
                    <li>Automated failure recovery</li>
                    <li>Analysis-ready data delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* horizontal rule */}
          <div className="border-t border-[#30363d] my-8"></div>

          {/* LOOP Examples */}
          <div className="mb-10">
            <div className="text-3xl font-bold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">🔄</span> LOOP
            </div>
            
            {/* Automation Workflows & AI */}
            <div className="mb-6">
              <div className="text-xl text-gray-400 mb-3 border-b border-[#30363d] pb-2">
                AI Integration & Process Automation
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Developed AI-integrated features and automated workflows that transformed operational efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">AI/ML Integration</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Personalized recommendation systems</li>
                    <li>Adaptive learning features</li>
                    <li>Data-backed decision insights</li>
                  </ul>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Automation Achievements</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Driver Location Tracking System</li>
                    <li>Automated transport assignments</li>
                    <li>Capacity management optimization</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">75%</div>
                  <div className="text-xs text-gray-400">User Engagement Increase</div>
                </div>
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">60%</div>
                  <div className="text-xs text-gray-400">Manual Workload Reduction</div>
                </div>
                <div className="text-center p-3 bg-[#161b22] rounded-md border border-[#30363d]">
                  <div className="text-brand-green font-bold text-lg">85%</div>
                  <div className="text-xs text-gray-400">Recommendation Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* horizontal rule */}
          <div className="border-t border-[#30363d] my-8"></div>

          {/* WALTER SISULU UNIVERSITY Example */}
          <div className="mb-8">
            <div className="text-3xl font-bold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">🎓</span> WALTER SISULU UNIVERSITY
            </div>
            
            <div>
              <div className="text-xl text-gray-400 mb-3 border-b border-[#30363d] pb-2">
                Data Analytics & Academic Enhancement
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Leveraged data analytics to identify academic challenges and improve institutional outcomes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Analytics Implementation</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Student performance data analysis using Tableau</li>
                    <li>Moodle data analysis for academic insights</li>
                    <li>Collaborative research with academic teams</li>
                  </ul>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] p-4 rounded-md">
                  <h4 className="text-brand-green font-semibold mb-2">Key Contributions</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    <li>Identified 3 key academic improvement areas</li>
                    <li>Created 10+ data visualizations</li>
                    <li>Developed user manuals and conducted testing</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d]">
                <div className="text-brand-green font-bold text-xl mb-1">3</div>
                <div className="text-sm text-gray-400">Academic Challenge Areas Identified</div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="pt-6 border-t border-[#30363d]">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">#</span> Overall Impact Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-2xl font-bold text-brand-green mb-1">90%</div>
                <div className="text-sm text-gray-400">Average Performance Improvement</div>
              </div>
              <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-2xl font-bold text-brand-green mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Industry Experience</div>
              </div>
              <div className="text-center p-4 bg-[#161b22] rounded-md border border-[#30363d] hover-lift animated-border">
                <div className="text-2xl font-bold text-brand-green mb-1">15+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExamples;