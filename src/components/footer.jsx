import React from "react";
import footerlogo from "../assets/Screenshot_1.png";

// Data for the footer links
const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Design", link: "/" },
      { name: "Development", link: "/" },
      { name: "UI/UX Review", link: "/" },
      { name: "SEO Optimization", link: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", link: "/" },
      { name: "Our Clients", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", link: "/" },
      { name: "Terms & Conditions", link: "/" },
      { name: "Privacy Policy", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    // Added bg-black and padding (py-10 px-8) to the main wrapper
    <footer className="bg-black py-10 px-8 sm:px-16">
      <div className="max-container">
        <div className="flex justify-between items-start gap-15 flex-wrap max-lg:flex-col">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerlogo} width={150} height={46} alt="Footer Logo" />
            </a>
            <p className="mt-6 text-base leading-7 text-gray-400 sm:max-w-sm">
              Get professional websites ready at your terms. Get your own UI
              personalized with our team and get it done in 2 days.
            </p>
          </div>

          {/* Column 2, 3, 4: Dynamic Links */}
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-bold text-lg mb-6 leading-normal">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 text-gray-400 text-base leading-normal hover:text-white transition-colors cursor-pointer"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="flex items-center text-gray-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-medium cursor-pointer">
            <p>&copy; 2026 OnneaLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;