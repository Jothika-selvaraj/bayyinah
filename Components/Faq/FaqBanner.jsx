import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const FaqBanner = () => {
  return (
    <div className="relative bg-[#1f1a41]">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-20 px-4">
        {/* Left Section (FAQ Heading) */}
        <h1 className="text-5xl font-bold text-white">FAQ</h1>

        {/* Right Section (Breadcrumb Navigation) */}
        <nav>
          <ul className="flex items-center space-x-2 text-gray-400 text-md">
            <li>
              <Link href="/home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-pink-500">›</li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FaqBanner;
