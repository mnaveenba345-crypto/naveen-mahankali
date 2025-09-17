import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'} bg-white/80 backdrop-blur-sm`}>
      <div className="max-w-screen-lg mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-lg font-bold tracking-wider text-[#1D1D1F]">
            NM
          </button>
          <ul className="flex space-x-8 text-sm font-medium tracking-widest uppercase">
            <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-[#D4AF37] transition-colors">Works</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-[#D4AF37] transition-colors">About</button></li>
            <li><button onClick={() => scrollToSection('expertise')} className="hover:text-[#D4AF37] transition-colors">Expertise</button></li>
            <li><button onClick={() => scrollToSection('resume')} className="hover:text-[#D4AF37] transition-colors">Resume</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#D4AF37] transition-colors">Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;