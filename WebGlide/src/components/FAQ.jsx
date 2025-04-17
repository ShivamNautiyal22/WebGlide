import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
        "Need help? Our dedicated team is here to assist you with any questions or technical issues. Reach out via email or live chat — we’re always close by and happy to help!",
    },
  ];

  return (
    <section className="w-full bg-[#121212]">
      <div className="py-7 px-5 text-white max-w-[1440px] mx-auto">
        <h2 className="text-5xl font-bold text-center my-10 text-cyan-400">
          FAQ's
        </h2>
        <div className="space-y-2 sm:mx-10 md:mx-18">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-cyan-900 rounded-lg bg-gray-800 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span className="font-bold text-[19px] flex-1">
                  {item.title}
                </span>
                {activeIndex === index ? (
                  <IoIosArrowUp className="text-cyan-400 transition-transform duration-300" />
                ) : (
                  <IoIosArrowDown className="text-cyan-400 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`px-4 pr-10 overflow-hidden transition-all duration-150 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] py-3 opacity-100"
                    : "max-h-0 opacity-0"
                } text-cyan-100`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
