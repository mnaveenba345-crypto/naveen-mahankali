import React from 'react';
import FadeIn from './shared/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-[48px] font-light text-[#1D1D1F] mb-8 text-center">About Me</h2>
            <div className="space-y-4 text-[17px] text-gray-600 leading-relaxed text-left">
              <p>
                I am a results-driven Business Analyst with a passion for bridging the gap between business needs and technology solutions. My journey began with a deep fascination for data and its power to tell stories, which led me to pursue a Master's in Business Analytics.
              </p>
              <p>
                With hands-on experience in high-stakes environments—from enhancing security for millions at USAA to optimizing clinical workflows in healthcare—I've honed my ability to dissect complex problems, engage with stakeholders at all levels, and deliver solutions that create tangible value.
              </p>
              <p>
                My approach is rooted in empathy and a relentless pursuit of clarity. I believe the most elegant solutions are born from a profound understanding of the people they serve. I thrive on translating intricate requirements into actionable strategies and driving projects from conception to successful implementation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
