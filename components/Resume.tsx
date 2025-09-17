import React from 'react';
import FadeIn from './shared/FadeIn';
import { resumePdfBase64 } from './assets/resumePdf';

const Resume: React.FC = () => {
  const handleDownload = () => {
    try {
      // Decode the base64 string
      const binaryString = window.atob(resumePdfBase64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Create a Blob from the PDF data
      const blob = new Blob([bytes], { type: 'application/pdf' });

      // Create a link element, set the URL and filename, and trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'naveen-mahankali-resume.pdf';
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link and revoking the object URL
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Failed to download resume:", error);
      // Optional: Add user-facing error handling here
    }
  };

  return (
    <section id="resume" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-[#1D1D1F]">
            Want to see the full picture?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            My resume provides a detailed look at my skills, experience, and the value I can bring to your team.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
            <button
              onClick={handleDownload}
              className="mt-12 inline-flex items-center gap-x-3 px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-[#1D1D1F] hover:border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Resume;
