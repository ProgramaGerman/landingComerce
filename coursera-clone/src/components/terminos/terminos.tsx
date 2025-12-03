import React, { useEffect, useRef } from "react";
import { X, FileText, Scale, Shield, AlertCircle } from "lucide-react";
import "./terminos.css";

interface TerminosProps {
    isOpen: boolean;
    onClose: () => void;
}

function TerminosCondiciones({ isOpen, onClose }: TerminosProps) {
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
            className="terminos-dialog"
            onClick={handleBackdropClick}
        >
            <div className="terminos-content">
                {/* Header */}
                <div className="terminos-header">
                    <div className="header-icon-formal">
                        <Scale className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="terminos-title">Términos y Condiciones</h2>
                        <p className="terminos-subtitle">Última actualización: Diciembre 2025</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="close-button-formal"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="terminos-body">
                    {/* Introducción */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>1. Introducción</h3>
                        </div>
                        <p className="terminos-text">
                            Bienvenido a NextLevel Academy. Al acceder y utilizar nuestros servicios educativos, 
                            usted acepta cumplir con estos términos y condiciones. Por favor, léalos cuidadosamente 
                            antes de utilizar nuestra plataforma.
                        </p>
                    </section>

                    {/* Definiciones */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>2. Definiciones</h3>
                        </div>
                        <div className="terminos-list">
                            <div className="terminos-item">
                                <strong>"Plataforma"</strong> se refiere al sitio web y servicios de NextLevel Academy.
                            </div>
                            <div className="terminos-item">
                                <strong>"Usuario"</strong> se refiere a cualquier persona que acceda o utilice la plataforma.
                            </div>
                            <div className="terminos-item">
                                <strong>"Contenido"</strong> incluye cursos, materiales educativos, videos, documentos y recursos.
                            </div>
                            <div className="terminos-item">
                                <strong>"Servicios"</strong> comprende todos los servicios educativos ofrecidos por NextLevel.
                            </div>
                        </div>
                    </section>

                    {/* Uso de la Plataforma */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <Shield className="w-5 h-5" />
                            <h3>3. Uso de la Plataforma</h3>
                        </div>
                        <p className="terminos-text">Al utilizar nuestra plataforma, usted se compromete a:</p>
                        <ul className="terminos-list-bullets">
                            <li>Proporcionar información precisa y actualizada durante el registro</li>
                            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                            <li>No compartir su cuenta con terceros</li>
                            <li>Utilizar el contenido únicamente para fines educativos personales</li>
                            <li>No reproducir, distribuir o modificar el contenido sin autorización</li>
                            <li>Respetar los derechos de propiedad intelectual</li>
                        </ul>
                    </section>

                    {/* Propiedad Intelectual */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>4. Propiedad Intelectual</h3>
                        </div>
                        <p className="terminos-text">
                            Todo el contenido disponible en la plataforma, incluyendo pero no limitado a textos, 
                            gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones 
                            de datos, es propiedad de NextLevel Academy o de sus proveedores de contenido y está 
                            protegido por las leyes de derechos de autor internacionales.
                        </p>
                    </section>

                    {/* Pagos y Reembolsos */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>5. Pagos y Reembolsos</h3>
                        </div>
                        <p className="terminos-text"><strong>5.1 Pagos:</strong></p>
                        <p className="terminos-text">
                            Los precios de los cursos están expresados en la moneda indicada y pueden estar sujetos 
                            a cambios sin previo aviso. El pago debe realizarse en su totalidad antes de acceder al contenido.
                        </p>
                        <p className="terminos-text"><strong>5.2 Reembolsos:</strong></p>
                        <p className="terminos-text">
                            Ofrecemos una garantía de reembolso de 30 días para la mayoría de nuestros cursos. 
                            Las solicitudes de reembolso deben realizarse dentro de este período y están sujetas 
                            a revisión según nuestras políticas de reembolso.
                        </p>
                    </section>

                    {/* Responsabilidades del Usuario */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <AlertCircle className="w-5 h-5" />
                            <h3>6. Responsabilidades del Usuario</h3>
                        </div>
                        <p className="terminos-text">El usuario es responsable de:</p>
                        <ul className="terminos-list-bullets">
                            <li>Mantener un ambiente de aprendizaje respetuoso</li>
                            <li>No publicar contenido ofensivo, ilegal o inapropiado</li>
                            <li>No utilizar la plataforma para actividades fraudulentas</li>
                            <li>Cumplir con todas las leyes aplicables en su jurisdicción</li>
                            <li>Notificar cualquier uso no autorizado de su cuenta</li>
                        </ul>
                    </section>

                    {/* Limitación de Responsabilidad */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <Shield className="w-5 h-5" />
                            <h3>7. Limitación de Responsabilidad</h3>
                        </div>
                        <p className="terminos-text">
                            NextLevel Academy no será responsable por daños indirectos, incidentales, especiales, 
                            consecuentes o punitivos, incluyendo sin limitación, pérdida de beneficios, datos, uso, 
                            fondo de comercio u otras pérdidas intangibles resultantes del uso o la imposibilidad 
                            de usar nuestros servicios.
                        </p>
                    </section>

                    {/* Modificaciones */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>8. Modificaciones de los Términos</h3>
                        </div>
                        <p className="terminos-text">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las 
                            modificaciones entrarán en vigor inmediatamente después de su publicación en la 
                            plataforma. El uso continuado de nuestros servicios después de dichas modificaciones 
                            constituye su aceptación de los nuevos términos.
                        </p>
                    </section>

                    {/* Terminación */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <AlertCircle className="w-5 h-5" />
                            <h3>9. Terminación</h3>
                        </div>
                        <p className="terminos-text">
                            Podemos suspender o terminar su acceso a la plataforma inmediatamente, sin previo 
                            aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación si usted 
                            incumple estos términos y condiciones.
                        </p>
                    </section>

                    {/* Ley Aplicable */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <Scale className="w-5 h-5" />
                            <h3>10. Ley Aplicable y Jurisdicción</h3>
                        </div>
                        <p className="terminos-text">
                            Estos términos se regirán e interpretarán de acuerdo con las leyes de Venezuela, 
                            sin dar efecto a ningún principio de conflictos de leyes. Cualquier disputa que 
                            surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de 
                            los tribunales de Venezuela.
                        </p>
                    </section>

                    {/* Contacto */}
                    <section className="terminos-section">
                        <div className="section-header-formal">
                            <FileText className="w-5 h-5" />
                            <h3>11. Contacto</h3>
                        </div>
                        <p className="terminos-text">
                            Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en:
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> legal@nextlevel.com</p>
                            <p><strong>Teléfono:</strong> +58 (41x) xxx-xxx</p>
                            <p><strong>Dirección:</strong> Porlamar, Venezuela</p>
                        </div>
                    </section>

                    {/* Aceptación */}
                    <div className="acceptance-box">
                        <AlertCircle className="w-5 h-5" />
                        <p>
                            Al utilizar nuestros servicios, usted reconoce que ha leído, entendido y acepta 
                            estar sujeto a estos Términos y Condiciones.
                        </p>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default TerminosCondiciones;
