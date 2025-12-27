import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMobileAlt, FaQuoteLeft, FaCoffee, FaGamepad, FaBook, FaPlane } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
  };

  const item = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0 }
  };

  const services = [
      { title: "Frontend Development", desc: "Building responsive, interactive UIs with React and Tailwind.", icon: <FaLaptopCode size={40} /> },
      { title: "Backend Systems", desc: "Designing robust APIs and database architectures with Node.js.", icon: <FaServer size={40} /> },
      { title: "Mobile & Responsive", desc: "Ensuring applications work seamlessly across all devices.", icon: <FaMobileAlt size={40} /> }
  ];

  const funFacts = [
      { icon: <FaCoffee size={30} />, text: "Fueled by 3+ cups of coffee daily" },
      { icon: <FaGamepad size={30} />, text: "Avid RPG Gamer" },
      { icon: <FaBook size={30} />, text: "Read 20+ Sci-Fi books last year" },
      { icon: <FaPlane size={30} />, text: "Traveled to 15+ countries" },
  ];

  return (
    <AnimatedPage>
      <div className="w-full text-gray-300 pb-20">
        <div className="flex flex-col justify-center items-center w-full h-full">
          {/* Header */}
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-10">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-secondary">
                About
              </p>
            </div>
            <div></div>
          </div>

          {/* Intro Text */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-16">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Jay, nice to meet you. Please take a look around.</p>
            </div>
            <div className="text-lg leading-relaxed text-gray-400">
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all
                the way to large enterprise corporations. What would you do if you
                had a software expert available at your fingertips?
              </p>  
            </div>
          </div>

          {/* Services Section */}
           <div className="max-w-[1000px] w-full px-4 mb-16">
               <h3 className="text-2xl font-bold text-primary mb-8 text-center uppercase tracking-widest">What I Do</h3>
               <div className="grid md:grid-cols-3 gap-6">
                   {services.map((service, index) => (
                       <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                           <div className="bg-[#1e293b]/50 p-6 rounded-lg text-center hover:bg-[#1e293b] transition-colors duration-300 h-full border border-gray-800 shadow-lg">
                               <div className="text-secondary flex justify-center mb-4">{service.icon}</div>
                               <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                               <p className="text-gray-400">{service.desc}</p>
                           </div>
                       </Tilt>
                   ))}
               </div>
           </div>

           {/* Philosophy Quote */}
           <div className="max-w-[1000px] w-full px-4 mb-16">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border-l-4 border-primary relative overflow-hidden"
                >
                    <FaQuoteLeft className="text-6xl text-gray-700 absolute top-2 left-4 opacity-20" />
                    <p className="text-xl italic text-gray-300 relative z-10 text-center">
                        "Clean code always looks like it was written by someone who cares. I believe in writing code that is not just functional, but maintainable, scalable, and a joy to read."
                    </p>
                </motion.div>
           </div>


          {/* Detailed Experience Section */}
          <div className="max-w-[1000px] w-full px-4 mb-16">
             <h3 className="text-2xl font-bold text-primary mb-8 text-center uppercase tracking-widest">Experience & Education</h3>
             <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative border-l-2 border-gray-700 ml-4 md:ml-0 md:pl-8 space-y-12"
             >
                 {/* Experience Item 1 */}
                 <motion.div variants={item} className="relative pl-8 md:pl-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary md:-left-[41px] ring-4 ring-[#0f172a]"></div>
                     <h4 className="text-xl font-bold text-white">Senior Frontend Developer</h4>
                     <span className="text-sm text-primary italic">TechCorp Inc. | 2023 - Present</span>
                     <p className="mt-2 text-gray-400 max-w-2xl">
                        Leading the frontend team in migrating legacy monoliths to micro-frontends using React and Module Federation. improved site performance by 40% through code-splitting and lazy loading strategies.
                     </p>
                 </motion.div>

                 {/* Experience Item 2 */}
                 <motion.div variants={item} className="relative pl-8 md:pl-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary md:-left-[41px] ring-4 ring-[#0f172a]"></div>
                     <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                     <span className="text-sm text-primary italic">StartUp Solutions | 2021 - 2023</span>
                     <p className="mt-2 text-gray-400 max-w-2xl">
                        Developed and maintained 5+ client-facing web applications using the MERN stack. Integrated Stripe payment gateways and third-party REST APIs.
                     </p>
                 </motion.div>

                 {/* Education Item */}
                 <motion.div variants={item} className="relative pl-8 md:pl-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary md:-left-[41px] ring-4 ring-[#0f172a]"></div>
                     <h4 className="text-xl font-bold text-white">B.S. Computer Science</h4>
                     <span className="text-sm text-primary italic">University of Tech | 2017 - 2021</span>
                     <p className="mt-2 text-gray-400 max-w-2xl">
                        Graduated with Honors (3.8 GPA). Capstone Project: "AI-driven Traffic Management System". President of the Coding Club.
                     </p>
                 </motion.div>
             </motion.div>
          </div>

          {/* Testimonials */}
          <div className="max-w-[1000px] w-full px-4 mb-16">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center uppercase tracking-widest">Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                     whileHover={{ scale: 1.02 }}
                     className="bg-[#1e293b]/50 p-6 rounded-xl border border-gray-700 relative"
                  >
                      <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 left-4" />
                      <p className="text-gray-300 italic mb-4 relative z-10 pl-8">
                          "Jay is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems is impressive."
                      </p>
                      <div className="flex items-center gap-4 pl-8">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                          <div>
                              <p className="font-bold text-white">Sarah Jenkins</p>
                              <p className="text-xs text-gray-400">CTO, TechStart</p>
                          </div>
                      </div>
                  </motion.div>

                  <motion.div 
                     whileHover={{ scale: 1.02 }}
                     className="bg-[#1e293b]/50 p-6 rounded-xl border border-gray-700 relative"
                  >
                      <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 left-4" />
                      <p className="text-gray-300 italic mb-4 relative z-10 pl-8">
                          "Working with Jay was a pleasure. He transformed our outdated website into a modern, high-performance platform that our users love."
                      </p>
                      <div className="flex items-center gap-4 pl-8">
                          <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                          <div>
                              <p className="font-bold text-white">Michael Chang</p>
                              <p className="text-xs text-gray-400">Product Manager, InnovateCorp</p>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>

          {/* Fun Facts */}
          <div className="max-w-[1000px] w-full px-4">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center uppercase tracking-widest">Beyond Coding</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {funFacts.map((fact, idx) => (
                      <div key={idx} className="bg-[#1e293b]/30 p-4 rounded-xl flex flex-col items-center text-center hover:bg-[#1e293b] transition-colors">
                          <div className="text-secondary mb-2">{fact.icon}</div>
                          <p className="text-sm text-gray-300">{fact.text}</p>
                      </div>
                  ))}
              </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;