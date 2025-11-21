import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-sans">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo & Explore */}
        <div className="flex items-center gap-6">
          <div className="text-coursera-blue font-bold text-2xl tracking-tight cursor-pointer">
            coursera <span className="font-normal text-xs bg-coursera-blue text-white px-1 rounded ml-1 align-top">PLUS</span>
          </div>
          <button className="hidden md:flex items-center gap-1 bg-coursera-blue text-white px-4 py-2 rounded-[4px] text-sm font-semibold hover:bg-blue-800 transition">
            Explorar
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-6 relative">
          <input 
            type="text" 
            placeholder="¿Qué quieres aprender?" 
            className="w-full border border-gray-300 rounded-full py-2.5 pl-4 pr-12 text-sm text-gray-800 focus:outline-none focus:border-coursera-blue shadow-inner"
          />
          <div className="absolute right-1 top-1 bg-coursera-blue p-1.5 rounded-full text-white cursor-pointer">
            <Search size={18} />
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-coursera-blue">Grados Online</a>
          <a href="#" className="hover:text-coursera-blue">Carreras</a>
          <a href="#" className="text-coursera-blue font-semibold">Iniciar Sesión</a>
          <a href="#" className="bg-white border border-coursera-blue text-coursera-blue px-4 py-2 rounded-[4px] font-semibold hover:bg-blue-50 transition">
            Únete Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col gap-4 shadow-lg">
          <input 
            type="text" 
            placeholder="¿Qué quieres aprender?" 
            className="w-full border border-gray-300 rounded-[4px] py-2 px-3 text-sm"
          />
          <hr />
          <a href="#" className="block py-2 text-gray-700 font-medium">Explorar</a>
          <a href="#" className="block py-2 text-gray-700">Grados Online</a>
          <a href="#" className="block py-2 text-gray-700">Encuentra tu Nueva Carrera</a>
          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full border border-coursera-blue text-coursera-blue py-2 rounded-[4px] font-bold">Iniciar Sesión</button>
            <button className="w-full bg-coursera-blue text-white py-2 rounded-[4px] font-bold">Únete Gratis</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;