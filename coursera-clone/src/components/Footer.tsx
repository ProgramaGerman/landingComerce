import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200 pt-16 pb-8 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Coursera</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Acerca de</a></li>
              <li><a href="#" className="hover:underline">Qué Ofrecemos</a></li>
              <li><a href="#" className="hover:underline">Liderazgo</a></li>
              <li><a href="#" className="hover:underline">Carreras</a></li>
              <li><a href="#" className="hover:underline">Catálogo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Estudiantes</a></li>
              <li><a href="#" className="hover:underline">Socios</a></li>
              <li><a href="#" className="hover:underline">Desarrolladores</a></li>
              <li><a href="#" className="hover:underline">Probadores Beta</a></li>
              <li><a href="#" className="hover:underline">Traductores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Más</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Prensa</a></li>
              <li><a href="#" className="hover:underline">Inversores</a></li>
              <li><a href="#" className="hover:underline">Términos</a></li>
              <li><a href="#" className="hover:underline">Privacidad</a></li>
              <li><a href="#" className="hover:underline">Ayuda</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-gray-900 mb-4">Aplicación Móvil</h4>
            <div className="space-y-3">
              <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg" alt="App Store" className="h-10 cursor-pointer" />
              <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png" alt="Google Play" className="h-10 cursor-pointer" />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-gray-500">© 2025 Coursera Inc. Todos los derechos reservados.</span>
          <div className="flex gap-4 text-gray-600">
            <Facebook size={20} className="cursor-pointer hover:text-coursera-blue" />
            <Linkedin size={20} className="cursor-pointer hover:text-coursera-blue" />
            <Twitter size={20} className="cursor-pointer hover:text-coursera-blue" />
            <Youtube size={20} className="cursor-pointer hover:text-coursera-blue" />
            <Instagram size={20} className="cursor-pointer hover:text-coursera-blue" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;