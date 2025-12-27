import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show preloader for 2.5 seconds
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0f172a]"
    >
      <div className="flex flex-col items-center">
         {/* Animated Logo/Text */}
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
         >
            <span className="text-primary">&lt;</span>
            JayPanchal
            <span className="text-primary">/&gt;</span>
         </motion.div>

         {/* Loading Bar */}
         <div className="w-[200px] h-[2px] bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
            />
         </div>
      </div>
    </motion.div>
  );
};

export default Preloader;