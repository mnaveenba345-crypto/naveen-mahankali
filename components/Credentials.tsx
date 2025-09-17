import React from 'react';
import FadeIn from './shared/FadeIn';

interface CredentialItemProps {
  title: string;
  institution: string;
  type: 'Education' | 'Certification';
}

const CredentialItem: React.FC<CredentialItemProps> = ({ title, institution, type }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-[#1D1D1F] border-2 border-white"></div>
    <p className="text-xs text-[#D4AF37] tracking-widest uppercase">{type}</p>
    <h4 className="text-lg font-medium text-black mt-1">{title}</h4>
    <p className="text-base text-gray-500">{institution}</p>
  </div>
);

const Credentials: React.FC = () => {
  // FIX: Explicitly type the `credentials` array to satisfy the `CredentialItemProps` interface.
  const credentials: CredentialItemProps[] = [
    { type: 'Education', title: "Master's Business Analytics", institution: "St. Francis College" },
    { type: 'Certification', title: "Google Data Analytics Professional", institution: "Google" },
    { type: 'Certification', title: "ECB Certification (In Progress)", institution: "ECBA" },
    { type: 'Certification', title: "PwC Digital Assurance Simulation", institution: "PricewaterhouseCoopers" },
  ];

  return (
    <section id="credentials" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <FadeIn>
          <h2 className="text-center text-[48px] font-light text-[#1D1D1F] mb-20">Credentials</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              {credentials.map((cred, index) => (
                <CredentialItem key={index} {...cred} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Credentials;
