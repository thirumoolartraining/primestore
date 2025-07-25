import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartSidebar: React.FC = () => {
  const { state, closeCart, updateQuantity, removeItem, getCartTotal } = useCart();

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
            <button
              onClick={closeCart}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={closeCart}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => {
                  const price = item.product.pricing.find(tier => 
                    item.quantity >= tier.minQuantity && 
                    (!tier.maxQuantity || item.quantity <= tier.maxQuantity)
                  )?.price || item.product.pricing[0].price;

                  return (
                    <div key={item.product.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ₹{price.toFixed(0)} each
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ₹{(price * item.quantity).toFixed(0)}
                        </p>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t px-6 py-4">
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Total:</span>
                <span>₹{getCartTotal().toFixed(0)}</span>
              </div>
              <div className="space-y-2">
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="w-full bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-center block hover:bg-gray-300 transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-center block hover:bg-blue-700 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;