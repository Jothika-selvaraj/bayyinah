import React from "react";
import Image from "next/image"; // Import Image from next/image

const Section4 = () => {
  return (
    <div className="relative bg-white text-center py-20 px-6">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-gray-100 opacity-30">
        <Image
          src="/assets/Course/Sec4.jpeg" // Replace with the new image URL
          alt="Background"
          className="w-full h-full object-cover"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Ensures the image maintains the correct aspect ratio
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl text-gray-800">
          Best teachers in every subject.
        </h1>
        <p className="text-md text-[#F14D5D] font-bold mt-2 uppercase">
          We can teach you anything
        </p>
        <button className="mt-12 px-6 py-3 bg-[#204f61] text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section4;
