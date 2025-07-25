import React from 'react';
import { Clock, AlertTriangle, RefreshCw, Mail, Phone, Clock as ClockIcon } from 'lucide-react';

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-blue-100">
              Clear Policies. Fair Support. Trusted Resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          <section>
            <p className="text-gray-700">
              At Primestore.in, we take pride in supplying high-quality, export-grade school stationery products. While we strive to ensure accurate and timely fulfillment, we recognize that certain situations may require cancellations, replacements, or refunds. This policy outlines our procedures for handling such cases with transparency and professionalism.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="mr-2 text-blue-600" />
              Order Cancellations
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Cancellation Window: Within 2 Hours of Order Confirmation
            </h3>
            <p className="text-gray-700 mb-4">
              You may cancel your order within 2 hours of placing it, provided the order has not yet been processed or dispatched.
            </p>
            <p className="text-gray-700 mb-4">
              After the order is packed or shipped, cancellations are not possible due to export and warehouse handling protocols.
            </p>
            <p className="text-gray-700 mb-2">
              To cancel an order:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Contact us via email or WhatsApp with your Order ID and cancellation reason</li>
              <li>For urgent changes or accidental orders, please reach out immediately for assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="mr-2 text-orange-500" />
              Damaged or Defective Goods
            </h2>
            <p className="text-gray-700 mb-4">
              Despite our quality assurance procedures, if your shipment arrives:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Visibly damaged in transit</li>
              <li>With manufacturing defects</li>
              <li>With packaging tampering or quantity mismatches</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Please notify us within 7 days of receipt.
            </p>
            <p className="text-gray-700 mb-2">
              To initiate a claim, kindly provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Your Order ID</li>
              <li>Photographs of the damage or issue</li>
              <li>A short description of the problem</li>
            </ul>
            <p className="text-gray-700 mb-2">
              Once verified, we will offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Replacement (if available)</li>
              <li>Store credit</li>
              <li>Refund (based on the situation and payment method)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <RefreshCw className="mr-2 text-blue-600" />
              Returns & Limitations
            </h2>
            <p className="text-gray-700 mb-4">
              As most orders are B2B, bulk, or custom-labeled, returns are typically not accepted unless there's a quality issue.
            </p>
            <p className="text-gray-700 mb-4">
              If you feel the received product does not meet the expected quality or description:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact our support team within 7 days of delivery</li>
              <li>Our team will assess the case and propose a suitable resolution</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              Please note: We do not accept returns for buyer's remorse or overstocked items.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bulk & Export Orders
            </h2>
            <p className="text-gray-700">
              Cancellation and refund terms for international buyers or bulk purchase orders are subject to the purchase agreement or pro forma invoice conditions. Contact our export support for clarification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Refund Processing
            </h2>
            <p className="text-gray-700 mb-4">
              For approved refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Processing will begin within 3–5 business days</li>
              <li>Refunds will be issued to the original payment method</li>
              <li>Bank or gateway processing may take an additional 5–10 business days</li>
            </ul>
            <p className="text-gray-700">
              You will receive a confirmation email or WhatsApp message once the refund is processed.
            </p>
          </section>

          <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Non-Refundable Situations
            </h2>
            <p className="text-gray-700 mb-4">
              Refunds or replacements will not be provided if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The request is made after the valid reporting period (7 days)</li>
              <li>The product was damaged after delivery due to improper handling or storage</li>
              <li>Custom or white-label goods are rejected without valid defect justification</li>
              <li>Delays occur due to customs or third-party logistics issues beyond our control</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Need Help?
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Our support team is available to assist you with refund-related concerns:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="text-blue-600" />
                </div>
                <a href="mailto:info@primestore.in" className="text-blue-600 hover:underline">info@primestore.in</a>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="text-blue-600" />
                </div>
                <a href="tel:+919003176317" className="text-blue-600 hover:underline">+91 90031 76317</a>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ClockIcon className="text-blue-600" />
                </div>
                <p className="text-gray-700">Business Hours: <span className="font-medium">Mon–Sat, 10 AM – 6 PM IST</span></p>
              </div>
            </div>
            
            <p className="mt-8 text-center text-gray-600">
              We're committed to resolving genuine concerns promptly and ensuring your continued confidence in sourcing from Primestore.in.
            </p>
            <p className="mt-4 text-center text-sm text-gray-500">
              © 2025 Primestore. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
