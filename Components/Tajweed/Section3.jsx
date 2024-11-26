import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Section3 = () => {
  return (
    <div className="py-16 px-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black">
          Related <span className="text-[#f14d5d] font-bold">Course</span>
        </h2>
        <p className="mt-4 text-gray-600">
          You don&apos;t have to struggle alone, you&apos;ve got our assistance and help.
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex justify-center gap-6">
        {/* Card 1 */}
        <a
          href="#"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assets/Courses/other.jpg"
              alt="Art and Design"
              width={300}  // Specify the width
              height={192} // Specify the height
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Art & Design
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Become a product Manager learn the skills & job.
            </h3>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="#"
          className="bg-white border rounded-lg shadow-md overflow-hidden w-[300px] hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Image
              src="/assets/Courses/other.jpg"
              alt="Mechanical"
              width={300}  // Specify the width
              height={192} // Specify the height
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#f14d5d] text-white text-sm px-3 py-1 rounded-full">
              Mechanical
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Fundamentals of music theory Learn new
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section3;
