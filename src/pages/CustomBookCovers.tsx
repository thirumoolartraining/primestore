import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Palette, Ruler, Package, ArrowRight, CheckCircle } from 'lucide-react';

const CustomBookCovers: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('design');

  const customOptions = [
    {
      id: 'design',
      title: 'Custom Design Service',
      description: 'Our design team creates unique book covers based on your specifications',
      price: 'Starting from ₹20/piece',
      features: ['Professional graphic design', 'Multiple revision rounds', 'Print-ready files', 'Brand guidelines compliance']
    },
    {
      id: 'template',
      title: 'Template Customization',
      description: 'Choose from our library of pre-designed templates and customize them',
      price: 'Starting from ₹12/piece',
      features: ['200+ template designs', 'Logo and text customization', 'Color scheme adjustment', 'Quick turnaround time']
    },
    {
      id: 'upload',
      title: 'Print Your Design',
      description: 'Upload your own artwork and we\'ll handle the production',
      price: 'Starting from ₹10/piece',
      features: ['Print-ready file support', 'Quality assurance check', 'Various size options', 'Bulk quantity discounts']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Book Covers
                <span className="block text-orange-400">Made to Order</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional book cover printing and customization services for educational institutions, 
                publishers, and distributors worldwide.
              </p>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Custom book covers"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm">Book Covers Produced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Custom Option</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need complete design services or just printing, we have the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customOptions.map((option) => (
              <div
                key={option.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${
                  selectedOption === option.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                    {selectedOption === option.id && (
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-6">{option.price}</div>
                  
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Select Option
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Custom Process</h2>
            <p className="text-lg text-gray-600">From concept to delivery in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Submit Requirements</h3>
              <p className="text-gray-600">Share your design brief, specifications, and quantity requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Design & Approval</h3>
              <p className="text-gray-600">Our team creates designs for your review and approval</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Production</h3>
              <p className="text-gray-600">High-quality printing and finishing of your book covers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Global Delivery</h3>
              <p className="text-gray-600">Secure packaging and international shipping to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium Polypropylene (0.15mm - 0.25mm thickness)</li>
                  <li>• Laminated Paper (250gsm - 350gsm)</li>
                  <li>• Vinyl Coated Material (waterproof)</li>
                  <li>• Eco-friendly Recycled Materials</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Standard A4 (297 x 210mm)</li>
                  <li>• Standard A5 (210 x 148mm)</li>
                  <li>• US Letter (279 x 216mm)</li>
                  <li>• Custom sizes available</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Printing Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full-color offset printing</li>
                  <li>• Digital printing for small quantities</li>
                  <li>• Screen printing for large runs</li>
                  <li>• Special finishes (matte, gloss, UV coating)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & MOQ</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity Tiers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium">1,000 - 4,999 pieces</span>
                    <span className="text-blue-600 font-bold">₹20 - 28</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium">5,000 - 19,999 pieces</span>
                    <span className="text-blue-600 font-bold">₹14 - 20</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                    <span className="font-medium">20,000+ pieces</span>
                    <span className="text-blue-600 font-bold">₹10 - 14</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Prices vary based on design complexity, material, and finishing options
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Times</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Design Phase: 2-5 business days</li>
                  <li>• Sample Production: 3-7 business days</li>
                  <li>• Bulk Production: 7-14 business days</li>
                  <li>• International Shipping: 5-15 business days</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Need Samples?</h3>
                <p className="text-orange-800 mb-4">
                  Request physical samples before placing your bulk order. Sample cost refunded on orders over 5,000 pieces.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                  Request Samples
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
            <p className="text-lg text-gray-600">Examples of custom book covers we've created for clients worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image}
                  alt={`Custom book cover example ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Custom Book Covers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with a custom quote for your book cover project. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Request Custom Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600"
            >
              Speak with Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomBookCovers;