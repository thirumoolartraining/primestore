import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem, getCartTotal } = useCart();
  const [quantityMessages, setQuantityMessages] = useState<Record<string, string>>({});

  const getValidQuantity = (product: any, inputQuantity: number): number => {
    const increment = product.orderIncrement || 1;
    const minQuantity = product.moq;
    
    if (inputQuantity < minQuantity) {
      return minQuantity;
    }
    
    // Round up to nearest valid increment
    const remainder = (inputQuantity - minQuantity) % increment;
    if (remainder === 0) {
      return inputQuantity;
    }
    
    return inputQuantity + (increment - remainder);
  };

  const showQuantityMessage = (productId: string, message: string) => {
    setQuantityMessages(prev => ({ ...prev, [productId]: message }));
    setTimeout(() => {
      setQuantityMessages(prev => {
        const newMessages = { ...prev };
        delete newMessages[productId];
        return newMessages;
      });
    }, 3000);
  };

  const handleQuantityChange = (productId: string, product: any, newQuantity: number) => {
    const validQuantity = getValidQuantity(product, newQuantity);
    const increment = product.orderIncrement || 1;
    
    if (newQuantity < product.moq) {
      showQuantityMessage(productId, `Minimum order quantity is ${product.moq} pieces`);
    } else if (newQuantity !== validQuantity) {
      showQuantityMessage(productId, `Quantity adjusted to ${validQuantity} (must be in multiples of ${increment})`);
    }
    
    updateQuantity(productId, validQuantity);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Start building your wholesale order by browsing our product catalog
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 2500; // Free shipping over ₹50,000
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Order Items ({state.items.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {state.items.map((item) => {
                  const price = item.product.pricing.find(tier => 
                    item.quantity >= tier.minQuantity && 
                    (!tier.maxQuantity || item.quantity <= tier.maxQuantity)
                  )?.price || item.product.pricing[0].price;

                  return (
                    <div key={item.product.id} className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-24 object-cover rounded"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <Link
                            to={`/products/${item.product.slug}`}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-gray-600 mt-1">{item.product.material}</p>
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() => {
                                  const increment = item.product.orderIncrement || 1;
                                  const newQuantity = item.quantity - increment;
                                  handleQuantityChange(item.product.id, item.product, newQuantity);
                                }}
                                className="p-2 hover:bg-gray-50"
                                disabled={item.quantity <= item.product.moq}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => {
                                  const inputValue = parseInt(e.target.value) || item.product.moq;
                                  updateQuantity(item.product.id, inputValue);
                                }}
                                onBlur={(e) => {
                                  const inputValue = parseInt(e.target.value) || item.product.moq;
                                  handleQuantityChange(item.product.id, item.product, inputValue);
                                }}
                                min={item.product.moq}
                                className="w-20 px-2 py-2 text-center border-0 focus:ring-0"
                              />
                              <button
                                onClick={() => {
                                  const increment = item.product.orderIncrement || 1;
                                  const newQuantity = item.quantity + increment;
                                  handleQuantityChange(item.product.id, item.product, newQuantity);
                                }}
                                className="p-2 hover:bg-gray-50"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            {quantityMessages[item.product.id] && (
                              <div className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                {quantityMessages[item.product.id]}
                              </div>
                            )}
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-red-600 hover:text-red-800 flex items-center"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">
                            ₹{price.toFixed(0)} per piece
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            ₹{(price * item.quantity).toFixed(0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">₹{subtotal.toFixed(0)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'FREE' : `₹${shipping.toFixed(0)}`}
                  </span>
                </div>
                
                {shipping === 0 && (
                  <div className="text-sm text-green-600 font-medium">
                    🎉 Free international shipping on orders over ₹50,000
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>₹{total.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link
                  to="/checkout"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center block"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/request-quote"
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors text-center block"
                >
                  Request Custom Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Secure payment processing
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Global shipping available
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Quality assured products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;