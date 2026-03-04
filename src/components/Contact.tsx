import React from 'react';
import { portfolioData } from '../data';
import { Mail, Linkedin, Phone } from 'lucide-react';

/**
 * Contact component for the portfolio
 * Displays contact information and a contact form
 */
export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <div className="space-y-8 container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      {/* Contact Information Section */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="text-brand-green mr-2">#</span> Get In Touch
        </h2>
        <p className="text-gray-300 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities. 
          Feel free to reach out through any of the channels below.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-[#0d1117] p-4 rounded-md border border-[#30363d] hover:border-brand-green transition-colors">
            <div className="text-brand-green text-2xl mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-3">Primary communication channel</p>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-brand-green hover:underline text-sm font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
          
          {/* LinkedIn */}
          <div className="bg-[#0d1117] p-4 rounded-md border border-[#30363d] hover:border-brand-green transition-colors">
            <div className="text-brand-green text-2xl mb-3">
              <Linkedin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm mb-3">Professional networking</p>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-green hover:underline text-sm font-medium"
            >
              Connect with me
            </a>
          </div>
          
          {/* Phone */}
          <div className="bg-[#0d1117] p-4 rounded-md border border-[#30363d] hover:border-brand-green transition-colors">
            <div className="text-brand-green text-2xl mb-3">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm mb-3">For urgent matters</p>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="text-brand-green hover:underline text-sm font-medium"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-brand-green mr-2">#</span> Send a Message
        </h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                placeholder="Your Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input 
              type="text" 
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
              placeholder="What's this about?"
            />
          </div>
          
          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea 
              rows={5}
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
              placeholder="Tell me about your project or idea..."
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-brand-green hover:bg-brand-neon text-black font-semibold py-2.5 px-6 rounded-md transition-colors border border-black"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Availability Section */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-brand-green mr-2">#</span> Availability
        </h3>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-white">Currently Available for New Projects</span>
        </div>
        <p className="text-gray-400 text-sm">
          I'm actively seeking new opportunities and would love to hear about your project. 
          I typically respond to emails within 24 hours and can usually schedule calls within a week.
        </p>
      </div>
    </div>
  );
}
