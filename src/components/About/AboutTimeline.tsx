import React from 'react';

export interface Milestone {
  year: string;
  event: string;
}

interface AboutTimelineProps {
  milestones: Milestone[];
}

const AboutTimeline: React.FC<AboutTimelineProps> = ({ milestones }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600">Key milestones in our growth story</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 relative">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full ${
                        index % 2 === 0 ? '-right-10' : '-left-10'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
