import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CreditCard, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import img1 from '../assets/1.avif';
import img2 from '../assets/2.avif';
import img3 from '../assets/3.avif';
import img4 from '../assets/4.avif';
import img5 from '../assets/about img.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Each image now has Unicus-specific text
const carouselContent = [
  { img: img1, text: "Empowering students with hands-on learning and real-world projects." },
  { img: img2, text: "Collaboration and mentorship to prepare students for industry success." },
  { img: img3, text: "Practical coding and development skills for modern technology careers." },
  { img: img4, text: "Exploring innovative classrooms that inspire creativity and learning." },
  { img: img5, text: "Guiding the next generation of tech professionals with excellence." },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  // Carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter for "4+ Years"
  useEffect(() => {
    const target = 4;
    let current = 0;
    const stepTime = 300 / target;
    const interval = setInterval(() => {
      current++;
      setCounter(current);
      if (current >= target) clearInterval(interval);
    }, stepTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="pt-20 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900">About Unicus Campus</h1>
          <p className="mt-6 text-slate-600 max-w-2xl leading-relaxed">
            Unicus Campus prepares the next generation of technology professionals through practical, industry-aligned training programs that transform potential into expertise.
          </p>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="px-6 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">

            {/* Image carousel */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={carouselContent[currentIndex].img}
                alt={`Campus ${currentIndex + 1}`}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Text overlay */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-end p-8 md:p-16 text-white text-lg md:text-2xl max-w-2xl leading-relaxed"
              >
                {carouselContent[currentIndex].text}
              </motion.p>
            </AnimatePresence>

            {/* Animated Counter */}
            <div className="absolute top-8 right-8 bg-white rounded-xl px-6 py-4 shadow-md flex items-center gap-4">
              <Users className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-lg">{counter}+ Years</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="px-6 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={26} />,
                title: "Experienced Instructors",
                text: "Our trainers are industry professionals bringing hands-on expertise and mentorship into every session.",
              },
              {
                icon: <CreditCard size={26} />,
                title: "Accessible Learning",
                text: "High-quality training at competitive rates, ensuring opportunity is open to everyone.",
              },
              {
                icon: <Award size={26} />,
                title: "Recognized Certification",
                text: "Graduate with certifications that strengthen your professional credibility and career prospects.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-200"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* ================= WHY UNICUS ================= */}
          <div className="mt-20 bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h4 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  Why Choose Unicus?
                  <CheckCircle2 className="text-blue-600" size={22} />
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  We combine structured learning, mentorship, and practical experience to ensure our students are fully equipped for the demands of today’s digital economy.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-blue-700 transition">
                Explore Programs <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;