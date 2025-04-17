import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as Move } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navList = ["Home", "Services", "Pricing", "FAQ's", "About"];
  const navList = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "FAQ's", to: "faq's" },
    { name: "About", to: "about" },
  ];

  return (
    <>
      <nav className="w-full border-b-1 border-gray-700 fixed top-0 z-50 backdrop-blur-2xl py-4 px-5">
        <div className="text-white max-w-[1440px] mx-auto flex items-center justify-between">
          {/* logo */}
          <div>
            <Move
              smooth={true}
              duration={500}
              to="home"
              className="text-3xl font-bold cursor-pointer"
            >
              Web<span className="text-cyan-500">Glide.</span>
            </Move>
          </div>

          {/* desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2 text-[19px]">
              {navList.map((nav, index) => (
                <Move
                  to={nav.to}
                  key={index}
                  smooth={true}
                  duration={500}
                  className="hover:bg-cyan-800 hover:text-white py-[6px] cursor-pointer px-3 rounded-[5px] duration-300"
                >
                  {nav.name}
                </Move>
              ))}
            </ul>
          </div>

          {/* button */}
          <div className="bg-cyan-600 py-[7px] px-3 rounded-[5px] text-[17px] cursor-pointer hover:bg-cyan-700 hover:shadow-cyan-600 duration-200 hidden lg:block">
            <Link to="/contact" className="cursor-pointer">
              Get Started
            </Link>
          </div>

          {/* mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <IoClose size={30} /> : <CgMenuRight size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white focus:outline-none cursor-pointer"
        >
          <IoClose size={30} />
        </button>

        <div className="flex flex-col pt-20 px-4">
          <ul className="space-y-4">
            {navList.map((item, index) => (
              <Move
                key={index}
                to={item.to}
                className="text-white text-lg hover:bg-cyan-800 py-2 px-4 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Move>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/contact"
              className="block bg-cyan-600 text-white text-center py-3 px-4 rounded-md hover:bg-cyan-700 transition-colors duration-200"
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
