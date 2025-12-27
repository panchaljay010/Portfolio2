import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaAws, FaDocker, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs, SiPostgresql, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: [
          { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" />, level: "Advanced" },
          { name: 'CSS', icon: <FaCss3Alt size={40} className="text-blue-500" />, level: "Advanced" },
          { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" />, level: "Advanced" },
          { name: 'React', icon: <FaReact size={40} className="text-cyan-400" />, level: "Advanced" },
          { name: 'Tailwind', icon: <SiTailwindcss size={40} className="text-cyan-500" />, level: "Advanced" },
          { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" />, level: "Intermediate" },
          { name: 'Next JS', icon: <SiNextdotjs size={40} className="text-white" />, level: "Intermediate" },
          { name: 'Figma', icon: <FaFigma size={40} className="text-pink-500" />, level: "Intermediate" },
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: 'Node JS', icon: <FaNodeJs size={40} className="text-green-500" />, level: "Advanced" },
          { name: 'Mongo DB', icon: <SiMongodb size={40} className="text-green-600" />, level: "Intermediate" },
          { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-400" />, level: "Intermediate" },
          { name: 'Firebase', icon: <SiFirebase size={40} className="text-yellow-500" />, level: "Intermediate" },
        ]
      },
      {
        title: "DevOps & Tools",
        skills: [
          { name: 'GitHub', icon: <FaGithub size={40} className="text-gray-300" />, level: "Advanced" },
          { name: 'AWS', icon: <FaAws size={40} className="text-orange-400" />, level: "Beginner" },
          { name: 'Docker', icon: <FaDocker size={40} className="text-blue-400" />, level: "Intermediate" },
        ]
      }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const floatingIcon = {
        animate: {
            y: [0, -5, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    }

  return (
    <AnimatedPage>
      <div className="w-full min-h-screen text-gray-300 p-4 pb-20">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 pt-10 text-center sm:text-left">
                <p className="text-4xl font-bold inline border-b-4 border-secondary">Skills</p>
                <p className="py-4 text-gray-400">// Technologies I work with</p>
            </div>

            {skillCategories.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 border-l-4 border-secondary pl-4">{category.title}</h3>
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
                >
                    {category.skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            variants={item}
                            className="shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-primary duration-500 bg-[#1e293b]/80 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center relative overflow-hidden group"
                        >
                            <motion.div 
                                variants={floatingIcon}
                                animate="animate"
                                className="my-4 group-hover:scale-110 transition-transform duration-300"
                            >
                                {skill.icon}
                            </motion.div>
                            <p className="mt-2 font-semibold text-lg">{skill.name}</p>
                            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full mt-2">{skill.level}</span>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                                <div 
                                  className={`h-full ${skill.level === 'Advanced' ? 'w-[90%]' : skill.level === 'Intermediate' ? 'w-[70%]' : 'w-[40%]'} bg-gradient-to-r from-primary to-secondary`}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;