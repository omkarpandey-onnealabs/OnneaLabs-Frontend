import React from "react";
import "../App.css";
import logoImage from "../assets/Screenshot_3.png";

// --- TRADERMADE LOGO COMPONENT using generated svg for now ---
const TraderMadeLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(60,171,206,0.8)]"
  >
    <defs>
      <linearGradient id="blueGradient" x1="80" y1="20" x2="60" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3cabce" />
        <stop offset="100%" stopColor="#105c8c" />
      </linearGradient>
      <linearGradient id="orangeGradient" x1="50" y1="40" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fdbf46" />
        <stop offset="100%" stopColor="#e37b25" />
      </linearGradient>
      <linearGradient id="darkBlueGradient" x1="40" y1="60" x2="40" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3b6eb3" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>
    <path d="M30 85 L42 62 L48 85 Z" fill="url(#darkBlueGradient)" />
    <path d="M42 62 L60 28 L66 85 L48 85 Z" fill="url(#orangeGradient)" />
    <path d="M60 28 L66 85 L58 85 Z" fill="black" opacity="0.4" />
    <path d="M60 28 L95 85 L64 85 Z" fill="url(#blueGradient)" />
  </svg>
);

const HeroSectionWork = () => {
  return (
    <section id="our-work" className="bg-black text-white w-full max-w-7xl mx-auto font-sans">
      <div className="text-white text-center font-bold text-8xl mb-20 py-5">Our Works</div>
      {/* --- TOP SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        
        <div className="relative h-[400px] lg:h-auto w-full group cursor-pointer rounded-xl overflow-hidden border border-gray-800 transition-all duration-500 ease-out hover:z-2 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(60,171,206,0.3)] hover:border-blue-500/30">
          
          <img
            src={logoImage}
            alt="TraderMade Dashboard Interface"
            className="w-full h-full object-cover object-top opacity-90" 
          />
          
          {/* Overlay: Fades out completely on hover for a cleaner look */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black lg:via-transparent lg:to-black opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-12 relative z-0">
          
          <div className="mb-8 flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-blue-400 flex items-center justify-center rounded">
              <svg 
                className="w-5 h-5 text-blue-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-widest text-blue-400 uppercase">
              TraderMade
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
            Institutional-Grade Market Data Infrastructure.
          </h2>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            We provide resilient, real-time Forex and Crypto API solutions for fintechs and institutions. With over 40 years of market experience, we empower developers to build with precise, sub-millisecond data.
          </p>

          <div>
            <a
              href="#"
              className="inline-flex items-center justify-between bg-white text-black font-bold py-4 px-8 hover:bg-gray-200 transition-all duration-300 group rounded-sm"
            >
              <span className="mr-8">Read Case Study</span>
              <TraderMadeLogo />
            </a>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800 mt-12 lg:mt-0">
        
        <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="flex items-center gap-3 text-green-500 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-4xl font-bold tracking-tight">99.99%</span>
          </div>
          <p className="text-gray-400 font-medium">
            API Uptime Reliability
          </p>
        </div>

        <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="flex items-center gap-3 text-green-500 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
            <span className="text-4xl font-bold tracking-tight">1,700+</span>
          </div>
          <p className="text-gray-400 font-medium">
            Currency Pairs Available
          </p>
        </div>

        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-3 text-green-500 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-4xl font-bold tracking-tight">&lt; 50ms</span>
          </div>
          <p className="text-gray-400 font-medium">
            Average Data Latency
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionWork;