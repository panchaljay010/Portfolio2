import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image: "https://via.placeholder.com/600x400/1e293b/6366f1?text=E-Commerce",
      github: "#",
      live: "#",
      tags: ["React", "Redux", "Stripe", "Firebase"],
      desc: "Full-stack e-commerce with Stripe payments, Redux for state management, and Firebase for authentication."
    },
    {
      id: 2,
      name: "Social Media App",
      image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=Social+App",
      github: "#",
      live: "#",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      desc: "Real-time social network featuring live chat, notifications, and media sharing using Socket.io and MongoDB."
    },
    {
      id: 3,
      name: "Task Management",
      image: "https://via.placeholder.com/600x400/1e293b/6366f1?text=Task+Manager",
      github: "#",
      live: "#",
      tags: ["React DnD", "Tailwind", "Vite"],
      desc: "Collaborative project management tool with drag-and-drop Kanban boards, built with React DnD."
    },
    {
      id: 4,
      name: "Weather Dashboard",
      image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=Weather+App",
      github: "#",
      live: "#",
      tags: ["OpenWeatherMap API", "Chart.js", "React"],
      desc: "Live weather tracking application providing 7-day forecasts and historical data visualization via OpenWeatherMap API."
    },
     {
      id: 5,
      name: "Blog CMS",
      image: "https://via.placeholder.com/600x400/1e293b/6366f1?text=CMS",
      github: "#",
      live: "#",
      tags: ["Next.js", "GraphQL", "GraphCMS"],
      desc: "Headless CMS solution allowing developers to manage content dynamically with a Markdown-based editor."
    },
    {
      id: 6,
      name: "Fitness Tracker",
      image: "https://via.placeholder.com/600x400/1e293b/ec4899?text=Fitness",
      github: "#",
      live: "#",
      tags: ["Vue.js", "Firebase", "PWA"],
      desc: "Activity tracking app integrating with wearable APIs to monitor workouts and generate progress reports."
    },
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
      hidden: { opacity: 0, scale: 0.9 },
      show: { opacity: 1, scale: 1 }
  };

  return (
    <AnimatedPage>
      <div className="w-full text-gray-300 pb-20">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8 pt-10 text-center sm:text-left">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-secondary">
              Projects
            </p>
            <p className="py-6 text-gray-400">// Check out some of my recent work</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg shadow-[#040c16] hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image Section */}
                 <div 
                    style={{ backgroundImage: `url(${project.image})` }}
                    className="h-[200px] bg-cover bg-center group relative"
                 >
                     <div className="opacity-0 group-hover:opacity-100 bg-black/70 absolute inset-0 flex justify-center items-center transition-opacity duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-primary hover:text-white transition-colors duration-300">
                                <FaGithub />
                            </button>
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-secondary hover:text-white transition-colors duration-300">
                                <FaExternalLinkAlt />
                            </button>
                        </a>
                     </div>
                 </div>

                 {/* Content Section */}
                 <div className="p-6">
                     <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                     <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                     <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag, i) => (
                             <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tag}</span>
                         ))}
                     </div>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;