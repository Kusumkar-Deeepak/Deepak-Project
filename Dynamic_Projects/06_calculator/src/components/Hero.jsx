// import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center">
      <h1 className="text-5xl font-bold text-blue-700">Advanced Financial Calculator</h1>
      <p className="text-lg mt-4 text-gray-700">
        The ultimate tool for all your tax, loan, and investment calculations.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
