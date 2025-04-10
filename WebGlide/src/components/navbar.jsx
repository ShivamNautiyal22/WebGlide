import React from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const navList = ["Home", "Services", "Pricing", "About", "Contact"];
  return (
    <nav className="w-full border-b-1 border-gray-700 fixed top-0 z-100 backdrop-blur-2xl py-4 px-5">
      <div className="text-white  max-w-[1440px] mx-auto flex items-center justify-between  ">
        {/* logo */}
        <div>
          <h1 className="text-3xl">
            Web<span className="text-cyan-500">Glide.</span>
          </h1>
        </div>

        {/* desktop */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-2 text-[19px]">
            {navList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:bg-cyan-800 hover:text-white py-[6px] cursor-pointer px-3 rounded-[5px] duration-300"
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-cyan-600 py-[7px] px-3 rounded-[5px] text-[17px] cursor-pointer hover:bg-cyan-700 hover:shadow-cyan-600 duration-200 hidden lg:block ">
          <button className="cursor-pointer">Get Started</button>
        </div>

        {/* mobile */}
        <div className="lg:hidden">
          <CgMenuRight size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
