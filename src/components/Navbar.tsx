import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants/routes';

/**
 * Navbar component for the portfolio application
 * Contains navigation links and responsive mobile menu

 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close mobile menu when navigating
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#010409] text-white py-3 px-4 md:px-6 flex items-center justify-between border-b border-[#30363d] shadow-lg fade-in stagger-1">
      <div className="flex items-center space-x-4">
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <Link 
          to="" 
          className="text-white hover:text-brand-green transition-all flex items-center gap-2 hover-lift"
        >
          <span className="font-semibold text-sm leading-none text-brand-green">
            {portfolioData.personalInfo.name}
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-white">
        {NAV_ITEMS.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path}
            className={({ isActive }) => 
              `hover:text-brand-green transition-colors relative group ${isActive ? 'text-brand-green font-bold' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#0d1117] border-b border-[#30363d] p-4 flex flex-col space-y-3 md:hidden shadow-lg animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => 
                `text-gray-300 font-semibold text-sm hover:text-brand-green hover:bg-[#161b22] px-3 py-2 rounded-md transition-all ${isActive ? 'bg-[#161b22] text-brand-green' : ''}`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
