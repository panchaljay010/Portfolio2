import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';
import ScrollDown from '../components/ScrollDown';
import TechCubes from '../components/TechCubes';

const Home = () => {
  const typeWriterText = useTypewriter("I'm a Full Stack Developer.", 100);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4 pt-[80px] relative overflow-hidden">
      <TechCubes />
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full order-2 md:order-1">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xl font-semibold mb-2"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          >
            Jay Panchal
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[80px] sm:h-[100px] flex items-center"
          >
            <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
              {typeWriterText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-primary"
              >
                |
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#8892b0] py-4 max-w-[700px] leading-relaxed"
          >
            I specialize in building exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications that solve real-world problems. I turn complex problems into simple, beautiful, and intuitive designs.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex flex-wrap gap-4"
          >
            <Link to="/projects">
              <button className="text-white group border-2 border-white px-6 py-3 flex items-center hover:bg-primary hover:border-primary transition-all duration-300 rounded-md font-bold">
                View Work 
                <span className="group-hover:rotate-90 duration-300 ml-3">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="text-white group border-2 border-primary bg-primary/10 px-6 py-3 flex items-center hover:bg-primary transition-all duration-300 rounded-md font-bold">
                Resume
                <span className="ml-3">
                  <FaFileDownload />
                </span>
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-6 mt-8 text-gray-400"
          >
              <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaGithub size={25} /></a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={25} /></a>
              <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaTwitter size={25} /></a>
              <a href="mailto:panchaljay010@gmail.com" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaEnvelope size={25} /></a>
          </motion.div>
        </div>

        {/* Image/Graphic Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 flex justify-center items-center"
        >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center overflow-hidden relative shadow-2xl">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Profile" 
                        className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-primary opacity-10 mix-blend-overlay"></div>
                </div>
            </div>
        </motion.div>

      </div>
      <ScrollDown />
    </div>
  );
};

export default Home;