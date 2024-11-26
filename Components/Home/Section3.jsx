import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

const Section3 = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-md font-bold tracking-wide text-[#204f61] uppercase">
            Our Process
          </h2>
          <h3 className="mt-4 text-5xl  text-black">
            Experience Interactive Learning
          </h3>
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper pulvinar dapibus leo.
          </p>
        </div>

        {/* Content Section */}
        <div className="lg:flex lg:items-center">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-3 border-b-2 border-gray-300 pb-6">
                <div className="text-7xl font-bold text-blue-gray-100 mr-6">01</div>
                <div className="ml-3">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Browse Our Courses
                  </h4>
                  <p className="mt-4 text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-3 border-b-2 border-gray-300  pb-6">
                <div className="text-7xl font-bold text-blue-gray-100 mr-6">02</div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Purchase Quickly and Securely
                  </h4>
                  <p className="mt-4 text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-3 border-b-2 border-gray-300  pb-6">
                <div className="text-7xl font-bold text-blue-gray-100 mr-6">03</div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800">
                    Start Learning Right Away
                  </h4>
                  <p className="mt-4 text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 flex justify-center ">
            <Image
              src="/assets/Header/sec3.jpeg" // Replace with actual image path
              alt="Learning Process"
              width={600} // Specify width
              height={400} // Specify height
              className="shadow-lg w-full max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mt-12 text-center bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto">
          <p className="text-lg font-semibold text-gray-700">
            Ready to learn on-the-go? Download our mobile app eCourse and start
            learning anytime anywhere!
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="/" className="inline-block">
              <Image
                src="/assets/Footer/apple.webp" // Replace with actual image path
                alt="Google Play"
                width={80} // Specify width
                height={80} // Specify height
              />
            </a>
            <a href="/" className="inline-block">
              <Image
                src="/assets/Footer/google-play.webp" // Replace with actual image path
                alt="App Store"
                width={80} // Specify width
                height={80} // Specify height
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
