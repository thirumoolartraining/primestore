import React from 'react';

type AboutStatsProps = Record<string, never>;

const stats = [
  { value: '50+', label: 'Countries Served', color: 'text-blue-600' },
  { value: '500+', label: 'B2B Clients', color: 'text-orange-600' },
  { value: '1M+', label: 'Products Exported', color: 'text-green-600' },
  { value: '99.5%', label: 'Client Satisfaction', color: 'text-purple-600' }
];

const AboutStats: React.FC<AboutStatsProps> = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
