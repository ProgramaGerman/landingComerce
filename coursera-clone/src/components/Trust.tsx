import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Star, Award, CheckCircle, Shield } from "lucide-react";
import { useState } from "react";
import Certificado from "./certificado/certificado";

const stats = [
    { value: "10,000+", label: "Clientes Satisfechos" },
    { value: "99.9%", label: "Uptime Garantizado" },
    { value: "24/7", label: "Soporte Técnico" },
    { value: "5★", label: "Calificación Promedio" },
];

const testimonials = [
    {
        name: "María González",
        role: "Desarrolladora Full Stack",
        content: "Los cursos de programación me ayudaron a conseguir mi trabajo soñado. El contenido es actualizado y muy práctico.",
        rating: 5,
    },
    {
        name: "Carlos Rodríguez",
        role: "Estudiante de Diseño UX/UI",
        content: "Aprendí más en 3 meses que en años de estudio autodidacta. Los instructores son expertos en sus áreas.",
        rating: 5,
    },
    {
        name: "Ana Martínez",
        role: "Ingeniera de IA",
        content: "El curso de Machine Learning cambió mi carrera. Ahora trabajo en proyectos de IA que antes parecían imposibles.",
        rating: 5,
    },
];

export default function Trust() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal();
    const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();

    return (
        <section className="py-20 bg-white" id="trust">
            <div className="max-w-7xl mx-auto">
                {/* Estadísticas */}
                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12  bg-black/90 w-full h-50 flex flex-col justify-center items-center p-8 shadow-lg">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Confianza en nuestros Sistemas de Cursos a nivel Nacional y hasta Internacional
                        </h2>
                        <p className="text-lg text-white max-w-2xl mx-auto">
                            Universidades, Empresas y Centros Educativos nos apoyan con las promociones de los
                            cursos propuestos.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonios */}
                <motion.div
                    ref={testimonialsRef}
                    initial={{ opacity: 0 }}
                    animate={testimonialsVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-500 mb-4">
                            Lo Que Dicen Nuestros Clientes
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={testimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-card p-6 rounded-xl border border-border hover-lift bg-blue-200/50  border  border-black/35 shadow-sm hover:bg-b"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary " />
                                    ))}
                                </div>
                                <p className="text-foreground mb-4 italic text-black text-justify">"{testimonial.content}"</p>
                                <div className="flex items-center gap-3 ">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center bg-blue-200/50">
                                        <CheckCircle className="w-5 h-5 text-black " />
                                    </div>
                                    <div>
                                        <div className="font-semi text-black">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Badges de confianza */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={testimonialsVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-8 text-black"
                >
                    <button 
                        onClick={() => setIsDialogOpen(true)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer bg-transparent border-none text-base "
                    >
                        <Award className="w-6 h-6 text-primary" />
                        <span className="hover:underline">Certificado ISO 9001</span>
                    </button>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Shield className="w-6 h-6 text-primary" />
                        <span>Seguridad Verificada</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        <span>Empresa Verificada</span>
                    </div>
                </motion.div>
            </div>

            {/* Dialog de Certificación */}
            <Certificado 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
            />
        </section>
    );
}
