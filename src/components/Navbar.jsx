import Logo from "../assets/pngtree-wolf-logo-png-image_2306634.jpg";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Our Services",
    link: "/services",
  },
];
const Navbar = () => {
  return (
    <div className="container py-3 sm:py-0">
      <div className="justify-between items-center hidden sm:flex">
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="onnealabslogo" className="w-10" />
            OnneaLabs
          </a>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-4 px-4 hover:text-blue-500 duration-200"
                >
                  {menu.name}
                </a>
              </li>
            ))}
            <li className="group relative cursor-pointer"><a href="/#">Quick</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
