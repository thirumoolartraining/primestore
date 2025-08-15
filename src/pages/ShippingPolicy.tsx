import React from 'react';
import { Truck, Clock, Box, Globe, Phone, Mail, MessageSquare } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shipping Policy
            </h1>
            <p className="text-xl text-blue-100">
              Global Delivery. Professionally Handled.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 space-y-12">
          <section>
            <p className="text-gray-700 mb-6">
              At Primestore.in, we specialize in exporting premium school stationery products worldwide. Our shipping process is designed to ensure secure packaging, on-time delivery, and clear visibility throughout your order's journey. This policy outlines our standard shipping practices for domestic and international clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="mr-2 text-blue-600" />
              Order Processing Time
            </h2>
            <p className="text-gray-700 mb-4">
              Once your order is confirmed and payment is received, we begin processing within 2 to 7 business days. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Quality checks</li>
              <li>Custom packing and labeling</li>
              <li>Export documentation preparation (for international orders)</li>
              <li>Coordination with our logistics partners</li>
            </ul>
            <p className="text-gray-700">
              Custom or high-volume orders may require extended preparation time. We'll notify you of any significant delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="mr-2 text-blue-600" />
              Shipping Destinations & Lead Times
            </h2>
            <p className="text-gray-700 mb-6">
              We ship across India and to 35+ countries worldwide through reliable freight and courier partners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Domestic Shipping (India):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Metro Cities: <span className="font-medium">3–6 business days</span> after dispatch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Non-Metro Areas: <span className="font-medium">5–10 business days</span> after dispatch</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">International Shipping:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Asia-Pacific, Middle East: <span className="font-medium">7–15 business days</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Europe & North America: <span className="font-medium">15–25 business days</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Other Regions: Varies based on customs and destination logistics</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              All delivery estimates are approximate and subject to change due to customs procedures, local holidays, or unforeseen events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck className="mr-2 text-blue-600" />
              Shipping Charges
            </h2>
            <p className="text-gray-700 mb-4">
              Shipping charges are calculated based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Delivery region</li>
              <li>Weight and dimensions of the shipment</li>
              <li>Order volume and mode of transport (air/sea/road freight)</li>
            </ul>
            <p className="text-gray-700">
              Applicable charges will be displayed during checkout or shared directly for B2B and export orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Box className="mr-2 text-blue-600" />
              Tracking & Notifications
            </h2>
            <p className="text-gray-700 mb-4">
              After dispatch, you will receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>A tracking number via email or WhatsApp</li>
              <li>Real-time tracking link for shipment updates</li>
              <li>Dedicated export coordination support for large shipments</li>
            </ul>
            <p className="text-gray-700">
              Please allow up to 48 hours after dispatch for tracking information to reflect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="mr-2 text-blue-600" />
              Delays & Special Cases
            </h2>
            <p className="text-gray-700 mb-4">
              While we aim for prompt delivery, certain situations may impact lead times:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Natural calamities or logistics disruptions</li>
              <li>Customs inspections or port congestion</li>
              <li>Export documentation holds</li>
              <li>Festive or seasonal demand surges</li>
            </ul>
            <p className="text-gray-700">
              In such cases, our team will provide timely updates and offer solutions wherever possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="mr-2 text-blue-600" />
              Export & B2B Logistics
            </h2>
            <p className="text-gray-700 mb-4">
              For international and wholesale clients, we offer end-to-end logistics support:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Commercial invoice & packing list preparation</li>
              <li>HS code tagging & export clearance</li>
              <li>FOB/CIF/CFR Incoterm-based shipping options</li>
              <li>Palletization and moisture-resistant packaging</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <MessageSquare className="mr-2 text-blue-600" />
              Need Help?
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Our support team is here to assist with shipping and logistics inquiries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="text-blue-600" />
                </div>
                <a href="mailto:primestores0606@gmail.com" className="text-blue-600 hover:underline">primestores0606@gmail.com</a>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="text-blue-600" />
                </div>
                <a href="tel:+919751358211" className="text-blue-600 hover:underline">+91 97513 58211</a>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-blue-600" />
                </div>
                <p className="text-gray-700">Live Chat: <span className="font-medium">Mon–Sat, 10 AM – 6 PM IST</span></p>
              </div>
            </div>
            
            <p className="mt-8 text-center text-gray-600">
              Thank you for partnering with Primestore.in. We're committed to making your sourcing experience reliable, transparent, and globally connected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
