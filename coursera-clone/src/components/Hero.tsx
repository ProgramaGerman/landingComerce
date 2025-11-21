import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#f5f7f8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
            Acceso ilimitado a <br/>
            <span className="text-coursera-blue">más de 7,000 cursos de clase mundial</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
            Invierte en tus objetivos profesionales con Coursera Plus. Obtén acceso ilimitado a más del 90% de cursos, Proyectos, Especializaciones y Certificados Profesionales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-coursera-blue text-white text-lg font-bold px-8 py-4 rounded-[4px] shadow hover:bg-blue-800 transition transform hover:-translate-y-0.5">
              Prueba Gratis de 7 Días
            </button>
            <button className="bg-white text-coursera-blue border border-coursera-blue text-lg font-bold px-8 py-4 rounded-[4px] hover:bg-blue-50 transition">
              Ver Todos los Planes
            </button>
          </div>

          <div className="space-y-3 mt-8">
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle size={20} className="text-green-600" />
              <span>Obtén certificados ilimitados</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle size={20} className="text-green-600" />
              <span>Aprende a tu propio ritmo</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
               <CheckCircle size={20} className="text-green-600" />
               <span>Cancela en cualquier momento</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Graphic */}
        <div className="w-full lg:w-1/2 relative lg:pl-12">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Estudiantes aprendiendo"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white font-bold text-xl">Únete a 77 millones de estudiantes</div>
              <div className="text-white/80 text-sm">Logra tus objetivos con Coursera Plus</div>
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;