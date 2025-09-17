import React from 'react';
import FadeIn from './shared/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-[#1D1D1F]">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out.
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <a
              href="mailto:mnaveenba345@gmail.com"
              className="inline-flex items-center justify-center w-full max-w-xs gap-x-3 px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-[#1D1D1F] hover:border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              mnaveenba345@gmail.com
            </a>
            <a
              href="tel:+16144142221"
              className="inline-flex items-center justify-center w-full max-w-xs gap-x-3 px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-[#1D1D1F] hover:border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              +1 (614) 414-2221
            </a>
            <div className="mt-4">
                <a href="https://www.linkedin.com/in/naveen-m-87149b216" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1D1D1F] transition-colors" aria-label="LinkedIn Profile">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;