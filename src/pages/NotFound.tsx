import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-200 mb-4">404</div>
          <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <p className="text-gray-500">
            The page may have been moved, deleted, or you may have entered an incorrect URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <Search className="h-5 w-5 mr-2" />
            Browse Products
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Product Catalog
            </Link>
            <Link
              to="/custom-book-covers"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Custom Book Covers
            </Link>
            <Link
              to="/request-quote"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Request Quote
            </Link>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="text-base font-medium text-blue-900 mb-2">Need Help?</h4>
          <p className="text-sm text-blue-800 mb-4">
            Can't find what you're looking for? Our export team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <div className="flex items-center text-blue-800">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:info@primestore.in" className="hover:underline">
                info@primestore.in
              </a>
            </div>
            <div className="flex items-center text-blue-800">
              <span className="font-medium mr-2">Phone:</span>
              <a href="tel:9003176317" className="hover:underline">
                90031 76317
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;