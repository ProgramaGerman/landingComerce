import { GoogleGenAI, Type } from "@google/genai";
import { Course } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCourseRecommendations = async (query: string): Promise<Course[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Recomienda 4 cursos en línea realistas disponibles en una plataforma como MenteLab basados en la búsqueda del usuario: "${query}".
      Si la búsqueda está vacía o es genérica, devuelve 4 cursos populares de tecnología/negocios.
      Asegúrate de que los nombres de los socios sean universidades prestigiosas o grandes empresas tecnológicas (ej. Google, Yale, IBM, Meta).
      Usa calificaciones realistas (4.5-4.9) y conteo de estudiantes (ej. "1.2m").
      Selecciona una palabra clave en inglés para la imageUrl que coincida con el tema.
      Devuelve todo el contenido de texto en Español.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              partner: { type: Type.STRING },
              rating: { type: Type.NUMBER },
              students: { type: Type.STRING },
              level: { type: Type.STRING, enum: ["Principiante", "Intermedio", "Avanzado"] },
              certificateType: { type: Type.STRING, enum: ["Certificado Profesional", "Especialización", "Curso"] },
              imageUrl: { type: Type.STRING, description: "A keyword for picsum photos in English, e.g. 'coding', 'business'" }
            },
            required: ["id", "title", "partner", "rating", "students", "level", "certificateType", "imageUrl"]
          }
        }
      }
    });

    const data = JSON.parse(response.text || "[]");
    
    // Transform the keyword into a real picsum url
    return data.map((item: any, index: number) => ({
      ...item,
      imageUrl: `https://picsum.photos/seed/${item.imageUrl}${index}/400/250`
    }));

  } catch (error) {
    console.error("Error fetching recommendations:", error);
    // Fallback data in case of API error
    return [
      {
        id: 'fb-1',
        title: 'Análisis de Datos de Google',
        partner: 'Google',
        rating: 4.8,
        students: '1.5m',
        level: 'Principiante',
        certificateType: 'Certificado Profesional',
        imageUrl: 'https://picsum.photos/seed/data/400/250'
      },
      {
        id: 'fb-2',
        title: 'Python para Todos',
        partner: 'University of Michigan',
        rating: 4.8,
        students: '2.8m',
        level: 'Principiante',
        certificateType: 'Especialización',
        imageUrl: 'https://picsum.photos/seed/python/400/250'
      },
      {
        id: 'fb-3',
        title: 'Especialización en Machine Learning',
        partner: 'Stanford University',
        rating: 4.9,
        students: '900k',
        level: 'Intermedio',
        certificateType: 'Especialización',
        imageUrl: 'https://picsum.photos/seed/ml/400/250'
      },
      {
        id: 'fb-4',
        title: 'Gestión de Proyectos',
        partner: 'Google',
        rating: 4.7,
        students: '1.1m',
        level: 'Principiante',
        certificateType: 'Certificado Profesional',
        imageUrl: 'https://picsum.photos/seed/pm/400/250'
      }
    ];
  }
};