import React from 'react';
import { Link } from 'react-router-dom';

type HomeCTAProps = Record<string, never>;

const HomeCTA: React.FC<HomeCTAProps> = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Export Journey?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of international distributors who trust Primestore for their stationery needs.
          Get started with a custom quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/request-quote"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Get Custom Quote
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600"
          >
            Contact Export Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
