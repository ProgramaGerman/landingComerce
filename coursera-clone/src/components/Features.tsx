import React from 'react';
import { BookOpen, Award, DollarSign, Calendar } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Aprende cualquier cosa",
      desc: "Explora cualquier interés o tema de tendencia, toma prerrequisitos y avanza en tus habilidades con más de 7,000 cursos."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Ahorra dinero",
      desc: "Gasta menos dinero en tu aprendizaje si planeas tomar múltiples cursos este año."
    },
    {
      icon: <Calendar size={32} />,
      title: "Aprendizaje flexible",
      desc: "Aprende a tu propio ritmo, muévete entre múltiples cursos o cámbiate a un curso diferente."
    },
    {
      icon: <Award size={32} />,
      title: "Certificados Ilimitados",
      desc: "Obtén un certificado por cada programa de aprendizaje que completes sin costo adicional."
    }
  ];

  return (
    <section className="py-20 bg-mentelab-background">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-mentelab-text mb-4">¿Por qué MenteLab Plus?</h2>
          <div className="w-20 h-1 bg-mentelab-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-mentelab-light text-mentelab-primary p-4 rounded-full mb-6 group-hover:bg-mentelab-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-mentelab-text mb-3">{feature.title}</h3>
              <p className="text-mentelab-text leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;