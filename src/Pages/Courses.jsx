import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Search, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import frontend from '../assets/front end (1).avif';
import mgraphics from '../assets/motion graphics.avif';
import project from '../assets/project management.avif';
import data from '../assets/data analysis.avif';
import cyber from '../assets/cyber security.avif';
import phython from '../assets/phython.avif';
import app from '../assets/mobile ap.avif';
import graphic from '../assets/graphics.avif';
import computer from '../assets/computer appreiation.avif';
import uiux from '../assets/ui ux.avif';
import editing from '../assets/video editing.avif';
import digital from '../assets/digital marketing.png';
import ai from '../assets/ai.png';

const fallbackImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200";

const courseData = [
  {
    title: "Digital Marketing",
    desc: "SEO, paid advertising, social media strategy, and content marketing.",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    img: digital,
    path: "/courses/digital-marketing",
  },
  {
    title: "Motion Graphics & Animation",
    desc: "Professional animation and visual storytelling techniques.",
    duration: "3 Months",
    level: "Intermediate",
    img: mgraphics,
    path: "/courses/motion-graphics",
  },
  {
    title: "Project Management",
    desc: "Agile frameworks, leadership systems, and execution strategy.",
    duration: "5 Months",
    level: "All Levels",
    img: project,
    path: "/courses/project-management",
  },
  {
    title: "Front-End Development",
    desc: "Modern web applications using HTML, CSS, JavaScript, and React.",
    duration: "6 Months",
    level: "Beginner – Advanced",
    img: frontend,
    path: "/courses/frontend",
  },
  {
    title: "Data Analysis",
    desc: "Data modeling, visualization, and business intelligence tools.",
    duration: "3 Months",
    level: "Intermediate",
    img: data,
    path: "/courses/data-analysis",
  },
  {
    title: "Cybersecurity",
    desc: "Network protection, ethical hacking, and security systems.",
    duration: "9 Months",
    level: "Advanced",
    img: cyber,
    path: "/courses/cybersecurity",
  },
  {
    title: "Python Programming",
    desc: "Automation, backend development, and data handling.",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    img: phython,
    path: "/courses/python-programming",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform app development using modern frameworks.",
    duration: "5 Months",
    level: "Intermediate",
    img: app,
    path: "/courses/mobile-app-development",
  },
  {
    title: "Graphic Design",
    desc: "Branding, typography, and creative visual systems.",
    duration: "3 Months",
    level: "Beginner",
    img: graphic,
    path: "/courses/graphic-design",
  },
  {
    title: "Video Editing",
    desc: "Professional video production and post-production workflows.",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    img: editing,
    path: "/courses/video-editing",
  },
  {
    title: "Computer Appreciation",
    desc: "Digital literacy and foundational computing knowledge.",
    duration: "2 Months",
    level: "Beginner",
    img: computer,
    path: "/courses/computer-appreciation",
  },
  {
    title: "Introduction to AI",
    desc: "Artificial intelligence concepts and machine learning basics.",
    duration: "3 Months",
    level: "Beginner – Intermediate",
    img: ai,
    path: "/courses/introduction-to-ai",
  },
  {
    title: "UI/UX Design",
    desc: "User research, prototyping, and product interface systems.",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    img: uiux,
    path: "/courses/ui-ux-design",
  },
];

const CourseCard = ({ course, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.04 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
  >
    <div className="relative h-52 overflow-hidden bg-slate-100">
      <img
        src={course.img}
        alt={course.title}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = fallbackImage)}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>

    <div className="p-6">
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
        {course.level}
      </span>

      <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-3">
        {course.title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed mb-6">
        {course.desc}
      </p>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock size={16} />
          {course.duration}
        </div>

        <Link to={course.path} className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition">
          View Details <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  </motion.div>
);

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  
  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courseData;
    
    const query = searchQuery.toLowerCase();
    return courseData.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.desc.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <section className="bg-slate-50 py-20 px-6 lg:px-20 min-h-screen pt-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-sm text-slate-400 mb-2">
            Home <span className="mx-2">//</span> Courses
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Our Academic Programs"}
          </h1>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-slate-600">
              Found <span className="font-semibold text-blue-600">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
            <button 
              onClick={clearSearch}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition"
            >
              <X size={16} />
              Clear search
            </button>
          </div>
        )}

        {/* No Results Message */}
        {searchQuery && filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search terms or browse all courses</p>
            <button 
              onClick={clearSearch}
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              View all courses
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesPage;
