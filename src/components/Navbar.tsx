const Navbar = () => {
  return (
    <nav className="bg-transparent py-8 px-6 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 lg:px-20 max-w-[1200px] flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col mb-4 md:mb-0">
          <a href="#" className="flex flex-col group">
            <span className="text-[#3b3585] font-black text-3xl md:text-4xl leading-none group-hover:text-[#2c2763] transition-colors">
              NATURAL GREATNESS
            </span>
            <span className="text-gray-500 font-medium text-sm md:text-base tracking-widest mt-1">
              SUPPLEMENTS
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block lg:pr-12 xl:pr-32">
          <ul className="flex items-center space-x-6 text-gray-500 font-bold text-lg">
            <li>
              <a href="#catalogo" className="hover:text-[#3b3585] transition-colors tracking-wide">
                PRODUCTS
              </a>
            </li>
            <li className="text-gray-400 font-light select-none">/</li>
            <li>
              <a href="#nosotros" className="hover:text-[#3b3585] transition-colors tracking-wide">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
