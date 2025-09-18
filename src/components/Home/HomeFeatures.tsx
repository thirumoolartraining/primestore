import React from 'react';
import { Globe, Award, Truck, Users } from 'lucide-react';

type HomeFeaturesProps = Record<string, never>;

const features = [
  {
    icon: Globe,
    title: 'Global Export',
    description: 'Shipping to 50+ countries with reliable logistics partners',
    background: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality control and testing procedures',
    background: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express shipping options and bulk order handling',
    background: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: Users,
    title: 'B2B Focus',
    description: 'Specialized service for wholesalers and distributors',
    background: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

const HomeFeatures: React.FC<HomeFeaturesProps> = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div
                  className={`${feature.background} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
