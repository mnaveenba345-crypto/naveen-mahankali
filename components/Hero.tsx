import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#F5F5F7] px-6">
      <div className="text-center">
        <h1 className="text-[5vw] md:text-[72px] font-thin text-black tracking-tighter">
          Naveen Mahankali
        </h1>
        <div className="h-8 md:h-12 relative overflow-hidden">
           <h2 className={`text-lg md:text-xl font-light text-[#1D1D1F] tracking-wider absolute w-full left-0 transition-all duration-1000 ease-out ${subtitleVisible ? 'opacity-100 bottom-0' : 'opacity-0 -bottom-full'}`}>
            Business Analyst
          </h2>
        </div>
        <p className="text-base md:text-[17px] text-gray-500 mt-6 max-w-md mx-auto">
          Transforming complexity into clarity.
        </p>
        <button onClick={scrollToContact} className="mt-12 px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-[#1D1D1F] hover:border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300 transform hover:scale-105">
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default Hero;