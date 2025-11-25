import React from 'react';

const Partners: React.FC = () => {
  // Using text placeholders styled to look like logos for simplicity and reliability without external assets
  const partners = [
    { name: 'Illinois', font: 'font-serif' },
    { name: 'Duke', font: 'font-serif' },
    { name: 'Stanford', font: 'font-serif' },
    { name: 'MIT', font: 'font-serif' },
    { name: 'Harvard', font: 'font-serif' },
    { name: 'Yale', font: 'font-serif' },
    { name: 'Princeton', font: 'font-serif' },
    { name: 'Penn', font: 'font-serif' },
  ];

  return (
    <div className="bg-[#f5f5f5] py-8 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-600 mb-6 tracking-wide uppercase">
          Universidades de prestigio con capacidades de ofrecer cursos de alta calidad
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((p, i) => (
            <div key={i} className={`text-2xl md:text-3xl font-bold text-gray-800 ${p.font}`}>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;