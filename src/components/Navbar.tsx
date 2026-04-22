const Navbar = () => {
  return (
    <nav className="bg-earthy-orange-700 text-white py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight">
        <a href="#">Natural Greatness</a>
      </h1>
      <div className="hidden md:block">
        <ul className="flex space-x-6 font-medium">
          <li><a href="#nosotros" className="cursor-pointer hover:text-earthy-orange-200 transition-colors">Nosotros</a></li>
          <li><a href="#catalogo" className="cursor-pointer hover:text-earthy-orange-200 transition-colors">Catálogo</a></li>
          <li><a href="#contacto" className="cursor-pointer hover:text-earthy-orange-200 transition-colors">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
