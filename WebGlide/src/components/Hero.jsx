import React from "react";

const Hero = () => {
  return (
    <section className="pt-20 px-5">
      <div className=" min-h-screen relative overflow-hidden">
        {/* Animated background elements */}

        <div className="absolute inset-0 z-[-1]">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/18 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/13 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main content */}
        <div className="text-white h-[80vh] flex items-center justify-center">
          <div>
            <h1 className="text-center text-6xl mb-4">
              <span className="text-cyan-400">Affordable</span> Websites ,{" "}
              <span className="text-cyan-400">Premium</span> Vibes.
            </h1>
            <p className="text-center text-xl mb-7">
              Get a beautiful, functional site designed with care — fast,
              reliable, and budget-friendly.
            </p>
            <div className="flex justify-center">
              <button className="cursor-pointer hover:scale-110 duration-250 bg-cyan-600 py-2 px-4 text-xl rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
