const QuoteDetails = [
  {
    id: 1,
    name: "Standard",
    price: "₹15000",
    popular: false,
    desc: [
      "7-Day Turnaround Time", 
      "Responsive Landing Page", 
      "Mobile-First Design", 
      "Basic SEO Setup", 
      "Contact Form Integration", 
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: "₹25000",
    popular: true,
    desc: [
      "14-Day Delivery Cycle",
      "Content Management (CMS)", 
      "Admin Dashboard Access", 
      "Google Analytics Setup", 
      "Blog & News Section",
      "Social Media Integration",
    ],
  },
  {
    id: 3,
    name: "Enterprise", 
    price: "₹40000",
    popular: false,
    desc: [
      "30-Day Development Phase",
      "Full E-Commerce Suite", 
      "Secure Payment Gateway", 
      "Database Integration", 
      "Priority 24/7 Support",
      "Cloud Hosting Setup",
    ],
  },
];
const PriceQuoteSection = () => {
  
  const gradientTheme =
    "bg-gradient-to-r from-orange-500 via-pink-500 to-white";

  return (
    <div className="flex flex-row flex-wrap bg-black min-h-screen justify-around items-center gap-5">
      {QuoteDetails.map((quote) => {
        const isPopular = quote.popular;

        return (
          <div
            key={quote.id}
            className={`
                relative flex flex-col items-center rounded-3xl p-8 gap-6
                transition-all duration-500 ease-out cursor-pointer border
                
                ${
                  isPopular
                    ? "w-96 bg-gray-900 border-orange-500 shadow-2xl shadow-orange-500/20 scale-110 z-10"
                    : "w-80 bg-black border-gray-800 hover:border-pink-500/50 shadow-xl hover:scale-105"
                }
            `}
          >
            {isPopular && (
              <div
                className={`absolute -top-5 ${gradientTheme} text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg`}
              >
                Most Popular
              </div>
            )}

            {/* HEADER SECTION - Now Clean White */}
            <div className="text-center space-y-2">
              {/* Name: Pure White for maximum contrast */}
              <div className="text-3xl font-bold text-white drop-shadow-md">
                {quote.name}
              </div>

              {/* Price: Pure White */}
              <div className="text-5xl font-extrabold text-white tracking-tight">
                {quote.price}
              </div>
            </div>

            {/* DIVIDER LINE - Kept the gradient here as a subtle accent */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

            {/* descS LIST */}
            <div className="flex flex-col items-start gap-4 w-full pl-4">
              {quote.desc.map((spec, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Icons: Orange/Pink to match the theme */}
                  <div
                    className={`rounded-full p-1 ${isPopular ? "text-orange-400 bg-orange-400/10" : "text-pink-400 bg-pink-400/10"}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    {spec}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON - Keeps the Gradient Background */}
            <button
              className={`
                mt-auto w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300
                ${
                  isPopular
                    ? `bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/40 hover:shadow-pink-500/40 hover:scale-105`
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                }
            `}
            >
              Choose Plan
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PriceQuoteSection;
