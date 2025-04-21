import React, { use } from "react";
import Heading from "./Heading";
import {
  FaReact,
  FaShoppingCart,
  FaCode,
  FaMapMarkedAlt,
  FaPaintBrush,
  FaGlobe,
  FaRegEdit,
  FaInstagram,
} from "react-icons/fa";
import { Element } from "react-scroll";
import { ThemeContext } from "./Theme";

const Services = () => {
  const { theme } = use(ThemeContext);

  const services = [
    {
      icon: <FaReact className="w-8 h-8" />,
      title: "Custom Website Development",
      description:
        "Professional and responsive websites tailored to your needs",
      features: [
        "Modern React-based architecture",
        "Responsive design for all devices",
        "SEO optimization",
        "Fast loading speeds",
      ],
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores to boost your business",
      features: [
        "Secure payment integration",
        "Inventory management",
        "Order tracking system",
        "Customer analytics",
      ],
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web Applications",
      description: "Complex web applications with powerful features",
      features: [
        "Real-time data processing",
        "User authentication",
        "Cloud integration",
        "Scalable architecture",
      ],
    },
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: "Logo Design",
      description: "Unique and memorable logo designs for your brand identity",
      features: [
        "Custom vector logos",
        "Multiple revisions",
        "Color & typography matching",
        "Social media optimized formats",
      ],
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      title: "Google Maps Business Setup",
      description: "Make your business visible on Google Maps and local search",
      features: [
        "Add location to Google Maps",
        "Verify business listing",
        "Optimize Google My Business profile",
        "Improve local search visibility",
      ],
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Hosting & Domain Integration",
      description: "Deploy your website with custom domains and SSL",
      features: [
        "Premium hosting & domains",
        "Domain purchase help",
        "SSL setup",
        "Performance tweaks",
      ],
    },
    {
      icon: <FaRegEdit className="w-8 h-8" />,
      title: "Website Redesign & Fixing",
      description:
        "Modernize and optimize existing websites for better results",
      features: [
        "Redesign outdated UIs",
        "Improve speed and UX",
        "Fix responsive issues",
        "Basic SEO improvement",
      ],
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: "Social Media Integration",
      description: "Connect your website with your social presence",
      features: [
        "Live Instagram feeds",
        "Share buttons",
        "Meta preview tags",
        "WhatsApp/FB chat widgets",
      ],
    },
  ];

  return (
    <Element
      name="services"
      className={`px-5 pb-10 w-full ${
        theme === "Dark" ? "bg-[#121212]" : "bg-white"
      }  transition-all duration-[800ms] ease-in-out `}
    >
      <div className="text-white max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold  pb-2 ${theme === "Dark" ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent" : "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"}  transition-all duration-[800ms] ease-in-out `}>
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={` rounded-xl shadow-lg p-8 transform  hover:-translate-y-2 ${theme === "Dark" ? "bg-gray-800" : "bg-blue-100"} transition-all ease-in-out duration-[800ms]`}
            >
              <div className={` text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 ${theme === "Dark" ? "bg-cyan-500" : "bg-blue-500"} `}>
                {service.icon}
              </div>
              <h2 className={`text-2xl font-bold  mb-4 ${theme === "Dark" ? "text-cyan-500" : "text-blue-500"} transition-all ease-in-out duration-[800ms]`}>
                {service.title}
              </h2>
              <p className={` mb-6 ${theme === 'Dark' ? "text-gray-400" : "text-blue-400"} transition-all ease-in-out duration-[800ms]`}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${theme === "Dark" ? " text-gray-500 " : "text-indigo-400"} transition-all ease-in-out duration-[800ms]`}
                  >
                    <span className="text-cyan-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
