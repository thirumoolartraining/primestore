import React from 'react';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 space-y-8">
          <p className="text-gray-700">
            Welcome to Primestore! By accessing and using our website www.primestore.in, you agree to comply with and be bound by the following Terms and Conditions. These terms govern all interactions, purchases, and services provided through our platform, especially concerning B2B and export transactions. Please read them carefully before using the site or placing an order.
          </p>
          
          <p className="text-gray-700 font-semibold">
            Continued use of this site signifies full acceptance of these terms. If you do not agree, please discontinue use immediately.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="mr-2 text-blue-600" />
              1. General Use of the Website
            </h2>
            <p className="mb-4 text-gray-700">
              By using this website, you confirm that you are:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>At least 18 years of age, or</li>
              <li>Accessing the site under the supervision of a parent or legal guardian.</li>
            </ul>
            <p className="text-gray-700">
              You agree to use the website for lawful business purposes only and in a way that does not infringe on the rights or restrict the usage of the site by others.
            </p>
            <p className="mt-2 text-gray-700">
              Primestore reserves the right to suspend, restrict, or terminate access to the website without notice or liability if misuse or breach of terms is detected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Listings, Pricing & Availability</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All product listings are subject to availability and may be updated or removed without prior notice.</li>
              <li>We strive for accuracy in product descriptions and visuals, though occasional errors may occur.</li>
              <li>Prices are shown in INR unless stated otherwise. Pricing may change based on market fluctuations, material costs, or export terms.</li>
              <li>Minimum Order Quantities (MOQs) apply to B2B and export transactions. Custom pricing is provided for bulk orders.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full payment is required at the time of placing the order unless prior credit terms are approved.</li>
              <li>Accepted payment methods include bank transfers, UPI, credit/debit cards, and verified export payment gateways.</li>
              <li>Primestore does not store payment data. All payments are securely processed via third-party platforms.</li>
              <li>In case of payment issues, please contact our billing support immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We offer domestic and international shipping through reputable logistics partners.</li>
              <li>Estimated delivery timelines will be shared based on order size, destination, and lead times.</li>
              <li>Tracking information will be provided upon dispatch.</li>
              <li>Any delays caused by customs, courier networks, or force majeure events are beyond our control. However, we will assist in coordination and resolution.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct & Responsibilities</h2>
            <p className="mb-4 text-gray-700">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Post unlawful, misleading, or offensive content</li>
              <li>Attempt unauthorized access to our systems or data</li>
              <li>Use the website or its contents for resale without written permission</li>
              <li>Engage in any activity that affects the website's performance or security</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Violations may result in restricted access or legal consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website—including logos, graphics, product designs, images, and text—is the intellectual property of Primestore.
            </p>
            <p className="mt-2 text-gray-700">
              Reproduction, redistribution, or commercial use without express written permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700">
              Primestore reserves the right to modify these Terms & Conditions at any time.
            </p>
            <p className="mt-2 text-gray-700">
              Updates will be reflected on this page with a revised date. Continued use of the website signifies acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              Under no circumstances shall Primestore, its directors, or affiliates be liable for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Indirect or consequential damages resulting from use of the site</li>
              <li>Order delays, product inaccuracies, or third-party service disruptions</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Your use of the website is at your own discretion and risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by the laws of India, with jurisdiction under the courts of Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
            <p className="mb-6 text-gray-700">
              For questions, concerns, or support, please contact us at:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-600" />
                  Our Location
                </h3>
                <p className="text-gray-700">
                  Primestore<br />
                  No: 5/41, Bunder Street,<br />
                  Kothwal Bazaar,<br />
                  Chennai - 600001
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Mail className="mr-2 text-blue-600" />
                    Email Us
                  </h3>
                  <a href="mailto:primestores0606@gmail.com" className="text-blue-600 hover:underline">primestores0606@gmail.com</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Phone className="mr-2 text-blue-600" />
                    Call Us
                  </h3>
                  <a href="tel:+919751358211" className="text-blue-600 hover:underline">+91 97513 58211</a>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-gray-700">
              We are committed to building transparent, secure, and efficient relationships with our global clients.
            </p>
            <p className="mt-4 text-center text-gray-600">
              © 2025 Primestore. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
