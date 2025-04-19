import React from "react";
import { AiOutlineGlobal, AiOutlineGithub, AiOutlineMail, AiFillStar } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Element } from "react-scroll";

const About = () => {
  const ProfileCard = [
    {
      Image: "/profile-1.png",
      Name: "Shivam Nautiyal",
      title: "Web Developer ~ Full Stack Developer",
      Quote: `"Design. Develop. Deliver with passion."`,
      Portfolio: "https://its-shivam-portfolio.netlify.app/",
      Github: "https://github.com/shivamNautiyal22/",
      Mail: "mailto:Snautiyal881@gmail.com?subject=Business%20Inquiry%20Regarding%20WebGlide%20Services",
      LinkedIn : "https://in.linkedin.com/"
    },
    {
      Image: "/profile-2.png",
      Name: "Aditya Kumar",
      title: "Web Developer ~ Full Stack Developer",
      Quote: `"Web solutions that truly glide."`,
      Portfolio: "https://akportfolio29.netlify.app/",
      Github: "https://github.com/AdityaKumarThakur12/",
      Mail: "mailto:aditya3863297@gmail.com?subject=Business%20Inquiry%20Regarding%20WebGlide%20Services",
      LinkedIn : "https://in.linkedin.com/"
    },
  ];

  return (
    <Element name="about" className="w-full min-h-screen bg-gradient-to-b from-[#121212] to-gray-900 py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <AiFillStar className="text-cyan-400 text-2xl animate-pulse" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                Meet the Founders
              </h2>
              <AiFillStar className="text-cyan-400 text-2xl animate-pulse" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-cyan-400 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to <span className="text-cyan-400 font-semibold">WebGlide</span> – where
            ideas take flight and brands come to life! Founded by{" "}
            <span className="text-cyan-400 font-semibold">Shivam Nautiyal</span> and{" "}
            <span className="text-cyan-400 font-semibold">Aditya Kumar</span>, we're a creative
            digital studio passionate about crafting beautiful, responsive, and impactful websites
            that make your brand stand out in the digital landscape.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {ProfileCard.map(({ Image, Name, title, Quote, Portfolio, Github,LinkedIn, Mail }, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900/90"></div>
              
              <div className="relative p-8">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400/20 shadow-lg shadow-cyan-500/20 mb-6">
                    <img
                      src={Image}
                      alt={Name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {Name}
                  </h3>
                  <p className="text-gray-300 text-center font-medium mb-3">{title}</p>
                  <p className="text-gray-400 italic text-center mb-6">{Quote}</p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <a href={Mail} target="_blank" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
                      <AiOutlineMail size={24} />
                    </a>
                    <a href={LinkedIn} target="_blank" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
                      <BsLinkedin size={22} />
                    </a>
                    <a href={Github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
                      <AiOutlineGithub size={24} />
                    </a>
                  </div>
                  
                  <a
                    href={Portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                  >
                    <AiOutlineGlobal size={20} />
                    <span>View Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default About;