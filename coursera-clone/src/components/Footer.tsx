import logo from "../assets/svg/prueba1.svg";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import TerminosCondiciones from "./terminos/terminos";
import ConstitucionVenezuela from "./constitucion/constitucion";

export default function Footer() {
  const [isTerminosOpen, setIsTerminosOpen] = useState(false);
  const [isConstitucionOpen, setIsConstitucionOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-40 h-40 bg-gray rounded-full border-2 border-white flex items-center justify-center p-2">
                <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
              </div>              
            </div>
            <p className="text-sm text-white/70 text-center">
              Transformando negocios con tecnología innovadora y soluciones de primer nivel.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Características
                </a>
              </li>
              <li>
                <a href="#trust" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Confiabilidad
                </a>
              </li>
              <li>
                <a href="#trust" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Planes de Servicio
                </a>
              </li>
              <li>
                <a href="#trust" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/70 hover:text-primary transition-colors hover:text-blue-500">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setIsTerminosOpen(true)}
                  className="text-sm text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer hover:underline"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setIsConstitucionOpen(true)}
                  className="text-sm text-white/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer hover:underline"
                >
                  Constitución CRBV
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary" />
                contacto@nextlevel.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                +58 (412) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary" />
                Porlamar, Venezuela
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {currentYear} NextLevel Academy. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Dialog de Términos y Condiciones */}
      <TerminosCondiciones 
        isOpen={isTerminosOpen} 
        onClose={() => setIsTerminosOpen(false)} 
      />

      {/* Dialog de Constitución */}
      <ConstitucionVenezuela 
        isOpen={isConstitucionOpen} 
        onClose={() => setIsConstitucionOpen(false)} 
      />
    </footer>
  );
}