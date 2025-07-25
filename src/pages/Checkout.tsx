import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShippingInfo } from '../types';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { state, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [showOrderSuccessNotification, setShowOrderSuccessNotification] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    taxId: '',
    vatId: ''
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 2500;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (paymentGateway: string) => {
    // Create order
    const orderNumber = `PO-${Date.now()}`;
    const orderData = {
      items: state.items,
      shippingInfo,
      subtotal,
      shippingCost: shipping,
      total,
      orderNumber,
      createdAt: new Date(),
      paymentGateway
    };

    // Store order data (in real app, this would be an API call)
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Show notification first
    setShowOrderSuccessNotification(true);
    
    // After 3 seconds, clear cart and redirect
    setTimeout(() => {
      setShowOrderSuccessNotification(false);
      clearCart();
      navigate('/order-confirmation', { state: orderData });
    }, 3000);
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Order Success Notification */}
      {showOrderSuccessNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-green-500 font-bold">✓</span>
            </div>
            <span className="font-medium">Thank you for ordering! Our team will get in touch with you shortly</span>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step >= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
              }`}>
                1
              </div>
              <span className="ml-2 font-medium">Shipping Information</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step >= 2 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
              }`}>
                2
              </div>
              <span className="ml-2 font-medium">Review Order</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
                
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Company Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={shippingInfo.companyName}
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
                          value={shippingInfo.contactPerson}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={shippingInfo.email}
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
                          value={shippingInfo.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={shippingInfo.address}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={shippingInfo.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State/Province
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={shippingInfo.state}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Postal Code *
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            required
                            value={shippingInfo.postalCode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <select
                          name="country"
                          required
                          value={shippingInfo.country}
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
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Tax Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Tax Information (Optional)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tax ID
                        </label>
                        <input
                          type="text"
                          name="taxId"
                          value={shippingInfo.taxId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          VAT ID
                        </label>
                        <input
                          type="text"
                          name="vatId"
                          value={shippingInfo.vatId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Continue to Review
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {/* Order Review */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Review Your Order</h2>
                  
                  <div className="space-y-4">
                    {state.items.map((item) => {
                      const price = item.product.pricing.find(tier => 
                        item.quantity >= tier.minQuantity && 
                        (!tier.maxQuantity || item.quantity <= tier.maxQuantity)
                      )?.price || item.product.pricing[0].price;

                      return (
                        <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">${(price * item.quantity).toFixed(2)}</div>
                            <div className="font-medium">₹{(price * item.quantity).toFixed(0)}</div>
                            <div className="text-sm text-gray-600">₹{price.toFixed(0)} each</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Shipping Information Review */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Shipping Information</h2>
                    <button
                      onClick={() => setStep(1)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Company</h4>
                      <p>{shippingInfo.companyName}</p>
                      <p>{shippingInfo.contactPerson}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                      <p>{shippingInfo.email}</p>
                      <p>{shippingInfo.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Address</h4>
                      <p>{shippingInfo.address}</p>
                      <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}</p>
                      <p>{shippingInfo.country}</p>
                    </div>
                    {(shippingInfo.taxId || shippingInfo.vatId) && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Tax Information</h4>
                        {shippingInfo.taxId && <p>Tax ID: {shippingInfo.taxId}</p>}
                        {shippingInfo.vatId && <p>VAT ID: {shippingInfo.vatId}</p>}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-gray-200 text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSubmit('PayU')}
                      className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <span className="mr-2">💳</span>
                      Pay with PayU
                    </button>
                    <button
                      onClick={() => handleSubmit('Cashfree')}
                      className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors flex items-center"
                    >
                      <span className="mr-2">💰</span>
                      Pay with Cashfree
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                {state.items.map((item) => {
                  const price = item.product.pricing.find(tier => 
                    item.quantity >= tier.minQuantity && 
                    (!tier.maxQuantity || item.quantity <= tier.maxQuantity)
                  )?.price || item.product.pricing[0].price;

                  return (
                    <div key={item.product.id} className="flex justify-between">
                      <span>{item.product.name} x{item.quantity}</span>
                      <span>₹{(price * item.quantity).toFixed(0)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(0)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Payment Options</h4>
                <p className="text-sm text-blue-800">
                  Choose your preferred payment gateway in the final step. Both PayU and Cashfree offer secure payment processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;