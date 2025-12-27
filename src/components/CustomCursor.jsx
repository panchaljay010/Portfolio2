import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #6366f1",
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      border: "2px solid #ec4899",
      mixBlendMode: "difference"
    }
  };

  const dotVariants = {
      default: {
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          backgroundColor: "#ec4899"
      },
      hover: {
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        backgroundColor: "#6366f1"
      }
  }

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div 
         className="fixed top-0 left-0 rounded-full h-2 w-2"
         variants={dotVariants}
         animate={isHovering ? "hover" : "default"}
         transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
    </div>
  );
};

export default CustomCursor;