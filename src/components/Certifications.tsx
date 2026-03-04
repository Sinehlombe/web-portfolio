import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Cisco Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description: "Comprehensive Python programming fundamentals including data structures, algorithms, and object-oriented programming concepts.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "OOP"],
      verification: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Cisco Programming Essentials in C#",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description: "In-depth C# programming covering .NET framework, Windows application development, and enterprise software concepts.",
      skills: ["C# Programming", ".NET Framework", "Windows Development", "Enterprise Applications"],
      verification: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Cisco Cloud Security",
      issuer: "Cisco Networking Academy",
      date: "2022",
      description: "Cloud security fundamentals including threat protection, data privacy, compliance, and secure cloud architecture design.",
      skills: ["Cloud Security", "Threat Protection", "Data Privacy", "Compliance"],
      verification: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "IBM Data Science Tools",
      issuer: "IBM",
      date: "2022",
      description: "Essential data science tools and methodologies including Python libraries, statistical analysis, and machine learning frameworks.",
      skills: ["Data Science", "Python Libraries", "Statistical Analysis", "ML Frameworks"],
      verification: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-6 hover-lift">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-3 flex items-center justify-center">
              <Award className="h-8 w-8 text-brand-green mr-3" />
              Professional Certifications
            </h1>
            <div className="w-24 h-1 bg-brand-green mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-recognized credentials validating my technical expertise and commitment to continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-brand-green transition-all hover-lift animated-border"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <div className="flex items-center text-brand-green mb-3">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className={`flex items-center ${getStatusColor(cert.status)}`}>
                      <CheckCircle className="h-5 w-5 mr-1" />
                      <span className="text-sm font-medium">{cert.status}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#0d1117] text-gray-300 text-xs rounded-full border border-[#30363d] hover:border-brand-green transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#30363d]">
                  <div className="text-sm text-gray-500">
                    Certificate ID: CERT-{cert.id.toString().padStart(3, '0')}
                  </div>
                  <a 
                    href={cert.verification}
                    className="inline-flex items-center text-brand-green hover:text-brand-neon text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">#</span> Certification Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#0d1117] rounded-md border border-[#30363d]">
                <div className="text-2xl font-bold text-brand-green mb-1">{certifications.length}</div>
                <div className="text-xs text-gray-400">Total Certifications</div>
              </div>
              <div className="text-center p-4 bg-[#0d1117] rounded-md border border-[#30363d]">
                <div className="text-2xl font-bold text-brand-green mb-1">4</div>
                <div className="text-xs text-gray-400">Issuing Organizations</div>
              </div>
              <div className="text-center p-4 bg-[#0d1117] rounded-md border border-[#30363d]">
                <div className="text-2xl font-bold text-brand-green mb-1">100%</div>
                <div className="text-xs text-gray-400">Completion Rate</div>
              </div>
              <div className="text-center p-4 bg-[#0d1117] rounded-md border border-[#30363d]">
                <div className="text-2xl font-bold text-brand-green mb-1">2022</div>
                <div className="text-xs text-gray-400">Latest Certification</div>
              </div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="text-brand-green mr-2">#</span> Skills Validated by Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-brand-green mb-3">Programming & Development</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Python & C# Programming</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Object-Oriented Design</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Enterprise Application Development</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-green mb-3">Security & Data Science</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Cloud Security Fundamentals</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Data Science Tools & Methodologies</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2 flex-shrink-0" />
                    <span>Statistical Analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;