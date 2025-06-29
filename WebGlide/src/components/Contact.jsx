import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className=" mx-auto h-screen overflow-x-hidden  relative ">
      <div className=" mx-auto">
        <div className="relative">
          <div>
            <div className="w-70 h-70 absolute top-20 left-60 bg-violet-500/30 filter blur-3xl rounded-full"></div>
            <div className="w-70 h-70 absolute top-90 right-30 bg-cyan-500/40 filter blur-3xl rounded-full"></div>
          </div>
          <div className=" bg-[#1212126a] absolute z-1 top-0 left-0"></div>
        </div>
        <div className="text-white absolute top-0 left-0 z-20 w-full  px-5 sm:px-0">
          <form
            action="https://formsubmit.co/9cf0533373b5849c9e31c70a46343184"
            method="POST"
            className="flex justify-center"
          >
            <div className="my-25 ">
              <div className="flex gap-6 mb-3">
                <label htmlFor="Fname">
                  <h1 className="mb-1">First Name</h1>
                  <input
                  required
                    name="First Name"
                    type="text"
                    id="Fname"
                    className="border-2 focus:outline-none w-full py-2 px-3 rounded-[8px]"
                    placeholder="John"
                  />
                </label>
                <label htmlFor="Lname">
                  <h1 className="mb-1">Last Name</h1>
                  <input
                  required
                    name="Last Name"
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
                  required
                    name="Email"
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
                  required
                    name="Number"
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
                    name="Plan Choosen"
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
                    rows={4}
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
              <div className="text-end mt-1">
                <Link
                  to="/"
                  className="text-[14px] text-gray-300 underline  cursor-pointer"
                >
                  Return back to home
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
