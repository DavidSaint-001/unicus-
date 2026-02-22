import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import img1 from "../assets/middle.png";
import img2 from "../assets/figma.png";
import img3 from "../assets/ai.png";

const courses = [
  {
    title: "Figma UI UX Design..",
    category: "Design",
    image: img2,
    rating: 4.8,
    reviews: "(16,325)",
    price: "$17.84",
    instructor: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?u=jane",
  },
  {
    title: "Front end programming",
    category: "Development",
    image: img1,
    rating: 3.9,
    reviews: "(832)",
    price: "$8.99",
    instructor: "Jenny Wilson",
    avatar: "https://i.pravatar.cc/150?u=jenny",
  },
  {
    title: "Ai fundamentals",
    category: "AI & Tech",
    image: img3,
    rating: 4.2,
    reviews: "(125)",
    price: "$11.70",
    instructor: "Esther Howard",
    avatar: "https://i.pravatar.cc/150?u=esther",
  }
];

const CourseGrid = () => {
  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <p className="text-amber-500 font-bold text-[10px] tracking-widest uppercase mb-2 italic">Explore Programs</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 tracking-tight">Our Most Popular Class</h2>
          <p className="text-sm text-slate-400 max-w-lg leading-relaxed font-medium">
            Let's join our class, the knowledge provided will definitely be useful for you.
          </p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group cursor-pointer"
            >
              {/* Image Container - Badges Removed */}
              <div className="relative rounded-xl overflow-hidden h-44 mb-4">
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider">{course.category}</p>
                
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                    {course.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>

                <p className="text-[11px] text-slate-400 leading-snug font-medium">
                  Comprehensive curriculum designed to give you real-world skills and professional confidence.
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-slate-700">{course.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill={i < 4 ? "#F59E0B" : "none"} className={i < 4 ? "text-amber-500" : "text-slate-200"} />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{course.reviews}</span>
                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full object-cover grayscale-[20%]" />
                    <div>
                      <p className="text-[11px] font-bold text-slate-800 leading-none mb-1">{course.instructor}</p>
                      <p className="text-[10px] text-slate-400">2001 Enrolled</p>
                    </div>
                  </div>
                  <span className="text-lg font-black text-blue-600 tracking-tighter">{course.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button Section */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all hover:border-slate-300">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;