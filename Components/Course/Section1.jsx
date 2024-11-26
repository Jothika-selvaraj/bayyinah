import React from "react";
import Image from 'next/image'; // Import Image from next/image

const Section1 = () => {
  return (
    <div className="container mx-auto">
      {/* First Section */}
      <div className="py-4 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative ">
            <Image
              src="/assets/Course/course4.png" // Replace with your image path
              alt="Tajweed"
              className="rounded-lg object-cover"
              width={320}  // Adjust width as needed
              height={320} // Adjust height as needed
            />
            {/* <p className="absolute top-3 bg-[#f14d5d] text-white font-bold bg-opacity-80 p-2 px-4">
              Tajweed
            </p> */}
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h3 className="text-[#f14d5d] font-bold text-lg">Tajweed</h3>
            <h2 className="text-gray-900 text-4xl mb-4">
              Learn Advance <span className="text-[#f14d5d]">Tajweed</span>
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black">
              Enroll Today
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-4 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          {/* Image Section */}
          <div className="text-center md:text-left">
            <h3 className="text-[#f14d5d] font-bold text-lg">Islamic</h3>
            <h2 className="text-gray-900 text-4xl mb-4">
              Learn Advance <span className="text-[#f14d5d]">Islamic</span>
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="bg-[#f14d5d] text-white px-6 py-2 rounded hover:bg-[#e0dada] hover:text-black">
              Enroll Today
            </button>
          </div>
          
          {/* Text Section */}
          <div className="relative ">
            <Image
              src="/assets/Course/course3.png" // Replace with your image path
              alt="Robotics"
              className="rounded-lg object-cover"
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
            />
            {/* <p className="absolute top-8 right-8 bg-[#f14d5d] text-white font-bold bg-opacity-80 p-2 px-4">
              Islamic
            </p> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
