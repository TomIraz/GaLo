import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center group cursor-pointer"
            aria-label="Ir a inicio"
          >
            <div className="bg-[#7a8d4e] px-4 py-2 flex items-center justify-center rounded-sm transition-transform group-hover:scale-105 whitespace-nowrap">
              <span className="text-white logo-font text-3xl font-medium inline-flex items-center leading-none">
                GaL<span className="star-o">o</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#7a8d4e] transition-colors flex items-center gap-1"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Menú de productos"
              >
                Productos
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl border border-gray-100 py-2 rounded-sm animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    to="/carteras"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#7a8d4e] hover:bg-gray-50 transition-colors"
                  >
                    Carteras
                  </Link>
                  <Link
                    to="/accesorios"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#7a8d4e] hover:bg-gray-50 transition-colors"
                  >
                    Accesorios
                  </Link>
                </div>
              )}
            </div>
            <Link to="/nuestras-carteras" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#7a8d4e] transition-colors">Nuestras Carteras</Link>
            <Link to="/como-comprar" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#7a8d4e] transition-colors">Cómo Comprar</Link>
            <Link to="/donde-estamos" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#7a8d4e] transition-colors">Dónde Estamos</Link>
            <Link to="/contacto" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#7a8d4e] transition-colors">Contacto</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#7a8d4e] transition-colors"
              aria-label="Menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

            <a
              href="https://www.instagram.com/galo_carteras/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-[#7a8d4e] transition-colors"
              aria-label="Seguinos en Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Productos Dropdown */}
            <div className="py-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left text-[10px] font-bold tracking-[0.2em] uppercase text-gray-700 hover:text-[#7a8d4e] transition-colors flex items-center justify-between py-2"
                aria-expanded={isDropdownOpen}
              >
                Productos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/carteras"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#7a8d4e] transition-colors"
                  >
                    Carteras
                  </Link>
                  <Link
                    to="/accesorios"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#7a8d4e] transition-colors"
                  >
                    Accesorios
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/nuestras-carteras"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-700 hover:text-[#7a8d4e] transition-colors"
            >
              Nuestras Carteras
            </Link>
            <Link
              to="/como-comprar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-700 hover:text-[#7a8d4e] transition-colors"
            >
              Cómo Comprar
            </Link>
            <Link
              to="/donde-estamos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-700 hover:text-[#7a8d4e] transition-colors"
            >
              Dónde Estamos
            </Link>
            <Link
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-700 hover:text-[#7a8d4e] transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
