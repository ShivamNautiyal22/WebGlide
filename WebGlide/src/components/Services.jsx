import React from "react";
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

const Services = () => {
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
    <Element name="services" className="px-5 pb-10 w-full">
      <div className="text-white max-w-[1440px] mx-auto">
        <Heading Heading="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-transform hover:-translate-y-2"
            >
              <div className="bg-cyan-500 text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
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
