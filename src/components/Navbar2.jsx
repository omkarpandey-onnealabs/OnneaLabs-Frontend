

const MenuItems = [
  { id: 1, name: "Client", link: "#client" },
  { id: 2, name: "Our Work", link: "#our-work" },
  { id: 3, name: "Services", link: "#services" },
  { id: 4, name: "Why Us", link: "/whyus" },
];

const Navbar2 = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      
      <nav className="flex items-center justify-between bg-[#111111] border-b border-white/10 w-full py-4 px-6 md:px-12 shadow-2xl backdrop-blur-md">
        
        {/* Logo Section */}
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-300 to-white bg-clip-text text-transparent">
            OnneaLabs
          </span>
        </div>

        {/* Menu Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-10">
          {MenuItems.map((menuitem) => (
            <li key={menuitem.id}>
              <a
                href={menuitem.link}
                className="text-gray-400 text-medium font-medium hover:text-white transition-colors duration-200"
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