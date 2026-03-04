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
        <footer className="mt-12 py-8 border-t border-[#30363d] text-center text-xs text-gray-500">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-brand-green hover:underline">Terms</a>
            <a href="#" className="hover:text-brand-green hover:underline">Privacy</a>
            <a href="#" className="hover:text-brand-green hover:underline">Security</a>
            <a href="#" className="hover:text-brand-green hover:underline">Status</a>
            <a href="#" className="hover:text-brand-green hover:underline">Docs</a>
            <a href="#" className="hover:text-brand-green hover:underline">Contact GitHub</a>
            <a href="#" className="hover:text-brand-green hover:underline">Pricing</a>
            <a href="#" className="hover:text-brand-green hover:underline">API</a>
          </div>
          <p>© {currentYear} Onwaba Nobhitywana (Portfolio). mimic GitHub.</p>
        </footer>
        
        <AIAgent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
