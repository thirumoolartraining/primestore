import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Mail, Phone } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for your wholesale order. We've received your request and our export team will process it shortly.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Order #{orderData.orderNumber}</h2>
                <p className="text-gray-600">Placed on {orderData.createdAt.toLocaleDateString()}</p>
                {orderData.paymentGateway && (
                  <p className="text-sm text-blue-600 mt-1">Payment Gateway: {orderData.paymentGateway}</p>
                )}
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">₹{orderData.total.toFixed(0)}</div>
                <div className="text-sm text-gray-600">Total Amount</div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {orderData.items.map((item: any) => {
                const price = item.product.pricing.find((tier: any) => 
                  item.quantity >= tier.minQuantity && 
                  (!tier.maxQuantity || item.quantity <= tier.maxQuantity)
                )?.price || item.product.pricing[0].price;

                return (
                  <div key={item.product.id} className="flex items-center gap-4 py-4 border-b last:border-b-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity} pieces</p>
                      <p className="text-sm text-gray-600">Unit Price: ₹{price.toFixed(0)}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        ₹{(price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{orderData.subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{orderData.shipping === 0 ? 'FREE' : `₹${orderData.shipping.toFixed(0)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span>₹{orderData.total.toFixed(0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Company Details</h4>
                <p className="text-gray-600">{orderData.shipping.companyName}</p>
                <p className="text-gray-600">{orderData.shipping.contactPerson}</p>
                <p className="text-gray-600">{orderData.shipping.email}</p>
                <p className="text-gray-600">{orderData.shipping.phone}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Shipping Address</h4>
                <p className="text-gray-600">{orderData.shipping.address}</p>
                <p className="text-gray-600">
                  {orderData.shipping.city}, {orderData.shipping.state} {orderData.shipping.postalCode}
                </p>
                <p className="text-gray-600">{orderData.shipping.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">What happens next?</h3>
          <div className="space-y-3 text-blue-800">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                1
              </div>
              <div>
                <div className="font-medium">Order Processing (1-2 business days)</div>
                <div className="text-sm">Our export team will review your order and prepare documentation</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                2
              </div>
              <div>
                <div className="font-medium">Production & Quality Check (3-7 business days)</div>
                <div className="text-sm">Products will be prepared and undergo quality inspection</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                3
              </div>
              <div>
                <div className="font-medium">Export Documentation & Shipping (2-3 business days)</div>
                <div className="text-sm">All export papers prepared and shipment dispatched</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our export team is ready to assist you with any questions about your order.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span>contact@theprimestores.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span>90031 76317</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            <Download className="h-5 w-5 mr-2" />
            Download Order Receipt
          </button>
          <Link
            to="/products"
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Contact Export Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;