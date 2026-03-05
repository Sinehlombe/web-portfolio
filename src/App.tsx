// React and Router imports
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component imports
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import RepositoryList from './components/RepositoryList';
import AIAgent from './components/AIAgent';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import WorkExamples from './components/WorkExamples';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Education from './components/Education';

// Common component imports
import PageWrapper from './components/common/PageWrapper';
import ErrorBoundary from './components/common/ErrorBoundary';

// Constants imports
import { ROUTES } from './constants/routes';

// Data imports
import { portfolioData } from './data';

/**
 * Main App component
 * Contains the routing configuration and main layout structure
 */
function App() {
  const location = useLocation();

  // Current year for footer
  const currentYear = new Date().getFullYear();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0d1117] text-white font-sans">
        <Navbar />
        
        <div className="max-w-[1280px] mx-auto md:px-6 md:py-8 px-4 py-6">
          <div className="flex flex-col md:flex-row gap-8">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
              {/* Home Route */}
              <Route 
                path={ROUTES.HOME} 
                element={
                  <PageWrapper>
                    <div className="flex flex-col md:flex-row gap-8">
                      <ProfileSidebar />
                      <div className="md:w-3/4 w-full">
                        <Hero />
                      </div>
                    </div>
                  </PageWrapper>
                } 
              />
              
              {/* About Route */}
              <Route 
                path={ROUTES.ABOUT} 
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                } 
              />
              
              {/* Skills Route */}
              <Route 
                path={ROUTES.SKILLS} 
                element={
                  <PageWrapper>
                    <Skills />
                  </PageWrapper>
                } 
              />
              
              {/* Experience Route */}
              <Route 
                path={ROUTES.EXPERIENCE} 
                element={
                  <PageWrapper>
                    <Experience />
                  </PageWrapper>
                } 
              />
              
              {/* Work Examples Route */}
              <Route 
                path={ROUTES.WORK_EXAMPLES} 
                element={
                  <PageWrapper>
                    <WorkExamples />
                  </PageWrapper>
                } 
              />

              {/* Education Route */}
              <Route
                path={ROUTES.EDUCATION}
                element={
                  <PageWrapper>
                    <Education />
                  </PageWrapper>
                }
              />
              <Route 
                path={ROUTES.WORK_EXAMPLES} 
                element={
                  <PageWrapper>
                    <WorkExamples />
                  </PageWrapper>
                } 
              />
              
              {/* Certifications Route */}
              <Route 
                path={ROUTES.CERTIFICATIONS} 
                element={
                  <PageWrapper>
                    <Certifications />
                  </PageWrapper>
                } 
              />
              
              {/* Repositories Route */}
              <Route 
                path={ROUTES.REPOSITORIES} 
                element={
                  <PageWrapper>
                    <div className="border-t border-[#30363d] pt-8">
                      <RepositoryList />
                    </div>
                  </PageWrapper>
                } 
              />
              
              {/* Testimonials Route */}
              <Route 
                path={ROUTES.TESTIMONIALS} 
                element={
                  <PageWrapper>
                    <Testimonials />
                  </PageWrapper>
                } 
              />
              
              {/* AI Agent Route */}
              <Route 
                path={ROUTES.AGENT} 
                element={
                  <PageWrapper>
                    <div className="h-[600px] flex items-center justify-center">
                      <p className="text-gray-400">
                        Interact with the Agent using the floating button below!
                      </p>
                    </div>
                  </PageWrapper>
                } 
              />
              
              {/* Contact Route */}
              <Route 
                path={ROUTES.CONTACT} 
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                } 
              />
            </Routes>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-[#010409] border-t border-[#30363d] py-10 text-center">
          <div className="max-w-4xl mx-auto px-4">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href={portfolioData.personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href={portfolioData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href={portfolioData.personalInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a 
                href={portfolioData.personalInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-green transition-colors transform hover:scale-110"
                aria-label="Website"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </a>
            </div>
            
            {/* Navigation Links */}
            <div className="flex justify-center space-x-6 mb-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-brand-green transition-colors">About</a>
              <a href="#experience" className="text-gray-400 hover:text-brand-green transition-colors">Experience</a>
              <a href="#skills" className="text-gray-400 hover:text-brand-green transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-brand-green transition-colors">Contact</a>
            </div>
            
            {/* Decorative Line */}
            <div className="flex justify-center items-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent w-32"></div>
              <span className="mx-4 text-brand-green text-lg">⚡</span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent w-32"></div>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-white font-semibold">{portfolioData.personalInfo.name}</span>. 
              Built with passion and lots of ☕
            </p>
            <p className="text-gray-500 text-xs mt-2">
              {portfolioData.personalInfo.title} • {portfolioData.personalInfo.location}
            </p>
          </div>
        </footer>
        
        <AIAgent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
