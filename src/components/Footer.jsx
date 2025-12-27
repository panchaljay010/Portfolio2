import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand / Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
             Jay<span className="text-primary">Panchal</span>
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
           <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaGithub size={24} /></a>
           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaLinkedin size={24} /></a>
           <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><FaTwitter size={24} /></a>
        </div>

        {/* Made With */}
        <div className="text-sm flex items-center gap-1">
            <p>Made with</p>
            <FaHeart className="text-red-500 animate-pulse" />
            <p>using React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;