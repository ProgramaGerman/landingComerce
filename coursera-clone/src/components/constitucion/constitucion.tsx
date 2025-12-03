import React, { useEffect, useRef } from "react";
import { X, BookOpen, Scale, Shield, Landmark } from "lucide-react";
import "./constitucion.css";

interface ConstitucionProps {
    isOpen: boolean;
    onClose: () => void;
}

function ConstitucionVenezuela({ isOpen, onClose }: ConstitucionProps) {
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
            className="constitucion-dialog"
            onClick={handleBackdropClick}
        >
            <div className="constitucion-content">
                {/* Header */}
                <div className="constitucion-header">
                    <div className="header-icon-constitucion">
                        <Landmark className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="constitucion-title">Constitución de la República Bolivariana de Venezuela</h2>
                        <p className="constitucion-subtitle">Marco Legal para Redes y Comercio Electrónico</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="close-button-constitucion"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="constitucion-body">
                    {/* Introducción */}
                    <section className="constitucion-section intro-section">
                        <div className="section-header-constitucion">
                            <BookOpen className="w-5 h-5" />
                            <h3>Fundamento Constitucional</h3>
                        </div>
                        <p className="constitucion-text">
                            La Constitución de la República Bolivariana de Venezuela establece los principios 
                            fundamentales que rigen las actividades económicas, comerciales y tecnológicas en el 
                            territorio nacional, incluyendo el comercio electrónico y las redes de comunicación.
                        </p>
                    </section>

                    {/* Artículo 110 - Propiedad Intelectual */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Scale className="w-5 h-5" />
                            <h3>Artículo 110</h3>
                        </div>
                        <div className="article-content">
                            <h4>Propiedad Intelectual y Tecnología</h4>
                            <blockquote className="constitutional-quote">
                                "El Estado reconocerá el interés público de la ciencia, la tecnología, el conocimiento, 
                                la innovación y sus aplicaciones y los servicios de información necesarios por ser 
                                instrumentos fundamentales para el desarrollo económico, social y político del país, 
                                así como para la seguridad y soberanía nacional."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Aplicación al Comercio Electrónico:</strong></p>
                                <ul>
                                    <li>Protección de plataformas digitales y sistemas tecnológicos</li>
                                    <li>Reconocimiento de la innovación en servicios en línea</li>
                                    <li>Importancia de los servicios de información digital</li>
                                    <li>Desarrollo tecnológico como instrumento de progreso nacional</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Artículo 112 - Libre Empresa */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Scale className="w-5 h-5" />
                            <h3>Artículo 112</h3>
                        </div>
                        <div className="article-content">
                            <h4>Libertad Económica y Comercio</h4>
                            <blockquote className="constitutional-quote">
                                "Todas las personas pueden dedicarse libremente a la actividad económica de su 
                                preferencia, sin más limitaciones que las previstas en esta Constitución y las que 
                                establezcan las leyes, por razones de desarrollo humano, seguridad, sanidad, protección 
                                del ambiente u otras de interés social."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Relevancia para el Comercio Electrónico:</strong></p>
                                <ul>
                                    <li>Libertad para establecer negocios en línea y plataformas digitales</li>
                                    <li>Derecho a ofrecer servicios educativos por medios electrónicos</li>
                                    <li>Promoción de la actividad económica digital</li>
                                    <li>Protección de la libre competencia en el mercado digital</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Artículo 113 - Monopolios */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Scale className="w-5 h-5" />
                            <h3>Artículo 113</h3>
                        </div>
                        <div className="article-content">
                            <h4>Prohibición de Monopolios</h4>
                            <blockquote className="constitutional-quote">
                                "No se permitirán monopolios. Se declaran contrarios a los principios fundamentales 
                                de esta Constitución cualquier acto, actividad, conducta o acuerdo de los y las 
                                particulares que tengan por objeto el establecimiento de un monopolio o que conduzcan, 
                                por sus efectos reales e independientemente de la voluntad de aquellos o aquellas, 
                                a su existencia."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Implicaciones para Plataformas Digitales:</strong></p>
                                <ul>
                                    <li>Garantía de competencia justa en el mercado digital</li>
                                    <li>Prevención de prácticas monopolísticas en plataformas en línea</li>
                                    <li>Protección de pequeños comercios electrónicos</li>
                                    <li>Promoción de la diversidad de servicios digitales</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Artículo 117 - Derecho al Trabajo */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Scale className="w-5 h-5" />
                            <h3>Artículo 117</h3>
                        </div>
                        <div className="article-content">
                            <h4>Derecho al Trabajo y Formación</h4>
                            <blockquote className="constitutional-quote">
                                "Todas las personas tendrán derecho al trabajo y el deber de trabajar. El Estado 
                                garantizará la adopción de las medidas necesarias a los fines de que toda persona 
                                puede obtener ocupación productiva, que le proporcione una existencia digna y decorosa 
                                y le garantice el pleno ejercicio de este derecho."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Aplicación a la Educación en Línea:</strong></p>
                                <ul>
                                    <li>Derecho a la formación profesional mediante plataformas digitales</li>
                                    <li>Acceso a capacitación tecnológica y desarrollo de habilidades</li>
                                    <li>Promoción de oportunidades laborales a través de la educación digital</li>
                                    <li>Garantía de formación continua y actualización profesional</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Artículo 28 - Derecho de Acceso a la Información */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Shield className="w-5 h-5" />
                            <h3>Artículo 28</h3>
                        </div>
                        <div className="article-content">
                            <h4>Acceso a la Información</h4>
                            <blockquote className="constitutional-quote">
                                "Toda persona tiene derecho de acceder a la información y a los datos que sobre sí 
                                misma o sobre sus bienes consten en registros oficiales o privados, con las excepciones 
                                que establezca la ley, así como de conocer el uso que se haga de los mismos y su 
                                finalidad, y a solicitar ante el tribunal competente la actualización, la rectificación 
                                o la destrucción de aquellos, si fuesen erróneos o afectasen ilegítimamente sus derechos."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Protección de Datos en Plataformas Digitales:</strong></p>
                                <ul>
                                    <li>Derecho de los usuarios a conocer qué datos se recopilan</li>
                                    <li>Transparencia en el uso de información personal</li>
                                    <li>Derecho a solicitar corrección o eliminación de datos</li>
                                    <li>Protección contra el uso ilegítimo de información</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Artículo 60 - Protección al Consumidor */}
                    <section className="constitucion-section">
                        <div className="article-header">
                            <Shield className="w-5 h-5" />
                            <h3>Artículo 60</h3>
                        </div>
                        <div className="article-content">
                            <h4>Protección del Consumidor</h4>
                            <blockquote className="constitutional-quote">
                                "Toda persona tiene derecho a la protección de sus intereses económicos, a la libertad 
                                de elección y a un trato equitativo y digno. La ley establecerá los mecanismos necesarios 
                                para garantizar esos derechos, las normas de control de calidad y cantidad de bienes y 
                                servicios, los procedimientos de defensa del público consumidor."
                            </blockquote>
                            <div className="article-explanation">
                                <p><strong>Derechos en el Comercio Electrónico:</strong></p>
                                <ul>
                                    <li>Protección de consumidores en transacciones en línea</li>
                                    <li>Garantía de calidad en servicios educativos digitales</li>
                                    <li>Derecho a información clara sobre productos y servicios</li>
                                    <li>Mecanismos de defensa para usuarios de plataformas digitales</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Compromiso de NextLevel */}
                    <section className="constitucion-section commitment-section">
                        <div className="section-header-constitucion">
                            <Landmark className="w-5 h-5" />
                            <h3>Compromiso de NextLevel Academy</h3>
                        </div>
                        <div className="commitment-content">
                            <p className="constitucion-text">
                                <strong>NextLevel Academy</strong> se compromete a operar en pleno cumplimiento de la 
                                Constitución de la República Bolivariana de Venezuela y todas las leyes aplicables, 
                                garantizando:
                            </p>
                            <div className="commitment-grid">
                                <div className="commitment-item">
                                    <Shield className="w-6 h-6" />
                                    <div>
                                        <h4>Protección de Datos</h4>
                                        <p>Respeto absoluto a la privacidad y protección de información personal</p>
                                    </div>
                                </div>
                                <div className="commitment-item">
                                    <Scale className="w-6 h-6" />
                                    <div>
                                        <h4>Transparencia</h4>
                                        <p>Información clara sobre servicios, precios y condiciones</p>
                                    </div>
                                </div>
                                <div className="commitment-item">
                                    <BookOpen className="w-6 h-6" />
                                    <div>
                                        <h4>Calidad Educativa</h4>
                                        <p>Servicios de formación de excelencia y actualización constante</p>
                                    </div>
                                </div>
                                <div className="commitment-item">
                                    <Landmark className="w-6 h-6" />
                                    <div>
                                        <h4>Cumplimiento Legal</h4>
                                        <p>Adhesión estricta al marco constitucional y legal venezolano</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Nota Legal */}
                    <div className="legal-notice">
                        <p>
                            <strong>Nota Legal:</strong> Este documento presenta extractos de la Constitución de la 
                            República Bolivariana de Venezuela con fines informativos. Para consultar el texto completo 
                            y oficial, visite las fuentes gubernamentales autorizadas.
                        </p>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default ConstitucionVenezuela;
