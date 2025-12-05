import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, Badge, Check, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";

interface Plan {
  id: string;
  name: string;
  price: number;
  frequency: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Básico Learner",
    price: 0.99,
    frequency: "mensual",
    description: "Acceso esencial para empezar tu camino.",
    features: [
      "Acceso a 50 cursos básicos",
      "Contenido Limitado",
      "Cursos escritos y en video",
      "Comunidad de estudiantes",
    ],
    isPopular: false,
  },
  {
    id: "medium",
    name: "Medium Academy",
    price: 19.99,
    frequency: "mensual",
    description: "La mejor opción para el crecimiento acelerado.",
    features: [
      "Acceso a 100+ cursos",
      "Acceso a todas las Especializaciones",
      "Proyectos guiados y práctica",
      "Evaluaciones para comprobar tu aprendizaje",
    ],
    isPopular: true,
  },
  {
    id: "pro",
    name: "Pro Education",
    price: 29.99,
    frequency: "mensual",
    description: "Soluciones personalizadas para un profesional.",
    features: [
      "Todo lo incluido en Pro Educacion",
      "clases en vivo con expertos",
      "Evaluaciones personalizadas",
      "Ejercicios prácticos avanzados",
      "Certificados profesionales",
      "Soporte dedicado 24/7",
      "Contenido y rutas de aprendizaje a medida",
    ],
    isPopular: false,
  },
];

interface PlanCardProps {
  plan: Plan;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, index, isSelected, onSelect }) => {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-card p-8 rounded-xl border-2 hover:shadow-2xl transition-all h-full flex flex-col relative cursor-pointer bg-blue-50 ${
        isSelected
          ? "border-primary shadow-primary/30 ring-2 ring-primary ring-opacity-50 bg-green-100"
          : plan.isPopular
          ? "border-primary/50 hover:border-primary"
          : "border-border hover:border-primary/50"
      }`}
      onClick={onSelect}
    >
      
      {/* Indicador de selección */}
      {isSelected && (
        <div className="absolute top-4 right-4 ">
          <CheckCircle className="w-6 h-6 text-primary text-red-500" />
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2 text-blue-500">{plan.name}</h3>
      <p className="text-black mb-6 ">{plan.description}</p>
      
      <div className="text-4xl font-extrabold mb-8 flex items-end text-black">
        ${plan.price}
        <span className="text-xl font-medium text-muted-foreground ml-1 text-black">/{plan.frequency.slice(0, 3)}</span>
      </div>
      
      <Button 
        className={`w-full mb-8 ${
          isSelected 
           ? "border-primary shadow-primary/30 ring-2 ring-primary ring-opacity-50 text-black bg-blue-200"
          : plan.isPopular
          ? "border-primary/50 hover:border-primary text-black bg-blue-200"
          : "border-border hover:border-primary/50 text-black bg-blue-200"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        {isSelected ? 'Plan Seleccionado' : 'Seleccionar Plan'}
        {isSelected ? (
          <Check className="w-4 h-4 ml-2" />
        ) : (
          <ArrowRight className="w-4 h-4 ml-2" />
        )}
      </Button>

      <ul className="space-y-3 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 text-black">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Sección de Planes de Servicio
function PlanesDeServicio() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-black">
            Planes de Servicio
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus metas. Crece con acceso ilimitado a cientos de cursos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              index={index} 
              isSelected={selectedPlanId === plan.id}
              onSelect={() => handlePlanSelect(plan.id)}
            />
          ))}
        </div>

        {/* Opcional: Mostrar información del plan seleccionado */}
        {selectedPlanId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-6 bg-card rounded-xl border border-primary max-w-2xl mx-auto bg-black"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Plan seleccionado: <span className="text-primary">
                    {plans.find(p => p.id === selectedPlanId)?.name}
                  </span>
                </h3>
                <p className="text-white">
                  ${plans.find(p => p.id === selectedPlanId)?.price}/{plans.find(p => p.id === selectedPlanId)?.frequency}
                </p>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 bg-gray-500 mt-4 md:mt-0">
                Proceder al pago
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default PlanesDeServicio;