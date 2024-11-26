import React from 'react';

const Coursebanner = () => {
  return (
    <div className="relative bg-cover bg-center h-[400px]" 
    style={{
      backgroundImage: 'url(/assets/Course/course-bann.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h5 className='text-[#eac755]'>And He is the Forgiving, the Loving,</h5>
        <h1 className="text-4xl md:text-5xl mb-4">Courses</h1>
        <p className="max-w-3xl  md:text-md mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, unde! Asperiores eum autem, Lorem ipsum dolor sit,amet consectetur adipisicing elit.</p>
        <button className="bg-[#f14d5d] text-white hover:bg-[#fff] hover:text-[black] text-lg py-2 px-6 rounded-lg mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default Coursebanner;
