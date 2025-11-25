import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-mentelab-background border-b border-gray-200 shadow-sm font-sans">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-evenly">

        {/* Logo & Explore */}
        <div className="flex items-center gap-6">
          <div className="text-mentelab-primary font-bold text-2xl tracking-tight cursor-pointer">
            Mentelab
          </div>
        </div>



        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm text-mentelab-text">
          <a href="#" className="hover:text-mentelab-primary">Grados Online</a>
          <a href="#" className="hover:text-mentelab-primary">Carreras</a>
          <a href="#" className="text-mentelab-primary font-semibold">Iniciar Sesión</a>
          <a href="#" className="bg-mentelab-background border border-mentelab-primary text-mentelab-primary px-4 py-2 rounded-[4px] font-semibold hover:bg-mentelab-light transition">
            Únete Gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-mentelab-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-mentelab-background border-b border-gray-200 p-4 flex flex-col gap-4 shadow-lg">
          <input
            type="text"
            placeholder="¿Qué quieres aprender?"
            className="w-full border border-gray-300 rounded-[4px] py-2 px-3 text-sm"
          />
          <hr />
          <a href="#" className="block py-2 text-mentelab-text font-medium">Explorar</a>
          <a href="#" className="block py-2 text-mentelab-text">Grados Online</a>
          <a href="#" className="block py-2 text-mentelab-text">Encuentra tu Nueva Carrera</a>
          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full border border-mentelab-primary text-mentelab-primary py-2 rounded-[4px] font-bold">Iniciar Sesión</button>
            <button className="w-full bg-mentelab-primary text-white py-2 rounded-[4px] font-bold">Únete Gratis</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;