import React from 'react';
import { Link } from 'react-router-dom';

interface AboutHeroProps {
  imageUrl: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ imageUrl }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Primestore
              <span className="block text-orange-400">Global Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              For nearly a decade, we've been the trusted partner for international distributors
              seeking premium school stationery products. Our commitment to quality, innovation,
              and customer success drives everything we do.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt="Global Excellence in Stationery Manufacturing"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">9+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
