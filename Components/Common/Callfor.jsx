import React from 'react';
import Image from 'next/image'; // Importing Image component from next/image

const Callfor = () => {
  return (
    <div className="relative">
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center border border-gray-400 p-5">
          {/* Left Section (Illustration) */}
          <div className="w-full md:w-1/3 flex justify-center p-6">
            <Image
              src="/assets/Common/callfor.png" // Replace with your image path
              alt="Newsletter Illustration"
              width={400} // Set appropriate width
              height={300} // Set appropriate height
              className="w-full max-w-xs md:max-w-50"
            />
          </div>

          {/* Right Section (Content & Form) */}
          <div className="bg-gradient-to-r from-blue-gray-800 to-blue-500 text-white w-0 md:w-2/3 p-6 md:py-8 md:px-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 rounded-xl">
            {/* Heading and Paragraph Section */}
            <div className="flex flex-col md:items-start flex-grow md:flex-none text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Subscribe Our Newsletter</h3>
              <p className="text-sm">Get the most update from our news</p>
            </div>

            {/* Form Section */}
            <form className="flex items-center gap-2 w-full md:w-90 rounded">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-full text-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callfor;
