import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Image from 'next/image'; // Importing Image from next/image

const Footer = () => {
  return (
    <div className="">
      {/* Call for Newsletter Overlay */}
      <div className="container relative top-20 z-10 mx-auto ">
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

      {/* Footer Section */}
      <footer className="bg-[#1E1A41] text-white py-10 relative z-0">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 pt-20">
          {/* Logo and App Download Section */}
          <div className="md:col-span-4 space-y-8 flex flex-col items-center md:items-start">
            <Image
              src="/assets/Footer/bglogo.png"
              alt="Bayyinah Academy"
              width={48} // Set appropriate width
              height={48} // Set appropriate height
              className="h-12"
            />
            <p className="text-xl text-center md:text-left">Download our App</p>
            <div className="flex space-x-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Footer/google-play.webp"
                  alt="Google Play"
                  width={120} // Set appropriate width
                  height={40} // Set appropriate height
                  className="h-8"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Footer/apple.webp"
                  alt="App Store"
                  width={120} // Set appropriate width
                  height={40} // Set appropriate height
                  className="h-8"
                />
              </a>
            </div>
          </div>

          {/* Courses Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">COURSES</h3>
            <ul className=" text-lg">
              <li><a href="/" className="hover:text-[#f14d5d]">Tajweed</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Quran</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Arabic</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Memorization</a></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            <ul className=" text-lg">
              <li><a href="/" className="hover:text-[#f14d5d]">About us</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Blog</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Our Teachers</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Testimonials</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">FAQ</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Career</a></li>
              <li><a href="/" className="hover:text-[#f14d5d]">Sitemap</a></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2 text-sm pt-5">
              <div className="flex space-x-4 text-lg mr-12">
                <a href="/" className="hover:text-gray-400">
                  <FaFacebookF className="text-white hover:text-blue-500" />
                </a>
                <a href="/" className="hover:text-gray-400">
                  <FaTwitter className="text-white hover:text-blue-400" />
                </a>
                <a href="/" className="hover:text-gray-400">
                  <FaLinkedinIn className="text-white hover:text-blue-600" />
                </a>
                <a href="/" className="hover:text-gray-400">
                  <FaPinterestP className="text-white hover:text-red-500" />
                </a>
                <a href="/" className="hover:text-gray-400">
                  <FaYoutube className="text-white hover:text-red-600" />
                </a>
              </div>

              <li className="flex items-center space-x-2 pt-2">
                <HiLocationMarker className="text-xl text-white" />
                <span className="leading-tight text-md">
                  128, City Road, London, EC1V 2NX, UNITED KINGDOM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Left Section: Copyright */}
          <div className="mb-4 md:mb-0 ml-12">
            <p>© Bayyinah Academy Ltd.</p>
          </div>

          {/* Middle Section: Links */}
          <div className="mb-4 md:mb-0">
            <a href="/terms" className="hover:underline mx-2">Terms of Service</a> |
            <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4 text-lg mr-12">
            <a href="/" className="hover:text-gray-400">
              <FaFacebookF className="text-white hover:text-blue-500" />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaTwitter className="text-white hover:text-blue-400" />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaLinkedinIn className="text-white hover:text-blue-600" />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaPinterestP className="text-white hover:text-red-500" />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaYoutube className="text-white hover:text-red-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
