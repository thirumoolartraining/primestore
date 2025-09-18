import React from 'react';
import { Award, Globe, Users, Factory } from 'lucide-react';

type AboutCertificationsProps = Record<string, never>;

const certifications = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Comprehensive quality management systems for consistent excellence',
    iconColor: 'text-orange-600'
  },
  {
    icon: Globe,
    title: 'CE Marking',
    description: 'European Conformity marking for product safety and compliance',
    iconColor: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Ethical Manufacturing',
    description: 'Responsible manufacturing practices and ethical business standards',
    iconColor: 'text-green-600'
  },
  {
    icon: Factory,
    title: 'Advanced Manufacturing',
    description: 'Modern production facilities with latest technology and equipment',
    iconColor: 'text-purple-600'
  }
];

const AboutCertifications: React.FC<AboutCertificationsProps> = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-lg text-gray-600">Our commitment to quality is backed by international certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((certification) => {
            const IconComponent = certification.icon;
            return (
              <div key={certification.title} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <IconComponent className={`h-12 w-12 ${certification.iconColor} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{certification.title}</h3>
                <p className="text-sm text-gray-600">{certification.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
