import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6">
          Every Child Deserves a Voice
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          CASA Project Worcester County trains and supports community volunteers to advocate for children in foster care. 
          Our volunteers ensure every child's voice is heard in court and their best interests are protected.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#volunteer" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105">
            Become a CASA Volunteer
          </a>
          <a href="#donate" className="px-8 py-4 bg-white border-2 border-blue-700 text-blue-700 rounded-lg font-semibold shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105">
            Support Our Mission
          </a>
        </div>
        
        <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>500+ Children Served Annually</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>40+ Years of Service</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>100% Volunteer-Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
} 