
import React from 'react';
import FadeIn from './shared/FadeIn';

interface ExpertiseColumnProps {
  title: string;
  skills: string[];
}

const ExpertiseColumn: React.FC<ExpertiseColumnProps> = ({ title, skills }) => (
  <div>
    <h3 className="text-2xl font-light text-black mb-6">{title}</h3>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <li key={index} className="text-[17px] text-gray-600 hover:text-black transition-colors duration-300">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      title: "Analytics",
      skills: ["Tableau • SQL • Power BI", "Data Visualization • Predictive Modeling", "KPI Dashboard Development"],
    },
    {
      title: "Systems",
      skills: ["Epic EHR • Salesforce • JIRA", "Process Optimization • UAT Coordination", "System Integration"],
    },
    {
      title: "Strategy",
      skills: ["Requirements Engineering • Stakeholder Management", "Change Management • Agile Leadership", "Digital Transformation"],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <FadeIn>
            <h2 className="text-center text-[48px] font-light text-[#1D1D1F] mb-20">Core Competencies</h2>
        </FadeIn>
        <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {expertiseAreas.map((area) => (
                <ExpertiseColumn key={area.title} title={area.title} skills={area.skills} />
            ))}
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Expertise;
