import React from "react";
import { motion } from "framer-motion";
import about from '../assets/about img.png';
import {
  Users,
  CreditCard,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-slate-50 text-slate-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="pt-20 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-slate-400 mb-2">
            Home <span className="mx-2">//</span> About Us
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            About Unicus Campus
          </h1>
          <p className="mt-6 text-slate-600 max-w-2xl leading-relaxed">
            Unicus Campus is committed to preparing the next generation of
            technology professionals through practical, industry-aligned
            training programs that transform potential into expertise.
          </p>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="px-6 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={about}
              alt="Tech classroom"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16">
              <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed">
                “For over four years, we’ve built immersive learning
                environments where students develop real-world solutions and
                graduate industry-ready.”
              </p>
            </div>

            <div className="absolute top-8 right-8 bg-white rounded-xl px-6 py-4 shadow-md flex items-center gap-4">
              <Users className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-lg">4+ Years</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Experience
                </p>
              </div>
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
                text: "We provide high-quality training at competitive rates, ensuring opportunity is open to everyone.",
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
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>
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
                  We combine structured learning, mentorship, and practical
                  experience to ensure our students are fully equipped for the
                  demands of today’s digital economy.
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
