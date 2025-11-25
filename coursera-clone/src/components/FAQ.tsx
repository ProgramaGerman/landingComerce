import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué incluye MenteLab Plus?",
      answer: "MenteLab Plus te da acceso ilimitado a más del 90% de los programas de aprendizaje en el catálogo de MenteLab. Incluye cursos, Proyectos Guiados, Especializaciones y Certificados Profesionales de las mejores universidades y empresas. Ten en cuenta que los certificados MasterTrack® y los grados no están incluidos."
    },
    {
      question: "¿Cuánto cuesta MenteLab Plus?",
      answer: "MenteLab Plus cuesta $59/mes o $399/año. Ambos planes vienen con una prueba gratuita de 7 días para que puedas probarlo sin riesgos."
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción en cualquier momento. Si cancelas, perderás el acceso al catálogo de MenteLab Plus al final de tu período de facturación."
    },
    {
      question: "¿Obtendré certificados?",
      answer: "¡Sí! Obtendrás un certificado por cada curso, Especialización o Certificado Profesional que completes. Puedes compartir estos en tu perfil de LinkedIn y currículum."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-mentelab-light">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-mentelab-text mb-12 text-center">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-mentelab-background border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-mentelab-light transition"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-mentelab-text text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-mentelab-primary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 text-mentelab-text leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  <hr className="border-gray-100 mb-4" />
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;