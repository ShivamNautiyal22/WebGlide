import React, { use, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Theme";

const FAQ = () => {

  const { theme } = use(ThemeContext);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: (
        <>
          What is <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>WebGlide</span>?
        </>
      ),
      content:
        "WebGlide is a creative agency that designs stunning websites, builds impactful brands, and crafts memorable logos tailored to your business needs.",
    },
    {
      title: (
        <>
          Why choose <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>WebGlide</span>?
        </>
      ),
      content:
        "WebGlide combines creativity with cutting-edge technology to deliver websites that not only look great but also perform flawlessly across all devices.",
    },
    {
      title: (
        <>
          What <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>services</span> does{" "}
          <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>WebGlide</span> offer?
        </>
      ),
      content:
        "We offer website design & development, branding solutions, logo creation, UI/UX design, and digital consulting to help your brand stand out.",
    },
    {
      title: (
        <>
          How to <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>get started</span> with{" "}
          <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>WebGlide</span>?
        </>
      ),
      content:
        "Simply reach out to us through our contact form or support channels, and we'll guide you through the entire process—from idea to launch.",
    },
    {
      title: (
        <>
          About <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>WebGlide</span>
        </>
      ),
      content:
        "At WebGlide, every project starts with an idea — and we bring that idea to life through thoughtful design, smart development, and creative strategy that resonates with your audience.",
    },
    {
      title: (
        <>
          Need <span className={` ${theme === "Dark" ? "text-cyan-400 " : "text-indigo-600"} transition-all duration-[800ms] ease-in-out`}>Help</span> With Something?
        </>
      ),
      content:
        "Need help? Our dedicated team is here to assist you with any questions or technical issues. Reach out via email or live chat — we're always close by and happy to help!",
    },
  ];

  return (
    <Element
  name="faq's"
  className={`w-full min-h-screen py-20 transition-all duration-[800ms] ease-in-out ${
    theme === "Dark" ? "bg-[#121212]" : "bg-white"
  }`}
>

      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold  leading-13 pb-2 ${
              theme === "Dark"
                ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            } transition-all duration-[800ms] ease-in-out`}>
            Frequently Asked Questions
          </h2>
          <p className={`mt-4  text-lg ${
              theme === "Dark" ? " text-gray-300" : "text-blue-500"
            } transition-all duration-[800ms] ease-in-out`}>
            Everything you need to know about WebGlide
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl  backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 ${
                activeIndex === index ? "shadow-lg shadow-cyan-500/10" : ""
              }
              ${
                theme === "Dark" ? "bg-gray-800/50  border border-gray-700/50 " : "bg-blue-200  border border-blue-400 " 
              } transition-all duration-[800ms] ease-in-out`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                onClick={() => toggleItem(index)}
              >
                <span className={`font-semibold text-xl  ${theme === "Dark" ? "text-white" : "text-blue-500"} transition-all duration-[800ms] ease-in-out`}>
                  {item.title}
                </span>
                <span className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }
                ${
                  theme=== "Dark" ? "text-cyan-500" : "text-blue-500"
                } transition-all duration-[800ms] ease-in-out`}>
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
                <div className={`px-6 pb-5 leading-relaxed ${theme === "Dark" ? "text-gray-300" : 'text-blue-600'} transition-all duration-[800ms] ease-in-out`}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={` mb-6 ${theme === "Dark" ? "text-gray-400" : "text-blue-500"} transition-all duration-[800ms] ease-in-out`}>
            Still have questions? We're here to help!
          </p>
          <Link to="/contact" className={`px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${theme === "Dark" ? "bg-gradient-to-r from-cyan-500 to-cyan-600" : "bg-gradient-to-r from-indigo-500 to-cyan-600"} transition-all duration-[800ms] ease-in-out`}>
            Contact Support
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default FAQ;