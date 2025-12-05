import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/svg/Logo_Nuevo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky justify-center items-center  top-0 z-50 bg-black backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-16">
          <nav className="hidden lg:flex justify-evenly gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/90 hover:text-primary font-medium transition-colors hover:text-blue-500"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/90 hover:text-primary font-medium transition- hover:text-blue-500"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("trust")}
              className="text-white/90 hover:text-primary font-medium transition- hover:text-blue-500"
            >
              Confiabilidad
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-white/90 hover:text-primary font-medium transition- hover:text-blue-500"
            >
              Planes de Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/90 hover:text-primary font-medium transition- hover:text-blue-500"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/90 hover:text-primary font-medium transition- hover:text-blue-500"
            >
              Contacto
            </button>
            
          </nav>

          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition- hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/90 hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/90 hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-left"
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection("trust")}
                className="text-white/90 hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-left"
              >
                Confiabilidad
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}