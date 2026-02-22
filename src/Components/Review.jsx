import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import logo from "../assets/logo.png";

const reviews = [
  {
    text: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
    name: "Jacob Jones",
    role: "Student, National University",
    avatar: "https://i.pravatar.cc/150?u=jacob"
  },
  {
    text: "The mentorship at Unicus Campus is world-class. I moved from beginner to proficient in record time.",
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    text: "Exactly what I needed to bridge the gap between theory and practical industry applications.",
    name: "Michael Chen",
    role: "Fullstack Developer",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    text: "The business modules are insightful and directly applicable to scaling a modern startup.",
    name: "Elena Vance",
    role: "Business Lead",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    text: "Great community, great content, and a platform that actually cares about student success.",
    name: "Marcus Thorne",
    role: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#F4F9F8] py-16 md:py-24 lg:py-32 px-6 overflow-hidden">
      <div className="container mx-auto text-center max-w-5xl">
        
        {/* Logo - Sized specifically for 1080p laptop displays */}
        <div className="flex justify-center mb-10 md:mb-14">
          <img 
            src={logo} 
            alt="Unicus Campus" 
            className="h-8 md:h-10 w-auto object-contain opacity-90" 
          />
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade" // Much smoother on G3 integrated graphics than sliding
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            bulletClass: 'g3-bullet',
            bulletActiveClass: 'g3-bullet-active',
          }}
          className="testimonial-swiper !pb-20 md:!pb-28"
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={idx} className="bg-transparent">
              {/* Responsive Heading: Scaled for G3 screen width */}
              <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium text-slate-900 leading-[1.4] md:leading-[1.3] mb-10 md:mb-14 max-w-4xl mx-auto tracking-tight">
                “{rev.text}”
              </h2>
              
              {/* User Identity Container */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 transition-transform hover:scale-105 duration-300">
                  <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base md:text-lg font-black text-slate-900 leading-none">{rev.name}</h4>
                <p className="text-xs md:text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">{rev.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* HP G3 Optimized CSS */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          bottom: 10px !important;
        }
        /* Standard Dot */
        .g3-bullet {
          width: 8px;
          height: 8px;
          border-radius: 99px;
          background: #427DED;
          opacity: 0.25;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* The Active Capsule */
        .g3-bullet-active {
          width: 32px; 
          opacity: 1;
          box-shadow: 0 4px 10px rgba(66, 125, 237, 0.2);
        }
        
        /* Smooth Fade transition fix for G3 browsers */
        .swiper-slide {
          transition-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;