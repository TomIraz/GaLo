interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <div className="relative h-[65vh] w-full bg-[#7a8d4e] flex items-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="z-10 space-y-8 text-white">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-80">Diseño Argentino</span>
            <h2 className="text-6xl md:text-8xl logo-font leading-none font-medium whitespace-nowrap">
              GaL<span className="star-o">o</span>
              <br />
              <span className="italic opacity-90 text-5xl md:text-7xl font-light">Artesanal</span>
            </h2>
          </div>
          <p className="text-lg font-light max-w-md leading-relaxed opacity-90">
            Carteras tejidas a mano en cordón de polipropileno. La belleza de lo simple hecha accesorio.
          </p>
          <button 
            onClick={onExplore}
            className="bg-white text-[#7a8d4e] px-10 py-4 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Explorar Catálogo
          </button>
        </div>
        <div className="relative hidden md:flex justify-end h-full">
          <div className="relative w-4/5 h-[450px] rotate-2 translate-y-8">
             <div className="absolute inset-0 border-2 border-white/20 -translate-x-4 translate-y-4"></div>
             <img
               src="/images/menu/home.jpg"
               alt="Detalle Cartera GaLo"
               className="w-full h-full object-cover rounded-sm shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
