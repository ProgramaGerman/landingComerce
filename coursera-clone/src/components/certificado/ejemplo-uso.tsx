// Ejemplo de cómo usar el componente Certificado

import { useState } from 'react';
import Certificado from './certificado/certificado';

function EjemploUso() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div>
            {/* Botón para abrir el dialog */}
            <button 
                onClick={() => setIsDialogOpen(true)}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
                Ver Certificación ISO 9001
            </button>

            {/* Componente del Dialog */}
            <Certificado 
                isOpen={isDialogOpen} 
                onClose={() => setIsDialogOpen(false)} 
            />
        </div>
    );
}

export default EjemploUso;
