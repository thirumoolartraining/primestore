import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Award, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4">
              PRIMESTORE
            </div>
            <p className="text-gray-300 mb-4">
              Leading global distributor and exporter of premium school stationery products. 
              Serving international wholesalers with quality and reliability since 2015.
            </p>
            <div className="flex space-x-2">
              <Award className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-300">Quality Manufacturing</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/custom-book-covers" className="text-gray-300 hover:text-white transition-colors">Custom Book Covers</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/request-quote" className="text-gray-300 hover:text-white transition-colors">Request Quote</Link></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-orange-500" />
                Global Export
              </li>
              <li className="flex items-center">
                <Truck className="h-4 w-4 mr-2 text-orange-500" />
                Worldwide Shipping
              </li>
              <li className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-orange-500" />
                OEM Manufacturing
              </li>
              <li>Custom Packaging</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-gray-300">No: 5/41, Bunder Street</p>
                  <p className="text-gray-300">Kothwal Bazaar</p>
                  <p className="text-gray-300">Chennai - 600001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-gray-300">90031 76317</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-gray-300">info@primestore.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Primestore International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/shipping-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Shipping Policy
              </Link>
              <Link to="/cancellation-refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;