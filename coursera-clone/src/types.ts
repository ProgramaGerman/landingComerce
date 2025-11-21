export interface Course {
  id: string;
  title: string;
  partner: string;
  rating: number;
  students: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  certificateType: 'Certificado Profesional' | 'Especialización' | 'Curso';
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}