import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useState } from "react";

export default function ContactForm() {
    const { elementRef, isVisible } = useScrollReveal({ threshold: 0.2 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validación visual
        const newErrors = {
            name: formData.name.trim() === "" ? "El nombre es requerido" : "",
            email: !validateEmail(formData.email) ? "Email inválido" : "",
            message: formData.message.trim() === "" ? "El mensaje es requerido" : "",
        };

        setErrors(newErrors);

        // Si no hay errores, simular envío
        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            alert(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado (simulación). Nos pondremos en contacto pronto.`);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpiar error al escribir
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    ref={elementRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Contáctanos
                        </h2>
                        <p className="text-lg text-white max-w-2xl mx-auto">
                            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
                            Envíanos un mensaje y te responderemos lo antes posible.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-card rounded-2xl p-8 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Nombre Completo
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1 w-4 h-4 text-muted-foreground pointer-events-none text-black" />
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            className={`pl-10 ${errors.name ? "border-destructive" : ""}border-none bg-white/30 focus:bg-white/90`}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1 w-4 h-4 text-muted-foreground pointer-events-none text-black" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu@email.com"
                                            className={`pl-10 ${errors.email ? "border-destructive" : ""}border-none bg-white/30 focus:bg-white/90`}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Mensaje
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground pointer-events-none text-black" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                            rows={5}
                                            className={`w-full pl-10 pr-3 py-3 rounded-md bg-transparent text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.message ? "border-destructive" : "border-input"
                                                }border-none bg-white/30 focus:bg-white/90`}
                                        />
                                    </div>
                                    {errors.message && (
                                        <p className="text-sm text-destructive mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Botón de envío */}
                                <Button type="submit" size="lg" className="w-full group text-black bg-blue-500 hover:bg-white hover:text-blue-500 transition-colors">
                                    Enviar Mensaje
                                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>

                            {/* Información de contacto adicional */}
                            <div className="mt-8 pt-8 border-t border-border">
                                <div className="grid md:grid-cols-2 gap-4 text-sm ">
                                    <div>
                                        <strong className="text-foreground">Email:</strong> contacto@nextlevel.com
                                    </div>
                                    <div>
                                        <strong className="text-foreground">Teléfono:</strong> +58 041x-xxx-xxx
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
