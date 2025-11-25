import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-mentelab-background border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-mentelab-background/90 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-sm text-mentelab-text">
          {course.level}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
           <img src={`https://ui-avatars.com/api/?name=${course.partner}&background=random&size=24`} className="w-6 h-6 rounded-sm" alt="partner logo" />
           <span className="text-xs font-semibold text-mentelab-text truncate">{course.partner}</span>
        </div>
        <h3 className="font-bold text-mentelab-text mb-1 line-clamp-2 group-hover:text-mentelab-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-mentelab-text mb-3">{course.certificateType}</p>
        
        <div className="mt-auto flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-500 font-bold">
            <span className="mr-1">{course.rating}</span>
            <Star size={14} fill="currentColor" />
          </div>
          <span className="text-mentelab-text text-xs">|</span>
          <span className="text-mentelab-text text-xs">{course.students} Estudiantes</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;