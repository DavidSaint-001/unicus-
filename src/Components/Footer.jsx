import React from 'react';
import { Twitter, Linkedin, Facebook, Github, Dribbble } from 'lucide-react';
import logo from "../assets/logo.png"; // Your imported logo

const Footer = () => {
  const footerLinks = {
    Product: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'],
    Company: ['About us', 'Careers', 'News'],
    Social: ['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Contact'],
  };

  return (
    <footer className="bg-[#427DED] text-white pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              {/* Logo: Clean PNG without background container */}
              <img 
                src={logo} 
                alt="Unicus Campus Logo" 
                className="h-10 w-auto object-contain" 
              />
              
            </div>
            <p className="text-blue-50 text-xs lg:text-sm leading-relaxed max-w-[280px] font-medium opacity-90">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-100/50">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-[13px] font-semibold text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-blue-100 font-medium tracking-wide">
            © {new Date().getFullYear()} Ed-Circle. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Facebook, Github, Dribbble].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-[#427DED] transition-all duration-500"
              >
                <Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;