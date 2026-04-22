const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-7/12">
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Suplementos de Alta Calidad para tu <span className="text-earthy-orange-600">Bienestar Diario</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En <span className="font-bold text-gray-800">Natural Greatness</span>, llevamos la ciencia de la nutrición directamente a tu rutina. Ofrecemos suplementos vitamínicos y minerales —como Colágeno, Magnesio, Potasio y Vitaminas esenciales— formulados para apoyar tu salud desde adentro.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada producto está respaldado por ingredientes de la más alta pureza, diseñados para complementar tu estilo de vida activo y ayudarte a alcanzar tu máximo potencial físico y mental.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-earthy-orange-50 rounded-xl border border-earthy-orange-100">
                <span className="block text-2xl font-bold text-earthy-orange-700">100%</span>
                <span className="text-sm text-gray-600">Fórmulas Certificadas</span>
              </div>
              <div className="p-4 bg-earthy-orange-50 rounded-xl border border-earthy-orange-100">
                <span className="block text-2xl font-bold text-earthy-orange-700">+10</span>
                <span className="text-sm text-gray-600">Suplementos Disponibles</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            <div className="aspect-[4/5] bg-earthy-orange-100 rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop" 
                alt="Suplementos Vitamínicos Natural Greatness" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
              <p className="text-earthy-orange-700 font-bold text-xl italic text-center">"Nutre tu cuerpo, potencia tu vida."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
