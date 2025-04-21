import React from "react";
import { useState, useEffect, use } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as Move } from "react-scroll";
import { ThemeContext } from "./Theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = use(ThemeContext);

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
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 shadow-xl backdrop-blur-xl" : "py-4 bg-transparent"
        }
        
        `}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Move
              to="home"
              smooth={true}
              duration={500}
              className={`text-2xl md:text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === "Dark" ? "text-white" : "text-indigo-500"
              }`}
            >
              Web
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Glide.
              </span>
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
                    className={`relative px-4 py-2 transition-colors duration-300 text-[17px] font-medium cursor-pointer group ${
                      theme === "Dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-indigo-500"
                    }`}
                  >
                    {nav.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Move>
                ))}
              </ul>
              <div className="flex items-center ml-2">
                <button
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
                >
                  {theme === "Dark" ? (
                    <MdLightMode />
                  ) : (
                    <MdDarkMode className="text-indigo-500" />
                  )}
                </button>
                <Link
                  to="/contact"
                  className={`ml-6 px-6 py-2.5  text-white rounded-lg font-medium text-[15px]  transition-all duration-[400ms] ease-in-out hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    theme === "Dark"
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600"
                      : "bg-gradient-to-r from-indigo-500 to-cyan-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-5 lg:hidden">
              <button
                className="text-white text-2xl cursor-pointer "
                onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
              >
                {theme === "Dark" ? (
                  <MdLightMode />
                ) : (
                  <MdDarkMode className="text-indigo-500" />
                )}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={` ${
                  theme === "Dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-indigo-600 hover:text-blue-400"
                } focus:outline-none`}
              >
                {isMenuOpen ? <IoClose size={28} /> : <CgMenuRight size={28} />}
              </button>
            </div>
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
        className={`fixed top-0 right-0 h-full w-full max-w-sm ${
          theme === "Dark" ? "bg-gray-900 " : "bg-white "
        } z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className={`flex items-center justify-between p-6 border-b ${theme === "Dark" ? "border-gray-800" : "border-gray-400 border-b-blue-300"}`}>
            <Move
              to="home"
              smooth={true}
              duration={500}
              className={`text-2xl md:text-3xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === "Dark" ? "text-white" : "text-indigo-500"
              }`}
            >
              Web
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Glide.
              </span>
            </Move>

            <button
              onClick={() => setIsMenuOpen(false)}
              className={`${theme === "Dark" ? "text-gray-400 hover:text-white" : "text-indigo-500 hover:text-blue-700"} transition-colors duration-300`}
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
                    className={`block px-4 py-3 rounded-lg transition-colors duration-[800ms] ease-in-out ${theme === "Dark" ? "text-gray-300 hover:text-white hover:bg-gray-800/50" : "text-blue-500 hover:text-white hover:bg-indigo-400"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Move>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-6 border-t  ${theme === "Dark" ? "border-gray-800" : "border-gray-300"}`}>
            <Link
              to="/contact"
              className={`block w-full px-6 py-3 ${theme === "Dark" ? "bg-gradient-to-r from-cyan-500 to-cyan-600" :"bg-gradient-to-r from-cyan-500 to-indigo-600"} text-white rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5`}
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
