import React from "react";
import { PiCopyrightFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
 
const Footer = () => {
    const navList = ["Home", "Services", "Pricing", "About", "Contact"];
  return (
    <section className=" w-full">
      <div className="py-7 px-5 text-white max-w-[1440px] mx-auto bg-gray-800">
        <div>
          <h1 className="text-3xl mb-4">
            Web<span className="text-cyan-500">Glide.</span>
          </h1>
          <p className="text-sm text-gray-400 w-[90%]">
            © 2025 Webglide. All rights reserved. Crafted with passion by Shivam
            Nautiyal and Aditya Kumar. We help brands build their online
            presence through sleek, responsive, and powerful websites. Let your
            ideas glide with us.
          </p>
        </div>
        <div className="my-6 space-y-2 sm:flex sm:gap-8">
         {
            navList.map((item, index) => {
              return  <div key={index} className="cursor-pointer hover:underline w-max">
                     {item === "Contact" ? (
                    <Link to="/contact">{item}</Link>
                  ) : (
                    <span>{item}</span>
                  )}
                </div>
            })
         }
        </div>
        <div className="flex items-center justify-center mt-10 text-[15px] text-gray-400"><PiCopyrightFill /> 2025 WebGlide. All rights reserved.</div>
      </div>
    </section>
  );
};

export default Footer;
