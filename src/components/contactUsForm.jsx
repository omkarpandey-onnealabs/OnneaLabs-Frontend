import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "Custom", 
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gradient helper (matches your existing theme)
  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-white";
  const gradientBg = "bg-gradient-to-r from-orange-500 to-pink-500";

  const plans = ["Standard", "Custom", "Enterprise"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Quote request sent!");
    }, 1500);
  };

  return (
    <div id="contact-us" className="min-h-screen bg-black flex justify-center items-center p-6 relative overflow-hidden">
      
      {/* Background Decorative Glow (Optional Cool Factor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Form Container */}
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl p-8 md:p-12 z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${gradientText}`}>
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to start? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Top Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Middle Row: Plan Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">
              Interested Plan
            </label>
            <div className="flex flex-wrap gap-4">
              {plans.map((plan) => (
                <button
                  key={plan}
                  type="button"
                  onClick={() => setFormData({ ...formData, plan: plan })}
                  className={`
                    px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border
                    ${
                      formData.plan === plan
                        ? `${gradientBg} text-white border-transparent shadow-lg shadow-orange-500/20 scale-105`
                        : "bg-black text-gray-400 border-gray-800 hover:border-gray-600"
                    }
                  `}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Message */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-300 uppercase tracking-wide">
              Project Details
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us a bit about your project goals..."
              className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-5 rounded-xl font-bold text-xl tracking-wider uppercase text-white shadow-xl transition-all duration-300
              ${gradientBg}
              hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98]
              disabled:opacity-70 disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Send Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;