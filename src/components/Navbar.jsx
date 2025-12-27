import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f172a] text-gray-300 z-50 border-b border-gray-800"
    >
      <div className="z-50 px-2 cursor-pointer">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          <Link to="/">JAY</Link>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li key={link.name} className="px-4 cursor-pointer font-medium hover:text-white transition-colors duration-300 relative group">
            <Link to={link.path}>
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-secondary"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons (Desktop) */}
      <div className="hidden md:flex gap-4">
         <a href="#" className="hover:text-primary transition-colors"><FaGithub size={20} /></a>
         <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
         <a href="#" className="hover:text-primary transition-colors"><FaTwitter size={20} /></a>
      </div>

      {/* Hamburger */}
      <div onClick={toggleMenu} className="md:hidden z-50 cursor-pointer hover:text-white">
        {!isOpen ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 left-0 w-full h-screen bg-[#0f172a] flex flex-col justify-center items-center md:hidden"
          >
            <ul>
              {links.map((link) => (
                <li key={link.name} className="py-6 text-4xl cursor-pointer hover:text-secondary transition-colors text-center">
                  <Link onClick={toggleMenu} to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
             <div className="flex gap-8 mt-8">
                <a href="#" className="text-gray-400 hover:text-white"><FaGithub size={30} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={30} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={30} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;