import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="bg-[#F5F7FA] py-20 px-6 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* MAP SECTION */}
        <div className="mb-20">
          <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-sm border border-slate-200">

            {/* GOOGLE MAPS IFRAME - Unicus Campus Location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.317401536505!2d5.538137214712585!3d5.528809896117828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040ff3b2f667f15%3A0x409c582afb1a7c0e!2sUnicus%20Campus%2C%20Effurun%20GRA%2C%20Effurun!5e0!3m2!1sen!2sng!4v1708100000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Unicus Campus Location"
            ></iframe>

          </div>
        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE – CONTACT INFO */}
          <div>
            <img
              src="/logo.png"
              alt="Unicus Campus"
              className="h-10 mb-8"
            />

            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>

            {/* Contact Info Boxes */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-xl shadow-sm">
                <MapPin size={20} />
                <span className="text-sm font-medium">
                  Suite 12, PTI Shopping Complex, beside PTI Computer Village, Effurun GRA, Warri, Delta State, Nigeria
                </span>
              </div>

              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-xl shadow-sm">
                <Phone size={20} />
                <span className="text-sm font-medium">
                  +234 7066112211
                </span>
              </div>

              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-xl shadow-sm">
                <Mail size={20} />
                <span className="text-sm font-medium">
                  Ejomaserome@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-2">
              Get in touch
            </h2>

            <p className="text-slate-500 mb-10">
              Please fill the form so we can discuss deals
            </p>

            <form className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-blue-600/90 text-white placeholder-white/80 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="date"
                  className="w-full bg-blue-600/90 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-blue-600/90 text-white placeholder-white/80 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-blue-600/90 text-white placeholder-white/80 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full bg-blue-600/90 text-white placeholder-white/80 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-lg transition shadow-md"
              >
                Submit
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;
