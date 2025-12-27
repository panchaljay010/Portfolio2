import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CanvasBackground from './components/CanvasBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative min-h-screen text-gray-300 cursor-none flex flex-col">
          <CustomCursor />
          <CanvasBackground />
          <ScrollToTop />
          <Navbar />
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;