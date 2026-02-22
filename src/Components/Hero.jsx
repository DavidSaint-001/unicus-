import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.png';

const heroContent = [
  { 
    word: "Business", 
    img: img1 
  },
  { 
    word: "Coding", 
    img: img2 
  },
  { 
    word: "Innovation", 
    img: img3 
  },
  { 
    word: "Design", 
    img: img3 
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContent.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-12 md:mt-16 lg:mt-24 min-h-0 lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-white px-6 py-12 lg:py-8">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-70" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
              Unicus Campus 2026
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Master <br />
              <div className="relative h-[1.2em] overflow-hidden inline-block w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroContent[index].word}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    {heroContent[index].word}
                  </motion.span>
                </AnimatePresence>
              </div>
              <br /> Professionalism.
            </h1>
            
            <p className="mt-4 text-sm md:text-base text-slate-500 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Gain world-class tech and business skills. Tailored training designed to launch your career from day one.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
              View Courses
            </button>
          </div>
        </div>

        {/* Right Content - Animated Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white max-w-sm md:max-w-md mx-auto aspect-square h-[300px] md:h-[350px] lg:h-[450px]">
             <AnimatePresence mode="wait">
               <motion.img 
                key={heroContent[index].img}
                src={heroContent[index].img} 
                alt={heroContent[index].word}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
             </AnimatePresence>
          </div>
          
          {/* Floating Success Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-[-10%] z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 min-w-[180px]"
          >
             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg shadow-green-100">✓</div>
             <div className="text-left">
                <p className="text-[10px] uppercase font-black text-slate-400 leading-none mb-1">Status</p>
                <p className="text-xs font-bold text-slate-800">Enrollment Active</p>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;