import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as Move } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navList = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "FAQ's", to: "faq's" },
    { name: "About", to: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-gray-900/20 shadow-2xl backdrop-blur-2xl"
          : "py-4 bg-transparent"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Move
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl md:text-3xl font-bold text-white cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Web<span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Glide.</span>
            </Move>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navList.map((nav, index) => (
                  <Move
                    key={index}
                    to={nav.to}
                    smooth={true}
                    duration={500}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-[17px] font-medium cursor-pointer group"
                  >
                    {nav.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Move>
                ))}
              </ul>
              <Link
                to="/contact"
                className="ml-6 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium text-[15px] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <IoClose size={28} /> : <CgMenuRight size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <Move
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Web<span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Glide.</span>
            </Move>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <IoClose size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-3">
              {navList.map((item, index) => (
                <li key={index}>
                  <Move
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Move>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border-t border-gray-800">
            <Link
              to="/contact"
              className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;