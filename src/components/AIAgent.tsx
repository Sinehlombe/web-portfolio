import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
};

type ConversationContext = {
  lastTopic: string;
  mentionedSkills: string[];
  projectInterest: string | null;
};

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Onwaba's AI assistant. Ask me anything about his skills, experience, or background!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    lastTopic: '',
    mentionedSkills: [],
    projectInterest: null
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    const { personalInfo, skills, experience, education, repositories, interests, goals } = portfolioData;

    // Update context
    const newContext = { ...context };
    if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
      newContext.lastTopic = 'skills';
    } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
      newContext.lastTopic = 'experience';
    } else if (lowerInput.includes('project') || lowerInput.includes('repo') || lowerInput.includes('github')) {
      newContext.lastTopic = 'projects';
    }
    
    setContext(newContext);

    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return `Hello! I'm Onwaba's AI assistant. I can help you learn about his technical skills, work experience, projects, education, and more. What would you like to know?`;
    }

    // Contact information
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
      return `You can reach Onwaba through multiple channels:
📧 Email: ${personalInfo.email}
📱 Phone: ${personalInfo.phone}
💼 LinkedIn: ${personalInfo.linkedin}
💻 GitHub: ${personalInfo.github}

He's currently ${personalInfo.availability.toLowerCase()} and typically responds within 24 hours.`;
    }

    // Skills with detailed information
    if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech') || lowerInput.includes('proficien')) {
      const allSkills = [
        ...skills.languages.map(s => typeof s === 'string' ? s : s.name),
        ...skills.frontend.map(s => typeof s === 'string' ? s : s.name),
        ...skills.backend.map(s => typeof s === 'string' ? s : s.name)
      ];
      const topSkills = allSkills.slice(0, 8).join(', ');
      
      return `Onwaba is proficient in ${topSkills}, and many more technologies. His expertise spans:

🔹 **Languages**: Python (Expert, 4+ years), JavaScript (Expert, 3+ years), TypeScript
🔹 **Frontend**: React.js (Expert), Vue.js, Angular
🔹 **Backend**: FastAPI (Expert), Node.js, Django
🔹 **AI/ML**: MLOps, Docker, ETL pipelines

He specializes in Full-Stack development with AI/ML integration. What specific technology would you like to know more about?`;
    }

    // Experience with detailed achievements
    if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('career')) {
      const latest = experience[0];
      const prev = experience[1];
      
      return `Onwaba's professional journey includes:\n\n🚀 **Current Role**: ${latest.role} at ${latest.company} (${latest.period})\n   • ${latest.achievements?.join('\n   • ') || latest.description}\n\n🔧 **Previous**: ${prev.role} at ${prev.company} (${prev.period})\n   • ${prev.achievements?.join('\n   • ') || prev.description}\n\nHe has ${experience.length}+ years of professional experience building scalable systems. Would you like details about any specific role or project?`;
    }

    // Education details
    if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('school') || lowerInput.includes('university') || lowerInput.includes('academic')) {
      const latestEdu = education[0];
      const prevEdu = education[1];
      
      const formatEntry = (edu: typeof education[0]) => {
        const lines = [];
        lines.push(`🎓 ${edu.degree}`);
        lines.push(`   ${edu.institution} (${edu.period})`);
        if (edu.score) {
          lines.push(`   Score: ${edu.score}`);
        }
        if (edu.awarded) {
          lines.push(`   Awarded: ${edu.awarded}`);
        }
        if (edu.achievements && edu.achievements.length > 0) {
          lines.push(`   Achievements: ${edu.achievements.join(', ')}`);
        }
        return lines.join('\n');
      };

      return `Onwaba's educational background:\n\n${formatEntry(latestEdu)}\n\n${formatEntry(prevEdu)}\n\nHe graduated cum laude and maintains a strong academic record.`;
    }

    // Projects and repositories
    if (lowerInput.includes('project') || lowerInput.includes('repo') || lowerInput.includes('github') || lowerInput.includes('portfolio')) {
      const featuredRepos = repositories.slice(0, 3);
      
      let response = `Onwaba has built ${repositories.length}+ projects showcasing his full-stack and AI expertise:\n\n`;
      
      featuredRepos.forEach((repo, index) => {
        response += `${index + 1}. **${repo.name}** (${repo.language})
   ${repo.description}
   ${repo.achievements ? `   Key achievements: ${repo.achievements.join(', ')}` : ''}

`;
      });
      
      response += `You can explore all projects in the Repositories tab or visit his GitHub: ${personalInfo.github}`;
      
      return response;
    }

    // AI/ML specific questions
    if (lowerInput.includes('ai') || lowerInput.includes('ml') || lowerInput.includes('machine learning') || lowerInput.includes('artificial intelligence') || lowerInput.includes('data science')) {
      const aiSkills = skills.ai_ml;
      const aiProjects = repositories.filter(repo => 
        repo.topics?.includes('ai') || repo.topics?.includes('ml') || repo.topics?.includes('python')
      );
      
      return `Onwaba is deeply specialized in AI/ML:

🔬 **Expertise**: ${aiSkills.map(s => typeof s === 'string' ? s : `${s.name} (${s.level})`).join(', ')}

📊 **ML Projects**: ${aiProjects.length}+ projects including ${aiProjects[0]?.name} and ${aiProjects[1]?.name}

🎯 **Focus Areas**: End-to-end ML lifecycle, data pipelines, model deployment, MLOps practices

He combines ML expertise with full-stack development to build production-ready AI solutions.`;
    }

    // Personal interests and goals
    if (lowerInput.includes('interest') || lowerInput.includes('hobby') || lowerInput.includes('passion') || lowerInput.includes('goal') || lowerInput.includes('aspiration')) {
      const interestList = interests.slice(0, 3).join('\n💭 ');
      const goalList = goals.slice(0, 3).join('\n🏆 ');
      return `Beyond technical work, Onwaba is passionate about:

💭 ${interestList}

His professional goals include:

🏆 ${goalList}

He actively contributes to open-source and enjoys mentoring junior developers.`;
    }

    // Specific skill inquiries
    const skillKeywords = ['python', 'javascript', 'react', 'vue', 'node', 'docker', 'aws', 'sql'];
    for (const keyword of skillKeywords) {
      if (lowerInput.includes(keyword)) {
        const skillMatch = skills.languages.find(s => 
          typeof s === 'object' && s.name.toLowerCase().includes(keyword)
        ) || skills.frontend.find(s => 
          typeof s === 'object' && s.name.toLowerCase().includes(keyword)
        ) || skills.backend.find(s => 
          typeof s === 'object' && s.name.toLowerCase().includes(keyword)
        );
        
        if (skillMatch && typeof skillMatch === 'object') {
          return `${skillMatch.name} (${skillMatch.level}, ${skillMatch.years}+ years experience)\n\nProjects: ${skillMatch.projects?.join(', ') || 'Various professional projects'}`;
        }
      }
    }

    // Project recommendations
    if (lowerInput.includes('recommend') || lowerInput.includes('suggest') || lowerInput.includes('best')) {
      const topProjects = repositories
        .sort((a, b) => (b.stars || 0) - (a.stars || 0))
        .slice(0, 2);
      
      return `Based on popularity and impact, I'd recommend:\n\n⭐ **${topProjects[0].name}** - ${topProjects[0].stars} stars\n   ${topProjects[0].description}\n\n⭐ **${topProjects[1].name}** - ${topProjects[1].stars} stars\n   ${topProjects[1].description}\n\nBoth demonstrate his technical expertise and problem-solving approach.`;
    }

    return "I'm Onwaba's AI assistant with detailed knowledge of his professional profile. You can ask me about:\n\n• Technical skills and expertise\n• Work experience and achievements\n• Education and certifications\n• Projects and GitHub repositories\n• AI/ML specialization\n• Contact information\n• Personal interests and goals\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);
    setMessages((prev) => [...prev, {
      id: 'typing',
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    }]);
    
    // Simulate AI delay
    setTimeout(() => {
      // Remove typing indicator
      setMessages((prev) => prev.filter(msg => msg.id !== 'typing'));
      setIsTyping(false);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  return (
    <div id="agent" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-colors ${
          isOpen ? 'hidden' : 'bg-brand-green text-black hover:bg-brand-neon border border-black'
        }`}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-full max-w-sm bg-[#0d1117] rounded-2xl shadow-2xl z-50 overflow-hidden border border-[#30363d] flex flex-col max-h-[600px]"
          >
            {/* Header */}
            <div className="bg-[#161b22] p-4 flex justify-between items-center text-white border-b border-[#30363d]">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-brand-green" />
                <span className="font-semibold text-brand-green">Onwaba's Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#30363d] rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#010409] h-80">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-green text-black rounded-tr-none font-medium'
                        : 'bg-[#161b22] text-gray-200 shadow-sm border border-[#30363d] rounded-tl-none'
                    }`}
                  >
                    {msg.isTyping ? (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Response Buttons */}
            {!isTyping && messages.length === 1 && (
              <div className="px-4 pb-2 bg-[#010409] border-t border-[#30363d]">
                <div className="text-xs text-gray-500 mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-2">
                  {['Skills', 'Experience', 'Projects', 'Contact'].map((btn) => (
                    <button
                      key={btn}
                      onClick={() => {
                        const quickMessage = {
                          id: Date.now().toString(),
                          text: btn,
                          sender: 'user' as const,
                          timestamp: new Date(),
                        };
                        setMessages((prev) => [...prev, quickMessage]);
                        setInputValue(btn);
                        
                        setTimeout(() => {
                          setIsTyping(true);
                          setMessages((prev) => [...prev, {
                            id: 'typing',
                            text: '',
                            sender: 'bot' as const,
                            timestamp: new Date(),
                            isTyping: true
                          }]);
                          
                          setTimeout(() => {
                            setMessages((prev) => prev.filter(msg => msg.id !== 'typing'));
                            setIsTyping(false);
                            const botResponse: Message = {
                              id: (Date.now() + 1).toString(),
                              text: generateResponse(btn),
                              sender: 'bot' as const,
                              timestamp: new Date(),
                            };
                            setMessages((prev) => [...prev, botResponse]);
                          }, 800);
                        }, 100);
                      }}
                      className="px-3 py-1 bg-[#161b22] text-gray-300 text-xs rounded-full border border-[#30363d] hover:border-brand-green hover:text-brand-green transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-[#161b22] border-t border-[#30363d]">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 px-4 py-2 bg-[#0d1117] rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-green border border-[#30363d] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-brand-green text-black rounded-full hover:bg-brand-neon disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
