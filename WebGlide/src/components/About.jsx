import React from "react";
import image1 from "../../public/profile-1.png";
import image2 from "../../public/profile-2.png";
import {
  AiOutlineGlobal,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const About = () => {
  const ProfileCard = [
    {
      Image: image1,
      Name: "Shivam Nautiyal",
      title: "Web Developer ~ Full Stack Developer",
      Quote: `"Design. Develop. Deliver with passion."`,
      Portfolio: "https://its-shivam-portfolio.netlify.app/",
      Github: "https://github.com/shivamNautiyal22/",
    },
    {
      Image: image2,
      Name: "Aditya Kumar",
      title: "Web Developer ~ Full Stack Developer",
      Quote: `"Web solutions that truly glide."`,
      Portfolio: "https://akportfolio29.netlify.app/",
      Github: "https://github.com/AdityaKumarThakur12/",
    },
  ];
  return (
    <section className="px-5 w-full text-white">
      <div className="py-18 max-w-[1440px] mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-500 mb-10">
            Meet the Founders
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-[92%] mx-auto mb-30">
            Welcome to <span className="text-cyan-400 ">Webglide</span> – where
            ideas take flight and brands come to life! Founded by{" "}
            <span className="text-cyan-400 ">Shivam Nautiyal</span> and{" "}
            <span className="text-cyan-400 ">Aditya Kumar</span>,{" "}
            <span className="text-cyan-400 ">Webglide</span> is a creative
            digital studio passionate about building beautiful, responsive, and
            impactful websites. Whether you're a{" "}
            <span className="text-cyan-400 ">startup dreaming big</span> or a
            brand looking to refresh its online identity, we’re here to craft a
            unique digital presence tailored to your vision. With a strong focus
            on design, performance, and user experience, we turn your ideas into
            smooth, engaging web experiences that{" "}
            <span className="text-cyan-400 ">
              glide your brand into the spotlight
            </span>
            .
          </p>
        </div>
        <div className=" grid grid-cols-1  place-items-center w-full sm:grid-cols-1 gap-28 lg:grid-cols-2 lg:w-[85%] xl:w-[70%] lg:gap-2 mx-auto">
          {ProfileCard.map(
            ({ Image, Name, title, Quote, Portfolio, Github }, index) => {
              return (
                <div
                  key={index}
                  className="w-[90%] sm:w-[400px] bg-gray-800 py-2 px-4 relative rounded-2xl"
                >
                  <div className="max-h-[130px] max-w-[130px] mx-auto absolute  left-[50%] translate-[-50%] ">
                    <img src={Image} alt={Name} className="rounded-full" />
                  </div>
                  <div className="pt-20 text-center">
                    <h1 className="text-2xl text-cyan-300 mb-2">{Name}</h1>
                    <p className=" mb-3 text-[17px]">{title}</p>
                    <p className="text-gray-300 text-base">{Quote}</p>
                    <div className="flex items-center justify-center text-[28px] my-6 gap-5">
                      <AiOutlineMail className="cursor-pointer hover:text-cyan-400 hover:scale-140 duration-300" />
                      <BsLinkedin className="cursor-pointer hover:text-cyan-400 hover:scale-140 duration-300" />
                      <a href={Github} target="_blank">
                        <AiOutlineGithub className="cursor-pointer hover:text-cyan-400 hover:scale-140 duration-300" />
                      </a>
                    </div>
                    <a href={Portfolio} target="_blank">
                      <div className="flex gap-3 items-center justify-center my-3 bg-gray-900 rounded-full py-3 cursor-pointer hover:bg-cyan-600 duration-300">
                        <AiOutlineGlobal className="text-2xl" />
                        <button className="text-[19px]">View Portfolio</button>
                      </div>
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
