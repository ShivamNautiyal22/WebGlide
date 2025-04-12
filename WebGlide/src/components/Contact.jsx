import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative ">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative">
          <img
            src="/contact.jpg"
            alt="contact"
            className="w-full h-screen object-cover object-center"
          />
          <div className="h-screen w-full bg-[#1212126a] absolute z-1 top-0 left-0"></div>
        </div>
        <div className="text-white absolute top-0 float-end w-full z-92">
          <Link to= "/" className=" mt-2 mr-5 flex items-center float-end gap-2 cursor-pointer border-2 rounded-full px-3 py-1 hover:bg-white hover:text-black duration-350">
            <FaHome className="text-[18px] mb-[2px]" />
            <h1 className="text-[18px]">Home</h1>
          </Link>
        </div>
        <div className="text-white absolute top-0 left-0 z-20 w-full  px-5 sm:px-0">
          <form className="flex justify-center">
            <div className="mt-25 ">
              <div className="flex gap-6 mb-3">
                <label htmlFor="Fname">
                  <h1 className="mb-1">First Name</h1>
                  <input
                    type="text"
                    id="Fname"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    placeholder="John"
                  />
                </label>
                <label htmlFor="Lname">
                  <h1 className="mb-1">Last Name</h1>
                  <input
                    type="text"
                    id="Lname"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    placeholder="Doe"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <h1 className="mb-1">Email</h1>
                  <input
                    type="email"
                    id="email"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    placeholder="abc@gmail.com"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="phone">
                  <h1 className="mb-1">Phone</h1>
                  <input
                    type="number"
                    id="phone"
                    className="border-2 focus:outline-none w-full no-spinner py-2 px-3 rounded-[8px]"
                    placeholder="+91 01234-56789"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="plan">
                  <h1 className="mb-1">Select Plan</h1>
                  <select
                    id="plan"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    defaultValue="Professional"
                  >
                    <option value="starter" className="bg-gray-800 ">
                      Starter
                    </option>
                    <option value="professional" className="bg-gray-800 ">
                      Professional
                    </option>
                    <option value="premium" className="bg-gray-800 ">
                      Premium
                    </option>
                  </select>
                </label>
              </div>
              <div className="mb-6">
                <label htmlFor="message">
                  <h1 className="mb-1">Your Message</h1>
                  <textarea
                    name="message"
                    id="message"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    placeholder="Type what's in your mind"
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="w-full border-2 py-2 px-3 rounded-[8px] cursor-pointer bg-white text-black hover:bg-transparent hover:text-white duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
