import React, { useState } from 'react';
import { Upload, Calculator, FileText, Send, CheckCircle } from 'lucide-react';

const RequestQuote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    businessType: '',
    
    // Quote Requirements
    productCategory: '',
    productDetails: '',
    quantity: '',
    customization: false,
    customizationDetails: '',
    targetPrice: '',
    deadline: '',
    
    // Additional Information
    additionalRequirements: '',
    sampleRequest: false,
    businessLicense: null,
    portfolioFiles: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const files = e.target.files;
    if (files) {
      setFormData(prev => ({ ...prev, [fieldName]: files[0] }));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! Our export team will prepare a detailed proposal and contact you within 48 hours.');
  };

  const productCategories = [
    'Geometry Boxes & Math Sets',
    'Rulers & Measuring Tools',
    'Drawing Compasses',
    'Scented Clipboards',
    'Custom Book Covers',
    'Mixed Product Orders',
    'Custom Manufacturing (OEM)'
  ];

  const businessTypes = [
    'Wholesaler/Distributor',
    'Educational Institution',
    'Retail Chain',
    'Import/Export Company',
    'Government Agency',
    'Online Marketplace',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Custom Quote
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get a personalized quote for your wholesale stationery needs. Our export specialists 
              will prepare a detailed proposal tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-300'
              }`}>
                1
              </div>
              <span className={`ml-2 font-medium ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                Company Info
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 2 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-300'
              }`}>
                2
              </div>
              <span className={`ml-2 font-medium ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                Requirements
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep >= 3 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-300'
              }`}>
                3
              </div>
              <span className={`ml-2 font-medium ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                Review & Submit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
                  <p className="text-gray-600">Tell us about your business to help us provide the most accurate quote</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://www.yourcompany.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country *
                      </label>
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AU">Australia</option>
                        <option value="JP">Japan</option>
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="BR">Brazil</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Quote Requirements */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Quote Requirements</h2>
                  <p className="text-gray-600">Provide details about your product needs and specifications</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Category *
                    </label>
                    <select
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Product Category</option>
                      {productCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Details *
                    </label>
                    <textarea
                      name="productDetails"
                      required
                      rows={4}
                      value={formData.productDetails}
                      onChange={handleInputChange}
                      placeholder="Please describe the specific products you need, including sizes, materials, colors, and any technical specifications..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Quantity *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 5,000 pieces, 100 sets, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Unit Price (Optional)
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleInputChange}
                        placeholder="e.g., ₹400 INR per piece"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Order Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        name="customization"
                        id="customization"
                        checked={formData.customization}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="customization" className="ml-2 text-sm font-medium text-gray-700">
                        I need product customization (logo, colors, packaging, etc.)
                      </label>
                    </div>
                    
                    {formData.customization && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Customization Details
                        </label>
                        <textarea
                          name="customizationDetails"
                          rows={3}
                          value={formData.customizationDetails}
                          onChange={handleInputChange}
                          placeholder="Describe your customization requirements: logo placement, colors, packaging design, etc."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="sampleRequest"
                      id="sampleRequest"
                      checked={formData.sampleRequest}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="sampleRequest" className="ml-2 text-sm font-medium text-gray-700">
                      I would like to request samples before placing a bulk order
                    </label>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-200 text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Review & Submit</h2>
                  <p className="text-gray-600">Review your information and add any additional requirements</p>
                </div>

                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quote Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="mb-2">
                          <span className="font-medium">Company:</span> {formData.companyName}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Contact:</span> {formData.contactPerson}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Email:</span> {formData.email}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Country:</span> {formData.country}
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <span className="font-medium">Product Category:</span> {formData.productCategory}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Quantity:</span> {formData.quantity}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Customization:</span> {formData.customization ? 'Yes' : 'No'}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Samples:</span> {formData.sampleRequest ? 'Requested' : 'No'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements or Comments
                    </label>
                    <textarea
                      name="additionalRequirements"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      placeholder="Any additional information, special requirements, or questions you'd like to include..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div className="border rounded-lg p-4 bg-blue-50">
                    <div className="flex items-start">
                      <Upload className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium text-blue-900 mb-2">Upload Documents (Optional)</h4>
                        <p className="text-sm text-blue-800 mb-4">
                          Upload your business license, product catalogs, or reference images to help us better understand your needs.
                        </p>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-blue-900 mb-1">
                              Business License
                            </label>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleFileUpload(e, 'businessLicense')}
                              className="w-full text-sm text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-medium text-green-900 mb-2">What happens next?</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Our export team will review your requirements within 24 hours</li>
                          <li>• We'll prepare a detailed quote with pricing and specifications</li>
                          <li>• You'll receive the quote via email within 48-72 hours</li>
                          <li>• A dedicated account manager will be assigned to your project</li>
                          <li>• Samples can be arranged if requested</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-gray-200 text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Quote Request
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Request a Quote?</h2>
            <p className="text-lg text-gray-600">Get personalized pricing and service tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Pricing</h3>
              <p className="text-gray-600">Volume-based pricing tailored to your order quantities and requirements</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Proposal</h3>
              <p className="text-gray-600">Comprehensive proposal with specifications, timelines, and terms</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-gray-600">Professional guidance from our experienced export specialists</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Receive your custom quote within 48-72 hours of submission</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;