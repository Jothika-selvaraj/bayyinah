"use client"

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import react icons

const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Sample FAQ data
  const faqData = [
    'How can I start the classes?',
    'Can I choose timings at my own convenience?',
    'How long will it take to complete the course?',
    'What is the duration of each class?',
    'I have never taken an online course before; will I be able to cope with this?',
    'What application should I use?',
    'What do I need to get started?',
    'What’s the procedure for me to book a trial and actual sessions?',
    'How much would you normally charge for one hour?',
    'Can I do my lessons with a female teacher?',
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(index === openQuestion ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Search Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl  text-gray-800">What Can I Help You?</h2>
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Enter the keyword..."
            className="px-4 py-4 w-full max-w-md border shadow-md rounded-xl"
          />
          <button className="px-6 py-2 bg-[#1f1a41] text-white rounded-r-md hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: FAQ List */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-4xl text-gray-800 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqData.map((question, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 cursor-pointer py-6"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl  text-gray-800">{question}</h4>
                  {openQuestion === index ? (
                    <FiChevronUp className="text-gray-600 text-xl" />
                  ) : (
                    <FiChevronDown className="text-gray-600 text-xl" />
                  )}
                </div>
                {openQuestion === index && (
                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non urna sit
                    amet turpis auctor tincidunt.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-lg shadow-md"
        style={{height:'30rem'}}>
        <h4 className="text-2xl text-gray-800 mb-3">Any Other Question?</h4>
        <form>
            <div className="mb-3">
            <label className="block text-gray-600 mb-1 text-md">Name</label>
            <input
                type="text"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your name"
            />
            </div>
            <div className="mb-3">
            <label className="block text-gray-600 mb-1 text-md">Email</label>
            <input
                type="email"
                className="w-full px-3 py-3 border rounded-md text-sm"
                placeholder="Enter your email"
            />
            </div>
            <div className="mb-3">
            <label className="block text-gray-600 mb-1 text-md">Message</label>
            <textarea
                className="w-full px-3 py-3 border rounded-md text-sm"
                rows="3"
                placeholder="Enter your message"
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full bg-[#231e42] text-white text-xl py-4 rounded-md  hover:bg-gray-800"
            >
            Send
            </button>
        </form>
        </div>



      </div>
    </div>
  );
};

export default FaqSection;
