
import React from 'react';
import FadeIn from './shared/FadeIn';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-[24px] md:text-[32px] text-[#1D1D1F] leading-relaxed md:leading-[1.8]">
            "In a world of noise, I create signal. 
            Where others see complexity, I reveal simplicity.
            Every data point has a story. Every process has potential.
            I don't just analyze business problems—I architect solutions."
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default Philosophy;
