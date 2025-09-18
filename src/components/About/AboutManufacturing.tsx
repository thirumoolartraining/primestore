import React from 'react';
import { CheckCircle, Factory } from 'lucide-react';

type AboutManufacturingProps = Record<string, never>;

const highlights = [
  {
    title: 'Quality Management Systems',
    description: 'Comprehensive quality control processes ensure consistent product excellence'
  },
  {
    title: 'Advanced Equipment',
    description: 'Latest machinery for precision manufacturing and custom production'
  },
  {
    title: 'Skilled Workforce',
    description: 'Experienced team of 200+ professionals dedicated to quality craftsmanship'
  },
  {
    title: 'Capacity & Scalability',
    description: 'Production capacity of 1 million pieces per month with room for expansion'
  }
];

const AboutManufacturing: React.FC<AboutManufacturingProps> = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern manufacturing facility"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <Factory className="h-8 w-8" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art manufacturing facility spans 50,000 square feet and houses
              the latest production equipment and quality control systems.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutManufacturing;
