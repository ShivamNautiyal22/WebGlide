import React from "react";
import { FaCheck, FaTimes } from 'react-icons/fa'
import {Link} from "react-router-dom"

const Pricing = () => {
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
        { text: "AI Integration", available: false }
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
        { text: "AI Integration", available: false }
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
        { text: "AI Integration", available: true }
      ],
      buttonText: "Start Project",
      popular: false,
    },
  ];

  return (
    <section  className="px-5 w-full">
      <div className="py-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">Project Investment Plans</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect solution for your web development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col h-full ${
                plan.popular ? 'border-2 border-cyan-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">₹{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300 text-lg"> one-time</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className={`flex items-center ${
                      feature.available 
                        ? 'text-gray-600 dark:text-gray-300' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    {feature.available ? (
                      <FaCheck className="text-cyan-500 mr-2 flex-shrink-0" />
                    ) : (
                      <FaTimes className="text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className={`w-full py-3 px-6 text-center rounded-lg font-semibold transition-colors mt-auto ${
                  plan.popular
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
