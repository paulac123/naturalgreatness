const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-earthy-orange-700 font-semibold">Natural Greatness</span>. Alimentación natural para mascotas felices.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
