import React from "react";
import { PiCopyrightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Link as Move } from "react-scroll";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const navList = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "FAQ's", to: "faq's" },
    { name: "About", to: "about" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={30} />, href: "https://www.facebook.com/profile.php?id=61574969296710" },
    { icon: <FaInstagram size={30} />, href: "https://www.instagram.com/webglide_/" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-[#121212] border-t-gray-800 border-2 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-4">
              Web<span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Glide.</span>
            </h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafted with passion by Shivam Nautiyal and Aditya Kumar. We help brands build their online presence through sleek, responsive, and powerful websites. Let your ideas glide with us.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navList.map((item, index) => (
                <li key={index}>
                  <Move
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Move>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Let's Connect</h3>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                Ready to transform your digital presence? We're here to help bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <PiCopyrightFill className="mr-2" />
              <span>2025 WebGlide. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;