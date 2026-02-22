import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Contact us", path: "/contact" },
  { name: "FAQ’s", path: "/faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-[100] border-b border-slate-100">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="container mx-auto px-4 md:px-8 py-3"
      >
        {/* MOBILE + TABLET (below xl) */}
        <div className="grid grid-cols-3 items-center xl:hidden">

          {/* Left - Menu */}
          <div>
            <button
              onClick={() => setOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-full transition"
            >
              <Menu size={24} className="text-slate-800" />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-9 w-auto object-contain" />
            </Link>
          </div>

          {/* Right - Icons */}
          <div className="flex justify-end gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-full transition">
              <Search size={20} className="text-slate-700" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition">
              <User size={20} className="text-slate-700" />
            </button>
          </div>
        </div>

        {/* DESKTOP (xl and above only) */}
        <div className="hidden xl:flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            </Link>

            {/* Search */}
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5 text-sm min-w-[300px]">
              <Search size={16} className="text-slate-400" />
              <input
                type="text"
                placeholder="Want to learn?"
                className="bg-transparent outline-none flex-1 text-slate-700"
              />
              <div className="h-4 w-[1px] bg-slate-200 mx-1" />
              <button className="flex items-center gap-1 text-slate-900 font-bold text-xs hover:text-blue-600">
                Explore <ChevronDown size={12} />
              </button>
            </div>
          </div>

          {/* Center Nav */}
          <ul className="flex gap-10 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link
              to="/signin"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition active:scale-95"
            >
              Create account
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE/TABLET DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[110]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[85%] max-w-[320px] bg-white z-[120] shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-10 border-b pb-4">
                <img src={logo} alt="Logo" className="h-8" />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-12 border-t pt-6 flex flex-col gap-4">
                <Link
                  to="/signin"
                  className="text-slate-700 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="bg-blue-600 text-white py-3 rounded-lg text-center font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Create account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
