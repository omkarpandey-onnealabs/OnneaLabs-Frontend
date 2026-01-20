import React from "react";

// Defined the array so the map function works
const MenuItems = [
  { id: 1, name: "Client", link: "#" },
  { id: 2, name: "Our Work", link: "#" },
  { id: 3, name: "Services", link: "#" },
  { id: 4, name: "Why Us", link: "#" },
];

const Navbar2 = () => {
  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">

      <nav className="flex items-center justify-between bg-[#111111] border border-white/10 rounded-full py-2 pl-6 pr-2 shadow-2xl w-full max-w-4xl backdrop-blur-md">
        
        {/* Logo Section */}
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-300 to-white bg-clip-text text-transparent">
            OnneaLabs
          </span>
        </div>

        {/* Menu Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-8">
          {MenuItems.map((menuitem) => (
            <li key={menuitem.id}>
              <a
                href={menuitem.link}
                className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {menuitem.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/quote"
          className="bg-white text-black font-bold text-sm rounded-full px-6 py-3 hover:bg-gray-200 transition-colors duration-200"
        >
          Get a Quote
        </a>
      </nav>
    </div>
  );
};

export default Navbar2;