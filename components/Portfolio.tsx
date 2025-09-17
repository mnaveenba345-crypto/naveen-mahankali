import React, { useState } from 'react';
import FadeIn from './shared/FadeIn';
import ProjectModal from './ProjectModal';

// Define the Project type for detailed view
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

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  overlayText: string;
  hoverText: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, overlayText, hoverText, delay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="group relative aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
          <div className="relative h-24">
              <div className="absolute bottom-0 left-0 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
                  <p className="text-lg md:text-xl mt-2 text-gray-200">{overlayText}</p>
              </div>
               <div className="absolute bottom-0 left-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-base md:text-lg text-[#D4AF37] font-semibold tracking-wider">{hoverText}</p>
              </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "USAA Authentication Renaissance",
      imageUrl: "https://picsum.photos/seed/usaa/1600/900",
      overlayText: "13M members. 99.5% uptime. Zero compromise.",
      hoverText: "Proxy Product Owner | $MM Investment | FFIEC Compliance",
      objective: "To modernize the multi-factor authentication system for 13 million members, enhancing security while ensuring a seamless user experience and meeting strict FFIEC compliance standards.",
      challenges: "The primary challenge was migrating a massive user base from a legacy system with zero downtime. We had to navigate complex regulatory requirements and integrate with multiple existing internal systems without disrupting service.",
      solution: "Led a cross-functional Agile team to develop and deploy a new, risk-based authentication platform. We implemented a phased rollout strategy, starting with a small pilot group and scaling up, gathering user feedback at each stage to refine the user flow and minimize friction.",
      outcomes: [
        "Achieved 99.9% system uptime during the entire migration period.",
        "Reduced average authentication time by 35%.",
        "Successfully passed all FFIEC regulatory audits with commendations for the robust security architecture.",
        "Increased user satisfaction with the login process by 25% based on post-implementation surveys."
      ],
    },
    {
      title: "Healthcare Transformation",
      imageUrl: "https://picsum.photos/seed/healthcare/1600/900",
      overlayText: "12 facilities. $2.8M savings. Lives improved.",
      hoverText: "Epic EHR Optimization | 150% Adoption Increase",
      objective: "To optimize the Epic Electronic Health Record (EHR) system across 12 healthcare facilities to improve clinical workflows, reduce administrative overhead, and enhance patient care quality.",
      challenges: "Clinician resistance to change was a major hurdle. The existing workflows were deeply ingrained, and the initial EHR implementation had low adoption rates due to a perceived increase in workload and complexity.",
      solution: "Conducted extensive stakeholder interviews and on-site observation sessions with doctors, nurses, and administrative staff. Based on this, I designed and spearheaded the implementation of customized workflows, smart-forms, and physician-friendly dashboards within Epic.",
      outcomes: [
        "Increased physician EHR adoption rate by 150% within six months.",
        "Generated $2.8M in annual operational savings through reduced charting time and streamlined billing processes.",
        "Decreased patient data entry errors by 40%, leading to improved patient safety.",
        "Received the 'Clinical Innovation Award' for the project's impact on care delivery."
      ],
    },
    {
      title: "Retail Revolution",
      imageUrl: "https://picsum.photos/seed/retail/1600/900",
      overlayText: "2,000 locations. 45% satisfaction lift. Frictionless.",
      hoverText: "CRM Redesign | Digital Transformation",
      objective: "To overhaul the customer relationship management (CRM) system for a national retail chain with 2,000 locations, aiming to create a single, unified view of the customer and enable personalized marketing campaigns.",
      challenges: "The existing data was fragmented across dozens of disparate systems, including POS, e-commerce, and loyalty program databases. There was no single source of truth for customer information, leading to inconsistent customer experiences.",
      solution: "I orchestrated a digital transformation initiative to migrate from the legacy CRM to a modern Salesforce platform. This involved leading the data mapping and migration process, a new business rules for customer data management, and coordinating user acceptance testing (UAT) with marketing and sales teams.",
      outcomes: [
        "Achieved a 360-degree customer view, integrating data from all touchpoints.",
        "Lifted customer satisfaction scores by 45% due to more personalized and consistent interactions.",
        "Enabled targeted marketing campaigns that increased customer lifetime value by 18%.",
        "Reduced call center handle times by 20% as agents had immediate access to complete customer histories."
      ],
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-[#F5F5F7]">
        <div className="max-w-screen-lg mx-auto px-6">
          <FadeIn>
            <h2 className="text-center text-[48px] font-light text-[#1D1D1F] mb-20">Selected Works</h2>
          </FadeIn>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
                role="button"
                aria-label={`View details for ${project.title}`}
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedProject(project)}
              >
                <ProjectCard {...project} delay={index * 200}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
};

export default Portfolio;