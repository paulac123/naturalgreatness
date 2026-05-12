const About = () => {
  return (
    <section id="nosotros" className="relative pt-32 pb-0 bg-gradient-to-br from-[#f8fbff] to-[#f0f4fa] overflow-hidden min-h-screen flex flex-col lg:flex-row lg:items-center">
      {/* background images (marca de agua y sombra/textura) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* sombra / textura (esquina superior derecha) */}
        <img
          src="/web page natural greatness TEXTURA.png"
          alt="Background Shadow"
          className="absolute top-0 right-0 w-[80%] max-w-[900px] h-auto object-cover opacity-80 mix-blend-multiply pointer-events-none"
        />

        {/* marca de agua */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-10 mt-32">
          <img
            src="/web page natural greatness MARCA DE AGUA.png"
            alt="Natural Greatness Watermark"
            className="w-full max-w-[1200px] h-auto object-contain opacity-100 mix-blend-multiply brightness-90 contrast-125"
          />
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-20 relative z-20 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-end">
          
          {/* content container */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start mt-12 lg:mt-0 text-center lg:text-left">
            
            {/* mano solo para movil - ahora al principio de todo */}
            <div className="lg:hidden w-full max-w-[320px] aspect-square relative mb-8 pointer-events-none">
              <img
                src="/web page natural greatness HAND.png"
                alt="Hand"
                className="absolute bottom-0 left-0 w-[110%] h-auto object-contain"
              />
              <img
                src="/web page natural greatness 1.png"
                alt="Products"
                className="absolute top-[8%] left-[12%] w-[67%] h-auto object-contain z-20"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-500 mb-6">
              #1 Supplements in the world
            </h3>

            <h2 className="text-4xl md:text-6xl font-black text-[#3b3585] mb-6 leading-[1.15] tracking-tight">
              “Complete well-<br />being, every day.”
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
              Supplements designed to support your overall health, combining science and quality
            </p>

            <a
              href="#catalogo"
              className="bg-[#3b3585] hover:bg-[#2c2763] text-white font-bold text-xl py-3 px-10 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-widest mx-auto lg:mx-0 inline-block"
            >
              MORE INFO
            </a>

            {/* bottom right logo */}
            <div className="mt-16 self-center lg:self-end flex items-center gap-4 mr-0 lg:mr-4">
              <div className="w-16 h-16 rounded-full bg-[#3b3585] flex items-center justify-center text-white relative overflow-hidden shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.5C12 21.5 6 16 6 10C6 6.5 8.5 4 12 4C15.5 4 18 6.5 18 10C18 16 12 21.5 12 21.5Z" fill="#3b3585" stroke="white" strokeWidth="1.5" />
                  <path d="M12 21.5C12 21.5 7.5 16 7.5 10.5C7.5 7.5 9.5 5.5 12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 21.5C12 21.5 16.5 16 16.5 10.5C16.5 7.5 14.5 5.5 12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-[1.05] text-[#3b3585] font-black text-4xl text-left">
                <span>Natural</span>
                <span>Greatness</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mano solo para escritorio - pegada al borde inferior izquierdo */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full lg:w-[60%] z-10 pointer-events-none items-end justify-start">
        <div className="relative w-full aspect-square lg:max-w-[765px]">
          <img
            src="/web page natural greatness HAND.png"
            alt="Hand"
            className="absolute bottom-0 left-0 w-[120%] h-auto object-contain"
          />
          <img
            src="/web page natural greatness 1.png"
            alt="Products"
            className="absolute top-[5%] left-[5%] w-[72%] h-auto object-contain z-20 hover:-translate-y-2 transition-transform duration-700 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
