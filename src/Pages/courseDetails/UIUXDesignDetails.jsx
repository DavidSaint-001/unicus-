import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart, Users, Award, CheckCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import uiux from '../../assets/ui ux.avif';

const UIUXDesignDetails = () => {
  const navigate = useNavigate();
  
  const course = {
    title: "UI/UX Design",
    description: "Master user research, prototyping, and product interface design to create intuitive and engaging digital experiences.",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    price: "₦130,000",
    image: uiux,
    path: "ui-ux-design",
    highlights: [
      "User Research Methods",
      "Wireframing & Prototyping",
      "Figma Mastery",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ],
    curriculum: [
      { module: "Month 1", title: "UX Fundamentals", topics: ["User Research", "Persona Creation", "User Journeys", "Information Architecture"] },
      { module: "Month 2", title: "UI Design", topics: ["Visual Design", "Typography", "Color Theory", "Figma Essentials"] },
      { module: "Month 3", title: "Prototyping", topics: ["Interactive Prototypes", "Animations", "Design Systems", "Handoff"] },
      { module: "Month 4", title: "Testing & Portfolio", topics: ["Usability Testing", "A/B Testing", "Portfolio Creation", "Case Studies"] }
    ],
    instructor: {
      name: "Sophie Clark",
      title: "UX Lead Designer",
      experience: "9+ years experience"
    }
  };

  const isLoggedIn = !!localStorage.getItem("user");

  const handleRegisterClick = () => {
    if (!isLoggedIn) {
      navigate("/signin", { state: { from: "/course-register", courseData: course } });
    } else {
      navigate("/course-register", { state: { courseData: course } });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-16">
      <div className="relative h-[50vh] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
            <Link to="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
              <ArrowLeft size={20} /> Back to Courses
            </Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {course.title}
            </motion.h1>
            <p className="text-xl text-white/80 max-w-2xl">{course.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg"><Clock size={20} className="text-blue-600" /></div>
              <div><p className="text-sm text-slate-500">Duration</p><p className="font-semibold text-slate-900">{course.duration}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg"><BarChart size={20} className="text-blue-600" /></div>
              <div><p className="text-sm text-slate-500">Level</p><p className="font-semibold text-slate-900">{course.level}</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg"><Users size={20} className="text-blue-600" /></div>
              <div><p className="text-sm text-slate-500">Students</p><p className="font-semibold text-slate-900">340+</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg"><Award size={20} className="text-blue-600" /></div>
              <div><p className="text-sm text-slate-500">Price</p><p className="font-semibold text-slate-900">{course.price}</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="p-4 bg-slate-50 border-b border-slate-200">
                      <span className="text-sm font-medium text-blue-600">{item.module}</span>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {item.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Enroll Now</h3>
              <p className="text-slate-600 mb-6">Become a UX designer.</p>
              <button onClick={handleRegisterClick} className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Register Now
              </button>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Instructor</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center"><Users size={20} className="text-slate-500" /></div>
                  <div><p className="font-medium text-slate-900">{course.instructor.name}</p><p className="text-sm text-slate-500">{course.instructor.title}</p></div>
                </div>
                <p className="text-sm text-slate-500 mt-2">{course.instructor.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesignDetails;
