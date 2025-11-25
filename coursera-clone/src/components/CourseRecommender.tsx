import React, { useState, useCallback } from 'react';
import { Search, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { getCourseRecommendations } from '../services/geminiService';
import { Course, LoadingState } from '../types';
import CourseCard from './CourseCard';

const CourseRecommender: React.FC = () => {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const results = await getCourseRecommendations(query);
      setCourses(results);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  }, [query]);

  // Load some initial data on first render simulation
  React.useEffect(() => {
    const loadInitial = async () => {
        const results = await getCourseRecommendations("");
        setCourses(results);
    };
    loadInitial();
  }, []);

  return (
    <section className="py-16 bg-mentelab-background">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-mentelab-primary font-bold uppercase tracking-wider text-xs">
              <Sparkles size={16} />
              <span>Descubrimiento con IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mentelab-text font-display mb-3">
              Encuentra el curso perfecto para ti
            </h2>
            <p className="text-lg text-mentelab-text max-w-2xl">
              ¿No estás seguro de por dónde empezar? Dile a nuestra IA qué te interesa y curaremos una ruta de aprendizaje personalizada incluida en MenteLab Plus.
            </p>
          </div>

          <form onSubmit={handleSearch} className="w-full md:w-auto min-w-[350px] relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ej., Quiero aprender Gestión de Productos"
              className="w-full pl-4 pr-14 py-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-mentelab-primary focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              disabled={status === LoadingState.LOADING}
              className="absolute right-2 top-2 bg-mentelab-primary text-white p-1.5 rounded hover:bg-mentelab-dark transition disabled:opacity-70"
            >
              {status === LoadingState.LOADING ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
            </button>
          </form>
        </div>

        {status === LoadingState.ERROR && (
           <div className="bg-red-50 text-red-600 p-4 rounded mb-6">
             Vaya, algo salió mal. Por favor, inténtalo de nuevo.
           </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          
          {courses.length === 0 && status === LoadingState.IDLE && (
             <div className="col-span-full h-64 flex items-center justify-center text-gray-400 italic">
                Escribe un tema arriba para ver recomendaciones...
             </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-mentelab-primary font-bold border border-mentelab-primary px-8 py-3 rounded hover:bg-mentelab-light transition">
            Explorar los más de 7,000 cursos <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CourseRecommender;