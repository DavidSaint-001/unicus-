import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { MousePointer2, Code2, LineChart, Palette } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const courses = [
  { title: "Interaction Design", desc: "Lessons on design that cover the most recent developments.", icon: <MousePointer2 size={20} />, hoverBg: "group-hover:bg-[#FFC107]", iconColor: "text-amber-500" },
  { title: "UX Design Course", desc: "Classes in development that cover recent advancements.", icon: <Code2 size={20} />, hoverBg: "group-hover:bg-blue-600", iconColor: "text-blue-600" },
  { title: "UI Design", desc: "User Interface Design courses covering recent trends.", icon: <LineChart size={20} />, hoverBg: "group-hover:bg-rose-500", iconColor: "text-rose-500" },
  { title: "Graphic Design", desc: "Visual communication and layout for modern brands.", icon: <Palette size={20} />, hoverBg: "group-hover:bg-emerald-500", iconColor: "text-emerald-500" },
];

const CourseSlider = () => {
  return (
    <section className="py-16 bg-white text-slate-900 overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-12 text-center lg:text-left">
        <h4 className="text-amber-500 font-bold uppercase tracking-[0.25em] text-[10px] mb-3">
          Our Services
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl leading-tight text-slate-900">
          Fostering a playful & engaging <br className="hidden lg:block" /> learning environment
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              {/* The Card */}
              <div className="group relative h-[320px] rounded-[2rem] bg-white p-10 transition-all duration-500 border border-slate-100 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                
                {/* The "Yellow/Blue/etc Stuff" Layer */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${course.hoverBg}`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Container */}
                    <div className={`w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:bg-white/20 group-hover:text-white ${course.iconColor}`}>
                      {course.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-500 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-white transition-all">
                    Learn More <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { 
          background: #E2E8F0 !important; 
          opacity: 1 !important; 
        }
        .swiper-pagination-bullet-active { 
          background: #FFC107 !important; 
          width: 28px !important; 
          border-radius: 99px !important; 
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default CourseSlider;