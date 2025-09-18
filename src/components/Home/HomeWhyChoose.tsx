import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

type HomeWhyChooseProps = Record<string, never>;

const benefits = [
  {
    title: 'Competitive Bulk Pricing',
    description: 'Volume discounts and transparent tier pricing for all products'
  },
  {
    title: 'Custom Manufacturing',
    description: 'OEM services and product customization to meet your specifications'
  },
  {
    title: 'Global Logistics',
    description: 'Established shipping networks and export documentation support'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control for all products'
  }
];

const HomeWhyChoose: React.FC<HomeWhyChooseProps> = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Primestore?</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing facility"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 font-semibold">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-600">From 500+ B2B clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChoose;
