import React, { use } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { ThemeContext } from "./Theme";

const Pricing = () => {
  const { theme } = use(ThemeContext);

  const pricingPlans = [
    {
      name: "Basic Website",
      price: "9999",
      description: "Perfect for small business websites",
      features: [
        { text: "5-Page Professional Website", available: true },
        { text: "Mobile Responsive Design", available: true },
        { text: "Contact Form Integration", available: true },
        { text: "Basic SEO Setup", available: true },
        { text: "Social Media Integration", available: true },
        { text: "3 Months Free Support", available: true },
        { text: "Custom Animations", available: false },
        { text: "Advanced Features", available: false },
        { text: "Database Integration", available: false },
        { text: "User Authentication", available: false },
        { text: "AI Integration", available: false },
      ],
      buttonText: "Start Project",
      popular: false,
    },
    {
      name: "Business Website",
      price: "17999",
      description: "Website with custom features",
      features: [
        { text: "10-Page Dynamic Website", available: true },
        { text: "Mobile Responsive Design", available: true },
        { text: "Advanced Contact System", available: true },
        { text: "Complete SEO Package", available: true },
        { text: "Social Media Integration", available: true },
        { text: "6 Months Free Support", available: true },
        { text: "Custom Animations", available: true },
        { text: "Advanced Features", available: true },
        { text: "Database Integration", available: false },
        { text: "User Authentication", available: false },
        { text: "AI Integration", available: false },
      ],
      buttonText: "Start Project",
      popular: true,
    },
    {
      name: "Web Application",
      price: "29999",
      description: "Full-featured web application",
      features: [
        { text: "Custom Web Application", available: true },
        { text: "Mobile Responsive Design", available: true },
        { text: "Advanced User System", available: true },
        { text: "Enterprise SEO Package", available: true },
        { text: "Full API Integration", available: true },
        { text: "12 Months Free Support", available: true },
        { text: "Custom Animations", available: true },
        { text: "Advanced Features", available: true },
        { text: "Database Integration", available: true },
        { text: "User Authentication", available: true },
        { text: "AI Integration", available: true },
      ],
      buttonText: "Start Project",
      popular: false,
    },
  ];

  return (
    <Element
      name="pricing"
      id="Pricing"
      className={`px-5 w-full ${
        theme === "Dark" ? "bg-[#121212]" : "bg-white"
      } transition-all duration-[800ms] ease-in-out`}
    >
      <div className="py-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "Dark"
                ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            } transition-all duration-[800ms] ease-in-out`}
          >
            Project Investment Plans
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "Dark" ? " text-gray-300" : "text-blue-500"
            } transition-all duration-[800ms] ease-in-out`}
          >
            Choose the perfect solution for your web development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl p-8 flex flex-col h-full ${
                plan.popular
                  ? `border-2 ${
                      theme === "Dark" ? "border-cyan-500" : "border-blue-500"
                    }`
                  : ""
              }
              ${theme === "Dark" ? "bg-gray-800 " : "bg-blue-200"} transition-all duration-[800ms] ease-in-out`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span
                    className={` text-white px-4 py-1 rounded-full text-sm font-semibold ${
                      theme === "Dark" ? "bg-cyan-500" : "bg-blue-500"
                    } transition-all duration-[800ms] ease-in-out`}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    theme === "Dark" ? "text-white " : "text-blue-600"
                  } transition-all duration-[800ms] ease-in-out`}
                >
                  {plan.name}
                </h3>
                <p
                  className={` mb-6 ${
                    theme === "Dark" ? "text-gray-300" : "text-blue-500"
                  } transition-all duration-[800ms] ease-in-out`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-5xl font-bold  ${
                      theme === "Dark" ? "text-white" : "text-blue-500"
                    } transition-all duration-[800ms] ease-in-out`}
                  >
                    ₹{plan.price}
                  </span>
                  <span
                    className={` text-lg ${
                      theme === "Dark" ? "text-gray-300" : "text-indigo-500"
                    } transition-all duration-[800ms] ease-in-out`}
                  >
                    {" "}
                    one-time
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${
                      feature.available
                        ? theme === "Dark"
                          ? "text-gray-300"
                          : "text-indigo-600"
                        : theme === "Dark"
                        ? "text-white/60"
                        : "text-gray-700"
                    } transition-all duration-[800ms] ease-in-out`}
                  >
                    {feature.available ? (
                      <FaCheck
                        className={`${
                          theme === "Dark" ? "text-cyan-500" : "text-indigo-500"
                        } mr-2 flex-shrink-0 transition-all duration-[800ms] ease-in-out`}
                      />
                    ) : (
                      <FaTimes className="text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full py-3 px-6 text-center rounded-lg font-semibold transition-colors mt-auto ${
                  plan.popular
                    ? theme === "Dark"
                      ? "bg-cyan-500 text-white hover:bg-cyan-600"
                      : "bg-indigo-500 text-white hover:bg-indigo-400"
                    : theme === "Dark"
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-indigo-400 text-white hover:bg-indigo-500"
                } transition-all duration-[800ms] ease-in-out`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Pricing;
