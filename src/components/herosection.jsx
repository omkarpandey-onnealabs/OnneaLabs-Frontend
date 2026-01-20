import React from 'react';

const HeroSection = () => {
  return (
    // Outer container with Grid Background Pattern
    <section className="relative w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            
            {/* The "Pill" Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 shadow-sm transition-transform hover:scale-105">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">Web Development</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
              Web Development <br />
              <span className="text-black">Company</span>
            </h1>

            {/* Paragraph Description */}
            <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
              We provide innovative web development solutions that enhance user experience, 
              streamline functionality, and enable your business with scalable, 
              performance-driven websites designed to drive measurable impact.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200">
                <span className="font-semibold">Get a Quote</span>
                {/* Arrow Icon */}
                <svg 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:ml-auto">
            {/* Optional: Decorative blob/glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-50 opacity-50 blur-2xl"></div>
            
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
              alt="Web Development Workspace"
              className="relative rounded-3xl shadow-2xl transition-transform hover:-translate-y-2 duration-500 w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;