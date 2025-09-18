import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AboutValuesProps {
  values: ValueItem[];
}

const AboutValues: React.FC<AboutValuesProps> = ({ values }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
