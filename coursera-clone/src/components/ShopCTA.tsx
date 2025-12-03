import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function ShopCTA() {
    const { elementRef, isVisible } = useScrollReveal({ threshold: 0.3 });

    const handleCoursesClick = () => {
        // Scroll al formulario de contacto
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    ref={elementRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Contenido */}
                        <div className="p-8 lg:p-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                                    <GraduationCap className="w-4 h-4" />
                                    <span className="text-sm font-semibold">Catálogo de Cursos</span>
                                </div>

                                <h2 className="text-4xl font-bold text-foreground mb-4">
                                    Explora Nuestros Cursos
                                </h2>

                                <p className="text-lg text-muted-foreground mb-8">
                                    Descubre nuestra amplia selección de cursos especializados en programación,
                                    diseño, IA y tecnologías emergentes para impulsar tu carrera profesional.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">Contenido actualizado y práctico</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">Instructores expertos certificados</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">Certificados al completar</span>
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    onClick={handleCoursesClick}
                                    className="group"
                                >
                                    Explorar Cursos
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </div>

                        {/* Imagen decorativa */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative h-full min-h-[400px] bg-gradient-primary"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <GraduationCap className="w-32 h-32 text-white/20" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dark/20" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
