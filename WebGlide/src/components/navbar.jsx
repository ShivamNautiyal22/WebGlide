import React from "react";

const Navbar = () => {
  const navList = ["Home", "Services", "Pricing", "About", "Contact"];
  return (
    <nav className="w-full border-b-1 border-gray-700">
      <div className="text-white  max-w-[1440px] mx-auto flex items-center justify-between py-4 px-3 ">
        <div>
          <h1 className="text-3xl">
            Web<span className="text-cyan-500">Glide.</span>
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-2 text-[19px]">
            {navList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:bg-cyan-900 hover:text-white py-[6px] cursor-pointer px-3 rounded-[5px] duration-300"
                >
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-cyan-600 py-[7px] px-3 rounded-[5px] text-[17px] cursor-pointer hover:bg-cyan-700 hover:shadow-cyan-600 duration-200 ">
          <button className="cursor-pointer">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
