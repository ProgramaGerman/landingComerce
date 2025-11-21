import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import CourseRecommender from './components/CourseRecommender';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Features />
        <CourseRecommender />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-lg">
        <button className="w-full bg-coursera-blue text-white font-bold py-3 rounded-[4px]">
          Prueba Gratis de 7 Días
        </button>
      </div>
    </div>
  );
};

export default App;