import React from 'react';
import { Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Your Privacy is Our Priority
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <p className="mb-8 text-gray-700">
            At Primestore.in, your privacy is of utmost importance. As a leading exporter of premium school stationery products, we are committed to protecting the personal and business information you share with us. Our data practices are designed with transparency, security, and compliance in mind, aligned with India's Information Technology Act and global data protection principles like the GDPR.
          </p>

          <p className="mb-8 text-gray-700">
            This Privacy Policy outlines what information we collect, how we use it, how we protect it, and your rights while interacting with our website, services, and international trade channels.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="mr-2 text-blue-600" />
              Information We Collect
            </h2>
            <p className="mb-4 text-gray-700">
              When you interact with our website, place an order, request a quote, or subscribe to our updates, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Company Name (for B2B clients)</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Shipping & Billing Address</li>
              <li>Tax ID/GST Information (for exporters or resellers)</li>
              <li>Payment Details (processed through secure third-party gateways)</li>
              <li>Order History & Purchase Preferences</li>
              <li>Device & Browser Information</li>
              <li>Cookies & Tracking Data (for website performance & analytics)</li>
            </ul>
            <p className="text-gray-700">
              We collect only the information necessary to provide you with a secure and personalized experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why We Collect Your Information</h2>
            <p className="mb-4 text-gray-700">
              Your data is collected for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Processing export and domestic orders</li>
              <li>Issuing commercial invoices and trade documentation</li>
              <li>Providing shipping and delivery updates</li>
              <li>Communicating offers, catalog releases, and policy changes (only with opt-in consent)</li>
              <li>Customizing your account and purchase preferences</li>
              <li>Managing distributor and wholesale relationships</li>
              <li>Analyzing website performance and product demand (in aggregated form)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="mr-2 text-blue-600" />
              How Your Information is Protected
            </h2>
            <p className="mb-4 text-gray-700">
              We apply robust data protection standards to ensure your information remains confidential and secure.
            </p>
            <p className="mb-4 font-semibold text-gray-800">Our safeguards include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-semibold">SSL Encryption:</span> All interactions on our website are protected using industry-standard Secure Sockets Layer (SSL).</li>
              <li><span className="font-semibold">Payment Security:</span> We do not store your payment details. Transactions are processed through verified, PCI-compliant third-party payment gateways.</li>
              <li><span className="font-semibold">Data Access Controls:</span> Access to sensitive data is restricted to authorized personnel only.</li>
              <li><span className="font-semibold">Server Security:</span> Our servers are firewall-protected and undergo regular security audits.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights & Choices</h2>
            <p className="mb-4 text-gray-700">
              You are in full control of your data. At any time, you may:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Request access to the data we hold about you</li>
              <li>Ask for updates or corrections</li>
              <li>Request deletion of your information (subject to legal and trade compliance obligations)</li>
              <li>Withdraw consent from marketing emails or newsletters</li>
              <li>Report concerns about misuse or data protection violations</li>
            </ul>
            <p className="text-gray-700">
              To exercise your rights, contact us at <a href="mailto:info@primestore.in" className="text-blue-600 hover:underline">info@primestore.in</a>. We aim to respond to requests within 30 days.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="mb-6 text-gray-700">
              If you have questions, suggestions, or concerns about this Privacy Policy or your data, please contact our Data Protection Officer:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-600" />
                  Our Location
                </h3>
                <p className="text-gray-700">
                  Primestore<br />
                  Attn: Data Protection Officer<br />
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
                  <a href="mailto:info@primestore.in" className="text-blue-600 hover:underline">info@primestore.in</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Phone className="mr-2 text-blue-600" />
                    Call Us
                  </h3>
                  <a href="tel:+919003176317" className="text-blue-600 hover:underline">+91 90031 76317</a>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-700">
              We take privacy concerns seriously and investigate all complaints. If you're unsatisfied with our response, you may approach your local data protection authority.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 mb-6">
              We may periodically update this Privacy Policy to reflect changes in legal requirements or our business operations. Any updates will be posted on this page with an updated "Last Revised" date.
            </p>
            <p className="text-gray-700 font-semibold">
              Last Revised: July 2025
            </p>
            <p className="mt-8 text-gray-700 italic">
              Thank you for choosing Primestore.in. We are honored to support your school stationery needs and are committed to keeping your information safe.
            </p>
            <p className="mt-4 text-gray-600">
              © 2025 Primestore. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
