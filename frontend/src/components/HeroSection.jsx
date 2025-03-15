import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Dark overlay for image */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 filter blur-[2px]" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Appliance Repairs <span className="text-blue-400">at Your Doorstep</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-lg">
            Fast, reliable repairs for all your home appliances. 
            Our certified technicians are just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Repair
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              View Services
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default HeroSection;