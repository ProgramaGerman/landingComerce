import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Zap, Shield, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rápido y Eficiente",
    description: "Experiencia optimizada para máximo rendimiento y velocidad de carga.",
  },
  {
    icon: Shield,
    title: "Seguro y Confiable",
    description: "Protección de datos, no comprometemos tus datos y no los usamos para mejorar nuestros servicios.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Únete a miles de usuarios que confían en nuestra plataforma y comparten su experiencia con nuestros cursos.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Continuo",
    description: "Implementamos nuevos Cursos y mejoramos los existentes para brindarte la mejor experiencia.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Características Principales
          </h2>
          <p className="text-lg color-white max-w-2xl mx-auto">
            Descubre por qué NextLevelAcademy es la mejor opción para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-6 rounded-xl border border-border hover-lift"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
}