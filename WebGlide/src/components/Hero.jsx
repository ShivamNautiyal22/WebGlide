import React from "react";
import { FaRocket, FaPalette, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-cyan-400" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: <FaPalette className="text-4xl text-cyan-400" />,
      title: "Creative Design",
      description: "Unique and eye-catching visuals",
    },
    {
      icon: <FaCode className="text-4xl text-cyan-400" />,
      title: "Clean Code",
      description: "Maintainable and scalable solutions",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/15 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-[44px] sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-14 sm:leading-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Affordable
            </span>{" "}
            Websites with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Premium
            </span>{" "}
            Quality
          </h1>
          <p className="sm:max-w-[80%] mx-auto text-xl text-gray-300">
            Transform your online presence with stunning, high-performance
            websites that don't break the bank. Stand out from the crowd with
            our expert web solutions.
          </p>
          <div className="flex  justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
           
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
