import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: (
        <>
          What is <span className="text-cyan-400">WebGlide</span>?
        </>
      ),
      content:
        "WebGlide is a creative agency that designs stunning websites, builds impactful brands, and crafts memorable logos tailored to your business needs.",
    },
    {
      title: (
        <>
          Why choose <span className="text-cyan-400">WebGlide</span>?
        </>
      ),
      content:
        "WebGlide combines creativity with cutting-edge technology to deliver websites that not only look great but also perform flawlessly across all devices.",
    },
    {
      title: (
        <>
          What <span className="text-cyan-400">services</span> does{" "}
          <span className="text-cyan-400">WebGlide</span> offer?
        </>
      ),
      content:
        "We offer website design & development, branding solutions, logo creation, UI/UX design, and digital consulting to help your brand stand out.",
    },
    {
      title: (
        <>
          How to <span className="text-cyan-400">get started</span> with{" "}
          <span className="text-cyan-400">WebGlide</span>?
        </>
      ),
      content:
        "Simply reach out to us through our contact form or support channels, and we'll guide you through the entire process—from idea to launch.",
    },
    {
      title: (
        <>
          About <span className="text-cyan-400">WebGlide</span>
        </>
      ),
      content:
        "At WebGlide, every project starts with an idea — and we bring that idea to life through thoughtful design, smart development, and creative strategy that resonates with your audience.",
    },
    {
      title: (
        <>
          Need <span className="text-cyan-400">Help</span> With Something?
        </>
      ),
      content:
        "Need help? Our dedicated team is here to assist you with any questions or technical issues. Reach out via email or live chat — we're always close by and happy to help!",
    },
  ];

  return (
    <Element name="faq's" className="w-full min-h-screen bg-gradient-to-b from-[#121212] to-gray-900 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r leading-13 from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent pb-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Everything you need to know about WebGlide
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${
                activeIndex === index ? "shadow-lg shadow-cyan-500/10" : ""
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-xl text-white">
                  {item.title}
                </span>
                <span className={`text-cyan-400 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}>
                  <IoIosArrowDown size={24} />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            Contact Support
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default FAQ;