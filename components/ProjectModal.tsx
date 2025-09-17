import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Project {
  title: string;
  imageUrl: string;
  overlayText: string;
  hoverText: string;
  objective: string;
  challenges: string;
  solution: string;
  outcomes: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use a timeout to allow the component to mount with initial styles before animating in
    const timer = setTimeout(() => setIsMounted(true), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsMounted(false); // Trigger the closing animation
    setTimeout(onClose, 400); // Match animation duration to unmount the component
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className={`relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-y-auto transform transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <button
          onClick={handleClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div>
          <div className="aspect-video w-full bg-gray-200">
             <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 md:p-12">
            <h2 id="project-title" className="text-3xl md:text-4xl font-light text-black">{project.title}</h2>
            <p className="mt-2 text-lg text-[#D4AF37] font-semibold tracking-wider">{project.hoverText}</p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-[16px] leading-relaxed text-gray-700">
                <div>
                    <h3 className="font-bold text-black mb-3 tracking-wide">Objective</h3>
                    <p>{project.objective}</p>
                </div>
                 <div>
                    <h3 className="font-bold text-black mb-3 tracking-wide">Challenges</h3>
                    <p>{project.challenges}</p>
                </div>
            </div>

             <div className="mt-10">
                <h3 className="font-bold text-black mb-3 tracking-wide">Solution</h3>
                <p className="text-[16px] leading-relaxed text-gray-700">{project.solution}</p>
            </div>

            <div className="mt-10">
                <h3 className="font-bold text-black mb-3 tracking-wide">Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-[16px] leading-relaxed text-gray-700">
                    {project.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;