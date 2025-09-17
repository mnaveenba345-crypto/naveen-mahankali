
import React from 'react';
import FadeIn from './shared/FadeIn';

interface MetricCardProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, delay = 0 }) => (
  <FadeIn delay={delay} className="group">
    <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2">
      <h3 className="text-[40px] md:text-[48px] font-light text-[#1D1D1F]">
        {value}
      </h3>
      <p className="text-sm md:text-base text-gray-500 mt-2 tracking-widest uppercase">
        {label}
      </p>
    </div>
  </FadeIn>
);


const Metrics: React.FC = () => {
  const metrics = [
    { value: "$6.5M+", label: "Value Created" },
    { value: "99.7%", label: "Precision Rate" },
    { value: "13M+", label: "Lives Improved" },
  ];

  return (
    <section id="metrics" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} value={metric.value} label={metric.label} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
