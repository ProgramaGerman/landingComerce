import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  focus: string;
  twitter: string;
  linkedin: string;
}

const teamMembers: Member[] = [
    {
      id: 1,
      name: "German Gonzalez",
      role: "Líder de Frontend",
      image:
        "https://placehold.co/400x400/2563eb/ffffff?text=GG",
      focus: "Diseño UI/UX y Animaciones",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Gabriel Palma",
      role: "Base de Datos y API Gateway",
      image:
        "https://placehold.co/400x400/d946ef/ffffff?text=GP",
      focus: "Seguridad y Escalabilidad",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Alexander Urbina",
      role: "Base de Datos y API Gateway",
      image:
        "https://placehold.co/400x400/f59e0b/ffffff?text=AU",
      focus: "Autenticación y Cifrado",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Luisana Rodriguez",
      role: "Plan de Marketing",
      image:
        "https://placehold.co/400x400/10b981/ffffff?text=LR",
      focus: "Estrategia de Crecimiento",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Thamar Rodriguez",
      role: "Plan de Negocio",
      image:
        "https://placehold.co/400x400/ef4444/ffffff?text=TR",
      focus: "Plataforma de Cursos",
      twitter: "#",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Gabriel Rosas",
      role: "Analista de Datos",
      image:
        "https://placehold.co/400x400/0ea5e9/ffffff?text=GR",
      focus: "Análisis y Métricas",
      twitter: "#",
      linkedin: "#",
    },
  ];

const TeamCard: React.FC<{ member: Member; index: number }> = ({ member, index }) => {
    const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:shadow-xl transition-shadow h-full"
      >
        <div className="relative mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x400/0f172a/e2e8f0?text=${member.name.split(' ')[0][0]}${member.name.split(' ')[1][0]}`;
            }}
          />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        
        <div className="mt-auto pt-4 border-t border-border w-full">
          <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
              <Code className="w-4 h-4" />
              Enfoque: {member.focus}
          </p>
          <div className="flex justify-center gap-4 text-sm mt-3">
            <a href={member.twitter} className="text-muted-foreground hover:text-blue-400 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.144h3.69l-7.23 8.24l8.32 14.176h-6.72l-5.69-9.58l-6.39 9.58h-3.69l7.63-10.74l-8.08-9.26h6.81l5.22 7.51l6.1-7.51zM17.471 21.01h2.38l-4.73-12.28h-2.58l4.93 12.28z"/></svg>
            </a>
            <a href={member.linkedin} className="text-muted-foreground hover:text-blue-600 transition" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 0h-18c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zm-11 19h-3v-11h3v11zm-1.5-12c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.5 12h-3v-5.604c0-3.367-4-3.136-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.775 7 2.479v6.756z"/></svg>
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

function SobreNosotros() {
    return (
      <section id="about" className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Somos 6 programadores apasionados, cada uno con un área de especialización clave, dedicados a construir la mejor plataforma de aprendizaje.
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
}
export default SobreNosotros;