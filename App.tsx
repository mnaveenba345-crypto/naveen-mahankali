import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Metrics from './components/Metrics';
import About from './components/About';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F5F5F7] text-[#1D1D1F] antialiased">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Philosophy />
        <Metrics />
        <About />
        <Expertise />
        <Portfolio />
        <Credentials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;