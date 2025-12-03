import React, { useEffect, useRef } from "react";
import { X, Award, CheckCircle, Shield } from "lucide-react";
import "./certificado.css";

interface CertificadoProps {
    isOpen: boolean;
    onClose: () => void;
}

function Certificado({ isOpen, onClose }: CertificadoProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        );

        if (!isInDialog) {
            onClose();
        }
    };

    return (
        <dialog 
            ref={dialogRef} 
            className="certificado-dialog"
            onClick={handleBackdropClick}
        >
            <div className="certificado-content">
                {/* Header */}
                <div className="certificado-header">
                    <div className="header-icon">
                        <Award className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="certificado-title">Certificación ISO 9001:2015</h2>
                    <p className="certificado-subtitle">Sistema de Gestión de Calidad</p>
                    <button 
                        onClick={onClose}
                        className="close-button"
                        aria-label="Cerrar"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="certificado-body">
                    {/* Descripción principal */}
                    <div className="section">
                        <div className="section-icon">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="section-title">¿Qué es ISO 9001?</h3>
                            <p className="section-text">
                                ISO 9001 es el estándar internacional para sistemas de gestión de calidad (SGC). 
                                Ayuda a las organizaciones a demostrar su capacidad para proporcionar productos y 
                                servicios que cumplan consistentemente con los requisitos del cliente y los 
                                reglamentarios aplicables.
                            </p>
                        </div>
                    </div>

                    {/* Beneficios */}
                    <div className="section">
                        <h3 className="section-title">Beneficios Clave</h3>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Mejora continua de procesos</span>
                            </div>
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Mayor satisfacción del cliente</span>
                            </div>
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Eficiencia operativa optimizada</span>
                            </div>
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Reducción de costos y desperdicios</span>
                            </div>
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Cumplimiento normativo garantizado</span>
                            </div>
                            <div className="benefit-item">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Ventaja competitiva en el mercado</span>
                            </div>
                        </div>
                    </div>

                    {/* Principios */}
                    <div className="section">
                        <h3 className="section-title">7 Principios de Gestión de Calidad</h3>
                        <div className="principles-list">
                            <div className="principle-item">
                                <span className="principle-number">1</span>
                                <div>
                                    <h4 className="principle-title">Enfoque al Cliente</h4>
                                    <p className="principle-text">Cumplir y superar las expectativas del cliente</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">2</span>
                                <div>
                                    <h4 className="principle-title">Liderazgo</h4>
                                    <p className="principle-text">Establecer unidad de propósito y dirección</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">3</span>
                                <div>
                                    <h4 className="principle-title">Compromiso del Personal</h4>
                                    <p className="principle-text">Personas competentes y empoderadas</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">4</span>
                                <div>
                                    <h4 className="principle-title">Enfoque a Procesos</h4>
                                    <p className="principle-text">Resultados coherentes y predecibles</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">5</span>
                                <div>
                                    <h4 className="principle-title">Mejora Continua</h4>
                                    <p className="principle-text">Mantener niveles actuales de desempeño</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">6</span>
                                <div>
                                    <h4 className="principle-title">Toma de Decisiones Basada en Evidencia</h4>
                                    <p className="principle-text">Análisis de datos y evaluación objetiva</p>
                                </div>
                            </div>
                            <div className="principle-item">
                                <span className="principle-number">7</span>
                                <div>
                                    <h4 className="principle-title">Gestión de Relaciones</h4>
                                    <p className="principle-text">Optimizar el impacto en el desempeño</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificación */}
                    <div className="certification-badge">
                        <Award className="w-8 h-8 text-primary" />
                        <div>
                            <p className="badge-title">NextLevel Academy</p>
                            <p className="badge-text">Certificado ISO 9001:2015</p>
                            <p className="badge-date">Vigente desde 2025</p>
                            
                        </div>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default Certificado;
