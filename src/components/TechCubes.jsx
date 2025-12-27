import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const TechCubes = () => {
  // Configuration for the floating 2D "cubes"
  const cubes = [
    { icon: <FaReact size={40} />, color: "text-cyan-400", bg: "border-cyan-400", top: "15%", left: "10%", delay: 0 },
    { icon: <FaNodeJs size={40} />, color: "text-green-500", bg: "border-green-500", top: "75%", left: "15%", delay: 1 },
    { icon: <FaJs size={40} />, color: "text-yellow-400", bg: "border-yellow-400", top: "20%", left: "85%", delay: 2 },
    { icon: <SiTailwindcss size={40} />, color: "text-cyan-300", bg: "border-cyan-300", top: "80%", left: "80%", delay: 0.5 },
    { icon: <SiMongodb size={40} />, color: "text-green-600", bg: "border-green-600", top: "50%", left: "5%", delay: 1.5 },
    { icon: <FaPython size={40} />, color: "text-blue-500", bg: "border-blue-500", top: "10%", left: "50%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
      {cubes.map((cube, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.2, // Keep them subtle
            scale: 1,
            y: [0, -30, 0], // Floating motion
            rotate: [0, 10, -10, 0], // Slight rotation
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: cube.delay,
          }}
          style={{ top: cube.top, left: cube.left }}
          className={`absolute w-20 h-20 flex items-center justify-center rounded-xl border-2 ${cube.bg} ${cube.color} bg-slate-800/50 backdrop-blur-sm shadow-lg`}
        >
          {cube.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default TechCubes;