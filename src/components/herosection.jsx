import herosectionimg from "../assets/photo-1498050108023-c5249f4df085.avif"

const HeroSection = () => {
  return (
    // Outer container with Grid Background Pattern
    // <section className="relative w-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-300 to-white">
    <section className="relative w-full bg-gradient-to-r from-orange-500 via-pink-300 to-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:34px_34px]">
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
              <span className="text-sm font-medium text-gray-700">
                Web Development
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-white sm:text-6xl">
              Web Development <br />
              <span>Company</span>
            </h1>

            {/* Paragraph Description */}
            <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
              We provide innovative web development solutions that enhance user
              experience, streamline functionality, and enable your business
              with scalable, performance-driven websites designed to drive
              measurable impact.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/quote"
                className="bg-white text-black font-bold text-sm rounded-full px-6 py-3 hover:bg-gray-200 transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:ml-auto">
            {/* Optional: Decorative blob/glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-50 opacity-50 blur-2xl"></div>

            <img
              src={herosectionimg}
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
